
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-3WKILU5A.js",
      "chunk-OMZWWYKH.js",
      "chunk-RXM5OMAV.js",
      "chunk-RI76Q256.js",
      "chunk-XP4KKB4J.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-YJXBOCAQ.js",
      "chunk-XP4KKB4J.js"
    ],
    "route": "/about"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-PTILMGZI.js",
      "chunk-OMZWWYKH.js",
      "chunk-RXM5OMAV.js",
      "chunk-INFHSRT5.js",
      "chunk-RI76Q256.js",
      "chunk-XP4KKB4J.js"
    ],
    "route": "/packages"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CDOZVA6Y.js",
      "chunk-RXM5OMAV.js",
      "chunk-XP4KKB4J.js"
    ],
    "route": "/packages/adi-kailash-4-days"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CDOZVA6Y.js",
      "chunk-RXM5OMAV.js",
      "chunk-XP4KKB4J.js"
    ],
    "route": "/packages/adi-kailash-6-days"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CDOZVA6Y.js",
      "chunk-RXM5OMAV.js",
      "chunk-XP4KKB4J.js"
    ],
    "route": "/packages/adi-kailash-7-days"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CDOZVA6Y.js",
      "chunk-RXM5OMAV.js",
      "chunk-XP4KKB4J.js"
    ],
    "route": "/packages/adi-kailash-9-days"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CDOZVA6Y.js",
      "chunk-RXM5OMAV.js",
      "chunk-XP4KKB4J.js"
    ],
    "route": "/packages/darma-valley-panchachuli"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CDOZVA6Y.js",
      "chunk-RXM5OMAV.js",
      "chunk-XP4KKB4J.js"
    ],
    "route": "/packages/adi-kailash-delhi-6-days"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CDOZVA6Y.js",
      "chunk-RXM5OMAV.js",
      "chunk-XP4KKB4J.js"
    ],
    "route": "/packages/adi-kailash-darma-valley-delhi-8-days"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-2LXAROPS.js",
      "chunk-INFHSRT5.js",
      "chunk-RI76Q256.js",
      "chunk-XP4KKB4J.js"
    ],
    "route": "/gallery"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TWFXZRJX.js",
      "chunk-BTRC5LA7.js",
      "chunk-XP4KKB4J.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-OXC5RLXN.js",
      "chunk-O7HYO5Q6.js",
      "chunk-RI76Q256.js",
      "chunk-2GE3HAG7.js",
      "chunk-PFEFY7AQ.js",
      "chunk-OORSPZTU.js",
      "chunk-Q34B4623.js"
    ],
    "route": "/admin"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-OXC5RLXN.js",
      "chunk-O7HYO5Q6.js",
      "chunk-RI76Q256.js",
      "chunk-V3NMMA26.js",
      "chunk-PFFX3RFT.js",
      "chunk-LRH3FJS6.js",
      "chunk-Q34B4623.js",
      "chunk-BTRC5LA7.js"
    ],
    "route": "/admin/login"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-OXC5RLXN.js",
      "chunk-O7HYO5Q6.js",
      "chunk-RI76Q256.js",
      "chunk-2GE3HAG7.js",
      "chunk-PFEFY7AQ.js",
      "chunk-OORSPZTU.js",
      "chunk-Q34B4623.js"
    ],
    "route": "/admin/dashboard"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-OXC5RLXN.js",
      "chunk-O7HYO5Q6.js",
      "chunk-RI76Q256.js",
      "chunk-2GE3HAG7.js",
      "chunk-PFEFY7AQ.js",
      "chunk-OORSPZTU.js",
      "chunk-Q34B4623.js"
    ],
    "route": "/admin/packages/new"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-OXC5RLXN.js",
      "chunk-O7HYO5Q6.js",
      "chunk-RI76Q256.js",
      "chunk-2GE3HAG7.js",
      "chunk-PFEFY7AQ.js",
      "chunk-OORSPZTU.js",
      "chunk-Q34B4623.js"
    ],
    "route": "/admin/packages/*/edit"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-OXC5RLXN.js",
      "chunk-O7HYO5Q6.js",
      "chunk-RI76Q256.js",
      "chunk-2GE3HAG7.js",
      "chunk-PFEFY7AQ.js",
      "chunk-OORSPZTU.js",
      "chunk-Q34B4623.js"
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
    'index.csr.html': {size: 68843, hash: '9f277e639cf342b6854f2a11a9d46ca05ff71c3198096d14cfc1a63f2783e5f0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 14490, hash: '5540f0132d774317217dbd88aef852ee13e229932ae734fdb1d4c6421d7033ec', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 109196, hash: '59e452eb2940fde6e63c7fa4e1b11de41b81def3ca5e192f0e0174f95642f9c8', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'packages/adi-kailash-6-days/index.html': {size: 121707, hash: '759a3c8ed55e3343ecc0f4e62f584e310576b17e8a3d5d7c16c66c68f4d09624', text: () => import('./assets-chunks/packages_adi-kailash-6-days_index_html.mjs').then(m => m.default)},
    'index.html': {size: 137120, hash: '8de64cfb8e7fdc6da9cab4671f1dbeecbc0ed1268c5650e2125f30c2f8114c9a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'packages/adi-kailash-darma-valley-delhi-8-days/index.html': {size: 122113, hash: '3ebc5e200c97acc6c0b958a7cdd401b4bc8a79bb7090241e5cf3c9e88998cf24', text: () => import('./assets-chunks/packages_adi-kailash-darma-valley-delhi-8-days_index_html.mjs').then(m => m.default)},
    'packages/darma-valley-panchachuli/index.html': {size: 121444, hash: 'ba2213933419e94f83aaeaf9994784d20ae78ff59b7b29c89deea4d4b206005f', text: () => import('./assets-chunks/packages_darma-valley-panchachuli_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 110374, hash: '3e3b0fac4248c278f1ebed56135b332fe5cabfb155d61a7bac8742fcd8b3ce2a', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'packages/adi-kailash-4-days/index.html': {size: 121559, hash: '6537bbf86064f87b36ed7ad22fc18a84dab738f8915c21ab48c0d7969e62f02d', text: () => import('./assets-chunks/packages_adi-kailash-4-days_index_html.mjs').then(m => m.default)},
    'packages/adi-kailash-9-days/index.html': {size: 122395, hash: 'a83af3a18e0d28aa7b52a4da564443c635e144659ecc6c4f3182b79b6fab97b4', text: () => import('./assets-chunks/packages_adi-kailash-9-days_index_html.mjs').then(m => m.default)},
    'gallery/index.html': {size: 113207, hash: '7b0e7bc24dbd67a2604bde4ccda25fdacfb3ec53a50dfb232fca13708d07a4f6', text: () => import('./assets-chunks/gallery_index_html.mjs').then(m => m.default)},
    'packages/adi-kailash-7-days/index.html': {size: 122057, hash: 'b7d4938f66d55514e4bc0ca2a6701760e0dcf1aa101baad9acbcd3ab3800ae92', text: () => import('./assets-chunks/packages_adi-kailash-7-days_index_html.mjs').then(m => m.default)},
    'packages/adi-kailash-delhi-6-days/index.html': {size: 121136, hash: 'fbb16f3fd807d2708fbbecf43a28b64244154e5d6d9248f2391d5ad65c3b3de8', text: () => import('./assets-chunks/packages_adi-kailash-delhi-6-days_index_html.mjs').then(m => m.default)},
    'packages/index.html': {size: 122604, hash: 'f06d0b4990c825c713f74486f2cf33a25f75dc780c42da9f2aa9bd50f3854b4e', text: () => import('./assets-chunks/packages_index_html.mjs').then(m => m.default)},
    'styles-RIUWCOFL.css': {size: 111715, hash: '8s6AuAAM7bE', text: () => import('./assets-chunks/styles-RIUWCOFL_css.mjs').then(m => m.default)}
  },
};
