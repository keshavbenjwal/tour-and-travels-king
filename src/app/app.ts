import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter, map } from 'rxjs';
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
