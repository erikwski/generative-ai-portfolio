Generate **all 30 translation variants** for a widget across all roles, tones, and time depths — then write them to all three locale files.

This is the master skill. It runs the full pipeline: developer + recruiter + client (27 combinations) + 3 role fallbacks + 1 default block = 30 total. In English, Italian, and German.

## When this skill is invoked

The user provides:
1. The **widget name** (kebab-case, e.g. `core-identity`)
2. **Free-form content** describing what the widget should communicate — written as a neutral, coffee-break-length brief (the "ground truth")

Optionally, the user may also provide **role-specific guidance** (what a developer / recruiter / client should specifically see), prefaced with `[developer]`, `[recruiter]`, or `[client]`. If provided, use it to override the free-form brief for that role. If not provided, derive all three roles from the free-form brief.

---

## Step 1 — Read the widget

Read `src/app/widgets/<widget-name>/<widget-name>.component.ts` and identify every call to `resolveWidgetText`. Extract the label names (second argument). These are the keys you must fill.

Also read the existing `src/locales/en.ts` to check the current structure for this widget and avoid overwriting unrelated data.

---

## Step 2 — Generate all content

Generate all 30 variants by following the role personas and tone × time matrices defined below.

### Roles

#### Developer — peer engineer or tech lead
Evaluating technical depth. Reads fast. No patience for marketing copy.
- Respond to: stack specifics, architecture decisions, evidence over claims, peer-level language
- Avoid: buzzwords, vague outcomes, hand-holding

#### Recruiter — talent acquisition or hiring manager
Evaluating Erik as a candidate. Skims. Compares people.
- Respond to: seniority, company names, role titles, clear value props, availability signals
- Avoid: technical jargon without context, abstract descriptions

#### Client — business owner, founder, PM
Evaluating whether to hire Erik for a project. Non-technical. Needs to trust.
- Respond to: project outcomes, deliverables, reliability signals, direct language, past work
- Avoid: stack names (or translate them), developer-audience framing
- Translate jargon for clients: "NgRx" → "app state management", "SSR" → "fast-loading pages"

---

### Tone × Time matrix

| | elevator (30s) | coffee (5m) | deep-dive (15m+) |
|---|---|---|---|
| **formal** | Maximum compression. Core signal only. Authoritative. | Structured overview with key facts. Professional. | Comprehensive, credentialed, thorough. |
| **creative** | Memorable hook or framing. Personality-forward but grounded. | Short narrative arc. Voice-driven. Story of the work. | Immersive portrait. Philosophy, path, obsessions. |
| **technical** | Signal-dense. Stack + approach, instant read. | Concrete decisions, stack, how he thinks. | Architecture-level depth. Trade-offs, system design. |

Apply this matrix per role — a `technical + elevator` for a developer sounds different from `technical + elevator` for a client.

---

### Length guidelines

- **Elevator** — ~1–2 tight sentences per label (headlines can be a phrase)
- **Coffee** — 2–4 sentences or a short paragraph per label
- **Deep-dive** — 4–8 sentences or multiple paragraphs for `body`-type labels; headlines still stay short
- Eyebrow/label fields stay short across all time depths

---

## Step 3 — Generate the `default` block

After all three role blocks, generate a `default` block — a generic, role-neutral fallback used only when the role is unknown. Use formal + coffee as the baseline. Keep it professional and accurate.

```typescript
default: {
  headline: '...',
  eyebrow:  '...',
  // all labels
}
```

---

## Step 4 — Translate to Italian and German

Translate the **entire widget block** (all 3 roles + default) to Italian and German:

- **Italian**: Erik is Italian — idiomatic, natural, warm. Technical terms (Angular, NgRx, TypeScript) stay in English.
- **German**: Professional and direct. Technical terms stay in English.

---

## Step 5 — Component structure update (if needed)

If the user's content brief implies new UI sections the current component doesn't support, you have **full autonomy** to:

1. Add new `resolveWidgetText` calls to `<name>.component.ts`
2. Add corresponding HTML to `<name>.component.html`
3. Add corresponding SCSS to `<name>.component.scss`
4. Include the new labels in all 30 generated variants

Design system rules:
- CSS variables only, no raw colors
- BEM naming inside `.widget-panel`
- Angular Material for interactive elements

---

## Step 6 — Write to locale files

For each of `src/locales/en.ts`, `src/locales/it.ts`, `src/locales/de.ts`:

1. Read the full file.
2. Find the `widgets` section and the target widget block.
3. **Replace the entire widget block** (developer + recruiter + client + default) with the new content.
4. If the widget block doesn't exist, add it. If `widgets` doesn't exist, add it.
5. Write the file back.

Full structure to write per widget:

```typescript
'<widget-name>': {
  developer: {
    headline: '...', /* role-level fallbacks */
    formal:    { elevator: {...}, coffee: {...}, 'deep-dive': {...} },
    creative:  { elevator: {...}, coffee: {...}, 'deep-dive': {...} },
    technical: { elevator: {...}, coffee: {...}, 'deep-dive': {...} },
  },
  recruiter: {
    headline: '...',
    formal:    { elevator: {...}, coffee: {...}, 'deep-dive': {...} },
    creative:  { elevator: {...}, coffee: {...}, 'deep-dive': {...} },
    technical: { elevator: {...}, coffee: {...}, 'deep-dive': {...} },
  },
  client: {
    headline: '...',
    formal:    { elevator: {...}, coffee: {...}, 'deep-dive': {...} },
    creative:  { elevator: {...}, coffee: {...}, 'deep-dive': {...} },
    technical: { elevator: {...}, coffee: {...}, 'deep-dive': {...} },
  },
  default: {
    headline: '...',
    /* all labels */
  },
},
```

---

## Done

After writing all files, report:
- Total combinations written (should be 30 in 3 languages = 90 variant sets)
- Which labels were filled
- Whether the component was modified and what was added
- Reminder: run `ng build` or `ng serve` to verify no TypeScript errors in the locale files
