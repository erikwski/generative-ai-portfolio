import { Component, inject, computed } from '@angular/core';
import { VisitorProfileStore } from '../../shared/data-access/visitor-profile.store';
import { resolveWidgetText } from '../../../locales/widget-text';

export interface MentorEntry {
  name: string;
  context: string;
  gave: string;
}

const MENTOR_KEYS = [
  {
    key: '1',
    defaultName: 'Paolo Nobile',
    defaultContext: 'Smarthy',
    defaultGave: '',
  },
  {
    key: '2',
    defaultName: 'Giovanni Colacitti',
    defaultContext: 'ACSoftware',
    defaultGave: '',
  },
  {
    key: '3',
    defaultName: 'Gabriele Campi',
    defaultContext: 'Datacolor',
    defaultGave: '',
  },
  {
    key: '4',
    defaultName: 'Manfred Steyer',
    defaultContext: 'Angular GDE',
    defaultGave: '',
  },
  {
    key: '5',
    defaultName: 'Fabio Biondi',
    defaultContext: 'Angular Community Italy',
    defaultGave: '',
  },
  {
    key: '6',
    defaultName: 'Soumaya Erradi',
    defaultContext: 'Tech Speaker',
    defaultGave: '',
  },
] as const;

@Component({
  selector: 'app-widget-mentors',
  imports: [],
  templateUrl: './mentors.component.html',
  styleUrl: './mentors.component.scss',
})
export class MentorsWidgetComponent {
  private readonly store = inject(VisitorProfileStore);

  private readonly profile = computed(() => ({
    role: this.store.role(),
    timeAvailable: this.store.timeAvailable(),
    communicationStyle: this.store.communicationStyle(),
  }));

  readonly headline = computed(() =>
    resolveWidgetText('mentors', 'headline', this.profile()),
  );

  readonly intro = computed(() =>
    resolveWidgetText('mentors', 'intro', this.profile()),
  );

  readonly friendNote = computed(() =>
    resolveWidgetText('mentors', 'friend-note', this.profile()),
  );

  readonly mentors = computed<MentorEntry[]>(() =>
    MENTOR_KEYS.map((m) => ({
      name: resolveWidgetText('mentors', `mentor-${m.key}-name`, this.profile(), m.defaultName),
      context: resolveWidgetText('mentors', `mentor-${m.key}-context`, this.profile(), m.defaultContext),
      gave: resolveWidgetText('mentors', `mentor-${m.key}-gave`, this.profile(), m.defaultGave),
    })),
  );
}
