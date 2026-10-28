import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import seoMeta from '@/seoMeta.json';

// Keep in sync with scripts/prerender.mjs (the build step reads the same seoMeta.json).
export const SITE_URL = 'https://servicetosecurity.com';

type PageMeta = { title: string; description: string; canonical?: string };
const table = seoMeta as Record<string, PageMeta>;

const normalizePath = (p: string) => {
  const trimmed = p.replace(/\/+$/, '');
  return trimmed === '' ? '/' : trimmed;
};

// Pages are served from folders on GitHub Pages, so the real URL ends in "/".
const toUrl = (path: string) => SITE_URL + (path === '/' ? '/' : path.replace(/\/?$/, '/'));

const upsert = (selector: string, create: () => HTMLElement) => {
  let el = document.head.querySelector(selector) as HTMLElement | null;
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  return el;
};

const setMeta = (attr: 'name' | 'property', key: string, content: string) => {
  const el = upsert(`meta[${attr}="${key}"]`, () => {
    const m = document.createElement('meta');
    m.setAttribute(attr, key);
    return m;
  });
  el.setAttribute('content', content);
};

/** Sets the title, description, canonical and social tags for the current route. */
export function usePageMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const path = normalizePath(pathname);
    const meta = table[path];
    if (!meta) return;

    const url = meta.canonical ? SITE_URL + meta.canonical : toUrl(path);

    document.title = meta.title;
    setMeta('name', 'description', meta.description);
    setMeta('property', 'og:title', meta.title);
    setMeta('property', 'og:description', meta.description);
    setMeta('property', 'og:url', url);
    setMeta('name', 'twitter:title', meta.title);
    setMeta('name', 'twitter:description', meta.description);
    setMeta('name', 'twitter:url', url);

    const link = upsert('link[rel="canonical"]', () => {
      const l = document.createElement('link');
      l.setAttribute('rel', 'canonical');
      return l;
    });
    link.setAttribute('href', url);
  }, [pathname]);
}
