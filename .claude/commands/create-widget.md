Create a new Hashbrown widget component for the generative AI portfolio.

## What to build

The user will describe what the widget should show/do. Generate:
1. The widget component at `src/app/widgets/<name>/<name>.widget.ts`
2. Translation entries for the widget in **all three locale files** (`src/locales/en.ts`, `it.ts`, `de.ts`) and the type definition in `src/locales/types.ts`

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

Example — the main text of a "presentation" widget for a recruiter, formal tone, deep dive:
```
widgets.presentation.recruiter.formal.deep-dive.text
```

### Fallback chain

`resolveWidgetText` tries keys from most-specific to least-specific:
1. `widgets.<name>.<role>.<style>.<time>.<label>`
2. `widgets.<name>.<role>.<style>.<label>`
3. `widgets.<name>.<role>.<label>`
4. `widgets.<name>.default.<label>`

So you only need to write the combinations that are meaningfully different. Shared copy can go under `default` or just `<role>`.

### How widgets read translations

```typescript
import { inject, computed } from '@angular/core';
import { VisitorProfileStore } from '../../shared/data-access/visitor-profile.store';
import { resolveWidgetText } from '../../../locales/widget-text';

// Inside the component class:
private readonly store = inject(VisitorProfileStore);

// Each translated text label becomes a computed signal:
readonly text = computed(() =>
  resolveWidgetText('<widgetName>', 'text', {
    role: this.store.role(),
    timeAvailable: this.store.timeAvailable(),
    communicationStyle: this.store.communicationStyle(),
  })
);
```

## Widget anatomy

```typescript
import { Component, input, inject, computed } from '@angular/core';
import { exposeComponent } from '@hashbrownai/angular';
import { VisitorProfileStore } from '../../shared/data-access/visitor-profile.store';
import { resolveWidgetText } from '../../../locales/widget-text';
// Angular Material imports as needed

@Component({
  selector: 'app-widget-<name>',
  imports: [/* Material modules */],
  template: `...`,   // inline template preferred
  styles: [`...`],   // inline styles using design system CSS variables
})
export class <Name>WidgetComponent {
  private readonly store = inject(VisitorProfileStore);

  // ── Translated text (computed from locale + visitor profile) ─────────────
  readonly headline = computed(() => resolveWidgetText('<name>', 'headline', this.profile()));
  readonly body     = computed(() => resolveWidgetText('<name>', 'body',     this.profile()));

  // ── Dynamic props — Claude fills these at runtime ─────────────────────────
  // Only non-text values: icon names, URLs, arrays of data, numbers, booleans
  // ctaUrl = input<string>('');

  // ── Private helper ────────────────────────────────────────────────────────
  private readonly profile = computed(() => ({
    role:                 this.store.role(),
    timeAvailable:        this.store.timeAvailable(),
    communicationStyle:   this.store.communicationStyle(),
  }));
}

export const <Name>Widget = exposeComponent(<Name>WidgetComponent, {
  name: '<Name>Widget',
  description: '<when Claude should use this widget and what it communicates>',
  props: {
    // Only list input() props here (non-text, runtime-dynamic ones).
    // Do NOT list computed text props — they are resolved internally.
    // ctaUrl: { type: 'string', description: 'URL for the call-to-action button' },
  },
});
```

## Locale file structure

Add a `widgets` section to `AppTranslation` in `src/locales/types.ts`:

```typescript
export interface AppTranslation {
  onboarding: OnboardingTranslation;
  guard: GuardTranslation;
  canvas: CanvasTranslation;
  widgets: {
    [widgetName: string]: {
      [role: string]: {         // developer | recruiter | client | default
        [style: string]?: {    // formal | creative | technical (optional depth)
          [time: string]?: {   // elevator | coffee | deep-dive (optional depth)
            [label: string]: string;
          } | { [label: string]: string };
        } | { [label: string]: string };
      };
    };
  };
}
```

Then add entries in each locale file (`en.ts`, `it.ts`, `de.ts`):

