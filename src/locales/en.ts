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
  widgets: {
    'architects-identity': {
      developer: {
        technical: {
          elevator: {
            eyebrow: 'Full-Stack Engineer',
            headline: 'I build systems that think.',
            tagline: 'Angular + AI, from spec to prod.',
            body: 'Angular 21, generative UI, Hashbrown, NgRx. I ship full-stack applications where the interface is the AI output — no fixed layout, just Claude composing components in real time.',
          },
          coffee: {
            eyebrow: 'Full-Stack Engineer / AI Architect',
            headline: "Hi, I'm Erik.",
            tagline: 'I architect Angular apps powered by Claude.',
            body: "Five years building production Angular applications. For the last two I've been deep in generative UI — systems where Claude doesn't just answer questions, it composes the interface itself. I combine NgRx signal stores, Hashbrown, and the Anthropic API to ship adaptive, AI-native front-ends.",
          },
          'deep-dive': {
            eyebrow: 'Full-Stack Engineer / AI Architect',
            headline: "Hi, I'm Erik Ferrari.",
            tagline: 'I design and build Angular applications where AI is the architect.',
            body: "I'm a full-stack engineer with five years of production experience in Angular. Over the last two years I've specialised in generative UI — a pattern where the entire layout is composed at runtime by an LLM rather than being hardcoded. I work across the full stack: Angular 21 with SSR on the front-end, Express or Vercel serverless on the back-end, and the Anthropic Claude API wired through Hashbrown. I care deeply about type safety, performance, and building things that actually ship.",
          },
        },
        creative: {
          elevator: {
            eyebrow: 'Architect / Builder',
            headline: 'I build things that think.',
            tagline: 'Angular meets generative AI — live, adaptive interfaces.',
            body: "Not just integrating AI into apps. Making AI be the app — layouts, components, copy, all composed by Claude in real time. It's what I call generative UI.",
          },
          coffee: {
            eyebrow: 'Engineer / Creative Technologist',
            headline: "Hi, I'm Erik.",
            tagline: 'I make interfaces that rewrite themselves.',
            body: "I've been building Angular apps for five years, but the last two have been different — I stopped hardcoding layouts and started letting Claude design them. Every component you're reading right now was generated on the fly. I call it generative UI, and it's the most exciting thing I've built.",
          },
          'deep-dive': {
            eyebrow: 'Engineer / Creative Technologist',
            headline: "Hi, I'm Erik Ferrari.",
            tagline: 'Generative UI engineer. I make interfaces that think for themselves.',
            body: "Five years in Angular, two years deep in the rabbit hole of generative UI — systems where the AI isn't a feature, it's the renderer. I use Claude, Hashbrown, and Angular's signal architecture to build front-ends that adapt to every user in real time. No two visitors see the same layout. I also care about the craft: clean architecture, readable code, and shipping things that actually hold up in production.",
          },
        },
        formal: {
          elevator: {
            eyebrow: 'Software Engineer',
            headline: 'Erik Ferrari.',
            tagline: 'Angular specialist. AI integration engineer.',
            body: 'Full-stack engineer with five years of production experience in Angular, now specialising in generative UI systems powered by the Anthropic Claude API.',
          },
          coffee: {
            eyebrow: 'Software Engineer',
            headline: "Hi, I'm Erik Ferrari.",
            tagline: 'Full-stack Angular engineer specialising in AI-native applications.',
            body: 'I have five years of professional experience delivering Angular applications, with a growing specialisation in AI integration and generative UI. I work with Angular 21, NgRx Signal Store, and the Anthropic API to build adaptive front-ends where the interface itself is composed by Claude at runtime.',
          },
          'deep-dive': {
            eyebrow: 'Software Engineer',
            headline: 'Erik Ferrari — Full-Stack Engineer.',
            tagline: 'Angular · AI Integration · Generative UI',
            body: 'I am a full-stack software engineer with five years of professional experience, primarily in Angular. My recent focus has been on generative UI — a pattern in which an LLM orchestrates the front-end layout dynamically, rather than serving static components. I implement this using Angular 21 with server-side rendering, NgRx Signal Store for state management, Hashbrown as the generative UI framework, and the Anthropic Claude API. I am comfortable owning complete features end to end, from architecture and API design to deployment on Vercel.',
          },
        },
      },
      recruiter: {
        formal: {
          elevator: {
            eyebrow: 'Candidate Profile',
            headline: 'Erik Ferrari',
            tagline: 'Software Engineer · Angular · AI Integration',
            body: '5+ years · Full-stack Angular developer specialising in generative UI and AI-powered applications. Open to senior and lead engineering roles.',
          },
          coffee: {
            eyebrow: 'Candidate Profile',
            headline: 'Erik Ferrari — Software Engineer',
            tagline: 'Angular · Generative UI · Anthropic API · 5+ years',
            body: 'Erik is a full-stack engineer with five years of experience building Angular applications. Over the past two years he has focused on AI integration and generative UI, shipping production systems where Claude composes interfaces dynamically. He works across the stack — Angular 21 with SSR, NgRx, Express, Vercel — and is open to senior or lead roles at product companies building AI-native products.',
          },
          'deep-dive': {
            eyebrow: 'Candidate Profile',
            headline: 'Erik Ferrari — Full-Stack Engineer',
            tagline: 'Angular · Generative UI · AI-Native Applications · 5+ years',
            body: 'Erik Ferrari is a full-stack software engineer with five years of professional experience, with a deep specialisation in Angular and AI-driven front-end systems. He is the author of this portfolio — a generative UI application where Claude composes every component at runtime based on visitor context. Technically, he covers Angular 21 (standalone components, signals, SSR), NgRx Signal Store, the Anthropic Claude API, Hashbrown generative UI framework, TypeScript, Express, and Vercel. He has experience owning features end to end, from architecture through to production. He is currently exploring senior engineering and tech lead opportunities where AI is a first-class concern.',
          },
        },
        creative: {
          elevator: {
            eyebrow: 'Meet Erik',
            headline: 'Erik Ferrari',
            tagline: 'The engineer who lets AI build the interface.',
            body: "Five years Angular. Two years making Claude the architect. He ships generative UI in production — including this portfolio you're exploring right now.",
          },
          coffee: {
            eyebrow: 'Meet Erik',
            headline: 'Erik Ferrari — Engineer & AI Builder',
            tagline: 'He stopped hardcoding layouts. Claude does that now.',
            body: "Erik has spent five years shipping Angular applications and the last two pioneering generative UI — front-ends where the AI doesn't just respond, it renders. He built this portfolio as a live demo of the concept. Angular 21, Hashbrown, NgRx, Claude API. If you're hiring for a team that wants to be ahead of the curve on AI-native products, Erik is worth a conversation.",
          },
        },
        technical: {
          elevator: {
            eyebrow: 'Candidate',
            headline: 'Erik Ferrari',
            tagline: 'Angular 21 · Generative UI · Claude API · 5 yrs',
            body: 'Ships AI-native Angular apps. Generative UI specialist. Production Hashbrown + Claude. NgRx signals, SSR, Vercel. Open to senior / lead roles.',
          },
          coffee: {
            eyebrow: 'Candidate',
            headline: 'Erik Ferrari — Full-Stack',
            tagline: 'Angular 21 · NgRx · Claude API · Hashbrown · SSR · Vercel',
            body: '5 yrs Angular. Generative UI in prod. Owns full stack: component architecture, signal store, server-side rendering, Vercel deployment. Integrated Anthropic API via Hashbrown — this portfolio is the live artefact. Available for senior eng / tech lead.',
          },
        },
      },
      client: {
        formal: {
          elevator: {
            eyebrow: 'Independent Engineer',
            headline: 'I build web apps.',
            tagline: 'Angular front-ends with AI features, delivered on time.',
            body: 'Five years delivering Angular applications for startups and scale-ups. Now offering full-stack builds with integrated AI features — from generative interfaces to LLM-powered workflows.',
          },
          coffee: {
            eyebrow: 'Independent Engineer',
            headline: "Hi, I'm Erik Ferrari.",
            tagline: 'I build Angular applications with AI built in from the ground up.',
            body: "I've spent five years building production web applications in Angular for startups and growing businesses. My current focus is helping companies integrate AI into their products properly — not as a chatbot widget, but as a core part of the interface and logic. I cover the full stack: Angular front-end, API layer, and deployment.",
          },
          'deep-dive': {
            eyebrow: 'Independent Engineer',
            headline: "Hi, I'm Erik Ferrari — Full-Stack Engineer.",
            tagline: 'Angular · AI Integration · Full-Stack · Vercel',
            body: "I build web applications for businesses that want to move fast and use AI intelligently. My primary stack is Angular 21 with server-side rendering, NgRx for state management, and the Anthropic Claude API for AI features. I have five years of production experience and can own projects end to end — from architecture and design system to API integration and deployment on Vercel. I specialise in generative UI: systems where AI composes the front-end dynamically, adapting to each user in real time. If you have a project that needs a capable front-end engineer with genuine AI expertise, I'd be glad to talk.",
          },
        },
        creative: {
          elevator: {
            eyebrow: 'Digital Architect',
            headline: 'I turn ideas into intelligent interfaces.',
            tagline: 'Your product. Powered by AI. Built right.',
            body: 'I design and build Angular applications where AI is a first-class citizen — not a chatbot bolted on at the end, but an engine that shapes the experience itself.',
          },
          coffee: {
            eyebrow: 'Digital Architect',
            headline: "Hi, I'm Erik.",
            tagline: 'I build products where the interface thinks alongside the user.',
            body: "I've been building web products for five years, and for the last two I've been obsessed with one question: what happens when AI doesn't just power the logic, but composes the interface itself? The answer is what you're looking at right now. If you have a product idea that needs that kind of thinking, let's talk.",
          },
        },
        technical: {
          elevator: {
            eyebrow: 'Full-Stack Contractor',
            headline: 'Angular + AI, end to end.',
            tagline: 'From architecture to deployment.',
            body: 'TypeScript, Angular 21, NgRx, Vercel. Claude API integration, generative UI, SSR. I spec, architect, and ship.',
          },
        },
      },
      default: {
        eyebrow: 'Erik Ferrari',
        headline: "Hi, I'm Erik.",
        tagline: 'I build Angular apps powered by AI.',
        body: 'Full-stack developer specialising in generative UI and AI-native web applications.',
      },
    },
    'evolution-timeline': {
      developer: {
        technical: {
          elevator: {
            headline: 'Career Stack',
            'datacolor-desc':
              'UI library owner · micro-frontends · AI workflow integration · Angular 21.',
            'acsoftware-desc': 'Enterprise Angular · NX monorepos · NGRX state.',
            'smarthy-desc': 'First prod role · Node.js + Angular · full-stack.',
          },
          coffee: {
            headline: 'Technical Career',
            'datacolor-desc':
              "Currently owning Datacolor's Angular UI library — design tokens, shared components, micro-frontend architecture. Now leading AI-augmented workflows using Angular 21 and the Anthropic Claude API.",
            'acsoftware-desc':
              'Enterprise consulting at ACSoftware. Large-scale Angular apps with NX monorepos and NGRX for reactive state. Focus on long-term maintainability and cross-team reuse.',
            'smarthy-desc':
              'First engineering role. Full-stack features with Angular and Node.js in a startup environment. Shipped production code and developed an eye for clean architecture.',
          },
          'deep-dive': {
            headline: 'Career Deep Dive',
            'datacolor-desc':
              'Angular Frontend Developer & UI Library Owner at Datacolor Industrial (3+ years). Full ownership of the shared component library used by all product teams. Introduced micro-frontend integration, TypeScript standards, and currently leading the adoption of AI-augmented development workflows using Angular 21 and the Anthropic Claude API via Hashbrown.',
            'acsoftware-desc':
              'Angular Developer at ACSoftware (1 year). Enterprise consultancy context — delivered maintainable, large-scale applications using NX for monorepo management and NGRX for reactive state. Strong focus on architectural quality, onboarding standards, and cross-team component reuse.',
            'smarthy-desc':
              'Full-Stack Developer at Smarthy Srl (2 years). First production engineering role. Owned full-stack features in Angular and Node.js, from spec to deployment. Developed production discipline and the fundamentals of real-world software delivery.',
          },
        },
        creative: {
          elevator: {
            headline: 'The Journey',
            'datacolor-desc': 'Now: building the components others build with.',
            'acsoftware-desc': 'Before: scaling enterprise Angular the right way.',
            'smarthy-desc': 'Started: first code, first users, first lessons.',
          },
          coffee: {
            headline: 'The Story So Far',
            'datacolor-desc':
              'Currently the person responsible for the tools that other Angular teams build from — the UI library at Datacolor. And now exploring what happens when Claude designs the interface instead of the developer.',
            'acsoftware-desc':
              'A year in the deep end of enterprise Angular — NX monorepos, NGRX, codebases that had to outlive the project. Learned how software really scales.',
            'smarthy-desc':
              'Where it started. A startup, a steep learning curve, and the first time shipping something real to real users.',
          },
          'deep-dive': {
            headline: 'The Full Story',
            'datacolor-desc':
              'Currently at Datacolor Industrial — Angular UI Library Owner. The work is about building foundations: the design system, shared components, micro-frontend integration. And lately, experimenting with generative UI, where Claude composes the interface instead of a developer hardcoding it.',
            'acsoftware-desc':
              "At ACSoftware, a year of enterprise Angular consulting. The kind of codebase where NX monorepos and NGRX aren't luxuries — they're what keeps a 200k-line app from falling apart. Learned architectural discipline.",
            'smarthy-desc':
              'Smarthy Srl was the beginning — a startup, a small team, full ownership of features from day one. Built in Angular and Node.js, shipped in production, learned the difference between code that works and code that lasts.',
          },
        },
        formal: {
          elevator: {
            headline: 'Professional Experience',
            'datacolor-desc':
              'Angular UI library ownership, micro-frontend architecture, AI workflow integration.',
            'acsoftware-desc':
              'Enterprise Angular development, architecture, and state management.',
            'smarthy-desc': 'Full-stack Angular and Node.js development.',
          },
          coffee: {
            headline: 'Professional Experience',
            'datacolor-desc':
              'Current: Angular Frontend Developer and UI Library Owner at Datacolor Industrial. Responsible for the shared design system, micro-frontend integration, and the introduction of AI-augmented development workflows.',
            'acsoftware-desc':
              'Angular developer at ACSoftware, an enterprise software consultancy. Delivered scalable Angular applications using NX monorepos and NGRX for state management.',
            'smarthy-desc':
              'Junior full-stack developer at Smarthy Srl. Built and shipped production web applications using Angular and Node.js.',
          },
        },
      },
      recruiter: {
        // ── Role-level fallback — catches any style+time combo not explicitly defined ──
        headline: 'Work History',
        'datacolor-desc':
          'Angular Frontend Developer & UI Library Owner at Datacolor Industrial (3+ years). Micro-frontend architecture, component library ownership, AI workflow integration with Angular 21 and the Anthropic Claude API.',
        'acsoftware-desc':
          'Angular Developer at ACSoftware (1 year). Enterprise consulting, NX monorepos, NGRX state management, long-term architectural quality.',
        'smarthy-desc':
          'Full-Stack Developer at Smarthy Srl (2 years). Angular + Node.js, first production engineering role in a startup environment.',
        formal: {
          elevator: {
            headline: 'Work History',
            'datacolor-desc': 'UI library ownership · micro-frontends · AI integration · 3+ yrs',
            'acsoftware-desc': 'Enterprise Angular · NX · NGRX · 1 yr',
            'smarthy-desc': 'Full-stack · Angular + Node.js · 2 yrs',
          },
          coffee: {
            headline: 'Work History',
            'datacolor-desc':
              'Angular Frontend Developer and UI Library Owner at Datacolor Industrial. Responsible for the internal component library, micro-frontend architecture, and AI workflow integration. 3+ years.',
            'acsoftware-desc':
              'Angular Developer at ACSoftware, an enterprise consultancy. Large-scale applications with NX monorepos and NGRX. Focus on long-term architectural quality. 1 year.',
            'smarthy-desc':
              'Full-Stack Developer at Smarthy Srl, a startup. Shipped production features in Angular and Node.js. First engineering role. 2 years.',
          },
          'deep-dive': {
            headline: 'Employment History',
            'datacolor-desc':
              'Angular Frontend Developer & UI Library Owner at Datacolor Industrial (3+ years). Owns the internal Angular component library used across all product teams. Responsibilities include micro-frontend integration, TypeScript standards, design system maintenance, and leading AI-augmented development workflows using Angular 21 and the Anthropic Claude API.',
            'acsoftware-desc':
              'Angular Developer at ACSoftware (1 year). Enterprise software consultancy. Delivered maintainable large-scale web applications using NX for monorepo management and NGRX for reactive state. Focus on architectural robustness and cross-team component reuse.',
            'smarthy-desc':
              'Full-Stack Developer at Smarthy Srl (2 years). First professional engineering role in a startup environment. End-to-end ownership of production features in Angular and Node.js. Developed production discipline and software delivery fundamentals.',
          },
        },
        technical: {
          elevator: {
            headline: 'Work History',
            'datacolor-desc':
              'Datacolor · UI lib owner · Angular 21 · micro-frontends · AI workflows · 3+ yrs',
            'acsoftware-desc': 'ACSoftware · Enterprise consulting · NX + NGRX · 1 yr',
            'smarthy-desc': 'Smarthy · Full-stack · Angular + Node.js · 2 yrs',
          },
          coffee: {
            headline: 'Work History',
            'datacolor-desc':
              'Datacolor Industrial — UI Library Owner. Owns the Angular component library used across all product teams. Leads micro-frontend integration + AI workflow adoption with Angular 21 + Claude API. 3+ yrs.',
            'acsoftware-desc':
              'ACSoftware — Enterprise Angular consulting. NX monorepo, NGRX reactive state, architectural standards. 1 yr.',
            'smarthy-desc':
              'Smarthy Srl — Startup, first prod role. Angular + Node.js, full feature ownership from spec to deploy. 2 yrs.',
          },
          'deep-dive': {
            headline: 'Work History',
            'datacolor-desc':
              'Datacolor Industrial (3+ yrs) · UI Library Owner · Angular 21 · Micro-frontends · AI workflows via Hashbrown + Claude API · Full design-system-to-deployment ownership.',
            'acsoftware-desc':
              'ACSoftware (1 yr) · Enterprise consulting · NX monorepo · NGRX reactive state · TypeScript strict mode · Architectural quality + cross-team component reuse.',
            'smarthy-desc':
              'Smarthy Srl (2 yrs) · First prod eng role · Angular + Node.js · Full feature ownership · spec → deploy in startup environment.',
          },
        },
        creative: {
          elevator: {
            headline: 'Career Story',
            'datacolor-desc': 'Now: the engineer who builds the tools everyone else builds with.',
            'acsoftware-desc': 'Before: mastered enterprise-scale Angular for demanding clients.',
            'smarthy-desc': 'Started: shipped real products from day one.',
          },
          coffee: {
            headline: 'Career Story',
            'datacolor-desc':
              'Datacolor Industrial — currently the person who owns the components that all other Angular teams build from. And lately, the person rewriting what "building a UI" even means with generative AI.',
            'acsoftware-desc':
              'ACSoftware — a year inside enterprise Angular at its most demanding. Learned how software scales when it really has to.',
            'smarthy-desc':
              'Smarthy Srl — the beginning. First eng role, first production app, first real users.',
          },
        },
      },
      client: {
        // ── Role-level fallback — catches any style+time combo not explicitly defined ──
        headline: 'Experience',
        'datacolor-desc':
          'Currently Angular Frontend Developer at Datacolor Industrial. Full ownership of the design system and micro-frontend architecture. Leading AI integration with Angular 21. 3+ years.',
        'acsoftware-desc':
          'Angular developer at an enterprise software consultancy. Delivered robust, scalable web applications for corporate clients.',
        'smarthy-desc':
          'Full-stack developer at a startup. Built production web applications from scratch using Angular and Node.js.',
        formal: {
          elevator: {
            headline: 'Experience',
            'datacolor-desc':
              'Current: Angular UI library and micro-frontend architecture at an industrial tech company.',
            'acsoftware-desc': 'Previous: scalable Angular solutions for enterprise clients.',
            'smarthy-desc': 'Early career: full-stack web products for a startup.',
          },
          coffee: {
            headline: 'Experience',
            'datacolor-desc':
              'Current: Angular Frontend Developer at Datacolor Industrial. Full ownership of the design system and leading AI integration for internal tooling. 3+ years.',
            'acsoftware-desc':
              'Previously: Angular developer at an enterprise consultancy. Robust, scalable web applications for corporate clients with demanding requirements.',
            'smarthy-desc':
              'Early career: Full-stack developer at a startup. Production web applications from scratch using Angular and Node.js.',
          },
        },
        creative: {
          elevator: {
            headline: 'The Story So Far',
            'datacolor-desc': 'Now: building AI-powered tools for an industrial company.',
            'acsoftware-desc': 'Before: enterprise-grade Angular for demanding clients.',
            'smarthy-desc': 'Started: first product, first users, first lessons.',
          },
        },
        technical: {
          elevator: {
            headline: 'Experience',
            'datacolor-desc':
              'Datacolor · Angular UI lib · micro-frontends · AI integration · 3+ yrs',
            'acsoftware-desc': 'ACSoftware · Enterprise Angular · NX + NGRX',
            'smarthy-desc': 'Smarthy · Full-stack · Angular + Node.js',
          },
        },
      },
      default: {
        headline: 'Experience',
        'current-label': 'Current',
        'datacolor-role': 'Angular Frontend Developer & UI Library Owner',
        'acsoftware-role': 'Angular Developer',
        'smarthy-role': 'Full-Stack Developer',
        'datacolor-desc': 'Angular UI library, micro-frontends, AI integration.',
        'acsoftware-desc': 'Enterprise Angular consulting.',
        'smarthy-desc': 'Full-stack web development.',
      },
    },
    'project-showcase': {
      developer: {
        technical: {
          elevator: {
            eyebrow: 'Shipped',
            headline: "Things I've built.",
            body: 'Angular + AI. Real output.',
            ctaLabel: 'View',
          },
          coffee: {
            eyebrow: 'Selected Projects',
            headline: "A few things I've built.",
            body: 'Side projects, client work, and internal tools — all Angular, most with some degree of AI. Each one solved a real problem.',
            ctaLabel: 'View project',
          },
          'deep-dive': {
            eyebrow: 'Project Portfolio',
            headline: "What I've shipped — selected.",
            body: 'A curated selection of projects across generative UI, Angular tooling, and AI integration. Architecture decisions, tech stack, and the interesting problems are all there.',
            ctaLabel: 'View project',
          },
        },
        creative: {
          elevator: {
            eyebrow: 'Made Things',
            headline: 'Stuff I built.',
            body: 'Real projects. Real problems. Real Angular.',
            ctaLabel: 'Open',
          },
          coffee: {
            eyebrow: 'Made Things',
            headline: "Projects I'm proud of.",
            body: 'Not portfolio fluff — actual things I shipped, broke, fixed, and shipped again. Each one taught me something.',
            ctaLabel: 'See it',
          },
          'deep-dive': {
            eyebrow: 'Projects & Experiments',
            headline: "Things I've built, broken, and rebuilt.",
            body: "From generative UI experiments to production tools — a selection of the work I'm most proud of. The interesting stuff is in the details.",
            ctaLabel: 'Open',
          },
        },
        formal: {
          elevator: {
            eyebrow: 'Portfolio',
            headline: 'Selected Work.',
            body: 'Production applications and internal tooling.',
            ctaLabel: 'View',
          },
          coffee: {
            eyebrow: 'Project Portfolio',
            headline: 'Selected work.',
            body: 'A selection of production applications and tools, spanning Angular front-end architecture, AI integration, and design system work.',
            ctaLabel: 'View project',
          },
          'deep-dive': {
            eyebrow: 'Professional Portfolio',
            headline: 'Selected Projects.',
            body: 'The following projects represent a cross-section of my professional and personal work. Each involved full end-to-end delivery: architecture, implementation, and deployment.',
            ctaLabel: 'View project',
          },
        },
      },
      recruiter: {
        // ── Role-level fallback — catches any style+time combo not explicitly defined ──
        eyebrow: 'Portfolio',
        headline: 'Selected Work',
        body: 'Production projects spanning Angular front-end, AI integration, and design systems.',
        ctaLabel: 'View project',
        formal: {
          elevator: {
            eyebrow: 'Portfolio',
            headline: 'Key Deliverables.',
            body: 'Production Angular applications. AI integration. Design system ownership.',
            ctaLabel: 'View',
          },
          coffee: {
            eyebrow: 'Project Portfolio',
            headline: 'Selected Deliverables.',
            body: 'A selection of production projects demonstrating full-stack Angular development, AI integration, and UI library ownership.',
            ctaLabel: 'View project',
          },
          'deep-dive': {
            eyebrow: 'Professional Portfolio',
            headline: 'Key Projects & Deliverables.',
            body: "The following projects represent Erik's production output across Angular, AI integration, and front-end architecture. Each was delivered end to end — from architecture through deployment.",
            ctaLabel: 'View project',
          },
        },
        creative: {
          elevator: {
            eyebrow: 'Built by Erik',
            headline: 'Things that made it to production.',
            body: 'Live products. Not mockups.',
            ctaLabel: 'See it live',
          },
          coffee: {
            eyebrow: 'Live Work',
            headline: 'Projects that shipped.',
            body: "These aren't side experiments — they're production systems with real users. All Angular, most with AI baked in.",
            ctaLabel: 'See it live',
          },
          'deep-dive': {
            eyebrow: 'Portfolio',
            headline: 'Production projects — the ones that count.',
            body: "Erik's portfolio centres on shipped, production-grade work. Generative UI, component libraries, AI-powered interfaces — built and deployed, not just prototyped.",
            ctaLabel: 'Open',
          },
        },
        technical: {
          elevator: {
            eyebrow: 'Shipped',
            headline: 'Production Output.',
            body: 'Angular 21 · AI · Hashbrown · Vercel.',
            ctaLabel: 'Repo / Live',
          },
          coffee: {
            eyebrow: 'Production Work',
            headline: "What's shipped in prod.",
            body: 'Angular 21, NgRx, Hashbrown, Claude API, Vercel. All in production. Source and live links where available.',
            ctaLabel: 'Repo / Live',
          },
          'deep-dive': {
            eyebrow: 'Production Portfolio',
            headline: 'Key deliverables, production-grade.',
            body: 'Full-stack Angular applications, AI-integrated tools, and component libraries — each with tech stack, architecture notes, and measurable outcomes.',
            ctaLabel: 'Repo / Live',
          },
        },
      },
      client: {
        // ── Role-level fallback — catches any style+time combo not explicitly defined ──
        eyebrow: 'Portfolio',
        headline: 'Selected Projects',
        body: 'Web applications and tools built for real-world use.',
        ctaLabel: 'View project',
        formal: {
          elevator: {
            eyebrow: 'Portfolio',
            headline: 'Selected Projects.',
            body: 'Production web applications delivered for businesses.',
            ctaLabel: 'View',
          },
          coffee: {
            eyebrow: 'Client Work',
            headline: 'Selected deliverables.',
            body: 'A selection of production web applications — Angular front-ends with AI integration, delivered end to end.',
            ctaLabel: 'View project',
          },
          'deep-dive': {
            eyebrow: 'Portfolio',
            headline: 'Selected Project Work.',
            body: 'The following projects give a sense of what I deliver: full-stack Angular applications, AI-integrated features, and design system work — all shipped to production.',
            ctaLabel: 'View project',
          },
        },
        creative: {
          elevator: {
            eyebrow: 'Work',
            headline: "Products I've built.",
            body: 'Live apps. Real users. AI inside.',
            ctaLabel: 'See it',
          },
          coffee: {
            eyebrow: 'Portfolio',
            headline: 'Projects that went live.',
            body: 'Angular applications with AI features, built from scratch and shipped. Not prototypes — products people actually use.',
            ctaLabel: 'See it',
          },
          'deep-dive': {
            eyebrow: "Work I'm proud of",
            headline: 'Projects built with intention.',
            body: 'Every project here was built with care — thoughtful architecture, AI integrated where it adds value, and shipped all the way to production.',
            ctaLabel: 'Open',
          },
        },
        technical: {
          elevator: {
            eyebrow: 'Delivered',
            headline: 'Production stack.',
            body: 'Angular · AI · Vercel. Shipped.',
            ctaLabel: 'View',
          },
          coffee: {
            eyebrow: 'Delivered Work',
            headline: "What I've shipped.",
            body: 'Angular 21 applications with AI integrations — full stack, SSR, Vercel deployment. Built and delivered, not just designed.',
            ctaLabel: 'View',
          },
          'deep-dive': {
            eyebrow: 'Technical Portfolio',
            headline: 'End-to-end deliverables.',
            body: 'Angular 21 front-ends, AI-powered features, server-side rendering, and Vercel deployment — all production-grade. Each project lists the stack, the challenge, and what shipped.',
            ctaLabel: 'View',
          },
        },
      },
      default: {
        eyebrow: 'Selected Work',
        headline: 'Projects.',
        body: "A selection of things I've built.",
        ctaLabel: 'View project',
      },
    },
    'skill-constellation': {
      developer: {
        technical: {
          elevator: {
            eyebrow: 'Tech Stack',
            headline: 'My Stack.',
            body: '',
          },
          coffee: {
            eyebrow: 'Technical Stack',
            headline: 'What I build with.',
            body: 'Five years of Angular, now deep in AI integration. Angular 21 and NgRx on the front, Node + Vercel on the back, and the Anthropic Claude API wiring it all together.',
          },
          'deep-dive': {
            eyebrow: 'Technical Ecosystem',
            headline: 'Full Stack Breakdown.',
            body: "A full map of my technical profile across three domains: the Angular-first front-end stack I've spent five years mastering, a backend layer built on Node.js and Vercel serverless, and the AI tooling — Claude API, Hashbrown, and LLM orchestration — that defines my current specialisation.",
          },
        },
        creative: {
          elevator: {
            eyebrow: 'The Stack',
            headline: 'The tech I live in.',
            body: '',
          },
          coffee: {
            eyebrow: 'The Toolbox',
            headline: 'The stack that makes it happen.',
            body: 'Angular at the core, AI wired in everywhere it makes sense, Node on the back when needed. Plus a growing constellation of AI tooling — Claude, Hashbrown, prompt engineering.',
          },
          'deep-dive': {
            eyebrow: 'Skills & Stack',
            headline: 'Every tool in my belt.',
            body: "Angular and TypeScript are home base. NgRx signals, SSR, NX — the front-end architecture layer. Node.js and Vercel for the back. And then the part I'm most excited about: Claude API, Hashbrown, and the emerging AI toolchain. Plus the things on the horizon.",
          },
        },
        formal: {
          elevator: {
            eyebrow: 'Core Competencies',
            headline: 'Technical Skill Set.',
            body: '',
          },
          coffee: {
            eyebrow: 'Technical Proficiencies',
            headline: 'Core Technical Competencies.',
            body: 'Primary specialisation: Angular 21 with SSR, NgRx Signal Store, TypeScript, and SCSS design systems. Secondary: Node.js, Express, and Vercel serverless. Expanding: Anthropic Claude API, Hashbrown generative UI, and LLM orchestration.',
          },
          'deep-dive': {
            eyebrow: 'Technical Profile',
            headline: 'Comprehensive Technical Skill Set.',
            body: 'My technical profile spans three domains. Front-end: Angular 21 (standalone, signals, SSR), NgRx Signal Store, TypeScript, RxJS, SCSS design systems, NX monorepos, and Storybook. Back-end: Node.js, Express, REST APIs, and Vercel serverless. AI & Agents: Anthropic Claude API, Hashbrown generative UI, prompt engineering, and LLM workflow integration.',
          },
        },
      },
      recruiter: {
        // ── Role-level fallback ──
        eyebrow: 'Technical Skills',
        headline: 'Core Competencies',
        body: 'Angular production stack with AI integration and Node.js / Vercel back-end capability.',
        formal: {
          elevator: {
            eyebrow: 'Technical Skills',
            headline: 'Core Competencies.',
            body: '',
          },
          coffee: {
            eyebrow: 'Technical Skills',
            headline: 'Key Technical Competencies.',
            body: 'Primary: Angular 21 with SSR, NgRx, TypeScript, SCSS. Secondary: Node.js, Express, Vercel. AI: Anthropic Claude API, Hashbrown, prompt engineering. 5 years production experience in Angular.',
          },
          'deep-dive': {
            eyebrow: 'Technical Skills Profile',
            headline: 'Full Technical Competency Overview.',
            body: "Erik's profile covers Angular 21 (SSR, standalone components, signal store), NgRx, RxJS, TypeScript, SCSS design systems, and NX monorepos on the front-end. Node.js, Express, REST APIs, and Vercel serverless on the back-end. AI & Agents: Anthropic Claude API, Hashbrown generative UI, prompt engineering, and LLM workflow integration.",
          },
        },
        creative: {
          elevator: {
            eyebrow: 'The Skill Set',
            headline: "What's in the toolkit.",
            body: '',
          },
          coffee: {
            eyebrow: 'Technical Toolkit',
            headline: 'The tools, the knowledge, the stack.',
            body: "Angular at expert level. Node.js as a solid secondary. AI integration at the cutting edge — Claude API, Hashbrown, generative UI. The dots show proficiency; the upcoming section shows where he's heading.",
          },
          'deep-dive': {
            eyebrow: 'Full Toolkit',
            headline: 'The complete technical picture.',
            body: 'Angular 21 is where Erik lives — five years of production-grade work, from component libraries to micro-frontend architectures to AI-native applications. The back-end layer covers Node.js and Vercel. The AI layer — Claude API, Hashbrown, prompt engineering — is his current leading edge.',
          },
        },
        technical: {
          elevator: {
            eyebrow: 'Stack',
            headline: 'Tech coverage.',
            body: '',
          },
          coffee: {
            eyebrow: 'Stack',
            headline: 'Tech stack, grouped and levelled.',
            body: 'Angular 21 · NgRx · RxJS · SSR · NX · Storybook. Node.js · Express · Vercel Serverless. Claude API · Hashbrown · Prompt Engineering · LLM Orchestration. Levels 1–5. 5 yrs prod Angular.',
          },
          'deep-dive': {
            eyebrow: 'Stack & Coverage',
            headline: 'Full stack with proficiency levels.',
            body: 'Angular 21 (5/5) · TypeScript (5/5) · RxJS (4/5) · NgRx Signals (4/5) · SCSS (4/5) · SSR (4/5) · NX (3/5) · Storybook (3/5). Node.js (3/5) · Express (3/5) · REST APIs (4/5) · Vercel (3/5). Claude API (4/5) · Hashbrown (4/5) · Prompt Engineering (4/5) · LLM Orchestration (3/5).',
          },
        },
      },
      client: {
        // ── Role-level fallback ──
        eyebrow: 'Technical Capabilities',
        headline: 'My Stack',
        body: 'Angular web applications with AI integration and full-stack capability.',
        formal: {
          elevator: {
            eyebrow: 'Technical Capabilities',
            headline: 'What I work with.',
            body: '',
          },
          coffee: {
            eyebrow: 'Technical Capabilities',
            headline: 'My technical capabilities.',
            body: 'Angular front-end specialist with five years of production experience, complemented by Node.js and Vercel back-end capability. Offering AI feature integration via the Anthropic Claude API.',
          },
          'deep-dive': {
            eyebrow: 'Technical Profile',
            headline: 'Full Technical Capabilities.',
            body: 'My front-end expertise centres on Angular 21 with SSR, NgRx, TypeScript, and design system development. On the back-end I work with Node.js, Express, and Vercel serverless. I integrate AI features using the Anthropic Claude API, Hashbrown, and prompt engineering.',
          },
        },
        creative: {
          elevator: {
            eyebrow: 'The Toolkit',
            headline: 'What I use to build your thing.',
            body: '',
          },
          coffee: {
            eyebrow: 'The Toolkit',
            headline: 'The tools I bring to your project.',
            body: 'Angular, TypeScript, and SCSS for the front-end. Node.js and Vercel for the back. Claude API and Hashbrown to wire in AI where it genuinely helps. Five years of Angular expertise, deployed for you.',
          },
          'deep-dive': {
            eyebrow: 'Skills & Tools',
            headline: 'Everything I bring to the table.',
            body: 'Angular 21 and its full ecosystem — signals, SSR, NgRx, NX, Storybook, design systems — is my specialisation. I cover Node.js and Vercel for the back-end. And I bring genuine, production-tested AI expertise: Claude API, Hashbrown generative UI, prompt engineering.',
          },
        },
        technical: {
          elevator: {
            eyebrow: 'Stack',
            headline: 'Angular-first. AI-capable.',
            body: '',
          },
          coffee: {
            eyebrow: 'Delivered with',
            headline: 'Stack and capabilities.',
            body: 'Angular 21 · NgRx · SSR · Vercel. Claude API · Hashbrown. Full-stack delivery. Proficiency levels shown per skill.',
          },
          'deep-dive': {
            eyebrow: 'Technical Stack',
            headline: 'Full stack, tools, and coverage.',
            body: 'Angular 21 (5/5), TypeScript (5/5), NgRx Signals (4/5), SSR (4/5), NX (3/5). Node.js (3/5), Express (3/5), Vercel (3/5). Claude API (4/5), Hashbrown (4/5), Prompt Engineering (4/5). Production-grade, all shipped.',
          },
        },
      },
      default: {
        eyebrow: 'Tech Stack',
        headline: 'Skills & Tools.',
        body: '',
        'upcoming-label': 'On the horizon',
        'group-frontend': 'Frontend',
        'group-backend': 'Backend',
        'group-ai': 'AI & Agents',
      },
    },
    'personal-interests': {
      developer: {
        technical: {
          elevator: {
            headline: 'Not just code.',
            funFact: 'Running gives me an excuse to eat more pizza.',
          },
          coffee: {
            headline: "When I'm not in the IDE…",
            funFact:
              'Half-marathons taught me performance optimisation is a mindset, not just a skill.',
          },
          'deep-dive': {
            headline: 'Life outside the terminal',
            funFact:
              'Climbing routes and debugging share the same loop: observe, hypothesise, attempt, repeat.',
          },
        },
        formal: {
          elevator: {
            headline: 'Beyond the keyboard.',
            funFact: 'Endurance sports build the same discipline I bring to engineering.',
          },
          coffee: {
            headline: 'A balanced developer',
            funFact: 'Board games sharpen systems thinking; running sharpens focus under pressure.',
          },
          'deep-dive': {
            headline: 'Who I am off-screen',
            funFact:
              'Strategy board games built my habit of thinking three moves ahead — a pattern I carry into architecture decisions.',
          },
        },
        creative: {
          elevator: {
            headline: 'I also exist IRL.',
            funFact: 'Climber, runner, board-game strategist — and yes, I debug on weekends too.',
          },
          coffee: {
            headline: 'Code by day, adventure by night',
            funFact:
              'Every mountain trail is a UX problem: find the path of least resistance, avoid cliffs.',
          },
          'deep-dive': {
            headline: 'The human behind the pixels',
            funFact:
              "Strategy games rewired my brain to think in graphs before I ever wrote a node. Turns out, Catan and Angular share more architecture than you'd think.",
          },
        },
      },
      recruiter: {
        formal: {
          elevator: {
            headline: 'Well-rounded professional.',
            funFact: 'Endurance sports build the same discipline I bring to every project.',
          },
          coffee: {
            headline: 'Beyond the CV',
            funFact:
              'A developer who runs half-marathons and organises team sports events is one who shows up — consistently.',
          },
          'deep-dive': {
            headline: 'Character beyond credentials',
            funFact:
              'I organise coding challenges at work and climbing weekends outside it. The common thread: building teams that perform under pressure.',
          },
        },
        creative: {
          elevator: {
            headline: 'Real human. Verified.',
            funFact: 'Google Local Guide Lv.6 — I find the best coffee in every city I deploy to.',
          },
          coffee: {
            headline: 'The non-CV stuff',
            funFact:
              "I've reviewed 200+ places as a Google Local Guide. Same eye for detail I use in code reviews.",
          },
          'deep-dive': {
            headline: 'A person, not a profile',
            funFact:
              "Running, climbing, board games — each builds something a CV can't show: grit, patience, and the ability to think ahead.",
          },
        },
        technical: {
          elevator: {
            headline: 'Dev with a life.',
            funFact: 'Runs half-marathons. Writes clean code. Correlation confirmed.',
          },
          coffee: {
            headline: 'Outside the IDE',
            funFact: 'I apply the same iterative mindset from strategy games to sprint planning.',
          },
          'deep-dive': {
            headline: 'What drives me outside work',
            funFact:
              'Trekking mountain trails, planning Wingspan moves, reviewing the best espresso spots in Emilia — each hobby sharpens a different cognitive muscle.',
          },
        },
      },
      client: {
        formal: {
          elevator: {
            headline: 'A reliable professional.',
            funFact: 'Endurance sports and project deadlines share the same discipline.',
          },
          coffee: {
            headline: "The person you'd hire",
            funFact:
              'A Google Local Guide who reviews 200+ venues is someone who pays attention to experience — yours included.',
          },
          'deep-dive': {
            headline: 'Beyond the deliverable',
            funFact:
              "A developer who runs and climbs sets goals, commits to them, and doesn't quit when it gets hard. That's the contract I bring to your project.",
          },
        },
        creative: {
          elevator: {
            headline: 'I live curiously.',
            funFact: 'Climber, runner, coffee critic. Also: your next dev.',
          },
          coffee: {
            headline: 'More than a service',
            funFact:
              "I'm a Google Local Guide because I care about quality experiences — in a café or in a product.",
          },
          'deep-dive': {
            headline: 'The maker mindset',
            funFact:
              'Exploration is a habit: in strategy games, mountain trails, and the products I help build.',
          },
        },
        technical: {
          elevator: {
            headline: 'Built different.',
            funFact: 'Side-effects of running: better focus, better code.',
          },
          coffee: {
            headline: 'Not just a ticket-closer',
            funFact:
              'Strategy board games rewired my brain for systems thinking. Your project gets that brain.',
          },
          'deep-dive': {
            headline: 'The human in the loop',
            funFact:
              'Climbing, running, and board games share a pattern: incremental progress, clear feedback loops, and knowing when to change the route.',
          },
        },
      },
      default: {
        headline: 'Beyond the Code',
        funFact:
          'Running gives me an excuse to eat more pizza — and a mindset for shipping under pressure.',
        'hobby-games-label': 'Strategy Board Games',
        'hobby-games-sub': 'Catan, Risk & Wingspan',
        'hobby-running-label': 'Running & Trekking',
        'hobby-running-sub': 'Half-marathons & mountain trails',
        'hobby-climbing-label': 'Climbing',
        'hobby-climbing-sub': 'Indoor & outdoor bouldering',
        'hobby-guide-label': 'Google Local Guide',
        'hobby-guide-sub': 'Level 6 · Food & coffee specialist',
      },
    },
    'experience-vault': {
      developer: {
        technical: {
          elevator: { headline: 'Credentials.' },
          coffee: { headline: 'What the diplomas say' },
          'deep-dive': { headline: 'The formal record' },
        },
        formal: {
          elevator: { headline: 'Formal qualifications.' },
          coffee: { headline: 'Education & certifications' },
          'deep-dive': { headline: 'Academic background' },
        },
        creative: {
          elevator: { headline: 'Paper trail.' },
          coffee: { headline: 'Where school met curiosity' },
          'deep-dive': { headline: 'The diplomas behind the code' },
        },
      },
      recruiter: {
        formal: {
          elevator: { headline: 'Qualifications at a glance.' },
          coffee: { headline: 'Education & certificates' },
          'deep-dive': { headline: 'Academic profile' },
        },
        creative: {
          elevator: { headline: 'Certified & curious.' },
          coffee: { headline: 'The credential shelf' },
          'deep-dive': { headline: 'Everything the CV lists under education' },
        },
        technical: {
          elevator: { headline: 'Degrees & certs.' },
          coffee: { headline: 'What he studied' },
          'deep-dive': { headline: 'Academic and certification track record' },
        },
      },
      client: {
        formal: {
          elevator: { headline: 'Formally qualified.' },
          coffee: { headline: 'Education background' },
          'deep-dive': { headline: 'Academic and professional qualifications' },
        },
        creative: {
          elevator: { headline: 'The vault.' },
          coffee: { headline: 'Where it all started' },
          'deep-dive': { headline: 'School, certs, and what came from them' },
        },
        technical: {
          elevator: { headline: 'Credentials.' },
          coffee: { headline: 'Degrees & certifications' },
          'deep-dive': { headline: 'The formal qualifications behind the work' },
        },
      },
      default: {
        headline: 'Credentials',
        'cred-bsc-title': "Bachelor's Degree in Computer Science",
        'cred-bsc-institution': 'Unipegaso University',
        'cred-bsc-status': 'Completed',
        'cred-english-title': 'English Language Certification',
        'cred-english-institution': 'Wall Street English',
        'cred-english-status': 'In Progress',
      },
    },
    'compatibility-engine': {
      developer: {
        formal: {
          elevator: {
            headline: 'Strong match detected.',
            subline: 'Erik aligns with your technical requirements.',
          },
          coffee: {
            headline: 'Compatibility analysis.',
            subline: 'Here is how Erik maps to your engineering needs.',
          },
          'deep-dive': {
            headline: 'Detailed compatibility report.',
            subline: "A thorough mapping of Erik's skills against your stated requirements.",
          },
        },
        creative: {
          elevator: {
            headline: 'Signals aligned.',
            subline: 'Erik speaks your language — and then some.',
          },
          coffee: {
            headline: 'You two would vibe.',
            subline: "Here's the overlap between what you need and what Erik does.",
          },
          'deep-dive': {
            headline: 'Deep signal match.',
            subline: "Let's break down exactly where Erik fits — and where he'd push beyond.",
          },
        },
        technical: {
          elevator: { headline: 'Match: high.', subline: 'Stack overlap confirmed.' },
          coffee: {
            headline: 'Tech fit analysis.',
            subline: "Erik's stack vs. your requirements — side by side.",
          },
          'deep-dive': {
            headline: 'Compatibility breakdown.',
            subline: 'Full technical alignment check: stack, patterns, architecture style.',
          },
        },
      },
      recruiter: {
        formal: {
          elevator: {
            headline: 'Candidate fit: strong.',
            subline: 'Erik meets your role criteria.',
          },
          coffee: {
            headline: 'Fit assessment summary.',
            subline: 'Key alignment points between Erik and your open position.',
          },
          'deep-dive': {
            headline: 'Full candidate compatibility report.',
            subline: "Erik's profile mapped against the role requirements in detail.",
          },
        },
        creative: {
          elevator: {
            headline: 'This one fits.',
            subline: "Erik checks the boxes — and adds a few you didn't think of.",
          },
          coffee: {
            headline: 'Why Erik stands out.',
            subline: 'Not just a match — a genuine add to your pipeline.',
          },
          'deep-dive': {
            headline: 'The full picture.',
            subline: "Here's a complete compatibility read for your requisition.",
          },
        },
        technical: {
          elevator: { headline: 'Role match: confirmed.', subline: 'Skills align with your spec.' },
          coffee: {
            headline: 'Spec vs. profile.',
            subline: "Erik's experience mapped to your job requirements.",
          },
          'deep-dive': {
            headline: 'Candidate compatibility matrix.',
            subline: "Every requirement checked against Erik's documented track record.",
          },
        },
      },
      client: {
        formal: {
          elevator: {
            headline: 'Project fit: strong.',
            subline: 'Erik is equipped for your requirements.',
          },
          coffee: {
            headline: 'Service alignment check.',
            subline: "How Erik's capabilities address your project goals.",
          },
          'deep-dive': {
            headline: 'Full engagement compatibility report.',
            subline: "A detailed look at how Erik's skills map to your project needs.",
          },
        },
        creative: {
          elevator: {
            headline: 'He gets it.',
            subline: "Erik understands what you're trying to build.",
          },
          coffee: {
            headline: 'The fit is real.',
            subline: "Here's why this collaboration would work.",
          },
          'deep-dive': {
            headline: 'Why this works.',
            subline: "A full breakdown of how Erik's approach aligns with your vision.",
          },
        },
        technical: {
          elevator: {
            headline: 'Scope match: solid.',
            subline: 'Erik covers your technical requirements.',
          },
          coffee: {
            headline: 'Project capability check.',
            subline: "Erik's skills against your stated technical needs.",
          },
          'deep-dive': {
            headline: 'Technical compatibility analysis.',
            subline: "Full mapping of Erik's capabilities to your project specification.",
          },
        },
      },
      default: {
        headline: 'Compatibility Score',
        subline: "How well Erik matches what you're looking for.",
        scoreLabel: 'Match Score',
        matchLabel: 'Why it works',
      },
    },
    'core-identity': {
      developer: {
        formal: {
          elevator: { headline: 'The engineer behind the code.', eyebrow: 'Personal Data' },
          coffee: { headline: 'Meet Erik Ferrari.', eyebrow: 'Who is Erik' },
          'deep-dive': {
            headline: 'Erik Ferrari — engineer profile.',
            eyebrow: 'Identity Overview',
          },
        },
        creative: {
          elevator: { headline: "That's me in a card.", eyebrow: 'The Human' },
          coffee: { headline: "Here's who I am.", eyebrow: 'Behind the keyboard' },
          'deep-dive': {
            headline: 'Full picture, no filter.',
            eyebrow: 'The person & the engineer',
          },
        },
        technical: {
          elevator: { headline: 'Erik. Angular dev. Italy.', eyebrow: 'Profile' },
          coffee: { headline: 'The dev behind the stack.', eyebrow: 'Dev profile' },
          'deep-dive': { headline: 'Erik Ferrari — technical profile.', eyebrow: 'Identity card' },
        },
      },
      recruiter: {
        formal: {
          elevator: { headline: 'Candidate: Erik Ferrari.', eyebrow: 'Candidate Overview' },
          coffee: { headline: "Who you're looking at.", eyebrow: 'Candidate Profile' },
          'deep-dive': { headline: 'Full candidate identity.', eyebrow: 'Candidate Data' },
        },
        creative: {
          elevator: { headline: 'This is Erik.', eyebrow: "The person you'd hire" },
          coffee: { headline: 'The face behind the resume.', eyebrow: 'Beyond the CV' },
          'deep-dive': { headline: 'More than a LinkedIn profile.', eyebrow: 'Full identity' },
        },
        technical: {
          elevator: { headline: 'Erik Ferrari, Angular dev.', eyebrow: 'Candidate info' },
          coffee: { headline: 'Candidate basics.', eyebrow: 'Key facts' },
          'deep-dive': { headline: 'Candidate identity card.', eyebrow: 'Full profile' },
        },
      },
      client: {
        formal: {
          elevator: { headline: 'Your developer: Erik Ferrari.', eyebrow: 'Point of Contact' },
          coffee: { headline: "Who you'd be working with.", eyebrow: 'Professional Profile' },
          'deep-dive': {
            headline: 'Erik Ferrari — professional identity.',
            eyebrow: 'Contact & Role',
          },
        },
        creative: {
          elevator: { headline: "Hi, I'm Erik.", eyebrow: 'The builder' },
          coffee: { headline: "The person who'd build your product.", eyebrow: 'Who I am' },
          'deep-dive': { headline: 'Erik Ferrari — the full picture.', eyebrow: 'About me' },
        },
        technical: {
          elevator: { headline: 'Erik Ferrari, frontend dev.', eyebrow: 'Contact info' },
          coffee: { headline: 'Developer overview.', eyebrow: 'Dev profile' },
          'deep-dive': { headline: 'Technical identity: Erik Ferrari.', eyebrow: 'Developer card' },
        },
      },
      default: {
        headline: 'Erik Ferrari',
        eyebrow: 'Core Identity',
        'label-name': 'Full Name',
        'label-age': 'Age',
        'label-height': 'Height / Weight',
        'label-location': 'Location',
        'label-role': 'Current Role',
        'value-name': 'Erik Ferrari',
        'value-age': '28',
        'value-height': '180 cm / 75 kg',
        'value-location': 'Reggio Emilia, Italy',
        'value-role': 'Angular Frontend Developer & UI Library Owner',
      },
    },
    'professional-objective': {
      developer: {
        formal: {
          elevator: {
            eyebrow: 'Next Target',
            headline: 'Tech Lead.',
            body: 'Moving from hands-on engineering to leading engineering teams. Setting architecture, mentoring devs, integrating AI.',
          },
          coffee: {
            eyebrow: 'Career Objective',
            headline: 'Tech Lead / Engineering Leader.',
            body: 'My goal is to step into a Tech Lead role where I can set architectural direction, establish patterns, and guide a team of developers toward high-quality output. AI integration is central to how I think about modern engineering.',
          },
          'deep-dive': {
            eyebrow: 'Professional Objective',
            headline: 'Becoming an Engineering Leader.',
            body: 'Five years of hands-on engineering have given me a clear view of what makes software teams succeed or fail. My next move is into a Tech Lead or Engineering Lead role — not to stop coding, but to multiply the impact of the engineers around me. I want to define architectural rules, establish quality gates, run technical decision-making, and bring AI-native thinking into how teams build.',
          },
        },
        creative: {
          elevator: {
            eyebrow: "Where I'm going",
            headline: 'Leading engineering teams.',
            body: 'From building to guiding. I want to set the direction — architecture, AI, culture.',
          },
          coffee: {
            eyebrow: 'The goal',
            headline: 'Tech Lead. Builder. AI evangelist.',
            body: 'I want to lead a team that ships exceptional software. That means defining how we build, not just what we build. And yes, AI-native development is non-negotiable in that vision.',
          },
          'deep-dive': {
            eyebrow: 'Objective',
            headline: 'Scaling from engineer to engineering leader.',
            body: "I've built. Now I want to help others build better. The jump to Tech Lead is about multiplying output — setting standards, running architecture sessions, embedding AI into daily engineering workflows, and creating the kind of codebase future engineers actually enjoy working in.",
          },
        },
        technical: {
          elevator: {
            eyebrow: 'Target',
            headline: 'Tech Lead.',
            body: 'Architecture, standards, AI workflows. Team leadership.',
          },
          coffee: {
            eyebrow: 'Career target',
            headline: 'Engineering Lead.',
            body: 'Scope: architecture ownership, team coaching, AI integration roadmap. Stack agnostic, Angular-first.',
          },
          'deep-dive': {
            eyebrow: 'Engineering objective',
            headline: 'Tech Lead / Principal Engineer.',
            body: 'I want to own architecture decisions, define coding standards, run technical onboarding, and integrate AI at every layer of the development workflow. I\'m looking for a team where "AI-native" means something.',
          },
        },
      },
      recruiter: {
        formal: {
          elevator: {
            eyebrow: 'Career Objective',
            headline: 'Tech Lead.',
            body: 'Erik is targeting a Tech Lead or Engineering Leader position.',
          },
          coffee: {
            eyebrow: 'Target Role',
            headline: 'Tech Lead / Engineering Leader.',
            body: 'Erik is ready for a leadership step. He wants to own architecture, guide development teams, and build AI-native engineering culture.',
          },
          'deep-dive': {
            eyebrow: 'Professional Objective',
            headline: 'Engineering leadership is the next step.',
            body: "Erik has the technical depth and the communication maturity to lead engineering teams. He's targeting roles where he can define architecture, mentor developers, establish quality standards, and drive AI adoption across the development workflow.",
          },
        },
        creative: {
          elevator: {
            eyebrow: "Where he's headed",
            headline: 'Leading engineering teams.',
            body: 'Erik is ready to lead — not just build.',
          },
          coffee: {
            eyebrow: 'The next chapter',
            headline: 'Tech Lead. Architect. Team multiplier.',
            body: "Erik's been building for five years. Now he wants to lead the room — set direction, raise standards, and bring AI into how the team thinks about development.",
          },
          'deep-dive': {
            eyebrow: 'Target',
            headline: 'From senior engineer to tech leader.',
            body: "Erik wants to move from individual contribution to team leadership — owning architecture, establishing patterns, embedding AI into engineering workflows. He's looking for a team that moves fast and cares about quality.",
          },
        },
        technical: {
          elevator: {
            eyebrow: 'Target role',
            headline: 'Tech Lead.',
            body: 'Architecture + leadership + AI. Ready now.',
          },
          coffee: {
            eyebrow: 'Career target',
            headline: 'Engineering Lead / Tech Lead.',
            body: 'Erik targets architecture ownership, team coaching, and AI-native development. He has the seniority and the technical track record.',
          },
          'deep-dive': {
            eyebrow: 'Job target',
            headline: 'Principal Engineer / Tech Lead.',
            body: 'Erik wants ownership over architectural decisions, coding standards, and AI integration roadmaps. He brings five years of production Angular experience and a clear philosophy about how engineering teams should operate.',
          },
        },
      },
      client: {
        formal: {
          elevator: {
            eyebrow: 'Professional Direction',
            headline: 'Technical Leadership.',
            body: 'Erik aims to lead technical direction on complex projects.',
          },
          coffee: {
            eyebrow: 'What Erik brings',
            headline: 'Project technical lead.',
            body: "Beyond execution, Erik can own technical decisions: architecture, stack choices, AI integration strategy. He's available for engagements that require a senior technical voice.",
          },
          'deep-dive': {
            eyebrow: "Erik's objective",
            headline: 'Senior technical leadership for your project.',
            body: "Erik doesn't just build — he can lead the technical direction of your project end-to-end. That means architecture decisions, technology selection, AI integration planning, and coordinating development effort toward measurable outcomes.",
          },
        },
        creative: {
          elevator: {
            eyebrow: 'The goal',
            headline: 'Technical lead for ambitious projects.',
            body: "Erik doesn't just code. He leads technical direction.",
          },
          coffee: {
            eyebrow: "What he's after",
            headline: 'Leading projects, not just building them.',
            body: 'Erik wants to be the technical partner for ambitious projects — not just writing code, but defining how the whole thing is built and making sure the AI is doing useful work.',
          },
          'deep-dive': {
            eyebrow: 'His objective',
            headline: 'Be the technical brain of ambitious digital products.',
            body: "Erik's goal is to work on projects where he can shape the entire technical vision — not just deliver features. He wants to define the architecture, choose the stack, integrate AI meaningfully, and make sure the product is built to last.",
          },
        },
        technical: {
          elevator: {
            eyebrow: 'Objective',
            headline: 'Technical lead.',
            body: 'Architecture, AI integration, delivery leadership.',
          },
          coffee: {
            eyebrow: 'Project scope',
            headline: 'Tech lead for full-stack projects.',
            body: 'Erik can lead architecture, delivery, and AI integration for your project. Optimal for complex Angular + AI builds.',
          },
          'deep-dive': {
            eyebrow: 'Technical objective',
            headline: 'Full technical ownership on complex projects.',
            body: "Erik targets projects where he owns the full technical scope: architecture, stack, AI integration, quality standards. He's effective as a technical lead on Angular-centric or AI-driven products.",
          },
        },
      },
      default: {
        eyebrow: 'Professional Objective',
        headline: 'Tech Lead / Engineering Leader',
        body: "Erik's goal is to move into a leadership role where he can define architecture, guide development teams, and integrate AI into engineering workflows.",
        'pillar-architecture': 'Architectural rules & code standards',
        'pillar-leadership': 'Team guidance & mentoring',
        'pillar-ai': 'AI-native engineering workflows',
      },
    },
    'team-culture': {
      developer: {
        formal: {
          elevator: {
            eyebrow: 'Team Fit',
            headline: 'Competitive. Collaborative.',
            body: 'Erik thrives in high-performance dev environments — hackathons, code reviews, and team rituals that push quality.',
          },
          coffee: {
            eyebrow: 'Culture Fit',
            headline: 'Dev challenges, team sports, high standards.',
            body: 'Erik participates in coding competitions, coordinates team sports, and brings the same competitive mindset to engineering. He works best in teams that care about both craft and culture.',
          },
          'deep-dive': {
            eyebrow: 'Team & Culture',
            headline: 'High-performance culture is non-negotiable.',
            body: 'Erik is drawn to teams that take engineering seriously and celebrate excellence — dev challenges, architecture debates, code quality rituals. Outside of work he coordinates team sports, which has given him a clear understanding of how individual performance and team cohesion reinforce each other.',
          },
        },
        creative: {
          elevator: {
            eyebrow: 'Team energy',
            headline: 'Built for team play.',
            body: 'Hackathons, code battles, five-a-side. Same competitive instinct, different arena.',
          },
          coffee: {
            eyebrow: 'How Erik vibes',
            headline: 'Competitive coder. Team player. Sports coordinator.',
            body: "Erik shows up in dev challenges, code competitions, and team sports with the same energy. He's the person who lifts the room's level.",
          },
          'deep-dive': {
            eyebrow: 'The culture fit',
            headline: 'Erik builds teams like he builds software.',
            body: 'Structured, high-performance, and fun. Erik is the kind of person who organizes the team hackathon, wins the code challenge, and books the five-a-side pitch on Friday. He believes great culture is a force multiplier — and he builds it deliberately.',
          },
        },
        technical: {
          elevator: {
            eyebrow: 'Culture',
            headline: 'Competitive. Collaborative.',
            body: 'Dev challenges, code reviews, team sports. Same drive.',
          },
          coffee: {
            eyebrow: 'Team culture',
            headline: 'Dev challenges + team sports.',
            body: 'Erik participates in coding competitions and coordinates team sports. He brings structured competitiveness to engineering teams.',
          },
          'deep-dive': {
            eyebrow: 'Culture & team dynamics',
            headline: 'Engineering excellence through team culture.',
            body: 'Erik has participated in multiple dev challenges and coding competitions, and coordinates team sports outside work. He applies the same structured, competitive mindset to both — clear objectives, honest feedback, continuous improvement.',
          },
        },
      },
      recruiter: {
        formal: {
          elevator: {
            eyebrow: 'Cultural Fit',
            headline: 'Competitive and collaborative.',
            body: 'Erik thrives in high-performance engineering cultures.',
          },
          coffee: {
            eyebrow: 'Team culture',
            headline: 'Dev challenges. Team sports. High standards.',
            body: "Erik participates in coding competitions and organizes team sports — both reflect his value for structured collaboration. He's a strong cultural addition to high-performance engineering teams.",
          },
          'deep-dive': {
            eyebrow: 'Cultural Assessment',
            headline: 'Erik raises the bar for team culture.',
            body: "Erik's combination of technical competitiveness (dev challenges, code competitions) and interpersonal investment (team sports coordinator) signals a rare profile: someone who improves both the quality of the code and the cohesion of the team.",
          },
        },
        creative: {
          elevator: {
            eyebrow: 'Culture vibes',
            headline: 'He lifts the room.',
            body: 'Code competitions, team sports — same energy, every time.',
          },
          coffee: {
            eyebrow: 'The culture card',
            headline: 'Your team would love working with Erik.',
            body: 'He wins code competitions and books the football pitch. Erik makes teams better in ways that are hard to put on a CV.',
          },
          'deep-dive': {
            eyebrow: 'Culture fit',
            headline: 'The person who makes your team culture.',
            body: 'Erik is both technically elite and genuinely invested in team dynamics. He participates in dev challenges and coordinates sports for exactly the same reason: he believes teams that compete together, build better together.',
          },
        },
        technical: {
          elevator: {
            eyebrow: 'Culture fit',
            headline: 'Dev challenges + team sports.',
            body: 'Competitive in code. Collaborative in team.',
          },
          coffee: {
            eyebrow: 'Team fit',
            headline: 'High-performance team profile.',
            body: 'Dev challenges, coding competitions, team sports. Erik brings structured competitiveness and genuine collaboration to engineering teams.',
          },
          'deep-dive': {
            eyebrow: 'Technical & cultural fit',
            headline: 'Elite contributor with strong team dynamics.',
            body: 'Erik has a track record in coding competitions and dev challenges, and is a team sports coordinator. Both reflect the same competency: structured goal-orientation combined with team cohesion.',
          },
        },
      },
      client: {
        formal: {
          elevator: {
            eyebrow: 'Team Dynamics',
            headline: 'Collaborative and driven.',
            body: 'Erik works well in teams and brings structure to collaborative environments.',
          },
          coffee: {
            eyebrow: 'How Erik collaborates',
            headline: 'Dev challenges. Team sports. Structured collaboration.',
            body: "Erik brings the same structured mindset to project collaboration that he brings to dev challenges and team sports. He's a reliable, high-performance team member.",
          },
          'deep-dive': {
            eyebrow: 'Collaboration profile',
            headline: 'A partner who raises the standard.',
            body: "Erik's track record in dev challenges and team sports is not just personal — it signals how he shows up in collaborative work contexts. He brings structured ambition, clear communication, and a genuine investment in team outcomes.",
          },
        },
        creative: {
          elevator: {
            eyebrow: 'Team energy',
            headline: 'The teammate who makes things happen.',
            body: 'Dev battles, team sports, building great products. Same instinct.',
          },
          coffee: {
            eyebrow: 'Working with Erik',
            headline: 'He makes collaboration fun and productive.',
            body: 'Erik brings the same energy to building your product that he brings to coding competitions and five-a-side football — committed, energetic, and always pushing for the win.',
          },
          'deep-dive': {
            eyebrow: 'The collaboration story',
            headline: 'He builds the team around the project.',
            body: "Erik is a natural team builder. His track record in dev challenges and team sports reflects a core belief: the best results come from teams that are both technically excellent and genuinely enjoy working together. That's what he brings to every project.",
          },
        },
        technical: {
          elevator: {
            eyebrow: 'Collaboration',
            headline: 'Competitive. Collaborative.',
            body: 'Dev challenges + team sports = reliable team dynamics.',
          },
          coffee: {
            eyebrow: 'Team profile',
            headline: 'High-performance collaborator.',
            body: 'Erik participates in coding competitions and coordinates team sports. Structured, competitive, and collaborative — same profile in project work.',
          },
          'deep-dive': {
            eyebrow: 'Team dynamics',
            headline: 'Structured team contributor with competitive edge.',
            body: 'Dev challenges, coding competitions, team sports coordination — Erik brings deliberate structure and competitive drive to collaborative contexts. Ideal for project teams that need both technical leadership and cohesion.',
          },
        },
      },
      default: {
        eyebrow: 'Team & Culture',
        headline: 'Built for high-performance teams.',
        body: 'Erik thrives in environments that combine technical excellence with strong team culture — dev challenges, competitions, and collaborative rituals.',
        'card-challenges-title': 'Dev challenges & coding competitions',
        'card-challenges-desc':
          'Active participant in hackathons and competitive coding events. Brings that same drive to team engineering.',
        'card-sports-title': 'Team sports coordinator',
        'card-sports-desc':
          'Organises and coordinates team sports — football, team activities. Believes competition builds cohesion.',
        'card-collaboration-title': 'High-performance collaboration',
        'card-collaboration-desc':
          "Erik's best work happens in teams with shared standards, honest feedback, and a culture of continuous improvement.",
      },
    },
    'lifestyle-activities': {
      developer: {
        formal: {
          elevator: { eyebrow: 'Outside the Terminal', headline: 'Active by default.' },
          coffee: { eyebrow: 'Lifestyle', headline: "Erik's activity dashboard." },
          'deep-dive': {
            eyebrow: 'Activities & Lifestyle',
            headline: 'Beyond the desk: Erik in numbers.',
          },
        },
        creative: {
          elevator: { eyebrow: 'After hours', headline: 'Erik in the wild.' },
          coffee: { eyebrow: 'The full human', headline: "When he's not shipping." },
          'deep-dive': {
            eyebrow: 'Life in motion',
            headline: "Here's what Erik tracks outside of work.",
          },
        },
        technical: {
          elevator: { eyebrow: 'Metrics', headline: 'Activity log.' },
          coffee: { eyebrow: 'Activity data', headline: "Erik's personal KPIs." },
          'deep-dive': { eyebrow: 'Stats', headline: 'Tracked activities & personal benchmarks.' },
        },
      },
      recruiter: {
        formal: {
          elevator: { eyebrow: 'Lifestyle', headline: 'Active and driven outside work too.' },
          coffee: { eyebrow: 'Personal profile', headline: "Erik's activity dashboard." },
          'deep-dive': {
            eyebrow: 'Personal activities',
            headline: 'Endurance, outdoors, and strategy.',
          },
        },
        creative: {
          elevator: {
            eyebrow: 'The full picture',
            headline: 'He brings the same energy everywhere.',
          },
          coffee: { eyebrow: 'Beyond the CV', headline: "What Erik does when he's not coding." },
          'deep-dive': {
            eyebrow: 'Life outside work',
            headline: "Erik's activity metrics — the human dashboard.",
          },
        },
        technical: {
          elevator: { eyebrow: 'Activity', headline: 'Tracked. Measured. Improved.' },
          coffee: { eyebrow: 'Personal stats', headline: 'Activity profile.' },
          'deep-dive': {
            eyebrow: 'Lifestyle metrics',
            headline: 'Activity breakdown: endurance, climbing, strategy.',
          },
        },
      },
      client: {
        formal: {
          elevator: { eyebrow: 'Lifestyle', headline: 'Active, disciplined, outdoors.' },
          coffee: { eyebrow: 'The person', headline: "Erik's personal activity profile." },
          'deep-dive': {
            eyebrow: 'Personal activities',
            headline: 'What drives Erik beyond the screen.',
          },
        },
        creative: {
          elevator: { eyebrow: 'Outside work', headline: 'The endurance athlete.' },
          coffee: { eyebrow: 'Real life', headline: 'Half-marathons, mountains, board games.' },
          'deep-dive': {
            eyebrow: 'Beyond work',
            headline: "Erik's full activity picture — from peaks to board games.",
          },
        },
        technical: {
          elevator: { eyebrow: 'Activity data', headline: 'Performance metrics: life edition.' },
          coffee: { eyebrow: 'Activity log', headline: "Erik's tracked pursuits outside code." },
          'deep-dive': {
            eyebrow: 'Lifestyle data',
            headline: 'Full activity profile: endurance, outdoor, strategy.',
          },
        },
      },
      default: {
        eyebrow: 'Lifestyle & Activities',
        headline: 'Active by default.',
        'activity-running': 'Half-marathon runner',
        'activity-trekking': 'Mountain trekking',
        'activity-climbing': 'Bouldering / Climbing',
        'activity-boardgames': 'Board games',
        'activity-localguide': 'Google Local Guide',
      },
    },
    'contextual-faq': {
      developer: {
        formal: {
          elevator: {
            eyebrow: 'Quick Answers',
            headline: 'What developers ask.',
            'q1-question': "What's your go-to stack for a complex SPA?",
            'q1-answer':
              'Angular 21 with SSR, NgRx Signal Store, and TailwindCSS or Angular Material depending on requirements. I default to a monorepo structure with clear domain boundaries and lazy-loaded feature modules.',
            'q2-question': 'Is he easy to work with?',
            'q2-answer':
              'Yes. Erik is direct, document-as-you-go, and cares about PR quality. He prefers async communication with clear context and does not skip code reviews.',
            'q3-question': 'How does he handle technical debt?',
            'q3-answer':
              'He tracks it explicitly, schedules refactor time in sprints, and makes a business case when escalation is needed. He does not let it silently accumulate.',
          },
          coffee: {
            eyebrow: 'Developer FAQ',
            headline: 'Common questions, honest answers.',
            'q1-question': "What's your go-to stack for a complex SPA?",
            'q1-answer':
              'Angular 21 with SSR for isomorphic rendering, NgRx Signal Store for reactive state, Angular Material or a custom design system, and a monorepo (usually NX) for multi-team projects. I lean on strong type safety end-to-end.',
            'q2-question': 'Is he easy to work with?',
            'q2-answer':
              "Erik codes with intent and communicates with context. He's comfortable disagreeing on architecture with well-reasoned arguments, but he ships what the team decides. Reviews are thorough but respectful.",
            'q3-question': 'How does he approach testing?',
            'q3-answer':
              'Unit tests for business logic, integration tests for feature flows, and e2e for critical paths. He writes tests as part of development, not as an afterthought, and treats a broken test as a blocker.',
          },
          'deep-dive': {
            eyebrow: 'Deep Dive FAQ',
            headline: 'Technical questions, straight answers.',
            'q1-question': "What's your go-to stack for a complex SPA?",
            'q1-answer':
              'Angular 21 with SSR (Express), NgRx Signal Store for reactive state management, Angular Material 3 with custom design tokens, and NX monorepo for scalable multi-app setups. For back-end: Node.js/Express or Vercel serverless. For AI: Anthropic Claude via Hashbrown. Every decision is type-safe, lint-enforced, and CI-tested.',
            'q2-question': 'Is he easy to work with?',
            'q2-answer':
              "Very. Erik writes code others can maintain, reviews PRs with specific actionable feedback, and communicates blockers early. He's direct without being abrasive and invests in team knowledge sharing via internal documentation and architecture decision records.",
            'q3-question': 'What does his development workflow look like?',
            'q3-answer':
              'Feature branch → TDD where logic is complex → PR with clear description and test evidence → code review → merge to main → CI gate. He maintains a strict no-broken-build policy and uses conventional commits for changelog automation.',
          },
        },
        creative: {
          elevator: {
            eyebrow: 'Quick Q&A',
            headline: 'Real talk.',
            'q1-question': "What's your stack when things get complex?",
            'q1-answer':
              'Angular 21, NgRx signals, SSR, and usually Claude doing the interesting parts. I keep the architecture clean enough that adding AI is a feature, not a hack.',
            'q2-question': "What's he like to pair with?",
            'q2-answer':
              'Fast, direct, and he actually reads the error messages. He brings ideas to PRs but lands them without drama.',
            'q3-question': 'Does he know when to stop over-engineering?',
            'q3-answer':
              "Yes. He ships pragmatically first, refactors with purpose. He's learned the hard way that perfect is the enemy of deployed.",
          },
          coffee: {
            eyebrow: 'Dev Q&A',
            headline: 'The real answers.',
            'q1-question': "What's your stack for serious SPAs?",
            'q1-answer':
              "Angular 21, SSR, NgRx signals. Monorepo when the scale justifies it. I'm also deep in Hashbrown for generative UI — that's where the interesting architecture happens lately.",
            'q2-question': 'How does he handle code reviews?',
            'q2-answer':
              "He's opinionated but not precious. He'll push back on patterns he knows cause problems, but he also picks his battles. Reviews are thorough, and he approves fast when the code is clean.",
            'q3-question': "What's his debugging style?",
            'q3-answer':
              'Systematic. He adds context breadcrumbs before reaching for the debugger. He keeps a mental model of data flow and narrows from there. He rarely needs to guess twice.',
          },
          'deep-dive': {
            eyebrow: 'Full Q&A',
            headline: 'No hedging.',
            'q1-question': "What's the most complex Angular architecture you've built?",
            'q1-answer':
              'This portfolio — a generative UI system where Claude composes Angular component trees at runtime via Hashbrown. No hardcoded layouts. NgRx signal store for visitor profile. SSR for performance. The architecture had to be flexible enough for AI-generated structures while remaining type-safe and performant.',
            'q2-question': 'What makes working with Erik different?',
            'q2-answer':
              "He thinks in systems. When he proposes a pattern, he's already considered the edge cases, the migration path, and the onboarding cost. He writes code that explains itself and documents what it can't.",
            'q3-question': 'Where does he push back?',
            'q3-answer':
              "Shortcuts that create future pain. Skipping types. Merging without review. He's respectful about it, but he won't silently let the codebase degrade.",
          },
        },
        technical: {
          elevator: {
            eyebrow: 'FAQ',
            headline: 'Tech Q&A.',
            'q1-question': 'Default SPA stack?',
            'q1-answer':
              'Angular 21 + NgRx signals + SSR. NX for monorepos. Claude/Hashbrown for AI features.',
            'q2-question': 'Code review style?',
            'q2-answer':
              'Specific, actionable comments. No nitpicks without fixes. Approves fast on clean code.',
            'q3-question': 'Test philosophy?',
            'q3-answer':
              'TDD for logic-heavy code. Broken test = blocker. Coverage as a hygiene metric, not a target.',
          },
          coffee: {
            eyebrow: 'Tech FAQ',
            headline: 'Technical questions, direct answers.',
            'q1-question': "What's the Angular stack you reach for?",
            'q1-answer':
              'Angular 21 SSR, NgRx Signal Store, Angular Material M3, NX monorepo. Anthropic/Hashbrown for AI-native features. TypeScript strict everywhere.',
            'q2-question': 'How does he collaborate on architecture?',
            'q2-answer':
              "ADRs for significant decisions. He uses RFCs for major changes that affect multiple teams. He'll argue his position clearly and implement the team decision once it's made.",
            'q3-question': 'CI/CD philosophy?',
            'q3-answer':
              'No broken builds. Conventional commits for changelog automation. Feature flags for risky changes. Environment parity between staging and prod.',
          },
          'deep-dive': {
            eyebrow: 'Technical FAQ',
            headline: 'Full technical Q&A.',
            'q1-question': "What's your Angular architecture philosophy?",
            'q1-answer':
              'Feature-first folder structure, strict separation between smart/dumb components, reactive state via NgRx signals, and a data-access layer that abstracts all I/O. Components should have zero side effects. Side effects belong in services or effects.',
            'q2-question': 'How does he handle performance?',
            'q2-answer':
              'OnPush everywhere by default. Signal-based reactivity to minimize change detection. Lazy-loaded routes. SSR for critical-path content. Core Web Vitals as a release gate, not a nice-to-have.',
            'q3-question': "What's his AI integration pattern?",
            'q3-answer':
              'Anthropic API via Hashbrown for component generation. System prompts inject visitor profile context. Components are pre-registered and type-safe. The AI decides which components to render — it does not touch raw HTML. Streaming for perceived performance.',
          },
        },
      },
      recruiter: {
        formal: {
          elevator: {
            eyebrow: 'Recruiter FAQ',
            headline: 'Key questions answered.',
            'q1-question': 'Why is Erik ready for a Tech Lead role?',
            'q1-answer':
              'Five years of production Angular engineering, two of which include leading architecture decisions on AI-native systems. He has mentored junior developers and driven cross-team technical alignment.',
            'q2-question': 'What enterprise experience does he have?',
            'q2-answer':
              'Erik has worked on large-scale Angular applications with strict accessibility, multi-locale, and SSR requirements. He has delivered inside regulated enterprise environments with CI/CD maturity requirements.',
            'q3-question': 'What is his availability?',
            'q3-answer':
              'Erik is actively evaluating new opportunities. He is available for roles starting within standard notice period. He is open to both permanent positions and long-term contracts.',
          },
          coffee: {
            eyebrow: 'Recruiter FAQ',
            headline: 'What recruiters want to know.',
            'q1-question': 'Why is Erik ready for a Tech Lead role?',
            'q1-answer':
              'He has been making architectural decisions in production for years — not just suggesting them. He has owned the technical roadmap on projects where there was no senior above him, and he has consistently delivered. The next step is formal recognition of what he has already been doing.',
            'q2-question': 'What enterprise experience does he have?',
            'q2-answer':
              'Large-scale Angular SPA development, design system ownership, accessibility compliance (WCAG 2.1 AA), multi-locale architecture, and delivery within structured enterprise teams. He has experience working with QA, product management, and cross-functional stakeholders.',
            'q3-question': 'Does he lead or support?',
            'q3-answer':
              "Both, depending on what the project needs. Erik can lead architecture for a team of 5-10 engineers or contribute as a senior IC. He adapts to the structure and fills gaps — he's not precious about titles.",
          },
          'deep-dive': {
            eyebrow: 'Full Recruiter FAQ',
            headline: 'Everything you need to qualify Erik.',
            'q1-question': 'Why is Erik ready for a Tech Lead role?',
            'q1-answer':
              'Erik has the technical depth, the communication maturity, and the track record. He has architected front-end systems from scratch, led technical onboarding for new team members, established coding standards, and driven decisions under pressure. The gap between his current title and his actual responsibilities has been widening for two years.',
            'q2-question': 'What enterprise experience does he have?',
            'q2-answer':
              'Multi-team Angular delivery, design system architecture, CI/CD pipeline ownership, accessibility and i18n compliance, Agile/Scrum process adherence, and working within enterprise-grade security and compliance requirements. He has interfaced with product management, UX, QA, and backend teams.',
            'q3-question': 'What does a successful engagement look like for Erik?',
            'q3-answer':
              'Erik thrives when given architectural ownership, a team to lead or mentor, and a product with genuine technical complexity. He performs best when there is trust, clear business context, and a culture of quality. He is energized by AI-native projects and complex generative UI challenges.',
          },
        },
        creative: {
          elevator: {
            eyebrow: 'Recruiter Q&A',
            headline: 'The short version.',
            'q1-question': 'Is Erik actually ready to lead?',
            'q1-answer':
              'Yes. He has been doing lead-level work for two years without the title. The role is the next logical step.',
            'q2-question': 'Enterprise background?',
            'q2-answer':
              'Yes — large-scale Angular, design system ownership, multi-locale, accessibility, enterprise teams.',
            'q3-question': "What's he looking for?",
            'q3-answer':
              'Ownership. A team to grow. Real technical complexity. AI-native projects are a bonus.',
          },
          coffee: {
            eyebrow: 'Recruiter Q&A',
            headline: 'What you actually want to know.',
            'q1-question': 'Is Erik ready to lead a team?',
            'q1-answer':
              "He's been doing it without the title. He sets the direction, reviews the architecture, mentors the juniors, and ships the product. The title would just make it official.",
            'q2-question': 'How deep is his enterprise experience?',
            'q2-answer':
              "Deep enough. He's delivered on multi-team Angular projects with real compliance requirements — accessibility, localisation, security. He knows how to work within enterprise structure without losing velocity.",
            'q3-question': 'What would make him say yes to a role?',
            'q3-answer':
              "Technical complexity, a team to develop, and genuine ownership. He's not motivated by perks — he's motivated by impact.",
          },
          'deep-dive': {
            eyebrow: 'Recruiter deep Q&A',
            headline: 'Everything you need.',
            'q1-question': "What's the evidence for Tech Lead readiness?",
            'q1-answer':
              'Two years of de facto tech lead responsibilities on production systems. Architecture ownership without a net. Junior developer mentoring. Cross-team alignment. The only thing missing is the headcount reporting to him.',
            'q2-question': 'How broad is his enterprise delivery experience?',
            'q2-answer':
              'Multi-team delivery, design system architecture, CI/CD pipeline ownership, WCAG 2.1 AA compliance, i18n/l10n architecture, Agile/Scrum at scale, and stakeholder management across product, QA, UX, and back-end.',
            'q3-question': 'What does his ideal next role look like?',
            'q3-answer':
              'Tech Lead or Engineering Lead at a company that is serious about front-end quality and genuinely exploring AI integration. He wants to own architecture, grow a team, and build something that lasts.',
          },
        },
        technical: {
          elevator: {
            eyebrow: 'Recruiter FAQ',
            headline: 'Fast answers.',
            'q1-question': 'Tech Lead ready?',
            'q1-answer': 'Yes. Two years of de facto lead work on production systems.',
            'q2-question': 'Enterprise Angular experience?',
            'q2-answer': 'Yes. Large-scale SPA, design systems, i18n, a11y, multi-team delivery.',
            'q3-question': 'When available?',
            'q3-answer':
              'Actively looking. Standard notice period. Permanent or long-term contract.',
          },
          coffee: {
            eyebrow: 'Recruiter FAQ',
            headline: 'The technical case.',
            'q1-question': 'What qualifies Erik for Tech Lead?',
            'q1-answer':
              '5 years Angular, 2 as de facto lead. Architecture ownership, ADRs, coding standards definition, junior mentoring, and delivery under pressure.',
            'q2-question': 'Enterprise delivery scope?',
            'q2-answer':
              'Multi-team Angular SPA delivery, design system architecture, CI/CD, WCAG 2.1 AA, i18n/l10n, and cross-functional stakeholder management.',
            'q3-question': 'Notice period and contract preference?',
            'q3-answer':
              'Standard notice period. Open to permanent roles or long-term contracts (12+ months). Remote-first preferred but open to hybrid.',
          },
          'deep-dive': {
            eyebrow: 'Recruiter Technical FAQ',
            headline: 'Full qualification data.',
            'q1-question': 'Technical evidence for Tech Lead readiness?',
            'q1-answer':
              'Architecture decision ownership on multiple production Angular SPAs. Defined and enforced coding standards. Onboarded 3+ junior developers. Led cross-team technical alignment sessions. Delivered AI-native features (Hashbrown/Claude) in production.',
            'q2-question': 'Enterprise delivery credentials?',
            'q2-answer':
              'Design system architecture and ownership, WCAG 2.1 AA compliance implementation, i18n/l10n for 3+ locales, NX monorepo governance, CI/CD pipeline ownership, Agile/Scrum process adherence at scale.',
            'q3-question': 'Target role specification?',
            'q3-answer':
              'Tech Lead or Engineering Lead, Angular-centric or AI-native front-end team, 5-15 person engineering org, ownership over architecture and quality standards, 12+ month engagement minimum.',
          },
        },
      },
      client: {
        formal: {
          elevator: {
            eyebrow: 'Client FAQ',
            headline: 'Quick answers for you.',
            'q1-question': 'How can Erik help my business move faster?',
            'q1-answer':
              'Erik brings the full stack — Angular front-end, Node back-end, AI integration, and architectural discipline. He reduces ramp-up time and sets up the codebase so your future developers can move fast without breaking things.',
            'q2-question': 'Can he handle full project setup?',
            'q2-answer':
              'Yes. Erik can set up the full project from scratch: repo structure, CI/CD, component architecture, design system integration, API layer, and deployment pipeline.',
            'q3-question': 'What kind of projects does he take?',
            'q3-answer':
              'Complex Angular SPAs, AI-powered products, design-system-first builds, and projects that need both technical leadership and strong execution.',
          },
          coffee: {
            eyebrow: 'Client FAQ',
            headline: 'What you need to know before engaging.',
            'q1-question': 'How can Erik help my business move faster?',
            'q1-answer':
              'Erik starts with architecture, not code. He maps your requirements to a technical structure that can scale, then delivers iteratively. He catches expensive mistakes early, documents as he builds, and hands off clean code that your team can own.',
            'q2-question': 'Can he handle full project setup?',
            'q2-answer':
              'Completely. From empty repo to production: monorepo setup, CI/CD pipeline, design system, API integration, AI features, deployment to Vercel or your preferred cloud. He has done it multiple times.',
            'q3-question': 'Does he work independently or need a team?',
            'q3-answer':
              'Both. Erik can work as a solo technical lead on smaller projects or collaborate inside a larger team. He adapts to your resourcing and brings the same discipline either way.',
          },
          'deep-dive': {
            eyebrow: 'Client FAQ — Full',
            headline: 'Everything before you engage.',
            'q1-question': 'How can Erik help my business move faster?',
            'q1-answer':
              'Erik compresses the time between idea and working product by eliminating technical debt from day one, building for maintainability, and integrating AI features that automate repetitive work. His architectures are designed to onboard new developers quickly, which reduces your dependency on any single person.',
            'q2-question': 'Can he handle full project setup?',
            'q2-answer':
              'Yes — from domain modelling to deployment. Repo setup, NX monorepo if needed, CI/CD with automated testing, Angular SSR, design system implementation, API layer (REST or GraphQL), AI integration via Claude/Hashbrown, and Vercel or custom deployment pipeline. He documents every decision so your team inherits context, not just code.',
            'q3-question': 'What does a typical engagement with Erik look like?',
            'q3-answer':
              'Discovery session to understand business goals and constraints → architecture proposal with trade-off analysis → iterative delivery in 2-week sprints → weekly alignment → documented handoff. He stays engaged after delivery for a transition period and is available for ongoing technical advisory.',
          },
        },
        creative: {
          elevator: {
            eyebrow: 'Client Q&A',
            headline: 'Three things to know.',
            'q1-question': 'How does Erik make my project move faster?',
            'q1-answer':
              'He builds clean from the start. No shortcuts that come back to bite. And he integrates AI where it actually saves time.',
            'q2-question': 'Can he set everything up?',
            'q2-answer':
              "Yes — repo to production. He's done it before. It takes a week, not a month.",
            'q3-question': 'What kind of projects excite him?',
            'q3-answer':
              'Ambitious products with real complexity. Especially anything where AI can be genuinely useful, not just a chatbot.',
          },
          coffee: {
            eyebrow: 'Client Q&A',
            headline: 'Straight answers.',
            'q1-question': 'How can Erik make my product move faster?',
            'q1-answer':
              "He builds it right the first time. Architecture that doesn't need to be rewritten in six months. AI where it actually reduces work. And he delivers iteratively, so you're never waiting on a big reveal.",
            'q2-question': 'Can he own the full tech side?',
            'q2-answer':
              'Yes. Front-end, back-end, AI features, CI/CD, deployment. He can be your entire technical team or the senior lead on top of yours.',
            'q3-question': 'What should I expect from working with him?',
            'q3-answer':
              "Direct communication, early warnings on risks, clean deliverables, and a codebase you'll actually understand. No black boxes.",
          },
          'deep-dive': {
            eyebrow: 'Client deep Q&A',
            headline: 'Before you commit.',
            'q1-question': 'What is the business case for hiring Erik?',
            'q1-answer':
              'You get senior-level Angular architecture, full-stack delivery capability, and AI integration expertise in one person. He reduces time-to-market, eliminates the expensive mid-project rewrites, and builds products that your future team can maintain without calling him.',
            'q2-question': 'Can he own the complete technical scope?',
            'q2-answer':
              'Fully. Architecture, front-end, back-end, AI features, design system, CI/CD, deployment, documentation. He has done end-to-end delivery solo and as a lead on team projects.',
            'q3-question': 'What makes an engagement with Erik work?',
            'q3-answer':
              'Clear business goals, trust in technical decisions, and a product worth building. He brings the discipline — you bring the vision. He does not do spec-less development or scope creep.',
          },
        },
        technical: {
          elevator: {
            eyebrow: 'Client FAQ',
            headline: 'Technical answers.',
            'q1-question': 'How does Erik accelerate delivery?',
            'q1-answer':
              'Clean architecture from day 1. Automated CI/CD. AI where it reduces manual work. Iterative delivery with early feedback loops.',
            'q2-question': 'Full-stack setup capability?',
            'q2-answer':
              'Yes. Angular SSR, Node/Express or serverless, CI/CD, Vercel deployment, API integration, AI features.',
            'q3-question': 'Project types?',
            'q3-answer':
              'Complex Angular SPAs, AI-powered products, design system builds, greenfield and brownfield.',
          },
          coffee: {
            eyebrow: 'Client technical FAQ',
            headline: 'Technical scope answered.',
            'q1-question': 'How does Erik make projects move faster?',
            'q1-answer':
              'Architecture-first delivery: feature structure, component boundaries, state management, and CI/CD are defined before the first PR. This eliminates refactor cycles later and speeds up onboarding for additional devs.',
            'q2-question': 'Full setup scope?',
            'q2-answer':
              'NX monorepo, Angular 21 SSR, NgRx Signal Store, Angular Material M3, REST/GraphQL API, Claude/Hashbrown AI integration, automated test suite, GitHub Actions CI/CD, Vercel deployment.',
            'q3-question': 'What tech does he not work with?',
            'q3-answer':
              'He is Angular-specialist but has working knowledge of React. He does not take on native mobile (iOS/Android) or embedded systems projects.',
          },
          'deep-dive': {
            eyebrow: 'Client technical FAQ',
            headline: 'Full technical scope.',
            'q1-question': 'How does Erik accelerate time-to-market?',
            'q1-answer':
              'Pre-defined architecture ADRs eliminate decision overhead. NX workspace with enforced module boundaries prevents cross-team dependency issues. Automated test gates prevent regressions. AI-generated UI components (Hashbrown) reduce front-end development time by 40%+ on qualifying use cases.',
            'q2-question': 'What does a full project setup include?',
            'q2-answer':
              'NX monorepo config, Angular 21 SSR with Express, NgRx Signal Store, Angular Material M3 with custom theme, REST API layer (OpenAPI-typed), Claude/Hashbrown AI integration, Vitest + Playwright test suite, GitHub Actions CI/CD, Vercel production deployment, architecture documentation, and onboarding guide.',
            'q3-question': 'AI integration approach?',
            'q3-answer':
              'Anthropic Claude API via Hashbrown for component-level generative UI. Server-side API route for security. Visitor context injected via system prompt. Components pre-registered and type-safe. Streaming for performance. Cost monitoring via Anthropic usage API.',
          },
        },
      },
      default: {
        eyebrow: 'FAQ',
        headline: 'Common questions.',
        'q1-question': "What's your go-to stack?",
        'q1-answer':
          'Angular 21, NgRx Signal Store, Angular Material, SSR. Claude/Hashbrown for AI features.',
        'q2-question': 'Is Erik easy to work with?',
        'q2-answer':
          'Direct, collaborative, high standards. Reviews code carefully and communicates blockers early.',
        'q3-question': "What's his availability?",
        'q3-answer':
          'Actively evaluating new opportunities. Available within standard notice period.',
      },
    },
  },
};
