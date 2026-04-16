import { Component, inject, computed } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { VisitorProfileStore } from '../../shared/data-access/visitor-profile.store';
import { resolveWidgetText } from '../../../locales/widget-text';

@Component({
  selector: 'app-widget-contact-links',
  imports: [MatButtonModule, MatIconModule, MatTooltipModule],
  templateUrl: './contact-links.component.html',
  styleUrl: './contact-links.component.scss',
})
export class ContactLinksWidgetComponent {
  private readonly store = inject(VisitorProfileStore);

  private readonly profile = computed(() => ({
    role: this.store.role(),
    timeAvailable: this.store.timeAvailable(),
  }));

  readonly eyebrow = computed(() =>
    resolveWidgetText('contact-links', 'eyebrow', this.profile()),
  );
  readonly headline = computed(() =>
    resolveWidgetText('contact-links', 'headline', this.profile()),
  );
  readonly linkedinHint = computed(() =>
    resolveWidgetText('contact-links', 'linkedin-hint', this.profile()),
  );
  readonly githubHint = computed(() =>
    resolveWidgetText('contact-links', 'github-hint', this.profile()),
  );
  readonly emailHint = computed(() =>
    resolveWidgetText('contact-links', 'email-hint', this.profile()),
  );
  readonly phoneHint = computed(() =>
    resolveWidgetText('contact-links', 'phone-hint', this.profile()),
  );

  readonly linkedinUrl = 'https://linkedin.com/in/erik-ferrari-4074161a2';
  readonly githubUrl = 'https://github.com/erikwski';
  readonly email = 'ferrarierik.work@gmail.com';
  readonly emailUrl = `mailto:${this.email}`;
  // TODO: replace with your actual phone number
  readonly phone = '+39 — — —';
  readonly phoneUrl = `tel:+39`;
}
