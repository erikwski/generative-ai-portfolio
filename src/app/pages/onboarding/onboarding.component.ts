import { Component, inject, signal, effect, LOCALE_ID } from '@angular/core';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatRippleModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { VisitorProfileStore } from '../../shared/data-access/visitor-profile.store';
import {
  CommunicationStyle,
  TimeAvailable,
  VisitorRole,
} from '../../shared/domain/visitor-profile';
import { LogoComponent } from '../../shared/ui/logo/logo.component';
import { SUPPORTED_LOCALES, switchLocale, type SupportedLocale } from '../../../locales';
import { ProjectShowcaseWidgetComponent } from '../../widgets/project-showcase/project-showcase.component';

@Component({
  selector: 'app-onboarding',
  imports: [
    FormsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatRippleModule,
    LogoComponent,
    ProjectShowcaseWidgetComponent,
  ],
  templateUrl: './onboarding.component.html',
  styleUrl: './onboarding.component.scss',
})
export class OnboardingComponent {
  private readonly router = inject(Router);
  private readonly store = inject(VisitorProfileStore);

  readonly activeLocale = inject(LOCALE_ID) as SupportedLocale;
  readonly locales = SUPPORTED_LOCALES;

  role = signal<VisitorRole >(this.store.role());
  timeAvailable = signal<TimeAvailable >(this.store.timeAvailable());
  communicationStyle = signal<CommunicationStyle >(this.store.communicationStyle());

  constructor() {
    // TODO: Remove when end creating widgets
    // Sync form selections → store live so the widget preview updates reactively.
    // The route guard only fires on navigation, so this won't redirect mid-form.
    effect(() => {
      this.store.setProfile({
        role: this.role(),
        timeAvailable: this.timeAvailable(),
        communicationStyle: this.communicationStyle(),
      });
    });
  }

  switchLocale(locale: SupportedLocale): void {
    if (locale !== this.activeLocale) switchLocale(locale);
  }

  isValid(): boolean {
    return (
      this.role() !== null && this.timeAvailable() !== null && this.communicationStyle() !== null
    );
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
