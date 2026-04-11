import { exposeComponent } from '@hashbrownai/angular';
import { PhilosophyWidgetComponent } from './philosophy.component';

export { PhilosophyWidgetComponent };

export const PhilosophyWidget = exposeComponent(PhilosophyWidgetComponent, {
  name: 'PhilosophyWidget',
  description:
    "Displays Erik Ferrari's three core engineering beliefs and his signature quote. " +
    'Use when the visitor asks about Erik\'s values, philosophy, beliefs, how he approaches engineering, ' +
    'what he stands for, or what drives him. ' +
    'No input props needed.',
  input: {},
});
