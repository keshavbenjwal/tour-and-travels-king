
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
      "chunk-BFXXVZJP.js",
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
      "chunk-BFXXVZJP.js",
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
      "chunk-BFXXVZJP.js",
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
      "chunk-BFXXVZJP.js",
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
      "chunk-BFXXVZJP.js",
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
    'index.csr.html': {size: 66150, hash: '59ae861f7668bcc19213782ef31e0db147a11e44883a274142cfe39e2673e128', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 11849, hash: '0d540c869e0064ab95a4d047cbf5369a39eb295c26e82e6d17a1db98f05ffd7a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 105786, hash: 'd720ecea4dc553a050ffae12e68a111eb938ed0141e50050eea6a07618a5df9b', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'packages/adi-kailash-6-days/index.html': {size: 118335, hash: 'acac6a639ebf6c4b7d4bbf754059410f6a4ecb64ae7250a1a3725506667f9442', text: () => import('./assets-chunks/packages_adi-kailash-6-days_index_html.mjs').then(m => m.default)},
    'index.html': {size: 133229, hash: '87aa4c8bde98c69a3cf0ce9ea7546ae38b5edcfc3f92f108cb7d0624d2b3ab84', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'packages/darma-valley-panchachuli/index.html': {size: 118071, hash: '120a604159851560b5378293ec7532ba94cff5f6accadf04af9fdad5cef77e89', text: () => import('./assets-chunks/packages_darma-valley-panchachuli_index_html.mjs').then(m => m.default)},
    'packages/adi-kailash-4-days/index.html': {size: 118203, hash: '7ea6a3ccfbee4061e64025f0693c443ac8d3438dd9205e067892f9536c3dfc22', text: () => import('./assets-chunks/packages_adi-kailash-4-days_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 107086, hash: '9c0c5bfce43deb2bccd3edabd63f959eebedd77d086a3888c3d5fb4a711eb28c', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'packages/adi-kailash-9-days/index.html': {size: 119022, hash: 'f693ef31c81fc52ddf88a119731cfdae0d7d25fc62f6b44c1a48e7ef79323172', text: () => import('./assets-chunks/packages_adi-kailash-9-days_index_html.mjs').then(m => m.default)},
    'packages/index.html': {size: 116679, hash: 'ec62187b186ca21bf6afd3b958c6b3da954cb98c3caad908b65f4351db791580', text: () => import('./assets-chunks/packages_index_html.mjs').then(m => m.default)},
    'gallery/index.html': {size: 104885, hash: '97687e229bde995ff0897dcb31fe6ec0bcd7b2a5f9ca30b7519eb1128a294cad', text: () => import('./assets-chunks/gallery_index_html.mjs').then(m => m.default)},
    'packages/adi-kailash-7-days/index.html': {size: 118691, hash: '26834327e835790e1f48134f062f8302c5a8ca9677fdbe5518101a7ec5b39ed7', text: () => import('./assets-chunks/packages_adi-kailash-7-days_index_html.mjs').then(m => m.default)},
    'styles-G4GB5532.css': {size: 111662, hash: 'aQDvafscNvw', text: () => import('./assets-chunks/styles-G4GB5532_css.mjs').then(m => m.default)}
  },
};
