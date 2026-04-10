Generate all **developer-role** translation variants for a widget and write them to all three locale files.

## When this skill is invoked

The user provides:
1. The **widget name** (kebab-case, e.g. `core-identity`)
2. **Free-form content** describing what the widget should communicate — written as a neutral, coffee-break-length brief (the "ground truth")

---

## Step 1 — Read the widget

Read `src/app/widgets/<widget-name>/<widget-name>.component.ts` and identify every call to `resolveWidgetText`. Extract the label names (second argument). These are the keys you must fill.

Also read the existing `src/locales/en.ts` to understand the current structure for this widget (if it exists) — never remove or overwrite other roles' data.

---

## Step 2 — Developer persona

The reader is a **peer software engineer or technical lead**. They came here to assess technical depth, architecture thinking, and stack decisions. They have zero patience for marketing copy. They respond to:

- Concrete specifics (framework versions, patterns, trade-offs)
- Evidence over claims ("I built X that does Y" not "passionate developer")
- Peer-level language — no jargon translation needed, no hand-holding
- Signal density — they can read fast, pack it in

**What to avoid:** buzzwords ("passionate", "results-driven"), vague outcomes ("improved performance"), over-explaining common concepts.

---

## Step 3 — Tone × Time matrix for developers

Use this matrix to shape every combination:

| | elevator (30s) | coffee (5m) | deep-dive (15m+) |
|---|---|---|---|
| **formal** | Authoritative one-liner. Role + main stack. No personality — pure signal. | Structured overview: role, stack, main approach. Brief bullets if needed. | Comprehensive. Full stack, architecture philosophy, key projects with context. |
| **creative** | Punchy hook that shows personality. Tech-forward but with a memorable angle. | Short narrative: "here's how I think, here's what I build." Voice-driven but grounded in real work. | Immersive deep-read. Story of how I got here, how I work, what I'm obsessed with technically. |
| **technical** | Hyperdense: frameworks, patterns, one key project. Pure data. | Stack + approach. How I think about architecture. Concrete decisions I've made and why. | Architecture-level depth: systems thinking, trade-offs I've navigated, tech I've built from scratch. |

---

## Step 4 — Generate the content

For each of the 9 combinations (3 tones × 3 times), generate content for **every label** identified in Step 1.

Additionally, generate **role-level fallback** values (direct string fields inside `developer: {}`) — these are the coffee+formal defaults for the developer role, used when a specific combination is missing.

Content rules:
- Base everything on the user's free-form brief as the source of truth
- Elevator = ~1–2 short sentences or a tight phrase per label
- Coffee = 2–4 sentences or a short paragraph per label
- Deep-dive = 4–8 sentences or multiple paragraphs per label (especially `body` fields)
- Headlines and eyebrows stay short regardless of time depth
- Adapt the same facts, not different facts — it's about framing and depth, not invention

---

## Step 5 — Translate to Italian and German

After generating all 9+1 English variants:

1. Translate the entire developer block to **Italian** (`it.ts`).
   - Erik is Italian — match natural, idiomatic Italian; avoid overly formal or robotic phrasing.
   - Technical terms (Angular, NgRx, TypeScript, etc.) stay in English.
   
2. Translate the entire developer block to **German** (`de.ts`).
   - Professional and clear; German tech culture values precision.
   - Technical terms stay in English.

---

## Step 6 — Write to locale files

For each of `src/locales/en.ts`, `src/locales/it.ts`, `src/locales/de.ts`:

1. Read the full file.
2. Locate the `widgets` section and the target widget name block.
3. **Replace only the `developer: { ... }` section** within that widget block. Never touch `recruiter`, `client`, or `default` sections.
4. If the widget block doesn't exist yet, add it. If `widgets` doesn't exist, add it.
5. Write the file back.

The TypeScript structure to write:

```typescript
developer: {
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

If the user's content brief implies new UI sections that the current component doesn't support (e.g. a list of items, a metric display, a CTA section), you have **full autonomy** to:

1. Add new `resolveWidgetText` calls to `<name>.component.ts` for the new labels
2. Add the corresponding HTML to `<name>.component.html`
3. Add the corresponding SCSS to `<name>.component.scss`
4. Include the new labels in all 9+1 developer variants you generate

Follow the design system rules from `create-widget`:
- CSS variables only, no raw colors
- BEM naming inside `.widget-panel`
- Angular Material for interactive elements

---

## Done

After writing all files, report:
- Which labels were filled
- Whether the component was modified and what was added
- A note that `fill-widget-recruiter` and `fill-widget-client` still need to be run to complete the full 30 combinations
