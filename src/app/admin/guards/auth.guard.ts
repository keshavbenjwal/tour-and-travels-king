import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);

  if (!auth.isChecked()) {
    // Auth state not yet resolved — allow and let the component handle it
    return true;
  }

  if (auth.isLoggedIn()) {
    return true;
  }

  return router.createUrlTree(['/admin/login']);
};
