import { imageKey } from '../lib/image-scores';
import { saveImageVote, watchImageRatings } from './image-ratings';

const AXES = ['quality', 'adherence', 'fidelity'] as const;
type Axis = (typeof AXES)[number];

/**
 * Drives the rating panel on one image page: live averages in the score pair
 * and each row, star picking, and saving. Same flow as rating a game build,
 * without the play gate.
 */
export function startImageVote() {
  const root = document.querySelector<HTMLElement>('[data-image-detail]');
  if (!root) return;
  const runSlug = root.dataset.run!, promptId = root.dataset.prompt!;
  const value = root.querySelector('[data-human-value]')!;
  const sub = root.querySelector('[data-human-sub]')!;
  const submit = root.querySelector<HTMLButtonElement>('[data-submit]');
  const status = root.querySelector('[data-vote-status]');
  const picks: Partial<Record<Axis, number>> = {};
  let saving = false;
  const ready = () => AXES.every(axis => picks[axis]);

  watchImageRatings(ratings => {
    const rating = ratings[imageKey(runSlug, promptId)];
    value.textContent = rating?.count ? rating.overall.toFixed(1) : '–';
    if (submit) sub.textContent = rating?.count ? `${rating.count} visitor rating${rating.count === 1 ? '' : 's'} · live` : 'no ratings yet';
    for (const axis of AXES) {
      const cell = root.querySelector(`[data-axis="${axis}"] [data-avg]`);
      if (cell) cell.innerHTML = rating?.count ? `avg <b>${rating[axis].toFixed(1)}</b>` : '–';
    }
  }, () => {
    sub.textContent = 'ratings unavailable';
    if (submit) submit.disabled = true;
    if (status) status.textContent = 'Ratings are unavailable right now. Please try again later.';
  });

  if (!submit || !status) return;
  for (const row of root.querySelectorAll<HTMLElement>('[data-axis]')) {
    const axis = row.dataset.axis as Axis;
    for (const star of row.querySelectorAll<HTMLElement>('.star')) {
      star.addEventListener('click', () => {
        picks[axis] = Number(star.dataset.value);
        for (const sibling of row.querySelectorAll<HTMLElement>('.star')) {
          sibling.dataset.on = String(Number(sibling.dataset.value) <= picks[axis]!);
        }
        submit.disabled = saving || !ready();
      });
    }
  }
  submit.addEventListener('click', async () => {
    if (saving || !ready()) return;
    saving = true;
    submit.disabled = true;
    status.textContent = 'Saving your rating';
    try {
      await saveImageVote({ runSlug, promptId, quality: picks.quality!, adherence: picks.adherence!, fidelity: picks.fidelity! });
      status.textContent = 'Rating saved. Rate again any time to change it.';
    } catch {
      status.textContent = 'Could not save your rating. Your choices are still here; try again.';
    } finally {
      saving = false;
      submit.disabled = !ready();
    }
  });
}
