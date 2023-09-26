import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.bceb27ed.js","_app/immutable/chunks/scheduler.8b3802df.js","_app/immutable/chunks/index.9b4e7e05.js","_app/immutable/chunks/Indicator.svelte_svelte_type_style_lang.0fa7c262.js","_app/immutable/chunks/paths.56c62c83.js"];
export const stylesheets = ["_app/immutable/assets/0.7c17fe4a.css","_app/immutable/assets/Indicator.1d121e74.css"];
export const fonts = [];
