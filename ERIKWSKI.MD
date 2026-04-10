# Erik Ferrari — Master Content Brief

> **Purpose of this document**
> This is the canonical, persona-neutral source of truth for all portfolio content.
> It is written at coffee-break depth — enough detail for any widget to extract from,
> without framing adapted to a specific audience.
> Use this as the input when invoking `/fill-widget`, `/fill-widget-developer`,
> `/fill-widget-recruiter`, or `/fill-widget-client`.

---

## 1. Core Identity

| Field            | Value                                   |
| ---------------- | --------------------------------------- |
| Full Name        | Erik Ferrari                            |
| Alias / Brand    | Erikwski                                |
| Date of Birth    | 4 August 2000                           |
| Age              | 25 (turns 26 in August 2026)            |
| Born             | Pavullo nel Frignano (MO), Italy        |
| Grew up          | Modena, Italy                           |
| Current location | Reggio Emilia, Emilia-Romagna, Italy    |
| Height / Weight  | 169 cm / 68 kg                          |
| Current Role     | Frontend Developer (de facto tech lead) |
| Current Employer | Datacolor                               |
| Email            | ferrarierik.work@gmail.com              |
| GitHub           | github.com/erikwski                     |
| LinkedIn         | linkedin.com/in/erik-ferrari-4074161a2  |

---

## 2. Professional Summary

Erik Ferrari is a frontend software engineer, 25 years old, based in Reggio Emilia, Italy. He has been working professionally in software since June 2020, starting with jQuery and ASP.NET before discovering Angular and committing to it as his primary framework. He identifies as a **frontend specialist with strong design sensibility** — not a full-stack generalist, but with genuine back-end and design exposure that informs how he architects systems.

His primary expertise is Angular — from component architecture and reactive state management to server-side rendering and UI library ownership. He has worked across startup, enterprise consultancy, and product company contexts, giving him a broad understanding of how software teams operate at different scales and under different constraints.

At Datacolor he holds the formal title of Frontend Developer, but in practice operates as a de facto tech lead: owning architecture decisions, maintaining shared libraries, and — most recently — researching how AI can validate and enforce architectural choices through custom linting rules, Claude Code skills, and AI agents.

His current area of personal focus is generative UI: a pattern where an LLM orchestrates the front-end layout dynamically at runtime rather than serving a fixed component tree. This portfolio is the most advanced public demonstration of that work.

He is actively exploring Tech Lead and Engineering Leader opportunities where AI integration is a genuine priority, not an afterthought.

**Languages:** Italian (native), English (C1, certification in progress at Wall Street English), German (A1, studying with Duolingo).

---

## 3. Work History

### 3.1 Datacolor — Frontend Developer (de facto tech lead)

**Period:** June 2024 – Present (~2 years)
**Type:** Full-time, product company, colorimetric technology
**Formal title:** Frontend Developer

**About Datacolor:** Datacolor builds hardware and software for colorimetric tasks — measuring, communicating, and managing colour. Erik works in the textile division, building communication software for the production of new fabric collections.

**Team context:** 500+ colleagues company-wide. Erik works daily in a team of 10 developers and interacts with the broader frontend and design team (~20 people).

**Responsibilities:**

- De facto tech lead for his team: choosing and maintaining front-end architecture, establishing coding conventions, and making architectural decisions.
- Owner and maintainer of the internal shared Angular UI library (design system built from scratch — not a named public library).
- Experimenting with Domain-Driven Design (DDD) applied to the frontend, informed by the work of Angular expert Manfred Steyer. Cannot share public details.
- Researching and implementing AI-assisted architectural validation: custom linting rules, Claude Code skills, and AI agents for enforcing architectural decisions.

**Key output:** The generative AI portfolio (this website) is the flagship personal demonstration of his AI integration capability, built with the same patterns he advocates at work.

---

### 3.2 ACSoftware — Angular Developer / Consultant

**Period:** June 2022 – June 2024 (2 years)
**Type:** Full-time, enterprise software consultancy

**Clients:** Primarily insurance companies and government institutions.

**Responsibilities:**

- Angular consultant: built microfrontends and standalone web applications loaded inside client CMS platforms.
- Delivery of large-scale Angular applications for regulated enterprise environments.
- Monorepo architecture and management using NX.
- Reactive state management with NgRx.
- Architectural standards for long-term maintainability and cross-team component reuse.

