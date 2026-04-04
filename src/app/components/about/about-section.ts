import { Component, computed, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { persona, experience } from '../../signals/persona.signal';
import { SectionWrapper } from '../ui/section-wrapper';
import { GlassCard } from '../ui/glass-card';
import { SERVICES } from '../../lib/project-data';

@Component({
  selector: 'app-about-section',
  imports: [CommonModule, SectionWrapper, GlassCard],
  template: `
    <app-section-wrapper>
      <div class="max-w-5xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
          About <span class="text-[#F5C400]">Erikwski</span>
        </h2>
        <p class="text-[#6B7280] text-lg mb-12 max-w-2xl">
          {{ bio() }}
        </p>

        <!-- Services grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          @for (service of services; track service.id) {
            <app-glass-card extraClass="p-6 hover:border-[#F5C400]/30 transition-colors duration-300">
              <div class="flex items-start gap-4">
                <span class="text-2xl">{{ service.icon }}</span>
                <div>
                  <h3 class="font-semibold text-white mb-1">{{ service.title }}</h3>
                  <p class="text-[#6B7280] text-sm leading-relaxed">{{ service.description }}</p>
                </div>
              </div>
            </app-glass-card>
          }
        </div>

        <!-- Collaborators -->
        <div class="mt-12">
          <p class="text-[#6B7280] text-xs uppercase tracking-widest mb-4">Worked with</p>
          <div class="flex flex-wrap gap-3">
            @for (company of collaborators; track company) {
              <span class="px-3 py-1.5 rounded-full border border-white/10 text-[#6B7280] text-xs">
                {{ company }}
              </span>
            }
          </div>
        </div>
      </div>
    </app-section-wrapper>
  `,
})
export class AboutSection {
  focusPoints = input<string[]>(['services', 'approach']);
  tone = input<'professional' | 'technical' | 'friendly'>('friendly');

  readonly persona = persona;
  readonly experience = experience;
  readonly services = SERVICES;
  readonly collaborators = ['Smarthy SRL', 'AC Software', 'CulturaTela', 'Markeven SRL', 'Datacolor'];

  readonly bio = computed(() => {
    const p = this.persona();
    if (p === 'recruiter')
      return "I'm Erik Ferrari, a full-stack developer with 4 years of professional experience building custom software for freelancers and small businesses. I specialize in Angular, Node.js, and TypeScript — always template-free, always tailored.";
    if (p === 'client')
      return "I'm Erik, and I build software that fits your business like a glove. No templates, no one-size-fits-all. From branding to deployment, I handle the entire product — so you can focus on what you do best.";
    if (p === 'peer')
      return "I'm a full-stack developer obsessed with clean architecture and developer experience. My stack is Angular + Node.js + TypeScript, with a growing focus on generative UI and LLM integration. Open-source contributor (openapi-ts) and lifelong learner.";
    return "I'm Erik Ferrari (Erikwski) — a custom software developer from Italy. I design and build websites and software from scratch, no templates. 4 years in, 8 projects delivered, always learning.";
  });
}
