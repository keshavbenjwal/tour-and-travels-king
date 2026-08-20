import { Component, inject, OnInit, signal, PLATFORM_ID } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators, AbstractControl } from '@angular/forms';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { SeoService } from '../../core/services/seo.service';
import { ConversionTrackingService } from '../../core/services/conversion-tracking.service';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  private seo = inject(SeoService);
  private fb = inject(FormBuilder);
  private route = inject(ActivatedRoute);
  private platformId = inject(PLATFORM_ID);
  private conversions = inject(ConversionTrackingService);

  formState = signal<FormState>('idle');

  packages = [
    'Adi Kailash, Om Parvat & Panchachuli Base Camp Expedition (4 Days)',
    'Ultimate Adi Kailash, Om Parvat & Sacred Kumaon Pilgrimage (6 Days)',
    'Grand Adi Kailash, Om Parvat & Panchachuli Himalayan Pilgrimage (7 Days)',
    'Adi Kailash, Om Parvat & Chaukori Grand Himalayan Tour (9 Days)',
    'Darma Valley & Panchachuli Base Camp Adventure Tour (5 Days)',
    'Custom / Other Package',
  ];

  contactForm = this.fb.group({
    fullName: ['', [Validators.required, Validators.minLength(2)]],
    mobile: ['', [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]],
    email: ['', [Validators.required, Validators.email]],
    selectedPackage: ['', Validators.required],
    message: ['', [Validators.required, Validators.minLength(20)]],
  });

  ngOnInit(): void {
    this.seo.updateSeo({
      title: 'Contact Us – Kumaon Yatra Tours',
      description: 'Get in touch with Kumaon Yatra Tours for Himalayan pilgrimage and adventure tour inquiries. Call, WhatsApp, or fill the form – we respond within 24 hours.',
      keywords: 'contact Kumaon Yatra Tours, Himalayan tour inquiry, Jagdish Singh contact, Uttarakhand tour booking',
    });

    this.seo.addJsonLd({
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: 'Contact – Kumaon Yatra Tours',
      description: 'Contact us for Himalayan pilgrimage and adventure tour inquiries.',
      url: 'https://www.tourandtravelsking.com/contact',
    });

    // Pre-fill package from query param
    this.route.queryParams.subscribe(params => {
      if (params['package']) {
        const matchedPkg = this.packages.find(p => p.includes(params['package'].substring(0, 30)));
        if (matchedPkg) {
          this.contactForm.patchValue({ selectedPackage: matchedPkg });
        }
      }
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.contactForm.controls;
  }

  isInvalid(field: string): boolean {
    const ctrl = this.contactForm.get(field);
    return !!(ctrl && ctrl.invalid && (ctrl.dirty || ctrl.touched));
  }

  onSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.formState.set('submitting');

    const v = this.contactForm.value;
    const lines = [
      '*New Tour Inquiry – Kumaon Yatra Tours*',
      '',
      `*Name:* ${v.fullName}`,
      `*Mobile:* ${v.mobile}`,
      `*Email:* ${v.email}`,
      `*Package:* ${v.selectedPackage}`,
      `*Message:* ${v.message}`,
    ];
    const url = `https://wa.me/918272855150?text=${encodeURIComponent(lines.join('\n'))}`;
    if (isPlatformBrowser(this.platformId)) {
      // Opened in code rather than via a link, so the global click handler in
      // App never sees it — report the conversion here.
      this.conversions.reportWhatsAppConversion();
      window.open(url, '_blank', 'noopener,noreferrer');
    }

    this.formState.set('success');
    this.contactForm.reset();
  }

  resetForm(): void {
    this.formState.set('idle');
    this.contactForm.reset();
  }
}
