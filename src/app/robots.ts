import type { MetadataRoute } from 'next';
import { BRAND } from '@/lib/copy';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/'],
    },
    sitemap: `${BRAND.siteUrl}/sitemap.xml`,
  };
}
