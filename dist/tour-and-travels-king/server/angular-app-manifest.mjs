
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-RXFZC2WL.js",
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
      "chunk-WX44RTOE.js",
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
      "chunk-KOS6LDN7.js",
      "chunk-FRVRYN3R.js",
      "chunk-55I2RGUS.js"
    ],
    "route": "/packages/adi-kailash-4-days"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-KOS6LDN7.js",
      "chunk-FRVRYN3R.js",
      "chunk-55I2RGUS.js"
    ],
    "route": "/packages/adi-kailash-6-days"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-KOS6LDN7.js",
      "chunk-FRVRYN3R.js",
      "chunk-55I2RGUS.js"
    ],
    "route": "/packages/adi-kailash-7-days"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-KOS6LDN7.js",
      "chunk-FRVRYN3R.js",
      "chunk-55I2RGUS.js"
    ],
    "route": "/packages/adi-kailash-9-days"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-KOS6LDN7.js",
      "chunk-FRVRYN3R.js",
      "chunk-55I2RGUS.js"
    ],
    "route": "/packages/darma-valley-panchachuli"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-WLAK4NWO.js",
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
    'index.csr.html': {size: 66941, hash: '1a6e4f8153d257543d1f17849a74696428bd6f97e15f59058f4817820ad4b7e8', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 12640, hash: '7508ce5234a8c0e5d240249b0ce89fae0516e62e0543915ea80378bb27d48464', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 106955, hash: '96078f4dc06543bb73fad3fda257597f33f90b6cf97e34b793c11380a3719533', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'packages/adi-kailash-6-days/index.html': {size: 119544, hash: 'eb6e00e006dd339a8f478e5f8546af36c231eabd7bfd891dc2e732b98b525a6d', text: () => import('./assets-chunks/packages_adi-kailash-6-days_index_html.mjs').then(m => m.default)},
    'packages/darma-valley-panchachuli/index.html': {size: 119280, hash: '3bb03fb7b8cb95b54c8e2909eb5536c67fa714c81309f8e7c4212f6c8a296c9b', text: () => import('./assets-chunks/packages_darma-valley-panchachuli_index_html.mjs').then(m => m.default)},
    'index.html': {size: 134398, hash: '2983c43673c973e5d93028e44326676b3e7a2b210e3d9f083e18758bc86ab106', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'packages/adi-kailash-4-days/index.html': {size: 119402, hash: '6b9ea0d12965d2a386ef69bfb0e78fc7e463c4c148650a3192846505994fcc8e', text: () => import('./assets-chunks/packages_adi-kailash-4-days_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 108131, hash: '2fe27a82722a241e5be76ff915fba1bc9cbd94905111d62373bc58acabf4355d', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'packages/adi-kailash-9-days/index.html': {size: 120241, hash: 'c10269f79b6060bf6fbf6c5b19516409a711d7caa63f69a95854882d91cf93cb', text: () => import('./assets-chunks/packages_adi-kailash-9-days_index_html.mjs').then(m => m.default)},
    'packages/index.html': {size: 115410, hash: '0586aa1ecf2169d21d85bcaf0afcffa4bf24d96a1b499ab1825a61f6ae9d9804', text: () => import('./assets-chunks/packages_index_html.mjs').then(m => m.default)},
    'gallery/index.html': {size: 106153, hash: '8e347303f9796c2386074fa7817fef84f87597377bf30da09d1577ad1a56ab08', text: () => import('./assets-chunks/gallery_index_html.mjs').then(m => m.default)},
    'packages/adi-kailash-7-days/index.html': {size: 119910, hash: '37fc2a12c663d5b071b5fbc043d241eb8877ea69b7f51a6cc0d587ae881bada1', text: () => import('./assets-chunks/packages_adi-kailash-7-days_index_html.mjs').then(m => m.default)},
    'styles-G4GB5532.css': {size: 111662, hash: 'aQDvafscNvw', text: () => import('./assets-chunks/styles-G4GB5532_css.mjs').then(m => m.default)}
  },
};
