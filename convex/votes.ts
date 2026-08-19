import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

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