**Context:** Enterprise consultancy — strict quality, compliance, delivery, and handoff requirements. Clients included insurance sector and public administration.

---

### 3.3 Smarthy Srl — Full-Stack Developer

**Period:** June 2020 – June 2022 (2 years)
**Type:** Full-time, software house / product company

**About Smarthy:** A software house building multiple custom products. Erik worked on several products simultaneously:

- A platform to manage technicians and internal colleagues
- A document and bill management system
- A CRM
- Two fully custom software projects built to individual client specifications

**Stack at Smarthy:** jQuery (client-side), ASP.NET (back-end), some Node.js in custom projects.

**Responsibilities:**

- End-to-end feature ownership across multiple products.
- First professional engineering role in a full software delivery context.
- Shipped production code across multiple concurrent products; developed production discipline and software delivery fundamentals.

**Mentor:** Paolo Nobile — his direct senior at Smarthy — taught him the fundamentals of low-level web development. They remain in contact and occasionally attend conferences together.

---

### 3.4 Freelance — Web Developer & Microservices Engineer

**Period:** Active alongside employment (stopped 2025)
**Type:** Independent / freelance

**Projects:**

- Built websites for clients (custom design, Angular front-end).
- Built a microfrontend and microservices system for a warehouse client: improved operational efficiency, product storage management, expiry-date alarm system, and custom workflow automation.

**Status:** Stopped taking freelance clients in 2025 to focus on full-time role.

---

### 3.5 Previous Experience — Technical Internships

**Period:** Before June 2020

- **misterWeb** — Technician: computer repair and maintenance.
- **infoErre** — Technician: complex system installation in-house (systems integration, on-site deployment).

---

## 4. Technical Skills

### 4.1 Frontend (Primary Specialisation)

| Technology           | Proficiency (1–5) | Notes                                                                                                 |
| -------------------- | ----------------- | ----------------------------------------------------------------------------------------------------- |
| Angular              | 5/5               | Primary framework. ~6 years production (since 2020). SSR, standalone components, signal architecture. |
| TypeScript           | 5/5               | Strict mode, type-safe patterns, generics, utility types.                                             |
| RxJS                 | 4/5               | Reactive patterns, operators, custom observables.                                                     |
| NgRx Signals         | 4/5               | Signal Store for reactive global state.                                                               |
| SCSS / Design Tokens | 4/5               | Design systems, custom theming, CSS variable architecture.                                            |
| Angular SSR          | 4/5               | Server-side rendering with Express, hydration, performance.                                           |
| NX Monorepo          | 3/5               | Multi-app workspace, enforced module boundaries, build optimisation.                                  |
| Storybook            | 3/5               | Component documentation and visual testing.                                                           |

### 4.2 Backend

| Technology        | Proficiency (1–5) | Notes                                                    |
| ----------------- | ----------------- | -------------------------------------------------------- |
| Node.js           | 3/5               | API services, serverless functions, scripting.           |
| Express           | 3/5               | REST API server, Angular SSR integration.                |
| REST APIs         | 4/5               | API design, OpenAPI spec, typed client generation.       |
| Vercel Serverless | 3/5               | Serverless functions, edge config, deployment pipelines. |
| SQL / PostgreSQL  | 2/5               | Basic data modelling, query writing, migrations.         |

### 4.3 AI & Agents

| Technology                | Proficiency (1–5) | Notes                                                                  |
| ------------------------- | ----------------- | ---------------------------------------------------------------------- |
| Anthropic Claude API      | 4/5               | Chat completions, streaming, system prompts, tool use.                 |
| Hashbrown (Generative UI) | 4/5               | Angular adapter, component registration, runtime orchestration.        |
| Prompt Engineering        | 4/5               | System context injection, visitor personalisation, structured outputs. |
| LLM Orchestration         | 3/5               | Multi-step LLM workflows, context management.                          |
| AI Workflow Integration   | 3/5               | Embedding AI into existing product and development processes.          |

### 4.4 Design

Erik has hands-on design experience beyond pure development:

- **Figma** — created UI designs at ACSoftware; reviews design system output at Datacolor.
- He self-identifies as a **frontend specialist with strong design sensibility**, not a full designer or a full-stack generalist.

### 4.5 Early-Career / Legacy Stack (no longer primary)

