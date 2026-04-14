import { Component, inject, computed } from '@angular/core';
import { VisitorProfileStore } from '../../shared/data-access/visitor-profile.store';
import { resolveWidgetText } from '../../../locales/widget-text';

export interface PhilosophyBelief {
  title: string;
  body: string;
}

@Component({
  selector: 'app-widget-philosophy',
  imports: [],
  templateUrl: './philosophy.component.html',
  styleUrl: './philosophy.component.scss',
})
export class PhilosophyWidgetComponent {
  private readonly store = inject(VisitorProfileStore);

  private readonly profile = computed(() => ({
    role: this.store.role(),
    timeAvailable: this.store.timeAvailable(),
  }));

  readonly headline = computed(() =>
    resolveWidgetText('philosophy', 'headline', this.profile()),
  );

  readonly quote = computed(() =>
    resolveWidgetText('philosophy', 'quote', this.profile()),
  );

  readonly beliefs = computed<PhilosophyBelief[]>(() => [
    {
      title: resolveWidgetText('philosophy', 'belief-1-title', this.profile()),
      body: resolveWidgetText('philosophy', 'belief-1-body', this.profile()),
    },
    {
      title: resolveWidgetText('philosophy', 'belief-2-title', this.profile()),
      body: resolveWidgetText('philosophy', 'belief-2-body', this.profile()),
    },
    {
      title: resolveWidgetText('philosophy', 'belief-3-title', this.profile()),
      body: resolveWidgetText('philosophy', 'belief-3-body', this.profile()),
    },
  ]);
}
