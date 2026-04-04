import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HashbrownService, ComponentInstruction } from './hashbrown.service';
import { HeroSection } from '../components/hero/hero-section';
import { AboutSection } from '../components/about/about-section';
import { BentoGrid } from '../components/portfolio/bento-grid';
import { SkillGraph } from '../components/skills/skill-graph';
import { StatsSection } from '../components/stats/stats-section';

@Component({
  selector: 'app-generative-view',
  imports: [
    CommonModule,
    HeroSection,
    AboutSection,
    BentoGrid,
    SkillGraph,
    StatsSection,
  ],
  template: `
    <!-- Loading -->
    @if (hashbrown.state() === 'loading') {
      <div class="flex flex-col items-center justify-center min-h-screen gap-4">
        <div class="w-8 h-8 rounded-full border-2 border-[#F5C400] border-t-transparent animate-spin"></div>
        <p class="text-[#6B7280] text-sm">Generating your view...</p>
      </div>
    }

    <!-- Rendered layout -->
    @if (hashbrown.state() === 'ready' || hashbrown.state() === 'error') {
      @for (item of hashbrown.layout(); track $index) {
        @switch (item.component) {
          @case ('HeroSection') {
            <app-hero-section
              [tagline]="str(item, 'tagline', 'Custom software. Zero templates.')"
              [ctaLabel]="str(item, 'ctaLabel', 'See my work')"
              [showVoiceBar]="bool(item, 'showVoiceBar', false)"
            />
          }
          @case ('AboutSection') {
            <app-about-section
              [focusPoints]="strArr(item, 'focusPoints', [])"
              [tone]="toneVal(item)"
            />
          }
          @case ('ProjectBentoGrid') {
            <app-project-bento-grid
              [filter]="filterVal(item)"
              [showAiInsights]="bool(item, 'showAiInsights', false)"
            />
          }
          @case ('SkillGraph') {
            <app-skill-graph
              [highlightCategory]="str(item, 'highlightCategory', 'all')"
              [mode]="modeVal(item)"
            />
          }
          @case ('StatsSection') {
            <app-stats-section
              [visibleStats]="strArr(item, 'visibleStats', ['years','projects','courses','coffees'])"
            />
          }
        }
      }
    }
  `,
})
export class GenerativeView {
  readonly hashbrown: HashbrownService;

  constructor(hashbrown: HashbrownService) {
    this.hashbrown = hashbrown;
  }

  str(item: ComponentInstruction, key: string, fallback: string): string {
    const v = item.params[key];
    return typeof v === 'string' ? v : fallback;
  }

  bool(item: ComponentInstruction, key: string, fallback: boolean): boolean {
    const v = item.params[key];
    return typeof v === 'boolean' ? v : fallback;
  }

  strArr(item: ComponentInstruction, key: string, fallback: string[]): string[] {
    const v = item.params[key];
    return Array.isArray(v) ? (v as string[]) : fallback;
  }

  toneVal(item: ComponentInstruction): 'professional' | 'technical' | 'friendly' {
    const v = item.params['tone'];
    if (v === 'professional' || v === 'technical' || v === 'friendly') return v;
    return 'friendly';
  }

  filterVal(item: ComponentInstruction): 'all' | 'ai' | 'ecommerce' | 'platform' | 'opensource' {
    const v = item.params['filter'];
    if (v === 'all' || v === 'ai' || v === 'ecommerce' || v === 'platform' || v === 'opensource') return v;
    return 'all';
  }

  modeVal(item: ComponentInstruction): '2d' | '3d' {
    return item.params['mode'] === '3d' ? '3d' : '2d';
  }
}
