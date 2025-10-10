import type { MetadataRoute } from 'next';

// This file generates sitemap.xml for Google Search Console
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.aliantehomesforsale.com';
  const currentDate = new Date();

  // Define all static routes
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/homes-for-sale`,
      lastModified: currentDate,
      changeFrequency: 'hourly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/new-construction`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/search`,
      lastModified: currentDate,
      changeFrequency: 'hourly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/neighborhoods`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/home-valuation`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
  ];

  // Neighborhood detail pages
  const neighborhoods = [
    'prominence',
    'desert-willows',
    'club-aliante',
    'paseos',
  ];

  neighborhoods.forEach((neighborhood) => {
    routes.push({
      url: `${baseUrl}/neighborhoods/${neighborhood}`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    });
  });

  return routes;
}

