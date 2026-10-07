// @vitest-environment happy-dom
import { beforeEach, expect, it, vi } from 'vitest';
type Rating = {count:number;quality:number;adherence:number;fidelity:number;overall:number};
const mocks=vi.hoisted(()=>({mutation:vi.fn(),update:null as null|((ratings:Record<string,Rating>)=>void),failure:null as null|(()=>void),close:vi.fn()}));
vi.mock('convex/browser',()=>({ConvexClient:class {
  onUpdate(_api:unknown,_args:unknown,update:typeof mocks.update,failure:typeof mocks.failure){mocks.update=update;mocks.failure=failure;return ()=>{};}
  mutation=mocks.mutation;
  close=mocks.close;
}}));
beforeEach(()=>{
  vi.resetModules();vi.stubEnv('PUBLIC_CONVEX_URL','https://fixture.convex.cloud');mocks.mutation.mockReset();mocks.close.mockClear();localStorage.clear();
  document.body.innerHTML=`<span data-image-rating="image-0123456789abcdef01234567/same-kettle"></span><span data-run-rating="image-0123456789abcdef01234567"></span><form data-image-vote data-run="image-0123456789abcdef01234567" data-prompt="same-kettle"><fieldset disabled>${['quality','adherence','fidelity'].map(axis=>`<label>${axis}<select name="${axis}"><option value="4">4</option></select><span data-axis-average="${axis}"></span></label>`).join('')}<button>Save</button></fieldset><p data-vote-status>Connecting to ratings</p></form>`;
});
it('submits the chosen axes, blocks double submits, and lets a failed save retry',async()=>{
  await import('../src/scripts/image-ratings');mocks.update!({});
  const form=document.querySelector('form')!;const fields=form.querySelector('fieldset')!;
  let rejectSave:(error:Error)=>void=()=>{};
  mocks.mutation.mockImplementationOnce(()=>new Promise((_resolve,reject)=>{rejectSave=reject;}));
  form.dispatchEvent(new Event('submit',{cancelable:true}));form.dispatchEvent(new Event('submit',{cancelable:true}));
  expect(mocks.mutation).toHaveBeenCalledTimes(1);expect(fields.disabled).toBe(true);
  expect(mocks.mutation.mock.calls[0][1]).toMatchObject({quality:4,adherence:4,fidelity:4,promptId:'same-kettle'});
  rejectSave(new Error('offline'));await vi.waitFor(()=>expect(fields.disabled).toBe(false));
  expect(form.textContent).toContain('try again');mocks.mutation.mockResolvedValue(undefined);
  form.dispatchEvent(new Event('submit',{cancelable:true}));await vi.waitFor(()=>expect(form.textContent).toContain('Rating saved'));
});
it('keeps partial run ratings unscored and handles unavailable ratings',async()=>{
  await import('../src/scripts/image-ratings');mocks.update!({'image-0123456789abcdef01234567/same-kettle':{count:2,quality:4,adherence:4,fidelity:4,overall:4}});
  expect(document.querySelector('[data-run-rating]')!.textContent).toBe('Unscored · 1/5 images rated');
  expect(document.querySelector('[data-image-rating]')!.textContent).toContain('4.0 / 5 · 2 votes');
  mocks.failure!();expect(document.querySelector('fieldset')!.disabled).toBe(true);
  expect(document.querySelector('[data-image-rating]')!.textContent).toBe('Ratings unavailable');
});

it('keeps its client alive when browser Back can restore the cached page', async () => {
  await import('../src/scripts/image-ratings');
  const event = new Event('pagehide');
  Object.defineProperty(event, 'persisted', { value: true });
  window.dispatchEvent(event);
  expect(mocks.close).not.toHaveBeenCalled();
});
