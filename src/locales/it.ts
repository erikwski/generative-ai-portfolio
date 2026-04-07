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
  guard: {
    onboarded: {
      message: 'Completa prima il tuo profilo così l\'AI sa come parlarti.',
      action: 'Capito',
    },
  },
  canvas: {
    eyebrow: 'Aura: Portfolio AI',
    headline: 'Chiedimi qualsiasi cosa su Erik.',
    subline: 'Costruirò l\'interfaccia attorno alla tua domanda.',
    reset: 'Reset',
    chip: {
      build: 'Cosa sai costruire?',
      stack: 'Mostrami il tuo stack',
      hire: 'Sei disponibile per nuovi progetti?',
    },
    placeholder: {
      empty: 'Chiedi qualcosa su Erik…',
      active: 'Scrivi un\'altra domanda…',
    },
    send: {
      aria: 'Invia',
    },
  },
  widgets: {
    'architects-identity': {
      developer: {
        technical: {
          elevator: {
            eyebrow:  'Full-Stack Engineer',
            headline: 'Costruisco sistemi che pensano.',
            tagline:  'Angular + AI, dal brief alla produzione.',
            body:     'Angular 21, generative UI, Hashbrown, NgRx. Sviluppo applicazioni full-stack dove l\'interfaccia è l\'output dell\'AI — nessun layout fisso, Claude compone i componenti in tempo reale.',
          },
          coffee: {
            eyebrow:  'Full-Stack Engineer / AI Architect',
            headline: 'Ciao, sono Erik.',
            tagline:  'Progetto app Angular potenziate da Claude.',
            body:     'Cinque anni a costruire applicazioni Angular in produzione. Gli ultimi due immerso nella generative UI — sistemi in cui Claude non si limita a rispondere, ma compone l\'interfaccia stessa. Unisco NgRx signal store, Hashbrown e l\'API Anthropic per creare front-end adattivi e AI-native.',
          },
          'deep-dive': {
            eyebrow:  'Full-Stack Engineer / AI Architect',
            headline: 'Ciao, sono Erik Ferrari.',
            tagline:  'Progetto e sviluppo applicazioni Angular dove l\'AI è l\'architetto.',
            body:     'Sono un ingegnere full-stack con cinque anni di esperienza in produzione su Angular. Negli ultimi due anni mi sono specializzato in generative UI — un pattern in cui l\'LLM orchestra il layout del front-end dinamicamente, anziché servire componenti statici. Lavoro con Angular 21 con SSR, NgRx Signal Store, Hashbrown e l\'API Claude di Anthropic. Gestisco l\'intero ciclo di sviluppo, dall\'architettura al deployment su Vercel.',
          },
        },
        creative: {
          elevator: {
            eyebrow:  'Architetto / Builder',
            headline: 'Costruisco cose che pensano.',
            tagline:  'Angular incontra l\'AI generativa — interfacce vive e adattive.',
            body:     'Non integro solo l\'AI nelle app. Faccio in modo che l\'AI sia l\'app — layout, componenti, testi, tutto composto da Claude in tempo reale. La chiamo generative UI.',
          },
          coffee: {
            eyebrow:  'Ingegnere / Creative Technologist',
            headline: 'Ciao, sono Erik.',
            tagline:  'Creo interfacce che si riscrivono da sole.',
            body:     'Sviluppo app Angular da cinque anni, ma gli ultimi due sono stati diversi — ho smesso di codificare layout fissi e ho lasciato che Claude li progettasse. Ogni componente che stai leggendo è stato generato al volo. La chiamo generative UI, ed è la cosa più entusiasmante che abbia mai costruito.',
          },
          'deep-dive': {
            eyebrow:  'Ingegnere / Creative Technologist',
            headline: 'Ciao, sono Erik Ferrari.',
            tagline:  'Generative UI engineer. Creo interfacce che pensano per sé stesse.',
            body:     'Cinque anni di Angular, due anni nel rabbit hole della generative UI — sistemi dove l\'AI non è una feature, è il renderer. Uso Claude, Hashbrown e l\'architettura a segnali di Angular per costruire front-end che si adattano a ogni utente in tempo reale. Non ci sono due visitatori che vedono lo stesso layout. Mi importa anche del mestiere: architettura pulita, codice leggibile e cose che reggono in produzione.',
          },
        },
        formal: {
          elevator: {
            eyebrow:  'Ingegnere del Software',
            headline: 'Erik Ferrari.',
            tagline:  'Specialista Angular. Ingegnere di integrazione AI.',
            body:     'Ingegnere full-stack con cinque anni di esperienza in produzione su Angular, ora specializzato in sistemi di generative UI basati sull\'API Claude di Anthropic.',
          },
          coffee: {
            eyebrow:  'Ingegnere del Software',
            headline: 'Ciao, sono Erik Ferrari.',
            tagline:  'Ingegnere Angular full-stack specializzato in applicazioni AI-native.',
            body:     'Ho cinque anni di esperienza professionale nella realizzazione di applicazioni Angular, con una specializzazione crescente in integrazione AI e generative UI. Lavoro con Angular 21, NgRx Signal Store e l\'API Anthropic per costruire front-end adattivi dove l\'interfaccia è composta da Claude a runtime.',
          },
          'deep-dive': {
            eyebrow:  'Ingegnere del Software',
            headline: 'Erik Ferrari — Full-Stack Engineer.',
            tagline:  'Angular · Integrazione AI · Generative UI',
            body:     'Sono un ingegnere del software full-stack con cinque anni di esperienza professionale, principalmente su Angular. Il mio focus recente è la generative UI — un pattern in cui un LLM orchestra il layout del front-end dinamicamente. Implemento questo con Angular 21 con SSR, NgRx Signal Store, Hashbrown e l\'API Claude di Anthropic. Sono in grado di possedere funzionalità complete end to end, dall\'architettura all\'API design fino al deployment su Vercel.',
          },
        },
      },
      recruiter: {
        formal: {
          elevator: {
            eyebrow:  'Profilo Candidato',
            headline: 'Erik Ferrari',
            tagline:  'Software Engineer · Angular · Integrazione AI',
            body:     '5+ anni · Sviluppatore Angular full-stack specializzato in generative UI e applicazioni AI. Disponibile per ruoli senior e lead.',
          },
          coffee: {
            eyebrow:  'Profilo Candidato',
            headline: 'Erik Ferrari — Software Engineer',
            tagline:  'Angular · Generative UI · API Anthropic · 5+ anni',
            body:     'Erik è un ingegnere full-stack con cinque anni di esperienza nello sviluppo di applicazioni Angular. Negli ultimi due anni si è concentrato sull\'integrazione AI e la generative UI, portando in produzione sistemi in cui Claude compone le interfacce dinamicamente. Lavora sull\'intero stack — Angular 21 con SSR, NgRx, Express, Vercel — ed è disponibile per ruoli senior o lead in aziende che costruiscono prodotti AI-native.',
          },
          'deep-dive': {
            eyebrow:  'Profilo Candidato',
            headline: 'Erik Ferrari — Full-Stack Engineer',
            tagline:  'Angular · Generative UI · Applicazioni AI-Native · 5+ anni',
            body:     'Erik Ferrari è un ingegnere del software full-stack con cinque anni di esperienza professionale e una profonda specializzazione in Angular e sistemi front-end guidati dall\'AI. È l\'autore di questo portfolio — un\'applicazione di generative UI in cui Claude compone ogni componente a runtime in base al contesto del visitatore. Tecnicamente copre Angular 21, NgRx Signal Store, l\'API Claude di Anthropic, il framework Hashbrown, TypeScript, Express e Vercel. Sta esplorando opportunità come senior engineer o tech lead in contesti dove l\'AI è una priorità.',
          },
        },
        creative: {
          elevator: {
            eyebrow:  'Incontra Erik',
            headline: 'Erik Ferrari',
            tagline:  'L\'ingegnere che fa progettare l\'interfaccia all\'AI.',
            body:     'Cinque anni di Angular. Due anni a fare di Claude l\'architetto. Porta la generative UI in produzione — incluso questo portfolio che stai esplorando.',
          },
          coffee: {
            eyebrow:  'Incontra Erik',
            headline: 'Erik Ferrari — Engineer & AI Builder',
            tagline:  'Ha smesso di codificare layout fissi. Ora lo fa Claude.',
            body:     'Erik ha trascorso cinque anni a sviluppare applicazioni Angular e gli ultimi due a pionierizzare la generative UI — front-end dove l\'AI non risponde soltanto, ma renderizza. Ha costruito questo portfolio come demo live del concetto. Angular 21, Hashbrown, NgRx, API Claude. Se stai assumendo per un team che vuole essere all\'avanguardia sui prodotti AI-native, Erik vale una conversazione.',
          },
        },
        technical: {
          elevator: {
            eyebrow:  'Candidato',
            headline: 'Erik Ferrari',
            tagline:  'Angular 21 · Generative UI · Claude API · 5 anni',
            body:     'Porta in produzione app Angular AI-native. Specialista generative UI. Hashbrown + Claude in produzione. NgRx signals, SSR, Vercel. Disponibile per ruoli senior / lead.',
          },
        },
      },
      client: {
        formal: {
          elevator: {
            eyebrow:  'Ingegnere Indipendente',
            headline: 'Sviluppo applicazioni web.',
            tagline:  'Front-end Angular con funzionalità AI, consegnati nei tempi.',
            body:     'Cinque anni a realizzare applicazioni Angular per startup e scale-up. Ora offro sviluppo full-stack con funzionalità AI integrate — dalle interfacce generative ai workflow basati su LLM.',
          },
          coffee: {
            eyebrow:  'Ingegnere Indipendente',
            headline: 'Ciao, sono Erik Ferrari.',
            tagline:  'Sviluppo applicazioni Angular con l\'AI integrata fin dall\'inizio.',
            body:     'Ho trascorso cinque anni a costruire applicazioni web in produzione con Angular per startup e aziende in crescita. Il mio focus attuale è aiutare le aziende a integrare l\'AI nei loro prodotti in modo corretto — non come widget chatbot, ma come parte centrale dell\'interfaccia e della logica. Copro l\'intero stack: front-end Angular, livello API e deployment.',
          },
        },
        creative: {
          elevator: {
            eyebrow:  'Architetto Digitale',
            headline: 'Trasformo idee in interfacce intelligenti.',
            tagline:  'Il tuo prodotto. Potenziato dall\'AI. Fatto bene.',
            body:     'Progetto e sviluppo applicazioni Angular dove l\'AI è un elemento di prima classe — non un chatbot aggiunto alla fine, ma un motore che plasma l\'esperienza stessa.',
          },
          coffee: {
            eyebrow:  'Architetto Digitale',
            headline: 'Ciao, sono Erik.',
            tagline:  'Costruisco prodotti dove l\'interfaccia pensa insieme all\'utente.',
            body:     'Sviluppo prodotti web da cinque anni, e negli ultimi due sono stato ossessionato da una domanda: cosa succede quando l\'AI non alimenta solo la logica, ma compone l\'interfaccia stessa? La risposta è quello che stai guardando. Se hai un\'idea di prodotto che ha bisogno di questo tipo di pensiero, parliamone.',
          },
        },
        technical: {
          elevator: {
            eyebrow:  'Contractor Full-Stack',
            headline: 'Angular + AI, end to end.',
            tagline:  'Dall\'architettura al deployment.',
            body:     'TypeScript, Angular 21, NgRx, Vercel. Integrazione API Claude, generative UI, SSR. Definisco, progetto e consegno.',
          },
        },
      },
      default: {
        eyebrow:  'Erik Ferrari',
        headline: 'Ciao, sono Erik.',
        tagline:  'Sviluppo app Angular potenziate dall\'AI.',
        body:     'Sviluppatore full-stack specializzato in generative UI e applicazioni web AI-native.',
      },
    },
  },
};
