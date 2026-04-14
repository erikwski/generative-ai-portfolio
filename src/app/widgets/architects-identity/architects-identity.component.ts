import { Component, input, inject, computed } from '@angular/core';
import { VisitorProfileStore } from '../../shared/data-access/visitor-profile.store';
import { resolveWidgetText } from '../../../locales/widget-text';

@Component({
  selector: 'app-widget-architects-identity',
  imports: [],
  templateUrl: './architects-identity.component.html',
  styleUrl: './architects-identity.component.scss',
})
export class ArchitectsIdentityWidgetComponent {
  private readonly store = inject(VisitorProfileStore);

  private readonly profile = computed(() => ({
    role:               this.store.role(),
    timeAvailable:      this.store.timeAvailable(),
  }));

  // ── Translated text — resolved from locale + visitor profile ─────────────
  readonly eyebrow  = computed(() => resolveWidgetText('architects-identity', 'eyebrow',  this.profile()));
  readonly headline = computed(() => resolveWidgetText('architects-identity', 'headline', this.profile()));
  readonly tagline  = computed(() => resolveWidgetText('architects-identity', 'tagline',  this.profile()));
  readonly body     = computed(() => resolveWidgetText('architects-identity', 'body',     this.profile()));

  // ── Dynamic prop — Claude selects these at runtime ────────────────────────
  highlights = input<string[]>([]);
}
