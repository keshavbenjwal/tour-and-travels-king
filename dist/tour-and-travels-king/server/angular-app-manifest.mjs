
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-ATBN5IFK.js",
      "chunk-OMZWWYKH.js",
      "chunk-OXOPB2IR.js",
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
      "chunk-3CFTV426.js",
      "chunk-OMZWWYKH.js",
      "chunk-OXOPB2IR.js",
      "chunk-INFHSRT5.js",
      "chunk-RI76Q256.js",
      "chunk-XP4KKB4J.js"
    ],
    "route": "/packages"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4FY5KKLY.js",
      "chunk-OXOPB2IR.js",
      "chunk-XP4KKB4J.js"
    ],
    "route": "/packages/adi-kailash-4-days"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4FY5KKLY.js",
      "chunk-OXOPB2IR.js",
      "chunk-XP4KKB4J.js"
    ],
    "route": "/packages/adi-kailash-6-days"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4FY5KKLY.js",
      "chunk-OXOPB2IR.js",
      "chunk-XP4KKB4J.js"
    ],
    "route": "/packages/adi-kailash-7-days"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4FY5KKLY.js",
      "chunk-OXOPB2IR.js",
      "chunk-XP4KKB4J.js"
    ],
    "route": "/packages/adi-kailash-9-days"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4FY5KKLY.js",
      "chunk-OXOPB2IR.js",
      "chunk-XP4KKB4J.js"
    ],
    "route": "/packages/darma-valley-panchachuli"
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
      "chunk-RED5SRCT.js",
      "chunk-BTRC5LA7.js",
      "chunk-XP4KKB4J.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-2HJRH3LH.js",
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
      "chunk-2HJRH3LH.js",
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
      "chunk-2HJRH3LH.js",
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
      "chunk-2HJRH3LH.js",
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
      "chunk-2HJRH3LH.js",
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
      "chunk-2HJRH3LH.js",
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
    'index.csr.html': {size: 67882, hash: '5c870966e75c77a099f55575c9c06c3a48dcabf3412405465a308ffdcce951a7', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 13529, hash: '4e89ecb25e652292697551a7ad2eeb5952b0820207c5e8addd892ce40a39dd65', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 108235, hash: 'd94f1c85bcd74e98558b10b389e958aa416ebadfc9a9f411aaedd40ab4cda12e', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'packages/darma-valley-panchachuli/index.html': {size: 120483, hash: '500fc83ff3c82c251276c6d6ad46caaa47a96029d8877eba76345e68acee8a1d', text: () => import('./assets-chunks/packages_darma-valley-panchachuli_index_html.mjs').then(m => m.default)},
    'packages/adi-kailash-6-days/index.html': {size: 120746, hash: '1f03f4735c683cdb4edb7cc6e80cc52c845048510c5e01cbbfa262a66856f8d8', text: () => import('./assets-chunks/packages_adi-kailash-6-days_index_html.mjs').then(m => m.default)},
    'index.html': {size: 136159, hash: '199ae719372186c7da4f7b5642bcd2c6714f6ba6a835cc4995b36040d457ee8a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 109406, hash: '7a3a07c62bfff7e4cc450dd2bf866a4d1c55d4ce7924509c71f2888c1def94aa', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'packages/adi-kailash-4-days/index.html': {size: 120598, hash: '7b440d624282bba8eaf8d90d4901a37873565cfda0e36ba90ab878160c14741a', text: () => import('./assets-chunks/packages_adi-kailash-4-days_index_html.mjs').then(m => m.default)},
    'packages/adi-kailash-9-days/index.html': {size: 121442, hash: '61045ce92da22edb167ef9a58ea5853ea04e8d8333251797edd402d71d236a8b', text: () => import('./assets-chunks/packages_adi-kailash-9-days_index_html.mjs').then(m => m.default)},
    'packages/index.html': {size: 116303, hash: '3d2880eb4ce4f592c1fca974340ffb96b5563c25fa484de7da8c25109bf3cec3', text: () => import('./assets-chunks/packages_index_html.mjs').then(m => m.default)},
    'gallery/index.html': {size: 112246, hash: '79e7b854797c2dfe09b8f51feaa951a605c9c293338c07dc918a39866da06397', text: () => import('./assets-chunks/gallery_index_html.mjs').then(m => m.default)},
    'packages/adi-kailash-7-days/index.html': {size: 121111, hash: 'ef5621073e5fb952fce88db1cc4d5d77308e2c0bb276c5cae5a5db6112bc550d', text: () => import('./assets-chunks/packages_adi-kailash-7-days_index_html.mjs').then(m => m.default)},
    'styles-RIUWCOFL.css': {size: 111715, hash: '8s6AuAAM7bE', text: () => import('./assets-chunks/styles-RIUWCOFL_css.mjs').then(m => m.default)}
  },
};
