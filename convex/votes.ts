import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import { imageLab } from "../src/lib/image-lab";

const SLUG = /^[a-z0-9][a-z0-9.-]{0,80}$/;

function assertStars(value: number, label: string) {
	if (!Number.isInteger(value) || value < 1 || value > 5) {
		throw new Error(`${label} must be an integer from 1 to 5`);
	}
}

/**
 * Records or updates one browser's rating of one run. The play-a-minute gate is
 * enforced client-side; this is a personal blog's guestbook, not a ballot box,
 * and the server only insists the shape is sane.
 */
export const castVote = mutation({
	args: {
		benchId: v.string(),
		runSlug: v.string(),
		voterId: v.string(),
		fun: v.number(),
		depth: v.number(),
		polish: v.number(),
	},
	handler: async (ctx, args) => {
		if (!SLUG.test(args.benchId) || !SLUG.test(args.runSlug)) throw new Error("unknown run");
		if (!/^[a-f0-9-]{16,64}$/.test(args.voterId)) throw new Error("bad voter id");
		assertStars(args.fun, "fun");
		assertStars(args.depth, "depth");
		assertStars(args.polish, "polish");

		const existing = await ctx.db
			.query("votes")
			.withIndex("by_run_voter", (q) =>
				q.eq("benchId", args.benchId).eq("runSlug", args.runSlug).eq("voterId", args.voterId),
			)
			.unique();

		const row = {
			benchId: args.benchId,
			runSlug: args.runSlug,
			voterId: args.voterId,
			fun: args.fun,
			depth: args.depth,
			polish: args.polish,
			updatedAt: Date.now(),
		};
		if (existing) await ctx.db.patch(existing._id, row);
		else await ctx.db.insert("votes", row);
	},
});

type Aggregate = { count: number; fun: number; depth: number; polish: number; overall: number };

function aggregate(rows: { fun: number; depth: number; polish: number }[]): Aggregate {
	const count = rows.length;
	if (count === 0) return { count: 0, fun: 0, depth: 0, polish: 0, overall: 0 };
	const mean = (pick: (r: (typeof rows)[number]) => number) =>
		Math.round((rows.reduce((sum, row) => sum + pick(row), 0) / count) * 10) / 10;
	const fun = mean((r) => r.fun);
	const depth = mean((r) => r.depth);
	const polish = mean((r) => r.polish);
	return { count, fun, depth, polish, overall: Math.round(((fun + depth + polish) / 3) * 10) / 10 };
}

/** Live averages for one run's rating panel. */
export const runRatings = query({
	args: { benchId: v.string(), runSlug: v.string() },
	handler: async (ctx, args) => {
		const rows = await ctx.db
			.query("votes")
			.withIndex("by_run", (q) => q.eq("benchId", args.benchId).eq("runSlug", args.runSlug))
			.collect();
		return aggregate(rows);
	},
});

/** Averages for every rated run, keyed "benchId/runSlug" — feeds the standings toggle. */
export const allRatings = query({
	args: {},
	handler: async (ctx) => {
		const rows = await ctx.db.query("votes").collect();
		const byRun = new Map<string, typeof rows>();
		for (const row of rows) {
			const key = `${row.benchId}/${row.runSlug}`;
			const bucket = byRun.get(key);
			if (bucket) bucket.push(row);
			else byRun.set(key, [row]);
		}
		return Object.fromEntries([...byRun.entries()].map(([key, bucket]) => [key, aggregate(bucket)]));
	},
});

// Images that exist and can be rated, keyed "runSlug/promptId". Data comes from the published catalog.
const RATEABLE_IMAGES = new Set(imageLab.runs.flatMap(run =>
  run.images.filter(image => image.file !== null).map(image => `${run.slug}/${image.promptId}`)));

/** Same anonymous guestbook policy as games. A repeat vote updates one image. */
export const castImageVote = mutation({
  args: {
    runSlug: v.string(), promptId: v.string(), voterId: v.string(),
    quality: v.number(), adherence: v.number(), fidelity: v.number(),
  },
  handler: async (ctx, args) => {
    if (!/^image-[a-f0-9]{24}$/.test(args.runSlug) || !RATEABLE_IMAGES.has(`${args.runSlug}/${args.promptId}`)) throw new Error("Unknown image");
    if (!/^[a-f0-9-]{16,64}$/.test(args.voterId)) throw new Error("Bad voter id");
    assertStars(args.quality, "quality"); assertStars(args.adherence, "adherence"); assertStars(args.fidelity, "fidelity");
    const existing = await ctx.db.query("imageVotes").withIndex("by_image_voter", (q) =>
      q.eq("runSlug", args.runSlug).eq("promptId", args.promptId).eq("voterId", args.voterId)).unique();
    const row = { ...args, updatedAt: Date.now() };
    if (existing) await ctx.db.patch(existing._id, row);
    else await ctx.db.insert("imageVotes", row);

    // A changed vote swaps its old scores for the new ones; a first vote adds one to the count.
    const totals = await ctx.db.query("imageRatingTotals").withIndex("by_image", (q) =>
      q.eq("runSlug", args.runSlug).eq("promptId", args.promptId)).unique();
    const before = totals ?? { count: 0, quality: 0, adherence: 0, fidelity: 0 };
    const next = {
      runSlug: args.runSlug, promptId: args.promptId,
      count: before.count + (existing ? 0 : 1),
      quality: before.quality - (existing?.quality ?? 0) + args.quality,
      adherence: before.adherence - (existing?.adherence ?? 0) + args.adherence,
      fidelity: before.fidelity - (existing?.fidelity ?? 0) + args.fidelity,
    };
    if (totals) await ctx.db.patch(totals._id, next);
    else await ctx.db.insert("imageRatingTotals", next);
  },
});

/** Mean scores for every rated image, keyed "runSlug/promptId". Reads one totals row per image. */
export const imageRatings = query({
  args: {},
  handler: async (ctx) => {
    const rows = await ctx.db.query("imageRatingTotals").collect();
    return Object.fromEntries(rows.map(row => {
      const { count } = row;
      const quality = row.quality / count, adherence = row.adherence / count, fidelity = row.fidelity / count;
      return [`${row.runSlug}/${row.promptId}`, { count, quality, adherence, fidelity, overall: (quality + adherence + fidelity) / 3 }];
    }));
  },
});
