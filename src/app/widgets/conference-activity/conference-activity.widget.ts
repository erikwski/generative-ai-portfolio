import { exposeComponent } from '@hashbrownai/angular';
import { ConferenceActivityWidgetComponent } from './conference-activity.component';

export { ConferenceActivityWidgetComponent };

export const ConferenceActivityWidget = exposeComponent(ConferenceActivityWidgetComponent, {
  name: 'ConferenceActivityWidget',
  description:
    "Displays Erik's conference attendance history and speaking ambitions: " +
    'AWS Summit (May 2022), ng-rome (Dec 2022 — first, formative), ng-rome 2024 (Manfred Steyer workshop), ' +
    'Modena DevFest (2024 + 2025), and WebDay (2026). ' +
    'Also surfaces his goal to speak on maintaining architectural discipline in the AI era. ' +
    'Use when the visitor asks about conferences, community involvement, public speaking, ' +
    'tech events Erik attends, or his speaking ambitions.',
  input: {},
});
