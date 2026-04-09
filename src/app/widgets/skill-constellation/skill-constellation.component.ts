import { Component, input, inject, computed } from '@angular/core';
import { VisitorProfileStore } from '../../shared/data-access/visitor-profile.store';
import { resolveWidgetText } from '../../../locales/widget-text';

export interface SkillNode {
  name: string;
  level: number; // 1–5
}

export interface SkillGroup {
  key: string;
  label: string;
  skills: SkillNode[];
}

@Component({
  selector: 'app-widget-skill-constellation',
  imports: [],
  templateUrl: './skill-constellation.component.html',
  styleUrl: './skill-constellation.component.scss',
})
export class SkillConstellationWidgetComponent {
  private readonly store = inject(VisitorProfileStore);

  private readonly profile = computed(() => ({
    role: this.store.role(),
    timeAvailable: this.store.timeAvailable(),
    communicationStyle: this.store.communicationStyle(),
  }));

  // ── Translated text ───────────────────────────────────────────────────────
  readonly eyebrow = computed(() =>
    resolveWidgetText('skill-constellation', 'eyebrow', this.profile()),
  );
  readonly headline = computed(() =>
    resolveWidgetText('skill-constellation', 'headline', this.profile()),
  );
  readonly body = computed(() => resolveWidgetText('skill-constellation', 'body', this.profile()));
  readonly upcomingLabel = computed(() =>
    resolveWidgetText('skill-constellation', 'upcoming-label', this.profile()),
  );

  // ── Dynamic prop — Claude toggles upcoming skills ─────────────────────────
  showUpcoming = input<string>('');
  readonly isUpcomingVisible = computed(() => this.showUpcoming() === 'true');

  readonly dotRange = [1, 2, 3, 4, 5] as const;

  readonly upcomingSkills: SkillNode[] = [
    { name: 'LangChain / LangGraph', level: 0 },
    { name: 'C1 English (in progress)', level: 0 },
    { name: 'React (exploration)', level: 0 },
  ];

  readonly groups = computed<SkillGroup[]>(() => {
    const p = this.profile();
    return [
      {
        key: 'frontend',
        label: resolveWidgetText('skill-constellation', 'group-frontend', p, 'Frontend'),
        skills: [
          { name: 'Angular', level: 5 },
          { name: 'TypeScript', level: 5 },
          { name: 'RxJS', level: 4 },
          { name: 'NgRx Signals', level: 4 },
          { name: 'SCSS / Design Tokens', level: 4 },
          { name: 'Angular SSR', level: 4 },
          { name: 'NX Monorepo', level: 3 },
          { name: 'Storybook', level: 3 },
        ],
      },
      {
        key: 'backend',
        label: resolveWidgetText('skill-constellation', 'group-backend', p, 'Backend'),
        skills: [
          { name: 'Node.js', level: 3 },
          { name: 'Express', level: 3 },
          { name: 'REST APIs', level: 4 },
          { name: 'Vercel Serverless', level: 3 },
          { name: 'SQL / PostgreSQL', level: 2 },
        ],
      },
      {
        key: 'ai',
        label: resolveWidgetText('skill-constellation', 'group-ai', p, 'AI & Agents'),
        skills: [
          { name: 'Anthropic Claude API', level: 4 },
          { name: 'Hashbrown (Generative UI)', level: 4 },
          { name: 'Prompt Engineering', level: 4 },
          { name: 'LLM Orchestration', level: 3 },
          { name: 'AI Workflow Integration', level: 3 },
        ],
      },
    ];
  });
}
