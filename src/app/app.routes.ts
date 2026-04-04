import { Routes } from '@angular/router';
import { onboardedGuard } from './shared/data-access/guards/onboarded.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'onboarding',
    pathMatch: 'full',
  },
  {
    path: 'onboarding',
    loadComponent: () =>
      import('./pages/onboarding/onboarding.component').then((m) => m.OnboardingComponent),
  },
  {
    path: 'canvas',
    canActivate: [onboardedGuard],
    loadComponent: () => import('./pages/canvas/canvas.component').then((m) => m.CanvasComponent),
  },
];
