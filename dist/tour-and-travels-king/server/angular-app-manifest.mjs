
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
    'index.csr.html': {size: 66941, hash: '0c4e83fb69e764076ff94776a08d7895065db03975d956331b304e7ad4bb74bc', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 12640, hash: '1e060e69955d3b8dd1c9e8b10ba7329cd1a916239d31649a7b294ca1b8c1f344', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 106955, hash: '01bcbe673bd1b07f55c6266f2eb49063942845bc509163d985729f5731e4e4ac', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'packages/darma-valley-panchachuli/index.html': {size: 119280, hash: 'b7f1650fdc3afe218ff79acf781f104dcb6035f6af80ae491648c1bb8b3503c2', text: () => import('./assets-chunks/packages_darma-valley-panchachuli_index_html.mjs').then(m => m.default)},
    'packages/adi-kailash-6-days/index.html': {size: 119544, hash: '6a7419c86264a8fe90fabc1bc40400dc977993f03a0b8d7ff475bc3404c85fea', text: () => import('./assets-chunks/packages_adi-kailash-6-days_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 108126, hash: 'e74f8153949d8ae597c9a211027a7d49c1f15e8ff3acb0d3631ce31ee916f4c2', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 134327, hash: 'f9140c99de3a710287f53a982cb4d86b26a613439ac2fe06838c7796485ef597', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'packages/adi-kailash-4-days/index.html': {size: 119396, hash: '70f7acf4d990054f343669451c7a024f7b5f130209e301262e4dc5663a0608e4', text: () => import('./assets-chunks/packages_adi-kailash-4-days_index_html.mjs').then(m => m.default)},
    'packages/adi-kailash-9-days/index.html': {size: 120231, hash: '2fb5ac9cf47256b4803afe0c3101445a0f88e78adbf99d341fe00b65ecd4c092', text: () => import('./assets-chunks/packages_adi-kailash-9-days_index_html.mjs').then(m => m.default)},
    'packages/index.html': {size: 115054, hash: '7488e8cbcdf50a8bbdcf68b9500c67e9e0c166215d50406f71ef26301a2e011a', text: () => import('./assets-chunks/packages_index_html.mjs').then(m => m.default)},
    'gallery/index.html': {size: 112034, hash: 'a2385bfd27b44e6e8b37ae05bdff2caba5cf5acb27b3be35ab41f0fe6da8d6ca', text: () => import('./assets-chunks/gallery_index_html.mjs').then(m => m.default)},
    'packages/adi-kailash-7-days/index.html': {size: 119900, hash: '36676e2ac8dfb949c1dd2b2ce95263f210ada8113869feb9d72e0fded79b1582', text: () => import('./assets-chunks/packages_adi-kailash-7-days_index_html.mjs').then(m => m.default)},
    'styles-G4GB5532.css': {size: 111662, hash: 'aQDvafscNvw', text: () => import('./assets-chunks/styles-G4GB5532_css.mjs').then(m => m.default)}
  },
};
