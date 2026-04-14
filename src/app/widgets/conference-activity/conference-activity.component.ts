import { Component, inject, computed } from '@angular/core';
import { VisitorProfileStore } from '../../shared/data-access/visitor-profile.store';
import { resolveWidgetText } from '../../../locales/widget-text';

export interface ConferenceEntry {
  name: string;
  year: string;
  note: string;
}

const CONF_KEYS = [
  { key: '1', defaultName: 'AWS Summit',      defaultYear: 'May 2022',      defaultNote: '' },
  { key: '2', defaultName: 'ng-rome',          defaultYear: 'Dec 2022',      defaultNote: '' },
  { key: '3', defaultName: 'ng-rome',          defaultYear: '2024',          defaultNote: '' },
  { key: '4', defaultName: 'Modena DevFest',   defaultYear: '2024 + 2025',   defaultNote: '' },
  { key: '5', defaultName: 'WebDay',           defaultYear: '2026',          defaultNote: '' },
] as const;

@Component({
  selector: 'app-widget-conference-activity',
  imports: [],
  templateUrl: './conference-activity.component.html',
  styleUrl: './conference-activity.component.scss',
})
export class ConferenceActivityWidgetComponent {
  private readonly store = inject(VisitorProfileStore);

  private readonly profile = computed(() => ({
    role: this.store.role(),
    timeAvailable: this.store.timeAvailable(),
  }));

  readonly headline = computed(() =>
    resolveWidgetText('conference-activity', 'headline', this.profile()),
  );

  readonly intro = computed(() =>
    resolveWidgetText('conference-activity', 'intro', this.profile()),
  );

  readonly speakingNote = computed(() =>
    resolveWidgetText('conference-activity', 'speaking-note', this.profile()),
  );

  readonly conferences = computed<ConferenceEntry[]>(() =>
    CONF_KEYS.map((c) => ({
      name: resolveWidgetText('conference-activity', `conf-${c.key}-name`, this.profile(), c.defaultName),
      year: resolveWidgetText('conference-activity', `conf-${c.key}-year`, this.profile(), c.defaultYear),
      note: resolveWidgetText('conference-activity', `conf-${c.key}-note`, this.profile(), c.defaultNote),
    })),
  );
}
