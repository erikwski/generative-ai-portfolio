import { exposeComponent } from '@hashbrownai/angular';
import { MusicTasteWidgetComponent } from './music-taste.component';

export { MusicTasteWidgetComponent };

export const MusicTasteWidget = exposeComponent(MusicTasteWidgetComponent, {
  name: 'MusicTasteWidget',
  description:
    "Use when visitor asks about Erik's personal interests, music, vinyl, hi-fi, favourite artists, or what he does outside of work.",
  input: {},
});
