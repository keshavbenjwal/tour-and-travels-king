
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
    'index.csr.html': {size: 66941, hash: '59d72c43f2fb2b199ab570aca666653f690bc250dc50eb08eb1e4e7e43404cd0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 12640, hash: 'bb3ab1e22c6a605a6a8efca4124085b62353abc80606f64e51a1ecadbcf724f2', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 106955, hash: '86d2a5286dabf8255e7c617c3821f97e780bb5c96c642edb767cc2bc261ee50c', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'packages/darma-valley-panchachuli/index.html': {size: 119199, hash: 'c111111abc3e7d3038134edffa2627f47da465ee397ec51eae636942a53f5b7c', text: () => import('./assets-chunks/packages_darma-valley-panchachuli_index_html.mjs').then(m => m.default)},
    'packages/adi-kailash-6-days/index.html': {size: 119463, hash: '5f6e529210e9e2724492d96958561fbb196ca949499c73af2713bee4b93d5790', text: () => import('./assets-chunks/packages_adi-kailash-6-days_index_html.mjs').then(m => m.default)},
    'index.html': {size: 134327, hash: '6e6902c28471b1a5ca43b11c00892ca14023850dbf70de8c556eba3726ddb65f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 108126, hash: '5ae191eafd8bc5d615cfeb0f3ac9b3965580c572bd217b97e14706885993b1c1', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'packages/adi-kailash-4-days/index.html': {size: 119315, hash: 'b7039f02e75e968fb8cd2799a94ff70481927f189e501a87c3a4958895211c24', text: () => import('./assets-chunks/packages_adi-kailash-4-days_index_html.mjs').then(m => m.default)},
    'packages/adi-kailash-9-days/index.html': {size: 120160, hash: 'bc01da6eec1c2214507525f175bc38825fb88590a437df665eed253c86141f14', text: () => import('./assets-chunks/packages_adi-kailash-9-days_index_html.mjs').then(m => m.default)},
    'packages/index.html': {size: 114971, hash: '0cd0577b6c089e24c07727d650833e2c3dc806e616a7cf4de86e0d26602cf1cc', text: () => import('./assets-chunks/packages_index_html.mjs').then(m => m.default)},
    'gallery/index.html': {size: 112034, hash: 'f3cf4fd32bdf25cac5bd767a5b8cf82053e643c0c3b0b43930059ab43ec2d299', text: () => import('./assets-chunks/gallery_index_html.mjs').then(m => m.default)},
    'packages/adi-kailash-7-days/index.html': {size: 119829, hash: '95f1a5e999ef18fff4482fedb58ae95a1206f5182a8a15ae9dc1580d41c73955', text: () => import('./assets-chunks/packages_adi-kailash-7-days_index_html.mjs').then(m => m.default)},
    'styles-G4GB5532.css': {size: 111662, hash: 'aQDvafscNvw', text: () => import('./assets-chunks/styles-G4GB5532_css.mjs').then(m => m.default)}
  },
};
