/**
 * Picks the top score for a "best" label on the Lab home. It holds no data, so
 * the page script can import it too.
 */

/** A run needs this many people ratings before the Lab home can call it the best. */
export const MIN_VOTES_FOR_BEST = 3;

/**
 * Returns the top score and who holds it. When several entries share the top
 * score at one decimal, the label says how many tie instead of naming one.
 */
export function leader(entries: readonly { label: string; score: number }[]) {
  if (!entries.length) return null;
  const tenths = (score: number) => Math.round(score * 10);
  const top = Math.max(...entries.map(entry => tenths(entry.score)));
  const tied = entries.filter(entry => tenths(entry.score) === top);
  return { score: top / 10, label: tied.length === 1 ? tied[0].label : `${tied.length} tied` };
}
