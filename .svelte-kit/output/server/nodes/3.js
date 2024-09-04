import * as server from '../entries/pages/settings/_page.server.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/settings/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/settings/+page.server.ts";
export const imports = ["_app/immutable/nodes/3.CaBEY97r.js","_app/immutable/chunks/scheduler.CtbWrGNo.js","_app/immutable/chunks/index.DszOhJKM.js"];
export const stylesheets = [];
export const fonts = [];
