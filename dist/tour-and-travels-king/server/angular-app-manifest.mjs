
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
    'index.csr.html': {size: 66890, hash: '10d524fd7937b1c85a1145c1482adf6572b77f6bc6fb0e57b20ff0a21d4fb345', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 12589, hash: '95c0b8f8d2ae59e395d35298084333f6fcdcfe9cf997fd5ff3bac81bdf3f31d0', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 106526, hash: '1c5a0b89fd1a80a1388769d08e76e6261d7b7538e93e77dea21f68d799c45dde', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'index.html': {size: 133969, hash: 'a803d39a2a8c096ed35acca9bee10362022a3c6d6a4698dc3a7d5af632265fa0', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'packages/adi-kailash-6-days/index.html': {size: 119075, hash: '093029e20622ea9cb3228a4bca03b0826c068b7096f0704b505abf277824114f', text: () => import('./assets-chunks/packages_adi-kailash-6-days_index_html.mjs').then(m => m.default)},
    'packages/darma-valley-panchachuli/index.html': {size: 118811, hash: 'b3231e7d234e35bf1ef66a78c8ef6ea74a3e7c08891157a4c4935bfa07a7a5d5', text: () => import('./assets-chunks/packages_darma-valley-panchachuli_index_html.mjs').then(m => m.default)},
    'packages/adi-kailash-4-days/index.html': {size: 118927, hash: '2b2a30b573c6939d0b8a0568893d5d9cbcceb1def25011a4804d9858148ef341', text: () => import('./assets-chunks/packages_adi-kailash-4-days_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 107826, hash: '0dcdd9608a4069a1526acc098a95c33b6c89e81b4975c9e25ae33f75f6547ad4', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'packages/adi-kailash-9-days/index.html': {size: 119762, hash: '00034134a61088147548278c94ff0666afcefc7491c1a746f9d9c05d203e0b37', text: () => import('./assets-chunks/packages_adi-kailash-9-days_index_html.mjs').then(m => m.default)},
    'packages/index.html': {size: 114664, hash: 'ca45987e82c0266273d85cc8997dab789e38b6f551549b387963e8406d8236a3', text: () => import('./assets-chunks/packages_index_html.mjs').then(m => m.default)},
    'gallery/index.html': {size: 105625, hash: '70429e8e24e475be9008cfe873bc8f010f05c7c5b91ed26c4a7240b54708f36f', text: () => import('./assets-chunks/gallery_index_html.mjs').then(m => m.default)},
    'packages/adi-kailash-7-days/index.html': {size: 119431, hash: 'f431b982fddba42c1547b1adffaa62550e2b3fa890967e07e97acf958de925e6', text: () => import('./assets-chunks/packages_adi-kailash-7-days_index_html.mjs').then(m => m.default)},
    'styles-G4GB5532.css': {size: 111662, hash: 'aQDvafscNvw', text: () => import('./assets-chunks/styles-G4GB5532_css.mjs').then(m => m.default)}
  },
};
