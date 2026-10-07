import { ConvexClient } from 'convex/browser';
import { api } from '../../convex/_generated/api';
import type { ImageRatings } from '../lib/image-scores';

// One Convex client per page, shared by the ratings feed and votes.
const url = import.meta.env.PUBLIC_CONVEX_URL;
const client = url ? new ConvexClient(url) : null;

if (client) {
  // A cached page resumes this same client when Back restores it.
  window.addEventListener('pagehide', event => {
    if (!event.persisted) void client.close();
  });
}

/**
 * Calls `onRatings` with live averages for every rated image, and again on each
 * change. Calls `onUnavailable` when the site has no Convex URL or the feed fails.
 */
export function watchImageRatings(onRatings: (ratings: ImageRatings) => void, onUnavailable: () => void) {
  if (!client) return onUnavailable();
  client.onUpdate(api.votes.imageRatings, {}, onRatings, onUnavailable);
}

type Vote = { runSlug: string; promptId: string; quality: number; adherence: number; fidelity: number };

/** Saves this browser's rating of one image. A repeat vote replaces the old one. */
export async function saveImageVote(vote: Vote) {
  if (!client) throw new Error('Ratings are unavailable');
  let voterId = localStorage.getItem('lab-voter-id');
  if (!voterId) {
    voterId = crypto.randomUUID();
    localStorage.setItem('lab-voter-id', voterId);
  }
  await client.mutation(api.votes.castImageVote, { ...vote, voterId });
}
