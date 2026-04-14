import { Component, input, inject, computed } from '@angular/core';
import { VisitorProfileStore } from '../../shared/data-access/visitor-profile.store';
import { resolveWidgetText } from '../../../locales/widget-text';

export interface ProjectCard {
  title: string;
  tags: string[];
  metric: string;
  url: string;
}

@Component({
  selector: 'app-widget-project-showcase',
  imports: [],
  templateUrl: './project-showcase.component.html',
  styleUrl: './project-showcase.component.scss',
})
export class ProjectShowcaseWidgetComponent {
  private readonly store = inject(VisitorProfileStore);

  private readonly profile = computed(() => ({
    role: this.store.role(),
    timeAvailable: this.store.timeAvailable(),
  }));

  // ── Translated text ───────────────────────────────────────────────────────
  readonly eyebrow = computed(() =>
    resolveWidgetText('project-showcase', 'eyebrow', this.profile()),
  );
  readonly headline = computed(() =>
    resolveWidgetText('project-showcase', 'headline', this.profile()),
  );
  readonly body = computed(() => resolveWidgetText('project-showcase', 'body', this.profile()));
  readonly ctaLabel = computed(() =>
    resolveWidgetText('project-showcase', 'ctaLabel', this.profile()),
  );

  // ── Dynamic prop — Claude provides the project data at runtime ────────────
  projects = input<ProjectCard[]>([]);
}
