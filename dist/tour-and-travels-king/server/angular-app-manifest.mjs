
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-MMW5IDVQ.js",
      "chunk-VKCPGK36.js",
      "chunk-T2FP4BZC.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BR6P2X34.js",
      "chunk-T2FP4BZC.js"
    ],
    "route": "/about"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ENRJRDEI.js",
      "chunk-VKCPGK36.js",
      "chunk-T2FP4BZC.js"
    ],
    "route": "/packages"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D6QOJLFJ.js",
      "chunk-VKCPGK36.js",
      "chunk-T2FP4BZC.js"
    ],
    "route": "/packages/adi-kailash-4-days"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D6QOJLFJ.js",
      "chunk-VKCPGK36.js",
      "chunk-T2FP4BZC.js"
    ],
    "route": "/packages/adi-kailash-6-days"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D6QOJLFJ.js",
      "chunk-VKCPGK36.js",
      "chunk-T2FP4BZC.js"
    ],
    "route": "/packages/adi-kailash-7-days"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D6QOJLFJ.js",
      "chunk-VKCPGK36.js",
      "chunk-T2FP4BZC.js"
    ],
    "route": "/packages/adi-kailash-9-days"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D6QOJLFJ.js",
      "chunk-VKCPGK36.js",
      "chunk-T2FP4BZC.js"
    ],
    "route": "/packages/darma-valley-panchachuli"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-7CPVZJ34.js",
      "chunk-T2FP4BZC.js"
    ],
    "route": "/gallery"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Z3BLGZDA.js",
      "chunk-MQTDSVIQ.js",
      "chunk-T2FP4BZC.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-MQASAR4H.js",
      "chunk-BVYG5JOX.js",
      "chunk-JCUSL6CW.js",
      "chunk-BYOZ6IAM.js",
      "chunk-GDL2ZYRL.js",
      "chunk-GI7JXH3B.js",
      "chunk-DHKKLAXW.js"
    ],
    "route": "/admin"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-MQASAR4H.js",
      "chunk-BVYG5JOX.js",
      "chunk-JCUSL6CW.js",
      "chunk-HT5YICBB.js",
      "chunk-QYOQREAZ.js",
      "chunk-RBBD7SBL.js",
      "chunk-DHKKLAXW.js",
      "chunk-MQTDSVIQ.js"
    ],
    "route": "/admin/login"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-MQASAR4H.js",
      "chunk-BVYG5JOX.js",
      "chunk-JCUSL6CW.js",
      "chunk-BYOZ6IAM.js",
      "chunk-GDL2ZYRL.js",
      "chunk-GI7JXH3B.js",
      "chunk-DHKKLAXW.js"
    ],
    "route": "/admin/dashboard"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-MQASAR4H.js",
      "chunk-BVYG5JOX.js",
      "chunk-JCUSL6CW.js",
      "chunk-BYOZ6IAM.js",
      "chunk-GDL2ZYRL.js",
      "chunk-GI7JXH3B.js",
      "chunk-DHKKLAXW.js"
    ],
    "route": "/admin/packages/new"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-MQASAR4H.js",
      "chunk-BVYG5JOX.js",
      "chunk-JCUSL6CW.js",
      "chunk-BYOZ6IAM.js",
      "chunk-GDL2ZYRL.js",
      "chunk-GI7JXH3B.js",
      "chunk-DHKKLAXW.js"
    ],
    "route": "/admin/packages/*/edit"
  },
  {
    "renderMode": 0,
    "redirectTo": "/",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 66150, hash: '9a716a0c73865881827deaf816bf8769f22f2d9af290853e545df2172d26c472', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 11849, hash: '3290719d85ca32cad1b07f99b995859dc2ff15fe73e512db9a65eb1e131c1434', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 133229, hash: 'e4ba3777681a88906f6f04a3eb65d79fe07af0a10702ad0a249a6a33ba0ee693', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'packages/adi-kailash-6-days/index.html': {size: 118335, hash: 'e510b509e503b4993518322331fa5a4f79d14953181afa83d128e7559f4965a8', text: () => import('./assets-chunks/packages_adi-kailash-6-days_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 105786, hash: 'a35897ef67d34a0ccb61bbb20916918b0106e57a248135c878cf8d14f63fdce0', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'packages/darma-valley-panchachuli/index.html': {size: 118081, hash: '0a37735f6bb4c492dd0f3c1a781b29b1ead36fe7e251193079f20a7bebb07d00', text: () => import('./assets-chunks/packages_darma-valley-panchachuli_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 107086, hash: 'e8845453e086c78561663e9ec69618b2fde73160b3cebb6d3a64b1b4f3e48504', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'packages/adi-kailash-4-days/index.html': {size: 118193, hash: '6a941cbedf2ab0060e2062a893b0710fe2b37b5f0081d6d40554b6e227741d5a', text: () => import('./assets-chunks/packages_adi-kailash-4-days_index_html.mjs').then(m => m.default)},
    'packages/adi-kailash-9-days/index.html': {size: 119032, hash: '717a2dc470b27b90d93a94ef1b9aab804912338fdbd1ca5921dc1d1db02a161d', text: () => import('./assets-chunks/packages_adi-kailash-9-days_index_html.mjs').then(m => m.default)},
    'packages/index.html': {size: 116679, hash: '1b31813e1a44d460c2ab9dd9eda22076b753313e32d895357ba0d1b4ff8b17e8', text: () => import('./assets-chunks/packages_index_html.mjs').then(m => m.default)},
    'gallery/index.html': {size: 104880, hash: '17c3720ba7b2d1c33b6866c0b448c91b9e89a24df7adb8bae58f6f45ff9923db', text: () => import('./assets-chunks/gallery_index_html.mjs').then(m => m.default)},
    'packages/adi-kailash-7-days/index.html': {size: 118701, hash: '96133f8e7507a01d349073bbc736db072908c1ca24b50f79a49d543649f15462', text: () => import('./assets-chunks/packages_adi-kailash-7-days_index_html.mjs').then(m => m.default)},
    'styles-G4GB5532.css': {size: 111662, hash: 'aQDvafscNvw', text: () => import('./assets-chunks/styles-G4GB5532_css.mjs').then(m => m.default)}
  },
};
