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
            eyebrow:  'Full-Stack Engineer',
            headline: 'I build systems that think.',
            tagline:  'Angular + AI, from spec to prod.',
            body:     'Angular 21, generative UI, Hashbrown, NgRx. I ship full-stack applications where the interface is the AI output — no fixed layout, just Claude composing components in real time.',
          },
          coffee: {
            eyebrow:  'Full-Stack Engineer / AI Architect',
            headline: "Hi, I'm Erik.",
            tagline:  'I architect Angular apps powered by Claude.',
            body:     "Five years building production Angular applications. For the last two I've been deep in generative UI — systems where Claude doesn't just answer questions, it composes the interface itself. I combine NgRx signal stores, Hashbrown, and the Anthropic API to ship adaptive, AI-native front-ends.",
          },
          'deep-dive': {
            eyebrow:  'Full-Stack Engineer / AI Architect',
            headline: "Hi, I'm Erik Ferrari.",
            tagline:  'I design and build Angular applications where AI is the architect.',
            body:     "I'm a full-stack engineer with five years of production experience in Angular. Over the last two years I've specialised in generative UI — a pattern where the entire layout is composed at runtime by an LLM rather than being hardcoded. I work across the full stack: Angular 21 with SSR on the front-end, Express or Vercel serverless on the back-end, and the Anthropic Claude API wired through Hashbrown. I care deeply about type safety, performance, and building things that actually ship.",
          },
        },
        creative: {
          elevator: {
            eyebrow:  'Architect / Builder',
            headline: 'I build things that think.',
            tagline:  'Angular meets generative AI — live, adaptive interfaces.',
            body:     "Not just integrating AI into apps. Making AI be the app — layouts, components, copy, all composed by Claude in real time. It's what I call generative UI.",
          },
          coffee: {
            eyebrow:  'Engineer / Creative Technologist',
            headline: "Hi, I'm Erik.",
            tagline:  'I make interfaces that rewrite themselves.',
            body:     "I've been building Angular apps for five years, but the last two have been different — I stopped hardcoding layouts and started letting Claude design them. Every component you're reading right now was generated on the fly. I call it generative UI, and it's the most exciting thing I've built.",
          },
          'deep-dive': {
            eyebrow:  'Engineer / Creative Technologist',
            headline: "Hi, I'm Erik Ferrari.",
            tagline:  'Generative UI engineer. I make interfaces that think for themselves.',
            body:     "Five years in Angular, two years deep in the rabbit hole of generative UI — systems where the AI isn't a feature, it's the renderer. I use Claude, Hashbrown, and Angular's signal architecture to build front-ends that adapt to every user in real time. No two visitors see the same layout. I also care about the craft: clean architecture, readable code, and shipping things that actually hold up in production.",
          },
        },
        formal: {
          elevator: {
            eyebrow:  'Software Engineer',
            headline: 'Erik Ferrari.',
            tagline:  'Angular specialist. AI integration engineer.',
            body:     'Full-stack engineer with five years of production experience in Angular, now specialising in generative UI systems powered by the Anthropic Claude API.',
          },
          coffee: {
            eyebrow:  'Software Engineer',
            headline: "Hi, I'm Erik Ferrari.",
            tagline:  'Full-stack Angular engineer specialising in AI-native applications.',
            body:     'I have five years of professional experience delivering Angular applications, with a growing specialisation in AI integration and generative UI. I work with Angular 21, NgRx Signal Store, and the Anthropic API to build adaptive front-ends where the interface itself is composed by Claude at runtime.',
          },
          'deep-dive': {
            eyebrow:  'Software Engineer',
            headline: 'Erik Ferrari — Full-Stack Engineer.',
            tagline:  'Angular · AI Integration · Generative UI',
            body:     'I am a full-stack software engineer with five years of professional experience, primarily in Angular. My recent focus has been on generative UI — a pattern in which an LLM orchestrates the front-end layout dynamically, rather than serving static components. I implement this using Angular 21 with server-side rendering, NgRx Signal Store for state management, Hashbrown as the generative UI framework, and the Anthropic Claude API. I am comfortable owning complete features end to end, from architecture and API design to deployment on Vercel.',
          },
        },
      },
      recruiter: {
        formal: {
          elevator: {
            eyebrow:  'Candidate Profile',
            headline: 'Erik Ferrari',
            tagline:  'Software Engineer · Angular · AI Integration',
            body:     '5+ years · Full-stack Angular developer specialising in generative UI and AI-powered applications. Open to senior and lead engineering roles.',
          },
          coffee: {
            eyebrow:  'Candidate Profile',
            headline: 'Erik Ferrari — Software Engineer',
            tagline:  'Angular · Generative UI · Anthropic API · 5+ years',
            body:     'Erik is a full-stack engineer with five years of experience building Angular applications. Over the past two years he has focused on AI integration and generative UI, shipping production systems where Claude composes interfaces dynamically. He works across the stack — Angular 21 with SSR, NgRx, Express, Vercel — and is open to senior or lead roles at product companies building AI-native products.',
          },
          'deep-dive': {
            eyebrow:  'Candidate Profile',
            headline: 'Erik Ferrari — Full-Stack Engineer',
            tagline:  'Angular · Generative UI · AI-Native Applications · 5+ years',
            body:     "Erik Ferrari is a full-stack software engineer with five years of professional experience, with a deep specialisation in Angular and AI-driven front-end systems. He is the author of this portfolio — a generative UI application where Claude composes every component at runtime based on visitor context. Technically, he covers Angular 21 (standalone components, signals, SSR), NgRx Signal Store, the Anthropic Claude API, Hashbrown generative UI framework, TypeScript, Express, and Vercel. He has experience owning features end to end, from architecture through to production. He is currently exploring senior engineering and tech lead opportunities where AI is a first-class concern.",
          },
        },
        creative: {
          elevator: {
            eyebrow:  'Meet Erik',
            headline: 'Erik Ferrari',
            tagline:  'The engineer who lets AI build the interface.',
            body:     'Five years Angular. Two years making Claude the architect. He ships generative UI in production — including this portfolio you\'re exploring right now.',
          },
          coffee: {
            eyebrow:  'Meet Erik',
            headline: 'Erik Ferrari — Engineer & AI Builder',
            tagline:  'He stopped hardcoding layouts. Claude does that now.',
            body:     "Erik has spent five years shipping Angular applications and the last two pioneering generative UI — front-ends where the AI doesn't just respond, it renders. He built this portfolio as a live demo of the concept. Angular 21, Hashbrown, NgRx, Claude API. If you're hiring for a team that wants to be ahead of the curve on AI-native products, Erik is worth a conversation.",
          },
        },
        technical: {
          elevator: {
            eyebrow:  'Candidate',
            headline: 'Erik Ferrari',
            tagline:  'Angular 21 · Generative UI · Claude API · 5 yrs',
            body:     'Ships AI-native Angular apps. Generative UI specialist. Production Hashbrown + Claude. NgRx signals, SSR, Vercel. Open to senior / lead roles.',
          },
          coffee: {
            eyebrow:  'Candidate',
            headline: 'Erik Ferrari — Full-Stack',
            tagline:  'Angular 21 · NgRx · Claude API · Hashbrown · SSR · Vercel',
            body:     '5 yrs Angular. Generative UI in prod. Owns full stack: component architecture, signal store, server-side rendering, Vercel deployment. Integrated Anthropic API via Hashbrown — this portfolio is the live artefact. Available for senior eng / tech lead.',
          },
        },
      },
      client: {
        formal: {
          elevator: {
            eyebrow:  'Independent Engineer',
            headline: 'I build web apps.',
            tagline:  'Angular front-ends with AI features, delivered on time.',
            body:     'Five years delivering Angular applications for startups and scale-ups. Now offering full-stack builds with integrated AI features — from generative interfaces to LLM-powered workflows.',
          },
          coffee: {
            eyebrow:  'Independent Engineer',
            headline: "Hi, I'm Erik Ferrari.",
            tagline:  'I build Angular applications with AI built in from the ground up.',
            body:     "I've spent five years building production web applications in Angular for startups and growing businesses. My current focus is helping companies integrate AI into their products properly — not as a chatbot widget, but as a core part of the interface and logic. I cover the full stack: Angular front-end, API layer, and deployment.",
          },
          'deep-dive': {
            eyebrow:  'Independent Engineer',
            headline: "Hi, I'm Erik Ferrari — Full-Stack Engineer.",
            tagline:  'Angular · AI Integration · Full-Stack · Vercel',
            body:     "I build web applications for businesses that want to move fast and use AI intelligently. My primary stack is Angular 21 with server-side rendering, NgRx for state management, and the Anthropic Claude API for AI features. I have five years of production experience and can own projects end to end — from architecture and design system to API integration and deployment on Vercel. I specialise in generative UI: systems where AI composes the front-end dynamically, adapting to each user in real time. If you have a project that needs a capable front-end engineer with genuine AI expertise, I'd be glad to talk.",
          },
        },
        creative: {
          elevator: {
            eyebrow:  'Digital Architect',
            headline: 'I turn ideas into intelligent interfaces.',
            tagline:  'Your product. Powered by AI. Built right.',
            body:     "I design and build Angular applications where AI is a first-class citizen — not a chatbot bolted on at the end, but an engine that shapes the experience itself.",
          },
          coffee: {
            eyebrow:  'Digital Architect',
            headline: "Hi, I'm Erik.",
            tagline:  "I build products where the interface thinks alongside the user.",
            body:     "I've been building web products for five years, and for the last two I've been obsessed with one question: what happens when AI doesn't just power the logic, but composes the interface itself? The answer is what you're looking at right now. If you have a product idea that needs that kind of thinking, let's talk.",
          },
        },
        technical: {
          elevator: {
            eyebrow:  'Full-Stack Contractor',
            headline: 'Angular + AI, end to end.',
            tagline:  'From architecture to deployment.',
            body:     'TypeScript, Angular 21, NgRx, Vercel. Claude API integration, generative UI, SSR. I spec, architect, and ship.',
          },
        },
      },
      default: {
        eyebrow:  'Erik Ferrari',
        headline: "Hi, I'm Erik.",
        tagline:  'I build Angular apps powered by AI.',
        body:     'Full-stack developer specialising in generative UI and AI-native web applications.',
      },
    },
  },
};
