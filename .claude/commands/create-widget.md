Create a new Hashbrown widget component for the generative AI portfolio.

## What to build

The user will describe what the widget should show/do. Generate **3 files** per widget:

```
src/app/widgets/<name>/
├── <name>.component.ts    # Angular @Component class — store injection, computed signals, widget-specific interfaces
├── <name>.component.html  # Template
├── <name>.component.scss  # Styles (CSS variables only)
└── <name>.widget.ts       # ONLY: exposeComponent() + Hashbrown input schema
```

Plus translation entries in **all three locale files** (`src/locales/en.ts`, `it.ts`, `de.ts`).

## Personalization model

Widget **text content** is never passed by Claude at runtime. It comes from the i18n translation system, resolved at render time based on the visitor's profile. Claude only decides **which widget to render** and passes **non-text props** (icon names, URLs, data arrays, numeric values).

### Translation key structure

```
widgets.<widgetName>.<role>.<style>.<time>.<label>
```

| Segment | Values |
|---------|--------|
| `role`  | `developer` · `recruiter` · `client` |
| `style` | `formal` · `creative` · `technical` |
| `time`  | `elevator` · `coffee` · `deep-dive` |

### MANDATORY: fill all 27 combinations

Every widget translation **must** include all 27 role×style×time combinations for every text label — no skipping. Use the fallback chain as a safety net, not as a design shortcut.

Additionally, add **role-level string labels** (direct string values inside each role block) as a catch-all for any combination that might be missed in future:

```typescript
recruiter: {
  // Role-level fallback — catches any style+time combo not explicitly defined
  headline: 'Work History',
  'some-label': 'Generic recruiter copy here',
  formal: {
    elevator: { headline: 'Work History', 'some-label': '...' },
    coffee:   { headline: 'Work History', 'some-label': '...' },
    'deep-dive': { headline: '...', 'some-label': '...' },
  },
  technical: {
    elevator: { ... }, coffee: { ... }, 'deep-dive': { ... },
  },
  creative: {
    elevator: { ... }, coffee: { ... }, 'deep-dive': { ... },
  },
},
```

### Fallback chain

`resolveWidgetText` tries keys from most-specific to least-specific:
1. `widgets.<name>.<role>.<style>.<time>.<label>` — exact match
2. `widgets.<name>.<role>.<style>.<label>`        — role + style
3. `widgets.<name>.<role>.<label>`                — role only (add these as safety!)
4. `widgets.<name>.default.<label>`               — generic default

### How widgets read translations

`resolveWidgetText` is already typed to accept `VisitorProfile` from the shared domain — use the store signals directly:

```typescript
import { VisitorProfileStore } from '../../shared/data-access/visitor-profile.store';
import { resolveWidgetText } from '../../../locales/widget-text';

private readonly store = inject(VisitorProfileStore);
private readonly profile = computed(() => ({
  role:               this.store.role(),
  timeAvailable:      this.store.timeAvailable(),
  communicationStyle: this.store.communicationStyle(),
}));

readonly headline = computed(() => resolveWidgetText('<name>', 'headline', this.profile()));
```

## Three-file anatomy

### `<name>.component.ts`
```typescript
import { Component, input, inject, computed } from '@angular/core';
import { VisitorProfileStore } from '../../shared/data-access/visitor-profile.store';
import { resolveWidgetText } from '../../../locales/widget-text';
// Angular Material imports as needed

// Widget-specific data interfaces live here (if any)
// export interface ProjectCard { title: string; tags: string[]; ... }

@Component({
  selector: 'app-widget-<name>',
  imports: [/* Material modules */],
  templateUrl: './<name>.component.html',
  styleUrl: './<name>.component.scss',
})
export class <Name>WidgetComponent {
  private readonly store = inject(VisitorProfileStore);

  private readonly profile = computed(() => ({
    role:               this.store.role(),
    timeAvailable:      this.store.timeAvailable(),
    communicationStyle: this.store.communicationStyle(),
  }));

  // ── Translated text ───────────────────────────────────────────────────────
  readonly headline = computed(() => resolveWidgetText('<name>', 'headline', this.profile()));
  readonly body     = computed(() => resolveWidgetText('<name>', 'body',     this.profile()));

  // ── Dynamic props — Claude fills these at runtime ─────────────────────────
  // Non-text only: icon names, URLs, arrays of data, numbers, booleans
  // someUrl = input<string>('');
}
```

