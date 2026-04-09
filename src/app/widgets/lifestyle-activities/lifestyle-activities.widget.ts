import { exposeComponent } from '@hashbrownai/angular';
import { LifestyleActivitiesWidgetComponent } from './lifestyle-activities.component';

export { LifestyleActivitiesWidgetComponent };

export const LifestyleActivitiesWidget = exposeComponent(LifestyleActivitiesWidgetComponent, {
  name: 'LifestyleActivitiesWidget',
  description:
    "Activity dashboard showing Erik's endurance and outdoor lifestyle metrics: running half-marathons (21.1 km), mountain trekking (3000 m+ altitude), bouldering/climbing (V5), board games (Wingspan/Catan), and Google Local Guide Lv. 6. " +
    'Use when the visitor asks about hobbies, what Erik does outside work, his lifestyle, or physical activities. Different from PersonalInterestsWidget — this one focuses on measurable activity data.',
  input: {},
});