- **jQuery / vanilla JS** — starting point before moving to Angular; gives him low-level web understanding.
- **ASP.NET** — back-end used at Smarthy; understands request lifecycle and server-side rendering at a low level.
- **PHP** — used in early freelance projects (e.g. Alex Running Coach).
- **PayPal API** — payment integration in early projects.

### 4.6 On the Horizon (In Progress / Exploring)

- **LangChain / LangGraph** — agent orchestration frameworks
- **C1 English** — language certification in progress (Wall Street English)
- **React** — active exploration for cross-framework awareness

---

## 5. Education & Credentials

### 5.1 Bachelor's Degree — Computer Science for Digital Companies

- **Institution:** Università Telematica Pegaso (Unipegaso)
- **Score:** 109 / 110
- **Period:** October 2022 – April 2025 (concurrent with employment at ACSoftware and Datacolor)
- **Status:** Completed
- **Thesis:** "Efficiency of using WebAssembly for live complex calculations in warehouse management" — a study on using WebAssembly to perform heavy computations client-side in real time, applied to warehouse logistics. Directly connected to his freelance warehouse project.

### 5.2 English Language Certification — C1

- **Institution:** Wall Street English
- **Level:** C1 (Advanced)
- **Status:** In Progress

---

## 6. Projects

### 6.1 Generative AI Portfolio — erikwski.dev (this website)

**Type:** Personal
**Stack:** Angular 21 SSR, Hashbrown, NgRx Signal Store, Anthropic Claude API, Vercel
**Description:** A generative UI application where the interface itself is the AI output. No fixed layout — Claude composes Angular components dynamically at runtime based on the visitor's profile (role, time available, communication style). Both a personal portfolio and a live demonstration of the generative UI pattern.
**Significance:** Most architecturally complex personal project. Type-safe component registration, signal-based state, visitor-context-aware AI prompting, SSR, production deployment on Vercel.

---

### 6.2 Alexander Serra — Alex Running Coach

**Type:** Client (freelance)
**Year:** 2020
**Stack:** Vanilla JS (client), PHP (back-end), PayPal API (payments)
**Description:** Website and coaching sales dashboard for running coach Alexander Serra. Includes payment processing via PayPal, client management, and animated experience.
**Live:** https://www.alexrunningcoach.it/
**Note:** Built in 2020 — one of the first freelance projects, predating his Angular focus. Shows early full-stack capability.

---

### 6.3 Chiara Cattaneo — Artist Portfolio

**Type:** Client (freelance)
**Year:** 2020
**Stack:** Web (details TBD)
**Description:** Portfolio website for visual artist Chiara Cattaneo. Converted her PDF portfolio into an interactive navigation experience.
**Live:** https://chiara-cattaneo.vercel.app/

---

### 6.4 Giulia Vettor — Running Coach Platform

**Type:** Client (freelance)
**Stack:** Angular, Stripe (payments)
**Description:** Website for running coach Giulia Vettor. Includes coaching product sales and integrated Stripe payment flows.

---

### 6.5 Ella — Nutritionist Landing Page

**Type:** Client (freelance)
**Stack:** Web (details TBD)
**Description:** Landing page for nutritionist/dietitian "Ella". Included marketing automation and ad campaign integration.

---

### 6.6 TAMMAGENCY — Agency Website

**Type:** Client (freelance)
**Description:** Website for TAMMAGENCY.

---

### 6.7 culturaTela — Show Ticket Platform

**Type:** Client (freelance)
**Stack:** Angular
**Description:** Angular application for purchasing tickets to live shows/theatre. Full ticket purchase flow.

---

### 6.8 Markeven SRL — WordPress Consultant

**Type:** External consultant (freelance)
**Stack:** WordPress
**Description:** External consultant to Markeven SRL, resolving specific pain points in their WordPress implementation.

---

### 6.9 Warehouse Operations Platform (Confidential)

**Type:** Client (freelance)
**Stack:** Microfrontend architecture, microservices
**Description:** Microfrontend and microservices system for a warehouse client. Improved operational efficiency, product storage management, expiry-date alarm system, and custom workflow automation. **Client identity confidential — cannot be named publicly.**
**Significance:** Directly connected to his university thesis on WebAssembly for warehouse calculations.

---

### 6.10 HyperIoT (Open Source)