### `<name>.component.html`
```html
<div class="widget-panel <name>">
  <p class="<name>__eyebrow">{{ eyebrow() }}</p>
  <h2 class="<name>__headline">{{ headline() }}</h2>
  <p class="<name>__body">{{ body() }}</p>
</div>
```

### `<name>.component.scss`
```scss
.widget-panel {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-panel);
  padding: 1.75rem 2rem;
  box-shadow: var(--shadow-panel);
}

.<name>__eyebrow { /* ... */ }
.<name>__headline { /* ... */ }
// SCSS nesting with & is fine
```

### `<name>.widget.ts`
```typescript
import { exposeComponent } from '@hashbrownai/angular';
import { s } from '@hashbrownai/core';
import { <Name>WidgetComponent } from './<name>.component';

export { <Name>WidgetComponent };

export const <Name>Widget = exposeComponent(<Name>WidgetComponent, {
  name: '<Name>Widget',
  description: '<when Claude should use this widget and what it communicates>',
  input: {
    // Only list input() props here — Claude-facing schema.
    // someUrl: s.string('Description of what this URL is for'),
  },
});
```

## Design system rules

- **Widget card shell** — always wrap in `.widget-panel`:
  ```scss
  .widget-panel {
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-panel);
    padding: 1.75rem 2rem;
    box-shadow: var(--shadow-panel);
  }
  ```
