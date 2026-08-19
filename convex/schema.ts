import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

/**
 * Player ratings for lab runs. One row per (run, voter); re-rating updates the
 * row rather than adding another. The harness score is deliberately not here:
 * it is a pure function of recorded signals and lives in the site's lab.json.
 * This table holds the half of judgment machines cannot do.
 */
export default defineSchema({
	votes: defineTable({
		benchId: v.string(),
		runSlug: v.string(),
		/** Anonymous per-browser id, generated client-side and kept in localStorage. */
		voterId: v.string(),
		fun: v.number(),
		depth: v.number(),
		polish: v.number(),
		updatedAt: v.number(),
	})
		.index("by_run", ["benchId", "runSlug"])
		.index("by_run_voter", ["benchId", "runSlug", "voterId"]),
});
