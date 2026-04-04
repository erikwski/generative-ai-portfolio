import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { hasOnboarded, persona, openModal } from '../../signals/persona.signal';

@Component({
  selector: 'app-floating-persona-pill',
  imports: [CommonModule],
  template: `
    @if (hasOnboarded()) {
      <button
        (click)="open()"
        class="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-4 py-2 rounded-full
               border border-[#F5C400]/30 bg-[#0A0A0A]/80 backdrop-blur-md
               text-[#F5C400] text-xs font-medium
               hover:border-[#F5C400] hover:bg-[#F5C400]/10 hover:shadow-[0_0_16px_rgba(245,196,0,0.3)]
               transition-all duration-300 cursor-pointer"
        aria-label="Switch persona"
      >
        <span>{{ personaIcon() }}</span>
        <span>{{ personaLabel() }}</span>
        <span class="opacity-50">✦</span>
      </button>
    }
  `,
})
export class FloatingPersonaPill {
  readonly hasOnboarded = hasOnboarded;
  readonly persona = persona;

  open() {
    openModal();
  }

  personaLabel(): string {
    const p = this.persona();
    if (p === 'recruiter') return 'Recruiter view';
    if (p === 'client') return 'Client view';
    if (p === 'peer') return 'Peer view';
    return 'Switch view';
  }

  personaIcon(): string {
    const p = this.persona();
    if (p === 'recruiter') return '🔍';
    if (p === 'client') return '💼';
    if (p === 'peer') return '⚡';
    return '🐉';
  }
}
