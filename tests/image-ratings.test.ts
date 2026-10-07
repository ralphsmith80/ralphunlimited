// @vitest-environment happy-dom
import { beforeEach, expect, it, vi } from 'vitest';
import type { ImageRatings } from '../src/lib/image-scores';
const mocks = vi.hoisted(() => ({
  mutation: vi.fn(), close: vi.fn(),
  update: null as null | ((ratings: ImageRatings) => void), failure: null as null | (() => void),
}));
vi.mock('convex/browser', () => ({ ConvexClient: class {
  onUpdate(_api: unknown, _args: unknown, update: typeof mocks.update, failure: typeof mocks.failure) { mocks.update = update; mocks.failure = failure; return () => {}; }
  mutation = mocks.mutation;
  close = mocks.close;
} }));

const run = 'image-0123456789abcdef01234567';
const other = 'image-fedcba9876543210fedcba98';
const rating = (overall: number, count = 1) => ({ count, quality: overall, adherence: overall, fidelity: overall, overall });
const rows = ['quality', 'adherence', 'fidelity'].map(axis => `<div class="vrow" data-axis="${axis}">${[1, 2, 3, 4, 5].map(v => `<button class="star" data-value="${v}"></button>`).join('')}<span data-avg></span></div>`).join('');
const pick = (axis: string, value: number) => document.querySelector<HTMLElement>(`[data-axis="${axis}"] [data-value="${value}"]`)!.click();

beforeEach(() => {
  vi.resetModules(); vi.stubEnv('PUBLIC_CONVEX_URL', 'https://fixture.convex.cloud');
  mocks.mutation.mockReset(); mocks.close.mockClear(); localStorage.clear();
});

const voteFixture = () => {
  document.body.innerHTML = `<aside data-image-detail data-run="${run}" data-prompt="same-kettle"><span data-human-value></span><span data-human-sub></span>${rows}<button data-submit disabled>Save</button><p data-vote-status></p></aside>`;
};

it('saves all three axes, blocks double saves, and lets a failed save retry', async () => {
  voteFixture();
  (await import('../src/scripts/image-vote')).startImageVote();
  mocks.update!({});
  const submit = document.querySelector<HTMLButtonElement>('[data-submit]')!;
  pick('quality', 4); pick('adherence', 4);
  expect(submit.disabled).toBe(true);
  pick('fidelity', 3);
  expect(submit.disabled).toBe(false);

  let rejectSave: (error: Error) => void = () => {};
  mocks.mutation.mockImplementationOnce(() => new Promise((_resolve, reject) => { rejectSave = reject; }));
  submit.click(); submit.click();
  expect(mocks.mutation).toHaveBeenCalledTimes(1);
  expect(mocks.mutation.mock.calls[0][1]).toMatchObject({ runSlug: run, promptId: 'same-kettle', quality: 4, adherence: 4, fidelity: 3 });
  rejectSave(new Error('offline'));
  await vi.waitFor(() => expect(submit.disabled).toBe(false));
  expect(document.body.textContent).toContain('try again');

  mocks.mutation.mockResolvedValue(undefined);
  submit.click();
  await vi.waitFor(() => expect(document.body.textContent).toContain('Rating saved'));
});

it('shows live averages, and disables saving when ratings are unavailable', async () => {
  voteFixture();
  (await import('../src/scripts/image-vote')).startImageVote();
  mocks.update!({ [`${run}/same-kettle`]: rating(4.25, 2) });
  expect(document.querySelector('[data-human-value]')!.textContent).toBe('4.3');
  expect(document.querySelector('[data-human-sub]')!.textContent).toBe('2 visitor ratings · live');
  mocks.failure!();
  expect(document.querySelector<HTMLButtonElement>('[data-submit]')!.disabled).toBe(true);
  expect(document.body.textContent).toContain('unavailable');
});

it('keeps its client alive when browser Back can restore the cached page', async () => {
  await import('../src/scripts/image-ratings');
  const event = new Event('pagehide');
  Object.defineProperty(event, 'persisted', { value: true });
  window.dispatchEvent(event);
  expect(mocks.close).not.toHaveBeenCalled();
});

it('puts the best image first in each brief, and hides models the visitor turns off', async () => {
  const data = { prompts: ['same-kettle'], runs: [
    { slug: run, model: 'alpha', ranAt: '2026-10-01T00:00:00Z', checks: 100, produced: ['same-kettle'], images: { 'same-kettle': 100 } },
    { slug: other, model: 'beta', ranAt: '2026-10-02T00:00:00Z', checks: 100, produced: ['same-kettle'], images: { 'same-kettle': 100 } },
  ] };
  const cells = (tag: string) => data.runs.map(r => `<${tag} data-run="${r.slug}"><span data-human-value></span><span data-human-sub></span><span data-crown></span><span data-rank></span><span data-image-rating="${r.slug}/same-kettle"></span></${tag}>`).join('');
  document.body.innerHTML = `<section data-compare>
    <button data-sort="visitors"></button><button data-columns="model"></button><button data-columns="best"></button>
    <button data-model="${run}" aria-pressed="true"></button><button data-model="${other}" aria-pressed="true"></button>
    <span data-position></span><button data-step="-1"></button><button data-step="1"></button>
    <div data-head><div data-track>${cells('div')}</div></div>
    <div data-prompt="same-kettle"><div data-track>${cells('a')}</div></div>
  </section><script type="application/json" id="compare-data">${JSON.stringify(data)}</script>`;
  (await import('../src/scripts/image-compare')).startCompare();
  const order = () => [...document.querySelectorAll<HTMLElement>('[data-prompt] [data-run]')].filter(t => !t.hidden).map(t => t.dataset.run);

  mocks.update!({ [`${run}/same-kettle`]: rating(3), [`${other}/same-kettle`]: rating(4.5, 3) });
  document.querySelector<HTMLElement>('[data-columns="best"]')!.click();
  expect(order()).toEqual([other, run]);
  expect(document.querySelector(`[data-prompt] [data-run="${other}"] [data-rank]`)!.textContent).toBe('#1');
  expect(document.querySelector(`[data-prompt] [data-run="${other}"] [data-image-rating]`)!.textContent).toBe('★ 4.5 · 3 votes');

  document.querySelector<HTMLElement>(`[data-model="${other}"]`)!.click();
  expect(order()).toEqual([run]);
  // The last model on screen cannot be turned off.
  document.querySelector<HTMLElement>(`[data-model="${run}"]`)!.click();
  expect(order()).toEqual([run]);
});
