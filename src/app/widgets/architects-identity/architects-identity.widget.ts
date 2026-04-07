import { Component, input, inject, computed } from '@angular/core';
import { exposeComponent } from '@hashbrownai/angular';
import { s } from '@hashbrownai/core';
import { VisitorProfileStore } from '../../shared/data-access/visitor-profile.store';
import { resolveWidgetText } from '../../../locales/widget-text';

@Component({
  selector: 'app-widget-architects-identity',
  imports: [],
  template: `
    <div class="widget-panel architects-identity">
      <p class="architects-identity__eyebrow">{{ eyebrow() }}</p>
      <h1 class="architects-identity__headline">{{ headline() }}</h1>
      <p class="architects-identity__tagline">{{ tagline() }}</p>
      <p class="architects-identity__body">{{ body() }}</p>
      @if (highlights().length) {
        <div class="architects-identity__highlights">
          @for (phrase of highlights(); track phrase) {
            <span class="architects-identity__highlight">{{ phrase }}</span>
          }
        </div>
      }
    </div>
  `,
  styles: [`
    .widget-panel {
      background: var(--color-surface);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-panel);
      padding: 1.75rem 2rem;
      box-shadow: var(--shadow-panel);
      max-width: 640px;
    }

    .architects-identity__eyebrow {
      margin: 0 0 0.625rem;
      font-family: var(--font-mono);
      font-size: 0.6875rem;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--color-accent);
    }

    .architects-identity__headline {
      margin: 0 0 0.5rem;
      font-family: var(--font-sans);
      font-size: clamp(1.75rem, 4vw, 2.5rem);
      font-weight: 800;
      line-height: 1.15;
      letter-spacing: -0.025em;
      color: var(--color-white);
    }

    .architects-identity__tagline {
      margin: 0 0 1.125rem;
      font-size: 1rem;
      font-weight: 500;
      line-height: 1.5;
      color: var(--color-brand);
      letter-spacing: 0.01em;
    }

    .architects-identity__body {
      margin: 0 0 1.5rem;
      font-size: 0.9375rem;
      line-height: 1.8;
      color: var(--color-muted);
    }

    .architects-identity__highlights {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .architects-identity__highlight {
      display: inline-block;
      padding: 0.25rem 0.75rem;
      font-family: var(--font-mono);
      font-size: 0.75rem;
      letter-spacing: 0.04em;
      color: var(--color-accent);
      border: 1px solid var(--color-border-accent);
      border-radius: var(--radius-sm);
      background: transparent;
      transition: background var(--transition-fast);
      cursor: default;
    }

    .architects-identity__highlight:hover {
      background: color-mix(in srgb, var(--color-accent) 8%, transparent);
    }
  `],
})
export class ArchitectsIdentityWidgetComponent {
  private readonly store = inject(VisitorProfileStore);

  private readonly profile = computed(() => ({
    role:               this.store.role(),
    timeAvailable:      this.store.timeAvailable(),
    communicationStyle: this.store.communicationStyle(),
  }));

  // ── Translated text — resolved from locale + visitor profile ─────────────
  readonly eyebrow  = computed(() => resolveWidgetText('architects-identity', 'eyebrow',  this.profile()));
  readonly headline = computed(() => resolveWidgetText('architects-identity', 'headline', this.profile()));
  readonly tagline  = computed(() => resolveWidgetText('architects-identity', 'tagline',  this.profile()));
  readonly body     = computed(() => resolveWidgetText('architects-identity', 'body',     this.profile()));

  // ── Dynamic prop — Claude selects these at runtime ────────────────────────
  highlights = input<string[]>([]);
}

export const ArchitectsIdentityWidget = exposeComponent(ArchitectsIdentityWidgetComponent, {
  name: 'ArchitectsIdentityWidget',
  description:
    'Hero identity block that introduces Erik Ferrari as an AI-driven engineering architect. ' +
    'Headline, tagline, and bio adapt automatically to the visitor\'s role and tone. ' +
    'Use as the primary opening widget. Pass 2–4 short phrases as highlights to accent key skills, ' +
    'facts, or traits most relevant to this visitor.',
  input: {
    highlights: s.array(
      'Short accent phrases (2–5 words each) rendered as visual tags below the bio — e.g. ["Generative UI", "Angular 21", "Available for hire"]. Pick 2–4 phrases most relevant to the visitor\'s role and question.',
      s.string('A single accent phrase, 2–5 words'),
    ),
  },
});
