import type { MetadataRoute } from 'next';

// This file generates sitemap.xml for Google Search Console
// IMPORTANT: Must return absolute URLs with https:// protocol
export default function sitemap(): MetadataRoute.Sitemap {
  // Force production URL - ignore VERCEL_URL and all env detection
  // Next.js sitemap REQUIRES absolute URLs with protocol
  const baseUrl = 'https://www.aliantehomesforsale.com';
  const currentDate = new Date();

  // Define all static routes with ABSOLUTE URLs
  const routes: MetadataRoute.Sitemap = [
    {
      url: 'https://www.aliantehomesforsale.com',
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: 'https://www.aliantehomesforsale.com/homes-for-sale',
      lastModified: currentDate,
      changeFrequency: 'hourly',
      priority: 0.9,
    },
    {
      url: 'https://www.aliantehomesforsale.com/new-construction',
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: 'https://www.aliantehomesforsale.com/search',
      lastModified: currentDate,
      changeFrequency: 'hourly',
      priority: 0.9,
    },
    {
      url: 'https://www.aliantehomesforsale.com/neighborhoods',
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://www.aliantehomesforsale.com/contact',
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: 'https://www.aliantehomesforsale.com/home-valuation',
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
      url: `https://www.aliantehomesforsale.com/neighborhoods/${neighborhood}`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    });
  });

  return routes;
}

