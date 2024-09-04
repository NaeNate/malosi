export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([]),
	mimeTypes: {},
	_: {
		client: {"start":"_app/immutable/entry/start.C5Gh44Ud.js","app":"_app/immutable/entry/app.d9DHGHHK.js","imports":["_app/immutable/entry/start.C5Gh44Ud.js","_app/immutable/chunks/entry.CbeeOsRd.js","_app/immutable/chunks/scheduler.CtbWrGNo.js","_app/immutable/chunks/paths.35zkZ8mo.js","_app/immutable/entry/app.d9DHGHHK.js","_app/immutable/chunks/scheduler.CtbWrGNo.js","_app/immutable/chunks/index.DszOhJKM.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/settings",
				pattern: /^\/settings\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