**Type:** Open source contribution
**Stack:** Angular (client-side)
**Description:** Individual contributor on the Angular front-end of HyperIoT, an open-source platform for IoT data management.
**Live:** https://hyperiot.cloud/

---

### 6.11 openapi-ts (Open Source)

**Type:** Open source contribution
**Description:** Contributed support for formatting IDs as `Guid` (instead of generic `uuid`) to match Zod v4 schema generation. Small but precise contribution to a widely-used TypeScript API client generator.
**PR:** https://github.com/hey-api/openapi-ts/pull/3552

---

### 6.12 CryptoMatch — Crypto Fantacalcio (Personal / Side Project)

**Type:** Personal, built with friends
**Stack:** Go (backend), Flutter (frontend)
**GitHub org:** cryptoMatch (abandoned repo, still visible)
**Description:** Fantasy league game based on cryptocurrency markets. Players assemble a portfolio of crypto assets; weekly performance generates a score similar to football fantasy league rules. Final winner determined by cumulative season score.
**Status:** Never reached production. Abandoned.
**Note:** Shows range of technological curiosity beyond the Angular/web ecosystem — Go for backend, Flutter for cross-platform frontend.

---

## 7. Architecture Philosophy

Erik's engineering philosophy is defined by the following principles:

- **Architecture before code.** Feature folder structure, clear domain boundaries, and component interaction patterns are defined before the first line of implementation.
- **DDD on the frontend.** Currently exploring Domain-Driven Design applied to Angular applications, inspired by Manfred Steyer's work. The goal is to bring the same structural rigour to frontend that DDD provides on the backend.
- **Smart / dumb separation.** Components are either stateful orchestrators or stateless presentational units — never both.
- **Reactive by default.** NgRx Signal Store for global state; OnPush change detection everywhere; signal-based reactivity to minimise unnecessary re-renders.
- **Type safety end to end.** TypeScript strict mode, typed API clients (OpenAPI-generated), typed translation keys.
- **Test as part of delivery.** TDD for logic-heavy code; unit tests for business logic; integration tests for feature flows; e2e for critical paths. A broken test is a release blocker.
- **No broken builds.** CI gates on every merge; conventional commits for changelog automation; staging parity with production.
- **AI as first-class citizen.** AI features are not plugins bolted on — they are designed into the architecture from the start, with security (server-side API routes), type safety (registered component schemas), and performance (streaming) considered up front.
- **ADR-driven decisions.** Significant architectural choices are documented as Architecture Decision Records; major cross-team changes go through an RFC process.

**Angular origin story:** Erik discovered Angular while researching microfrontend patterns in React for a freelance warehouse project. He found a body of writing on Angular and MFE that resonated deeply with his sense of architectural order. He attended ng-rome in December 2022 as his first conference — and it confirmed his commitment to the framework. He met Manfred Steyer in person at a workshop at ng-rome 2024, and follows his training remotely for frontend architecture.

**DDD on the frontend:** Domain-Driven Design applied to Angular means creating a sharply separated architecture where every concern is in the right place. The key practical benefit: you can detach or refactor a specific bounded context without touching the rest of the application. Erik is actively experimenting with this at Datacolor (details confidential) but considers himself still learning — the topic is not yet widely explored in the frontend world. His aspiration is to start a greenfield project from scratch to design a DDD-informed Angular architecture from the ground up, as a way to fully internalise it. If he could keep only one skill from everything he knows, it would be this approach — not Angular, not TypeScript, but the thinking that DDD enables.

---

## 8. Professional Objective

Erik's next career move is a **Tech Lead** or **Engineering Leader** position.

He is not leaving hands-on engineering — he is expanding his scope of impact. His goal is to own architectural direction, establish team-wide coding standards, mentor and grow junior and mid-level developers, and integrate AI-native workflows into how the engineering team builds.

**What he is looking for in a role:**

- Architectural ownership — the ability to make and enforce technical decisions
- A team to lead, mentor, or grow
- Genuine technical complexity — projects where the hard problems matter
- AI-native orientation — teams that consider LLM integration a strategic priority, not a side feature
- Culture of quality — high standards, honest feedback, continuous improvement

**What he is open to:**

- Permanent positions or long-term contracts (12+ months minimum)
- **Fully remote or hybrid** — location does not matter, open to companies anywhere in the world
- Available within standard notice period
- Angular-centric teams preferred; open to multi-framework environments at a leadership level
- **Strongly prefers flat, autonomous, low-management-overhead organisations.** Less structured environments over large corporate structures.

