import { Component, inject, OnInit, OnDestroy, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SeoService } from '../../core/services/seo.service';
import { PackagesService, TourPackage } from '../../core/services/packages.service';
import { PackageImageService } from '../../core/services/package-image.service';

@Component({
  selector: 'app-home',
  imports: [RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {
  private seo = inject(SeoService);
  private pkgService = inject(PackagesService);
  private imageService = inject(PackageImageService);

  featuredPackages: TourPackage[] = [];

  /**
   * Assigned over the full package list, not just the featured three, so a
   * package shows the same photo here as it does on the packages page.
   */
  private packageImages: Record<string, string> = {};
  activeTestimonial = signal(0);
  activeFaq = signal<number | null>(null);
  private testimonialInterval?: ReturnType<typeof setInterval>;

  whyChooseUs = [
    { icon: 'fas fa-shield-alt', title: 'Safety First', desc: 'Experienced guides, first aid kits, and 24/7 emergency support on all our expeditions.' },
    { icon: 'fas fa-map-marked-alt', title: 'Local Expertise', desc: 'Deep knowledge of Kumaon Himalayan terrain, permits, seasons, and sacred routes.' },
    { icon: 'fas fa-rupee-sign', title: 'Best Value', desc: 'Transparent pricing with no hidden costs. Premium experiences at honest prices.' },
    { icon: 'fas fa-users', title: 'Small Groups', desc: 'Intimate group sizes ensuring personalized attention and better mountain access.' },
    { icon: 'fas fa-praying-hands', title: 'Spiritual Focus', desc: 'Curated itineraries that honor the sacred nature of each Himalayan pilgrimage site.' },
    { icon: 'fas fa-headset', title: '24/7 Support', desc: 'Round-the-clock assistance before, during, and after your journey for complete peace of mind.' },
  ];

  highlights = [
    { icon: 'fas fa-om', title: 'Om Parvat', desc: 'Natural snow formation of the sacred Om symbol on the mountain face – a divine spectacle.' },
    { icon: 'fas fa-mountain', title: 'Adi Kailash', desc: 'The smaller twin of Mount Kailash, equally sacred and far more accessible for pilgrims.' },
    { icon: 'fas fa-water', title: 'Parvati Sarovar', desc: 'Holy lake at Jolingkong where Goddess Parvati performed her sacred ablutions.' },
    { icon: 'fas fa-tree', title: 'Darma Valley', desc: 'Remote, pristine valley with traditional Bhotiya culture and Panchachuli base camp access.' },
  ];

  testimonials = [
    {
      name: 'Rajesh Sharma',
      location: 'Delhi',
      text: 'The Om Parvat experience was beyond anything I could have imagined. Seeing the natural Om symbol on the mountain filled me with an emotion I cannot describe. Jagdish ji and the team were exceptional – professional, caring, and deeply knowledgeable.',
      rating: 5,
      package: 'Adi Kailash 7 Days'
    },
    {
      name: 'Priya Nair',
      location: 'Bengaluru',
      text: 'I was nervous about a high-altitude Himalayan trek, but Kumaon Yatra Tours made it so comfortable. The acclimatization schedule was perfect, the food was delicious, and the views of Panchachuli at dawn from Chaukori were absolutely magical.',
      rating: 5,
      package: 'Adi Kailash 9 Days'
    },
    {
      name: 'Amit & Neha Gupta',
      location: 'Jaipur',
      text: 'We went as a couple for our anniversary – best decision ever! The Darma Valley trek was challenging but the guides were wonderfully supportive. Reaching Panchachuli Base Camp together is a memory we will cherish for life. Highly recommended!',
      rating: 5,
      package: 'Darma Valley 5 Days'
    },
    {
      name: 'Suresh Iyer',
      location: 'Mumbai',
      text: 'Third time traveling with Kumaon Yatra Tours. The team knows the Kumaon Himalayas like the back of their hand. The 4-day package was perfectly paced for a working professional. Adi Kailash darshan was the spiritual highlight of my year.',
      rating: 5,
      package: 'Adi Kailash 4 Days'
    },
  ];

  faqs = [
    {
      q: 'What is the best time to visit Adi Kailash and Om Parvat?',
      a: 'The ideal window is May–June and September–October. Monsoon (July–August) brings heavy rainfall and potential landslides, which makes the route risky. Winter months (November–April) see the route closed due to heavy snowfall.'
    },
    {
      q: 'Is prior trekking experience required for these tours?',
      a: 'For the 4-day and 6-day packages, no prior trekking experience is required – moderate fitness is sufficient. For the Darma Valley 5-day adventure package, some prior hiking or trekking experience is recommended as altitudes reach 4,400 m.'
    },
    {
      q: 'What permits are required and how are they arranged?',
      a: 'The Adi Kailash and Om Parvat route passes through a restricted border area requiring an Inner Line Permit (ILP). We handle all permit paperwork as part of our package. You only need to provide your government photo ID (Aadhar/Passport).'
    },
    {
      q: 'What kind of accommodation is available on the route?',
      a: 'Accommodation ranges from guesthouses and KMVN (Kumaon Mandal Vikas Nigam) guest houses in larger villages, to tents and basic shelters at higher altitudes. All our packages include meals. We aim for comfortable, clean stays at every location.'
    },
    {
      q: 'What should I pack for a Himalayan pilgrimage?',
      a: 'Essential items include warm layered clothing (temperatures drop below freezing at high altitude), waterproof jacket, trekking shoes, sunscreen (SPF 50+), sunglasses, personal medications, and a good water bottle. We provide a detailed packing list upon booking.'
    },
    {
      q: 'Can senior citizens or people with health conditions join the tours?',
      a: 'Seniors in good health regularly complete our pilgrimage packages. However, high-altitude trekking is not suitable for those with serious heart or lung conditions. We recommend consulting your doctor before booking and informing us of any health conditions so we can plan appropriately.'
    },
  ];

  ngOnInit(): void {
    this.seo.updateSeo({
      title: 'Kumaon Yatra Tours – Explore the Sacred Himalayas',
      description: 'Book the best Adi Kailash, Om Parvat, Panchachuli, and Darma Valley tour packages. Expert-guided Himalayan pilgrimages and adventures from Uttarakhand.',
      keywords: 'Adi Kailash tour, Om Parvat darshan, Panchachuli base camp, Darma Valley trek, Uttarakhand pilgrimage, Himalayan tours',
      ogType: 'website',
    });

    this.seo.addJsonLd({
      '@context': 'https://schema.org',
      '@type': 'TravelAgency',
      name: 'Kumaon Yatra Tours',
      description: 'Expert-guided Himalayan pilgrimage and adventure tours in Uttarakhand, India.',
      url: 'https://www.tourandtravelsking.com',
      telephone: '+918272855150',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Bin, Near APS Road',
        addressLocality: 'Pithoragarh',
        addressRegion: 'Uttarakhand',
        addressCountry: 'IN'
      },
      priceRange: '₹₹',
      areaServed: 'Uttarakhand, India'
    });

    this.featuredPackages = this.pkgService.getFeatured();
    this.packageImages = this.imageService.assign(this.pkgService.getAll());

    this.testimonialInterval = setInterval(() => {
      this.activeTestimonial.update(v => (v + 1) % this.testimonials.length);
    }, 5000);
  }

  ngOnDestroy(): void {
    if (this.testimonialInterval) clearInterval(this.testimonialInterval);
  }

  toggleFaq(index: number): void {
    this.activeFaq.update(v => v === index ? null : index);
  }

  setTestimonial(index: number): void {
    this.activeTestimonial.set(index);
  }

  formatPrice(price: number): string {
    return new Intl.NumberFormat('en-IN').format(price);
  }

  /** Same destination photo this package uses on the packages page. */
  getImage(pkg: TourPackage, index: number): string {
    return this.packageImages[pkg.slug] ?? this.imageService.fallback(index);
  }
}
