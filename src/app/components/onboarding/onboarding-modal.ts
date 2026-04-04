import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  isModalOpen,
  persona,
  experience,
  interestTags,
  voiceIdEnabled,
  setPersona,
  setExperience,
  toggleTag,
  toggleVoiceId,
  completeOnboarding,
  PersonaType,
  AVAILABLE_TAGS,
} from '../../signals/persona.signal';
import { GoldenButton } from '../ui/golden-button';

type Step = 'persona' | 'experience' | 'tags' | 'voice';

@Component({
  selector: 'app-onboarding-modal',
  imports: [CommonModule, FormsModule, GoldenButton],
  template: `
    @if (isModalOpen()) {
      <!-- Backdrop -->
      <div
        class="fixed inset-0 z-50 flex items-center justify-center p-4"
        style="background: rgba(0,0,0,0.92); backdrop-filter: blur(8px);"
      >
        <!-- Dragon watermark -->
        <div
          class="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5"
          aria-hidden="true"
        >
          <span class="text-[30vw] select-none">🐉</span>
        </div>

        <!-- Modal card -->
        <div
          class="relative w-full max-w-lg glass p-8 md:p-10"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <!-- Step indicator -->
          <div class="flex gap-2 mb-8">
            @for (s of steps; track s) {
              <div
                class="h-1 flex-1 rounded-full transition-all duration-300"
                [style.background]="currentStep() === s || stepIndex() > steps.indexOf(s) ? '#F5C400' : 'rgba(255,255,255,0.15)'"
              ></div>
            }
          </div>

          <!-- Step: Persona -->
          @if (currentStep() === 'persona') {
            <h2 id="modal-title" class="text-2xl font-bold mb-2 text-white">
              Before we begin, who are you?
            </h2>
            <p class="text-[#6B7280] mb-8 text-sm">
              The site will adapt to show what matters most to you.
            </p>
            <div class="flex flex-col gap-3">
              @for (option of personaOptions; track option.value) {
                <button
                  (click)="selectPersona(option.value)"
                  class="group flex items-center gap-4 p-4 rounded-xl border transition-all duration-200 cursor-pointer text-left"
                  [class.border-[#F5C400]]="persona() === option.value"
                  [class.glow-accent]="persona() === option.value"
                  [class.bg-[#F5C400]/8]="persona() === option.value"
                  [class.border-white/10]="persona() !== option.value"
                  [class.hover:border-white/30]="persona() !== option.value"
                >
                  <span class="text-2xl">{{ option.icon }}</span>
                  <div>
                    <p class="font-semibold text-white text-sm">{{ option.label }}</p>
                    <p class="text-[#6B7280] text-xs mt-0.5">{{ option.desc }}</p>
                  </div>
                </button>
              }
            </div>
            <div class="mt-8 flex justify-end">
              <app-golden-button (clicked)="nextStep()" [extraClass]="!persona() ? 'opacity-50 pointer-events-none' : ''">
                Continue →
              </app-golden-button>
            </div>
          }

          <!-- Step: Experience -->
          @if (currentStep() === 'experience') {
            <h2 id="modal-title" class="text-2xl font-bold mb-2 text-white">
              What's your experience level?
            </h2>
            <p class="text-[#6B7280] mb-8 text-sm">
              This helps calibrate technical depth.
            </p>
            <div class="space-y-6">
              <div class="flex justify-between text-xs text-[#6B7280] mb-2">
                <span>Just starting</span>
                <span>Industry veteran</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                [value]="experience()"
                (input)="onExperienceChange($event)"
                class="w-full h-2 rounded-full appearance-none cursor-pointer"
                style="accent-color: #F5C400; background: rgba(255,255,255,0.1);"
              />
              <p class="text-center text-[#F5C400] font-semibold">
                {{ experienceLabel() }}
              </p>
            </div>
            <div class="mt-8 flex justify-between">
              <button (click)="prevStep()" class="text-[#6B7280] text-sm hover:text-white transition-colors cursor-pointer">← Back</button>
              <app-golden-button (clicked)="nextStep()">Continue →</app-golden-button>
            </div>
          }

          <!-- Step: Tags -->
          @if (currentStep() === 'tags') {
            <h2 id="modal-title" class="text-2xl font-bold mb-2 text-white">
              What are you interested in?
            </h2>
            <p class="text-[#6B7280] mb-8 text-sm">
              Select all that apply — or skip.
            </p>
            <div class="flex flex-wrap gap-2">
              @for (tag of availableTags; track tag) {
                <button
                  (click)="toggleTag(tag)"
                  class="px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 cursor-pointer"
                  [class.border-[#F5C400]]="isTagSelected(tag)"
                  [class.text-[#F5C400]]="isTagSelected(tag)"
                  [class.bg-[#F5C400]/10]="isTagSelected(tag)"
                  [class.border-white/15]="!isTagSelected(tag)"
                  [class.text-[#6B7280]]="!isTagSelected(tag)"
                  [class.hover:border-white/30]="!isTagSelected(tag)"
                >
                  {{ tag }}
                </button>
              }
            </div>
            <div class="mt-8 flex justify-between">
              <button (click)="prevStep()" class="text-[#6B7280] text-sm hover:text-white transition-colors cursor-pointer">← Back</button>
              <app-golden-button (clicked)="nextStep()">Continue →</app-golden-button>
            </div>
          }

          <!-- Step: Voice -->
          @if (currentStep() === 'voice') {
            <h2 id="modal-title" class="text-2xl font-bold mb-2 text-white">
              Enable voice navigation?
            </h2>
            <p class="text-[#6B7280] mb-8 text-sm">
              Talk to the site — ask questions, switch views, explore projects.
            </p>
            <div
              class="flex items-center justify-between p-4 rounded-xl border border-white/10 cursor-pointer"
              (click)="toggleVoiceId()"
            >
              <div class="flex items-center gap-3">
                <div
                  class="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                  [class.bg-[#F5C400]]="voiceIdEnabled()"
                  [class.bg-white/10]="!voiceIdEnabled()"
                >
                  <span class="text-lg">🎙️</span>
                </div>
                <div>
                  <p class="font-medium text-white text-sm">Voice ID</p>
                  <p class="text-[#6B7280] text-xs">Microphone access required</p>
                </div>
              </div>
              <!-- Toggle -->
              <div
                class="w-12 h-6 rounded-full transition-all duration-300 relative"
                [class.bg-[#F5C400]]="voiceIdEnabled()"
                [class.bg-white/20]="!voiceIdEnabled()"
              >
                <div
                  class="absolute top-1 w-4 h-4 rounded-full bg-white transition-all duration-300"
                  [class.left-7]="voiceIdEnabled()"
                  [class.left-1]="!voiceIdEnabled()"
                ></div>
              </div>
            </div>
            <div class="mt-8 flex justify-between">
              <button (click)="prevStep()" class="text-[#6B7280] text-sm hover:text-white transition-colors cursor-pointer">← Back</button>
              <app-golden-button (clicked)="finish()">Enter the site →</app-golden-button>
            </div>
          }
        </div>
      </div>
    }
  `,
})
export class OnboardingModal {
  readonly isModalOpen = isModalOpen;
  readonly persona = persona;
  readonly experience = experience;
  readonly interestTags = interestTags;
  readonly voiceIdEnabled = voiceIdEnabled;
  readonly availableTags = AVAILABLE_TAGS;

