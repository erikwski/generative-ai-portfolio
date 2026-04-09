import { Component, inject, computed } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { VisitorProfileStore } from '../../shared/data-access/visitor-profile.store';
import { resolveWidgetText } from '../../../locales/widget-text';

export interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_KEYS = ['q1', 'q2', 'q3'] as const;

@Component({
  selector: 'app-widget-contextual-faq',
  imports: [MatExpansionModule],
  templateUrl: './contextual-faq.component.html',
  styleUrl: './contextual-faq.component.scss',
})
export class ContextualFaqWidgetComponent {
  private readonly store = inject(VisitorProfileStore);

  private readonly profile = computed(() => ({
    role: this.store.role(),
    timeAvailable: this.store.timeAvailable(),
    communicationStyle: this.store.communicationStyle(),
  }));

  readonly eyebrow = computed(() => resolveWidgetText('contextual-faq', 'eyebrow', this.profile()));

  readonly headline = computed(() =>
    resolveWidgetText('contextual-faq', 'headline', this.profile()),
  );

  readonly faqs = computed<FaqItem[]>(() =>
    FAQ_KEYS.map((k) => ({
      question: resolveWidgetText('contextual-faq', `${k}-question`, this.profile()),
      answer: resolveWidgetText('contextual-faq', `${k}-answer`, this.profile()),
    })),
  );
}
