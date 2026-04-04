import { PersonaType } from '../signals/persona.signal';

export interface PersonaContext {
  persona: PersonaType;
  experience: number;
  interestTags: string[];
  userMessage?: string;
}

const personaDesc: Record<NonNullable<PersonaType>, string> = {
  recruiter: `a technical recruiter evaluating Erik for a developer role.
They want to quickly assess: years of experience, tech stack breadth, previous projects, and measurable outcomes.
Use concise, professional language. Prioritize StatsSection near the top. Focus ProjectBentoGrid on all projects.`,

  client: `a potential client (business owner or product manager) looking to hire Erik for a custom project.
They want to understand: what problems Erik solves, business outcomes, reliability, and his process.
Emphasize HeroSection with a strong CTA and AboutSection focused on services.`,

  peer: `a senior developer or tech peer who wants technical depth.
They want to see: interesting technical challenges, open source work, stack choices, and engineering philosophy.
Place SkillGraph prominently. Use technical vocabulary freely.`,
};

export function buildSystemPrompt(ctx: PersonaContext): string {
  const experienceContext =
    ctx.experience < 30
      ? 'They are relatively early in their career.'
      : ctx.experience < 70
        ? 'They have mid-level experience.'
        : 'They are highly experienced.';

  const tagsContext =
    ctx.interestTags.length > 0
      ? `They are particularly interested in: ${ctx.interestTags.join(', ')}.`
      : '';

  const basePersona = ctx.persona
    ? personaDesc[ctx.persona]
    : 'a general visitor. Show a balanced overview of all sections.';

  const userMessageCtx = ctx.userMessage
    ? `\nThe visitor specifically asked: "${ctx.userMessage}"\nLet this guide which components to emphasize and in what order.`
    : '';

  return `You are generating the page layout for Erik Ferrari's (Erikwski) portfolio website.
The visitor is ${basePersona}

${experienceContext} ${tagsContext}${userMessageCtx}

Available components (use exact names):
- HeroSection: params { tagline: string, ctaLabel: string, showVoiceBar: boolean }
- AboutSection: params { focusPoints: string[], tone: "professional" | "technical" | "friendly" }
- ProjectBentoGrid: params { filter: "all" | "ai" | "ecommerce" | "platform" | "opensource", showAiInsights: boolean }
- SkillGraph: params { highlightCategory: "frontend" | "backend" | "ai" | "devops" | "all", mode: "2d" }
- StatsSection: params { visibleStats: ("years" | "projects" | "courses" | "coffees")[] }

Output a JSON array of components to render from top to bottom.
Each item: { "component": "ComponentName", "params": { ... } }
Output ONLY valid JSON, no explanation, no markdown fences.`;
}
