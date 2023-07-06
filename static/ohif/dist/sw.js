navigator.serviceWorker.getRegistrations().then((function(e){for(let o of e)o.unregister()})),importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.0.0-beta.1/workbox-sw.js"),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.routing.registerRoute(/\.(?:js|css|json5)$/,new workbox.strategies.StaleWhileRevalidate({cacheName:"static-resources"})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]}),new workbox.expiration.ExpirationPlugin({maxAgeSeconds:31536e3,maxEntries:30})]})),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&("SKIP_WAITING"===e.data.type||console.warn(`SW: Invalid message type: ${e.data.type}`))})),workbox.precaching.precacheAndRoute([{'revision':null,'url':'http://localhost:8000/static/ohif/dist/151.bundle.5d8090bf7e885f8f2384.js'},{'revision':'fce97b63ba7e49aa2af632a3a260bbad','url':'http://localhost:8000/static/ohif/dist/151.bundle.5d8090bf7e885f8f2384.js.map'},{'revision':null,'url':'http://localhost:8000/static/ohif/dist/192.bundle.43ffc97338371c358b94.js'},{'revision':'86651fe25b7d2b7776af194effb0d554','url':'http://localhost:8000/static/ohif/dist/192.bundle.43ffc97338371c358b94.js.map'},{'revision':null,'url':'http://localhost:8000/static/ohif/dist/199.bundle.9b2a4448f8fd35b2b1d6.js'},{'revision':'0c1e5e10ad6e56c0e999cfd64b546d60','url':'http://localhost:8000/static/ohif/dist/199.bundle.9b2a4448f8fd35b2b1d6.js.map'},{'revision':null,'url':'http://localhost:8000/static/ohif/dist/205.bundle.c423b3977352beb4784f.js'},{'revision':'5e722133d80571a94b3228246f6a9bbf','url':'http://localhost:8000/static/ohif/dist/205.bundle.c423b3977352beb4784f.js.map'},{'revision':null,'url':'http://localhost:8000/static/ohif/dist/208.bundle.9a35503c820836f3c29d.js'},{'revision':'8ddee903f7d8a02c9808a1501339811e','url':'http://localhost:8000/static/ohif/dist/208.bundle.9a35503c820836f3c29d.js.map'},{'revision':null,'url':'http://localhost:8000/static/ohif/dist/270.bundle.04e305afcbcb31377a54.js'},{'revision':'11c959c3d4b5956a414d30a2cb562cf5','url':'http://localhost:8000/static/ohif/dist/270.bundle.04e305afcbcb31377a54.js.map'},{'revision':null,'url':'http://localhost:8000/static/ohif/dist/283.bundle.c8639b207102c45dece9.js'},{'revision':'59082daa2bef386a5d867b3b27e8956c','url':'http://localhost:8000/static/ohif/dist/283.bundle.c8639b207102c45dece9.js.map'},{'revision':null,'url':'http://localhost:8000/static/ohif/dist/295.bundle.aacdc53e424a644ce6b0.js'},{'revision':'259d28e18263ec0c16a70388b2de8e98','url':'http://localhost:8000/static/ohif/dist/295.bundle.aacdc53e424a644ce6b0.js.map'},{'revision':null,'url':'http://localhost:8000/static/ohif/dist/331.bundle.78b279c0e7965094189e.js'},{'revision':'4e0e34f265fae8f33b01b27ae29d9d6f','url':'http://localhost:8000/static/ohif/dist/331.bundle.78b279c0e7965094189e.js.LICENSE.txt'},{'revision':'b0a59a95b94260eb87889b1072f3264e','url':'http://localhost:8000/static/ohif/dist/331.bundle.78b279c0e7965094189e.js.map'},{'revision':null,'url':'http://localhost:8000/static/ohif/dist/351.bundle.192d2d177e54a71921f4.js'},{'revision':'25154f266910c81746764a1469d3ef82','url':'http://localhost:8000/static/ohif/dist/351.bundle.192d2d177e54a71921f4.js.map'},{'revision':'a04a2f233dc569826f5f6e21b65bc87b','url':'http://localhost:8000/static/ohif/dist/351.css'},{'revision':'c4ea120c6da08aa75348edfa3e57ece9','url':'http://localhost:8000/static/ohif/dist/36785fbd89b0e17f6099.wasm'},{'revision':null,'url':'http://localhost:8000/static/ohif/dist/381.bundle.18a76451a109137c9d4b.js'},{'revision':'da211f4817a57fde1183961202d0a948','url':'http://localhost:8000/static/ohif/dist/381.bundle.18a76451a109137c9d4b.js.map'},{'revision':null,'url':'http://localhost:8000/static/ohif/dist/404.bundle.91a6e18af7a2e09371b4.js'},{'revision':'6d94490b751608ca188c2df1de81f8bf','url':'http://localhost:8000/static/ohif/dist/404.bundle.91a6e18af7a2e09371b4.js.map'},{'revision':null,'url':'http://localhost:8000/static/ohif/dist/50.bundle.53a82c72039af1079099.js'},{'revision':'29bf84c20609c037d820b66b69fbf230','url':'http://localhost:8000/static/ohif/dist/50.bundle.53a82c72039af1079099.js.map'},{'revision':'c377e1f5fe4a207d270c3f7a8dd3e3ca','url':'http://localhost:8000/static/ohif/dist/5004fdc02f329ce53b69.wasm'},{'revision':null,'url':'http://localhost:8000/static/ohif/dist/531.bundle.c77a306bc6b04f70bbca.js'},{'revision':'783f14fa45b10e088e68f98251448010','url':'http://localhost:8000/static/ohif/dist/531.bundle.c77a306bc6b04f70bbca.js.LICENSE.txt'},{'revision':'08591dea57fffabde6822604f4d0f987','url':'http://localhost:8000/static/ohif/dist/531.bundle.c77a306bc6b04f70bbca.js.map'},{'revision':null,'url':'http://localhost:8000/static/ohif/dist/55.bundle.5c59e221be8075ad1de7.js'},{'revision':'3b1d0aab536d7dd2a915abeabd74bb05','url':'http://localhost:8000/static/ohif/dist/55.bundle.5c59e221be8075ad1de7.js.map'},{'revision':'0afb25509c7f072fbd7eda42c6895dbf','url':'http://localhost:8000/static/ohif/dist/55.css'},{'revision':null,'url':'http://localhost:8000/static/ohif/dist/569.bundle.118ba965f3c0b8c4c423.js'},{'revision':'20736a1e99604283dcb84c27c3892c75','url':'http://localhost:8000/static/ohif/dist/569.bundle.118ba965f3c0b8c4c423.js.map'},{'revision':null,'url':'http://localhost:8000/static/ohif/dist/581.bundle.9751dde11bc5f425634e.js'},{'revision':'3a303b63f86a966c8af667b5543291a2','url':'http://localhost:8000/static/ohif/dist/581.bundle.9751dde11bc5f425634e.js.map'},{'revision':null,'url':'http://localhost:8000/static/ohif/dist/606.bundle.8231f07f019a28873413.js'},{'revision':'3df54bba2137ec524f3fb39f2c61461a','url':'http://localhost:8000/static/ohif/dist/606.bundle.8231f07f019a28873413.js.LICENSE.txt'},{'revision':'fa0b04fc30bd87fe64cdfceb8fdc8eb8','url':'http://localhost:8000/static/ohif/dist/606.bundle.8231f07f019a28873413.js.map'},{'revision':'adfcdf177b2a25b4861c65ec3055f98b','url':'http://localhost:8000/static/ohif/dist/610.min.worker.js'},{'revision':'3c2206525c18cd87dd28082949a4e43e','url':'http://localhost:8000/static/ohif/dist/610.min.worker.js.map'},{'revision':null,'url':'http://localhost:8000/static/ohif/dist/616.bundle.0820df30360deec55fc4.js'},{'revision':'df61ebc926c757068f58f6446f909c2b','url':'http://localhost:8000/static/ohif/dist/616.bundle.0820df30360deec55fc4.js.map'},{'revision':'5800265b6831396572fb5d32c6bd8eef','url':'http://localhost:8000/static/ohif/dist/62ab5d58a2bea7b5a1dc.wasm'},{'revision':null,'url':'http://localhost:8000/static/ohif/dist/642.bundle.380fafc3767c98cfc922.js'},{'revision':'3d076c3b61d37f46ead0ac5b33af9db6','url':'http://localhost:8000/static/ohif/dist/642.bundle.380fafc3767c98cfc922.js.map'},{'revision':'ce10eced3ce34e663d86569b27f5bffb','url':'http://localhost:8000/static/ohif/dist/65916ef3def695744bda.wasm'},{'revision':null,'url':'http://localhost:8000/static/ohif/dist/664.bundle.f4930f71a5bfebece6d1.js'},{'revision':'341d5ae96a434f2da07a601650341e75','url':'http://localhost:8000/static/ohif/dist/664.bundle.f4930f71a5bfebece6d1.js.map'},{'revision':null,'url':'http://localhost:8000/static/ohif/dist/707.bundle.0a41b300112106d1bc41.js'},{'revision':'e0372fe72ee7b77ca08ea90790be4fdf','url':'http://localhost:8000/static/ohif/dist/707.bundle.0a41b300112106d1bc41.js.map'},{'revision':'185e5e0a10fa6ab2fc7b3c38e63d550b','url':'http://localhost:8000/static/ohif/dist/707.css'},{'revision':null,'url':'http://localhost:8000/static/ohif/dist/728.bundle.7ec6cd8aaeb91c992b69.js'},{'revision':'0e9b0c785f6ab44e694934571d764d58','url':'http://localhost:8000/static/ohif/dist/728.bundle.7ec6cd8aaeb91c992b69.js.LICENSE.txt'},{'revision':'ce90dc28338305b322f5f5ad25206e7c','url':'http://localhost:8000/static/ohif/dist/728.bundle.7ec6cd8aaeb91c992b69.js.map'},{'revision':null,'url':'http://localhost:8000/static/ohif/dist/744.bundle.eea1851ee09a96c3c7fc.js'},{'revision':'45ae936b75f9cf20609fd574703b6c3f','url':'http://localhost:8000/static/ohif/dist/744.bundle.eea1851ee09a96c3c7fc.js.map'},{'revision':'cf3e4d4fa8884275461c195421812256','url':'http://localhost:8000/static/ohif/dist/75788f12450d4c5ed494.wasm'},{'revision':'cc4a3a4da4ac1b863a714f93c66c6ef2','url':'http://localhost:8000/static/ohif/dist/75a0c2dfe07b824c7d21.wasm'},{'revision':null,'url':'http://localhost:8000/static/ohif/dist/780.bundle.92259d3aa76713eea41e.js'},{'revision':'22570ec03d870bf6aa9299b3477e6c79','url':'http://localhost:8000/static/ohif/dist/780.bundle.92259d3aa76713eea41e.js.map'},{'revision':null,'url':'http://localhost:8000/static/ohif/dist/790.bundle.a9a4a02b9f38d55bbffb.js'},{'revision':'e6f356ea1372521d0efb91a8d7115893','url':'http://localhost:8000/static/ohif/dist/790.bundle.a9a4a02b9f38d55bbffb.js.map'},{'revision':null,'url':'http://localhost:8000/static/ohif/dist/799.bundle.626f6f2f024673fef795.js'},{'revision':'d532dfef9d09224e37731e4d1c0d216b','url':'http://localhost:8000/static/ohif/dist/799.bundle.626f6f2f024673fef795.js.map'},{'revision':'51b8ed55f5b8d448837222f03bdd6de8','url':'http://localhost:8000/static/ohif/dist/806.css'},{'revision':null,'url':'http://localhost:8000/static/ohif/dist/82.bundle.d5ddc986f7a05a19b1de.js'},{'revision':'0cacdc911f259d92d084847f80d5a764','url':'http://localhost:8000/static/ohif/dist/82.bundle.d5ddc986f7a05a19b1de.js.map'},{'revision':null,'url':'http://localhost:8000/static/ohif/dist/917.bundle.8bc9dd6f41da703583cf.js'},{'revision':'61c92f41baa89b676af6477e85fdffcc','url':'http://localhost:8000/static/ohif/dist/917.bundle.8bc9dd6f41da703583cf.js.map'},{'revision':null,'url':'http://localhost:8000/static/ohif/dist/926.bundle.0920e6cd0aa69881ba57.js'},{'revision':'ab19565c3c271f425eace54a300bccb4','url':'http://localhost:8000/static/ohif/dist/926.bundle.0920e6cd0aa69881ba57.js.LICENSE.txt'},{'revision':'edb68d747afcc7ba604f9d8912e423be','url':'http://localhost:8000/static/ohif/dist/926.bundle.0920e6cd0aa69881ba57.js.map'},{'revision':null,'url':'http://localhost:8000/static/ohif/dist/935.bundle.d0f4d7f26365c2ca1943.js'},{'revision':'b8c18092f3bf63d89d1300e67392bef0','url':'http://localhost:8000/static/ohif/dist/935.bundle.d0f4d7f26365c2ca1943.js.map'},{'revision':'32368522777a3e9234effc3714bdb24c','url':'http://localhost:8000/static/ohif/dist/945.min.worker.js'},{'revision':'3aba0a4898e93871a7cd61b4d0216a18','url':'http://localhost:8000/static/ohif/dist/945.min.worker.js.map'},{'revision':null,'url':'http://localhost:8000/static/ohif/dist/953.bundle.b1249b0be20f85b91181.js'},{'revision':'15b7b9e81700c7f0db7e75c1cb9fe3ba','url':'http://localhost:8000/static/ohif/dist/953.bundle.b1249b0be20f85b91181.js.map'},{'revision':null,'url':'http://localhost:8000/static/ohif/dist/973.bundle.fbd57d96ebf5fa8c3ece.js'},{'revision':'d230731d1452c49f55b5b01131f3eb25','url':'http://localhost:8000/static/ohif/dist/973.bundle.fbd57d96ebf5fa8c3ece.js.map'},{'revision':null,'url':'http://localhost:8000/static/ohif/dist/976.bundle.599a2b57dde9b0230df5.js'},{'revision':'c171b0465da6d723e6a26bc9ba602591','url':'http://localhost:8000/static/ohif/dist/976.bundle.599a2b57dde9b0230df5.js.map'},{'revision':null,'url':'http://localhost:8000/static/ohif/dist/984.bundle.463c350b9a099864c83c.js'},{'revision':'e42e5bce3a4f6b79b4352c54074501df','url':'http://localhost:8000/static/ohif/dist/984.bundle.463c350b9a099864c83c.js.map'},{'revision':'d1895aa7a4595dc279c382e5a31ef9f4','url':'http://localhost:8000/static/ohif/dist/_headers'},{'revision':'6839a719b6810111d8097998b11293a1','url':'http://localhost:8000/static/ohif/dist/_redirects'},{'revision':'96b16f768f4fb7b7fd3084c2590caa4c','url':'http://localhost:8000/static/ohif/dist/app-config.js'},{'revision':null,'url':'http://localhost:8000/static/ohif/dist/app.bundle.a02e50335f2f97a049f6.js'},{'revision':'615b541ebacf1fb83543a0f1b18a65bf','url':'http://localhost:8000/static/ohif/dist/app.bundle.a02e50335f2f97a049f6.js.LICENSE.txt'},{'revision':'0871da67d87443bacdeeb07df0a5c282','url':'http://localhost:8000/static/ohif/dist/app.bundle.css'},{'revision':'cb4f64534cdf8dd88f1d7219d44490db','url':'http://localhost:8000/static/ohif/dist/assets/android-chrome-144x144.png'},{'revision':'5cde390de8a619ebe55a669d2ac3effd','url':'http://localhost:8000/static/ohif/dist/assets/android-chrome-192x192.png'},{'revision':'e7466a67e90471de05401e53b8fe20be','url':'http://localhost:8000/static/ohif/dist/assets/android-chrome-256x256.png'},{'revision':'9bbe9b80156e930d19a4e1725aa9ddae','url':'http://localhost:8000/static/ohif/dist/assets/android-chrome-36x36.png'},{'revision':'5698b2ac0c82fe06d84521fc5482df04','url':'http://localhost:8000/static/ohif/dist/assets/android-chrome-384x384.png'},{'revision':'56bef3fceec344d9747f8abe9c0bba27','url':'http://localhost:8000/static/ohif/dist/assets/android-chrome-48x48.png'},{'revision':'3e8b8a01290992e82c242557417b0596','url':'http://localhost:8000/static/ohif/dist/assets/android-chrome-512x512.png'},{'revision':'517925e91e2ce724432d296b687d25e2','url':'http://localhost:8000/static/ohif/dist/assets/android-chrome-72x72.png'},{'revision':'4c3289bc690f8519012686888e08da71','url':'http://localhost:8000/static/ohif/dist/assets/android-chrome-96x96.png'},{'revision':'cf464289183184df09292f581df0fb4f','url':'http://localhost:8000/static/ohif/dist/assets/apple-touch-icon-1024x1024.png'},{'revision':'0857c5282c594e4900e8b31e3bade912','url':'http://localhost:8000/static/ohif/dist/assets/apple-touch-icon-114x114.png'},{'revision':'4208f41a28130a67e9392a9dfcee6011','url':'http://localhost:8000/static/ohif/dist/assets/apple-touch-icon-120x120.png'},{'revision':'cb4f64534cdf8dd88f1d7219d44490db','url':'http://localhost:8000/static/ohif/dist/assets/apple-touch-icon-144x144.png'},{'revision':'977d293982af7e9064ba20806b45cf35','url':'http://localhost:8000/static/ohif/dist/assets/apple-touch-icon-152x152.png'},{'revision':'6de91b4d2a30600b410758405cb567b4','url':'http://localhost:8000/static/ohif/dist/assets/apple-touch-icon-167x167.png'},{'revision':'87bff140e3773bd7479a620501c4aa5c','url':'http://localhost:8000/static/ohif/dist/assets/apple-touch-icon-180x180.png'},{'revision':'647386c34e75f1213830ea9a38913525','url':'http://localhost:8000/static/ohif/dist/assets/apple-touch-icon-57x57.png'},{'revision':'0c200fe83953738b330ea431083e7a86','url':'http://localhost:8000/static/ohif/dist/assets/apple-touch-icon-60x60.png'},{'revision':'517925e91e2ce724432d296b687d25e2','url':'http://localhost:8000/static/ohif/dist/assets/apple-touch-icon-72x72.png'},{'revision':'c9989a807bb18633f6dcf254b5b56124','url':'http://localhost:8000/static/ohif/dist/assets/apple-touch-icon-76x76.png'},{'revision':'87bff140e3773bd7479a620501c4aa5c','url':'http://localhost:8000/static/ohif/dist/assets/apple-touch-icon-precomposed.png'},{'revision':'87bff140e3773bd7479a620501c4aa5c','url':'http://localhost:8000/static/ohif/dist/assets/apple-touch-icon.png'},{'revision':'05fa74ea9c1c0c3931ba96467999081d','url':'http://localhost:8000/static/ohif/dist/assets/apple-touch-startup-image-1182x2208.png'},{'revision':'9e2cd03e1e6fd0520eea6846f4278018','url':'http://localhost:8000/static/ohif/dist/assets/apple-touch-startup-image-1242x2148.png'},{'revision':'5591e3a1822cbc8439b99c1a40d53425','url':'http://localhost:8000/static/ohif/dist/assets/apple-touch-startup-image-1496x2048.png'},{'revision':'337de578c5ca04bd7d2be19d24d83821','url':'http://localhost:8000/static/ohif/dist/assets/apple-touch-startup-image-1536x2008.png'},{'revision':'cafb4ab4eafe6ef946bd229a1d88e7de','url':'http://localhost:8000/static/ohif/dist/assets/apple-touch-startup-image-320x460.png'},{'revision':'d9bb9e558d729eeac5efb8be8d6111cc','url':'http://localhost:8000/static/ohif/dist/assets/apple-touch-startup-image-640x1096.png'},{'revision':'038b5b02bac8b82444bf9a87602ac216','url':'http://localhost:8000/static/ohif/dist/assets/apple-touch-startup-image-640x920.png'},{'revision':'2177076eb07b1d64d663d7c03268be00','url':'http://localhost:8000/static/ohif/dist/assets/apple-touch-startup-image-748x1024.png'},{'revision':'4fc097443815fe92503584c4bd73c630','url':'http://localhost:8000/static/ohif/dist/assets/apple-touch-startup-image-750x1294.png'},{'revision':'2e29914062dce5c5141ab47eea2fc5d9','url':'http://localhost:8000/static/ohif/dist/assets/apple-touch-startup-image-768x1004.png'},{'revision':'f692ec286b3a332c17985f4ed38b1076','url':'http://localhost:8000/static/ohif/dist/assets/browserconfig.xml'},{'revision':'f3d9a3b647853c45b0e132e4acd0cc4a','url':'http://localhost:8000/static/ohif/dist/assets/coast-228x228.png'},{'revision':'ad6e1def5c66193d649a31474bbfe45d','url':'http://localhost:8000/static/ohif/dist/assets/favicon-16x16.png'},{'revision':'84d1dcdb6cdfa55e2f46be0c80fa5698','url':'http://localhost:8000/static/ohif/dist/assets/favicon-32x32.png'},{'revision':'95fb44c4998a46109e49d724c060db24','url':'http://localhost:8000/static/ohif/dist/assets/favicon.ico'},{'revision':'5df2a5b0cee399ac0bc40af74ba3c2cb','url':'http://localhost:8000/static/ohif/dist/assets/firefox_app_128x128.png'},{'revision':'11fd9098c4b07c8a07e1d2a1e309e046','url':'http://localhost:8000/static/ohif/dist/assets/firefox_app_512x512.png'},{'revision':'27cddfc922dca3bfa27b4a00fc2f5e36','url':'http://localhost:8000/static/ohif/dist/assets/firefox_app_60x60.png'},{'revision':'2017d95fae79dcf34b5a5b52586d4763','url':'http://localhost:8000/static/ohif/dist/assets/manifest.webapp'},{'revision':'cb4f64534cdf8dd88f1d7219d44490db','url':'http://localhost:8000/static/ohif/dist/assets/mstile-144x144.png'},{'revision':'334895225e16a7777e45d81964725a97','url':'http://localhost:8000/static/ohif/dist/assets/mstile-150x150.png'},{'revision':'e295cca4af6ed0365cf7b014d91b0e9d','url':'http://localhost:8000/static/ohif/dist/assets/mstile-310x150.png'},{'revision':'cbefa8c42250e5f2443819fe2c69d91e','url':'http://localhost:8000/static/ohif/dist/assets/mstile-310x310.png'},{'revision':'aa411a69df2b33a1362fa38d1257fa9d','url':'http://localhost:8000/static/ohif/dist/assets/mstile-70x70.png'},{'revision':'5609af4f69e40e33471aee770ea1d802','url':'http://localhost:8000/static/ohif/dist/assets/yandex-browser-50x50.png'},{'revision':'cfea70d7ddc8f06f276ea0c85c4b2adf','url':'http://localhost:8000/static/ohif/dist/assets/yandex-browser-manifest.json'},{'revision':'52b9a07fe0541fe8c313d9788550bf51','url':'http://localhost:8000/static/ohif/dist/b6b803111e2d06a825bd.wasm'},{'revision':'7edb59d2be7c993050cb31ded36afa31','url':'http://localhost:8000/static/ohif/dist/c22b37c3488e1d6c3aa4.wasm'},{'revision':'ca9f5d753dc607c78468055a37fc171c','url':'http://localhost:8000/static/ohif/dist/cornerstoneDICOMImageLoader.min.js'},{'revision':'f85de7fd8a9a8d95833085a001a19345','url':'http://localhost:8000/static/ohif/dist/cornerstoneDICOMImageLoader.min.js.map'},{'revision':null,'url':'http://localhost:8000/static/ohif/dist/dicom-microscopy-viewer.bundle.6a8d5af44a1cb4a7c513.js'},{'revision':'a32734d2bcb762bc2576581869d2a32c','url':'http://localhost:8000/static/ohif/dist/dicom-microscopy-viewer.bundle.6a8d5af44a1cb4a7c513.js.LICENSE.txt'},{'revision':'a8bda602e795d2deee010ff1667b801e','url':'http://localhost:8000/static/ohif/dist/dicom-microscopy-viewer.bundle.6a8d5af44a1cb4a7c513.js.map'},{'revision':'fa4dc6d260154109a901a1ac672bd6d2','url':'http://localhost:8000/static/ohif/dist/dicomMicroscopyViewer.min.js'},{'revision':'450494c199cf8dd8e8c34d5e98bf5334','url':'http://localhost:8000/static/ohif/dist/dicomMicroscopyViewer.min.js.LICENSE.txt'},{'revision':'8a01f4e4374adc87eb07850f350aea8f','url':'http://localhost:8000/static/ohif/dist/es6-shim.min.js'},{'revision':'020680fc0de257a26ef6c1df902f8d8f','url':'http://localhost:8000/static/ohif/dist/es6-shim.min.js.LICENSE.txt'},{'revision':'0aab0eac47213d911c2fccd0b5c08873','url':'http://localhost:8000/static/ohif/dist/google.js'},{'revision':'7dcc2744bd3e6bc7257bb2f693debfe4','url':'http://localhost:8000/static/ohif/dist/index.html'},{'revision':'5d4c22bbf4862549e9b5e146e580b3e1','url':'http://localhost:8000/static/ohif/dist/index.worker.1c69152d710fa7b84bce.worker.js'},{'revision':'066fd130de42b02857b634de1dc49a73','url':'http://localhost:8000/static/ohif/dist/index.worker.1c69152d710fa7b84bce.worker.js.map'},{'revision':'dea2eed78c84c32cf7a90d565a289883','url':'http://localhost:8000/static/ohif/dist/index.worker.min.worker.js'},{'revision':'fd1116add443fee52a935df926396e0f','url':'http://localhost:8000/static/ohif/dist/index.worker.min.worker.js.map'},{'revision':'96664560310999eea0795ed980d33a97','url':'http://localhost:8000/static/ohif/dist/init-service-worker.js'},{'revision':'74fc9658b62903be2048c1f82a22b4d4','url':'http://localhost:8000/static/ohif/dist/manifest.json'},{'revision':'3fa71aa0af3e34b4ebd9a71eee0f4bdd','url':'http://localhost:8000/static/ohif/dist/ohif-logo-light.svg'},{'revision':'7e81da785c63e75650101db6c5d7560e','url':'http://localhost:8000/static/ohif/dist/ohif-logo.svg'},{'revision':'8032232e4e08184ee8a9e4c018c8ba55','url':'http://localhost:8000/static/ohif/dist/oidc-client.min.js'},{'revision':'b5a040ab8895994d381772e7fa6e3a84','url':'http://localhost:8000/static/ohif/dist/oidc-client.min.js.LICENSE.txt'},{'revision':'f5fd3850f3da362de535533e3803383f','url':'http://localhost:8000/static/ohif/dist/polyfill.min.js'},{'revision':'f528b6861c82ee4415fce0821fd695c1','url':'http://localhost:8000/static/ohif/dist/silent-refresh.html'},{'revision':'92392ae6884cecd987655aec61ff5661','url':'http://localhost:8000/static/ohif/dist/sw.js.map'}]);
//# sourceMappingURL=sw.js.map