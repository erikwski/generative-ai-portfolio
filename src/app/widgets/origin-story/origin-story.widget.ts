import { exposeComponent } from '@hashbrownai/angular';
import { OriginStoryWidgetComponent } from './origin-story.component';

export { OriginStoryWidgetComponent };

export const OriginStoryWidget = exposeComponent(OriginStoryWidgetComponent, {
  name: 'OriginStoryWidget',
  description:
    "Use when visitor asks about Erik's background, career history, how he got started, personal story, career path, or what led him to where he is today.",
  input: {},
});
