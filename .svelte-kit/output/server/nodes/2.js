

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.Bd7BjqCG.js","_app/immutable/chunks/scheduler.CtbWrGNo.js","_app/immutable/chunks/index.DszOhJKM.js"];
export const stylesheets = [];
export const fonts = [];
