
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
    'index.csr.html': {size: 68600, hash: 'b54a2653a71d771239260335919023e5127df91ed7e1eae6216df8294b70080c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 14247, hash: 'e6dd8799860e442d80a1f2e506c454e15f00ea345fd8b64f47fda44ff0e2225a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 108953, hash: 'ac91d1a30543306b2fb1e40ce80d95b9e5b102c4b7999835e37d8d65ba8ca29d', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'packages/adi-kailash-6-days/index.html': {size: 121464, hash: '0b0090e72fbeca6865e28b74262becd0f6877ad67fa63a4e767aeb9cb3466e12', text: () => import('./assets-chunks/packages_adi-kailash-6-days_index_html.mjs').then(m => m.default)},
    'index.html': {size: 136877, hash: '69c8279657432d23beb9f599adc1fad4678446d3023dc3bbf3b8610adb2c78dd', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'packages/darma-valley-panchachuli/index.html': {size: 121201, hash: 'db133d24143a607cf6de7c4f25eefa8134d6684063a0b51929966fe6d5c6f66f', text: () => import('./assets-chunks/packages_darma-valley-panchachuli_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 110131, hash: '8610649d68ae1c054b4d8adf9d57cfaa126544bef91360837082a4bd4233232b', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'packages/adi-kailash-4-days/index.html': {size: 121331, hash: 'bda4f1b2e147859d1d2f9b69185c02fb046621995c064a311fbb26d3390bf34a', text: () => import('./assets-chunks/packages_adi-kailash-4-days_index_html.mjs').then(m => m.default)},
    'packages/adi-kailash-9-days/index.html': {size: 122152, hash: 'd0197187bd5ade22ccdccc7702bae3c4186e9abaa8ce09ce3a805fbb8bef2340', text: () => import('./assets-chunks/packages_adi-kailash-9-days_index_html.mjs').then(m => m.default)},
    'packages/index.html': {size: 117028, hash: '7cab37614a949179acbacfaf38800e2818c25f60872d052c7b774cf70f3bda13', text: () => import('./assets-chunks/packages_index_html.mjs').then(m => m.default)},
    'gallery/index.html': {size: 112964, hash: '4ed4c7df07cc3d4e177978995b1ade2045ba524b7887651733cb4488ca326943', text: () => import('./assets-chunks/gallery_index_html.mjs').then(m => m.default)},
    'packages/adi-kailash-7-days/index.html': {size: 121821, hash: 'db904ab632ee1e762992f75344b29033f3e7fe7b45cd22cf03df2606410f37bc', text: () => import('./assets-chunks/packages_adi-kailash-7-days_index_html.mjs').then(m => m.default)},
    'styles-RIUWCOFL.css': {size: 111715, hash: '8s6AuAAM7bE', text: () => import('./assets-chunks/styles-RIUWCOFL_css.mjs').then(m => m.default)}
  },
};
