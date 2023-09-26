

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.e6f89b98.js","_app/immutable/chunks/scheduler.8b3802df.js","_app/immutable/chunks/index.9b4e7e05.js","_app/immutable/chunks/index.592604a4.js","_app/immutable/chunks/Indicator.svelte_svelte_type_style_lang.0fa7c262.js"];
export const stylesheets = ["_app/immutable/assets/Indicator.1d121e74.css"];
export const fonts = [];
