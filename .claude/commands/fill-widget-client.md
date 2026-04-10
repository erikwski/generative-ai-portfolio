Generate all **client-role** translation variants for a widget and write them to all three locale files.

## When this skill is invoked

The user provides:
1. The **widget name** (kebab-case, e.g. `core-identity`)
2. **Free-form content** describing what the widget should communicate — written as a neutral, coffee-break-length brief (the "ground truth")

---

## Step 1 — Read the widget

Read `src/app/widgets/<widget-name>/<widget-name>.component.ts` and identify every call to `resolveWidgetText`. Extract the label names (second argument). These are the keys you must fill.

Also read the existing `src/locales/en.ts` to understand the current structure for this widget (if it exists) — never remove or overwrite other roles' data.

---

## Step 2 — Client persona

The reader is a **potential client** — a business owner, startup founder, product manager, or decision-maker who is evaluating whether to hire Erik for a project. They are not technical. They care about:

- Can he solve my problem?
- Will this be delivered on time and budget?
- Can I trust him with my product?
- What has he built before that's like what I need?

They respond to outcomes over process. They need to feel confident, not impressed. They are comparing vendors.

**What they respond to:** project results, clear deliverables, reliability signals, direct language, what working with him looks like, testimonials/social proof.
**What to avoid:** technical jargon, stack names without context, anything that sounds like it's written for a developer audience.

---

## Step 3 — Tone × Time matrix for clients

| | elevator (30s) | coffee (5m) | deep-dive (15m+) |
|---|---|---|---|
| **formal** | Clear professional positioning: what he builds, who for, one trust signal. No frills. | Business-friendly overview: what he does, past client types, what to expect from working together. | Full service proposition: capabilities, process, past work, availability, how to engage. |
| **creative** | A memorable promise or value statement. Something a client would remember and repeat. | A short story: a past project result or a client transformation. Human, warm, confidence-building. | Immersive portrait: philosophy of client work, how he approaches briefs, what great output looks like. |
| **technical** | Still non-technical but precise: "I build X type of products for Y type of businesses." | Enough technical detail to reassure a tech-literate client: stack, timeline, what's in scope. | Comprehensive: what he handles end-to-end, what he delegates, what deliverables look like, support model. |

---

## Step 4 — Generate the content

For each of the 9 combinations (3 tones × 3 times), generate content for **every label** identified in Step 1.

Additionally, generate **role-level fallback** values (direct string fields inside `client: {}`) — these are the coffee+formal defaults for the client role.

Content rules:
- Base everything on the user's free-form brief as the source of truth
- Elevator = ~1–2 short sentences or a tight phrase per label
- Coffee = 2–4 sentences or a short paragraph per label
- Deep-dive = 4–8 sentences or multiple paragraphs per label (especially `body` fields)
- Headlines and eyebrows stay short regardless of time depth
- Adapt framing and depth — not fabricated facts
- Translate jargon: "NgRx" → "app state management", "SSR" → "fast-loading server-side pages", etc. — only when writing for a non-technical client

---

## Step 5 — Translate to Italian and German

After generating all 9+1 English variants:

1. Translate the entire client block to **Italian** (`it.ts`).
   - Erik is Italian — match natural, idiomatic Italian; avoid overly formal or robotic phrasing.
   - Technical brand names (Angular, TypeScript, etc.) stay in English.
   - Business/outcome language should feel native and warm in Italian.
   
2. Translate the entire client block to **German** (`de.ts`).
   - Professional and direct; German business culture values reliability and clear deliverables.
   - Technical brand names stay in English.

---

## Step 6 — Write to locale files

For each of `src/locales/en.ts`, `src/locales/it.ts`, `src/locales/de.ts`:

1. Read the full file.
2. Locate the `widgets` section and the target widget name block.
3. **Replace only the `client: { ... }` section** within that widget block. Never touch `developer`, `recruiter`, or `default` sections.
4. If the widget block doesn't exist yet, add it. If `widgets` doesn't exist, add it.
5. Write the file back.

The TypeScript structure to write:

```typescript
client: {
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

If the user's content brief implies new UI sections that the current component doesn't support (e.g. a "services offered" list, a portfolio link, a contact CTA, an availability indicator), you have **full autonomy** to:

1. Add new `resolveWidgetText` calls to `<name>.component.ts` for the new labels
2. Add the corresponding HTML to `<name>.component.html`
3. Add the corresponding SCSS to `<name>.component.scss`
4. Include the new labels in all 9+1 client variants you generate

Follow the design system rules from `create-widget`:
- CSS variables only, no raw colors
- BEM naming inside `.widget-panel`
- Angular Material for interactive elements

---

## Done

After writing all files, report:
- Which labels were filled
- Whether the component was modified and what was added
- A note that `fill-widget-developer` and `fill-widget-recruiter` still need to be run to complete the full 30 combinations (if not already done)
