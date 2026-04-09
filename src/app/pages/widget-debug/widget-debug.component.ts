import { Component, inject, signal, effect } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { VisitorProfileStore } from '../../shared/data-access/visitor-profile.store';
import {
  CommunicationStyle,
  TimeAvailable,
  VisitorRole,
} from '../../shared/domain/visitor-profile';
import { WidgetShellComponent } from '../../shared/ui/widget-shell/widget-shell.component';
import { ArchitectsIdentityWidgetComponent } from '../../widgets/architects-identity/architects-identity.component';
import { EvolutionTimelineWidgetComponent } from '../../widgets/evolution-timeline/evolution-timeline.component';
import { ProjectShowcaseWidgetComponent } from '../../widgets/project-showcase/project-showcase.component';
import { SkillConstellationWidgetComponent } from '../../widgets/skill-constellation/skill-constellation.component';
import { PersonalInterestsWidgetComponent } from '../../widgets/personal-interests/personal-interests.component';
import { ExperienceVaultWidgetComponent } from '../../widgets/experience-vault/experience-vault.component';
import { CompatibilityEngineWidgetComponent } from '../../widgets/compatibility-engine/compatibility-engine.component';
import { CoreIdentityWidgetComponent } from '../../widgets/core-identity/core-identity.component';
import { ProfessionalObjectiveWidgetComponent } from '../../widgets/professional-objective/professional-objective.component';
import { TeamCultureWidgetComponent } from '../../widgets/team-culture/team-culture.component';
import { LifestyleActivitiesWidgetComponent } from '../../widgets/lifestyle-activities/lifestyle-activities.component';
import type { ProjectCard } from '../../widgets/project-showcase/project-showcase.component';

const SAMPLE_PROJECTS: ProjectCard[] = [
  {
    title: 'Generative AI Portfolio',
    tags: ['Angular 21', 'Hashbrown', 'Claude API', 'SSR'],
    metric: 'Live',
    url: 'https://erikwski.dev',
  },
  {
    title: 'Datacolor UI Library',
    tags: ['Angular', 'Design System', 'Storybook'],
    metric: '3× reuse',
    url: '',
  },
  {
    title: 'AI Workflow Tool',
    tags: ['Angular', 'LangChain', 'Node.js'],
    metric: '40% faster',
    url: '',
  },
];

@Component({
  selector: 'app-widget-debug',
  imports: [
    MatButtonToggleModule,
    WidgetShellComponent,
    ArchitectsIdentityWidgetComponent,
    EvolutionTimelineWidgetComponent,
    ProjectShowcaseWidgetComponent,
    SkillConstellationWidgetComponent,
    PersonalInterestsWidgetComponent,
    ExperienceVaultWidgetComponent,
    CompatibilityEngineWidgetComponent,
    CoreIdentityWidgetComponent,
    ProfessionalObjectiveWidgetComponent,
    TeamCultureWidgetComponent,
    LifestyleActivitiesWidgetComponent,
  ],
  templateUrl: './widget-debug.component.html',
  styleUrl: './widget-debug.component.scss',
})
export class WidgetDebugComponent {
  private readonly store = inject(VisitorProfileStore);

  // ── Profile controls ──────────────────────────────────────────────────────
  role = signal<VisitorRole>(this.store.role());
  timeAvailable = signal<TimeAvailable>(this.store.timeAvailable());
  communicationStyle = signal<CommunicationStyle>(this.store.communicationStyle());

  constructor() {
    effect(() => {
      this.store.setProfile({
        role: this.role(),
        timeAvailable: this.timeAvailable(),
        communicationStyle: this.communicationStyle(),
      });
    });
  }

  // ── Dismissed widgets ─────────────────────────────────────────────────────
  dismissed = signal<Set<string>>(new Set());

  dismiss(key: string): void {
    this.dismissed.update((s) => new Set([...s, key]));
  }

  isVisible(key: string): boolean {
    return !this.dismissed().has(key);
  }

  resetDismissed(): void {
    this.dismissed.set(new Set());
  }

  // ── Sample data ───────────────────────────────────────────────────────────
  readonly sampleProjects = SAMPLE_PROJECTS;
  readonly identityHighlights = ['Generative UI', 'Angular 21', 'Available for hire'];
}
