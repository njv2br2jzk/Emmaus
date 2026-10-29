/* Emmaus offline support: the app shell loads from the cache first, the Bible files are fetched
   once in the background and then kept, fonts are cached the first time they are used. */
const VERSION = 'emmaus-1';
const SHELL = ['./', 'index.html', 'manifest.webmanifest', 'icon-180.png', 'icon-192.png', 'icon-512.png',
  'meta.json', 'meta_de.json', 'refs_strong.txt', 'places.json', 'map.json'];
const LATER = ['bible_de.json', 'bible_en.json', 'refs_weak.txt'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) if (k !== VERSION && k !== 'emmaus-fonts') await caches.delete(k);
    await self.clients.claim();
    const c = await caches.open(VERSION);
    for (const f of LATER) { if (!(await c.match(f))) { try { await c.add(f); } catch (err) {} } }
  })());
});
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET') return;
  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    e.respondWith(caches.open('emmaus-fonts').then(async c => {
      const hit = await c.match(e.request); if (hit) return hit;
      const res = await fetch(e.request); if (res.ok || res.type === 'opaque') c.put(e.request, res.clone()); return res;
    }));
    return;
  }
  if (url.origin !== location.origin) return;
  e.respondWith((async () => {
    const c = await caches.open(VERSION);
    const hit = await c.match(e.request, { ignoreSearch: true });
    if (hit) {
      // refresh the page itself in the background so updates arrive on the next start
      if (e.request.mode === 'navigate') fetch(e.request).then(r => { if (r.ok) c.put(e.request, r); }).catch(() => {});
      return hit;
    }
    try { const res = await fetch(e.request); if (res.ok) c.put(e.request, res.clone()); return res; }
    catch (err) { return (await c.match('index.html')) || Response.error(); }
  })());
});
