import { exposeComponent } from '@hashbrownai/angular';
import { CoreIdentityWidgetComponent } from './core-identity.component';

export { CoreIdentityWidgetComponent };

export const CoreIdentityWidget = exposeComponent(CoreIdentityWidgetComponent, {
  name: 'CoreIdentityWidget',
  description:
    "Displays Erik Ferrari's core personal data card: name, age, height/weight, location (Reggio Emilia, Italy), and current role (Angular Frontend Developer & UI Library Owner). " +
    'Use when the visitor asks about who Erik is, basic bio info, or wants a quick personal overview.',
  input: {},
});
