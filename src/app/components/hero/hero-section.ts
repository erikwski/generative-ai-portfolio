import { Component, input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { persona } from '../../signals/persona.signal';
import { GoldenButton } from '../ui/golden-button';

@Component({
  selector: 'app-hero-section',
  imports: [CommonModule, GoldenButton],
  template: `
    <section
      class="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
    >
      <!-- Background particle field (subtle) -->
      <div class="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          class="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl"
          style="background: radial-gradient(circle, #F5C400, transparent)"
        ></div>
        <div
          class="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full opacity-5 blur-3xl"
          style="background: radial-gradient(circle, #4FC3F7, transparent)"
        ></div>
      </div>

      <!-- Content -->
      <div class="relative z-10 text-center max-w-3xl mx-auto">
        <!-- Logo -->
        <div class="mb-8 flex items-center justify-center gap-3">
          <div class="flex items-center gap-1 text-[#F5C400]">
            <span class="text-2xl font-bold">&lt;</span>
            <span class="text-2xl font-bold">&gt;</span>
          </div>
          <span class="text-white font-bold text-lg tracking-wider">erikwski</span>
        </div>

        <!-- Tagline -->
        <h1 class="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
          {{ tagline() }}
        </h1>

        <!-- Sub-tagline -->
        <p class="text-[#6B7280] text-lg md:text-xl mb-12 max-w-xl mx-auto leading-relaxed">
          {{ subTagline() }}
        </p>

        <!-- CTA -->
        <div class="flex items-center justify-center gap-4">
          <app-golden-button (clicked)="scrollToProjects()">
            {{ ctaLabel() }}
          </app-golden-button>
          <a
            href="mailto:ferrarierik.work@gmail.com"
            class="text-[#6B7280] text-sm hover:text-[#F5C400] transition-colors underline underline-offset-4"
          >
            Get in touch
          </a>
        </div>
      </div>

      <!-- Scroll cue -->
      <div
        class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#6B7280] text-xs"
      >
        <span>scroll</span>
        <div class="w-px h-8 bg-[#F5C400] opacity-40 animate-pulse"></div>
      </div>
    </section>
  `,
})
export class HeroSection implements OnInit {
  tagline = input<string>('Custom software.\nZero templates.');
  ctaLabel = input<string>("See my work");
  showVoiceBar = input<boolean>(true);

  readonly persona = persona;

  ngOnInit() {}

  subTagline(): string {
    const p = this.persona();
    if (p === 'recruiter')
      return '4 years building custom software for businesses. Angular, Node.js, and everything in between.';
    if (p === 'client')
      return "I build the exact software your business needs — from branding to deployment, no templates, no shortcuts.";
    if (p === 'peer')
      return 'Full-stack developer obsessed with clean architecture, developer experience, and generative UI.';
    return "I'm Erik. I build custom software and websites — from concept to code.";
  }

  scrollToProjects() {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  }
}
