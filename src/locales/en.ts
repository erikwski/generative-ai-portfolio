import type { AppTranslation } from './types';

export const en: AppTranslation = {
  onboarding: {
    eyebrow: 'Before we start',
    title: 'Who are you?',
    role: {
      developer: 'Developer',
      recruiter: 'Recruiter',
      client: 'Client',
    },
    time: {
      label: 'How much time do you have for me today?',
      elevator: 'Elevator Pitch',
      'elevator.sub': '30s',
      coffee: 'Coffee Break',
      'coffee.sub': '5m',
      'deep-dive': 'Deep Dive',
      'deep-dive.sub': '15m+',
    },
    style: {
      label: 'How should we talk?',
      formal: 'Formal & Precise',
      creative: 'Creative & Experimental',
      technical: 'Fast & Technical',
    },
    submit: 'Enter →',
    note: 'This portfolio adapts to you. Your answers shape the interface — every component is generated live by AI based on who you are and your preferences.',
  },
  guard: {
    onboarded: {
      message: 'Complete your profile first so the AI knows how to talk to you.',
      action: 'Got it',
    },
  },
  canvas: {
    eyebrow: 'Aura: Portfolio AI',
    headline: 'Ask me anything about Erik.',
    subline: "I'll build the interface around your question.",
    reset: 'Reset',
    chip: {
      build: 'What can you build?',
      stack: 'Show me your stack',
      hire: 'Are you available for hire?',
    },
    placeholder: {
      empty: 'Ask something about Erik…',
      active: 'Type another question…',
    },
    send: {
      aria: 'Send',
    },
  },
};
