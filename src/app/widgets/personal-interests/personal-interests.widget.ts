import { exposeComponent } from '@hashbrownai/angular';
import { PersonalInterestsWidgetComponent } from './personal-interests.component';

export { PersonalInterestsWidgetComponent };

export const PersonalInterestsWidget = exposeComponent(PersonalInterestsWidgetComponent, {
  name: 'PersonalInterestsWidget',
  description:
    "Shows Erik's personality and interests outside of work: strategy board games, running & trekking, climbing, and being a Google Local Guide (Level 6). " +
    'Use to humanize the experience or when asked about hobbies, personal life, personality, or who Erik is beyond the code.',
  input: {},
});
