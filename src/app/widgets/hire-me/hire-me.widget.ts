import { exposeComponent } from '@hashbrownai/angular';
import { HireMeWidgetComponent } from './hire-me.component';

export { HireMeWidgetComponent };

export const HireMeWidget = exposeComponent(HireMeWidgetComponent, {
  name: 'HireMeWidget',
  description:
    'Displays a contact and hire CTA card with email and LinkedIn action buttons, ' +
    "plus an availability status badge. Use when the visitor asks about hiring, availability, " +
    'working together, contacting Erik, or when they want to reach out. ' +
    'No input props needed.',
  input: {},
});