- **CSS variables only** — never raw color values:
  - `--color-bg`, `--color-surface`, `--color-surface-elevated`
  - `--color-accent` (#FF3B30 Electric Red), `--color-brand` (#FFBF00 Gold)
  - `--color-white`, `--color-muted`, `--color-subtle`
  - `--color-border`, `--color-border-accent`
  - `--font-sans` (Inter), `--font-mono` (JetBrains Mono)
  - `--radius-sm`, `--radius-md`, `--radius-panel`
  - `--shadow-panel`, `--shadow-accent`
  - `--transition-fast`, `--transition-normal`
- **Angular Material** (`@angular/material/*`) for all interactive elements.
- **BEM class naming** inside `.widget-panel`.
- **`input()` signals** — never `@Input()` decorator.
- **`s.*` schema** — always use `s.string()`, `s.array()`, `s.object()` from `@hashbrownai/core` in widget.ts.
- **Never redeclare `VisitorProfile`** — use the shared domain type via the store; `resolveWidgetText` already accepts it.

## Full example — EvolutionTimelineWidget

### `evolution-timeline.component.ts`
```typescript
import { Component, input, inject, computed } from '@angular/core';
import { VisitorProfileStore } from '../../shared/data-access/visitor-profile.store';
import { resolveWidgetText } from '../../../locales/widget-text';

export interface TimelineEntry {
  key: string; company: string; roleTitle: string;
  period: string; desc: string; current: boolean;
}

@Component({
  selector: 'app-widget-evolution-timeline',
  imports: [],
  templateUrl: './evolution-timeline.component.html',
  styleUrl: './evolution-timeline.component.scss',
})
export class EvolutionTimelineWidgetComponent {
  private readonly store = inject(VisitorProfileStore);
  private readonly profile = computed(() => ({
    role: this.store.role(), timeAvailable: this.store.timeAvailable(),
    communicationStyle: this.store.communicationStyle(),
  }));

  readonly headline     = computed(() => resolveWidgetText('evolution-timeline', 'headline',      this.profile()));
  readonly currentLabel = computed(() => resolveWidgetText('evolution-timeline', 'current-label', this.profile()));
  focusCompany = input<string>('');

  readonly entries = computed<TimelineEntry[]>(() => {
    const p = this.profile();
    return [
      { key: 'datacolor', company: 'Datacolor Industrial', current: true,
        roleTitle: resolveWidgetText('evolution-timeline', 'datacolor-role', p, 'Angular Frontend Developer & UI Library Owner'),
        period: '2022 – Present',
        desc: resolveWidgetText('evolution-timeline', 'datacolor-desc', p) },
      // ...
    ];
  });
}
```

### `evolution-timeline.component.html`
```html
<div class="widget-panel evolution-timeline">
  <p class="evolution-timeline__eyebrow">Erik Ferrari</p>
  <h2 class="evolution-timeline__headline">{{ headline() }}</h2>
  <div class="evolution-timeline__track">
    @for (entry of entries(); track entry.key) {
      <div class="evolution-timeline__entry"
           [class.evolution-timeline__entry--current]="entry.current"
           [class.evolution-timeline__entry--focus]="focusCompany() === entry.key">
        <!-- ... -->
      </div>
    }
  </div>
</div>
```

### `evolution-timeline.component.scss`
```scss
.widget-panel { /* shell */ }

.evolution-timeline__track {
  position: relative;
  &::before { /* vertical line */ }
}

.evolution-timeline__entry--current .evolution-timeline__dot {
  background: var(--color-brand);
}
```

### `evolution-timeline.widget.ts`
```typescript
import { exposeComponent } from '@hashbrownai/angular';
import { s } from '@hashbrownai/core';
import { EvolutionTimelineWidgetComponent } from './evolution-timeline.component';

export { EvolutionTimelineWidgetComponent };

export const EvolutionTimelineWidget = exposeComponent(EvolutionTimelineWidgetComponent, {
  name: 'EvolutionTimelineWidget',
  description: 'Displays Erik\'s career timeline...',
  input: {
    focusCompany: s.string('Company key to highlight: "datacolor" | "acsoftware" | "smarthy"'),
  },
});
```

## Translation structure — all 27 combinations

```typescript
'widget-name': {
  developer: {
    // Role-level fallback labels (step 3 safety net)
    headline: 'Developer fallback headline',
    body:     'Developer fallback body',
    technical: {
      elevator:    { headline: '...', body: '...', ctaLabel: '...' },
      coffee:      { headline: '...', body: '...', ctaLabel: '...' },
      'deep-dive': { headline: '...', body: '...', ctaLabel: '...' },
    },
    creative: {
      elevator:    { headline: '...', body: '...', ctaLabel: '...' },
      coffee:      { headline: '...', body: '...', ctaLabel: '...' },
      'deep-dive': { headline: '...', body: '...', ctaLabel: '...' },
    },
    formal: {
      elevator:    { headline: '...', body: '...', ctaLabel: '...' },
      coffee:      { headline: '...', body: '...', ctaLabel: '...' },
      'deep-dive': { headline: '...', body: '...', ctaLabel: '...' },
    },
  },
  recruiter: {
    headline: 'Recruiter fallback headline',
    body:     'Recruiter fallback body',
    formal:    { elevator: {...}, coffee: {...}, 'deep-dive': {...} },
    technical: { elevator: {...}, coffee: {...}, 'deep-dive': {...} },
    creative:  { elevator: {...}, coffee: {...}, 'deep-dive': {...} },
  },
  client: {
    headline: 'Client fallback headline',
    body:     'Client fallback body',
    formal:    { elevator: {...}, coffee: {...}, 'deep-dive': {...} },
    technical: { elevator: {...}, coffee: {...}, 'deep-dive': {...} },
    creative:  { elevator: {...}, coffee: {...}, 'deep-dive': {...} },
  },
  default: {
    headline:  'Generic headline',
    body:      'Generic body',
    ctaLabel:  'View',
  },
},
```

## After generating the files

1. Add translation entries to **all three** locale files (`en.ts`, `it.ts`, `de.ts`) with all 27 combinations.
2. Add the **component** (import from `component.ts`, not `widget.ts`) to the onboarding page debug preview.
3. Remind the user to register `<Name>Widget` (from `widget.ts`) in the `components` array in `canvas.component.ts`.
4. You can delete any leftover `*.types.ts` files — types belong in `component.ts`.
