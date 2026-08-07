
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-R6CPHJQ5.js",
      "chunk-FRVRYN3R.js",
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
      "chunk-VC5QTDEN.js",
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
      "chunk-DCK4DKVL.js",
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
      "chunk-PWVFEG43.js",
      "chunk-HPIQCZGK.js",
      "chunk-TKXRUXZI.js",
      "chunk-ELQZ54ZE.js",
      "chunk-7YA5KDAK.js",
      "chunk-DQPPEPYV.js",
      "chunk-C2MESOGV.js",
      "chunk-AR3CJZVI.js"
    ],
    "route": "/admin"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-PWVFEG43.js",
      "chunk-HPIQCZGK.js",
      "chunk-TKXRUXZI.js",
      "chunk-ELQZ54ZE.js",
      "chunk-B2UBRYXF.js",
      "chunk-SQ24EMB5.js",
      "chunk-LXG5ZTQW.js",
      "chunk-AR3CJZVI.js",
      "chunk-6EMHWZFS.js"
    ],
    "route": "/admin/login"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-PWVFEG43.js",
      "chunk-HPIQCZGK.js",
      "chunk-TKXRUXZI.js",
      "chunk-ELQZ54ZE.js",
      "chunk-7YA5KDAK.js",
      "chunk-DQPPEPYV.js",
      "chunk-C2MESOGV.js",
      "chunk-AR3CJZVI.js"
    ],
    "route": "/admin/dashboard"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-PWVFEG43.js",
      "chunk-HPIQCZGK.js",
      "chunk-TKXRUXZI.js",
      "chunk-ELQZ54ZE.js",
      "chunk-7YA5KDAK.js",
      "chunk-DQPPEPYV.js",
      "chunk-C2MESOGV.js",
      "chunk-AR3CJZVI.js"
    ],
    "route": "/admin/packages/new"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-PWVFEG43.js",
      "chunk-HPIQCZGK.js",
      "chunk-TKXRUXZI.js",
      "chunk-ELQZ54ZE.js",
      "chunk-7YA5KDAK.js",
      "chunk-DQPPEPYV.js",
      "chunk-C2MESOGV.js",
      "chunk-AR3CJZVI.js"
    ],
    "route": "/admin/packages/*/edit"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-PWVFEG43.js",
      "chunk-HPIQCZGK.js",
      "chunk-TKXRUXZI.js",
      "chunk-ELQZ54ZE.js",
      "chunk-7YA5KDAK.js",
      "chunk-DQPPEPYV.js",
      "chunk-C2MESOGV.js",
      "chunk-AR3CJZVI.js"
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
    'index.csr.html': {size: 66941, hash: '8b41094c3cae61bf198f2aaf1a8360ba2f0df105efb5c22eb4a5b61a5c93fade', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 12640, hash: '2d6ba037a90f2c92b34786d859355cf9619386c5f6839acaf0ad8f72637bfb85', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 106955, hash: '36ce6d47d7fd3df7da43afe330b6e79a54ff36155018c5269b255270234ed230', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'packages/adi-kailash-6-days/index.html': {size: 119463, hash: '20a4bb164ba9f4e67ee7c4b5fe1cfab9472d24e369189f4009a040ce31dc3dad', text: () => import('./assets-chunks/packages_adi-kailash-6-days_index_html.mjs').then(m => m.default)},
    'index.html': {size: 134327, hash: '83ee1185e65c9e2c4fdb7c04a540d27ab90f0dca0f359793fdc253db48b0b790', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'packages/darma-valley-panchachuli/index.html': {size: 119199, hash: 'f1bff9a1723603ca3c4e6194e2cef175db60e939b804a660e8e17c355a92cc34', text: () => import('./assets-chunks/packages_darma-valley-panchachuli_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 108131, hash: '8c40688095084170803546fc6a0a8025da92c4c62e35950d3ae9d64cab2d6291', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'packages/adi-kailash-9-days/index.html': {size: 120150, hash: '1b1e010408ae0c813fa0ddfce0b5e457ed92a7c7bcda2138872726022eae3118', text: () => import('./assets-chunks/packages_adi-kailash-9-days_index_html.mjs').then(m => m.default)},
    'packages/adi-kailash-4-days/index.html': {size: 119331, hash: '18563040f19d729e9a7eaad3122e25c62f6c57867ecc41349cc7a1560bb94063', text: () => import('./assets-chunks/packages_adi-kailash-4-days_index_html.mjs').then(m => m.default)},
    'gallery/index.html': {size: 112029, hash: '14494099c1039cf62919765c2c3a81b6acdcf33ba0b9c327542a8ad75ffa8f5f', text: () => import('./assets-chunks/gallery_index_html.mjs').then(m => m.default)},
    'packages/adi-kailash-7-days/index.html': {size: 119829, hash: '36c36e0ab11a3dbf80fde4e36b148ca557a39f63505a1bd6deb466a0b5bdbd2f', text: () => import('./assets-chunks/packages_adi-kailash-7-days_index_html.mjs').then(m => m.default)},
    'packages/index.html': {size: 115054, hash: 'cd3016c45699cce5d5616046781f5533b5887c00084a511254ffc5dd7e7795ac', text: () => import('./assets-chunks/packages_index_html.mjs').then(m => m.default)},
    'styles-G4GB5532.css': {size: 111662, hash: 'aQDvafscNvw', text: () => import('./assets-chunks/styles-G4GB5532_css.mjs').then(m => m.default)}
  },
};
