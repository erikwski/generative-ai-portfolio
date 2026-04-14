import { Component, inject, computed } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { VisitorProfileStore } from '../../shared/data-access/visitor-profile.store';
import { resolveWidgetText } from '../../../locales/widget-text';

export interface CredentialItem {
  icon: string;
  title: string;
  institution: string;
  detail: string;
  status: string;
  completed: boolean;
}

const CREDENTIAL_KEYS = [
  { key: 'bsc', icon: 'school', detail: '109 / 110', completed: true },
  { key: 'english', icon: 'translate', detail: 'C1', completed: false },
] as const;

@Component({
  selector: 'app-widget-experience-vault',
  imports: [MatIconModule],
  templateUrl: './experience-vault.component.html',
  styleUrl: './experience-vault.component.scss',
})
export class ExperienceVaultWidgetComponent {
  private readonly store = inject(VisitorProfileStore);

  private readonly profile = computed(() => ({
    role: this.store.role(),
    timeAvailable: this.store.timeAvailable(),
  }));

  readonly eyebrow = computed(() =>
    resolveWidgetText('experience-vault', 'eyebrow', this.profile(), 'Education & Certifications'),
  );

  readonly headline = computed(() =>
    resolveWidgetText('experience-vault', 'headline', this.profile()),
  );

  readonly credentials = computed<CredentialItem[]>(() =>
    CREDENTIAL_KEYS.map((c) => ({
      icon: c.icon,
      detail: c.detail,
      completed: c.completed,
      title: resolveWidgetText('experience-vault', `cred-${c.key}-title`, this.profile()),
      institution: resolveWidgetText(
        'experience-vault',
        `cred-${c.key}-institution`,
        this.profile(),
      ),
      status: resolveWidgetText('experience-vault', `cred-${c.key}-status`, this.profile()),
    })),
  );
}
