import { Component, computed, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionWrapper } from '../ui/section-wrapper';
import { PROJECTS, Project } from '../../lib/project-data';
import { persona } from '../../signals/persona.signal';

@Component({
  selector: 'app-project-bento-grid',
  imports: [CommonModule, SectionWrapper],
  template: `
    <app-section-wrapper>
      <div id="portfolio" class="max-w-5xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
          Selected <span class="text-[#F5C400]">Work</span>
        </h2>
        <p class="text-[#6B7280] mb-10 max-w-xl">
          {{ sectionSubtitle() }}
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
          @for (project of filteredProjects(); track project.id) {
            <div
              class="glass p-6 group hover:border-[#F5C400]/40 transition-all duration-300 cursor-pointer"
              [class.md:col-span-2]="$index === 0"
            >
              <!-- Category badge -->
              <div class="flex items-center justify-between mb-4">
                <span
                  class="px-2.5 py-1 rounded-full text-xs font-medium border border-[#F5C400]/30 text-[#F5C400]"
                >
                  {{ project.year }}
                </span>
                <span class="text-[#6B7280] text-xs">{{ project.category }}</span>
              </div>

              <!-- Title -->
              <h3 class="text-xl font-bold text-white mb-2 group-hover:text-[#F5C400] transition-colors duration-300">
                {{ project.title }}
              </h3>

              <!-- Description -->
              <p class="text-[#6B7280] text-sm leading-relaxed mb-4">
                {{ project.description }}
              </p>

              <!-- Highlights -->
              <ul class="space-y-1 mb-4">
                @for (h of project.highlights.slice(0, 3); track h) {
                  <li class="flex items-center gap-2 text-xs text-[#6B7280]">
                    <span class="text-[#F5C400]">→</span>
                    {{ h }}
                  </li>
                }
              </ul>

              <!-- Tags -->
              <div class="flex flex-wrap gap-1.5">
                @for (tag of project.tags; track tag) {
                  <span class="px-2 py-0.5 rounded-full text-xs border border-white/10 text-[#6B7280]">
                    {{ tag }}
                  </span>
                }
              </div>
            </div>
          }
        </div>
      </div>
    </app-section-wrapper>
  `,
})
export class BentoGrid {
  filter = input<'all' | 'ai' | 'ecommerce' | 'platform' | 'opensource'>('all');
  showAiInsights = input<boolean>(false);

  readonly persona = persona;

  readonly filteredProjects = computed((): Project[] => {
    const f = this.filter();
    if (f === 'all') return PROJECTS;
    return PROJECTS.filter((p) => p.category === f || p.tags.some((t) => t.toLowerCase().includes(f)));
  });

  sectionSubtitle(): string {
    const p = this.persona();
    if (p === 'recruiter') return 'A selection of projects demonstrating full-stack capability and delivery.';
    if (p === 'client') return 'Real problems, solved with custom software. Each project built from scratch.';
    if (p === 'peer') return 'Projects with interesting technical challenges. See the highlights.';
    return 'Custom-built software and websites — no templates, ever.';
  }
}
