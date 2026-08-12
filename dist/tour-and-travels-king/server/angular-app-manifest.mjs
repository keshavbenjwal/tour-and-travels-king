
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-5KUOTI25.js",
      "chunk-Q6QOMSM3.js",
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
      "chunk-BFG5OFAR.js",
      "chunk-Q6QOMSM3.js",
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
      "chunk-KHZI72BZ.js",
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
      "chunk-KHZI72BZ.js",
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
      "chunk-KHZI72BZ.js",
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
      "chunk-KHZI72BZ.js",
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
      "chunk-KHZI72BZ.js",
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
      "chunk-KHZI72BZ.js",
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
    'index.csr.html': {size: 67044, hash: '6003d56df84a1b95856acd11dde68878ca403b17d0b361e8598547e0de60539a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 12691, hash: 'f3b92ff1cbf5c73a69da081e1654e78c3d63310a2a6a1f01f7b71825018b9a33', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 107400, hash: 'c81d958c29fc8a8eebdca562130a071ecf8dbc273d1be69e36f57bcb1c3b93a0', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'packages/adi-kailash-6-days/index.html': {size: 119911, hash: 'afbf4bb7dbe1751f605168d1662b28a2290b33b79f2198d4f9beb23f95b53f57', text: () => import('./assets-chunks/packages_adi-kailash-6-days_index_html.mjs').then(m => m.default)},
    'index.html': {size: 134612, hash: '8011258995448eef5293222e2e1654abfbb645318d56b205e15d11ad578f5338', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'packages/darma-valley-panchachuli/index.html': {size: 119648, hash: 'a746ffab228f4ba82d6ca1e0681359bca1bf2ea50d51237f94e481669ee6adc7', text: () => import('./assets-chunks/packages_darma-valley-panchachuli_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 108578, hash: '3631d9f8933ebe584d82b41cfc3f79d9c6ef209a4e35cc29fbf1574e7489817c', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'packages/adi-kailash-4-days/index.html': {size: 119778, hash: '5c3079fb3d170d9293a8ae4c2a4f7f5090a125fc29db4715c1a81c3d76266174', text: () => import('./assets-chunks/packages_adi-kailash-4-days_index_html.mjs').then(m => m.default)},
    'packages/adi-kailash-9-days/index.html': {size: 120599, hash: 'b4303987e996e33d634c8951bc1137de8c56e7ff9a766dea72df64dab36bef49', text: () => import('./assets-chunks/packages_adi-kailash-9-days_index_html.mjs').then(m => m.default)},
    'gallery/index.html': {size: 112481, hash: 'd77d7f5a9bdfef1ee4d7078740cd96b90783aa094be22ce050f9602e3eb6eaaa', text: () => import('./assets-chunks/gallery_index_html.mjs').then(m => m.default)},
    'packages/index.html': {size: 115475, hash: '087419ad41377b0264050a862f659877e47e0d1f2753e1c6808beedb51c2c054', text: () => import('./assets-chunks/packages_index_html.mjs').then(m => m.default)},
    'packages/adi-kailash-7-days/index.html': {size: 120268, hash: 'b679b7793e03fc9208e6123073ba874ffbc65199f39e8786cd614220fb99103f', text: () => import('./assets-chunks/packages_adi-kailash-7-days_index_html.mjs').then(m => m.default)},
    'styles-RIUWCOFL.css': {size: 111715, hash: '8s6AuAAM7bE', text: () => import('./assets-chunks/styles-RIUWCOFL_css.mjs').then(m => m.default)}
  },
};
