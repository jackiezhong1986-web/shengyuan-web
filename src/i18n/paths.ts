import { getRelativeLocaleUrl } from 'astro:i18n';
import type { Locale, NavKey } from './ui';

export const routes: Record<NavKey, string> = {
  home: '',
  capabilities: 'capabilities',
  scenarios: 'scenarios',
  delivery: 'delivery',
  contact: 'contact',
};

export function localePath(locale: Locale, key: NavKey): string {
  const path = routes[key];
  return getRelativeLocaleUrl(locale, path);
}

export function pageLocale(url: URL): Locale {
  const first = url.pathname.split('/').filter(Boolean)[0];
  if (first === 'en') return 'en';
  if (first === 'vi') return 'vi';
  return 'zh';
}

export function currentNav(url: URL): NavKey {
  const parts = url.pathname.split('/').filter(Boolean);
  const last = parts[0] === 'en' || parts[0] === 'vi' ? parts[1] : parts[0];
  if (last === 'capabilities') return 'capabilities';
  if (last === 'scenarios') return 'scenarios';
  if (last === 'delivery') return 'delivery';
  if (last === 'contact') return 'contact';
  return 'home';
}
