
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-EJXGZ6YD.js",
      "chunk-UQMRJZ4X.js",
      "chunk-GYSKLFR5.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BNXPFESH.js",
      "chunk-GYSKLFR5.js"
    ],
    "route": "/about"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CU4WNW5J.js",
      "chunk-UQMRJZ4X.js",
      "chunk-GYSKLFR5.js"
    ],
    "route": "/packages"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-YQHLXK4C.js",
      "chunk-UQMRJZ4X.js",
      "chunk-GYSKLFR5.js"
    ],
    "route": "/packages/adi-kailash-4-days"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-YQHLXK4C.js",
      "chunk-UQMRJZ4X.js",
      "chunk-GYSKLFR5.js"
    ],
    "route": "/packages/adi-kailash-6-days"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-YQHLXK4C.js",
      "chunk-UQMRJZ4X.js",
      "chunk-GYSKLFR5.js"
    ],
    "route": "/packages/adi-kailash-7-days"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-YQHLXK4C.js",
      "chunk-UQMRJZ4X.js",
      "chunk-GYSKLFR5.js"
    ],
    "route": "/packages/adi-kailash-9-days"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-YQHLXK4C.js",
      "chunk-UQMRJZ4X.js",
      "chunk-GYSKLFR5.js"
    ],
    "route": "/packages/darma-valley-panchachuli"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-QTUH34TY.js",
      "chunk-GYSKLFR5.js"
    ],
    "route": "/gallery"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-NGL6EIE6.js",
      "chunk-5EXBFQNX.js",
      "chunk-GYSKLFR5.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-TG6UJPWA.js",
      "chunk-G56GCO7V.js",
      "chunk-MWKDJYJW.js",
      "chunk-WISUBU5H.js",
      "chunk-RPDQUMHC.js",
      "chunk-L2VPYOVH.js",
      "chunk-2A6QB2J4.js"
    ],
    "route": "/admin"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-TG6UJPWA.js",
      "chunk-G56GCO7V.js",
      "chunk-MWKDJYJW.js",
      "chunk-HIBRJMIT.js",
      "chunk-UR5IQY5D.js",
      "chunk-Y4Z4X5R6.js",
      "chunk-2A6QB2J4.js",
      "chunk-5EXBFQNX.js"
    ],
    "route": "/admin/login"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-TG6UJPWA.js",
      "chunk-G56GCO7V.js",
      "chunk-MWKDJYJW.js",
      "chunk-WISUBU5H.js",
      "chunk-RPDQUMHC.js",
      "chunk-L2VPYOVH.js",
      "chunk-2A6QB2J4.js"
    ],
    "route": "/admin/dashboard"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-TG6UJPWA.js",
      "chunk-G56GCO7V.js",
      "chunk-MWKDJYJW.js",
      "chunk-WISUBU5H.js",
      "chunk-RPDQUMHC.js",
      "chunk-L2VPYOVH.js",
      "chunk-2A6QB2J4.js"
    ],
    "route": "/admin/packages/new"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-TG6UJPWA.js",
      "chunk-G56GCO7V.js",
      "chunk-MWKDJYJW.js",
      "chunk-WISUBU5H.js",
      "chunk-RPDQUMHC.js",
      "chunk-L2VPYOVH.js",
      "chunk-2A6QB2J4.js"
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
    'index.csr.html': {size: 66150, hash: 'aadc0cd9f2ee21bc7d6c22b3a04ff1f75968bcafbfaa21834867add410ca6c15', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 11849, hash: 'f88af3c22453bce2a490dd2204a9ac3c2b779c91c5b4afefc2cfda4db78001bd', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 105786, hash: 'fc02a5ce0f1064b36e92de1d00ffd7955ef330ccbb09d2ea8697c281757fd455', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'packages/adi-kailash-6-days/index.html': {size: 118335, hash: '6cd4133594754b7e37d70de0cbc1b5bb87081355c0d6587c41d3143cec437e27', text: () => import('./assets-chunks/packages_adi-kailash-6-days_index_html.mjs').then(m => m.default)},
    'index.html': {size: 133229, hash: 'a62a2851c6e3438814c9f4f50bbc8912f1855e8ac32784b576538d0485446721', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'packages/darma-valley-panchachuli/index.html': {size: 118071, hash: 'cc5bda0e0b14c0f83c67eac84fc1d30a265ddb26f668306e69a5e7487d61e1da', text: () => import('./assets-chunks/packages_darma-valley-panchachuli_index_html.mjs').then(m => m.default)},
    'packages/adi-kailash-4-days/index.html': {size: 118203, hash: '184b88700f90eaceb5454f53a62510f92f7a53500dd642ce1c28de539c6fe4ee', text: () => import('./assets-chunks/packages_adi-kailash-4-days_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 107086, hash: 'a4f53b27365a2d0cb1c0b10be2911db527128c86fe04479474ff1015be1b68a7', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'packages/adi-kailash-9-days/index.html': {size: 119022, hash: '00b819ae267a44b6b769cc582f6a59b2420d394c0ecd0bf7150b8d1a97b7735e', text: () => import('./assets-chunks/packages_adi-kailash-9-days_index_html.mjs').then(m => m.default)},
    'packages/index.html': {size: 116679, hash: '28649bc0c859434e4cc0ab5c54c8306542abf613dd4eaff0f710e4a528d94459', text: () => import('./assets-chunks/packages_index_html.mjs').then(m => m.default)},
    'gallery/index.html': {size: 104885, hash: '298466586ebb22f655f3150913a8c72df13d99ad4aec4cb487682f3a53c081fc', text: () => import('./assets-chunks/gallery_index_html.mjs').then(m => m.default)},
    'packages/adi-kailash-7-days/index.html': {size: 118691, hash: 'cd07f8e88996a9558d603022446042fc8073b8825cf73bd76f928c5a003bed04', text: () => import('./assets-chunks/packages_adi-kailash-7-days_index_html.mjs').then(m => m.default)},
    'styles-G4GB5532.css': {size: 111662, hash: 'aQDvafscNvw', text: () => import('./assets-chunks/styles-G4GB5532_css.mjs').then(m => m.default)}
  },
};
