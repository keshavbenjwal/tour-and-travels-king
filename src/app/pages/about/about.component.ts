import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-about',
  imports: [RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  private seo = inject(SeoService);

  stats = [
    { num: '500+', label: 'Happy Pilgrims' },
    { num: '10+', label: 'Years of Experience' },
    { num: '5', label: 'Curated Packages' },
    { num: '100%', label: 'Safety Record' },
  ];

  team = [
    {
      name: 'Jagdish Singh',
      role: 'Founder & Lead Guide',
      desc: 'A passionate Himalayan explorer with over a decade of experience guiding spiritual journeys in Uttarakhand. Jagdish\'s deep knowledge of local culture, terrain, and sacred traditions makes every tour truly special.',
      icon: 'fas fa-user-circle'
    }
  ];

  values = [
    { icon: 'fas fa-shield-alt', title: 'Safety Above All', desc: 'Every route is scouted, every guide certified, and every tour backed by emergency protocols.' },
    { icon: 'fas fa-praying-hands', title: 'Spiritual Integrity', desc: 'We treat every sacred site with reverence and educate travelers on proper pilgrimage etiquette.' },
    { icon: 'fas fa-leaf', title: 'Eco-Conscious Travel', desc: 'Leave No Trace principles applied strictly. We protect the Himalayan ecosystem for future generations.' },
    { icon: 'fas fa-handshake', title: 'Community Support', desc: 'We employ local guides, use local homestays, and support mountain community livelihoods.' },
  ];

  ngOnInit(): void {
    this.seo.updateSeo({
      title: 'About Us – Kumaon Yatra Tours',
      description: 'Learn about Kumaon Yatra Tours – Uttarakhand\'s trusted Himalayan tour operator specializing in Adi Kailash, Om Parvat, and Kumaon pilgrimage packages.',
      keywords: 'about Kumaon Yatra Tours, Himalayan tour operator, Jagdish Singh, Uttarakhand guides',
    });

    this.seo.addJsonLd({
      '@context': 'https://schema.org',
      '@type': 'TravelAgency',
      name: 'Kumaon Yatra Tours',
      description: 'Expert-guided Himalayan pilgrimage and adventure tours in Uttarakhand, India.',
      founder: { '@type': 'Person', name: 'Jagdish Singh' },
      foundingDate: '2014',
      url: 'https://www.tourandtravelsking.com/about',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Bin, Near APS Road',
        addressLocality: 'Pithoragarh',
        addressRegion: 'Uttarakhand',
        addressCountry: 'IN'
      }
    });
  }
}
