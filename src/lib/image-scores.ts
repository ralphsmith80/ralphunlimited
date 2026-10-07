/**
 * Visitor score math for the image lab. It holds no catalog data, so browser
 * scripts can import it without bundling `image-lab.json`.
 */
import type { compareData } from './image-lab';

/** Live visitor averages for one image, as returned by `votes.imageRatings`. */
export type ImageRating = { count: number; quality: number; adherence: number; fidelity: number; overall: number };
/** Every rated image, keyed by `imageKey`. Unrated images have no entry. */
export type ImageRatings = Partial<Record<string, ImageRating>>;
export const imageKey = (runSlug: string, promptId: string) => `${runSlug}/${promptId}`;

/**
 * A run's visitor score is the mean over the images it produced. It has no score
 * until every one of those images has a rating, so a single early vote cannot
 * rank a run.
 */
export function visitorScore(ratings: ImageRatings, runSlug: string, promptIds: readonly string[]) {
  const scores = promptIds.flatMap(id => {
    const rating = ratings[imageKey(runSlug, id)];
    return rating?.count ? [rating.overall] : [];
  });
  const votes = promptIds.reduce((sum, id) => sum + (ratings[imageKey(runSlug, id)]?.count ?? 0), 0);
  const score = scores.length && scores.length === promptIds.length
    ? scores.reduce((sum, value) => sum + value, 0) / scores.length : null;
  return { score, rated: scores.length, total: promptIds.length, votes };
}

export type CompareSort = 'visitors' | 'checks' | 'newest' | 'name';
/** One column in the compare view: a whole run, or one run's image for one brief. */
export type CompareEntry = { slug: string; model: string; ranAt: string; checks: number; visitors: number | null };

const byKey: Record<CompareSort, (a: CompareEntry, b: CompareEntry) => number> = {
  // Unscored entries go last; among them, keep the checks order.
  visitors: (a, b) => (b.visitors ?? -1) - (a.visitors ?? -1) || b.checks - a.checks,
  checks: (a, b) => b.checks - a.checks || (b.visitors ?? -1) - (a.visitors ?? -1),
  newest: (a, b) => Date.parse(b.ranAt) - Date.parse(a.ranAt),
  name: (a, b) => a.model.localeCompare(b.model),
};

/** Orders compare columns best first. Ties fall back to the model name so the order is stable. */
export const orderEntries = <T extends CompareEntry>(entries: readonly T[], sort: CompareSort) =>
  [...entries].sort((a, b) => byKey[sort](a, b) || a.model.localeCompare(b.model) || a.slug.localeCompare(b.slug));

/** What the compare view's script receives as JSON. */
export type CompareData = ReturnType<typeof compareData>;
