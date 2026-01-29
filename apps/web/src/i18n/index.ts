import type { Locale } from './locales/types';
import { en } from './locales/en';
import { da } from './locales/da';
import { de } from './locales/de';
import { fr } from './locales/fr';

export const translations = {
  en,
  da,
  de,
  fr,
} as const;

export const defaultLang: Locale = 'en';

/**
 * Extract language from URL pathname
 * Examples:
 *  - /de/about -> 'de'
 *  - /about -> 'en' (default)
 *  - /fr/products/trees -> 'fr'
 */
export function getLanguageFromURL(url: URL): Locale {
  const [, lang] = url.pathname.split('/');
  if (lang && (lang === 'da' || lang === 'de' || lang === 'fr')) {
    return lang as Locale;
  }
  return defaultLang;
}

/**
 * Get translation by dot-notation key
 * Example: t('home.hero.title', 'da') -> Danish home hero title
 */
export function t(key: string, lang: Locale = defaultLang): string {
  const keys = key.split('.');
  let value: any = translations[lang];

  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      // Fallback to English if key doesn't exist
      value = translations.en;
      for (const fallbackKey of keys) {
        if (value && typeof value === 'object' && fallbackKey in value) {
          value = value[fallbackKey];
        } else {
          console.warn(`Translation key "${key}" not found for lang "${lang}"`);
          return key;
        }
      }
      break;
    }
  }

  if (typeof value === 'string') {
    return value;
  }

  if (Array.isArray(value)) {
    return value.join(', ');
  }

  console.warn(`Translation key "${key}" returned non-string value for lang "${lang}"`);
  return key;
}

/**
 * Generate localized path
 * Examples:
 *  - getLocalizedPath('/about', 'en') -> '/about'
 *  - getLocalizedPath('/about', 'da') -> '/da/about'
 *  - getLocalizedPath('/products/trees', 'de') -> '/de/products/trees'
 */
export function getLocalizedPath(path: string, lang: Locale): string {
  // Remove trailing slash
  const cleanPath = path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;

  // English doesn't need prefix
  if (lang === defaultLang) {
    return cleanPath;
  }

  // Remove existing language prefix if present
  const pathWithoutLang = cleanPath.replace(/^\/(da|de|fr)/, '');

  // Add language prefix
  return `/${lang}${pathWithoutLang || ''}`;
}

/**
 * Generate alternate language links for hreflang tags
 * Returns array of { lang, url } objects
 */
export function getAlternateLinks(pathname: string, currentLocale: Locale) {
  // Remove language prefix from pathname to get base path
  const basePath = pathname.replace(/^\/(da|de|fr)/, '') || '/';

  const locales: Locale[] = ['en', 'da', 'de', 'fr'];

  return locales.map((locale) => ({
    lang: locale,
    url: getLocalizedPath(basePath, locale),
  }));
}

/**
 * Get canonical URL for a page
 */
export function getCanonicalURL(pathname: string, baseURL: string = 'https://teglgaardwood.dk'): string {
  // Remove language prefix for canonical
  const basePath = pathname.replace(/^\/(da|de|fr)/, '') || '/';
  // Remove trailing slash except for root
  const cleanPath = basePath.endsWith('/') && basePath !== '/' ? basePath.slice(0, -1) : basePath;
  return `${baseURL}${cleanPath}`;
}

export type { Locale };
