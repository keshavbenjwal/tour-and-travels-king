import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  { path: '', renderMode: RenderMode.Prerender },
  { path: 'about', renderMode: RenderMode.Prerender },
  { path: 'packages', renderMode: RenderMode.Prerender },
  { path: 'packages/adi-kailash-4-days', renderMode: RenderMode.Prerender },
  { path: 'packages/adi-kailash-6-days', renderMode: RenderMode.Prerender },
  { path: 'packages/adi-kailash-7-days', renderMode: RenderMode.Prerender },
  { path: 'packages/adi-kailash-9-days', renderMode: RenderMode.Prerender },
  { path: 'packages/darma-valley-panchachuli', renderMode: RenderMode.Prerender },
  { path: 'gallery', renderMode: RenderMode.Prerender },
  { path: 'contact', renderMode: RenderMode.Prerender },
  { path: '**', renderMode: RenderMode.Server }
];