  readonly steps: Step[] = ['persona', 'experience', 'tags', 'voice'];
  readonly currentStep = signal<Step>('persona');

  readonly stepIndex = computed(() => this.steps.indexOf(this.currentStep()));

  readonly personaOptions: { value: PersonaType; icon: string; label: string; desc: string }[] = [
    {
      value: 'recruiter',
      icon: '🔍',
      label: 'Recruiter',
      desc: "I'm evaluating Erik for a role or opportunity",
    },
    {
      value: 'client',
      icon: '💼',
      label: 'Potential Client',
      desc: "I'm considering hiring Erik for a project",
    },
    {
      value: 'peer',
      icon: '⚡',
      label: 'Tech Peer',
      desc: "I'm a developer curious about his work",
    },
  ];

  readonly experienceLabel = computed(() => {
    const v = this.experience();
    if (v < 20) return 'Just getting started';
    if (v < 40) return 'A few years in';
    if (v < 60) return 'Mid-level';
    if (v < 80) return 'Senior level';
    return 'Industry veteran';
  });

  selectPersona(p: PersonaType) {
    setPersona(p);
  }

  onExperienceChange(event: Event) {
    const target = event.target as HTMLInputElement;
    setExperience(Number(target.value));
  }

  isTagSelected(tag: string): boolean {
    return this.interestTags().includes(tag);
  }

  toggleTag(tag: string) {
    toggleTag(tag);
  }

  toggleVoiceId() {
    toggleVoiceId();
  }

  nextStep() {
    const idx = this.stepIndex();
    if (idx < this.steps.length - 1) {
      this.currentStep.set(this.steps[idx + 1]);
    }
  }

  prevStep() {
    const idx = this.stepIndex();
    if (idx > 0) {
      this.currentStep.set(this.steps[idx - 1]);
    }
  }

  finish() {
    completeOnboarding();
  }
}
