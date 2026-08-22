
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-PZBBTQ2M.js",
      "chunk-OMZWWYKH.js",
      "chunk-C5CXKC2K.js",
      "chunk-RI76Q256.js",
      "chunk-XP4KKB4J.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-YJXBOCAQ.js",
      "chunk-XP4KKB4J.js"
    ],
    "route": "/about"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-7GUZNZ7O.js",
      "chunk-OMZWWYKH.js",
      "chunk-C5CXKC2K.js",
      "chunk-INFHSRT5.js",
      "chunk-RI76Q256.js",
      "chunk-XP4KKB4J.js"
    ],
    "route": "/packages"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-YSZVY5IV.js",
      "chunk-C5CXKC2K.js",
      "chunk-XP4KKB4J.js"
    ],
    "route": "/packages/adi-kailash-4-days"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-YSZVY5IV.js",
      "chunk-C5CXKC2K.js",
      "chunk-XP4KKB4J.js"
    ],
    "route": "/packages/adi-kailash-6-days"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-YSZVY5IV.js",
      "chunk-C5CXKC2K.js",
      "chunk-XP4KKB4J.js"
    ],
    "route": "/packages/adi-kailash-7-days"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-YSZVY5IV.js",
      "chunk-C5CXKC2K.js",
      "chunk-XP4KKB4J.js"
    ],
    "route": "/packages/adi-kailash-9-days"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-YSZVY5IV.js",
      "chunk-C5CXKC2K.js",
      "chunk-XP4KKB4J.js"
    ],
    "route": "/packages/darma-valley-panchachuli"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-YSZVY5IV.js",
      "chunk-C5CXKC2K.js",
      "chunk-XP4KKB4J.js"
    ],
    "route": "/packages/adi-kailash-delhi-6-days"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-2LXAROPS.js",
      "chunk-INFHSRT5.js",
      "chunk-RI76Q256.js",
      "chunk-XP4KKB4J.js"
    ],
    "route": "/gallery"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TWFXZRJX.js",
      "chunk-BTRC5LA7.js",
      "chunk-XP4KKB4J.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-S7XUP34V.js",
      "chunk-O7HYO5Q6.js",
      "chunk-RI76Q256.js",
      "chunk-2GE3HAG7.js",
      "chunk-PFEFY7AQ.js",
      "chunk-OORSPZTU.js",
      "chunk-Q34B4623.js"
    ],
    "route": "/admin"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-S7XUP34V.js",
      "chunk-O7HYO5Q6.js",
      "chunk-RI76Q256.js",
      "chunk-V3NMMA26.js",
      "chunk-PFFX3RFT.js",
      "chunk-LRH3FJS6.js",
      "chunk-Q34B4623.js",
      "chunk-BTRC5LA7.js"
    ],
    "route": "/admin/login"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-S7XUP34V.js",
      "chunk-O7HYO5Q6.js",
      "chunk-RI76Q256.js",
      "chunk-2GE3HAG7.js",
      "chunk-PFEFY7AQ.js",
      "chunk-OORSPZTU.js",
      "chunk-Q34B4623.js"
    ],
    "route": "/admin/dashboard"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-S7XUP34V.js",
      "chunk-O7HYO5Q6.js",
      "chunk-RI76Q256.js",
      "chunk-2GE3HAG7.js",
      "chunk-PFEFY7AQ.js",
      "chunk-OORSPZTU.js",
      "chunk-Q34B4623.js"
    ],
    "route": "/admin/packages/new"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-S7XUP34V.js",
      "chunk-O7HYO5Q6.js",
      "chunk-RI76Q256.js",
      "chunk-2GE3HAG7.js",
      "chunk-PFEFY7AQ.js",
      "chunk-OORSPZTU.js",
      "chunk-Q34B4623.js"
    ],
    "route": "/admin/packages/*/edit"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-S7XUP34V.js",
      "chunk-O7HYO5Q6.js",
      "chunk-RI76Q256.js",
      "chunk-2GE3HAG7.js",
      "chunk-PFEFY7AQ.js",
      "chunk-OORSPZTU.js",
      "chunk-Q34B4623.js"
    ],
    "route": "/admin/gallery"
  },
  {
    "renderMode": 0,
    "redirectTo": "/",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 68843, hash: '01ce9f517b069d306c82ada66f196a85112d0e7511041a4d967eae926446ffaa', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 14490, hash: '47e9235f91e16468dd7eb697a097e11469cd7a968f0b7aa2fc11fc1fb275d26b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 109196, hash: '37c02cf6153aa79fa6d8f6c6c359c3aca89c369a7261c79cf24992502271e5a1', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'packages/darma-valley-panchachuli/index.html': {size: 121444, hash: 'f226558b35f9725aede475d19b4ee761bcf92d042bc2a48047d3a56a285ed125', text: () => import('./assets-chunks/packages_darma-valley-panchachuli_index_html.mjs').then(m => m.default)},
    'packages/adi-kailash-6-days/index.html': {size: 121707, hash: '888f1339da2032efcecb1d3ea5025cb051fac580fe257d740baed83c2a7f3c4a', text: () => import('./assets-chunks/packages_adi-kailash-6-days_index_html.mjs').then(m => m.default)},
    'index.html': {size: 137120, hash: '0bb6c216584b587065e3c3961a50edc0a5935ef34615b9dd2dbabb86aaf94299', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'gallery/index.html': {size: 113200, hash: 'b283b4651caa92ef849f9c0a067d17b5ccd8a6cca022bcedc9a2417455050bfd', text: () => import('./assets-chunks/gallery_index_html.mjs').then(m => m.default)},
    'packages/adi-kailash-7-days/index.html': {size: 122072, hash: '03b2eb626545e1ef25780adae124a52429666675d864ffb0b67cc33ee810548e', text: () => import('./assets-chunks/packages_adi-kailash-7-days_index_html.mjs').then(m => m.default)},
    'packages/index.html': {size: 119981, hash: 'b9f05ff597c54a542ed5500d4eb56a5fc6f6fadf3e93515a680f34d74644a7b7', text: () => import('./assets-chunks/packages_index_html.mjs').then(m => m.default)},
    'packages/adi-kailash-delhi-6-days/index.html': {size: 121128, hash: 'f96c40b329502dffa5d1de0dcfde892f6c5935fe6f11782c3f14447123bfc0fa', text: () => import('./assets-chunks/packages_adi-kailash-delhi-6-days_index_html.mjs').then(m => m.default)},
    'packages/adi-kailash-4-days/index.html': {size: 121574, hash: 'e5cf0d4d23f66f5575d053e25fbbd16c77f51a9a359384e03b601988786ea093', text: () => import('./assets-chunks/packages_adi-kailash-4-days_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 110374, hash: '8f80955daada1a6bce6f2c59d254dc924e27e4fef22003235b9d75c24fde317f', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'packages/adi-kailash-9-days/index.html': {size: 122395, hash: '3bc2d2e4c4bff763161f8c476d2a8b5c60f7cf088073058345855e7d41e72eca', text: () => import('./assets-chunks/packages_adi-kailash-9-days_index_html.mjs').then(m => m.default)},
    'styles-RIUWCOFL.css': {size: 111715, hash: '8s6AuAAM7bE', text: () => import('./assets-chunks/styles-RIUWCOFL_css.mjs').then(m => m.default)}
  },
};
