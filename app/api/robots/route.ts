import { NextResponse } from 'next/server';

export async function GET() {
  const robotsTxt = `User-agent: *
Allow: /

# Sitemaps
Sitemap: https://aliantehomesforsale.com/sitemap.xml

# Disallow admin and private areas
Disallow: /api/
Disallow: /_next/
Disallow: /admin/

# Allow important pages
Allow: /neighborhoods/
Allow: /homes-for-sale/
Allow: /new-construction/
Allow: /contact/
Allow: /home-valuation/

# Crawl delay for better server performance
Crawl-delay: 1`;

  return new NextResponse(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}
