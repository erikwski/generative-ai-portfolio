import { Component, inject, computed } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { VisitorProfileStore } from '../../shared/data-access/visitor-profile.store';
import { resolveWidgetText } from '../../../locales/widget-text';

export interface HobbyItem {
  icon: string;
  label: string;
  sub: string;
}

const HOBBY_KEYS = [
  { icon: 'casino', labelKey: 'hobby-games-label', subKey: 'hobby-games-sub' },
  { icon: 'directions_run', labelKey: 'hobby-running-label', subKey: 'hobby-running-sub' },
  { icon: 'terrain', labelKey: 'hobby-climbing-label', subKey: 'hobby-climbing-sub' },
  { icon: 'travel_explore', labelKey: 'hobby-guide-label', subKey: 'hobby-guide-sub' },
] as const;

@Component({
  selector: 'app-widget-personal-interests',
  imports: [MatIconModule],
  templateUrl: './personal-interests.component.html',
  styleUrl: './personal-interests.component.scss',
})
export class PersonalInterestsWidgetComponent {
  private readonly store = inject(VisitorProfileStore);

  private readonly profile = computed(() => ({
    role: this.store.role(),
    timeAvailable: this.store.timeAvailable(),
    communicationStyle: this.store.communicationStyle(),
  }));

  readonly headline = computed(() =>
    resolveWidgetText('personal-interests', 'headline', this.profile()),
  );
  readonly funFact = computed(() =>
    resolveWidgetText('personal-interests', 'funFact', this.profile()),
  );

  readonly hobbies = computed<HobbyItem[]>(() =>
    HOBBY_KEYS.map((h) => ({
      icon: h.icon,
      label: resolveWidgetText('personal-interests', h.labelKey, this.profile()),
      sub: resolveWidgetText('personal-interests', h.subKey, this.profile()),
    })),
  );
}
