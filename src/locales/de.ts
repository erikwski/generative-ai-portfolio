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
    'evolution-timeline': {
      developer: {
        technical: {
          elevator: {
            headline:        'Career Stack',
            'datacolor-desc': 'UI-Library-Owner · Micro-Frontends · KI-Workflow-Integration · Angular 21.',
            'acsoftware-desc': 'Enterprise Angular · NX-Monorepo · NGRX-State.',
            'smarthy-desc':  'Erste Prod-Rolle · Node.js + Angular · Full-Stack.',
          },
          coffee: {
            headline:        'Technische Laufbahn',
            'datacolor-desc': 'Aktuell verantwortlich für Datacolors Angular UI-Library — Design Tokens, gemeinsame Komponenten, Micro-Frontend-Architektur. Jetzt leite ich die KI-Workflow-Integration mit Angular 21 und der Anthropic Claude API.',
            'acsoftware-desc': 'Enterprise-Consulting bei ACSoftware. Große Angular-Apps mit NX-Monorepos und NGRX für reaktives State-Management. Fokus auf langfristige Wartbarkeit und teamübergreifende Wiederverwendung.',
            'smarthy-desc':  'Erste Ingenieurstelle. Full-Stack-Features mit Angular und Node.js in einem Startup-Umfeld. Produktionscode geliefert und ein Gespür für saubere Architektur entwickelt.',
          },
          'deep-dive': {
            headline:        'Laufbahn im Detail',
            'datacolor-desc': 'Angular Frontend Developer & UI Library Owner bei Datacolor Industrial (3+ Jahre). Vollständige Ownership der gemeinsamen Komponentenbibliothek aller Produktteams. Micro-Frontend-Integration eingeführt, TypeScript-Standards gesetzt und aktuell die KI-Workflow-Einführung mit Angular 21 und der Anthropic Claude API via Hashbrown geleitet.',
            'acsoftware-desc': 'Angular Developer bei ACSoftware (1 Jahr). Enterprise-Consulting — wartbare, große Anwendungen mit NX für Monorepo-Management und NGRX für reaktives State-Management. Starker Fokus auf Architekturqualität und teamübergreifende Komponentenwiederverwendung.',
            'smarthy-desc':  'Full-Stack Developer bei Smarthy Srl (2 Jahre). Erste Produktionsstelle. End-to-End-Ownership von Features in Angular und Node.js. Produktionsdisziplin und Software-Delivery-Grundlagen aufgebaut.',
          },
        },
        creative: {
          elevator: {
            headline:        'Die Reise',
            'datacolor-desc': 'Jetzt: baue die Komponenten, aus denen andere bauen.',
            'acsoftware-desc': 'Davor: Enterprise Angular richtig skaliert.',
            'smarthy-desc':  'Beginn: erster Code, erste Nutzer, erste Lektionen.',
          },
          coffee: {
            headline:        'Die Geschichte bisher',
            'datacolor-desc': 'Aktuell verantwortlich für die Werkzeuge, aus denen andere Angular-Teams bauen — die UI-Library bei Datacolor. Und jetzt: was passiert, wenn Claude die Oberfläche entwirft statt der Entwickler?',
            'acsoftware-desc': 'Ein Jahr im tiefen Enterprise-Angular — NX, NGRX, Codebasen, die das Projekt überdauern müssen. Gelernt, wie Software wirklich skaliert.',
            'smarthy-desc':  'Hier hat es angefangen. Ein Startup, eine steile Lernkurve, das erste Mal etwas Echtes an echte Nutzer ausliefern.',
          },
          'deep-dive': {
            headline:        'Die vollständige Geschichte',
            'datacolor-desc': 'Aktuell bei Datacolor Industrial — Angular UI Library Owner. Die Arbeit dreht sich um Fundamente: das Design-System, gemeinsame Komponenten, Micro-Frontend-Integration. Und in letzter Zeit: Experimente mit Generative UI, bei der Claude die Oberfläche zusammensetzt statt ein Entwickler sie hardzukodieren.',
            'acsoftware-desc': 'Bei ACSoftware, ein Jahr Enterprise-Angular-Consulting. Die Art von Codebase, wo NX und NGRX keine Luxus sind — sie halten eine 200k-Zeilen-App zusammen. Architekturelle Disziplin gelernt.',
            'smarthy-desc':  'Smarthy Srl war der Anfang — ein Startup, ein kleines Team, volle Feature-Ownership von Tag eins. Gebaut in Angular und Node.js, in Produktion geliefert, den Unterschied zwischen Code der funktioniert und Code der hält gelernt.',
          },
        },
        formal: {
          elevator: {
            headline:        'Berufserfahrung',
            'datacolor-desc': 'Angular UI-Library-Ownership, Micro-Frontend-Architektur, KI-Workflow-Integration.',
            'acsoftware-desc': 'Enterprise Angular-Entwicklung, Architektur und State-Management.',
            'smarthy-desc':  'Full-Stack Angular- und Node.js-Entwicklung.',
          },
          coffee: {
            headline:        'Berufserfahrung',
            'datacolor-desc': 'Aktuelle Position: Angular Frontend Developer und UI Library Owner bei Datacolor Industrial. Verantwortlich für das gemeinsame Design-System, Micro-Frontend-Integration und die Einführung KI-gestützter Entwicklungs-Workflows.',
            'acsoftware-desc': 'Angular Developer bei ACSoftware, einer Enterprise-Software-Beratung. Skalierbare Angular-Anwendungen mit NX-Monorepos und NGRX für State-Management geliefert.',
            'smarthy-desc':  'Junior Full-Stack Developer bei Smarthy Srl. Produktions-Web-Anwendungen mit Angular und Node.js entwickelt und ausgeliefert.',
          },
        },
      },
      recruiter: {
        // ── Fallback auf Rollenebene — deckt jede Stil+Zeit-Kombination ab, die nicht explizit definiert ist ──
        headline:         'Berufsverlauf',
        'datacolor-desc': 'Angular Frontend Developer & UI Library Owner bei Datacolor Industrial (3+ Jahre). Micro-Frontend-Architektur, Komponentenbibliothek-Ownership, KI-Workflow-Integration mit Angular 21 und der Anthropic Claude API.',
        'acsoftware-desc': 'Angular Developer bei ACSoftware (1 Jahr). Enterprise-Consulting, NX-Monorepos, NGRX-State-Management, langfristige Architekturqualität.',
        'smarthy-desc':   'Full-Stack Developer bei Smarthy Srl (2 Jahre). Angular + Node.js, erste Produktionsstelle in einem Startup-Umfeld.',
        formal: {
          elevator: {
            headline:        'Berufsverlauf',
            'datacolor-desc': 'UI-Library-Ownership · Micro-Frontends · KI-Integration · 3+ J.',
            'acsoftware-desc': 'Enterprise Angular · NX · NGRX · 1 J.',
            'smarthy-desc':  'Full-Stack · Angular + Node.js · 2 J.',
          },
          coffee: {
            headline:        'Berufsverlauf',
            'datacolor-desc': 'Angular Frontend Developer und UI Library Owner bei Datacolor Industrial. Verantwortlich für die interne Komponentenbibliothek, Micro-Frontend-Architektur und KI-Workflow-Integration. 3+ Jahre.',
            'acsoftware-desc': 'Angular Developer bei ACSoftware, einer Enterprise-Beratung. Große Anwendungen mit NX-Monorepos und NGRX geliefert. Fokus auf langfristige Architekturqualität. 1 Jahr.',
            'smarthy-desc':  'Full-Stack Developer bei Smarthy Srl, einem Startup. Produktions-Features mit Angular und Node.js. Erste Ingenieurstelle. 2 Jahre.',
          },
          'deep-dive': {
            headline:        'Beschäftigungshistorie',
            'datacolor-desc': 'Angular Frontend Developer & UI Library Owner bei Datacolor Industrial (3+ Jahre). Verantwortlich für die interne Angular-Komponentenbibliothek aller Produktteams. Micro-Frontend-Integration, TypeScript-Standards, Design-System-Pflege und Einführung KI-gestützter Workflows mit Angular 21 und der Anthropic Claude API.',
            'acsoftware-desc': 'Angular Developer bei ACSoftware (1 Jahr). Enterprise-Software-Beratung. Wartbare, große Web-Anwendungen für Unternehmenskunden mit NX für Monorepo-Management und NGRX für reaktives State-Management. Starker Fokus auf Architekturrobustheit.',
            'smarthy-desc':  'Full-Stack Developer bei Smarthy Srl (2 Jahre). Erste professionelle Ingenieurstelle in einem Startup-Umfeld. End-to-End-Ownership von Produktions-Features mit Angular und Node.js. Produktionsdisziplin und Software-Delivery-Grundlagen erworben.',
          },
        },
        technical: {
          elevator: {
            headline:        'Berufsverlauf',
            'datacolor-desc': 'Datacolor · UI-Lib-Owner · Angular 21 · Micro-Frontends · KI-Workflows · 3+ J.',
            'acsoftware-desc': 'ACSoftware · Enterprise-Consulting · NX + NGRX · 1 J.',
            'smarthy-desc':  'Smarthy · Full-Stack · Angular + Node.js · 2 J.',
          },
          coffee: {
            headline:        'Berufsverlauf',
            'datacolor-desc': 'Datacolor Industrial — UI-Library-Owner. Verantwortlich für die Angular-Komponentenbibliothek aller Teams. Leitet Micro-Frontend-Integration + KI-Workflow-Einführung mit Angular 21 + Claude API. 3+ J.',
            'acsoftware-desc': 'ACSoftware — Enterprise Angular-Consulting. NX-Monorepo, NGRX-Reactive-State, Architekturstandards. 1 J.',
            'smarthy-desc':  'Smarthy Srl — Startup, erste Prod-Stelle. Angular + Node.js, vollständige Feature-Ownership von Spec bis Deploy. 2 J.',
          },
          'deep-dive': {
            headline:        'Berufsverlauf',
            'datacolor-desc': 'Datacolor Industrial (3+ J.) · UI-Library-Owner · Angular 21 · Micro-Frontends · KI-Workflows via Hashbrown + Claude API · Vollständige Ownership von Design-System bis Deployment.',
            'acsoftware-desc': 'ACSoftware (1 J.) · Enterprise-Consulting · NX-Monorepo · NGRX-Reactive-State · TypeScript strict · Architekturqualität + teamübergreifende Komponentenwiederverwendung.',
            'smarthy-desc':  'Smarthy Srl (2 J.) · Erste Prod-Stelle · Angular + Node.js · Vollständige Feature-Ownership · Spec → Deploy im Startup-Umfeld.',
          },
        },
        creative: {
          elevator: {
            headline:        'Die Karrieregeschichte',
            'datacolor-desc': 'Jetzt: der Ingenieur, der die Werkzeuge baut, aus denen alle anderen bauen.',
            'acsoftware-desc': 'Davor: Enterprise Angular für anspruchsvolle Kunden gemeistert.',
            'smarthy-desc':  'Angefangen: echte Produkte von Tag eins geliefert.',
          },
          coffee: {
            headline:        'Die Karrieregeschichte',
            'datacolor-desc': 'Datacolor Industrial — aktuell die Person, die die Komponenten besitzt, aus denen alle anderen Angular-Teams bauen. Und seit kurzem: die Person, die neu definiert, was "eine UI bauen" mit Generative AI bedeutet.',
            'acsoftware-desc': 'ACSoftware — ein Jahr im tiefsten Enterprise-Angular. Gelernt, wie Software skaliert, wenn sie es wirklich muss.',
            'smarthy-desc':  'Smarthy Srl — der Anfang. Erste Stelle, erste Produktions-App, erste echte Nutzer.',
          },
        },
      },
      client: {
        // ── Fallback auf Rollenebene — deckt jede Stil+Zeit-Kombination ab, die nicht explizit definiert ist ──
        headline:         'Erfahrung',
        'datacolor-desc': 'Aktuell Angular Frontend Developer bei Datacolor Industrial. Vollständige Ownership des Design-Systems und der Micro-Frontend-Architektur. Leitet KI-Integration mit Angular 21. 3+ Jahre.',
        'acsoftware-desc': 'Angular Developer in einer Enterprise-Softwareberatung. Robuste, skalierbare Web-Anwendungen für Unternehmenskunden geliefert.',
        'smarthy-desc':   'Full-Stack Developer in einem Startup. Produktions-Web-Anwendungen von Grund auf mit Angular und Node.js entwickelt.',
        formal: {
          elevator: {
            headline:        'Erfahrung',
            'datacolor-desc': 'Aktuell: Angular UI-Library und Micro-Frontend-Architektur bei einem Industrietech-Unternehmen.',
            'acsoftware-desc': 'Zuvor: skalierbare Angular-Lösungen für Enterprise-Kunden.',
            'smarthy-desc':  'Frühkarriere: Full-Stack-Web-Produkte für ein Startup.',
          },
          coffee: {
            headline:        'Erfahrung',
            'datacolor-desc': 'Aktuell: Angular Frontend Developer bei Datacolor Industrial. Vollständige Ownership des Design-Systems und Leitung der KI-Integration für interne Werkzeuge. 3+ Jahre.',
            'acsoftware-desc': 'Zuvor: Angular Developer in einer Enterprise-Softwareberatung. Robuste, skalierbare Web-Anwendungen für Unternehmenskunden mit anspruchsvollen Anforderungen geliefert.',
            'smarthy-desc':  'Frühkarriere: Full-Stack Developer in einem Startup. Produktions-Web-Anwendungen von Grund auf mit Angular und Node.js entwickelt.',
          },
        },
        creative: {
          elevator: {
            headline:        'Die Geschichte bisher',
            'datacolor-desc': 'Jetzt: baue KI-gestützte Werkzeuge für ein Industrieunternehmen.',
            'acsoftware-desc': 'Davor: Enterprise-Angular für anspruchsvolle Kunden.',
            'smarthy-desc':  'Angefangen: erstes Produkt, erste Nutzer, erste Lektionen.',
          },
        },
        technical: {
          elevator: {
            headline:        'Erfahrung',
            'datacolor-desc': 'Datacolor · Angular UI-Lib · Micro-Frontends · KI-Integration · 3+ J.',
            'acsoftware-desc': 'ACSoftware · Enterprise Angular · NX + NGRX',
            'smarthy-desc':  'Smarthy · Full-Stack · Angular + Node.js',
          },
        },
      },
      default: {
        headline:         'Erfahrung',
        'current-label':  'Aktuell',
        'datacolor-role': 'Angular Frontend Developer & UI Library Owner',
        'acsoftware-role': 'Angular Developer',
        'smarthy-role':   'Full-Stack Developer',
        'datacolor-desc': 'Angular UI-Library, Micro-Frontends, KI-Integration.',
        'acsoftware-desc': 'Enterprise Angular-Consulting.',
        'smarthy-desc':   'Full-Stack-Webentwicklung.',
      },
    },
    'project-showcase': {
      developer: {
        technical: {
          elevator: {
            eyebrow:  'Ausgeliefert',
            headline: 'Dinge, die ich gebaut habe.',
            body:     'Angular + KI. Echter Output.',
            ctaLabel: 'Ansehen',
          },
          coffee: {
            eyebrow:  'Ausgewählte Projekte',
            headline: 'Ein paar Dinge, die ich gebaut habe.',
            body:     'Side-Projekte, Kundenprojekte und interne Tools — alles Angular, die meisten mit etwas KI. Jedes hat ein echtes Problem gelöst.',
            ctaLabel: 'Projekt ansehen',
          },
          'deep-dive': {
            eyebrow:  'Projekt-Portfolio',
            headline: 'Was ich geliefert habe — Auswahl.',
            body:     'Eine kuratierte Auswahl an Projekten aus Generative UI, Angular-Tooling und KI-Integration. Architekturentscheidungen, Tech-Stack und die interessanten Probleme sind alle dabei.',
            ctaLabel: 'Projekt ansehen',
          },
        },
        creative: {
          elevator: {
            eyebrow:  'Gemachte Dinge',
            headline: 'Stuff, den ich gebaut habe.',
            body:     'Echte Projekte. Echte Probleme. Echtes Angular.',
            ctaLabel: 'Öffnen',
          },
          coffee: {
            eyebrow:  'Gemachte Dinge',
            headline: 'Projekte, auf die ich stolz bin.',
            body:     'Kein Portfolio-Fluff — echte Dinge, die ich geliefert, kaputt gemacht, gefixt und wieder geliefert habe. Jedes hat mich etwas gelehrt.',
            ctaLabel: 'Ansehen',
          },
          'deep-dive': {
            eyebrow:  'Projekte & Experimente',
            headline: 'Dinge, die ich gebaut, kaputt und neu gebaut habe.',
            body:     'Von Generative UI Experimenten bis zu Produktionstools — eine Auswahl der Arbeit, auf die ich am stolzesten bin. Das Interessante steckt in den Details.',
            ctaLabel: 'Öffnen',
          },
        },
        formal: {
          elevator: {
            eyebrow:  'Portfolio',
            headline: 'Ausgewählte Arbeiten.',
            body:     'Produktionsanwendungen und interne Werkzeuge.',
            ctaLabel: 'Ansehen',
          },
          coffee: {
            eyebrow:  'Projekt-Portfolio',
            headline: 'Ausgewählte Arbeiten.',
            body:     'Eine Auswahl von Produktionsanwendungen und Tools, die Angular-Frontend-Architektur, KI-Integration und Design-System-Arbeit umfassen.',
            ctaLabel: 'Projekt ansehen',
          },
          'deep-dive': {
            eyebrow:  'Professionelles Portfolio',
            headline: 'Ausgewählte Projekte.',
            body:     'Die folgenden Projekte repräsentieren eine Querschnittsauswahl meiner professionellen und persönlichen Arbeit. Jedes umfasste vollständige End-to-End-Lieferung: Architektur, Implementierung und Deployment.',
            ctaLabel: 'Projekt ansehen',
          },
        },
      },
      recruiter: {
        // ── Fallback auf Rollenebene — deckt jede Stil+Zeit-Kombination ab, die nicht explizit definiert ist ──
        eyebrow:  'Portfolio',
        headline: 'Ausgewählte Arbeiten',
        body:     'Produktionsprojekte aus Angular-Frontend, KI-Integration und Design-Systemen.',
        ctaLabel: 'Projekt ansehen',
        formal: {
          elevator: {
            eyebrow:  'Portfolio',
            headline: 'Wichtige Deliverables.',
            body:     'Angular-Produktionsanwendungen. KI-Integration. Design-System-Ownership.',
            ctaLabel: 'Ansehen',
          },
          coffee: {
            eyebrow:  'Projekt-Portfolio',
            headline: 'Ausgewählte Deliverables.',
            body:     'Eine Auswahl von Produktionsprojekten, die Full-Stack Angular-Entwicklung, KI-Integration und UI-Library-Ownership demonstrieren.',
            ctaLabel: 'Projekt ansehen',
          },
          'deep-dive': {
            eyebrow:  'Professionelles Portfolio',
            headline: 'Schlüsselprojekte & Deliverables.',
            body:     'Die folgenden Projekte repräsentieren Eriks Produktions-Output in Angular, KI-Integration und Frontend-Architektur. Jedes wurde End-to-End geliefert — von der Architektur bis zum Deployment.',
            ctaLabel: 'Projekt ansehen',
          },
        },
        creative: {
          elevator: {
            eyebrow:  'Von Erik gebaut',
            headline: 'Dinge, die es in die Produktion geschafft haben.',
            body:     'Live-Produkte. Keine Mockups.',
            ctaLabel: 'Live ansehen',
          },
          coffee: {
            eyebrow:  'Live-Arbeit',
            headline: 'Projekte, die geliefert wurden.',
            body:     'Keine Seitenexperimente — Produktionssysteme mit echten Nutzern. Alles Angular, die meisten mit integrierter KI.',
            ctaLabel: 'Live ansehen',
          },
          'deep-dive': {
            eyebrow:  'Portfolio',
            headline: 'Produktionsprojekte — die, die zählen.',
            body:     "Eriks Portfolio konzentriert sich auf ausgelieferte, produktionsreife Arbeit. Generative UI, Komponentenbibliotheken, KI-gestützte Oberflächen — gebaut und deployed, nicht nur prototypiert.",
            ctaLabel: 'Öffnen',
          },
        },
        technical: {
          elevator: {
            eyebrow:  'Ausgeliefert',
            headline: 'Produktions-Output.',
            body:     'Angular 21 · KI · Hashbrown · Vercel.',
            ctaLabel: 'Repo / Live',
          },
          coffee: {
            eyebrow:  'Produktionsarbeit',
            headline: 'Was in Prod ist.',
            body:     'Angular 21, NgRx, Hashbrown, Claude API, Vercel. Alles in Produktion. Source und Live-Links wo verfügbar.',
            ctaLabel: 'Repo / Live',
          },
          'deep-dive': {
            eyebrow:  'Produktions-Portfolio',
            headline: 'Wichtige Deliverables, produktionsreif.',
            body:     'Full-Stack Angular Anwendungen, KI-integrierte Tools und Komponentenbibliotheken — jede mit Tech-Stack, Architekturnotizen und messbaren Ergebnissen.',
            ctaLabel: 'Repo / Live',
          },
        },
      },
      client: {
        // ── Fallback auf Rollenebene — deckt jede Stil+Zeit-Kombination ab, die nicht explizit definiert ist ──
        eyebrow:  'Portfolio',
        headline: 'Ausgewählte Projekte',
        body:     'Web-Anwendungen und Tools für den realen Einsatz entwickelt.',
        ctaLabel: 'Projekt ansehen',
        formal: {
          elevator: {
            eyebrow:  'Portfolio',
            headline: 'Ausgewählte Projekte.',
            body:     'Für Unternehmen gelieferte Produktions-Web-Anwendungen.',
            ctaLabel: 'Ansehen',
          },
          coffee: {
            eyebrow:  'Kundenarbeit',
            headline: 'Ausgewählte Deliverables.',
            body:     'Eine Auswahl von Produktions-Web-Anwendungen — Angular-Frontends mit KI-Integration, end to end geliefert.',
            ctaLabel: 'Projekt ansehen',
          },
          'deep-dive': {
            eyebrow:  'Portfolio',
            headline: 'Ausgewählte Projektarbeit.',
            body:     'Die folgenden Projekte geben einen Eindruck davon, was ich liefere: Full-Stack Angular-Anwendungen, KI-integrierte Funktionen und Design-System-Arbeit — alles in Produktion.',
            ctaLabel: 'Projekt ansehen',
          },
        },
        creative: {
          elevator: {
            eyebrow:  'Arbeit',
            headline: 'Produkte, die ich gebaut habe.',
            body:     'Live-Apps. Echte Nutzer. KI innen.',
            ctaLabel: 'Ansehen',
          },
          coffee: {
            eyebrow:  'Portfolio',
            headline: 'Projekte, die live gegangen sind.',
            body:     'Angular-Anwendungen mit KI-Funktionen, von Grund auf gebaut und ausgeliefert. Keine Prototypen — Produkte, die Menschen tatsächlich nutzen.',
            ctaLabel: 'Ansehen',
          },
          'deep-dive': {
            eyebrow:  'Arbeit, auf die ich stolz bin',
            headline: 'Mit Sorgfalt gebaute Projekte.',
            body:     'Jedes Projekt hier wurde mit Bedacht gebaut — durchdachte Architektur, KI dort integriert wo sie Wert schafft, und vollständig bis in die Produktion geliefert.',
            ctaLabel: 'Öffnen',
          },
        },
        technical: {
          elevator: {
            eyebrow:  'Geliefert',
            headline: 'Produktions-Stack.',
            body:     'Angular · KI · Vercel. Ausgeliefert.',
            ctaLabel: 'Ansehen',
          },
          coffee: {
            eyebrow:  'Gelieferte Arbeit',
            headline: 'Was ich geliefert habe.',
            body:     'Angular 21 Anwendungen mit KI-Integrationen — Full-Stack, SSR, Vercel Deployment. Gebaut und geliefert, nicht nur designed.',
            ctaLabel: 'Ansehen',
          },
          'deep-dive': {
            eyebrow:  'Technisches Portfolio',
            headline: 'End-to-End Deliverables.',
            body:     'Angular 21 Frontends, KI-gestützte Funktionen, Server-side Rendering und Vercel Deployment — alles produktionsreif. Jedes Projekt listet Stack, Herausforderung und was geliefert wurde.',
            ctaLabel: 'Ansehen',
          },
        },
      },
      default: {
        eyebrow:  'Ausgewählte Arbeiten',
        headline: 'Projekte.',
        body:     'Eine Auswahl von Dingen, die ich gebaut habe.',
        ctaLabel: 'Projekt ansehen',
      },
    },
  },
};
