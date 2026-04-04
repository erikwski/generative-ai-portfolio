import type { AppTranslation } from './types';

export const it: AppTranslation = {
  onboarding: {
    eyebrow: 'Prima di iniziare',
    title: 'Chi sei?',
    role: {
      developer: 'Sviluppatore',
      recruiter: 'Recruiter',
      client: 'Cliente',
    },
    time: {
      label: 'Quanto tempo hai per me oggi?',
      elevator: 'Elevator Pitch',
      'elevator.sub': '30s',
      coffee: 'Pausa Caffè',
      'coffee.sub': '5m',
      'deep-dive': 'Approfondimento',
      'deep-dive.sub': '15m+',
    },
    style: {
      label: 'Come vuoi che parliamo?',
      formal: 'Formale e Preciso',
      creative: 'Creativo e Sperimentale',
      technical: 'Veloce e Tecnico',
    },
    submit: 'Entra →',
    note: 'Questo portfolio si adatta a te. Le tue risposte modellano l\'interfaccia — ogni componente è generato in tempo reale dall\'AI in base a chi sei e alle tue preferenze.',
  },
};
