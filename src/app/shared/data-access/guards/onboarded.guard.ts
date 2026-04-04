import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';
import { VisitorProfileStore } from '../visitor-profile.store';
import { MatSnackBar } from '@angular/material/snack-bar';

export const onboardedGuard: CanActivateFn = () => {
  const store = inject(VisitorProfileStore);
  const router = inject(Router);

  if (store.isOnboarded()) return true;

  const snackBar = inject(MatSnackBar);

  snackBar.open(
    $localize`:@@guard.onboarded.message:Complete your profile first so the AI knows how to talk to you.`,
    $localize`:@@guard.onboarded.action:Got it`,
    { duration: 4000, panelClass: 'snack--warn' },
  );

  router.navigate(['/onboarding'], { state: { guardError: 'onboarded' } });
  return false;
};