**What he is not looking for:**

- Short-term freelance engagements (at this stage of his career arc)
- Environments without engineering standards or code review culture
- Roles where AI integration is purely cosmetic

**Compensation philosophy:**
Not a top-three factor. If the compensation allows him to live well, he will choose a good environment, interesting work, and genuine ownership over more money. Quality of the context matters more than the number.

**Broader ambition:**
His mantra is "build the thing right." In the current AI era, he believes quality over speed is what separates good developers from the rest — when everyone can generate code quickly, the ability to write clean, maintainable, well-architected software becomes the actual differentiator. He draws on _Clean Code_ (Robert C. Martin) as a reference. Even personal projects are approached with clean architecture — as a learning practice, not just a delivery standard.

Beyond career progression, he has a longer-term aspiration to build something broadly useful for people — not just B2B software sold to specific companies. He acknowledges this is difficult to realise but it is a direction he thinks about.

**Reliability:**
He has never missed a deadline in his professional life and intends to keep it that way.

**What this portfolio is for:**
The primary goal of this portfolio is to get a job. Specifically, a Tech Lead or engineering leadership position. Everything else — conference invitations, client leads, community visibility — is secondary to that core purpose.

---

## 9. Team & Culture Profile

Erik thrives in high-performance engineering environments that combine technical excellence with strong team culture.

**Technical culture:**

- Active participant in dev challenges, hackathons, and internal coding competitions.
- Advocates for code review rituals, architecture discussions, and knowledge-sharing sessions.
- Writes code that explains itself; documents what it cannot.
- Treats engineering as a craft — not a task to ship and forget.
- Most valued code review feedback: when an existing architectural pattern starts breaking or showing strain — he wants to hear about structural problems, not just style issues.

**Team dynamics:**

- Coordinator of team sports activities (football/five-a-side) outside of work.
- Believes team cohesion and competitive excellence reinforce each other.
- Brings structured ambition to collaborative contexts: clear objectives, honest feedback, continuous improvement.
- When a project goes wrong, he reaches out to the full team and investigates collectively. He does not blame individuals — problems are solved together.
- Comfortable with disagreement; argues his position with evidence, then implements the team decision.

**Working with designers:**
When he spots an inconsistency or questionable decision in a design, he raises it openly and directly. He accepts the designer's final decision as long as there is a reason behind it — even if he disagrees. He will implement faithfully what has been decided.

**Ideal workday structure:**
Morning: focused coding. Early afternoon: meetings, technical discussions, research. Late afternoon: coding again. He is aware of and respects the "maker schedule" — deep work requires uninterrupted blocks.

**Communication style:**

- Direct and contextual — no fluff, but full context.
- Documents as he builds; does not rely on verbal tribal knowledge.
- Communicates blockers early; does not silently let problems accumulate.
- Async-friendly; provides clear context in written communication.

**Known weakness (self-identified):**
When he is strongly invested in an architectural idea, he can sometimes struggle to listen to opposing views from colleagues with the attention they deserve. He is aware of this and actively working on it. It does not happen often, but it is an area of genuine personal development.

**On being wrong:**
He accepts it, apologises when appropriate, and moves on. Everyone fails. There is no defensiveness in his account of this — it is simply part of how work functions.

**On regrets:**
None about the path taken so far.

**Most valued single skill:**
If he could keep only one thing from everything he knows — not Angular, not TypeScript — it would be **how to approach Domain-Driven Design on the frontend**. The architectural thinking it enables is more transferable and more durable than any specific technology.

---

## 10. Personal Interests & Lifestyle

**Running:**

- Personal best: **1h 39min** at the Mezza Maratona d'Italia (Maranello → Modena).
- First full marathon planned: **May 2026, Trieste** (upcoming at time of writing).
- Running as endurance and discipline practice, not just fitness.

**Climbing:**

- Started approximately 1 year ago.
- Current level: **6B bouldering** (Fontainebleau scale) — a solid intermediate-advanced level for one year in.
- Indoor and outdoor bouldering.

**Board Games & Tabletop:**

