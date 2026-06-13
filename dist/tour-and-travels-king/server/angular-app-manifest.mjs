
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-5B6RRK37.js",
      "chunk-5R4NRR6H.js",
      "chunk-ZYY4OBTA.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-S4Z6O2VD.js",
      "chunk-ZYY4OBTA.js"
    ],
    "route": "/about"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-2NXWCQNF.js",
      "chunk-5R4NRR6H.js",
      "chunk-ZYY4OBTA.js"
    ],
    "route": "/packages"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-J5NFQI3M.js",
      "chunk-5R4NRR6H.js",
      "chunk-ZYY4OBTA.js"
    ],
    "route": "/packages/adi-kailash-4-days"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-J5NFQI3M.js",
      "chunk-5R4NRR6H.js",
      "chunk-ZYY4OBTA.js"
    ],
    "route": "/packages/adi-kailash-6-days"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-J5NFQI3M.js",
      "chunk-5R4NRR6H.js",
      "chunk-ZYY4OBTA.js"
    ],
    "route": "/packages/adi-kailash-7-days"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-J5NFQI3M.js",
      "chunk-5R4NRR6H.js",
      "chunk-ZYY4OBTA.js"
    ],
    "route": "/packages/adi-kailash-9-days"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-J5NFQI3M.js",
      "chunk-5R4NRR6H.js",
      "chunk-ZYY4OBTA.js"
    ],
    "route": "/packages/darma-valley-panchachuli"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-PVM6NKRK.js",
      "chunk-ZYY4OBTA.js"
    ],
    "route": "/gallery"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-UGSTCPHW.js",
      "chunk-ZYY4OBTA.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 0,
    "redirectTo": "/",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 12249, hash: '615c325ad1f41e6ca235eb701eca9a8073b4cdc91979d057be6389db51123a1f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 11798, hash: '186a3d808603ec05aa862b73ed1d2eaff7cc54c902f2f114a6f7549259c704f8', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 51001, hash: '3df9fa37529aba65a83f9a686d312f1c13caceccf7c69efb0caf826a9af9e8e1', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'packages/adi-kailash-6-days/index.html': {size: 63550, hash: '747bc67b9061472234a020b3c6420586b904f46507efa0e4481f52157a52b2e9', text: () => import('./assets-chunks/packages_adi-kailash-6-days_index_html.mjs').then(m => m.default)},
    'index.html': {size: 78444, hash: 'a52b057b257e4d78ec53b2154b7245e89b938ab6ea5d55cc8a452cb7ac4982ad', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'packages/darma-valley-panchachuli/index.html': {size: 63286, hash: '8c5b650a5f1e87c835879432b496e79e39e04abe96650d45aa400476aceac0b1', text: () => import('./assets-chunks/packages_darma-valley-panchachuli_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 52249, hash: '2f8bbaff704ad1213cc3b54d3148bf2ff32af1af6a52500458474c309d04466c', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'packages/adi-kailash-9-days/index.html': {size: 64237, hash: '24ea084e37969bdb7f240ecd8fe4e7b6ab8dfc18091f02a35c2a167738a0e378', text: () => import('./assets-chunks/packages_adi-kailash-9-days_index_html.mjs').then(m => m.default)},
    'packages/adi-kailash-4-days/index.html': {size: 63418, hash: '9fcb934bb9b8a4e13fcdb226ef465213b9a9ce03a5b7725bbc652d5d5c1d4b8d', text: () => import('./assets-chunks/packages_adi-kailash-4-days_index_html.mjs').then(m => m.default)},
    'packages/adi-kailash-7-days/index.html': {size: 63916, hash: '11bea0f58d01c77b74b56482f1f166e298c150133d8bae22341bf9a1344d050a', text: () => import('./assets-chunks/packages_adi-kailash-7-days_index_html.mjs').then(m => m.default)},
    'gallery/index.html': {size: 50095, hash: 'fd97307f71ef2a05d1084f012fa708165543c384598213286ae6845588ff8971', text: () => import('./assets-chunks/gallery_index_html.mjs').then(m => m.default)},
    'packages/index.html': {size: 61894, hash: 'e5ceb6175a14ba2189dbedf5d4de2889cb8d0a4eaadb34c45aea6bf1c8e1d3cc', text: () => import('./assets-chunks/packages_index_html.mjs').then(m => m.default)},
    'styles-FGQCCUH7.css': {size: 7951, hash: 'zr1V27S8ss4', text: () => import('./assets-chunks/styles-FGQCCUH7_css.mjs').then(m => m.default)}
  },
};
