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
