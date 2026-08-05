import { Component, inject, OnInit, signal, computed, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/services/seo.service';
import { PublicGalleryService } from '../../core/services/public-gallery.service';

interface GalleryImage {
  id: string;
  url: string;
  thumb: string;
  caption: string;
  category: string;
  alt: string;
}

@Component({
  selector: 'app-gallery',
  imports: [CommonModule, RouterLink],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent implements OnInit {
  private seo = inject(SeoService);
  private galleryService = inject(PublicGalleryService);
  private platformId = inject(PLATFORM_ID);

  activeCategory = signal('All');
  lightboxImage = signal<GalleryImage | null>(null);
  lightboxIndex = signal(0);

  /** Stock photos plus anything uploaded through the admin panel. */
  images = signal<GalleryImage[]>([]);

  filteredImages = computed(() => {
    const all = this.images();
    const cat = this.activeCategory();
    return cat === 'All' ? all : all.filter(i => i.category === cat);
  });

  categories = ['All', 'Mountains', 'Temples', 'Trekking', 'Valleys', 'Villages'];

  private stockImages: (Omit<GalleryImage, 'id'> & { id: number })[] = [
    { id: 1, url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=85', thumb: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&q=80', caption: 'Himalayan Mountain Sunrise', category: 'Mountains', alt: 'Beautiful sunrise over Himalayan mountain peaks' },
    { id: 2, url: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=85', thumb: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=600&q=80', caption: 'Milky Way over the Himalayas', category: 'Mountains', alt: 'Starry night sky over Himalayan mountains' },
    { id: 3, url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85', thumb: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80', caption: 'Sacred Mountain Lake', category: 'Mountains', alt: 'Clear mountain lake reflecting snow-capped peaks' },
    { id: 4, url: 'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=1200&q=85', thumb: 'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=600&q=80', caption: 'High Altitude Trek', category: 'Trekking', alt: 'Trekkers on high altitude Himalayan trail' },
    { id: 5, url: 'https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1200&q=85', thumb: 'https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=600&q=80', caption: 'Mountain Adventure Trek', category: 'Trekking', alt: 'Adventure trekking in the Himalayas' },
    { id: 6, url: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=1200&q=85', thumb: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=600&q=80', caption: 'Forest Trail to Temple', category: 'Temples', alt: 'Forested trail leading to a Himalayan temple' },
    { id: 7, url: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=85', thumb: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80', caption: 'Himalayan Valley Vista', category: 'Valleys', alt: 'Panoramic view of a deep Himalayan valley' },
    { id: 8, url: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=1200&q=85', thumb: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=600&q=80', caption: 'Alpine Meadows', category: 'Valleys', alt: 'Green alpine meadows with mountain backdrop' },
    { id: 9, url: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=1200&q=85', thumb: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=600&q=80', caption: 'Snow Peaks of Kumaon', category: 'Mountains', alt: 'Snow-covered peaks of the Kumaon Himalayas' },
    { id: 10, url: 'https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&w=1200&q=85', thumb: 'https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&w=600&q=80', caption: 'River Valley Trek', category: 'Trekking', alt: 'Trekking along a glacier river in the Himalayas' },
    { id: 11, url: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?auto=format&fit=crop&w=1200&q=85', thumb: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?auto=format&fit=crop&w=600&q=80', caption: 'Village in the Mountains', category: 'Villages', alt: 'Traditional mountain village in Uttarakhand' },
    { id: 12, url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=85', thumb: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=600&q=80', caption: 'Golden Hour Mountains', category: 'Mountains', alt: 'Golden hour light on Himalayan mountain range' },
  ];

  ngOnInit(): void {
    const stock = this.stockImages.map(i => ({ ...i, id: `stock-${i.id}` }));
    this.images.set(stock);

    if (isPlatformBrowser(this.platformId)) {
      this.galleryService.getAll().subscribe({
        next: uploaded => {
          // Uploaded photos lead; the stock shots stay on as filler.
          const mine = uploaded.map(u => ({
            id: u.id!,
            url: u.dataUrl,
            thumb: u.dataUrl,
            caption: u.caption,
            category: u.category,
            alt: u.caption
          }));
          this.images.set([...mine, ...stock]);
        },
        error: err => console.error('[Gallery] Firestore error:', err)
      });
    }

    this.seo.updateSeo({
      title: 'Gallery – Himalayan Landscapes & Pilgrimage Photos',
      description: 'Explore stunning photography from our Adi Kailash, Om Parvat, Darma Valley, and Kumaon Himalayan tours. Mountains, temples, treks, and valleys.',
      keywords: 'Himalayan gallery, Adi Kailash photos, Om Parvat images, Darma Valley pictures, Kumaon trek photography',
    });
  }

  openLightbox(img: GalleryImage): void {
    this.lightboxIndex.set(this.filteredImages().findIndex(i => i.id === img.id));
    this.lightboxImage.set(img);
  }

  closeLightbox(): void {
    this.lightboxImage.set(null);
  }

  prevImage(): void {
    const imgs = this.filteredImages();
    const newIdx = (this.lightboxIndex() - 1 + imgs.length) % imgs.length;
    this.lightboxIndex.set(newIdx);
    this.lightboxImage.set(imgs[newIdx]);
  }

  nextImage(): void {
    const imgs = this.filteredImages();
    const newIdx = (this.lightboxIndex() + 1) % imgs.length;
    this.lightboxIndex.set(newIdx);
    this.lightboxImage.set(imgs[newIdx]);
  }

  setCategory(cat: string): void {
    this.activeCategory.set(cat);
  }
}
