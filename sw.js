!function(){"use strict";const t="0.1.11",e=["./","./index.css","./index.js"];self.addEventListener("install",n=>{n.waitUntil(async function(){const n=Date.now(),s=await caches.open(`v${t}`);await Promise.all(e.map(t=>{const e=`${t}?cache-bust=${n}`,a=new Request(e,{mode:"no-cors"});return fetch(a).then(e=>{200===e.status&&s.put(t,e)})}))}().then(()=>self.skipWaiting()))}),self.addEventListener("activate",e=>{e.waitUntil(async function(){const e=(await caches.keys()).filter(e=>e!==`v${t}`);await Promise.all(e.map(t=>caches.delete(t)))}())}),self.addEventListener("fetch",t=>{t.respondWith(async function(t){const e=await caches.match(t);if(e)return e;return fetch(t)}(t.request))})}();
