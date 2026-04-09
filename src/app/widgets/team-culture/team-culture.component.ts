import { Component, inject, computed } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { VisitorProfileStore } from '../../shared/data-access/visitor-profile.store';
import { resolveWidgetText } from '../../../locales/widget-text';

export interface CultureCard {
  icon: string;
  key: string;
}

const CULTURE_CARDS: CultureCard[] = [
  { icon: 'code', key: 'challenges' },
  { icon: 'sports_soccer', key: 'sports' },
  { icon: 'groups', key: 'collaboration' },
];

@Component({
  selector: 'app-widget-team-culture',
  imports: [MatIconModule],
  templateUrl: './team-culture.component.html',
  styleUrl: './team-culture.component.scss',
})
export class TeamCultureWidgetComponent {
  private readonly store = inject(VisitorProfileStore);

  private readonly profile = computed(() => ({
    role: this.store.role(),
    timeAvailable: this.store.timeAvailable(),
    communicationStyle: this.store.communicationStyle(),
  }));

  readonly eyebrow = computed(() => resolveWidgetText('team-culture', 'eyebrow', this.profile()));

  readonly headline = computed(() => resolveWidgetText('team-culture', 'headline', this.profile()));

  readonly body = computed(() => resolveWidgetText('team-culture', 'body', this.profile()));

  readonly cards = computed(() =>
    CULTURE_CARDS.map((c) => ({
      icon: c.icon,
      title: resolveWidgetText('team-culture', `card-${c.key}-title`, this.profile()),
      desc: resolveWidgetText('team-culture', `card-${c.key}-desc`, this.profile()),
    })),
  );
}
