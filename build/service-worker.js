"use strict";var precacheConfig=[["/Ucare-Dental/index.html","c3e773ce17c34756316f1b9175041ac2"],["/Ucare-Dental/static/css/main.c97116cb.css","2432c29932c499fcf9b90d5e1c90d405"],["/Ucare-Dental/static/js/main.0ae0b522.js","a085ab37ad9229da7c6b57a2b0918f43"],["/Ucare-Dental/static/media/Logo3.abe453ae.png","abe453ae030e359043f053a201f16fad"],["/Ucare-Dental/static/media/beach.c480b49d.jpg","c480b49d5d01d66d89d2f436c0c9927a"],["/Ucare-Dental/static/media/coronado.c230dcd5.jpg","c230dcd597212a2308b1df9ef7e3fe05"],["/Ucare-Dental/static/media/front.18c0595f.jpg","18c0595f6bec1d25025aebd506cb7c70"],["/Ucare-Dental/static/media/office1.b70d5f91.jpg","b70d5f91967454c499359b3d1148dc70"],["/Ucare-Dental/static/media/office2.50837892.jpg","50837892ec0c9d28a6bde8e12f864f94"],["/Ucare-Dental/static/media/office3.3ab971da.jpg","3ab971dace6063de5758fd45d7daa372"],["/Ucare-Dental/static/media/sandiego.c88878e9.jpg","c88878e9655f2a3a5736ccc34d013e9f"],["/Ucare-Dental/static/media/slider-left-arrow.34a4f31c.svg","34a4f31c87f0e3f9e7c682ebf7eb3664"],["/Ucare-Dental/static/media/slider-right-arrow.5e5b72cc.svg","5e5b72cc72ffd2c9ea04f8a4742dd6b1"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/Ucare-Dental/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});