import { exposeComponent } from '@hashbrownai/angular';
import { LanguagesAndLocationWidgetComponent } from './languages-and-location.component';

export { LanguagesAndLocationWidgetComponent };

export const LanguagesAndLocationWidget = exposeComponent(LanguagesAndLocationWidgetComponent, {
  name: 'LanguagesAndLocationWidget',
  description:
    'Shows Erik\'s spoken languages (Italian native, English C1 in progress, German A1), ' +
    'his location (Reggio Emilia, Emilia-Romagna, Italy), timezone (CET/CEST), ' +
    'and availability for remote work worldwide. ' +
    'Use when the visitor asks about languages, location, timezone, remote work capability, ' +
    'or where Erik is based.',
  input: {},
});
