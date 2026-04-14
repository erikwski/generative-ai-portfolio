import { Component, inject, computed } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { VisitorProfileStore } from '../../shared/data-access/visitor-profile.store';
import { resolveWidgetText } from '../../../locales/widget-text';

@Component({
  selector: 'app-widget-hire-me',
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './hire-me.component.html',
  styleUrl: './hire-me.component.scss',
})
export class HireMeWidgetComponent {
  private readonly store = inject(VisitorProfileStore);

  private readonly profile = computed(() => ({
    role: this.store.role(),
    timeAvailable: this.store.timeAvailable(),
  }));

  readonly headline = computed(() =>
    resolveWidgetText('hire-me', 'headline', this.profile()),
  );

  readonly body = computed(() =>
    resolveWidgetText('hire-me', 'body', this.profile()),
  );

  readonly ctaEmail = computed(() =>
    resolveWidgetText('hire-me', 'cta-email', this.profile()),
  );

  readonly ctaLinkedin = computed(() =>
    resolveWidgetText('hire-me', 'cta-linkedin', this.profile()),
  );

  readonly availability = computed(() =>
    resolveWidgetText('hire-me', 'availability', this.profile()),
  );

  readonly emailUrl = 'mailto:ferrarierik.work@gmail.com';
  readonly linkedinUrl = 'https://linkedin.com/in/erik-ferrari-4074161a2';
}
