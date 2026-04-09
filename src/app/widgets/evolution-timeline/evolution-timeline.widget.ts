import { exposeComponent } from '@hashbrownai/angular';
import { s } from '@hashbrownai/core';
import { EvolutionTimelineWidgetComponent } from './evolution-timeline.component';

export { EvolutionTimelineWidgetComponent };

export const EvolutionTimelineWidget = exposeComponent(EvolutionTimelineWidgetComponent, {
  name: 'EvolutionTimelineWidget',
  description:
    'Displays Erik\'s career timeline — Datacolor Industrial (current), ACSoftware, and Smarthy Srl. ' +
    'Text depth adapts automatically to the visitor\'s role and time preference. ' +
    'Use when the visitor asks about work experience, career path, or professional background. ' +
    'Optionally pass focusCompany to visually highlight a specific role.',
  input: {
    focusCompany: s.string(
      'Company key to visually highlight: "datacolor" | "acsoftware" | "smarthy". Leave empty to show all equally.',
    ),
  },
});
