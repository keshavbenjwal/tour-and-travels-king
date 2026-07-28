
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
      "chunk-7F4GDLO2.js",
      "chunk-UBYQAPCH.js",
      "chunk-UQMRJZ4X.js",
      "chunk-GYSKLFR5.js"
    ],
    "route": "/packages"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TGYK55WK.js",
      "chunk-UQMRJZ4X.js",
      "chunk-GYSKLFR5.js"
    ],
    "route": "/packages/adi-kailash-4-days"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TGYK55WK.js",
      "chunk-UQMRJZ4X.js",
      "chunk-GYSKLFR5.js"
    ],
    "route": "/packages/adi-kailash-6-days"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TGYK55WK.js",
      "chunk-UQMRJZ4X.js",
      "chunk-GYSKLFR5.js"
    ],
    "route": "/packages/adi-kailash-7-days"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TGYK55WK.js",
      "chunk-UQMRJZ4X.js",
      "chunk-GYSKLFR5.js"
    ],
    "route": "/packages/adi-kailash-9-days"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TGYK55WK.js",
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
      "chunk-WC5TVLJO.js",
      "chunk-LYPONCOK.js",
      "chunk-UBYQAPCH.js",
      "chunk-XGY3LFGL.js",
      "chunk-RPDQUMHC.js",
      "chunk-L2VPYOVH.js",
      "chunk-2A6QB2J4.js"
    ],
    "route": "/admin"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-WC5TVLJO.js",
      "chunk-LYPONCOK.js",
      "chunk-UBYQAPCH.js",
      "chunk-KXC6UAY4.js",
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
      "chunk-WC5TVLJO.js",
      "chunk-LYPONCOK.js",
      "chunk-UBYQAPCH.js",
      "chunk-XGY3LFGL.js",
      "chunk-RPDQUMHC.js",
      "chunk-L2VPYOVH.js",
      "chunk-2A6QB2J4.js"
    ],
    "route": "/admin/dashboard"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-WC5TVLJO.js",
      "chunk-LYPONCOK.js",
      "chunk-UBYQAPCH.js",
      "chunk-XGY3LFGL.js",
      "chunk-RPDQUMHC.js",
      "chunk-L2VPYOVH.js",
      "chunk-2A6QB2J4.js"
    ],
    "route": "/admin/packages/new"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-WC5TVLJO.js",
      "chunk-LYPONCOK.js",
      "chunk-UBYQAPCH.js",
      "chunk-XGY3LFGL.js",
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
    'index.csr.html': {size: 66150, hash: '8254ba099cb65584caac4bbef394bfe27108418523c74e4a645c51045fe2860d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 11849, hash: 'e48a9b1bcadfff7555083b06b0afc2ff4b4d67852ba9da06bfdfbbf214a211a7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 105786, hash: 'ae9ce6208c3b94cb0de9c2ad641623be77f53f2143aabd28e238e6325e792b96', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'packages/darma-valley-panchachuli/index.html': {size: 118071, hash: '39c147e0232aa0d839fd79c61dd229b63e5f42c418eac8a05de32c3c649fd198', text: () => import('./assets-chunks/packages_darma-valley-panchachuli_index_html.mjs').then(m => m.default)},
    'packages/adi-kailash-6-days/index.html': {size: 118335, hash: '4f275ed095d7c4c2854f8e1a23755b99b9ba673250dfeef17696dbeabdeb6379', text: () => import('./assets-chunks/packages_adi-kailash-6-days_index_html.mjs').then(m => m.default)},
    'index.html': {size: 133229, hash: '25c0e3b39fd0931595605484bd2528af48762911a44d4db4476bfe4b44ca6380', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 107081, hash: 'ee143dc01e90787621592b562c04b4e52e6efa2ea6cb67e1935588c5759fb655', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'packages/adi-kailash-4-days/index.html': {size: 118187, hash: 'ba985bc696ba63783602356b4e12c7228eb174d97105627ccceecfcb1b25ceae', text: () => import('./assets-chunks/packages_adi-kailash-4-days_index_html.mjs').then(m => m.default)},
    'packages/adi-kailash-9-days/index.html': {size: 119032, hash: '807d8096a45999c73a0c8fdac7001945635aeebae0e5a440689b7e24232db6ec', text: () => import('./assets-chunks/packages_adi-kailash-9-days_index_html.mjs').then(m => m.default)},
    'packages/index.html': {size: 114194, hash: '31b6611e17927b2bf06087a368488acd90097f2983159bd15e191b5bd28948e9', text: () => import('./assets-chunks/packages_index_html.mjs').then(m => m.default)},
    'gallery/index.html': {size: 104885, hash: 'd2282c2a14b3daea6ae2740f3e1404d6d471012502d42c17cd327b0d75ac1384', text: () => import('./assets-chunks/gallery_index_html.mjs').then(m => m.default)},
    'packages/adi-kailash-7-days/index.html': {size: 118701, hash: '35492cd30159f5c0f2242563b867260b0a59bc6ef10e28bc6d9c0a3eb3c21d25', text: () => import('./assets-chunks/packages_adi-kailash-7-days_index_html.mjs').then(m => m.default)},
    'styles-G4GB5532.css': {size: 111662, hash: 'aQDvafscNvw', text: () => import('./assets-chunks/styles-G4GB5532_css.mjs').then(m => m.default)}
  },
};