```typescript
widgets: {
  presentation: {
    developer: {
      technical: {
        elevator:   { headline: 'Full-stack dev.', body: 'AI-native Angular apps.' },
        coffee:     { headline: 'Hi, I\'m Erik.', body: 'I build full-stack Angular apps with AI integration...' },
        'deep-dive':{ headline: 'Hi, I\'m Erik Ferrari.', body: 'I\'m a full-stack developer specialising in Angular and generative AI...' },
      },
      formal: {
        elevator:   { headline: 'Software engineer.', body: 'Angular & generative AI specialist.' },
        // ...
      },
      creative: {
        elevator:   { headline: 'I build things that think.', body: 'Angular + AI, generative UI, real products.' },
        // ...
      },
    },
    recruiter: {
      formal: {
        elevator:   { headline: 'Erik Ferrari', body: 'Software Engineer · 5+ yrs · Angular · AI integration.' },
        coffee:     { headline: 'Erik Ferrari — Software Engineer', body: 'Five years building production Angular apps...' },
        'deep-dive':{ headline: 'Erik Ferrari — Full-Stack Engineer', body: 'I have five years of professional experience...' },
      },
      // ...
    },
    client: {
      formal: {
        elevator:   { headline: 'I build web apps.', body: 'Angular front-ends with AI features, delivered on time.' },
        // ...
      },
    },
    default: {
      headline: 'Hi, I\'m Erik.',
      body: 'I build Angular apps powered by AI.',
    },
  },
},
```

## Design system rules

- **Widget card shell** — always wrap in `.widget-panel`:
  ```css
  .widget-panel {
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-panel);
    padding: 1.5rem;
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
- One folder per widget: `src/app/widgets/<name>/`. Add sub-folders only when a second file of that type is needed.

## Full example — PresentationWidget

```typescript
import { Component, input, inject, computed } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { exposeComponent } from '@hashbrownai/angular';
import { VisitorProfileStore } from '../../shared/data-access/visitor-profile.store';
import { resolveWidgetText } from '../../../locales/widget-text';

@Component({
  selector: 'app-widget-presentation',
  imports: [MatButtonModule, MatIconModule],
  template: `
    <div class="widget-panel presentation">
      <p class="presentation__eyebrow">Erik Ferrari</p>
      <h2 class="presentation__headline">{{ headline() }}</h2>
      <p class="presentation__body">{{ body() }}</p>
      @if (ctaUrl()) {
        <a mat-stroked-button class="presentation__cta" [href]="ctaUrl()" target="_blank">
          <mat-icon>open_in_new</mat-icon>
          {{ ctaLabel() }}
        </a>
      }
    </div>
  `,
  styles: [`
    .widget-panel {
      background: var(--color-surface);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-panel);
      padding: 1.5rem;
      box-shadow: var(--shadow-panel);
    }
    .presentation__eyebrow {
      margin: 0 0 0.375rem;
      font-family: var(--font-mono);
      font-size: 0.6875rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--color-accent);
    }
    .presentation__headline {
      margin: 0 0 0.75rem;
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--color-white);
    }
    .presentation__body {
      margin: 0 0 1.25rem;
      font-size: 0.9375rem;
      line-height: 1.7;
      color: var(--color-muted);
    }
    .presentation__cta {
      border-color: var(--color-border-accent) !important;
      color: var(--color-white) !important;
      font-size: 0.8125rem;
    }
  `],
})
export class PresentationWidgetComponent {
  private readonly store = inject(VisitorProfileStore);

  private readonly profile = computed(() => ({
    role:               this.store.role(),
    timeAvailable:      this.store.timeAvailable(),
    communicationStyle: this.store.communicationStyle(),
  }));

  // Translated text — resolved from locale file based on visitor profile
  readonly headline = computed(() => resolveWidgetText('presentation', 'headline', this.profile()));
  readonly body     = computed(() => resolveWidgetText('presentation', 'body',     this.profile()));
  readonly ctaLabel = computed(() => resolveWidgetText('presentation', 'ctaLabel', this.profile()));

  // Dynamic prop — Claude decides whether to show a CTA and which URL to use
  ctaUrl = input<string>('');
}

export const PresentationWidget = exposeComponent(PresentationWidgetComponent, {
  name: 'PresentationWidget',
  description: 'Introduces Erik with a headline and bio tailored to the visitor. Use this as the opening widget for most conversations.',
  props: {
    ctaUrl: {
      type: 'string',
      description: 'Optional URL for a call-to-action button (e.g. LinkedIn, CV). Leave empty to hide the button.',
    },
  },
});
```

## After generating the file

1. Add the widget's translation entries to **all three** locale files (`en.ts`, `it.ts`, `de.ts`).
2. Remind the user to register `<Name>Widget` in the `createUiKit` components array.
