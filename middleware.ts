import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const hostname = request.headers.get('host') || '';

  // Canonical domain enforcement (www + HTTPS)
  const canonicalDomain = 'www.aliantehomesforsale.com';
  const isLocalhost = hostname.includes('localhost');
  const isVercel = hostname.includes('vercel.app');

  // Skip redirects for development/preview environments
  if (isLocalhost || isVercel) {
    return NextResponse.next();
  }

  // Check if request needs redirect to canonical domain
  // This handles: http://domain.com, https://domain.com, http://www.domain.com
  const needsRedirect =
    hostname !== canonicalDomain ||
    url.protocol === 'http:';

  if (needsRedirect) {
    // Force HTTPS and www in a single redirect (avoid redirect chains)
    url.protocol = 'https:';
    url.host = canonicalDomain;

    // 301 Permanent Redirect - tells search engines this is permanent
    return NextResponse.redirect(url, { status: 301 });
  }

  // Add canonical URL header for proper indexing
  const response = NextResponse.next();
  response.headers.set('X-Canonical-URL', `https://${canonicalDomain}${url.pathname}${url.search}`);

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (public folder)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|xml|txt)).*)',
  ],
};
