import { exposeComponent } from '@hashbrownai/angular';
import { s } from '@hashbrownai/core';
import { CompatibilityEngineWidgetComponent } from './compatibility-engine.component';

export { CompatibilityEngineWidgetComponent };

export const CompatibilityEngineWidget = exposeComponent(CompatibilityEngineWidgetComponent, {
  name: 'CompatibilityEngineWidget',
  description:
    'Shows how well Erik matches a specific opportunity or role. Displays a visual match score (e.g. "87%") and a list of matching points. ' +
    'Use when the visitor asks about fit, hiring suitability, or alignment with a specific role or tech stack.',
  input: {
    matchScore: s.string(
      'The match percentage as a string, e.g. "87%". Estimate based on the visitor\'s stated needs and Erik\'s profile.',
    ),
    highlights: s.array(
      'Short phrases (3–6 words) explaining why Erik matches — e.g. "Angular expert", "AI integration experience". Provide 3–5 items.',
      s.string('A single matching point, 3–6 words'),
    ),
  },
});
