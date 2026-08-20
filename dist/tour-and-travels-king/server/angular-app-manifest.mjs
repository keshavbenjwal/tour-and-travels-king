
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
      "chunk-TWFXZRJX.js",
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
    'index.csr.html': {size: 68843, hash: '84f394b265542cb573318649a46277df3a0304495840bea6b6e995529f708b4a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 14490, hash: '39fbe066109f39e93c4034f2be8b5d35222c07aa90079fd8cdf07528e2ac43d4', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 109196, hash: 'd958a27b4acf1e91c49a5fb546dfa9361a10778c40078e8d8c37438edc29f541', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'packages/adi-kailash-6-days/index.html': {size: 121707, hash: 'ea148c94953f0273dbe2a38974ad216ae33b94de5b9a29aebdf5189125539585', text: () => import('./assets-chunks/packages_adi-kailash-6-days_index_html.mjs').then(m => m.default)},
    'index.html': {size: 137120, hash: 'e145a0d2fe5e4835acd4fd0e82e51f1eb641e25e04791fb3d5279fcdfe9d5281', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'packages/darma-valley-panchachuli/index.html': {size: 121444, hash: 'd8c0e81f59c9fbfe53fc8d276ffe66774794afe5db26a1fca03c5d2d82f01f08', text: () => import('./assets-chunks/packages_darma-valley-panchachuli_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 110374, hash: '9efc03f4ba66712d06aca280899e725995a7c4ac1d7a275b9d71e47e650cd5ff', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'packages/adi-kailash-4-days/index.html': {size: 121574, hash: 'e05afdb65a44d34182fd18bf59604bcead52ba665122bc4581bf3f3598766cf4', text: () => import('./assets-chunks/packages_adi-kailash-4-days_index_html.mjs').then(m => m.default)},
    'packages/adi-kailash-9-days/index.html': {size: 122395, hash: '48506fe8012829ed0569684afa820750a24233f80d9bbe647f9c3610336d4b20', text: () => import('./assets-chunks/packages_adi-kailash-9-days_index_html.mjs').then(m => m.default)},
    'packages/index.html': {size: 117271, hash: 'c337360968fb7ec9fe76851340bd79e684ed767afcf5bb345961bdebd6944fb9', text: () => import('./assets-chunks/packages_index_html.mjs').then(m => m.default)},
    'gallery/index.html': {size: 113207, hash: '625039f0336fd7c80a1f4a169dd40b602f66a6f13d36bc971ed950b112892798', text: () => import('./assets-chunks/gallery_index_html.mjs').then(m => m.default)},
    'packages/adi-kailash-7-days/index.html': {size: 122064, hash: '8e87e7cfa3275a0cdfb2ba60b674cf0ce2b428d80e452f78f84b7943fa5596b7', text: () => import('./assets-chunks/packages_adi-kailash-7-days_index_html.mjs').then(m => m.default)},
    'styles-RIUWCOFL.css': {size: 111715, hash: '8s6AuAAM7bE', text: () => import('./assets-chunks/styles-RIUWCOFL_css.mjs').then(m => m.default)}
  },
};
