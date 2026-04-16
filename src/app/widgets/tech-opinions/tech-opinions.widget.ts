import { exposeComponent } from '@hashbrownai/angular';
import { TechOpinionsWidgetComponent } from './tech-opinions.component';

export { TechOpinionsWidgetComponent };

export const TechOpinionsWidget = exposeComponent(TechOpinionsWidgetComponent, {
  name: 'TechOpinionsWidget',
  description:
    'Displays Erik\'s technical opinions as expandable cards. ' +
    'Topics: AI & the future of frontend development, Angular vs React, monorepos, ' +
    'junior developers in the AI era, backend preferences, WebAssembly, Italian tech landscape. ' +
    'Use when the visitor asks about Erik\'s opinions, takes on technology, framework choices, ' +
    'the future of software, or what he actually thinks about X.',
  input: {},
});
