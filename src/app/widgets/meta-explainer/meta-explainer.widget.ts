import { exposeComponent } from '@hashbrownai/angular';
import { MetaExplainerWidgetComponent } from './meta-explainer.component';

export { MetaExplainerWidgetComponent };

export const MetaExplainerWidget = exposeComponent(MetaExplainerWidgetComponent, {
  name: 'MetaExplainerWidget',
  description:
    'Explains what this portfolio is and how it works — a generative UI powered by Claude via Hashbrown and Angular SSR, ' +
    'where the layout itself is the AI output. ' +
    'Use when the visitor asks how this portfolio works, what Aura is, how the AI generates the UI, ' +
    'or what the technology behind it is.',
  input: {},
});
