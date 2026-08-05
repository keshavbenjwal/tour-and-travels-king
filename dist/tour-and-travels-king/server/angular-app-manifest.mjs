
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-2IB3N7KA.js",
      "chunk-T72VKHYM.js",
      "chunk-P2D4L7YT.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-WEZ5R4PS.js",
      "chunk-P2D4L7YT.js"
    ],
    "route": "/about"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-YX2Q4QHS.js",
      "chunk-GTKE3NSO.js",
      "chunk-T72VKHYM.js",
      "chunk-P2D4L7YT.js"
    ],
    "route": "/packages"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-5WGLAQRL.js",
      "chunk-T72VKHYM.js",
      "chunk-P2D4L7YT.js"
    ],
    "route": "/packages/adi-kailash-4-days"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-5WGLAQRL.js",
      "chunk-T72VKHYM.js",
      "chunk-P2D4L7YT.js"
    ],
    "route": "/packages/adi-kailash-6-days"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-5WGLAQRL.js",
      "chunk-T72VKHYM.js",
      "chunk-P2D4L7YT.js"
    ],
    "route": "/packages/adi-kailash-7-days"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-5WGLAQRL.js",
      "chunk-T72VKHYM.js",
      "chunk-P2D4L7YT.js"
    ],
    "route": "/packages/adi-kailash-9-days"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-5WGLAQRL.js",
      "chunk-T72VKHYM.js",
      "chunk-P2D4L7YT.js"
    ],
    "route": "/packages/darma-valley-panchachuli"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-HUJRP2TW.js",
      "chunk-P2D4L7YT.js"
    ],
    "route": "/gallery"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CP2XHE54.js",
      "chunk-7Z6DZXEB.js",
      "chunk-P2D4L7YT.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-HQDDK6TP.js",
      "chunk-X5JYFLGS.js",
      "chunk-3BXVZM3P.js",
      "chunk-GTKE3NSO.js",
      "chunk-Y2FUVH5G.js",
      "chunk-S2UTZJO3.js",
      "chunk-75Y5WEZY.js",
      "chunk-LQWTIRXF.js"
    ],
    "route": "/admin"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-HQDDK6TP.js",
      "chunk-X5JYFLGS.js",
      "chunk-3BXVZM3P.js",
      "chunk-GTKE3NSO.js",
      "chunk-ZTX7635A.js",
      "chunk-4N3X4NEL.js",
      "chunk-EOL5VP3Y.js",
      "chunk-LQWTIRXF.js",
      "chunk-7Z6DZXEB.js"
    ],
    "route": "/admin/login"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-HQDDK6TP.js",
      "chunk-X5JYFLGS.js",
      "chunk-3BXVZM3P.js",
      "chunk-GTKE3NSO.js",
      "chunk-Y2FUVH5G.js",
      "chunk-S2UTZJO3.js",
      "chunk-75Y5WEZY.js",
      "chunk-LQWTIRXF.js"
    ],
    "route": "/admin/dashboard"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-HQDDK6TP.js",
      "chunk-X5JYFLGS.js",
      "chunk-3BXVZM3P.js",
      "chunk-GTKE3NSO.js",
      "chunk-Y2FUVH5G.js",
      "chunk-S2UTZJO3.js",
      "chunk-75Y5WEZY.js",
      "chunk-LQWTIRXF.js"
    ],
    "route": "/admin/packages/new"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-HQDDK6TP.js",
      "chunk-X5JYFLGS.js",
      "chunk-3BXVZM3P.js",
      "chunk-GTKE3NSO.js",
      "chunk-Y2FUVH5G.js",
      "chunk-S2UTZJO3.js",
      "chunk-75Y5WEZY.js",
      "chunk-LQWTIRXF.js"
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
    'index.csr.html': {size: 66890, hash: '9594937cd8ee09b7c1ad96b0600301ec40a839dce3b815a2a0ef70103ab45d36', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 12589, hash: 'a99c62bed910e30b5a9653165185aebc5a01bfeefd39c76e91ccb5ced1ae84ac', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'packages/adi-kailash-6-days/index.html': {size: 119253, hash: 'a4093d72405c63bb75abc0a9bbc86c43a48e90005ae02039d1a01a3fae6bc647', text: () => import('./assets-chunks/packages_adi-kailash-6-days_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 106659, hash: '2b5210dba0a7f5ba6767cb348b0b55188207122d691e937dcca20bfbb9a7c29e', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'index.html': {size: 134102, hash: '8f4eca085d5e762f7f3669088e82b90710623d9d9821e3fe623fc43d6c300d8f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'packages/darma-valley-panchachuli/index.html': {size: 118983, hash: '5df87b1b41ea1c9b646186d52308896c0a79c0973c81d8279905f84bc80b6399', text: () => import('./assets-chunks/packages_darma-valley-panchachuli_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 107995, hash: 'faa746bda791d604245e5394529da659a4fbc0126536526f354aeacab740f99b', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'packages/adi-kailash-4-days/index.html': {size: 119121, hash: 'a75c0ce6603a580fe48aa8bc9541996658f5ba6c79b73ebe9827c5b8adbc3567', text: () => import('./assets-chunks/packages_adi-kailash-4-days_index_html.mjs').then(m => m.default)},
    'packages/adi-kailash-9-days/index.html': {size: 119934, hash: '37fe4a8006a263c43021a17985c584b31ec63c39aa1898b3b194c327ca309e5a', text: () => import('./assets-chunks/packages_adi-kailash-9-days_index_html.mjs').then(m => m.default)},
    'packages/index.html': {size: 114792, hash: '7ac43ff31c42b5325e7c2a91939a61e685bfc8b6bf4680bf4777ccc487cc3e24', text: () => import('./assets-chunks/packages_index_html.mjs').then(m => m.default)},
    'gallery/index.html': {size: 105758, hash: '14b16be6929654b5f70e20e605ad0420774fc428dcabd0b90fb57cb1cbb20e04', text: () => import('./assets-chunks/gallery_index_html.mjs').then(m => m.default)},
    'packages/adi-kailash-7-days/index.html': {size: 119603, hash: 'ac74f7292ce6165e2ff074616e537e83eea45bc55a649ee7d2ae8028af3aed1a', text: () => import('./assets-chunks/packages_adi-kailash-7-days_index_html.mjs').then(m => m.default)},
    'styles-G4GB5532.css': {size: 111662, hash: 'aQDvafscNvw', text: () => import('./assets-chunks/styles-G4GB5532_css.mjs').then(m => m.default)}
  },
};
