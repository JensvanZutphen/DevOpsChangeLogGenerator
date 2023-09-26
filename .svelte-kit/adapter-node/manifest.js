export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "changelog2/_app",
	assets: new Set(["favicon.png","icon-192x192.png","icon-512x512.png","manifest.json","service-worker.js"]),
	mimeTypes: {".png":"image/png",".json":"application/json"},
	_: {
		client: {"start":"_app/immutable/entry/start.4080c12e.js","app":"_app/immutable/entry/app.d1312e9d.js","imports":["_app/immutable/entry/start.4080c12e.js","_app/immutable/chunks/scheduler.8b3802df.js","_app/immutable/chunks/singletons.54cfe626.js","_app/immutable/chunks/index.592604a4.js","_app/immutable/chunks/paths.56c62c83.js","_app/immutable/entry/app.d1312e9d.js","_app/immutable/chunks/scheduler.8b3802df.js","_app/immutable/chunks/index.9b4e7e05.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			{
				id: "/api/changelog",
				pattern: /^\/api\/changelog\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/changelog/_server.ts.js'))
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

export const prerendered = new Set(["/changelog2/"]);
