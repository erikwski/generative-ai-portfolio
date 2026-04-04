import { Component, inject, signal, LOCALE_ID } from '@angular/core';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatRippleModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { VisitorProfileStore } from '../../shared/data-access/visitor-profile.store';
import { CommunicationStyle, TimeAvailable, VisitorRole } from '../../shared/domain/visitor-profile';
import { LogoComponent } from '../../shared/ui/logo/logo.component';
import { SUPPORTED_LOCALES, switchLocale, type SupportedLocale } from '../../../locales';

@Component({
  selector: 'app-onboarding',
  imports: [
    FormsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatRippleModule,
    LogoComponent,
  ],
  templateUrl: './onboarding.component.html',
  styleUrl: './onboarding.component.scss',
})
export class OnboardingComponent {
  private readonly router = inject(Router);
  private readonly store = inject(VisitorProfileStore);

  readonly activeLocale = inject(LOCALE_ID) as SupportedLocale;
  readonly locales = SUPPORTED_LOCALES;

  // Pre-fill from persisted store state
  role = signal<VisitorRole | null>(this.store.role());
  timeAvailable = signal<TimeAvailable | null>(this.store.timeAvailable());
  communicationStyle = signal<CommunicationStyle | null>(this.store.communicationStyle());

  switchLocale(locale: SupportedLocale): void {
    if (locale !== this.activeLocale) switchLocale(locale);
  }

  isValid(): boolean {
    return this.role() !== null && this.timeAvailable() !== null && this.communicationStyle() !== null;
  }

  submit(): void {
    if (!this.isValid()) return;
    this.store.setProfile({
      role: this.role(),
      timeAvailable: this.timeAvailable(),
      communicationStyle: this.communicationStyle(),
    });
    this.router.navigate(['/canvas']);
  }
}
