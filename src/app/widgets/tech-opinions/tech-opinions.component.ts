import { Component, inject, computed } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { VisitorProfileStore } from '../../shared/data-access/visitor-profile.store';
import { resolveWidgetText } from '../../../locales/widget-text';

export interface TechOpinion {
  id: string;
  topic: string;
  take: string;
  detail: string;
}

const OPINION_KEYS = [
  'ai-future',
  'angular-react',
  'monorepos',
  'juniors-ai-era',
  'backend',
  'webassembly',
  'italian-tech',
] as const;

@Component({
  selector: 'app-widget-tech-opinions',
  imports: [MatExpansionModule],
  templateUrl: './tech-opinions.component.html',
  styleUrl: './tech-opinions.component.scss',
})
export class TechOpinionsWidgetComponent {
  private readonly store = inject(VisitorProfileStore);

  private readonly profile = computed(() => ({
    role: this.store.role(),
    timeAvailable: this.store.timeAvailable(),
  }));

  readonly eyebrow = computed(() =>
    resolveWidgetText('tech-opinions', 'eyebrow', this.profile()),
  );
  readonly headline = computed(() =>
    resolveWidgetText('tech-opinions', 'headline', this.profile()),
  );

  readonly opinions = computed<TechOpinion[]>(() =>
    OPINION_KEYS.map((id) => ({
      id,
      topic: resolveWidgetText('tech-opinions', `opinion-${id}-topic`, this.profile()),
      take: resolveWidgetText('tech-opinions', `opinion-${id}-take`, this.profile()),
      detail: resolveWidgetText('tech-opinions', `opinion-${id}-detail`, this.profile()),
    })),
  );
}
