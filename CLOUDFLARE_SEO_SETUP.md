# Cloudflare + SEO Configuration Guide

Since your site uses **Cloudflare DNS and Workers**, here's how to properly configure everything for optimal SEO.

---

## 🌐 Cloudflare DNS Setup

### 1. Configure WWW Redirect (Cloudflare, not Vercel)

Since Cloudflare handles your DNS, the www redirect should be configured there:

**Option A: Cloudflare Page Rule (Recommended)**

1. Go to Cloudflare Dashboard → Your Domain
2. Click **Rules** → **Page Rules**
3. Create a new rule:
   - **URL**: `aliantehomesforsale.com/*`
   - **Setting**: Forwarding URL
   - **Status Code**: 301 (Permanent Redirect)
   - **Destination**: `https://www.aliantehomesforsale.com/$1`
4. Save and Deploy

**Option B: Cloudflare Redirect Rule (Modern)**

1. Go to **Rules** → **Redirect Rules**
2. Create rule:
   - **Field**: Hostname
   - **Operator**: equals
   - **Value**: `aliantehomesforsale.com`
   - **Type**: Dynamic
   - **Expression**: `concat("https://www.aliantehomesforsale.com", http.request.uri.path)`
   - **Status Code**: 301
3. Deploy

### 2. DNS Records

Ensure you have these DNS records:

```
Type  Name  Content                          Proxy Status
A     @     [Your Vercel IP]                 Proxied (Orange Cloud)
CNAME www   cname.vercel-dns.com             Proxied (Orange Cloud)
```

---

## ⚙️ Cloudflare Workers Considerations

### RealScout Widget Handling

Your RealScout widget loads from `https://em.realscout.com`. Ensure your Worker:

1. **Doesn't Cache Widget Scripts**
   ```javascript
   // In your Cloudflare Worker
   if (request.url.includes('realscout') || request.url.includes('em.realscout.com')) {
     // Bypass cache for RealScout scripts
     return fetch(request, { cf: { cacheTtl: 0 } });
   }
   ```

2. **Allows External Scripts**
   ```javascript
   // Ensure CSP headers allow RealScout
   const cspHeader = "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://em.realscout.com https://www.googletagmanager.com https://www.google-analytics.com; ...";
   ```

### SEO-Friendly Worker Configuration

```javascript
// Example Cloudflare Worker for SEO
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url)
  
  // 1. Redirect non-www to www
  if (url.hostname === 'aliantehomesforsale.com') {
    url.hostname = 'www.aliantehomesforsale.com'
    return Response.redirect(url.toString(), 301)
  }
  
  // 2. Don't cache sitemap.xml and robots.txt
  if (url.pathname === '/sitemap.xml' || url.pathname === '/robots.txt') {
    const response = await fetch(request)
    const newResponse = new Response(response.body, response)
    newResponse.headers.set('Cache-Control', 'public, max-age=3600, s-maxage=3600')
    return newResponse
  }
  
  // 3. Pass through to origin (Vercel)
  return fetch(request)
}
```

---

## 📊 Cloudflare Caching for SEO

### 1. Cache Rules for Performance

**Cache Static Assets**
- Path: `/_next/static/*`
- Edge Cache TTL: 1 year
- Browser Cache TTL: 1 year

**Cache Images**
- Path: `/images/*`
- Edge Cache TTL: 1 month
- Browser Cache TTL: 1 week

**Don't Cache Dynamic Content**
- Path: `/api/*` - Bypass cache
- Path: `/sitemap.xml` - Cache for 1 hour
- Path: `/robots.txt` - Cache for 1 hour

### 2. Cloudflare Page Rules for SEO

Create these page rules (order matters):

1. **Sitemap/Robots Caching**
   - URL: `*aliantehomesforsale.com/*sitemap.xml`
   - Settings:
     - Cache Level: Standard
     - Edge Cache TTL: 1 hour
     - Browser Cache TTL: 1 hour

2. **API Bypass**
   - URL: `*aliantehomesforsale.com/api/*`
   - Settings:
     - Cache Level: Bypass

3. **Static Assets**
   - URL: `*aliantehomesforsale.com/_next/static/*`
   - Settings:
     - Cache Level: Cache Everything
     - Edge Cache TTL: 1 year

