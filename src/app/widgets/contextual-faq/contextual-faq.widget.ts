import { exposeComponent } from '@hashbrownai/angular';
import { ContextualFaqWidgetComponent } from './contextual-faq.component';

export { ContextualFaqWidgetComponent };

export const ContextualFaqWidget = exposeComponent(ContextualFaqWidgetComponent, {
  name: 'ContextualFaqWidget',
  description:
    "Shows 3 Q&A pairs adapted to the visitor's role (developer, recruiter, or client). " +
    'Developer: stack questions and collaboration style. Recruiter: Tech Lead readiness and enterprise experience. Client: business acceleration and project setup. ' +
    'Use when the visitor wants quick answers, asks "what should I know about Erik?", or needs a structured overview.',
  input: {},
});
