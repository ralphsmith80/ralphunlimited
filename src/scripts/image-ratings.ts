import { ConvexClient } from 'convex/browser';
import { api } from '../../convex/_generated/api';

const forms = [...document.querySelectorAll<HTMLFormElement>('[data-image-vote]')];
const cells = [...document.querySelectorAll<HTMLElement>('[data-image-rating]')];
const runCells = [...document.querySelectorAll<HTMLElement>('[data-run-rating]')];
const url = import.meta.env.PUBLIC_CONVEX_URL;
const unavailable = () => {
  for (const cell of [...cells, ...runCells]) cell.textContent = 'Ratings unavailable';
  for (const node of document.querySelectorAll('[data-ratings-status], [data-vote-status]')) node.textContent = 'Ratings are unavailable. Please try again later.';
  for (const form of forms) form.querySelector('fieldset')!.disabled = true;
};
if (!url) unavailable();
else {
  const client = new ConvexClient(url);
  const stop = client.onUpdate(api.votes.imageRatings, {}, ratings => {
    for (const cell of cells) {
      const rating = ratings[cell.dataset.imageRating!];
      cell.textContent = rating?.count ? `${rating.overall.toFixed(1)} / 5 · ${rating.count} votes` : 'No ratings yet';
    }
    // Missing outputs have no vote form, so a run's visitor mean covers the images it produced.
    // The objective score already gives a missing output 0 / 100.
    for (const cell of runCells) {
      const prompts = cell.dataset.ratedPrompts!.split(' ').filter(Boolean);
      const scores = prompts.map(id => ratings[`${cell.dataset.runRating}/${id}`]).filter(r => r?.count);
      cell.textContent = !prompts.length ? 'No images to rate'
        : scores.length === prompts.length ? `${(scores.reduce((sum, r) => sum + r.overall, 0) / scores.length).toFixed(1)} / 5`
        : `Unscored · ${scores.length}/${prompts.length} images rated`;
    }
    for (const form of forms) {
      const rating = ratings[`${form.dataset.run}/${form.dataset.prompt}`];
      for (const axis of ['quality', 'adherence', 'fidelity'] as const) {
        const node = form.querySelector(`[data-axis-average="${axis}"]`)!;
        node.textContent = rating?.count ? `Average ${rating[axis].toFixed(1)} / 5` : 'Unscored';
      }
      if (form.dataset.saving !== 'true') form.querySelector('fieldset')!.disabled = false;
      const status = form.querySelector('[data-vote-status]')!;
      if (status.textContent === 'Connecting to ratings') status.textContent = 'Ready to rate';
    }
  }, unavailable);
  for (const form of forms) form.addEventListener('submit', async event => {
    event.preventDefault();
    if (form.dataset.saving === 'true' || !form.reportValidity()) return;
    const fields = new FormData(form);
    const fieldset = form.querySelector('fieldset')!;
    const status = form.querySelector('[data-vote-status]')!;
    form.dataset.saving = 'true'; fieldset.disabled = true;
    status.textContent = 'Saving rating';
    try {
      let voterId = localStorage.getItem('lab-voter-id');
      if (!voterId) { voterId = crypto.randomUUID(); localStorage.setItem('lab-voter-id', voterId); }
      await client.mutation(api.votes.castImageVote, {
        runSlug: form.dataset.run!, promptId: form.dataset.prompt!, voterId,
        quality: Number(fields.get('quality')), adherence: Number(fields.get('adherence')), fidelity: Number(fields.get('fidelity')),
      });
      status.textContent = 'Rating saved. Submit again to update it.';
    } catch {
      status.textContent = 'Could not save your rating. Your choices are still here; try again.';
    } finally { form.dataset.saving = 'false'; fieldset.disabled = false; }
  });
  // A cached page resumes this same client when Back restores it.
  window.addEventListener('pagehide', event => {
    if (!event.persisted) { stop(); void client.close(); }
  });
}
