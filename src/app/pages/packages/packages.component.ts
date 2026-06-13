import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SeoService } from '../../core/services/seo.service';
import { PackagesService, TourPackage } from '../../core/services/packages.service';

@Component({
  selector: 'app-packages',
  imports: [RouterLink, CommonModule],
  templateUrl: './packages.component.html',
  styleUrl: './packages.component.scss'
})
export class PackagesComponent implements OnInit {
  private seo = inject(SeoService);
  private pkgService = inject(PackagesService);

  packages: TourPackage[] = [];
  selectedDifficulty = 'All';
  difficulties = ['All', 'Easy', 'Moderate', 'Challenging'];

  get filteredPackages(): TourPackage[] {
    if (this.selectedDifficulty === 'All') return this.packages;
    return this.packages.filter(p => p.difficulty === this.selectedDifficulty);
  }

  ngOnInit(): void {
    this.packages = this.pkgService.getAll();

    this.seo.updateSeo({
      title: 'Tour Packages – Adi Kailash, Om Parvat & Himalayan Tours',
      description: 'Browse all Kumaon Yatra Tours Himalayan packages – 4-day to 9-day tours covering Adi Kailash, Om Parvat, Darma Valley, Panchachuli, and the best of Kumaon.',
      keywords: 'Adi Kailash packages, Om Parvat tour packages, Himalayan pilgrimage packages, Uttarakhand tour packages, Panchachuli trek',
    });

    this.seo.addJsonLd({
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Kumaon Yatra Tours – Himalayan Packages',
      itemListElement: this.packages.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'TouristTrip',
          name: p.title,
          description: p.overview.substring(0, 200),
          url: `https://www.tourandtravelsking.com/packages/${p.slug}`,
          touristType: ['Pilgrims', 'Adventure seekers'],
        }
      }))
    });
  }

  formatPrice(price: number): string {
    return new Intl.NumberFormat('en-IN').format(price);
  }

  setFilter(difficulty: string): void {
    this.selectedDifficulty = difficulty;
  }
}
