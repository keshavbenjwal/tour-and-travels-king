import { Component, computed, inject, HostListener } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter, map } from 'rxjs';
import { ConversionTrackingService } from './core/services/conversion-tracking.service';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FloatingButtonsComponent } from './shared/floating-buttons/floating-buttons.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent, FloatingButtonsComponent],
  template: `
    @if (!isAdminArea()) {
      <app-navbar></app-navbar>
    }

    <main>
      <router-outlet></router-outlet>
    </main>

    @if (!isAdminArea()) {
      <app-footer></app-footer>
      <app-floating-buttons></app-floating-buttons>
    }
  `,
  styles: [`
    main {
      min-height: 100vh;
    }
  `]
})
export class App {
  private router = inject(Router);
  private conversions = inject(ConversionTrackingService);

  /**
   * Reports Google Ads conversions for WhatsApp and phone links site-wide.
   *
   * Handled in one place rather than on each anchor: these links live across
   * the footer, floating buttons, packages, package detail and contact pages,
   * and any new one would otherwise be missed. The click is not intercepted —
   * links open exactly as before.
   */
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as Element | null;
    if (!target?.closest) return;

    if (target.closest('a[href*="wa.me"]')) {
      this.conversions.reportWhatsAppConversion();
    } else if (target.closest('a[href^="tel:"]')) {
      this.conversions.reportPhoneCallConversion();
    }
  }

  private currentUrl = toSignal(
    this.router.events.pipe(
      filter((e): e is NavigationEnd => e instanceof NavigationEnd),
      map(e => e.urlAfterRedirects)
    ),
    { initialValue: this.router.url }
  );

  /**
   * The admin panel has its own toolbar. The public navbar is position:fixed,
   * so leaving it on would sit directly on top of the admin toolbar and hide it.
   */
  isAdminArea = computed(() => this.currentUrl().startsWith('/admin'));
}
