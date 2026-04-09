import { Component, inject, computed } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { VisitorProfileStore } from '../../shared/data-access/visitor-profile.store';
import { resolveWidgetText } from '../../../locales/widget-text';

export interface ObjectivePillar {
  icon: string;
  key: string;
}

const PILLARS: ObjectivePillar[] = [
  { icon: 'architecture', key: 'architecture' },
  { icon: 'groups', key: 'leadership' },
  { icon: 'psychology', key: 'ai' },
];

@Component({
  selector: 'app-widget-professional-objective',
  imports: [MatIconModule],
  templateUrl: './professional-objective.component.html',
  styleUrl: './professional-objective.component.scss',
})
export class ProfessionalObjectiveWidgetComponent {
  private readonly store = inject(VisitorProfileStore);

  private readonly profile = computed(() => ({
    role: this.store.role(),
    timeAvailable: this.store.timeAvailable(),
    communicationStyle: this.store.communicationStyle(),
  }));

  readonly eyebrow = computed(() =>
    resolveWidgetText('professional-objective', 'eyebrow', this.profile()),
  );

  readonly headline = computed(() =>
    resolveWidgetText('professional-objective', 'headline', this.profile()),
  );

  readonly body = computed(() =>
    resolveWidgetText('professional-objective', 'body', this.profile()),
  );

  readonly pillars = computed(() =>
    PILLARS.map((p) => ({
      icon: p.icon,
      label: resolveWidgetText('professional-objective', `pillar-${p.key}`, this.profile()),
    })),
  );
}
