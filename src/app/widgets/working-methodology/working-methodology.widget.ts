import { exposeComponent } from '@hashbrownai/angular';
import { WorkingMethodologyWidgetComponent } from './working-methodology.component';

export { WorkingMethodologyWidgetComponent };

export const WorkingMethodologyWidget = exposeComponent(WorkingMethodologyWidgetComponent, {
  name: 'WorkingMethodologyWidget',
  description:
    'Describes how Erik actually works day-to-day: PR discipline in the AI era, ' +
    'mentoring culture (teaching juniors and learning from seniors), ' +
    'Agile (certified), AI-ready documentation practices, and weekly pair programming. ' +
    'Use when the visitor asks how Erik works, his dev process, engineering practices, ' +
    'code review culture, testing approach, or team workflow. ' +
    'Complements PhilosophyWidget (beliefs) — this widget is about concrete practices.',
  input: {},
});
