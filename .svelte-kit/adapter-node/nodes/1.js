

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.45d27859.js","_app/immutable/chunks/scheduler.8b3802df.js","_app/immutable/chunks/index.9b4e7e05.js","_app/immutable/chunks/singletons.54cfe626.js","_app/immutable/chunks/index.592604a4.js","_app/immutable/chunks/paths.56c62c83.js"];
export const stylesheets = [];
export const fonts = [];
