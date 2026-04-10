Generate all **recruiter-role** translation variants for a widget and write them to all three locale files.

## When this skill is invoked

The user provides:
1. The **widget name** (kebab-case, e.g. `core-identity`)
2. **Free-form content** describing what the widget should communicate — written as a neutral, coffee-break-length brief (the "ground truth")

---

## Step 1 — Read the widget

Read `src/app/widgets/<widget-name>/<widget-name>.component.ts` and identify every call to `resolveWidgetText`. Extract the label names (second argument). These are the keys you must fill.

Also read the existing `src/locales/en.ts` to understand the current structure for this widget (if it exists) — never remove or overwrite other roles' data.

---

## Step 2 — Recruiter persona

The reader is a **talent acquisition specialist, tech recruiter, or hiring manager**. They are evaluating Erik as a candidate. They need to quickly understand:

- What he does and at what level (seniority, scope)
- Where he's worked and for how long
- What makes him hireable for a specific role
- Any signals about soft skills, reliability, and professionalism

They often skim. They compare candidates. They are not technical enough to evaluate architecture decisions but will trust a clear, confident narrative.

**What they respond to:** role titles, years of experience, company names, clear value props, availability signals, professional tone.
**What to avoid:** overly technical jargon, abstract concepts without context, anything that reads like a GitHub README.

---

## Step 3 — Tone × Time matrix for recruiters

| | elevator (30s) | coffee (5m) | deep-dive (15m+) |
|---|---|---|---|
| **formal** | One-line candidate summary: seniority + role + one differentiator. Clean, professional, LinkedIn-ready. | Structured overview: role, years, key employer, what he's looking for. The "recruiter pitch" format. | Full career narrative: progression, responsibilities at each role, skills, availability, what he wants next. |
| **creative** | A memorable framing of his profile — not a job title, but a clear identity that sticks. | Short story of his path: how he got here, what drives him, what kind of teams he thrives in. | Rich portrait: work philosophy, career arc, what a great collaboration looks like with him. |
| **technical** | Condensed but accessible: stack + seniority + role type. A technical recruiter could parse this instantly. | Stack, role scope, kind of problems he solves, team fit signals. Enough depth for a technical screen. | Detailed breakdown: frontend specialization, backend capability, what he owns end-to-end, what he delegates. |

---

## Step 4 — Generate the content

For each of the 9 combinations (3 tones × 3 times), generate content for **every label** identified in Step 1.

Additionally, generate **role-level fallback** values (direct string fields inside `recruiter: {}`) — these are the coffee+formal defaults for the recruiter role.

Content rules:
- Base everything on the user's free-form brief as the source of truth
- Elevator = ~1–2 short sentences or a tight phrase per label
- Coffee = 2–4 sentences or a short paragraph per label
- Deep-dive = 4–8 sentences or multiple paragraphs per label (especially `body` fields)
- Headlines and eyebrows stay short regardless of time depth
- Adapt framing and depth — not fabricated facts

---

## Step 5 — Translate to Italian and German

After generating all 9+1 English variants:

1. Translate the entire recruiter block to **Italian** (`it.ts`).
   - Erik is Italian — match natural, idiomatic Italian; avoid overly formal or robotic phrasing.
   - Technical terms (Angular, NgRx, TypeScript, etc.) stay in English.
   
2. Translate the entire recruiter block to **German** (`de.ts`).
   - Professional and clear; German business culture values directness and credentials.
   - Technical terms stay in English.

---

## Step 6 — Write to locale files

For each of `src/locales/en.ts`, `src/locales/it.ts`, `src/locales/de.ts`:

1. Read the full file.
2. Locate the `widgets` section and the target widget name block.
3. **Replace only the `recruiter: { ... }` section** within that widget block. Never touch `developer`, `client`, or `default` sections.
4. If the widget block doesn't exist yet, add it. If `widgets` doesn't exist, add it.
5. Write the file back.

The TypeScript structure to write:

```typescript
recruiter: {
  // Role-level fallbacks (coffee + formal defaults)
  headline: '...',
  eyebrow: '...',
  // ... all labels ...

  formal: {
    elevator:    { headline: '...', eyebrow: '...', /* all labels */ },
    coffee:      { headline: '...', eyebrow: '...', /* all labels */ },
    'deep-dive': { headline: '...', eyebrow: '...', /* all labels */ },
  },
  creative: {
    elevator:    { /* all labels */ },
    coffee:      { /* all labels */ },
    'deep-dive': { /* all labels */ },
  },
  technical: {
    elevator:    { /* all labels */ },
    coffee:      { /* all labels */ },
    'deep-dive': { /* all labels */ },
  },
},
```

---

## Step 7 — Component structure update (if needed)

If the user's content brief implies new UI sections that the current component doesn't support (e.g. availability badge, years-of-experience counter, role-match indicator), you have **full autonomy** to:

1. Add new `resolveWidgetText` calls to `<name>.component.ts` for the new labels
2. Add the corresponding HTML to `<name>.component.html`
3. Add the corresponding SCSS to `<name>.component.scss`
4. Include the new labels in all 9+1 recruiter variants you generate

Follow the design system rules from `create-widget`:
- CSS variables only, no raw colors
- BEM naming inside `.widget-panel`
- Angular Material for interactive elements

---

## Done

After writing all files, report:
- Which labels were filled
- Whether the component was modified and what was added
- A note that `fill-widget-developer` and `fill-widget-client` still need to be run to complete the full 30 combinations (if not already done)