- Favourite board games: **Root** (prefers Vagabond or Riverfolk factions) and **Betrayal at House on the Hill**.
- Active **D&D player** — High Elf Mage, in a campaign running since January 2024. Player, not DM.
- Tabletop as a form of systems thinking, narrative, and social engagement — not just strategy.

**Google Local Guide:**

- Level 6.
- **1,121 total contributions**, 100+ photos.
- Focus: food and coffee.

**Nature:**

- Does not enjoy travelling much. Prefers spending time in nature.
- Day hikes, camping, mountain stays, or simply running and walking in a park.
- Recharges outdoors rather than in cities or nightlife settings.

**Social energy:**

- Extroverted in the right contexts — technical communities, conferences, peer groups.
- Loses social comfort in unstructured social settings (pubs, clubs, late nights out).

**First impression vs reality:**

- People often do not expect him to be a serious athlete on first meeting. The half-marathon PB and climbing level tend to surprise people.

**Motivation:**

- Driven primarily by helping people improve themselves and by seeing projects reach completion and be used. Not primarily motivated by recognition.

**Music & hi-fi:**
Erik has a genuine passion for Italian music. His favourite artists:

- **Salmo** — the artist whose Instagram handle ("Lebonski") gave birth to the "Erikwski" name
- **Franco Battiato** — Italian singer-songwriter and composer. His album "Voce del padrone" is a must for me to sing, dance or just relax.
- **Lucio Dalla** — Italian singer-songwriter, one of the most beloved voices in Italian music. Love the book "Lucio c'é" from it's artistic director that say a lot about him and help my understand his music
- **Nayt** — Representative of what my generation suffer and all the difficulties
- **Venerus** — Italian singer-songwriter, known for genre-blending and rich arrangements. Insane music

He listens on vinyl. He owns a hi-fi setup and cares about audio quality the same way he cares about code quality: the details matter, and you can hear (or read) the difference. This is not on his CV and is rarely the first thing people know about him — but it is a real and defining part of who he is.

**The pattern across interests:** incremental progress, clear feedback loops, deliberate improvement — the same cognitive structure he applies to engineering.

**The non-CV chapter:**
For three years Erik worked as a waiter in a pizzeria. He managed nearly everything: tables, service flow, restocking, and even some internal tech — fixing network issues, assigning fixed IPs, opening ports on the router so delivery staff could access the ordering system from outside. The instinct to fix broken things is not new. For six months of that period, he was simultaneously working those shifts to pay his bills while starting his first software job. The hardest part was not just the physical exhaustion — it was that with no time or energy left, it became impossible to build relationships or a social life outside of work. He does not hide this period; it is part of who he is and explains the discipline and self-reliance visible throughout his career. It also connects to his food and coffee focus as a Google Local Guide — the service industry shaped his eye for quality experience.

---

## 11. Personal Brand

**"Erikwski" origin:**
A combination of his name "Erik" and "Lebonski" — the Instagram handle of **Salmo** (Italian rapper/artist), his favourite singer at the time. The suffix "-wski" stuck to the point where his friends now call him "wski" in person. It was not designed as a brand — it emerged organically and he kept it.
**Usage note:** The Salmo/Lebonski connection should only be referenced in creative tone + deep-dive (long) content contexts. It is too personal/niche for formal or short formats.

**Visual identity:**
Dark, minimalist aesthetic. Electric Red accent, Brand Gold from the logo gradient. Inter font. The logo exists in three layouts (full, horizontal, mobile). There is no dragon or goat mascot — any prior reference to one was incorrect.

**Tone:**
The brand is technical and personal simultaneously. Not corporate. Not trying to be a startup. Just Erik, who happens to build serious software.

---

## 13. Common Questions & Honest Answers

These are the factual bases for FAQ widget content, without role-specific framing.

**Q: What is Erik's go-to stack for a complex SPA?**
Angular 21 with SSR (Express), NgRx Signal Store for reactive state, Angular Material M3 with custom design tokens, and NX monorepo for multi-app setups. For back-end: Node.js/Express or Vercel serverless. For AI: Anthropic Claude API via Hashbrown. TypeScript strict mode throughout; CI-tested with conventional commits.

**Q: Is he easy to work with?**
Direct, high-standards, document-as-you-go. He writes PRs with clear descriptions, reviews with specific actionable feedback, and communicates blockers before they become problems. He will disagree on architecture with evidence — and implement the team's decision once it is made. He does not skip code reviews or let technical debt silently accumulate.

