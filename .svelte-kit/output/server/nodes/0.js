import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.CuQQEC8Q.js","_app/immutable/chunks/scheduler.CtbWrGNo.js","_app/immutable/chunks/index.DszOhJKM.js","_app/immutable/chunks/paths.35zkZ8mo.js"];
export const stylesheets = ["_app/immutable/assets/0.BKzYt8Eg.css"];
export const fonts = [];
