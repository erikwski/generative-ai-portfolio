import { exposeComponent } from '@hashbrownai/angular';
import { ContactLinksWidgetComponent } from './contact-links.component';

export { ContactLinksWidgetComponent };

export const ContactLinksWidget = exposeComponent(ContactLinksWidgetComponent, {
  name: 'ContactLinksWidget',
  description:
    'Displays Erik\'s contact channels: LinkedIn, GitHub, email, and phone number. ' +
    'Use when the visitor asks how to contact Erik, where to find his code, his GitHub, ' +
    'his LinkedIn profile, his email address, or any question about reaching him. ' +
    'Pairs well with HireMeWidget for closing calls to action.',
  input: {},
});
