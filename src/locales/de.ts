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
  widgets: {
    'architects-identity': {
      developer: {
        technical: {
          elevator: {
            eyebrow:  'Full-Stack Engineer',
            headline: 'Ich baue Systeme, die denken.',
            tagline:  'Angular + KI, vom Spec bis zur Produktion.',
            body:     'Angular 21, Generative UI, Hashbrown, NgRx. Ich liefere Full-Stack-Anwendungen, bei denen die Oberfläche die KI-Ausgabe ist — kein festes Layout, Claude kompiliert Komponenten in Echtzeit.',
          },
          coffee: {
            eyebrow:  'Full-Stack Engineer / KI-Architekt',
            headline: 'Hi, ich bin Erik.',
            tagline:  'Ich entwerfe Angular-Apps, die von Claude angetrieben werden.',
            body:     'Fünf Jahre Aufbau von Angular-Anwendungen in Produktion. Die letzten zwei davon tief in Generative UI — Systemen, in denen Claude nicht nur Fragen beantwortet, sondern die Oberfläche selbst komponiert. Ich kombiniere NgRx Signal Store, Hashbrown und die Anthropic API, um adaptive, KI-native Frontends zu liefern.',
          },
          'deep-dive': {
            eyebrow:  'Full-Stack Engineer / KI-Architekt',
            headline: 'Hi, ich bin Erik Ferrari.',
            tagline:  'Ich entwerfe und entwickle Angular-Anwendungen, bei denen die KI der Architekt ist.',
            body:     'Ich bin Full-Stack-Engineer mit fünf Jahren Produktionserfahrung in Angular. In den letzten zwei Jahren habe ich mich auf Generative UI spezialisiert — ein Muster, bei dem das LLM das Frontend-Layout dynamisch orchestriert, anstatt statische Komponenten auszuliefern. Ich arbeite mit Angular 21 mit SSR, NgRx Signal Store, Hashbrown und der Anthropic Claude API. Ich kann Features vollständig von der Architektur bis zum Deployment auf Vercel verantworten.',
          },
        },
        creative: {
          elevator: {
            eyebrow:  'Architekt / Builder',
            headline: 'Ich baue Dinge, die denken.',
            tagline:  'Angular trifft generative KI — lebendige, adaptive Oberflächen.',
            body:     'Nicht nur KI in Apps integrieren. Die KI zur App machen — Layouts, Komponenten, Texte, alles von Claude in Echtzeit zusammengesetzt. Ich nenne es Generative UI.',
          },
          coffee: {
            eyebrow:  'Ingenieur / Creative Technologist',
            headline: 'Hi, ich bin Erik.',
            tagline:  'Ich baue Oberflächen, die sich selbst neu schreiben.',
            body:     'Ich entwickle seit fünf Jahren Angular-Apps, aber die letzten zwei waren anders — ich habe aufgehört, Layouts hart zu kodieren, und stattdessen Claude das Design übernehmen lassen. Jede Komponente, die du gerade liest, wurde spontan generiert. Ich nenne es Generative UI, und es ist das Aufregendste, was ich je gebaut habe.',
          },
          'deep-dive': {
            eyebrow:  'Ingenieur / Creative Technologist',
            headline: 'Hi, ich bin Erik Ferrari.',
            tagline:  'Generative UI Engineer. Ich baue Oberflächen, die für sich selbst denken.',
            body:     'Fünf Jahre Angular, zwei Jahre tief im Kaninchenbau der Generative UI — Systemen, bei denen die KI kein Feature ist, sondern der Renderer. Ich nutze Claude, Hashbrown und Angulars Signal-Architektur, um Frontends zu bauen, die sich für jeden Nutzer in Echtzeit anpassen. Keine zwei Besucher sehen dasselbe Layout. Mir liegt auch das Handwerk am Herzen: saubere Architektur, lesbarer Code und Dinge, die in der Produktion standhalten.',
          },
        },
        formal: {
          elevator: {
            eyebrow:  'Software-Ingenieur',
            headline: 'Erik Ferrari.',
            tagline:  'Angular-Spezialist. KI-Integrationsexperte.',
            body:     'Full-Stack-Ingenieur mit fünf Jahren Produktionserfahrung in Angular, jetzt spezialisiert auf Generative UI Systeme mit der Anthropic Claude API.',
          },
          coffee: {
            eyebrow:  'Software-Ingenieur',
            headline: 'Hi, ich bin Erik Ferrari.',
            tagline:  'Full-Stack Angular Engineer, spezialisiert auf KI-native Anwendungen.',
            body:     'Ich verfüge über fünf Jahre Berufserfahrung in der Entwicklung von Angular-Anwendungen, mit einer wachsenden Spezialisierung auf KI-Integration und Generative UI. Ich arbeite mit Angular 21, NgRx Signal Store und der Anthropic API, um adaptive Frontends zu bauen, bei denen die Oberfläche von Claude zur Laufzeit zusammengesetzt wird.',
          },
          'deep-dive': {
            eyebrow:  'Software-Ingenieur',
            headline: 'Erik Ferrari — Full-Stack Engineer.',
            tagline:  'Angular · KI-Integration · Generative UI',
            body:     'Ich bin Full-Stack-Software-Ingenieur mit fünf Jahren Berufserfahrung, hauptsächlich in Angular. Mein aktueller Fokus liegt auf Generative UI — einem Muster, bei dem ein LLM das Frontend-Layout dynamisch orchestriert. Ich setze dies mit Angular 21 mit SSR, NgRx Signal Store, Hashbrown und der Anthropic Claude API um. Ich bin in der Lage, komplette Features end to end zu verantworten, von der Architektur und dem API-Design bis zum Deployment auf Vercel.',
          },
        },
      },
      recruiter: {
        formal: {
          elevator: {
            eyebrow:  'Kandidatenprofil',
            headline: 'Erik Ferrari',
            tagline:  'Software Engineer · Angular · KI-Integration',
            body:     '5+ Jahre · Full-Stack Angular-Entwickler, spezialisiert auf Generative UI und KI-Anwendungen. Offen für Senior- und Lead-Rollen.',
          },
          coffee: {
            eyebrow:  'Kandidatenprofil',
            headline: 'Erik Ferrari — Software Engineer',
            tagline:  'Angular · Generative UI · Anthropic API · 5+ Jahre',
            body:     'Erik ist ein Full-Stack-Ingenieur mit fünf Jahren Erfahrung in der Entwicklung von Angular-Anwendungen. In den letzten zwei Jahren hat er sich auf KI-Integration und Generative UI konzentriert und Produktionssysteme geliefert, in denen Claude Oberflächen dynamisch komponiert. Er arbeitet über den gesamten Stack — Angular 21 mit SSR, NgRx, Express, Vercel — und ist offen für Senior- oder Lead-Rollen bei Produktunternehmen, die KI-native Produkte entwickeln.',
          },
          'deep-dive': {
            eyebrow:  'Kandidatenprofil',
            headline: 'Erik Ferrari — Full-Stack Engineer',
            tagline:  'Angular · Generative UI · KI-native Anwendungen · 5+ Jahre',
            body:     'Erik Ferrari ist Full-Stack-Software-Ingenieur mit fünf Jahren Berufserfahrung und einer tiefen Spezialisierung auf Angular und KI-gesteuerte Frontend-Systeme. Er ist der Autor dieses Portfolios — eine Generative UI Anwendung, bei der Claude jede Komponente zur Laufzeit basierend auf dem Besucherkontext zusammensetzt. Technisch abdeckt er Angular 21, NgRx Signal Store, die Anthropic Claude API, das Hashbrown Framework, TypeScript, Express und Vercel. Aktuell sucht er Senior-Engineering- und Tech-Lead-Möglichkeiten, bei denen KI eine Kernkompetenz ist.',
          },
        },
        creative: {
          elevator: {
            eyebrow:  'Lerne Erik kennen',
            headline: 'Erik Ferrari',
            tagline:  'Der Ingenieur, der die KI die Oberfläche entwerfen lässt.',
            body:     'Fünf Jahre Angular. Zwei Jahre mit Claude als Architekt. Er liefert Generative UI in Produktion — einschließlich dieses Portfolios, das du gerade erkundest.',
          },
          coffee: {
            eyebrow:  'Lerne Erik kennen',
            headline: 'Erik Ferrari — Engineer & KI-Builder',
            tagline:  'Er hat aufgehört, Layouts hart zu kodieren. Das macht jetzt Claude.',
            body:     'Erik hat fünf Jahre lang Angular-Anwendungen entwickelt und die letzten zwei damit verbracht, Generative UI zu pioneeren — Frontends, bei denen die KI nicht nur antwortet, sondern rendert. Er hat dieses Portfolio als Live-Demo des Konzepts entwickelt. Angular 21, Hashbrown, NgRx, Claude API. Wenn du für ein Team einstellst, das bei KI-nativen Produkten vorne dabei sein will, ist Erik ein Gespräch wert.',
          },
        },
        technical: {
          elevator: {
            eyebrow:  'Kandidat',
            headline: 'Erik Ferrari',
            tagline:  'Angular 21 · Generative UI · Claude API · 5 J.',
            body:     'Liefert KI-native Angular-Apps in Produktion. Generative UI Spezialist. Hashbrown + Claude im Einsatz. NgRx Signals, SSR, Vercel. Verfügbar für Senior / Lead.',
          },
        },
      },
      client: {
        formal: {
          elevator: {
            eyebrow:  'Freiberuflicher Ingenieur',
            headline: 'Ich entwickle Web-Anwendungen.',
            tagline:  'Angular-Frontends mit KI-Funktionen, pünktlich geliefert.',
            body:     'Fünf Jahre Entwicklung von Angular-Anwendungen für Startups und Scale-ups. Jetzt biete ich Full-Stack-Entwicklung mit integrierten KI-Funktionen an — von generativen Oberflächen bis zu LLM-gestützten Workflows.',
          },
          coffee: {
            eyebrow:  'Freiberuflicher Ingenieur',
            headline: 'Hi, ich bin Erik Ferrari.',
            tagline:  'Ich entwickle Angular-Anwendungen mit von Grund auf integrierter KI.',
            body:     'Ich habe fünf Jahre lang Produktions-Web-Anwendungen in Angular für Startups und wachsende Unternehmen entwickelt. Mein aktueller Fokus liegt darauf, Unternehmen zu helfen, KI richtig in ihre Produkte zu integrieren — nicht als Chatbot-Widget, sondern als zentralen Teil der Oberfläche und Logik. Ich decke den gesamten Stack ab: Angular-Frontend, API-Schicht und Deployment.',
          },
        },
        creative: {
          elevator: {
            eyebrow:  'Digitaler Architekt',
            headline: 'Ich verwandle Ideen in intelligente Oberflächen.',
            tagline:  'Dein Produkt. Mit KI. Richtig gemacht.',
            body:     'Ich entwerfe und entwickle Angular-Anwendungen, bei denen KI ein erstklassiges Element ist — kein am Ende angehängter Chatbot, sondern eine Engine, die das Erlebnis selbst gestaltet.',
          },
          coffee: {
            eyebrow:  'Digitaler Architekt',
            headline: 'Hi, ich bin Erik.',
            tagline:  'Ich baue Produkte, bei denen die Oberfläche mit dem Nutzer mitdenkt.',
            body:     'Ich entwickle seit fünf Jahren Web-Produkte, und in den letzten zwei bin ich von einer Frage besessen: Was passiert, wenn die KI nicht nur die Logik antreibt, sondern die Oberfläche selbst zusammensetzt? Die Antwort ist das, was du gerade siehst. Wenn du eine Produktidee hast, die diese Art von Denken braucht, lass uns reden.',
          },
        },
        technical: {
          elevator: {
            eyebrow:  'Full-Stack Contractor',
            headline: 'Angular + KI, von A bis Z.',
            tagline:  'Von der Architektur bis zum Deployment.',
            body:     'TypeScript, Angular 21, NgRx, Vercel. Claude API Integration, Generative UI, SSR. Ich spezifiziere, entwerfe und liefere.',
          },
        },
      },
      default: {
        eyebrow:  'Erik Ferrari',
        headline: 'Hi, ich bin Erik.',
        tagline:  'Ich entwickle Angular-Apps, die von KI angetrieben werden.',
        body:     'Full-Stack-Entwickler, spezialisiert auf Generative UI und KI-native Web-Anwendungen.',
      },
    },
  },
};
