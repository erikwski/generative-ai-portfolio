import { Component, computed, signal, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  persona,
  interestTags,
  setHasGeneratedLayout,
} from '../../signals/persona.signal';
import { HashbrownService } from '../../hashbrown/hashbrown.service';
import { experience } from '../../signals/persona.signal';

interface Suggestion {
  label: string;
  prompt: string;
}

@Component({
  selector: 'app-aura-page',
  imports: [CommonModule, FormsModule],
  template: `
    <div class="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">

      <!-- Background glow -->
      <div class="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.06] blur-3xl"
          style="background: radial-gradient(circle, #F5C400, transparent 70%);"
        ></div>
      </div>

      <!-- Dragon watermark -->
      <div
        class="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        aria-hidden="true"
      >
        <span class="text-[28vw] opacity-[0.025]">🐉</span>
      </div>

      <div class="relative z-10 w-full max-w-2xl mx-auto flex flex-col items-center">

        <!-- Logo -->
        <div class="flex items-center gap-2 mb-16">
          <span class="text-[#F5C400] font-bold text-xl">&lt;</span>
          <span class="text-[#F5C400] font-bold text-xl">&gt;</span>
          <span class="text-white font-bold text-base tracking-widest ml-1">erikwski</span>
        </div>

        <!-- Greeting -->
        <p class="text-[#6B7280] text-sm uppercase tracking-widest mb-4">
          {{ greeting() }}
        </p>

        <!-- Main prompt -->
        <h1 class="text-3xl md:text-4xl font-bold text-white text-center mb-10 leading-tight">
          What would you like to<br>
          <span class="text-[#F5C400]">explore?</span>
        </h1>

        <!-- Input bar -->
        <div
          class="w-full relative group"
          [class.ring-2]="isFocused()"
          [class.ring-[#F5C400]/50]="isFocused()"
          style="border-radius: 1rem;"
        >
          <div
            class="flex items-center gap-3 glass px-5 py-4 transition-all duration-300"
            [class.border-[#F5C400]/40]="isFocused()"
          >
            <!-- Waveform / mic icon area -->
            <div class="flex-shrink-0">
              @if (isListening()) {
                <div class="flex items-end gap-0.5 h-5">
                  @for (bar of waveBars; track $index) {
                    <div
                      class="w-0.5 rounded-full bg-[#F5C400] animate-pulse"
                      [style.height.px]="bar"
                      [style.animation-delay]="$index * 80 + 'ms'"
                    ></div>
                  }
                </div>
              } @else {
                <span class="text-[#6B7280] text-lg">✦</span>
              }
            </div>

            <!-- Text input -->
            <input
              #inputRef
              type="text"
              [(ngModel)]="inputValue"
              (keydown.enter)="submit()"
              (focus)="isFocused.set(true)"
              (blur)="isFocused.set(false)"
              [placeholder]="placeholder()"
              class="flex-1 bg-transparent text-white placeholder-[#6B7280] text-sm outline-none"
              aria-label="Ask Erikwski anything"
            />

            <!-- Submit or mic -->
            <div class="flex items-center gap-2 flex-shrink-0">
              @if (inputValue.trim()) {
                <button
                  (click)="submit()"
                  class="w-8 h-8 rounded-full bg-[#F5C400] flex items-center justify-center
                         hover:bg-[#FFD700] transition-all duration-200 cursor-pointer"
                  aria-label="Submit"
                >
                  <span class="text-[#0A0A0A] text-sm font-bold">→</span>
                </button>
              } @else {
                <button
                  (click)="toggleMic()"
                  class="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer"
                  [class.bg-[#F5C400]]="isListening()"
                  [class.bg-white/10]="!isListening()"
                  [class.hover:bg-white/20]="!isListening()"
                  aria-label="Voice input"
                >
                  <span class="text-sm">🎙️</span>
                </button>
              }
            </div>
          </div>
        </div>

        <!-- Suggestions -->
        <div class="flex flex-wrap justify-center gap-2 mt-6">
          @for (s of suggestions(); track s.label) {
            <button
              (click)="selectSuggestion(s)"
              class="px-4 py-2 rounded-full text-xs border border-white/10 text-[#6B7280]
                     hover:border-[#F5C400]/40 hover:text-[#F5C400] hover:bg-[#F5C400]/5
                     transition-all duration-200 cursor-pointer"
            >
              {{ s.label }}
            </button>
          }
        </div>

      </div>
    </div>
  `,
})
export class AuraPage implements AfterViewInit {
  @ViewChild('inputRef') inputRef!: ElementRef<HTMLInputElement>;

