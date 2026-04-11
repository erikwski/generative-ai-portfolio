import { exposeComponent } from '@hashbrownai/angular';
import { ReadingListWidgetComponent } from './reading-list.component';

export { ReadingListWidgetComponent };

export const ReadingListWidget = exposeComponent(ReadingListWidgetComponent, {
  name: 'ReadingListWidget',
  description:
    "Use when visitor asks about books, reading, what influenced Erik's thinking, his philosophy sources, or intellectual interests.",
  input: {},
});
