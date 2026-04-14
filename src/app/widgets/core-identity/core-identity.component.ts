import { Component, inject, computed } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { VisitorProfileStore } from '../../shared/data-access/visitor-profile.store';
import { resolveWidgetText } from '../../../locales/widget-text';

export interface IdentityField {
  icon: string;
  label: string;
  value: string;
}

const FIELD_KEYS = [
  { key: 'name', icon: 'person', static: 'Erik Ferrari' },
  { key: 'age', icon: 'cake', static: '25' },
  { key: 'height', icon: 'height', static: '169 cm / 68 kg' },
  { key: 'location', icon: 'location_on', static: 'Reggio Emilia, Italy' },
  { key: 'role', icon: 'work', static: 'Angular Frontend Developer & UI Library Owner' },
] as const;

@Component({
  selector: 'app-widget-core-identity',
  imports: [MatIconModule],
  templateUrl: './core-identity.component.html',
  styleUrl: './core-identity.component.scss',
})
export class CoreIdentityWidgetComponent {
  private readonly store = inject(VisitorProfileStore);

  private readonly profile = computed(() => ({
    role: this.store.role(),
    timeAvailable: this.store.timeAvailable(),
  }));

  readonly headline = computed(() =>
    resolveWidgetText('core-identity', 'headline', this.profile()),
  );

  readonly eyebrow = computed(() => resolveWidgetText('core-identity', 'eyebrow', this.profile()));

  readonly fields = computed<IdentityField[]>(() =>
    FIELD_KEYS.map((f) => ({
      icon: f.icon,
      label: resolveWidgetText('core-identity', `label-${f.key}`, this.profile()),
      value: resolveWidgetText('core-identity', `value-${f.key}`, this.profile(), f.static),
    })),
  );
}
