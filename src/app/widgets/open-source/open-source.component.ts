import { Component, inject, computed } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { VisitorProfileStore } from '../../shared/data-access/visitor-profile.store';
import { resolveWidgetText } from '../../../locales/widget-text';

export interface OpenSourceProject {
  name: string;
  role: string;
  desc: string;
  link: string;
}

@Component({
  selector: 'app-widget-open-source',
  imports: [MatIconModule],
  templateUrl: './open-source.component.html',
  styleUrl: './open-source.component.scss',
})
export class OpenSourceWidgetComponent {
  private readonly store = inject(VisitorProfileStore);

  private readonly profile = computed(() => ({
    role: this.store.role(),
    timeAvailable: this.store.timeAvailable(),
  }));

  readonly headline = computed(() =>
    resolveWidgetText('open-source', 'headline', this.profile()),
  );

  readonly intro = computed(() =>
    resolveWidgetText('open-source', 'intro', this.profile()),
  );

  readonly projects = computed<OpenSourceProject[]>(() => [
    {
      name: resolveWidgetText('open-source', 'proj-1-name', this.profile(), 'HyperIoT'),
      role: resolveWidgetText('open-source', 'proj-1-role', this.profile(), 'Individual Contributor'),
      desc: resolveWidgetText('open-source', 'proj-1-desc', this.profile(), ''),
      link: 'https://hyperiot.cloud/',
    },
    {
      name: resolveWidgetText('open-source', 'proj-2-name', this.profile(), 'openapi-ts'),
      role: resolveWidgetText('open-source', 'proj-2-role', this.profile(), 'PR Contributor'),
      desc: resolveWidgetText('open-source', 'proj-2-desc', this.profile(), ''),
      link: 'https://github.com/hey-api/openapi-ts/pull/3552',
    },
  ]);
}
