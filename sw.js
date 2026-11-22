// Grid Operator offline cache.
// The game page is fetched fresh from the network whenever you're online, so new uploads show up on the next launch.
// The cached copy is only used when you're offline.
const VERSION='grid-operator-v3';
const FILES=['./','index.html','manifest.webmanifest','icon-180.png','icon-192.png','icon-512.png'];

self.addEventListener('install',e=>{
  // cache:'reload' skips the browser's HTTP cache so we never store a stale copy
  e.waitUntil(caches.open(VERSION).then(c=>Promise.all(FILES.map(f=>
    fetch(new Request(f,{cache:'reload'})).then(r=>{if(r.ok)return c.put(f,r)})
  ))));
  self.skipWaiting();
});

self.addEventListener('activate',e=>{
  e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==VERSION).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});

self.addEventListener('fetch',e=>{
  const req=e.request;
  if(req.method!=='GET')return;
  const isPage=req.mode==='navigate'||req.url.endsWith('/')||req.url.endsWith('.html');
  if(isPage){
    // network first: newest version when online, cached copy when offline
    e.respondWith(fetch(req,{cache:'no-store'}).then(r=>{
      const copy=r.clone();caches.open(VERSION).then(c=>c.put('index.html',copy));return r;
    }).catch(()=>caches.match('index.html').then(h=>h||caches.match('./'))));
    return;
  }
  e.respondWith(caches.match(req,{ignoreSearch:true}).then(hit=>hit||fetch(req)));
});
