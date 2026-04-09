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
    'evolution-timeline': {
      developer: {
        technical: {
          elevator: {
            headline:        'Stack di Carriera',
            'datacolor-desc': 'Owner della UI library · micro-frontend · integrazione workflow AI · Angular 21.',
            'acsoftware-desc': 'Angular enterprise · monorepo NX · stato NGRX.',
            'smarthy-desc':  'Primo ruolo in prod · Node.js + Angular · full-stack.',
          },
          coffee: {
            headline:        'Carriera Tecnica',
            'datacolor-desc': 'Attualmente responsabile della Angular UI library di Datacolor — design token, componenti condivisi, architettura micro-frontend. Ora guido l\'adozione di workflow AI con Angular 21 e l\'API Claude di Anthropic.',
            'acsoftware-desc': 'Consulenza enterprise ad ACSoftware. App Angular su larga scala con monorepo NX e NGRX per la gestione dello stato. Focus su manutenibilità a lungo termine e riuso cross-team.',
            'smarthy-desc':  'Primo ruolo da ingegnere. Feature full-stack con Angular e Node.js in un ambiente startup. Codice in produzione e approccio all\'architettura pulita.',
          },
          'deep-dive': {
            headline:        'Carriera in Dettaglio',
            'datacolor-desc': 'Angular Frontend Developer & UI Library Owner a Datacolor Industrial (3+ anni). Piena ownership della libreria di componenti condivisi usata da tutti i team di prodotto. Introdotta l\'integrazione micro-frontend, gli standard TypeScript, e attualmente guido l\'adozione di workflow AI con Angular 21 e l\'API Claude di Anthropic via Hashbrown.',
            'acsoftware-desc': 'Angular Developer ad ACSoftware (1 anno). Contesto di consulenza enterprise — applicazioni manutenibili su larga scala con NX per la gestione del monorepo e NGRX per lo stato reattivo. Forte focus su qualità architetturale e riuso dei componenti cross-team.',
            'smarthy-desc':  'Full-Stack Developer a Smarthy Srl (2 anni). Primo ruolo di ingegneria in produzione. Ownership end-to-end di feature in Angular e Node.js, dalla spec al deployment. Sviluppata disciplina produttiva e fondamentali della consegna software reale.',
          },
        },
        creative: {
          elevator: {
            headline:        'Il Percorso',
            'datacolor-desc': 'Ora: costruisco i componenti con cui gli altri costruiscono.',
            'acsoftware-desc': 'Prima: Angular enterprise scalata nel modo giusto.',
            'smarthy-desc':  'Inizio: primo codice, primi utenti, prime lezioni.',
          },
          coffee: {
            headline:        'La Storia Finora',
            'datacolor-desc': 'Attualmente responsabile degli strumenti da cui gli altri team Angular partono — la UI library di Datacolor. E ora esploro cosa succede quando Claude progetta l\'interfaccia al posto dello sviluppatore.',
            'acsoftware-desc': 'Un anno nelle acque profonde di Angular enterprise — NX, NGRX, codebase che devono sopravvivere al progetto. Ho imparato come il software scala davvero.',
            'smarthy-desc':  'Da qui è partito tutto. Una startup, una curva di apprendimento ripida, la prima volta a spedire qualcosa di reale a utenti reali.',
          },
          'deep-dive': {
            headline:        'La Storia Completa',
            'datacolor-desc': 'Attualmente a Datacolor Industrial — Angular UI Library Owner. Il lavoro riguarda la costruzione di fondamenta: il design system, i componenti condivisi, il glue dei micro-frontend. E ultimamente, sto sperimentando la generative UI, dove Claude compone l\'interfaccia invece di un developer che la hardcoda.',
            'acsoftware-desc': 'Ad ACSoftware, un anno di consulenza Angular enterprise. Il tipo di codebase dove NX e NGRX non sono lussi — sono ciò che impedisce a un\'app da 200k righe di crollare. Ho imparato la disciplina architetturale.',
            'smarthy-desc':  'Smarthy Srl è stato l\'inizio — una startup, un piccolo team, piena ownership delle feature dal primo giorno. Costruito in Angular e Node.js, spedito in produzione, imparato la differenza tra codice che funziona e codice che dura.',
          },
        },
        formal: {
          elevator: {
            headline:        'Esperienza Professionale',
            'datacolor-desc': 'Ownership Angular UI library, architettura micro-frontend, integrazione workflow AI.',
            'acsoftware-desc': 'Sviluppo Angular enterprise, architettura e gestione dello stato.',
            'smarthy-desc':  'Sviluppo full-stack Angular e Node.js.',
          },
          coffee: {
            headline:        'Esperienza Professionale',
            'datacolor-desc': 'Posizione attuale: Angular Frontend Developer e UI Library Owner a Datacolor Industrial. Responsabile del design system condiviso, integrazione micro-frontend e introduzione dei workflow di sviluppo potenziati dall\'AI.',
            'acsoftware-desc': 'Angular developer ad ACSoftware, società di consulenza enterprise. Applicazioni Angular scalabili con monorepo NX e NGRX per la gestione dello stato.',
            'smarthy-desc':  'Junior full-stack developer a Smarthy Srl. Sviluppo e deploy di applicazioni web in produzione con Angular e Node.js.',
          },
        },
      },
      recruiter: {
        // ── Fallback a livello di ruolo — copre qualsiasi combo stile+tempo non definita esplicitamente ──
        headline:         'Storia Lavorativa',
        'datacolor-desc': 'Angular Frontend Developer & UI Library Owner a Datacolor Industrial (3+ anni). Architettura micro-frontend, ownership della libreria di componenti, integrazione workflow AI con Angular 21 e l\'API Claude di Anthropic.',
        'acsoftware-desc': 'Angular Developer ad ACSoftware (1 anno). Consulenza enterprise, monorepo NX, gestione stato NGRX, qualità architetturale a lungo termine.',
        'smarthy-desc':   'Full-Stack Developer a Smarthy Srl (2 anni). Angular + Node.js, primo ruolo di ingegneria in produzione in un ambiente startup.',
        formal: {
          elevator: {
            headline:        'Storia Lavorativa',
            'datacolor-desc': 'Owner UI library · micro-frontend · integrazione AI · 3+ anni',
            'acsoftware-desc': 'Angular enterprise · NX · NGRX · 1 anno',
            'smarthy-desc':  'Full-stack · Angular + Node.js · 2 anni',
          },
          coffee: {
            headline:        'Storia Lavorativa',
            'datacolor-desc': 'Angular Frontend Developer e UI Library Owner a Datacolor Industrial. Responsabile della libreria di componenti interna, architettura micro-frontend e integrazione AI. 3+ anni.',
            'acsoftware-desc': 'Angular Developer ad ACSoftware, società di consulenza enterprise. Applicazioni su larga scala con monorepo NX e NGRX. Focus sulla qualità architetturale a lungo termine. 1 anno.',
            'smarthy-desc':  'Full-Stack Developer a Smarthy Srl, startup. Feature in produzione con Angular e Node.js. Primo ruolo da ingegnere. 2 anni.',
          },
          'deep-dive': {
            headline:        'Cronologia Lavorativa',
            'datacolor-desc': 'Angular Frontend Developer & UI Library Owner a Datacolor Industrial (3+ anni). Responsabile della libreria di componenti Angular interna usata da tutti i team di prodotto. Include integrazione micro-frontend, standard TypeScript, manutenzione del design system e guida all\'adozione di workflow AI con Angular 21 e l\'API Claude di Anthropic.',
            'acsoftware-desc': 'Angular Developer ad ACSoftware (1 anno). Consulenza software enterprise. Applicazioni web manutenibili su larga scala per clienti corporate con NX per il monorepo e NGRX per lo stato reattivo. Forte focus su robustezza architetturale e riuso cross-team.',
            'smarthy-desc':  'Full-Stack Developer a Smarthy Srl (2 anni). Primo ruolo professionale in un ambiente startup. Ownership end-to-end di feature in produzione con Angular e Node.js. Sviluppata disciplina produttiva e fondamentali della consegna software.',
          },
        },
        technical: {
          elevator: {
            headline:        'Storia Lavorativa',
            'datacolor-desc': 'Datacolor · owner UI lib · Angular 21 · micro-frontend · workflow AI · 3+ anni',
            'acsoftware-desc': 'ACSoftware · consulenza enterprise · NX + NGRX · 1 anno',
            'smarthy-desc':  'Smarthy · full-stack · Angular + Node.js · 2 anni',
          },
          coffee: {
            headline:        'Storia Lavorativa',
            'datacolor-desc': 'Datacolor Industrial — UI Library Owner. Gestisce la libreria Angular usata da tutti i team di prodotto. Guida integrazione micro-frontend + adozione AI con Angular 21 + Claude API. 3+ anni.',
            'acsoftware-desc': 'ACSoftware — consulenza Angular enterprise. Monorepo NX, stato reattivo NGRX, standard architetturali. 1 anno.',
            'smarthy-desc':  'Smarthy Srl — startup, primo ruolo in prod. Angular + Node.js, piena ownership delle feature dalla spec al deploy. 2 anni.',
          },
          'deep-dive': {
            headline:        'Storia Lavorativa',
            'datacolor-desc': 'Datacolor Industrial (3+ anni) · UI Library Owner · Angular 21 · Micro-frontend · Workflow AI via Hashbrown + Claude API · Ownership completa dal design system al deployment.',
            'acsoftware-desc': 'ACSoftware (1 anno) · Consulenza enterprise · Monorepo NX · Stato reattivo NGRX · TypeScript strict · Qualità architetturale + riuso cross-team.',
            'smarthy-desc':  'Smarthy Srl (2 anni) · Primo ruolo in produzione · Angular + Node.js · Piena ownership delle feature · spec → deploy in ambiente startup.',
          },
        },
        creative: {
          elevator: {
            headline:        'La Storia di Carriera',
            'datacolor-desc': 'Ora: l\'ingegnere che costruisce gli strumenti con cui tutti gli altri costruiscono.',
            'acsoftware-desc': 'Prima: Angular enterprise per clienti esigenti.',
            'smarthy-desc':  'Inizio: prodotti reali dal primo giorno.',
          },
          coffee: {
            headline:        'La Storia di Carriera',
            'datacolor-desc': 'Datacolor Industrial — attualmente la persona che possiede i componenti da cui partono tutti gli altri team Angular. E ultimamente, la persona che sta riscrivendo cosa significa "costruire una UI" con la generative AI.',
            'acsoftware-desc': 'ACSoftware — un anno dentro Angular enterprise nella sua forma più esigente. Imparato come il software scala quando deve davvero farlo.',
            'smarthy-desc':  'Smarthy Srl — l\'inizio. Primo ruolo, prima app in produzione, primi utenti reali.',
          },
        },
      },
      client: {
        // ── Fallback a livello di ruolo — copre qualsiasi combo stile+tempo non definita esplicitamente ──
        headline:         'Esperienza',
        'datacolor-desc': 'Attualmente Angular Frontend Developer a Datacolor Industrial. Piena ownership del design system e dell\'architettura micro-frontend. Guida l\'integrazione AI con Angular 21. 3+ anni.',
        'acsoftware-desc': 'Angular developer in una società di consulenza enterprise. Applicazioni web robuste e scalabili per clienti corporate.',
        'smarthy-desc':   'Full-stack developer in una startup. Applicazioni web in produzione da zero con Angular e Node.js.',
        formal: {
          elevator: {
            headline:        'Esperienza',
            'datacolor-desc': 'Attuale: UI library Angular e architettura micro-frontend in una tech company industriale.',
            'acsoftware-desc': 'Precedente: soluzioni Angular scalabili per clienti enterprise.',
            'smarthy-desc':  'Inizio carriera: prodotti web full-stack per una startup.',
          },
          coffee: {
            headline:        'Esperienza',
            'datacolor-desc': 'Attuale: Angular Frontend Developer a Datacolor Industrial. Piena ownership del design system e guida dell\'integrazione AI per gli strumenti interni. 3+ anni.',
            'acsoftware-desc': 'Precedente: Angular developer in una società di consulenza enterprise. Applicazioni web robuste e scalabili per clienti corporate con requisiti esigenti.',
            'smarthy-desc':  'Inizio carriera: full-stack developer in una startup. Applicazioni web in produzione da zero con Angular e Node.js.',
          },
        },
        creative: {
          elevator: {
            headline:        'La Storia Finora',
            'datacolor-desc': 'Ora: costruisco strumenti AI per una company industriale.',
            'acsoftware-desc': 'Prima: Angular enterprise per clienti esigenti.',
            'smarthy-desc':  'Inizio: primo prodotto, primi utenti, prime lezioni.',
          },
        },
        technical: {
          elevator: {
            headline:        'Esperienza',
            'datacolor-desc': 'Datacolor · UI lib Angular · micro-frontend · integrazione AI · 3+ anni',
            'acsoftware-desc': 'ACSoftware · Angular enterprise · NX + NGRX',
            'smarthy-desc':  'Smarthy · full-stack · Angular + Node.js',
          },
        },
      },
      default: {
        headline:         'Esperienza',
        'current-label':  'Attuale',
        'datacolor-role': 'Angular Frontend Developer & UI Library Owner',
        'acsoftware-role': 'Angular Developer',
        'smarthy-role':   'Full-Stack Developer',
        'datacolor-desc': 'UI library Angular, micro-frontend, integrazione AI.',
        'acsoftware-desc': 'Consulenza Angular enterprise.',
        'smarthy-desc':   'Sviluppo web full-stack.',
      },
    },
    'project-showcase': {
      developer: {
        technical: {
          elevator: {
            eyebrow:  'Consegnato',
            headline: 'Cose che ho costruito.',
            body:     'Angular + AI. Output reale.',
            ctaLabel: 'Vedi',
          },
          coffee: {
            eyebrow:  'Progetti Selezionati',
            headline: 'Alcune cose che ho costruito.',
            body:     "Progetti personali, lavori per clienti e strumenti interni — tutti Angular, la maggior parte con dell'AI. Ognuno ha risolto un problema reale.",
            ctaLabel: 'Vedi progetto',
          },
          'deep-dive': {
            eyebrow:  'Portfolio Progetti',
            headline: 'Cosa ho consegnato — selezione.',
            body:     'Una selezione curata di progetti tra generative UI, tooling Angular e integrazione AI. Decisioni architetturali, stack tecnico e problemi interessanti.',
            ctaLabel: 'Vedi progetto',
          },
        },
        creative: {
          elevator: {
            eyebrow:  'Cose Fatte',
            headline: 'Roba che ho costruito.',
            body:     'Progetti reali. Problemi reali. Angular reale.',
            ctaLabel: 'Apri',
          },
          coffee: {
            eyebrow:  'Cose Fatte',
            headline: 'Progetti di cui sono orgoglioso.',
            body:     "Non portfolio di facciata — cose che ho davvero consegnato, rotto, riparato e riconsegnato. Ognuno mi ha insegnato qualcosa.",
            ctaLabel: 'Guarda',
          },
          'deep-dive': {
            eyebrow:  'Progetti & Esperimenti',
            headline: 'Cose che ho costruito, rotto e ricostruito.',
            body:     "Da esperimenti di generative UI a strumenti in produzione — una selezione del lavoro di cui sono più orgoglioso. Le cose interessanti sono nei dettagli.",
            ctaLabel: 'Apri',
          },
        },
        formal: {
          elevator: {
            eyebrow:  'Portfolio',
            headline: 'Lavori Selezionati.',
            body:     'Applicazioni in produzione e strumenti interni.',
            ctaLabel: 'Vedi',
          },
          coffee: {
            eyebrow:  'Portfolio Progetti',
            headline: 'Lavori selezionati.',
            body:     'Una selezione di applicazioni in produzione e strumenti, tra architettura Angular, integrazione AI e design system.',
            ctaLabel: 'Vedi progetto',
          },
          'deep-dive': {
            eyebrow:  'Portfolio Professionale',
            headline: 'Progetti Selezionati.',
            body:     'I seguenti progetti rappresentano una sezione trasversale del mio lavoro professionale e personale. Ogni progetto ha incluso la consegna completa end-to-end: architettura, implementazione e deployment.',
            ctaLabel: 'Vedi progetto',
          },
        },
      },
      recruiter: {
        // ── Fallback a livello di ruolo — copre qualsiasi combo stile+tempo non definita esplicitamente ──
        eyebrow:  'Portfolio',
        headline: 'Lavori Selezionati',
        body:     "Progetti in produzione tra front-end Angular, integrazione AI e design system.",
        ctaLabel: 'Vedi progetto',
        formal: {
          elevator: {
            eyebrow:  'Portfolio',
            headline: 'Principali Deliverable.',
            body:     'Applicazioni Angular in produzione. Integrazione AI. Ownership design system.',
            ctaLabel: 'Vedi',
          },
          coffee: {
            eyebrow:  'Portfolio Progetti',
            headline: 'Deliverable Selezionati.',
            body:     'Una selezione di progetti in produzione che dimostrano sviluppo Angular full-stack, integrazione AI e ownership della UI library.',
            ctaLabel: 'Vedi progetto',
          },
          'deep-dive': {
            eyebrow:  'Portfolio Professionale',
            headline: 'Progetti Chiave & Deliverable.',
            body:     "I seguenti progetti rappresentano l'output in produzione di Erik su Angular, integrazione AI e architettura front-end. Ognuno è stato consegnato end to end — dall'architettura al deployment.",
            ctaLabel: 'Vedi progetto',
          },
        },
        creative: {
          elevator: {
            eyebrow:  'Fatto da Erik',
            headline: 'Cose arrivate in produzione.',
            body:     'Prodotti live. Non mockup.',
            ctaLabel: 'Guarda live',
          },
          coffee: {
            eyebrow:  'Lavori Live',
            headline: 'Progetti che sono stati consegnati.',
            body:     "Non esperimenti — sistemi in produzione con utenti reali. Tutti Angular, la maggior parte con AI integrata.",
            ctaLabel: 'Guarda live',
          },
          'deep-dive': {
            eyebrow:  'Portfolio',
            headline: 'Progetti in produzione — quelli che contano.',
            body:     "Il portfolio di Erik si concentra su lavoro di produzione. Generative UI, librerie di componenti, interfacce AI — costruite e deployate, non solo prototipate.",
            ctaLabel: 'Apri',
          },
        },
        technical: {
          elevator: {
            eyebrow:  'Consegnato',
            headline: 'Output in Produzione.',
            body:     'Angular 21 · AI · Hashbrown · Vercel.',
            ctaLabel: 'Repo / Live',
          },
          coffee: {
            eyebrow:  'Lavori in Produzione',
            headline: 'Cosa è in prod.',
            body:     'Angular 21, NgRx, Hashbrown, Claude API, Vercel. Tutto in produzione. Link a sorgente e live dove disponibili.',
            ctaLabel: 'Repo / Live',
          },
          'deep-dive': {
            eyebrow:  'Portfolio in Produzione',
            headline: 'Principali deliverable, livello produzione.',
            body:     'Applicazioni Angular full-stack, strumenti integrati con AI e librerie di componenti — ognuno con stack tecnico, note architetturali e risultati misurabili.',
            ctaLabel: 'Repo / Live',
          },
        },
      },
      client: {
        // ── Fallback a livello di ruolo — copre qualsiasi combo stile+tempo non definita esplicitamente ──
        eyebrow:  'Portfolio',
        headline: 'Progetti Selezionati',
        body:     'Applicazioni web e strumenti costruiti per uso reale.',
        ctaLabel: 'Vedi progetto',
        formal: {
          elevator: {
            eyebrow:  'Portfolio',
            headline: 'Progetti Selezionati.',
            body:     'Applicazioni web in produzione consegnate per le aziende.',
            ctaLabel: 'Vedi',
          },
          coffee: {
            eyebrow:  'Lavori per Clienti',
            headline: 'Deliverable selezionati.',
            body:     'Una selezione di applicazioni web in produzione — front-end Angular con integrazione AI, consegnati end to end.',
            ctaLabel: 'Vedi progetto',
          },
          'deep-dive': {
            eyebrow:  'Portfolio',
            headline: 'Lavori di Progetto Selezionati.',
            body:     "I seguenti progetti danno un'idea di cosa consegno: applicazioni Angular full-stack, funzionalità AI integrate e design system — tutto in produzione.",
            ctaLabel: 'Vedi progetto',
          },
        },
        creative: {
          elevator: {
            eyebrow:  'Lavori',
            headline: 'Prodotti che ho costruito.',
            body:     'App live. Utenti reali. AI dentro.',
            ctaLabel: 'Guarda',
          },
          coffee: {
            eyebrow:  'Portfolio',
            headline: 'Progetti andati live.',
            body:     "Applicazioni Angular con funzionalità AI, costruite da zero e messe in produzione. Non prototipi — prodotti che le persone usano davvero.",
            ctaLabel: 'Guarda',
          },
          'deep-dive': {
            eyebrow:  'Lavori di cui sono orgoglioso',
            headline: 'Progetti costruiti con cura.',
            body:     "Ogni progetto è stato costruito con attenzione — architettura ponderata, AI integrata dove aggiunge valore e consegnato tutto fino alla produzione.",
            ctaLabel: 'Apri',
          },
        },
        technical: {
          elevator: {
            eyebrow:  'Consegnato',
            headline: 'Stack in produzione.',
            body:     'Angular · AI · Vercel. Spedito.',
            ctaLabel: 'Vedi',
          },
          coffee: {
            eyebrow:  'Lavori Consegnati',
            headline: 'Cosa ho spedito.',
            body:     'Applicazioni Angular 21 con integrazioni AI — full stack, SSR, deployment su Vercel. Costruite e consegnate, non solo progettate.',
            ctaLabel: 'Vedi',
          },
          'deep-dive': {
            eyebrow:  'Portfolio Tecnico',
            headline: 'Deliverable end-to-end.',
            body:     'Front-end Angular 21, funzionalità AI, server-side rendering e deployment su Vercel — tutto livello produzione. Ogni progetto include stack, sfida e cosa è stato consegnato.',
            ctaLabel: 'Vedi',
          },
        },
      },
      default: {
        eyebrow:  'Lavori Selezionati',
        headline: 'Progetti.',
        body:     'Una selezione di cose che ho costruito.',
        ctaLabel: 'Vedi progetto',
      },
    },
  },
};
