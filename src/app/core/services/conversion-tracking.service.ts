import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

/**
 * Defined by the Google Ads event snippets in index.html.
 *
 * Google names every snippet `gtag_report_conversion`, so they are renamed per
 * conversion there — otherwise the last one loaded would overwrite the rest and
 * every conversion would be reported under a single label.
 */
declare global {
  interface Window {
    gtag_report_whatsapp_conversion?: (url?: string) => boolean;
    gtag_report_call_conversion?: (url?: string) => boolean;
  }
}

@Injectable({ providedIn: 'root' })
export class ConversionTrackingService {
  private platformId = inject(PLATFORM_ID);

  /** WhatsApp enquiry — reported as a ₹1.00 INR conversion. */
  reportWhatsAppConversion(): void {
    this.report(() => window.gtag_report_whatsapp_conversion?.());
  }

  /** Phone call lead — someone tapped a tel: link. */
  reportPhoneCallConversion(): void {
    this.report(() => window.gtag_report_call_conversion?.());
  }

  /**
   * Snippets are called without a URL on purpose. Their navigation callback
   * exists for links that replace the current page; WhatsApp links open in a
   * new tab and tel: links hand off to the dialer, so this page never unloads
   * and gtag sends the beacon regardless.
   */
  private report(send: () => void): void {
    if (!isPlatformBrowser(this.platformId)) return;

    try {
      // Absent if an ad blocker stopped gtag.js — not an error worth surfacing.
      send();
    } catch {
      /* tracking must never break the link the visitor clicked */
    }
  }
}
