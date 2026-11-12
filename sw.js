// Pentacle Workforce app: keeps the website installable and opens quickly.
// Always loads the newest page when online; falls back to the saved copy when offline.
const CACHE = "pentacle-v7";
const SHELL = ["/", "/manifest.webmanifest", "/icon-192.png", "/icon-512.png"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(k => Promise.all(k.filter(n => n !== CACHE).map(n => caches.delete(n)))).then(() => self.clients.claim())); });
self.addEventListener("fetch", e => {
  const req = e.request, url = new URL(req.url);
  if (req.method !== "GET" || url.origin !== location.origin) return; // Firebase and other sites go straight to the network
  e.respondWith(fetch(req).then(res => { if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); } return res; })
    .catch(() => caches.match(req).then(r => r || caches.match("/"))));
});
// open CHAT when a chat notification is tapped; a call notification can be answered with Attend or Decline
self.addEventListener("notificationclick", e => {
  const d = e.notification.data || {}, act = e.action || "";
  e.notification.close();
  if (d.call && act === "decline") {
    e.waitUntil(self.clients.matchAll({ type: "window", includeUncontrolled: true }).then(list => { list.forEach(c => c.postMessage({ call: "decline", session: d.session })); }));
    return;
  }
  const msg = d.call ? { open: "chat", call: "attend", session: d.session } : { open: "chat" };
  e.waitUntil(self.clients.matchAll({ type: "window", includeUncontrolled: true }).then(list => {
    for (const c of list) { if ("focus" in c) { c.postMessage(msg); return c.focus(); } }
    return self.clients.openWindow(d.call ? "/?open=call#/chat/business" : "/?open=chat");
  }));
});
