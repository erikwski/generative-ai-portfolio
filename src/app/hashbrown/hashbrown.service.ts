import { Injectable, signal } from '@angular/core';
import { buildSystemPrompt, PersonaContext } from '../lib/prompts';

export interface ComponentInstruction {
  component: string;
  params: Record<string, unknown>;
}

export type GenerativeLayoutState = 'idle' | 'loading' | 'ready' | 'error';

@Injectable({ providedIn: 'root' })
export class HashbrownService {
  readonly layout = signal<ComponentInstruction[]>([]);
  readonly state = signal<GenerativeLayoutState>('idle');
  readonly error = signal<string | null>(null);

  async generateLayout(ctx: PersonaContext): Promise<void> {
    this.state.set('loading');
    this.error.set(null);

    try {
      const systemPrompt = buildSystemPrompt(ctx);

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ systemPrompt }),
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data = (await response.json()) as { layout: ComponentInstruction[] };

      if (!Array.isArray(data.layout)) {
        throw new Error('Invalid layout response');
      }

      this.layout.set(data.layout);
      this.state.set('ready');
    } catch (err) {
      console.error('HashbrownService error:', err);
      this.error.set(err instanceof Error ? err.message : 'Unknown error');
      this.state.set('error');
      this.layout.set(this.defaultLayout(ctx));
    }
  }

  private defaultLayout(ctx: PersonaContext): ComponentInstruction[] {
    const base: ComponentInstruction[] = [
      {
        component: 'HeroSection',
        params: { tagline: 'Custom software. Zero templates.', ctaLabel: "Let's talk", showVoiceBar: false },
      },
      {
        component: 'AboutSection',
        params: { focusPoints: ['services', 'approach'], tone: 'friendly' },
      },
      {
        component: 'ProjectBentoGrid',
        params: { filter: 'all', showAiInsights: false },
      },
      {
        component: 'SkillGraph',
        params: { highlightCategory: 'all', mode: '2d' },
      },
      {
        component: 'StatsSection',
        params: { visibleStats: ['years', 'projects', 'courses', 'coffees'] },
      },
    ];

    if (ctx.persona === 'recruiter') {
      base.unshift({
        component: 'StatsSection',
        params: { visibleStats: ['years', 'projects', 'courses'] },
      });
    } else if (ctx.persona === 'peer') {
      const skillIdx = base.findIndex((c) => c.component === 'SkillGraph');
      if (skillIdx > 1) {
        const [skill] = base.splice(skillIdx, 1);
        base.splice(1, 0, skill);
      }
    }

    return base;
  }
}
