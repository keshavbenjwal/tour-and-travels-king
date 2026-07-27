
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-MMW5IDVQ.js",
      "chunk-VKCPGK36.js",
      "chunk-T2FP4BZC.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BR6P2X34.js",
      "chunk-T2FP4BZC.js"
    ],
    "route": "/about"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ENRJRDEI.js",
      "chunk-VKCPGK36.js",
      "chunk-T2FP4BZC.js"
    ],
    "route": "/packages"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D6QOJLFJ.js",
      "chunk-VKCPGK36.js",
      "chunk-T2FP4BZC.js"
    ],
    "route": "/packages/adi-kailash-4-days"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D6QOJLFJ.js",
      "chunk-VKCPGK36.js",
      "chunk-T2FP4BZC.js"
    ],
    "route": "/packages/adi-kailash-6-days"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D6QOJLFJ.js",
      "chunk-VKCPGK36.js",
      "chunk-T2FP4BZC.js"
    ],
    "route": "/packages/adi-kailash-7-days"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D6QOJLFJ.js",
      "chunk-VKCPGK36.js",
      "chunk-T2FP4BZC.js"
    ],
    "route": "/packages/adi-kailash-9-days"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D6QOJLFJ.js",
      "chunk-VKCPGK36.js",
      "chunk-T2FP4BZC.js"
    ],
    "route": "/packages/darma-valley-panchachuli"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-7CPVZJ34.js",
      "chunk-T2FP4BZC.js"
    ],
    "route": "/gallery"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Z3BLGZDA.js",
      "chunk-MQTDSVIQ.js",
      "chunk-T2FP4BZC.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-PNHDBBTS.js",
      "chunk-6M52B5II.js",
      "chunk-CNLEP6R2.js",
      "chunk-J7KO7NQ5.js",
      "chunk-GDL2ZYRL.js",
      "chunk-GI7JXH3B.js",
      "chunk-DHKKLAXW.js"
    ],
    "route": "/admin"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-PNHDBBTS.js",
      "chunk-6M52B5II.js",
      "chunk-CNLEP6R2.js",
      "chunk-EXE3VTMN.js",
      "chunk-QYOQREAZ.js",
      "chunk-RBBD7SBL.js",
      "chunk-DHKKLAXW.js",
      "chunk-MQTDSVIQ.js"
    ],
    "route": "/admin/login"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-PNHDBBTS.js",
      "chunk-6M52B5II.js",
      "chunk-CNLEP6R2.js",
      "chunk-J7KO7NQ5.js",
      "chunk-GDL2ZYRL.js",
      "chunk-GI7JXH3B.js",
      "chunk-DHKKLAXW.js"
    ],
    "route": "/admin/dashboard"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-PNHDBBTS.js",
      "chunk-6M52B5II.js",
      "chunk-CNLEP6R2.js",
      "chunk-J7KO7NQ5.js",
      "chunk-GDL2ZYRL.js",
      "chunk-GI7JXH3B.js",
      "chunk-DHKKLAXW.js"
    ],
    "route": "/admin/packages/new"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-PNHDBBTS.js",
      "chunk-6M52B5II.js",
      "chunk-CNLEP6R2.js",
      "chunk-J7KO7NQ5.js",
      "chunk-GDL2ZYRL.js",
      "chunk-GI7JXH3B.js",
      "chunk-DHKKLAXW.js"
    ],
    "route": "/admin/packages/*/edit"
  },
  {
    "renderMode": 0,
    "redirectTo": "/",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 66150, hash: '33bac64741174e7f90eafcbeb581b437da6f33822c79a1397f90e70201f0f101', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 11849, hash: 'e6c45cadaac6335cc6bd05fad5b84f9fe5fdc0fe348124108ff74fd9df510b0f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 105786, hash: 'fba8b9e89a531553568d496daf42234816acea5cff3636414bffe87da08308d0', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'packages/darma-valley-panchachuli/index.html': {size: 118071, hash: 'dffab932f273b67dba76f16318a719cde7d8a6a425b7111298e377c60e259b23', text: () => import('./assets-chunks/packages_darma-valley-panchachuli_index_html.mjs').then(m => m.default)},
    'packages/adi-kailash-6-days/index.html': {size: 118335, hash: '45787ee2621a89d56b1d31c18b2d7dcaea887fa6c94b907332a3915f02a99322', text: () => import('./assets-chunks/packages_adi-kailash-6-days_index_html.mjs').then(m => m.default)},
    'index.html': {size: 133229, hash: '1284711e9cf445af53b269061777251fb436a62ee34d24a62dff229c32b4b312', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 107081, hash: '120ab94cca22971dade0665fb93b6b67e4c34a794a443202797fbff8cfc36a8d', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'packages/adi-kailash-4-days/index.html': {size: 118187, hash: '5374e9c70730ca224c63d4301a6d9dab38ce8778374aefe58fb6d75f465b53a3', text: () => import('./assets-chunks/packages_adi-kailash-4-days_index_html.mjs').then(m => m.default)},
    'packages/index.html': {size: 116674, hash: '0f3e7161fe6943be55baf24c5b955e0fe986176893781d7d075885c3a5286199', text: () => import('./assets-chunks/packages_index_html.mjs').then(m => m.default)},
    'packages/adi-kailash-9-days/index.html': {size: 119032, hash: 'ad999cc3825a365e908bdb8a862132aef75b94d100dfc2df32cc30c7d56c3b49', text: () => import('./assets-chunks/packages_adi-kailash-9-days_index_html.mjs').then(m => m.default)},
    'gallery/index.html': {size: 104885, hash: '1affe0a3fa3dde430bf2c5b214c8afd6ea4dbb5b2e3fc799272aa4bbf7519ab0', text: () => import('./assets-chunks/gallery_index_html.mjs').then(m => m.default)},
    'packages/adi-kailash-7-days/index.html': {size: 118691, hash: '1e19bae6f2ac3770c76629f96d684f8179db41a5a392954f3cd0d81538151754', text: () => import('./assets-chunks/packages_adi-kailash-7-days_index_html.mjs').then(m => m.default)},
    'styles-G4GB5532.css': {size: 111662, hash: 'aQDvafscNvw', text: () => import('./assets-chunks/styles-G4GB5532_css.mjs').then(m => m.default)}
  },
};
