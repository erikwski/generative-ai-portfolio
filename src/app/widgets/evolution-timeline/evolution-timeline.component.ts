import { Component, input, inject, computed } from '@angular/core';
import { VisitorProfileStore } from '../../shared/data-access/visitor-profile.store';
import { resolveWidgetText } from '../../../locales/widget-text';

export interface TimelineEntry {
  key:       string;
  company:   string;
  roleTitle: string;
  period:    string;
  desc:      string;
  current:   boolean;
}

@Component({
  selector: 'app-widget-evolution-timeline',
  imports: [],
  templateUrl: './evolution-timeline.component.html',
  styleUrl: './evolution-timeline.component.scss',
})
export class EvolutionTimelineWidgetComponent {
  private readonly store = inject(VisitorProfileStore);

  private readonly profile = computed(() => ({
    role:               this.store.role(),
    timeAvailable:      this.store.timeAvailable(),
  }));

  // ── Translated text ───────────────────────────────────────────────────────
  readonly headline     = computed(() => resolveWidgetText('evolution-timeline', 'headline',      this.profile()));
  readonly currentLabel = computed(() => resolveWidgetText('evolution-timeline', 'current-label', this.profile()));

  // ── Dynamic prop ──────────────────────────────────────────────────────────
  focusCompany = input<string>('');

  readonly entries = computed<TimelineEntry[]>(() => {
    const p = this.profile();
    return [
      {
        key:       'datacolor',
        company:   'Datacolor Industrial',
        roleTitle: resolveWidgetText('evolution-timeline', 'datacolor-role', p, 'Angular Frontend Developer & UI Library Owner'),
        period:    'Jun 2024 – Present',
        desc:      resolveWidgetText('evolution-timeline', 'datacolor-desc', p),
        current:   true,
      },
      {
        key:       'acsoftware',
        company:   'ACSoftware',
        roleTitle: resolveWidgetText('evolution-timeline', 'acsoftware-role', p, 'Angular Developer'),
        period:    'Jun 2022 – Jun 2024',
        desc:      resolveWidgetText('evolution-timeline', 'acsoftware-desc', p),
        current:   false,
      },
      {
        key:       'smarthy',
        company:   'Smarthy Srl',
        roleTitle: resolveWidgetText('evolution-timeline', 'smarthy-role', p, 'Full-Stack Developer'),
        period:    'Jun 2020 – Jun 2022',
        desc:      resolveWidgetText('evolution-timeline', 'smarthy-desc', p),
        current:   false,
      },
    ];
  });
}
