import { computed, signal } from '@angular/core';

export type PersonaType = 'recruiter' | 'client' | 'peer' | null;

export interface PersonaState {
  persona: PersonaType;
  experience: number; // 0-100
  interestTags: string[];
  voiceIdEnabled: boolean;
  hasOnboarded: boolean;
  isModalOpen: boolean;
}

const STORAGE_KEY = 'erikwski_persona';

function loadFromStorage(): Partial<PersonaState> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

const saved = loadFromStorage();

// Core signals
export const persona = signal<PersonaType>(saved.persona ?? null);
export const experience = signal<number>(saved.experience ?? 50);
export const interestTags = signal<string[]>(saved.interestTags ?? []);
export const voiceIdEnabled = signal<boolean>(saved.voiceIdEnabled ?? false);
export const hasOnboarded = signal<boolean>(saved.hasOnboarded ?? false);
export const isModalOpen = signal<boolean>(!saved.hasOnboarded);
// True only after the user submits a command from the Aura page
export const hasGeneratedLayout = signal<boolean>(false);

// Computed snapshot for API calls
export const personaSnapshot = computed(() => ({
  persona: persona(),
  experience: experience(),
  interestTags: interestTags(),
  voiceIdEnabled: voiceIdEnabled(),
}));

// Actions
export function setPersona(p: PersonaType) {
  persona.set(p);
  persistState();
}

export function setExperience(v: number) {
  experience.set(v);
  persistState();
}

export function toggleTag(tag: string) {
  const current = interestTags();
  interestTags.set(
    current.includes(tag) ? current.filter((t) => t !== tag) : [...current, tag]
  );
  persistState();
}

export function toggleVoiceId() {
  voiceIdEnabled.set(!voiceIdEnabled());
  persistState();
}

export function openModal() {
  isModalOpen.set(true);
  // Going back to onboarding resets the generated layout
  hasGeneratedLayout.set(false);
}

export function closeModal() {
  isModalOpen.set(false);
}

export function setHasGeneratedLayout(v: boolean) {
  hasGeneratedLayout.set(v);
}

export function completeOnboarding() {
  hasOnboarded.set(true);
  isModalOpen.set(false);
  persistState();
}

function persistState() {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        persona: persona(),
        experience: experience(),
        interestTags: interestTags(),
        voiceIdEnabled: voiceIdEnabled(),
        hasOnboarded: hasOnboarded(),
      })
    );
  } catch {
    // ignore storage errors
  }
}

// Available interest tags
export const AVAILABLE_TAGS = [
  'AI / LLM',
  'E-Commerce',
  'SaaS',
  'Web Performance',
  'Open Source',
  'Mobile',
  'API Design',
  'Branding',
  'IoT',
  'Angular',
];
