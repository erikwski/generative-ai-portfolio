import type { AppTranslation } from './types';

export const de: AppTranslation = {
  onboarding: {
    eyebrow: 'Bevor wir beginnen',
    title: 'Wer bist du?',
    role: {
      developer: 'Entwickler',
      recruiter: 'Recruiter',
      client: 'Kunde',
    },
    time: {
      label: 'Wie viel Zeit hast du heute für mich?',
      elevator: 'Elevator Pitch',
      'elevator.sub': '30s',
      coffee: 'Kaffeepause',
      'coffee.sub': '5m',
      'deep-dive': 'Tiefgang',
      'deep-dive.sub': '15m+',
    },
    style: {
      label: 'Wie sollen wir sprechen?',
      formal: 'Formal & Präzise',
      creative: 'Kreativ & Experimentell',
      technical: 'Schnell & Technisch',
    },
    submit: 'Eintreten →',
    note: 'Dieses Portfolio passt sich dir an. Deine Antworten formen die Oberfläche — jede Komponente wird live von der KI generiert, basierend auf wer du bist und deinen Präferenzen.',
  },
  guard: {
    onboarded: {
      message: 'Vervollständige zuerst dein Profil, damit die KI weiß, wie sie mit dir sprechen soll.',
      action: 'Verstanden',
    },
  },
  canvas: {
    eyebrow: 'Aura: Portfolio KI',
    headline: 'Frag mich alles über Erik.',
    subline: 'Ich baue die Oberfläche rund um deine Frage.',
    reset: 'Zurücksetzen',
    chip: {
      build: 'Was kannst du bauen?',
      stack: 'Zeig mir deinen Stack',
      hire: 'Bist du verfügbar?',
    },
    placeholder: {
      empty: 'Frag etwas über Erik…',
      active: 'Schreib eine weitere Frage…',
    },
    send: {
      aria: 'Senden',
    },
  },
};
