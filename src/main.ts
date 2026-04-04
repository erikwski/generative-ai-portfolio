import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LOCALE_ID } from '@angular/core';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { detectLocale, loadLocale } from './locales';

const locale = detectLocale();

loadLocale(locale).then(() => {
  bootstrapApplication(App, {
    ...appConfig,
    providers: [
      ...appConfig.providers,
      provideAnimationsAsync(),
      { provide: LOCALE_ID, useValue: locale },
    ],
  });
}).catch(console.error);
