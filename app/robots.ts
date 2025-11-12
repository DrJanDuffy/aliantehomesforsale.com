import type { MetadataRoute } from 'next';

// This file generates robots.txt for search engine crawlers
export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.aliantehomesforsale.com';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/'],
      },
      {
        userAgent: 'Googlebot-Image',
        allow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    // Note: 'host' directive removed - deprecated by Google and can cause confusion
  };
}

