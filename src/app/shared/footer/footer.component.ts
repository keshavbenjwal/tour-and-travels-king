import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Tour Packages', path: '/packages' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Contact Us', path: '/contact' },
  ];

  packages = [
    { label: 'Adi Kailash 4 Days', path: '/packages/adi-kailash-4-days' },
    { label: 'Adi Kailash 6 Days', path: '/packages/adi-kailash-6-days' },
    { label: 'Adi Kailash 7 Days', path: '/packages/adi-kailash-7-days' },
    { label: 'Adi Kailash 9 Days', path: '/packages/adi-kailash-9-days' },
    { label: 'Darma Valley 5 Days', path: '/packages/darma-valley-panchachuli' },
  ];
}