---

## 🔧 Updated Vercel Configuration

Remove the redirect from `vercel.json` since Cloudflare handles it:

```json
{
  "version": 2,
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs",
  "functions": {
    "app/**/*.tsx": {
      "maxDuration": 60
    }
  },
  "regions": ["iad1"],
  "headers": [
    {
      "source": "/_next/static/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    },
    {
      "source": "/api/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=300, s-maxage=600"
        }
      ]
    }
  ]
}
```

---

## 🚀 Cloudflare Speed & Performance

### Enable These Features:

1. **Auto Minify**
   - Go to Speed → Optimization
   - Enable: JavaScript, CSS, HTML

2. **Brotli Compression**
   - Speed → Optimization → Enable Brotli

3. **Early Hints**
   - Speed → Optimization → Enable Early Hints

4. **HTTP/3 (QUIC)**
   - Network → Enable HTTP/3

5. **0-RTT Connection Resumption**
   - Network → Enable 0-RTT

6. **Rocket Loader** (Caution)
   - ⚠️ **DISABLE for RealScout** - Can break third-party widgets
   - If enabled, exclude: `/*realscout*`

---

## 🔒 Security Headers via Cloudflare

Add these headers via **Transform Rules**:

```
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Referrer-Policy: origin-when-cross-origin
Permissions-Policy: geolocation=(), microphone=(), camera=()
```

---

## 🗺️ Sitemap Handling with Cloudflare

### Test Your Sitemap

```bash
# Direct from Vercel (should work)
curl https://aliantehomesforsale.com.vercel.app/sitemap.xml

# Through Cloudflare (should also work)
curl https://www.aliantehomesforsale.com/sitemap.xml
```

### Cloudflare Worker for Sitemap

If you need custom sitemap handling:

```javascript
// Add to your Cloudflare Worker
if (url.pathname === '/sitemap.xml') {
  const response = await fetch(request)
  
  // Add custom headers
  const newResponse = new Response(response.body, response)
  newResponse.headers.set('Content-Type', 'application/xml')
  newResponse.headers.set('Cache-Control', 'public, max-age=3600')
  newResponse.headers.set('X-Robots-Tag', 'noindex') // Sitemaps shouldn't be indexed
  
  return newResponse
}
```

---

## 📈 Google Analytics with Cloudflare

Ensure Google Analytics loads properly:

