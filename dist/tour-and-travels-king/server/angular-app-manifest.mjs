
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-7HZFO2RU.js",
      "chunk-UU4EOAPN.js",
      "chunk-SIWYWTBN.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ISJG3TOI.js",
      "chunk-SIWYWTBN.js"
    ],
    "route": "/about"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-FVTZNIB5.js",
      "chunk-UU4EOAPN.js",
      "chunk-SIWYWTBN.js"
    ],
    "route": "/packages"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-P5UTFWE3.js",
      "chunk-UU4EOAPN.js",
      "chunk-SIWYWTBN.js"
    ],
    "route": "/packages/adi-kailash-4-days"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-P5UTFWE3.js",
      "chunk-UU4EOAPN.js",
      "chunk-SIWYWTBN.js"
    ],
    "route": "/packages/adi-kailash-6-days"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-P5UTFWE3.js",
      "chunk-UU4EOAPN.js",
      "chunk-SIWYWTBN.js"
    ],
    "route": "/packages/adi-kailash-7-days"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-P5UTFWE3.js",
      "chunk-UU4EOAPN.js",
      "chunk-SIWYWTBN.js"
    ],
    "route": "/packages/adi-kailash-9-days"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-P5UTFWE3.js",
      "chunk-UU4EOAPN.js",
      "chunk-SIWYWTBN.js"
    ],
    "route": "/packages/darma-valley-panchachuli"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-7JNNMKDX.js",
      "chunk-SIWYWTBN.js"
    ],
    "route": "/gallery"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-2FLOMY5G.js",
      "chunk-SIWYWTBN.js"
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
    'index.csr.html': {size: 12249, hash: 'e8773fcf764b548e8451faccd5665318ed78c907832b682fd5498dd8b2a8ce4f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 11798, hash: '3735d651091df50b07eeee64433569e93942acd45b3dbbb0506b5ad560d810bd', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 50964, hash: '74099cfae6b96a8913a8b321d8916a4ac7968a9da960d6acacab73b9ef0457b3', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'index.html': {size: 78402, hash: '1a63f9ef55c814188b248d2c14e592a01b1c5cc4d74fecea12da033cc3e0c5b6', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'packages/adi-kailash-6-days/index.html': {size: 63487, hash: '74821e5f05db9b922cb3c547ced97a4f1b814da46e53c44557bcb1f9c92286b3', text: () => import('./assets-chunks/packages_adi-kailash-6-days_index_html.mjs').then(m => m.default)},
    'packages/darma-valley-panchachuli/index.html': {size: 63232, hash: 'ff4b44173b5f6de0c96c002a682821a8376c274408b33efbfb19d9fe6179053e', text: () => import('./assets-chunks/packages_darma-valley-panchachuli_index_html.mjs').then(m => m.default)},
    'packages/adi-kailash-4-days/index.html': {size: 63348, hash: '0430ef3eaed530c098003628b5ccd8cb3314bd219f3fe89b7329a480f5d7f69d', text: () => import('./assets-chunks/packages_adi-kailash-4-days_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 52207, hash: '644c551b6d0bba7b52758110ec06eda73096df949a94a7987be224826e19c520', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'packages/adi-kailash-9-days/index.html': {size: 64171, hash: 'fef8c1f83a15cd2a4f784257ede1fc7d704a30e3b487309db36d5f294e844a76', text: () => import('./assets-chunks/packages_adi-kailash-9-days_index_html.mjs').then(m => m.default)},
    'gallery/index.html': {size: 50031, hash: '7b31e4808fa99157fad043b4673e5cdfbc0b6a355f7b1eac25ba7c21cddd1241', text: () => import('./assets-chunks/gallery_index_html.mjs').then(m => m.default)},
    'packages/index.html': {size: 61837, hash: '21cc676ff7acf78a293ecd56546a875f3e7117dbf8e6a40eb2f1c63695a96fbc', text: () => import('./assets-chunks/packages_index_html.mjs').then(m => m.default)},
    'packages/adi-kailash-7-days/index.html': {size: 63840, hash: '607c76a2fb769f2f756dfcd609e75a0468a43a85351fca531633d4dca4c635fe', text: () => import('./assets-chunks/packages_adi-kailash-7-days_index_html.mjs').then(m => m.default)},
    'styles-FGQCCUH7.css': {size: 7951, hash: 'zr1V27S8ss4', text: () => import('./assets-chunks/styles-FGQCCUH7_css.mjs').then(m => m.default)}
  },
};
