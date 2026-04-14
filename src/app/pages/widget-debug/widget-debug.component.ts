import { Component, inject, signal, effect } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { VisitorProfileStore } from '../../shared/data-access/visitor-profile.store';
import { TimeAvailable, VisitorRole } from '../../shared/domain/visitor-profile';
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
import { ContextualFaqWidgetComponent } from '../../widgets/contextual-faq/contextual-faq.component';
import { CvDownloadWidgetComponent } from '../../widgets/cv-download/cv-download.component';
import { HireMeWidgetComponent } from '../../widgets/hire-me/hire-me.component';
import { PhilosophyWidgetComponent } from '../../widgets/philosophy/philosophy.component';
import { MusicTasteWidgetComponent } from '../../widgets/music-taste/music-taste.component';
import { ReadingListWidgetComponent } from '../../widgets/reading-list/reading-list.component';
import { OriginStoryWidgetComponent } from '../../widgets/origin-story/origin-story.component';
import { MetaExplainerWidgetComponent } from '../../widgets/meta-explainer/meta-explainer.component';
import { ConferenceActivityWidgetComponent } from '../../widgets/conference-activity/conference-activity.component';
import { OpenSourceWidgetComponent } from '../../widgets/open-source/open-source.component';
import { MentorsWidgetComponent } from '../../widgets/mentors/mentors.component';
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
    ContextualFaqWidgetComponent,
    CvDownloadWidgetComponent,
    HireMeWidgetComponent,
    PhilosophyWidgetComponent,
    MusicTasteWidgetComponent,
    ReadingListWidgetComponent,
    OriginStoryWidgetComponent,
    MetaExplainerWidgetComponent,
    ConferenceActivityWidgetComponent,
    OpenSourceWidgetComponent,
    MentorsWidgetComponent,
  ],
  templateUrl: './widget-debug.component.html',
  styleUrl: './widget-debug.component.scss',
})
export class WidgetDebugComponent {
  private readonly store = inject(VisitorProfileStore);

  // ── Profile controls ──────────────────────────────────────────────────────
  role = signal<VisitorRole>('tech-peer');
  timeAvailable = signal<TimeAvailable>('elevator');

  constructor() {
    effect(() => {
      this.store.setProfile({
        role: this.role(),
        timeAvailable: this.timeAvailable(),
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