**Q: How does he handle testing?**
TDD for logic-heavy code. Unit tests for business logic, integration tests for feature flows, e2e for critical paths. Broken tests are blockers, not warnings. Coverage is a hygiene metric, not a target.

**Q: How does he approach performance?**
OnPush everywhere by default. Signal-based reactivity to minimise change detection. Lazy-loaded routes. SSR for critical-path content. Core Web Vitals as a release gate — not a nice-to-have.

**Q: What is his AI integration pattern?**
Anthropic Claude API via Hashbrown for component-level generative UI. Server-side API route for security (never client-side). Visitor context injected via system prompt. Components pre-registered and type-safe — the AI decides which components to render, not raw HTML. Streaming for perceived performance.

**Q: Why is he ready for a Tech Lead role?**
He has been performing lead-level responsibilities for approximately two years: architecture ownership on production systems, junior developer mentoring, cross-team alignment, and delivery without a technical senior above him. The gap between his current title and actual responsibilities has been widening. The next step formalises what he is already doing.

**Q: What enterprise experience does he have?**
Large-scale Angular SPA delivery, design system architecture and ownership, NX monorepo governance, WCAG 2.1 AA accessibility compliance, i18n/l10n for 3+ locales, CI/CD pipeline ownership, and Agile/Scrum at scale. Cross-functional stakeholder management across product, QA, UX, and back-end teams.

**Q: What is his availability?**
Actively evaluating new opportunities. Available within a standard notice period. Open to permanent positions or long-term contracts (12+ months). Remote-first preferred; hybrid negotiable.

**Q: What kind of client projects does he take?**
Complex Angular SPAs, AI-powered web products, design-system-first builds, and projects with genuine architectural scope. Full-stack engagement from architecture to Vercel deployment. He does not take spec-less projects or native mobile (iOS/Android) work.

**Q: What does a client engagement with him look like?**
Discovery session (business goals and constraints) → architecture proposal with trade-off analysis → iterative delivery in two-week sprints → weekly alignment → documented handoff. He stays engaged post-delivery for a transition period and is available for ongoing technical advisory.

---

## 14. Technical Opinions

**Angular vs React:**
Angular's strong architecture and enforced design patterns mean that any Angular project has a recognisable, consistent structure — he can onboard without needing extensive documentation. React's flexibility makes every project structurally different, which he finds unpredictable and mentally expensive. He does not dislike React, but he strongly prefers opinionated frameworks.

