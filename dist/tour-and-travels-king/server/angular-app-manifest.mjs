
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-74DAT2ZA.js",
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
    'index.csr.html': {size: 67044, hash: '048ff9b034f3ccbd2a9c29f8c79e003c1d198b08ef8482fceace2d21809b2bb0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 12691, hash: '49d909415fe37e725e05f98d587338cd215238b90d7487095ea471ce7f9e05ab', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 107400, hash: 'd8ea4d1e334f9cf8475ed3a0a375e8ed314d436db18585d5d607448429eb6228', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'packages/adi-kailash-6-days/index.html': {size: 119911, hash: '0e5e960f6381a5e196d08514cd2f8105c100bfd3bba3a11f17b0dd008997377e', text: () => import('./assets-chunks/packages_adi-kailash-6-days_index_html.mjs').then(m => m.default)},
    'index.html': {size: 134664, hash: 'da5f75ef414af2f10efa4ab9f26b9050ce533bf396f95dab6071955fb8122c46', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'packages/darma-valley-panchachuli/index.html': {size: 119648, hash: 'cea93e19442cab5bb324c4ebe52f6ec7a2e888fc636452ff02c58f1c4c9df1b5', text: () => import('./assets-chunks/packages_darma-valley-panchachuli_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 108578, hash: 'ab8867e061f36403a9d9acb713a866a78300d65b1044e89cd05feec24b4a9a16', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'packages/adi-kailash-4-days/index.html': {size: 119778, hash: 'e3e3c3c7a0e302e8a155ce37d24732528079a688b050d9e765eee2bbbf771581', text: () => import('./assets-chunks/packages_adi-kailash-4-days_index_html.mjs').then(m => m.default)},
    'packages/adi-kailash-9-days/index.html': {size: 120599, hash: 'edf50ee2261cea6715258cc6d68b0d2fe020952958a858deef96545bcf1b82e0', text: () => import('./assets-chunks/packages_adi-kailash-9-days_index_html.mjs').then(m => m.default)},
    'gallery/index.html': {size: 112481, hash: 'a40e7c8a6c8ca85ed07b14dbe3126e573b4d9be83e9fe5f38ddd4ee017e9c6d6', text: () => import('./assets-chunks/gallery_index_html.mjs').then(m => m.default)},
    'packages/adi-kailash-7-days/index.html': {size: 120268, hash: '00fd72a1af99965168c51a13971f700000ab29e3d12982cbfed20cde94504937', text: () => import('./assets-chunks/packages_adi-kailash-7-days_index_html.mjs').then(m => m.default)},
    'packages/index.html': {size: 115475, hash: 'c67fff30747c2c43a6ac3a73e5f142158b747ad445cc86d088a2306172eccaf5', text: () => import('./assets-chunks/packages_index_html.mjs').then(m => m.default)},
    'styles-RIUWCOFL.css': {size: 111715, hash: '8s6AuAAM7bE', text: () => import('./assets-chunks/styles-RIUWCOFL_css.mjs').then(m => m.default)}
  },
};
