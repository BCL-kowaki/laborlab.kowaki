import type { MetadataRoute } from 'next';
import { BRAND } from '@/lib/copy';

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
    '/staff',
    '/news',
    '/blog',
    '/forms',
    '/faq',
    '/contact',
    '/privacy',
    '/terms',
  ];

  return staticPages.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1.0 : 0.8,
  }));
}
