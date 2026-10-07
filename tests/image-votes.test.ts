import { convexTest } from 'convex-test';
import { expect, it, vi } from 'vitest';
import schema from '../convex/schema';
import { api } from '../convex/_generated/api';
import type { ImageResult } from '../src/lib/image-lab';
const modules = import.meta.glob('../convex/**/*.ts');
const runSlug = 'image-0123456789abcdef01234567';
// The published catalog has no runs yet, so give the vote functions one run with a missing image.
vi.mock('../src/lib/image-lab', async importOriginal => {
  const original = await importOriginal<typeof import('../src/lib/image-lab')>();
  const image = (promptId: string, file: string | null): ImageResult => ({promptId,file,sha256:null,width:null,height:null,checks:{decodes:!!file,resolution:!!file,aspectRatio:!!file},total:0,error:null});
  const run = {slug:runSlug,model:'m',provider:'p',ranAt:'',suiteVersion:'',scorerVersion:'',settings:'',notes:'',durationMs:null,costUsd:null,total:0,
    images:[image('same-kettle','/a.png'),image('night-market','/b.png'),image('mara-triptych',null)]};
  return {...original,imageLab:{...original.imageLab,runs:[run]}};
});
const vote = {runSlug,promptId:'same-kettle',voterId:'11111111-1111-1111-1111-111111111111',quality:5,adherence:4,fidelity:3};
it('updates one browser vote per image, preserves other images, and computes live means',async()=>{
  const t=convexTest(schema,modules);
  await t.mutation(api.votes.castImageVote,vote);
  await t.mutation(api.votes.castImageVote,{...vote,quality:1});
  await t.mutation(api.votes.castImageVote,{...vote,voterId:'22222222-2222-2222-2222-222222222222'});
  await t.mutation(api.votes.castImageVote,{...vote,promptId:'night-market'});
  const result=await t.query(api.votes.imageRatings,{});
  expect(result[`${runSlug}/same-kettle`]).toEqual({count:2,quality:3,adherence:4,fidelity:3,overall:10/3});
  expect(result[`${runSlug}/night-market`].count).toBe(1);
  expect(await t.query(api.votes.allRatings,{})).toEqual({});
});
it('swaps old scores for new ones in the totals when a browser changes its vote',async()=>{
  const t=convexTest(schema,modules);
  await t.mutation(api.votes.castImageVote,vote);
  await t.mutation(api.votes.castImageVote,{...vote,quality:2,adherence:2,fidelity:5});
  const totals=await t.run(ctx=>ctx.db.query('imageRatingTotals').collect());
  expect(totals).toMatchObject([{runSlug,promptId:'same-kettle',count:1,quality:2,adherence:2,fidelity:5}]);
});
it('rejects invalid scores, voters, runs, and images',async()=>{
  const t=convexTest(schema,modules);
  for(const quality of [0,6,2.5,NaN]) await expect(t.mutation(api.votes.castImageVote,{...vote,quality})).rejects.toThrow();
  for(const bad of [{promptId:'missing'},{promptId:'mara-triptych'},{runSlug:'image-ffffffffffffffffffffffff'},{runSlug:'IMAGE-0123'}])
    await expect(t.mutation(api.votes.castImageVote,{...vote,...bad})).rejects.toThrow('Unknown image');
  await expect(t.mutation(api.votes.castImageVote,{...vote,voterId:'not a voter'})).rejects.toThrow('Bad voter id');
  expect(await t.query(api.votes.imageRatings,{})).toEqual({});
});
