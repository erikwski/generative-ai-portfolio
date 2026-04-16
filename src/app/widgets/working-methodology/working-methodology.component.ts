import { Component, inject, computed } from '@angular/core';
import { VisitorProfileStore } from '../../shared/data-access/visitor-profile.store';
import { resolveWidgetText } from '../../../locales/widget-text';

export interface Methodology {
  id: string;
  title: string;
  body: string;
}

const METHOD_KEYS = ['pr-discipline', 'mentoring', 'agile', 'documentation', 'pairing'] as const;

@Component({
  selector: 'app-widget-working-methodology',
  imports: [],
  templateUrl: './working-methodology.component.html',
  styleUrl: './working-methodology.component.scss',
})
export class WorkingMethodologyWidgetComponent {
  private readonly store = inject(VisitorProfileStore);

  private readonly profile = computed(() => ({
    role: this.store.role(),
    timeAvailable: this.store.timeAvailable(),
  }));

  readonly eyebrow = computed(() =>
    resolveWidgetText('working-methodology', 'eyebrow', this.profile()),
  );
  readonly headline = computed(() =>
    resolveWidgetText('working-methodology', 'headline', this.profile()),
  );
  readonly body = computed(() =>
    resolveWidgetText('working-methodology', 'body', this.profile()),
  );

  readonly methods = computed<Methodology[]>(() =>
    METHOD_KEYS.map((id) => ({
      id,
      title: resolveWidgetText('working-methodology', `method-${id}-title`, this.profile()),
      body: resolveWidgetText('working-methodology', `method-${id}-body`, this.profile()),
    })),
  );
}
