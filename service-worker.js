if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let n=Promise.resolve();return l[e]||(n=new Promise((async n=>{if("document"in self){const l=document.createElement("script");l.src=e,document.head.appendChild(l),l.onload=n}else importScripts(e),n()}))),n.then((()=>{if(!l[e])throw new Error(`Module ${e} didn’t register its module`);return l[e]}))},n=(n,l)=>{Promise.all(n.map(e)).then((e=>l(1===e.length?e[0]:e)))},l={require:Promise.resolve(n)};self.define=(n,r,s)=>{l[n]||(l[n]=Promise.resolve().then((()=>{let l={};const i={uri:location.origin+n.slice(1)};return Promise.all(r.map((n=>{switch(n){case"exports":return l;case"module":return i;default:return e(n)}}))).then((e=>{const n=s(...e);return l.default||(l.default=n),l}))})))}}define("./service-worker.js",["./workbox-2fb64657"],(function(e){"use strict";e.setCacheNameDetails({prefix:"dsa-helden-erstellung"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/DSA-Helden-Erstellung/css/app.31d6cfe0.css",revision:null},{url:"/DSA-Helden-Erstellung/css/vendor.757c1c02.css",revision:null},{url:"/DSA-Helden-Erstellung/favicon.ico",revision:"cdf43faeb6a6284f9dabfb4182a71742"},{url:"/DSA-Helden-Erstellung/fonts/KFOkCnqEu92Fr1MmgVxIIzQ.9391e6e2.woff",revision:null},{url:"/DSA-Helden-Erstellung/fonts/KFOlCnqEu92Fr1MmEU9fBBc-.ddd11dab.woff",revision:null},{url:"/DSA-Helden-Erstellung/fonts/KFOlCnqEu92Fr1MmSU5fBBc-.877b9231.woff",revision:null},{url:"/DSA-Helden-Erstellung/fonts/KFOlCnqEu92Fr1MmWUlfBBc-.0344cc3c.woff",revision:null},{url:"/DSA-Helden-Erstellung/fonts/KFOlCnqEu92Fr1MmYUtfBBc-.b555d228.woff",revision:null},{url:"/DSA-Helden-Erstellung/fonts/KFOmCnqEu92Fr1Mu4mxM.9b78ea3b.woff",revision:null},{url:"/DSA-Helden-Erstellung/fonts/fa-brands-400.2285773e.woff",revision:null},{url:"/DSA-Helden-Erstellung/fonts/fa-brands-400.d878b0a6.woff2",revision:null},{url:"/DSA-Helden-Erstellung/fonts/fa-regular-400.7a333762.woff2",revision:null},{url:"/DSA-Helden-Erstellung/fonts/fa-regular-400.bb58e57c.woff",revision:null},{url:"/DSA-Helden-Erstellung/fonts/fa-solid-900.1551f4f6.woff2",revision:null},{url:"/DSA-Helden-Erstellung/fonts/fa-solid-900.eeccf4f6.woff",revision:null},{url:"/DSA-Helden-Erstellung/fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.aef30bd5.woff",revision:null},{url:"/DSA-Helden-Erstellung/fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.1f0f6cdb.woff2",revision:null},{url:"/DSA-Helden-Erstellung/icons/apple-icon-120x120.png",revision:"cf1f06751dae9ca8e99d3961a5c4f31c"},{url:"/DSA-Helden-Erstellung/icons/apple-icon-152x152.png",revision:"a35097ebd9fe55e0ff4351d2bfb394e9"},{url:"/DSA-Helden-Erstellung/icons/apple-icon-167x167.png",revision:"cf484796eec936753f6e5e31a901ce06"},{url:"/DSA-Helden-Erstellung/icons/apple-icon-180x180.png",revision:"fbba597ef4abbd275c288bf48b6a3ac7"},{url:"/DSA-Helden-Erstellung/icons/apple-launch-1125x2436.png",revision:"b8510e8c7dda513ae2c47ff95302f4e5"},{url:"/DSA-Helden-Erstellung/icons/apple-launch-1170x2532.png",revision:"3e2c26d73ef697f1dc52fec3f05b474d"},{url:"/DSA-Helden-Erstellung/icons/apple-launch-1242x2208.png",revision:"58dbf1d4f476a959b9ba45752ef2bf8d"},{url:"/DSA-Helden-Erstellung/icons/apple-launch-1242x2688.png",revision:"0fe8a5ca650a1920346abb3e52a1f1e1"},{url:"/DSA-Helden-Erstellung/icons/apple-launch-1284x2778.png",revision:"f8b3f515bb17090ce7eb77eb815a19b6"},{url:"/DSA-Helden-Erstellung/icons/apple-launch-1536x2048.png",revision:"30816c59d0a557ca0ac908c56b521bff"},{url:"/DSA-Helden-Erstellung/icons/apple-launch-1620x2160.png",revision:"a5b2d701b753d0fdccffc2ee626d092d"},{url:"/DSA-Helden-Erstellung/icons/apple-launch-1668x2224.png",revision:"0de64864f4f14db614f0c9fa96f97638"},{url:"/DSA-Helden-Erstellung/icons/apple-launch-1668x2388.png",revision:"b2221b65cd64580e817fefe098f7ad4e"},{url:"/DSA-Helden-Erstellung/icons/apple-launch-2048x2732.png",revision:"852162204491db98a4951ae3bcdc6ecd"},{url:"/DSA-Helden-Erstellung/icons/apple-launch-750x1334.png",revision:"63eb6e5648e1d36501d5589b46b362ea"},{url:"/DSA-Helden-Erstellung/icons/apple-launch-828x1792.png",revision:"1c0a8cd0e93e6c13f237e30f6d09ec5a"},{url:"/DSA-Helden-Erstellung/icons/favicon-128x128.png",revision:"9a27d2e933db7ca983af775219934de4"},{url:"/DSA-Helden-Erstellung/icons/favicon-16x16.png",revision:"83d22717bf5aa1b1f96b0ed01cd53a22"},{url:"/DSA-Helden-Erstellung/icons/favicon-32x32.png",revision:"4105dce436bf843b20eb54c19ee0608d"},{url:"/DSA-Helden-Erstellung/icons/favicon-96x96.png",revision:"7c8700d8d4a3d46ff198b3952a51bc20"},{url:"/DSA-Helden-Erstellung/icons/icon-128x128.png",revision:"9a27d2e933db7ca983af775219934de4"},{url:"/DSA-Helden-Erstellung/icons/icon-192x192.png",revision:"d48fd90b1509c5bcbd92ac1707514576"},{url:"/DSA-Helden-Erstellung/icons/icon-256x256.png",revision:"b138d0f274885658cd0c7ef56f33c37f"},{url:"/DSA-Helden-Erstellung/icons/icon-384x384.png",revision:"0aba4968fd976ad8ff366ba6bb2f63db"},{url:"/DSA-Helden-Erstellung/icons/icon-512x512.png",revision:"6e80dd4d796fe4d778647f39305501c0"},{url:"/DSA-Helden-Erstellung/icons/ms-icon-144x144.png",revision:"43e81e00e78049eed94d509c3a294267"},{url:"/DSA-Helden-Erstellung/icons/safari-pinned-tab.svg",revision:"5b70163f75db3c3bc0d92188d862e63d"},{url:"/DSA-Helden-Erstellung/img/logo.815d883c.png",revision:null},{url:"/DSA-Helden-Erstellung/index.html",revision:"55797f34b506499ca92f0250a521b280"},{url:"/DSA-Helden-Erstellung/js/app.5f0320f3.js",revision:null},{url:"/DSA-Helden-Erstellung/js/vendor.617fccab.js",revision:null},{url:"/DSA-Helden-Erstellung/manifest.json",revision:"453a86de5f95095d48a795380d2440f7"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/DSA-Helden-Erstellung/index.html"),{denylist:[/service-worker\.js$/,/workbox-(.)*\.js$/]}))}));
