import data from '../data/image-lab.json';
export type ImageResult = {
  promptId: string; file: string | null; sha256: string | null;
  width: number | null; height: number | null;
  checks: { decodes: boolean; resolution: boolean; aspectRatio: boolean };
  total: number; error: string | null;
};
export type ImageRun = {
  slug: string; model: string; provider: string; ranAt: string; suiteVersion: string;
  scorerVersion: string; settings: string; notes: string; durationMs: number | null;
  costUsd: number | null; total: number; images: ImageResult[];
};
export type ImagePrompt = {
  id: string; title: string; prompt: string; focus: string;
  aspectRatio: number; reference: string | null;
};
export const imageLab = data as {
  version: number;
  suite: { version: string; minimumShortEdge: number; aspectRatioTolerance: number;
    references: Record<string, string>; prompts: ImagePrompt[] };
  runs: ImageRun[];
};
export const preview = (image: ImageResult) => `/lab/images/${image.sha256}-preview.webp`;

/** The prompts a run produced an image for. Missing outputs cannot be rated. */
export const producedPrompts = (run: ImageRun) => run.images.filter(image => image.file).map(image => image.promptId);

/** What the compare view's script needs to sort and filter. The page embeds it as JSON. */
export const compareData = () => ({
  prompts: imageLab.suite.prompts.map(prompt => prompt.id),
  runs: imageLab.runs.map(run => ({
    slug: run.slug, model: run.model, ranAt: run.ranAt, checks: run.total, produced: producedPrompts(run),
    images: Object.fromEntries(run.images.map(image => [image.promptId, image.total])),
  })),
});
