import { convexTest } from 'convex-test';
import { expect, it } from 'vitest';
import schema from '../convex/schema';
import { api } from '../convex/_generated/api';
const modules = import.meta.glob('../convex/**/*.ts');
const vote = {runSlug:'image-0123456789abcdef01234567',promptId:'same-kettle',voterId:'11111111-1111-1111-1111-111111111111',quality:5,adherence:4,fidelity:3};
it('updates one browser vote per image, preserves other images, and computes live means',async()=>{
  const t=convexTest(schema,modules);
  await t.mutation(api.votes.castImageVote,vote);
  await t.mutation(api.votes.castImageVote,{...vote,quality:1});
  await t.mutation(api.votes.castImageVote,{...vote,voterId:'22222222-2222-2222-2222-222222222222'});
  await t.mutation(api.votes.castImageVote,{...vote,promptId:'night-market'});
  const result=await t.query(api.votes.imageRatings,{});
  expect(result[`${vote.runSlug}/same-kettle`]).toEqual({count:2,quality:3,adherence:4,fidelity:3,overall:10/3});
  expect(result[`${vote.runSlug}/night-market`].count).toBe(1);
  expect(await t.query(api.votes.allRatings,{})).toEqual({});
});
it('rejects invalid scores and unknown prompt identifiers',async()=>{
  const t=convexTest(schema,modules);
  for(const quality of [0,6,2.5,NaN]) await expect(t.mutation(api.votes.castImageVote,{...vote,quality})).rejects.toThrow();
  await expect(t.mutation(api.votes.castImageVote,{...vote,promptId:'missing'})).rejects.toThrow('Unknown image');
  expect(await t.query(api.votes.imageRatings,{})).toEqual({});
});
