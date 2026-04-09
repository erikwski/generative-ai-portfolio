import { exposeComponent } from '@hashbrownai/angular';
import { ProfessionalObjectiveWidgetComponent } from './professional-objective.component';

export { ProfessionalObjectiveWidgetComponent };

export const ProfessionalObjectiveWidget = exposeComponent(ProfessionalObjectiveWidgetComponent, {
  name: 'ProfessionalObjectiveWidget',
  description:
    "Shows Erik's professional target and career objective. Target role: Tech Lead / Engineering Leader. " +
    'Key pillars: establishing architectural rules, guiding teams, AI integration. ' +
    'Content adapts per visitor role, style, and time available. ' +
    'Use when the visitor asks about career goals, ambitions, next steps, or what Erik is aiming for.',
  input: {},
});
