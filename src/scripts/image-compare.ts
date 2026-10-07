import {
  imageKey, orderEntries, visitorScore,
  type CompareData, type CompareEntry, type CompareSort, type ImageRatings,
} from '../lib/image-scores';
import { watchImageRatings } from './image-ratings';

type Columns = 'model' | 'best';
const one = (value: number) => value.toFixed(1);
const plural = (count: number, word: string) => `${count} ${word}${count === 1 ? '' : 's'}`;

/**
 * Drives the image compare view. Rows are briefs and columns are models. Every
 * row scrolls as one carousel, so a column stays one model. "Best first in each
 * brief" sorts each row on its own, and the tiles keep their model name.
 */
export function startCompare() {
  const root = document.querySelector<HTMLElement>('[data-compare]');
  const source = document.getElementById('compare-data');
  if (!root || !source?.textContent) return;
  const data = JSON.parse(source.textContent) as CompareData;
  if (!data.runs.length) return;

  const state = { sort: 'visitors' as CompareSort, columns: 'model' as Columns, hidden: new Set<string>() };
  let ratings: ImageRatings = {};
  const head = root.querySelector<HTMLElement>('[data-head]')!;
  const tracks = [...root.querySelectorAll<HTMLElement>('[data-track]')];
  const position = root.querySelector<HTMLElement>('[data-position]')!;
  const [prev, next] = root.querySelectorAll<HTMLButtonElement>('[data-step]');

  const runEntry = (run: CompareData['runs'][number]): CompareEntry =>
    ({ ...run, visitors: visitorScore(ratings, run.slug, run.produced).score });
  const imageEntry = (run: CompareData['runs'][number], promptId: string): CompareEntry => {
    const rating = ratings[imageKey(run.slug, promptId)];
    return { ...run, checks: run.images[promptId] ?? 0, visitors: rating?.count ? rating.overall : null };
  };

  // Moves the tiles in DOM order, so keyboard order matches what is on screen.
  // Moving a focused tile drops its focus, so put focus back afterwards.
  const arrange = (track: HTMLElement, slugs: string[]) => {
    const cells = [...track.querySelectorAll<HTMLElement>(':scope > [data-run]')];
    for (const cell of cells) cell.hidden = state.hidden.has(cell.dataset.run!);
    const visible = cells.filter(cell => !cell.hidden).map(cell => cell.dataset.run);
    if (visible.join(' ') === slugs.join(' ')) return;
    const focused = document.activeElement instanceof HTMLElement && track.contains(document.activeElement)
      ? document.activeElement : null;
    for (const slug of slugs) {
      const cell = track.querySelector<HTMLElement>(`:scope > [data-run="${slug}"]`);
      if (cell) track.append(cell);
    }
    focused?.focus({ preventScroll: true });
  };

  // Reordering moves columns, so only a visitor's own action or the first ratings
  // load does it. Later live updates refresh the scores and marks in place, so a
  // column never changes under someone who is looking at it.
  const render = ({ reorder = true, fromStart = false } = {}) => {
    const shown = data.runs.filter(run => !state.hidden.has(run.slug));
    const byModel = orderEntries(shown.map(runEntry), state.sort).map(entry => entry.slug);
    const leader = state.sort === 'visitors' ? orderEntries(data.runs.map(runEntry), 'visitors')[0] : null;
    head.hidden = state.columns === 'best';
    if (reorder) arrange(head.querySelector('[data-track]')!, byModel);
    for (const crown of head.querySelectorAll<HTMLElement>('[data-crown]')) {
      crown.hidden = !leader?.visitors || crown.closest<HTMLElement>('[data-run]')!.dataset.run !== leader.slug;
    }

    for (const row of root.querySelectorAll<HTMLElement>('[data-prompt]')) {
      const promptId = row.dataset.prompt!;
      const track = row.querySelector<HTMLElement>('[data-track]');
      if (!track) continue;
      const order = state.columns === 'best'
        ? orderEntries(shown.map(run => imageEntry(run, promptId)), state.sort).map(entry => entry.slug)
        : byModel;
      // The best-rated image in each brief gets a mark, whatever the column order.
      const best = orderEntries(shown.map(run => imageEntry(run, promptId)), 'visitors')[0];
      for (const tile of track.querySelectorAll<HTMLElement>('[data-run]')) {
        tile.classList.toggle('is-lead', !!best?.visitors && tile.dataset.run === best.slug);
      }
      if (!reorder) continue;
      arrange(track, order);
      for (const tile of track.querySelectorAll<HTMLElement>('[data-run]')) {
        tile.querySelector<HTMLElement>('[data-rank]')!.textContent =
          state.columns === 'best' ? `#${order.indexOf(tile.dataset.run!) + 1}` : '';
      }
    }
    if (fromStart) for (const track of tracks) moveTo(track, 0);
    updateNav();
  };

  const paintRatings = () => {
    for (const badge of root.querySelectorAll<HTMLElement>('[data-image-rating]')) {
      const rating = ratings[badge.dataset.imageRating!];
      badge.textContent = rating?.count ? `★ ${one(rating.overall)} · ${plural(rating.count, 'vote')}` : '★ unrated';
    }
    for (const card of head.querySelectorAll<HTMLElement>('[data-run]')) {
      const run = data.runs.find(entry => entry.slug === card.dataset.run)!;
      const { score, rated, total, votes } = visitorScore(ratings, run.slug, run.produced);
      card.querySelector('[data-human-value]')!.textContent = score === null ? '–' : one(score);
      card.querySelector('[data-human-sub]')!.textContent =
        !total ? 'no images to rate' : score === null ? `${rated} of ${total} images rated` : plural(votes, 'vote');
    }
    const votes = Object.values(ratings).reduce((sum, rating) => sum + (rating?.count ?? 0), 0);
    const total = document.querySelector('[data-vote-total]');
    if (total) total.textContent = String(votes);
  };

  // --- carousel: every track shares the first track's scroll position ---------
  // The header row hides in "best first" mode, so measure the first visible track.
  const activeTrack = () => tracks.find(track => !track.closest('[hidden]')) ?? tracks[0];
  const step = (track: HTMLElement) => {
    const tile = track.querySelector<HTMLElement>(':scope > :not([hidden])');
    return tile ? tile.getBoundingClientRect().width + parseFloat(getComputedStyle(track).columnGap || '0') : 0;
  };
  function updateNav() {
    const track = activeTrack();
    const count = track.querySelectorAll(':scope > :not([hidden])').length;
    const width = step(track);
    const perView = width ? Math.max(1, Math.round((track.clientWidth + 1) / width)) : count;
    const first = width ? Math.round(track.scrollLeft / width) + 1 : 1;
    const overflow = count > perView;
    position.textContent = overflow
      ? `${first} to ${Math.min(count, first + perView - 1)} of ${count}`
      : plural(count, 'model');
    prev.hidden = next.hidden = !overflow;
    prev.disabled = track.scrollLeft <= 2;
    next.disabled = track.scrollLeft + track.clientWidth >= track.scrollWidth - 2;
  }
  // Setting a track's scrollLeft fires one scroll event on it. Skip that echo,
  // and only set a position that differs, so every recorded echo gets consumed.
  const echoes = new WeakMap<HTMLElement, number>();
  const moveTo = (track: HTMLElement, left: number) => {
    if (track.closest('[hidden]') || Math.abs(track.scrollLeft - left) < 1) return;
    echoes.set(track, left);
    track.scrollLeft = left;
  };
  for (const track of tracks) {
    track.addEventListener('scroll', () => {
      const echo = echoes.get(track);
      echoes.delete(track);
      if (echo !== undefined && Math.abs(track.scrollLeft - echo) < 1) return;
      for (const other of tracks) if (other !== track) moveTo(other, track.scrollLeft);
      updateNav();
    }, { passive: true });
  }
  for (const button of [prev, next]) {
    button.addEventListener('click', () => {
      const track = activeTrack();
      track.scrollBy({ left: Number(button.dataset.step) * step(track), behavior: 'smooth' });
    });
  }
  addEventListener('resize', updateNav, { passive: true });

  // --- controls -----------------------------------------------------------------
  const pick = (selector: string, attr: 'sort' | 'columns', value: string) => {
    for (const button of root.querySelectorAll<HTMLElement>(selector)) button.dataset.on = String(button.dataset[attr] === value);
  };
  for (const button of root.querySelectorAll<HTMLElement>('[data-sort]')) {
    button.addEventListener('click', () => {
      state.sort = button.dataset.sort as CompareSort;
      pick('[data-sort]', 'sort', state.sort);
      render({ fromStart: true });
    });
  }
  for (const button of root.querySelectorAll<HTMLElement>('[data-columns]')) {
    button.addEventListener('click', () => {
      state.columns = button.dataset.columns as Columns;
      pick('[data-columns]', 'columns', state.columns);
      render({ fromStart: true });
    });
  }
  for (const chip of root.querySelectorAll<HTMLElement>('[data-model]')) {
    chip.addEventListener('click', () => {
      const slug = chip.dataset.model!;
      // Keep at least one model on screen.
      if (state.hidden.has(slug)) state.hidden.delete(slug);
      else if (state.hidden.size < data.runs.length - 1) state.hidden.add(slug);
      chip.setAttribute('aria-pressed', String(!state.hidden.has(slug)));
      render({ fromStart: true });
    });
  }

  render();
  let loaded = false;
  watchImageRatings(update => {
    ratings = update;
    paintRatings();
    render({ reorder: !loaded });
    loaded = true;
  }, () => {
    for (const badge of root.querySelectorAll<HTMLElement>('[data-image-rating]')) badge.textContent = '★ unavailable';
    for (const sub of head.querySelectorAll<HTMLElement>('[data-human-sub]')) sub.textContent = 'ratings unavailable';
    const status = root.querySelector('[data-ratings-status]');
    if (status) status.textContent = 'Visitor ratings are unavailable right now. Please try again later.';
  });
}
