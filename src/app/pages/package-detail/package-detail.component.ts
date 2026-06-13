import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SeoService } from '../../core/services/seo.service';
import { PackagesService, TourPackage } from '../../core/services/packages.service';

@Component({
  selector: 'app-package-detail',
  imports: [RouterLink, CommonModule],
  templateUrl: './package-detail.component.html',
  styleUrl: './package-detail.component.scss'
})
export class PackageDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private seo = inject(SeoService);
  private pkgService = inject(PackagesService);

  package: TourPackage | undefined;
  notFound = false;
  activeTab = 'overview';
  openDay: number | null = null;

  tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'itinerary', label: 'Day-wise Itinerary' },
    { id: 'inclusions', label: 'Inclusions & Exclusions' },
  ];

  ngOnInit(): void {
    const fullPath = this.route.snapshot.url;
    const packageSlug = fullPath[fullPath.length - 1]?.path ?? '';

    this.package = this.pkgService.getBySlug(packageSlug);

    if (!this.package) {
      this.notFound = true;
      return;
    }

    const pkg = this.package;

    this.seo.updateSeo({
      title: pkg.title,
      description: pkg.metaDescription,
      keywords: pkg.keywords,
      ogType: 'article',
    });

    this.seo.addJsonLd({
      '@context': 'https://schema.org',
      '@type': 'TouristTrip',
      name: pkg.title,
      description: pkg.metaDescription,
      url: `https://www.tourandtravelsking.com/packages/${pkg.slug}`,
      duration: `P${pkg.days}D`,
      provider: {
        '@type': 'TravelAgency',
        name: 'Kumaon Yatra Tours',
        url: 'https://www.tourandtravelsking.com',
        telephone: '+919675259958'
      },
      offers: {
        '@type': 'Offer',
        price: pkg.price,
        priceCurrency: 'INR',
        availability: 'https://schema.org/InStock'
      },
      touristType: ['Pilgrims', 'Adventure seekers', 'Nature lovers'],
      itinerary: pkg.itinerary.map(d => ({
        '@type': 'TouristAttraction',
        name: d.title,
        description: d.description
      }))
    });
  }

  setTab(tab: string): void {
    this.activeTab = tab;
  }

  toggleDay(day: number): void {
    this.openDay = this.openDay === day ? null : day;
  }

  formatPrice(price: number): string {
    return new Intl.NumberFormat('en-IN').format(price);
  }

  getSavings(pkg: TourPackage): number {
    return pkg.originalPrice - pkg.price;
  }
}
