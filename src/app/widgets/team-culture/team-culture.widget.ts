import { exposeComponent } from '@hashbrownai/angular';
import { TeamCultureWidgetComponent } from './team-culture.component';

export { TeamCultureWidgetComponent };

export const TeamCultureWidget = exposeComponent(TeamCultureWidgetComponent, {
  name: 'TeamCultureWidget',
  description:
    "Shows Erik's team culture fit: he participates in dev challenges and coding competitions, coordinates team sports, and thrives in collaborative high-performance environments. " +
    'Use when the visitor asks about teamwork, culture fit, what Erik is like to work with, or how he operates in a team context.',
  input: {},
});