  inputValue = '';
  readonly isFocused = signal(false);
  readonly isListening = signal(false);

  // Simple static wave bars for visual effect
  readonly waveBars = [6, 10, 14, 8, 12, 6, 10, 14, 8];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private recognition: any = null;
  private readonly hashbrown: HashbrownService;

  constructor(hashbrown: HashbrownService) {
    this.hashbrown = hashbrown;
  }

  ngAfterViewInit() {
    // Auto-focus on load
    setTimeout(() => this.inputRef?.nativeElement.focus(), 100);
  }

  readonly greeting = computed(() => {
    const p = persona();
    if (p === 'recruiter') return 'Welcome, Recruiter';
    if (p === 'client') return "Let's build something";
    if (p === 'peer') return 'Hey, fellow dev';
    return 'Welcome';
  });

  readonly placeholder = computed(() => {
    const p = persona();
    if (p === 'recruiter') return "e.g. \"Show me your experience\" or \"What's your tech stack?\"";
    if (p === 'client') return "e.g. \"What can you build for me?\" or \"Show your portfolio\"";
    if (p === 'peer') return "e.g. \"What are you working on?\" or \"Show me your stack\"";
    return 'Ask anything about Erik, his work, or his skills...';
  });

  readonly suggestions = computed((): Suggestion[] => {
    const p = persona();
    const tags = interestTags();

    if (p === 'recruiter') {
      return [
        { label: "What's your experience?", prompt: "Tell me about your professional experience and background" },
        { label: 'Show me your projects', prompt: 'Show all your projects and what you built' },
        { label: 'Tech stack overview', prompt: 'What technologies do you work with?' },
        { label: 'Who have you worked with?', prompt: 'Show collaborations and companies' },
      ];
    }

    if (p === 'client') {
      return [
        { label: 'What can you build?', prompt: 'What kind of software and websites do you build?' },
        { label: 'Show your portfolio', prompt: 'Show me your best projects and client work' },
        { label: 'E-commerce solutions', prompt: 'Tell me about your e-commerce projects' },
        { label: 'How do you work?', prompt: 'Explain your process from idea to launch' },
      ];
    }

    if (p === 'peer') {
      const aiSuggestion = tags.includes('AI / LLM')
        ? { label: 'AI + LLM work', prompt: 'Show me your AI and LLM related work' }
        : { label: 'Open source', prompt: 'Tell me about your open source contributions' };
      return [
        { label: 'Full stack overview', prompt: 'Show me your full technical stack in depth' },
        { label: 'Interesting projects', prompt: 'Show projects with interesting technical challenges' },
        aiSuggestion,
        { label: 'Architecture decisions', prompt: 'What are some architecture decisions you are proud of?' },
      ];
    }

    // No persona
    return [
      { label: 'Show everything', prompt: 'Give me a full overview of Erik and his work' },
      { label: 'See projects', prompt: 'Show all projects' },
      { label: 'Tech skills', prompt: "What's your tech stack?" },
      { label: 'About Erik', prompt: 'Tell me about Erik Ferrari' },
    ];
  });

  selectSuggestion(s: Suggestion) {
    this.inputValue = s.prompt;
    this.submit();
  }

  async submit() {
    const msg = this.inputValue.trim();
    if (!msg && !this.inputValue) return;

    setHasGeneratedLayout(true);

    await this.hashbrown.generateLayout({
      persona: persona(),
      experience: experience(),
      interestTags: interestTags(),
      userMessage: msg || undefined,
    });
  }

  toggleMic() {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      return;
    }

    if (this.isListening()) {
      this.recognition?.stop();
      this.isListening.set(false);
      return;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const SR = (window as any).SpeechRecognition ?? (window as any).webkitSpeechRecognition;

    if (!SR) return;

    this.recognition = new SR();
    this.recognition.lang = 'en-US';
    this.recognition.interimResults = false;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.recognition.onresult = (event: any) => {
      this.inputValue = event.results[0][0].transcript;
      this.isListening.set(false);
      this.submit();
    };

    this.recognition.onerror = () => this.isListening.set(false);
    this.recognition.onend = () => this.isListening.set(false);

    this.recognition.start();
    this.isListening.set(true);
  }
}
