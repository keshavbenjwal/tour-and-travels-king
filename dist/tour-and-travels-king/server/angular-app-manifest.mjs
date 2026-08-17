
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
    'index.csr.html': {size: 67044, hash: 'bde54aff61430346a3317e889577bf197b64283bf43771eb72dc69d38cae9836', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 12691, hash: 'e14233629bc65ea58c474f16f8abd79d7ee776506f4445b396951825d6188e09', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 107400, hash: 'd52b9adeb4bb7edd6bd95b2d7023f2c0ac020f2f65666af7e763fe4460a6e1ea', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'packages/darma-valley-panchachuli/index.html': {size: 119648, hash: 'f01179fe605bb181f65561b2438ce451012afaee5fe3e94ab98509a0bd6d9044', text: () => import('./assets-chunks/packages_darma-valley-panchachuli_index_html.mjs').then(m => m.default)},
    'packages/adi-kailash-6-days/index.html': {size: 119911, hash: 'e9aac114075096a66c6e66fda113d0228a9672f2cb8081acb545930fc3d082eb', text: () => import('./assets-chunks/packages_adi-kailash-6-days_index_html.mjs').then(m => m.default)},
    'index.html': {size: 135324, hash: 'aa4ba9191e557240be8ddd6aa84b0cc87eb48b6ebab3d26ef8cf8509b655c191', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 108571, hash: '7b0392876f6033ef4f963cd7dd9a5e932f7d5d7d9926ae987191e835f0542d6d', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'packages/adi-kailash-9-days/index.html': {size: 120607, hash: 'e29c4d63ec8fa5b07e80d7fd94e23eb884ee96109d79b1082d01a9b0d065576b', text: () => import('./assets-chunks/packages_adi-kailash-9-days_index_html.mjs').then(m => m.default)},
    'packages/adi-kailash-4-days/index.html': {size: 119763, hash: 'decf1adf8f15e9eb43fc46b32bf28aad25fdb037461d7ca0350689b4cd06fe31', text: () => import('./assets-chunks/packages_adi-kailash-4-days_index_html.mjs').then(m => m.default)},
    'packages/adi-kailash-7-days/index.html': {size: 120261, hash: '75458d2c79a1165ede1744882826743de0033eed8e028edf73037df6559972d6', text: () => import('./assets-chunks/packages_adi-kailash-7-days_index_html.mjs').then(m => m.default)},
    'packages/index.html': {size: 115468, hash: 'ba6eab75a6d139814ce8ccb76bb8ee102e80c725cda8b570cdc566ce969fa330', text: () => import('./assets-chunks/packages_index_html.mjs').then(m => m.default)},
    'gallery/index.html': {size: 111411, hash: 'e2ba3a27496b2eb780f806f637c3dda8b5408731a39f5d38b553121334e29e01', text: () => import('./assets-chunks/gallery_index_html.mjs').then(m => m.default)},
    'styles-RIUWCOFL.css': {size: 111715, hash: '8s6AuAAM7bE', text: () => import('./assets-chunks/styles-RIUWCOFL_css.mjs').then(m => m.default)}
  },
};
