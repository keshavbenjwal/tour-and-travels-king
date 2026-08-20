
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-LZUXJ4JL.js",
      "chunk-HLTSOGPG.js",
      "chunk-FRVRYN3R.js",
      "chunk-ELQZ54ZE.js",
      "chunk-55I2RGUS.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Q6N6AYSM.js",
      "chunk-55I2RGUS.js"
    ],
    "route": "/about"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-MXPN46UI.js",
      "chunk-HLTSOGPG.js",
      "chunk-FRVRYN3R.js",
      "chunk-BJZIJQTG.js",
      "chunk-ELQZ54ZE.js",
      "chunk-55I2RGUS.js"
    ],
    "route": "/packages"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-YMX5LR4O.js",
      "chunk-FRVRYN3R.js",
      "chunk-55I2RGUS.js"
    ],
    "route": "/packages/adi-kailash-4-days"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-YMX5LR4O.js",
      "chunk-FRVRYN3R.js",
      "chunk-55I2RGUS.js"
    ],
    "route": "/packages/adi-kailash-6-days"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-YMX5LR4O.js",
      "chunk-FRVRYN3R.js",
      "chunk-55I2RGUS.js"
    ],
    "route": "/packages/adi-kailash-7-days"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-YMX5LR4O.js",
      "chunk-FRVRYN3R.js",
      "chunk-55I2RGUS.js"
    ],
    "route": "/packages/adi-kailash-9-days"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-YMX5LR4O.js",
      "chunk-FRVRYN3R.js",
      "chunk-55I2RGUS.js"
    ],
    "route": "/packages/darma-valley-panchachuli"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-S7RWEKNX.js",
      "chunk-BJZIJQTG.js",
      "chunk-ELQZ54ZE.js",
      "chunk-55I2RGUS.js"
    ],
    "route": "/gallery"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-IZLQ6VDS.js",
      "chunk-6EMHWZFS.js",
      "chunk-55I2RGUS.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-H5IHVLA4.js",
      "chunk-HPIQCZGK.js",
      "chunk-ELQZ54ZE.js",
      "chunk-SZQQIJ5L.js",
      "chunk-CDB5I46B.js",
      "chunk-Q47FT42N.js",
      "chunk-ORRQ6PM4.js"
    ],
    "route": "/admin"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-H5IHVLA4.js",
      "chunk-HPIQCZGK.js",
      "chunk-ELQZ54ZE.js",
      "chunk-ITF6SM3J.js",
      "chunk-WNTOKPXI.js",
      "chunk-HV2UAAH2.js",
      "chunk-ORRQ6PM4.js",
      "chunk-6EMHWZFS.js"
    ],
    "route": "/admin/login"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-H5IHVLA4.js",
      "chunk-HPIQCZGK.js",
      "chunk-ELQZ54ZE.js",
      "chunk-SZQQIJ5L.js",
      "chunk-CDB5I46B.js",
      "chunk-Q47FT42N.js",
      "chunk-ORRQ6PM4.js"
    ],
    "route": "/admin/dashboard"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-H5IHVLA4.js",
      "chunk-HPIQCZGK.js",
      "chunk-ELQZ54ZE.js",
      "chunk-SZQQIJ5L.js",
      "chunk-CDB5I46B.js",
      "chunk-Q47FT42N.js",
      "chunk-ORRQ6PM4.js"
    ],
    "route": "/admin/packages/new"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-H5IHVLA4.js",
      "chunk-HPIQCZGK.js",
      "chunk-ELQZ54ZE.js",
      "chunk-SZQQIJ5L.js",
      "chunk-CDB5I46B.js",
      "chunk-Q47FT42N.js",
      "chunk-ORRQ6PM4.js"
    ],
    "route": "/admin/packages/*/edit"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-H5IHVLA4.js",
      "chunk-HPIQCZGK.js",
      "chunk-ELQZ54ZE.js",
      "chunk-SZQQIJ5L.js",
      "chunk-CDB5I46B.js",
      "chunk-Q47FT42N.js",
      "chunk-ORRQ6PM4.js"
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
    'index.csr.html': {size: 67356, hash: 'a0d8d51be9810ef0b6f3e2e63d8896f057d2295fce84ae31f62cb6a1bfde5232', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 13003, hash: '14da3b9d87c10f354f6f4a3e2fec081f4a8883b5472431c7099903771ffd7b76', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 107709, hash: 'e7a5dd02b430891c88f8551968c7974263cf6550cc64ceca257e8236424c01e4', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'packages/darma-valley-panchachuli/index.html': {size: 119957, hash: '1cf36e21546f295b7cc4e1988e4f313016579dbdab56ba865af2c5854bbffb0f', text: () => import('./assets-chunks/packages_darma-valley-panchachuli_index_html.mjs').then(m => m.default)},
    'packages/adi-kailash-6-days/index.html': {size: 120220, hash: 'd3ab4e235f2f4f1873f17793abbd6d7f4b1e000000991e5b9587e774cc6b159b', text: () => import('./assets-chunks/packages_adi-kailash-6-days_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 108880, hash: '4a2383d336026eb76a05331f08d61da702a6c29216bec0592b42c89a7dd4ddca', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 135633, hash: 'cb60996f3c5502898ce4387cd6b31f44a7a97092ee28970f966612b6afbc9fd2', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'packages/adi-kailash-9-days/index.html': {size: 120908, hash: 'bf65394865b48a4dbf5dfbc06c02c590de5b299a87ea4c53e28386e1ad829c14', text: () => import('./assets-chunks/packages_adi-kailash-9-days_index_html.mjs').then(m => m.default)},
    'packages/adi-kailash-4-days/index.html': {size: 120072, hash: '2e38bea83393073d7a019ae7299a82458c2659254439cab043ca1f2bda3ff0ec', text: () => import('./assets-chunks/packages_adi-kailash-4-days_index_html.mjs').then(m => m.default)},
    'packages/index.html': {size: 115784, hash: 'cac8e9f6362dffb3920f377d857ebcf0745e604c3bcc8a02f9d29d6f21c99d36', text: () => import('./assets-chunks/packages_index_html.mjs').then(m => m.default)},
    'gallery/index.html': {size: 111713, hash: 'd1a43e9fa62350149aa8ad42b2fb6063a348c183a01d51e153690a2ee25880ab', text: () => import('./assets-chunks/gallery_index_html.mjs').then(m => m.default)},
    'packages/adi-kailash-7-days/index.html': {size: 120570, hash: '0fa4b9a564f404d990d11f826a659f74ba47d1e255840fd9776038abea096669', text: () => import('./assets-chunks/packages_adi-kailash-7-days_index_html.mjs').then(m => m.default)},
    'styles-RIUWCOFL.css': {size: 111715, hash: '8s6AuAAM7bE', text: () => import('./assets-chunks/styles-RIUWCOFL_css.mjs').then(m => m.default)}
  },
};
