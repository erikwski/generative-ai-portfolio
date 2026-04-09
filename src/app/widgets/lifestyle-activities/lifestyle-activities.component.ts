import { Component, inject, computed } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { VisitorProfileStore } from '../../shared/data-access/visitor-profile.store';
import { resolveWidgetText } from '../../../locales/widget-text';

export interface ActivityRow {
  icon: string;
  key: string;
  metric: string;
  unit: string;
}

const ACTIVITIES: ActivityRow[] = [
  { icon: 'directions_run', key: 'running', metric: '21.1 km', unit: 'half-marathon' },
  { icon: 'terrain', key: 'trekking', metric: '3000 m+', unit: 'altitude' },
  { icon: 'fitness_center', key: 'climbing', metric: 'V5', unit: 'bouldering' },
  { icon: 'casino', key: 'boardgames', metric: 'Wingspan / Catan', unit: '' },
  { icon: 'map', key: 'localguide', metric: 'Lv. 6', unit: 'Google Maps' },
];

@Component({
  selector: 'app-widget-lifestyle-activities',
  imports: [MatIconModule],
  templateUrl: './lifestyle-activities.component.html',
  styleUrl: './lifestyle-activities.component.scss',
})
export class LifestyleActivitiesWidgetComponent {
  private readonly store = inject(VisitorProfileStore);

  private readonly profile = computed(() => ({
    role: this.store.role(),
    timeAvailable: this.store.timeAvailable(),
    communicationStyle: this.store.communicationStyle(),
  }));

  readonly eyebrow = computed(() =>
    resolveWidgetText('lifestyle-activities', 'eyebrow', this.profile()),
  );

  readonly headline = computed(() =>
    resolveWidgetText('lifestyle-activities', 'headline', this.profile()),
  );

  readonly activities = computed(() =>
    ACTIVITIES.map((a) => ({
      icon: a.icon,
      metric: a.metric,
      unit: a.unit,
      label: resolveWidgetText('lifestyle-activities', `activity-${a.key}`, this.profile()),
    })),
  );
}
