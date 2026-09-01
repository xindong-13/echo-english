/* Echo 英語 — Service Worker（離線快取 ＋ 自動更新） */
const CACHE = 'echo-v16';
const ASSETS = [
  './',
  './index.html',
  './bank.js',
  './bank2.js',
  './bank3.js',
  './bank4.js',
  './manifest.webmanifest',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => c.addAll(ASSETS))
      .catch(() => {})
      // 不自動 skipWaiting，等使用者按「更新」再套用，避免練到一半被換掉
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('message', e => {
  if (e.data === 'SKIP_WAITING') self.skipWaiting();
  if (e.data === 'VERSION') {
    e.source && e.source.postMessage({ type: 'VERSION', version: CACHE });
  }
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;                       // API 呼叫不攔截
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;             // 只快取自己的檔案

  // 網路優先、離線回退快取
  e.respondWith(
    fetch(req)
      .then(res => {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(req, copy)).catch(() => {});
        return res;
      })
      .catch(() => caches.match(req).then(r => r || caches.match('./index.html')))
  );
});
