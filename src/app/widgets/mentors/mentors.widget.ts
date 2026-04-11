import { exposeComponent } from '@hashbrownai/angular';
import { MentorsWidgetComponent } from './mentors.component';

export { MentorsWidgetComponent };

export const MentorsWidget = exposeComponent(MentorsWidgetComponent, {
  name: 'MentorsWidget',
  description:
    "Displays the 6 people who shaped Erik's thinking and career: " +
    'Paolo Nobile (Smarthy — low-level web foundations), ' +
    'Giovanni Colacitti (ACSoftware — Angular design patterns), ' +
    'Gabriele Campi (Datacolor — architecture and domain library boundaries), ' +
    'Manfred Steyer (Angular GDE — DDD on frontend), ' +
    'Fabio Biondi (Angular community Italy), ' +
    'and Soumaya Erradi (consistent quality talks). ' +
    'Also mentions his best friend whom he brought to Datacolor. ' +
    "Use when the visitor asks about Erik's mentors, people who influenced him, " +
    'his network, who taught him, or key relationships in his career.',
  input: {},
});