**Backend preference:**
No strong back-end opinions. For personal/small projects: SSR with Vercel serverless functions or Node.js. For complex projects: .NET (C#) because its structural concepts — dependency injection, module organisation, strict typing — map closely to how Angular is architected. The mental model transfers.

**WebAssembly:**
Did a deep-dive for his thesis. Conclusion: useful for a narrow set of computationally intensive, browser-based use cases. Probably irrelevant for 99.99% of typical web projects. Not something he plans to develop further unless a specific problem demands it.

**AI replacing developers / future of frontend:**
He believes the frontend as we know it today will cease to exist in the next 5 to 10 years. He does not know exactly how he will evolve alongside that change — but he accepts it as a given and stays curious rather than defensive.

**What excites him about AI in software:**
The freedom to learn a new technology in three days and immediately build something real. The speed from "I want to understand this" to "I have shipped this" has collapsed. That compression is genuinely exciting.

**What concerns him about AI in software:**
Code quality and security. When everyone can generate code quickly, the discipline to write clean, secure, maintainable software will erode for many teams. He believes the next several years will produce a significant amount of brittle, insecure software — and that the developers who hold the line on quality will matter more, not less.

**Reading list — books that shaped his thinking:**

- _Clean Code_ — Robert C. Martin (all-time favourite; quality as a daily standard)
- _Clean Architecture_ — Robert C. Martin
- _Residues, Time, Uncertainty and Change in Software Architecture_ (exact title as recalled — precise edition TBD)
- _AI Engineering_ — Chip Huyen (2024)
- _Building Evolutionary Architectures_ — Ford, Parsons, Kua
- _JavaScript & jQuery: Sviluppare interfacce web interattive_ — the book he used to learn JavaScript and jQuery at the start of his career. Most personally meaningful — the one that started everything.

**What makes a role immediately attractive:**

- Freedom to make technical choices
- Trust from the company that he will own the project
- Products that are public and used by a large number of people — real impact, not internal tooling
- A design team that understands the value of design — not just execution, but genuine design thinking

**Sector aspiration:**
Health. He would like to work on software that improves the efficiency of hospitals and the Italian healthcare system specifically. He sees it as a domain where good software engineering genuinely changes outcomes for people.

**What makes a first interview go wrong:**
In his first ever interview, he forgot to ask a single question about the company and accepted the role without knowing anything about it. He learned: always research, always ask.

**Preferred organisation structure:**
Flat, high-autonomy, low-management overhead. Horizontal over hierarchical. He performs best where ownership is real and decisions can be made without cascading approval chains. Large, structured companies tend to be blocked and slow — he prefers less structured environments.

**What "good engineering culture" looks like in practice:**
The most concrete signal: when something goes wrong — a major error, a production incident — the team takes collective ownership rather than assigning blame. Accountability without punishment. That is the indicator he trusts most.

**Italian tech industry opinion:**
A significant amount of Italian software still runs on desktop applications with poor UI and UX — outdated interfaces for processes that could and should be modern web experiences. He finds this frustrating. It represents both a problem and an opportunity.

---

## 15. Community & Public Presence

**Conferences attended:**

- AWS conference (May 2022)
- ng-rome (December 2022) — first conference, formative
- ng-rome (2024) — attended Manfred Steyer's workshop in person
- Modena Dev Fest (2024 and 2025)
- WebDay (2026)
- Various smaller local events in Reggio Emilia

**Mentors & key figures:**

- **Paolo Nobile** (Smarthy) — taught him the foundations of low-level web development. Still at Smarthy, still in contact, attend conferences together occasionally. "One of the best devs I've ever worked with."

- **Giovanni Colacitti** (ACSoftware, manager) — had the patience to teach him every design pattern Angular uses and how to leverage them. They discussed almost every technical topic. A formative intellectual mentor who shaped his understanding of patterns and architecture.

- **Gabriele Campi** (Datacolor, current manager) — the manager Erik would emulate if he becomes one himself. Highly empathic, helpful, and technically excellent. The person who made Erik fall in love with software architecture. The defining moment: at ng-rome, they talked for hours about what should go in a domain library, what it should represent, and where its boundaries lie. A model for what technical leadership looks like at its best.

- **Manfred Steyer** — Angular GDE and author; the primary influence on Erik's exploration of DDD applied to the frontend. Met in person at ng-rome 2024 workshop; follows his training remotely.

- **Fabio Biondi** — the person who represents Angular in Italy for Erik. Every speech and post is considered "pure gold." A trusted voice for staying current on the Angular ecosystem.

- **Soumaya Erradi** — admired for the consistent quality and variety of her conference talks. Every speech delivers different, concrete, actionable ideas. Valued for how she makes topics immediately applicable.

**Most meaningful example of helping someone grow:**
His best friend was part of his early career and is now an Angular developer at Datacolor — brought there by Erik through the company's referral programme. Watching that growth from first steps to professional Angular developer at the same company is the clearest example of the impact that motivates him most.

**Public writing:** None yet.

**Speaking ambition:** Has not spoken publicly. Wants to speak at a conference on how to maintain architectural discipline in the AI era — not just through tooling and AI skills, but through harder structural constraints that the AI must respect. Specific, technical, and opinionated.

**Blog/newsletter:** None currently.

---

## 16. Contact

| Channel  | Value                                  |
| -------- | -------------------------------------- |
| Email    | ferrarierik.work@gmail.com             |
| GitHub   | github.com/erikwski                    |
| LinkedIn | linkedin.com/in/erik-ferrari-4074161a2 |
| Location | Reggio Emilia, Italy                   |

---

---

## 17. The One Thing

When asked what impression he wants every visitor to leave with, Erik's answer was the first sentence he wrote down while reading _Clean Code_:

> **"Clean code should make you smile like a well-designed car would."**

This is not a quote from the book. It is his own note — his own reaction to an idea that landed. It captures everything: the intersection of craft, aesthetics, and function. The belief that good engineering is not just correct, it is _pleasurable_. That software can be beautiful. That the standard is not "does it work" but "does it make you smile."

That is the impression he wants to leave.

---

_Last updated: April 2026. This document is the source of truth for all `/fill-widget` operations._
