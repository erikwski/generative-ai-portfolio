import { loadTranslations } from '@angular/localize';
import { en } from './en';
import { flattenTranslations } from './types';

export type SupportedLocale = 'en' | 'it' | 'de';

export const SUPPORTED_LOCALES: SupportedLocale[] = ['en', 'it', 'de'];

const STORAGE_KEY = 'locale';

export function detectLocale(): SupportedLocale {
  if (typeof localStorage !== 'undefined') {
    const stored = localStorage.getItem(STORAGE_KEY) as SupportedLocale | null;
    if (stored && SUPPORTED_LOCALES.includes(stored)) return stored;
  }

  if (typeof navigator !== 'undefined') {
    const preferred = navigator.languages ?? [navigator.language];
    for (const lang of preferred) {
      const code = lang.split('-')[0].toLowerCase() as SupportedLocale;
      if (SUPPORTED_LOCALES.includes(code)) return code;
    }
  }

  return 'en';
}

export function switchLocale(locale: SupportedLocale): void {
  localStorage.setItem(STORAGE_KEY, locale);
  window.location.reload();
}

export async function loadLocale(locale: SupportedLocale): Promise<void> {
  const translations =
    locale === 'it' ? (await import('./it')).it
    : locale === 'de' ? (await import('./de')).de
    : en;

  loadTranslations(flattenTranslations(translations));
}
