import { exposeComponent } from '@hashbrownai/angular';
import { s } from '@hashbrownai/core';
import { ArchitectsIdentityWidgetComponent } from './architects-identity.component';

export { ArchitectsIdentityWidgetComponent };

export const ArchitectsIdentityWidget = exposeComponent(ArchitectsIdentityWidgetComponent, {
  name: 'ArchitectsIdentityWidget',
  description:
    "Hero identity block that introduces Erik Ferrari as an AI-driven engineering architect. " +
    "Headline, tagline, and bio adapt automatically to the visitor's role and tone. " +
    'Use as the primary opening widget. Pass 2–4 short phrases as highlights to accent key skills, ' +
    'facts, or traits most relevant to this visitor.',
  input: {
    highlights: s.array(
      'Short accent phrases (2–5 words each) rendered as visual tags below the bio — e.g. ["Generative UI", "Angular 21", "Available for hire"]. Pick 2–4 phrases most relevant to the visitor\'s role and question.',
      s.string('A single accent phrase, 2–5 words'),
    ),
  },
});
