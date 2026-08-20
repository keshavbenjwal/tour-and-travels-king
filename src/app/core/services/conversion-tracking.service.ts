import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

/** Defined by the Google Ads event snippet in index.html. */
declare global {
  interface Window {
    gtag_report_conversion?: (url?: string) => boolean;
  }
}

@Injectable({ providedIn: 'root' })
export class ConversionTrackingService {
  private platformId = inject(PLATFORM_ID);

  /**
   * Reports a WhatsApp enquiry to Google Ads.
   *
   * Called without a URL on purpose: every WhatsApp link opens in a new tab, so
   * this page is not unloading and the snippet's navigation callback is not
   * needed. gtag sends the beacon regardless.
   */
  reportWhatsAppConversion(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    try {
      // Absent if an ad blocker stopped gtag.js — not an error worth surfacing.
      window.gtag_report_conversion?.();
    } catch {
      /* tracking must never break the link the visitor clicked */
    }
  }
}