1. **Cloudflare Zaraz** (Optional - Cloudflare's Analytics Proxy)
   - Can improve loading time
   - Bypass ad blockers
   - Setup in Cloudflare Dashboard → Zaraz

2. **OR Traditional GA4** (Current Setup)
   - Already configured in your site
   - Just add CSP headers to allow Google domains

### CSP Headers for Analytics

```javascript
// In your Cloudflare Worker or Transform Rules
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://em.realscout.com https://www.googletagmanager.com https://www.google-analytics.com https://ssl.google-analytics.com",
  "img-src 'self' data: https: https://www.google-analytics.com https://ssl.google-analytics.com",
  "connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com https://region1.analytics.google.com",
  "style-src 'self' 'unsafe-inline'",
  "font-src 'self' data:",
].join('; ')

response.headers.set('Content-Security-Policy', csp)
```

---

## 🔍 Google Search Console with Cloudflare

### Verification Methods

**Option 1: Meta Tag (Already Added)**
- Already in your `app/layout.tsx`
- Just verify in Search Console

**Option 2: DNS TXT Record**
1. Google gives you a TXT record
2. Add to Cloudflare DNS:
   ```
   Type: TXT
   Name: @
   Content: google-site-verification=XXXXX
   ```
3. Verify in Search Console

**Option 3: HTML File**
1. Add verification file to `public/` folder
2. Deploy to Vercel
3. Cloudflare will proxy it automatically
4. Verify in Search Console

---

## ⚡ Cloudflare Workers KV for Dynamic Content (Optional)

If you want to cache API responses:

```javascript
// Store MLS data in Workers KV
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const cache = caches.default
  const url = new URL(request.url)
  
  // Cache API responses
  if (url.pathname.startsWith('/api/properties')) {
    let response = await cache.match(request)
    
    if (!response) {
      response = await fetch(request)
      // Cache for 5 minutes
      const newResponse = new Response(response.body, response)
      newResponse.headers.set('Cache-Control', 'public, max-age=300')
      event.waitUntil(cache.put(request, newResponse.clone()))
      return newResponse
    }
    
    return response
  }
  
  return fetch(request)
}
```

---

## ✅ Cloudflare + SEO Checklist

### DNS & Redirects
- [ ] Configure non-www to www redirect in Cloudflare (Page Rule or Redirect Rule)
- [ ] Set DNS records pointing to Vercel
- [ ] Enable Cloudflare Proxy (Orange Cloud)
- [ ] Test redirect: `curl -I http://aliantehomesforsale.com`

### Caching
- [ ] Set cache rules for static assets (1 year)
- [ ] Set cache rules for sitemap/robots (1 hour)
- [ ] Bypass cache for API routes
- [ ] Test: `curl -I https://www.aliantehomesforsale.com/sitemap.xml`

### Performance
- [ ] Enable Auto Minify (JS, CSS, HTML)
- [ ] Enable Brotli compression
- [ ] Enable Early Hints
- [ ] Enable HTTP/3
- [ ] **DISABLE Rocket Loader** (breaks RealScout widget)

### Security
- [ ] Set security headers via Transform Rules
- [ ] Configure CSP to allow RealScout and Google Analytics
- [ ] Enable DNSSEC
- [ ] Set SSL to Full (Strict)

### Analytics
- [ ] Google Analytics working through Cloudflare
- [ ] RealScout widget loading correctly
- [ ] No CSP violations in browser console

### Google Search Console
- [ ] Site verified (meta tag or DNS)
- [ ] Sitemap submitted and indexed
- [ ] No crawl errors
- [ ] Mobile usability passing

---

## 🐛 Troubleshooting Cloudflare + SEO

### Sitemap Not Loading

**Issue**: 404 on sitemap.xml  
**Fix**: 
1. Check Vercel deployment has `app/sitemap.ts`
2. Test direct Vercel URL: `https://[your-site].vercel.app/sitemap.xml`
3. Clear Cloudflare cache: Caching → Configuration → Purge Everything
4. Check Page Rules aren't blocking

### RealScout Widget Not Loading

**Issue**: Widget fails to load  
**Fix**:
1. Check CSP headers allow `em.realscout.com`
2. **Disable Rocket Loader** in Cloudflare
3. Disable "Browser Integrity Check" if enabled
4. Check Worker isn't blocking external scripts

### Google Analytics Not Tracking

**Issue**: No data in GA4  
**Fix**:
1. Verify CSP allows Google Analytics domains
2. Check Cloudflare isn't stripping GA scripts
3. Test in Incognito mode
4. Check Workers aren't modifying HTML

### Slow Performance Despite Cloudflare

**Issue**: Site still slow  
**Fix**:
1. Check cache hit ratio in Cloudflare Analytics
2. Enable Argo Smart Routing (paid feature)
3. Use Cloudflare Images for optimization
4. Check origin (Vercel) performance first

---

## 📚 Resources

- [Cloudflare Page Rules](https://developers.cloudflare.com/rules/page-rules/)
- [Cloudflare Workers](https://developers.cloudflare.com/workers/)
- [Cloudflare DNS](https://developers.cloudflare.com/dns/)
- [Cloudflare Cache](https://developers.cloudflare.com/cache/)
- [Cloudflare Security](https://developers.cloudflare.com/waf/)

---

## 🎯 Summary

Your setup: **Next.js (Vercel) + Cloudflare DNS + Workers**

**Cloudflare Handles**:
- DNS management
- WWW redirects (via Page Rules)
- CDN caching
- DDoS protection
- SSL/TLS

**Vercel Handles**:
- Next.js app hosting
- Automatic sitemap generation (`/sitemap.xml`)
- Automatic robots.txt generation (`/robots.txt`)
- Server-side rendering
- API routes

**For Best SEO**:
1. Remove redirect from `vercel.json` (done)
2. Add redirect in Cloudflare Page Rules (your action)
3. Cache sitemap for 1 hour in Cloudflare
4. Ensure RealScout widget loads (disable Rocket Loader)
5. Test everything through Cloudflare proxy

Your site is now fully optimized for Cloudflare + Google SEO! 🚀

