
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
      "chunk-4BUQTOSG.js",
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
    'index.csr.html': {size: 66941, hash: '9ee81eb5cec635c5972bfd1a60e480eec20adf61f00575754e5f7424ebcd6d97', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 12640, hash: '940a2d0f8a82ea063ef47d02d5079b2ec0ec8d6096c9fd08b74391571d8762cc', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 107212, hash: '149b2d3d516acb64ac06040efbfc942a76e380b86880cf83f5f8e127f6be90a3', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'packages/darma-valley-panchachuli/index.html': {size: 119456, hash: '48cbceb9ee9bfa06a1afd034afbc40adf4086cd6fd731f1910bf6d25b09c798c', text: () => import('./assets-chunks/packages_darma-valley-panchachuli_index_html.mjs').then(m => m.default)},
    'packages/adi-kailash-6-days/index.html': {size: 119720, hash: '56d3df0a011313de8382ea7a876206747cd4b8f6f428ca08441952803b86da2c', text: () => import('./assets-chunks/packages_adi-kailash-6-days_index_html.mjs').then(m => m.default)},
    'index.html': {size: 134584, hash: '071fd67f474f24776299aa642362530edf876c2d3020f14200a1faf2b1d343ad', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 108383, hash: '69ba34a1944a981794c9be6dd851c2eeabd6866976d3d3bdc66bee6442b57ad0', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'packages/adi-kailash-4-days/index.html': {size: 119572, hash: '222a94453bfaec10fa6f8df1466417e410917f9b3c2706b9a2651e1cbef55a9d', text: () => import('./assets-chunks/packages_adi-kailash-4-days_index_html.mjs').then(m => m.default)},
    'packages/adi-kailash-9-days/index.html': {size: 120417, hash: 'edf6f4dea49b80b73518170f8bb23372253982fdb1aee5a468b25f14e6e263e4', text: () => import('./assets-chunks/packages_adi-kailash-9-days_index_html.mjs').then(m => m.default)},
    'gallery/index.html': {size: 112291, hash: '9e868452c6dc59bb5c9d354cfda0bfaa2f88cb2ffe9fc5184a58a0e065cf4e34', text: () => import('./assets-chunks/gallery_index_html.mjs').then(m => m.default)},
    'packages/index.html': {size: 115228, hash: '0253bd430da43e0d52311f347537fec6c86d479ae4b95e7870e93db920c49a8a', text: () => import('./assets-chunks/packages_index_html.mjs').then(m => m.default)},
    'packages/adi-kailash-7-days/index.html': {size: 120086, hash: '60ece5780f1a7376227f85dd5e19960613b14175ca770618417cdf2583a53f37', text: () => import('./assets-chunks/packages_adi-kailash-7-days_index_html.mjs').then(m => m.default)},
    'styles-G4GB5532.css': {size: 111662, hash: 'aQDvafscNvw', text: () => import('./assets-chunks/styles-G4GB5532_css.mjs').then(m => m.default)}
  },
};
