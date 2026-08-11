
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
    'index.csr.html': {size: 66992, hash: '226e89f80eda50dec867f91083587b552ed62b803e7569828aa1e9de85f26c8a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 12691, hash: '2e37795015140a91458e8530d7be7e0abbc39d5cddd0dcc443001468e503ad30', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'packages/adi-kailash-6-days/index.html': {size: 119858, hash: 'f928390c3cb98309f3e5be3c1fc9b9281fe61b84e1a788ec51c17945cfca04eb', text: () => import('./assets-chunks/packages_adi-kailash-6-days_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 107347, hash: 'e130410d481a1698ce08f0a1e07dfd90a3f95e9982470688a26a4dea1a9ffe6f', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'index.html': {size: 134723, hash: 'e70f7318203d71219fcbbfbea48498a75f6ef7c9ef93814d4ad652e04591c743', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'packages/darma-valley-panchachuli/index.html': {size: 119588, hash: '844f082bc5f0f406269437182cbf55f34c741f1a866ddf29b98f18b4c0d809ee', text: () => import('./assets-chunks/packages_darma-valley-panchachuli_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 108517, hash: 'd811931380d6200fd22c61e7f3d00dd9f03aad7accc7cecc461f5c4c2b0b0590', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'packages/adi-kailash-4-days/index.html': {size: 119725, hash: 'fd7ebe29a8fbc7ec569fd1954309febbe6f9f31dcb1dfd0868dd7f5683cf44ec', text: () => import('./assets-chunks/packages_adi-kailash-4-days_index_html.mjs').then(m => m.default)},
    'packages/adi-kailash-9-days/index.html': {size: 120539, hash: '96f19168d7d3a36f8198f47e90c65db2a5bf2525025baae8d2f8dfce0a21a25c', text: () => import('./assets-chunks/packages_adi-kailash-9-days_index_html.mjs').then(m => m.default)},
    'packages/index.html': {size: 115363, hash: '6508b6333986081a0de8fa07f167a66bf1b686dc5271e97e40ce98b07f59a9f0', text: () => import('./assets-chunks/packages_index_html.mjs').then(m => m.default)},
    'gallery/index.html': {size: 112428, hash: '9557182c9e617e6628df119a0deef36073210d4917dbbfec523ccc6b2c39aea1', text: () => import('./assets-chunks/gallery_index_html.mjs').then(m => m.default)},
    'packages/adi-kailash-7-days/index.html': {size: 120208, hash: '265f81c1b1ad0101693b4bc6bcc0a64f1ba21d87632b7b28f33d87c67d65e742', text: () => import('./assets-chunks/packages_adi-kailash-7-days_index_html.mjs').then(m => m.default)},
    'styles-G4GB5532.css': {size: 111662, hash: 'aQDvafscNvw', text: () => import('./assets-chunks/styles-G4GB5532_css.mjs').then(m => m.default)}
  },
};
