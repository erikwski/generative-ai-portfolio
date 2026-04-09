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
  },
};
