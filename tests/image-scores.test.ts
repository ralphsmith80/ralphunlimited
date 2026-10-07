import { expect, it } from 'vitest';
import { orderEntries, visitorScore, type CompareEntry } from '../src/lib/image-scores';

const rating = (overall: number, count = 1) => ({ count, quality: overall, adherence: overall, fidelity: overall, overall });

it('gives a run no visitor score until every image it produced is rated', () => {
  const ratings = { 'run/a': rating(4, 2) };
  expect(visitorScore(ratings, 'run', ['a', 'b'])).toEqual({ score: null, rated: 1, total: 2, votes: 2 });
  // A missing output is not in the produced list, so it does not block the score.
  expect(visitorScore({ ...ratings, 'run/b': rating(3) }, 'run', ['a', 'b'])).toEqual({ score: 3.5, rated: 2, total: 2, votes: 3 });
});

it('orders by visitor score with unscored entries last, and by the other keys', () => {
  const entry = (slug: string, visitors: number | null, checks: number, ranAt: string): CompareEntry =>
    ({ slug, model: slug, ranAt, checks, visitors });
  const entries = [entry('b', null, 100, '2026-10-03'), entry('c', 3.9, 70, '2026-10-01'), entry('a', 4.2, 100, '2026-10-02')];
  expect(orderEntries(entries, 'visitors').map(e => e.slug)).toEqual(['a', 'c', 'b']);
  expect(orderEntries(entries, 'checks').map(e => e.slug)).toEqual(['a', 'b', 'c']);
  expect(orderEntries(entries, 'newest').map(e => e.slug)).toEqual(['b', 'a', 'c']);
  expect(orderEntries(entries, 'name').map(e => e.slug)).toEqual(['a', 'b', 'c']);
});
