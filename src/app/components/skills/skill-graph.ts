import { Component, input, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionWrapper } from '../ui/section-wrapper';
import { persona } from '../../signals/persona.signal';

interface SkillNode {
  id: string;
  label: string;
  category: 'frontend' | 'backend' | 'ai' | 'devops' | 'design';
  level: number; // 0-100
}

const SKILLS: SkillNode[] = [
  { id: 'angular', label: 'Angular', category: 'frontend', level: 95 },
  { id: 'typescript', label: 'TypeScript', category: 'frontend', level: 90 },
  { id: 'react', label: 'React', category: 'frontend', level: 70 },
  { id: 'tailwind', label: 'Tailwind CSS', category: 'frontend', level: 85 },
  { id: 'nodejs', label: 'Node.js', category: 'backend', level: 80 },
  { id: 'api-design', label: 'API Design', category: 'backend', level: 85 },
  { id: 'ecommerce', label: 'E-Commerce', category: 'backend', level: 75 },
  { id: 'postgresql', label: 'PostgreSQL', category: 'backend', level: 70 },
  { id: 'llm', label: 'LLM / AI', category: 'ai', level: 65 },
  { id: 'openapi', label: 'OpenAPI', category: 'ai', level: 80 },
  { id: 'vercel', label: 'Vercel', category: 'devops', level: 85 },
  { id: 'git', label: 'Git', category: 'devops', level: 90 },
  { id: 'figma', label: 'Figma', category: 'design', level: 70 },
  { id: 'branding', label: 'Branding', category: 'design', level: 75 },
];

@Component({
  selector: 'app-skill-graph',
  imports: [CommonModule, SectionWrapper],
  template: `
    <app-section-wrapper>
      <div class="max-w-5xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
          Tech <span class="text-[#F5C400]">Stack</span>
        </h2>
        <p class="text-[#6B7280] mb-10">{{ subtitle() }}</p>

        <!-- Category filters -->
        <div class="flex flex-wrap gap-2 mb-8">
          @for (cat of categories; track cat.id) {
            <button
              (click)="activeCategory.set(cat.id)"
              class="px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 cursor-pointer"
              [class.border-[#F5C400]]="activeCategory() === cat.id"
              [class.text-[#F5C400]]="activeCategory() === cat.id"
              [class.bg-[#F5C400]/10]="activeCategory() === cat.id"
              [class.border-white/15]="activeCategory() !== cat.id"
              [class.text-[#6B7280]]="activeCategory() !== cat.id"
            >
              {{ cat.label }}
            </button>
          }
        </div>

        <!-- Skills as pill cloud -->
        <div class="flex flex-wrap gap-3">
          @for (skill of visibleSkills(); track skill.id) {
            <div
              class="flex items-center gap-2 px-4 py-2 rounded-xl border transition-all duration-300"
              [class.border-[#F5C400]]="isHighlighted(skill)"
              [class.bg-[rgba(245,196,0,0.06)]]="isHighlighted(skill)"
              [class.border-white/10]="!isHighlighted(skill)"
            >
              <span class="text-white text-sm font-medium">{{ skill.label }}</span>
              <div class="w-12 h-1 rounded-full bg-white/10 overflow-hidden">
                <div
                  class="h-full rounded-full"
                  [style.width.%]="skill.level"
                  [style.background]="isHighlighted(skill) ? '#F5C400' : 'rgba(255,255,255,0.3)'"
                ></div>
              </div>
            </div>
          }
        </div>
      </div>
    </app-section-wrapper>
  `,
})
export class SkillGraph {
  highlightCategory = input<string>('all');
  mode = input<'2d' | '3d'>('2d');

  readonly activeCategory = signal('all');
  readonly persona = persona;

  readonly categories = [
    { id: 'all', label: 'All' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'ai', label: 'AI / API' },
    { id: 'devops', label: 'DevOps' },
    { id: 'design', label: 'Design' },
  ];

  visibleSkills(): SkillNode[] {
    const cat = this.activeCategory();
    if (cat === 'all') return SKILLS;
    return SKILLS.filter((s) => s.category === cat);
  }

  isHighlighted(skill: SkillNode): boolean {
    const cat = this.activeCategory();
    return cat === 'all' || skill.category === cat;
  }

  subtitle(): string {
    const p = this.persona();
    if (p === 'recruiter') return 'Primary technologies and proficiency levels across the stack.';
    if (p === 'client') return 'The tools I use to build your product — from UI to deployment.';
    if (p === 'peer') return 'My stack. Angular is home, but I go where the problem takes me.';
    return 'Technologies I use to build custom software.';
  }
}
