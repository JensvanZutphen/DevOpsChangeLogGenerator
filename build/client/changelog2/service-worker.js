const t = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), m = [
  t + "/_app/immutable/entry/app.d1312e9d.js",
  t + "/_app/immutable/assets/0.7c17fe4a.css",
  t + "/_app/immutable/nodes/0.bceb27ed.js",
  t + "/_app/immutable/nodes/1.45d27859.js",
  t + "/_app/immutable/nodes/2.e6f89b98.js",
  t + "/_app/immutable/assets/Indicator.1d121e74.css",
  t + "/_app/immutable/chunks/Indicator.svelte_svelte_type_style_lang.0fa7c262.js",
  t + "/_app/immutable/chunks/index.592604a4.js",
  t + "/_app/immutable/chunks/index.9b4e7e05.js",
  t + "/_app/immutable/chunks/paths.56c62c83.js",
  t + "/_app/immutable/chunks/scheduler.8b3802df.js",
  t + "/_app/immutable/chunks/singletons.54cfe626.js",
  t + "/_app/immutable/entry/start.4080c12e.js"
], u = [
  t + "/favicon.png",
  t + "/icon-192x192.png",
  t + "/icon-512x512.png",
  t + "/manifest.json"
], o = "1695715261689", c = self, p = `cache${o}`, r = `offline${o}`, d = ["/"], f = [
  "https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800&display=swap",
  "https://unpkg.com/ress/dist/ress.min.css",
  "https://fonts.gstatic.com/s/inter/v11/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7W0Q5nw.woff2"
], _ = (s) => s.map((e) => self.location.origin + e), b = _([
  ...u.filter((s) => !/\/icons\/(apple.*?|original.png)/.test(s)),
  ...m,
  ...d
]), l = [...b, ...f], w = new Set(l);
c.addEventListener("install", (s) => {
  s.waitUntil(
    caches.open(p).then((e) => e.addAll(l)).then(() => {
      c.skipWaiting();
    })
  );
});
c.addEventListener("activate", (s) => {
  s.waitUntil(
    caches.keys().then(async (e) => {
      for (const a of e)
        a !== p && a !== r && await caches.delete(a);
      c.clients.claim();
    })
  );
});
async function g(s) {
  const e = await caches.open(r);
  try {
    const a = await fetch(s);
    return e.put(s, a.clone()), a;
  } catch (a) {
    const n = await e.match(s);
    if (n)
      return n;
    throw a;
  }
}
c.addEventListener("fetch", (s) => {
  if (s.request.method !== "GET" || s.request.headers.has("range"))
    return;
  const e = new URL(s.request.url), a = e.protocol.startsWith("http"), n = e.hostname === self.location.hostname && e.port !== self.location.port, i = w.has(e.href), h = s.request.cache === "only-if-cached" && !i;
  a && !n && !h && s.respondWith(
    (async () => i && await caches.match(s.request) || g(s.request))()
  );
});
