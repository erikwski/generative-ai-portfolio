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

// Flat translation map kept in memory so widgets can do runtime key lookups.
// Populated by loadLocale() before bootstrap.
let _translations: Record<string, string> = {};

export function getTranslations(): Record<string, string> {
  return _translations;
}

export async function loadLocale(locale: SupportedLocale): Promise<void> {
  const translations =
    locale === 'it' ? (await import('./it')).it
    : locale === 'de' ? (await import('./de')).de
    : en;

  _translations = flattenTranslations(translations);
  loadTranslations(_translations);
}
