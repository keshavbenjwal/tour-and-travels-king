
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
    'index.csr.html': {size: 66890, hash: 'b9aff04294708bd252e4242a911bb523eb13bcdc482232b251d722fe68dcdd7f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 12589, hash: '1d381a203ee559532638a5cccf611ce64237213cb005080a1814d39853f8c035', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 106688, hash: 'a6b5f17fc578d831682db120b70aeceab4cc41a1a75cb4f3ec0bbcc77517e701', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'index.html': {size: 134131, hash: '080d68e13c4985ad516600e516ee1f1e2aae721cac16fa7ae90da3dc4a082e04', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'packages/adi-kailash-6-days/index.html': {size: 119282, hash: '02c4d98304762c92dfe13e077e74d9b013052a8059aa1d626c32108ad7420eca', text: () => import('./assets-chunks/packages_adi-kailash-6-days_index_html.mjs').then(m => m.default)},
    'packages/darma-valley-panchachuli/index.html': {size: 119018, hash: '8643c783442a6b25408b21660560158affce79c732622eb608fcfecd4c3c601d', text: () => import('./assets-chunks/packages_darma-valley-panchachuli_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 108033, hash: '2067def7bf419e032ade58afa1731797e472baed74d596214aa0c049a2d80f51', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'packages/adi-kailash-4-days/index.html': {size: 119134, hash: 'fcebc8547998f5fa6ed8283715c1f72302fb4b1bcbd8951d7036b26d7697113a', text: () => import('./assets-chunks/packages_adi-kailash-4-days_index_html.mjs').then(m => m.default)},
    'packages/adi-kailash-9-days/index.html': {size: 119969, hash: '572fd71ece8c8c0f04fda0c25020559a1c0edbc4b0debc7daf142c4847f3d879', text: () => import('./assets-chunks/packages_adi-kailash-9-days_index_html.mjs').then(m => m.default)},
    'packages/index.html': {size: 114826, hash: '5eebd18230bed20a80d07bec24db8b998d192eb145430d79464757a74d4dffdd', text: () => import('./assets-chunks/packages_index_html.mjs').then(m => m.default)},
    'gallery/index.html': {size: 105787, hash: '6b5c54084d6122c83bdca4a270e70bf043039f05f37f9e632992193228be0348', text: () => import('./assets-chunks/gallery_index_html.mjs').then(m => m.default)},
    'packages/adi-kailash-7-days/index.html': {size: 119638, hash: 'bd0f4e56ba5315f289395bf4ad31e189a5ddca134b73eceedc147337376a0d5e', text: () => import('./assets-chunks/packages_adi-kailash-7-days_index_html.mjs').then(m => m.default)},
    'styles-G4GB5532.css': {size: 111662, hash: 'aQDvafscNvw', text: () => import('./assets-chunks/styles-G4GB5532_css.mjs').then(m => m.default)}
  },
};
