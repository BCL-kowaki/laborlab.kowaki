import type { MetadataRoute } from 'next';
import { BRAND, SERVICES } from '@/lib/copy';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = BRAND.siteUrl;
  const now = new Date();

  const staticPages = [
    '',
    '/about',
    '/about/greeting',
    '/about/overview',
    '/about/access',
    '/services',
    '/pricing',
    '/cases',
    '/staff',
    '/news',
    '/blog',
    '/faq',
    '/contact',
    '/privacy',
    '/terms',
  ];

  const serviceSlugs = SERVICES.items.map((s) => `/services/${s.slug}`);

  return [...staticPages, ...serviceSlugs].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1.0 : 0.8,
  }));
}
