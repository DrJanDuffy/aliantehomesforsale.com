# Google SEO Setup Guide for Aliante Homes For Sale

This guide will help you set up and optimize your site for Google search.

## 📋 Table of Contents

1. [Google Search Console Setup](#google-search-console-setup)
2. [Google Analytics 4 Setup](#google-analytics-4-setup)
3. [Sitemap Submission](#sitemap-submission)
4. [Structured Data Verification](#structured-data-verification)
5. [Core Web Vitals Monitoring](#core-web-vitals-monitoring)
6. [Local SEO Optimization](#local-seo-optimization)

---

## 🔍 Google Search Console Setup

### Step 1: Verify Your Website

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Click **Add Property**
3. Enter your domain: `www.aliantehomesforsale.com`
4. Choose verification method:

#### Option A: HTML File Upload (Recommended)
- Download the verification file
- Upload to `public/` directory
- Deploy to Vercel
- Click **Verify**

#### Option B: DNS Verification
- Add TXT record to your DNS settings
- Wait for DNS propagation (5-30 minutes)
- Click **Verify**

#### Option C: HTML Meta Tag
- Add the meta tag to `app/layout.tsx` in the metadata:
  ```typescript
  verification: {
    google: 'your-google-verification-code-here',
  },
  ```
- Deploy and verify

### Step 2: Submit Your Sitemap

1. In Google Search Console, go to **Sitemaps**
2. Enter: `https://www.aliantehomesforsale.com/sitemap.xml`
3. Click **Submit**

Your sitemap is automatically generated at build time and includes:
- Homepage
- Property listings pages
- Neighborhood pages
- New construction pages
- Contact and valuation pages

### Step 3: Request Indexing

For important pages, manually request indexing:
1. Go to **URL Inspection**
2. Enter page URL
3. Click **Request Indexing**

---

## 📊 Google Analytics 4 Setup

### Step 1: Create GA4 Property

1. Go to [Google Analytics](https://analytics.google.com)
2. Click **Admin** → **Create Property**
3. Enter property name: "Aliante Homes For Sale"
4. Select timezone and currency
5. Click **Create**

### Step 2: Get Your Measurement ID

1. Go to **Admin** → **Data Streams**
2. Click **Add Stream** → **Web**
3. Enter your website URL: `https://www.aliantehomesforsale.com`
4. Copy your **Measurement ID** (format: G-XXXXXXXXXX)

### Step 3: Add to Your Site

1. Create `.env.local` file in your project root:
   ```bash
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```

2. Add to Vercel Environment Variables:
   - Go to your Vercel project settings
   - Navigate to **Environment Variables**
   - Add: `NEXT_PUBLIC_GA_MEASUREMENT_ID` = `G-XXXXXXXXXX`
   - Apply to Production, Preview, and Development
   - Redeploy your site

### Step 4: Verify Tracking

1. Visit your website
2. In Google Analytics, go to **Reports** → **Realtime**
3. Verify you see your visit

---

## 🗺️ Sitemap Submission

Your sitemap is automatically generated using Next.js 15's native sitemap feature.

### Current Sitemap Structure

**Location**: `app/sitemap.ts`

**URL**: `https://www.aliantehomesforsale.com/sitemap.xml`

**Pages Included**:
- Homepage (Priority 1.0, Updated Daily)
- Homes For Sale (Priority 0.9, Updated Hourly)
- New Construction (Priority 0.8, Updated Daily)
- Search (Priority 0.9, Updated Hourly)
- Neighborhoods Overview (Priority 0.8, Updated Weekly)
- Individual Neighborhoods (Priority 0.7, Updated Weekly)
- Contact & Valuation (Priority 0.6-0.7)

### Adding New Pages to Sitemap

Edit `app/sitemap.ts` and add new routes:

```typescript
routes.push({
  url: `${baseUrl}/your-new-page`,
  lastModified: currentDate,
  changeFrequency: 'weekly',
  priority: 0.7,
});
```

---

## 🔧 Structured Data Verification

Your site includes rich structured data for better Google understanding.

### Included Schema Types

1. **Organization** - Company information
2. **LocalBusiness** - Real estate agent details
3. **RealEstateAgent** - Agent-specific data
4. **WebSite** - Site-wide search
5. **Breadcrumbs** - Navigation hierarchy
6. **FAQPage** - Frequently asked questions
7. **PropertyListing** - Individual property data

### Test Your Structured Data

1. Go to [Rich Results Test](https://search.google.com/test/rich-results)
2. Enter your page URL
3. Review results and fix any errors

### Example Pages to Test

- Homepage: `https://www.aliantehomesforsale.com`
- Neighborhood: `https://www.aliantehomesforsale.com/neighborhoods/prominence`
- Contact: `https://www.aliantehomesforsale.com/contact`

---

## ⚡ Core Web Vitals Monitoring

Your site includes built-in performance monitoring.

### What Are Core Web Vitals?

- **LCP (Largest Contentful Paint)**: < 2.5s (Good)
- **FID (First Input Delay)**: < 100ms (Good)
- **CLS (Cumulative Layout Shift)**: < 0.1 (Good)

### Monitor in Google Search Console

1. Go to **Core Web Vitals** report
2. Review URL performance
3. Fix issues flagged as "Poor" or "Needs Improvement"

### Monitor in Real-Time

Your site includes `PerformanceMonitor.tsx` that tracks:
- Page load times
- Navigation performance
- User interactions
- Core Web Vitals metrics

Check Vercel Analytics for detailed performance data.

---

## 📍 Local SEO Optimization

### Google Business Profile

1. Create/claim your listing at [Google Business](https://business.google.com)
2. Verify your business address: 2590 Nature Park Drive, Suite 275, North Las Vegas, NV 89084
3. Add business hours: Mon-Fri 8AM-7PM, Sat-Sun 9AM-6PM
4. Upload photos of your office
5. Collect and respond to reviews

### Schema Markup for Local Business

Already implemented in `app/layout.tsx`:

```json
{
  "@type": "RealEstateAgent",
  "name": "Aliante Real Estate",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "2590 Nature Park Drive, Suite 275",
    "addressLocality": "North Las Vegas",
    "addressRegion": "NV",
    "postalCode": "89084"
  },
  "geo": {
    "latitude": 36.1699,
    "longitude": -115.1398
  }
}
```

### Local Citations

Get listed on:
- Zillow
- Realtor.com
- Trulia
- Yelp
- Bing Places
- Apple Maps
- Facebook Business

**Ensure NAP (Name, Address, Phone) consistency across all platforms!**

---

## ✅ Post-Deployment Checklist

### Immediate (Day 1)

- [ ] Verify Google Search Console
- [ ] Submit sitemap
- [ ] Set up Google Analytics 4
- [ ] Test structured data with Rich Results Test
- [ ] Request indexing for key pages (homepage, top 5 pages)

### Week 1

- [ ] Monitor Google Analytics for traffic
- [ ] Check Search Console for indexing issues
- [ ] Create Google Business Profile
- [ ] Submit site to Bing Webmaster Tools
- [ ] Test site speed with PageSpeed Insights

### Month 1

- [ ] Review Core Web Vitals in Search Console
- [ ] Analyze top performing pages
- [ ] Monitor keyword rankings
- [ ] Collect customer reviews
- [ ] Create content calendar for blog posts

### Ongoing Monthly Tasks

- [ ] Review Google Analytics metrics
- [ ] Check Search Console for errors
- [ ] Update sitemap for new pages
- [ ] Monitor Core Web Vitals
- [ ] Track keyword rankings
- [ ] Respond to reviews
- [ ] Add fresh content

---

## 🎯 Quick Wins for Better Rankings

### 1. Title Tags & Meta Descriptions
✅ Already optimized with target keywords and locations

### 2. Mobile-Friendly
✅ Site is fully responsive and mobile-optimized

### 3. Page Speed
✅ Optimized with Next.js 15 and Vercel hosting

### 4. HTTPS
✅ Automatically enabled via Vercel

### 5. Structured Data
✅ Comprehensive schema markup implemented

### 6. Sitemap & Robots.txt
✅ Generated automatically

### 7. Internal Linking
✅ Footer and navigation include all important pages

---

## 📈 Expected Timeline for Results

### Week 1-2: Indexing
- Pages start appearing in Google Search Console
- Basic site structure visible in search

### Month 1: Initial Rankings
- Start ranking for branded terms ("Aliante Homes For Sale")
- Long-tail keywords begin showing impressions

### Month 2-3: Growing Visibility
- More keywords ranking on pages 2-10
- Local searches showing your business
- Increased organic traffic

### Month 3-6: Established Presence
- Ranking for competitive keywords
- Strong local SEO presence
- Consistent organic traffic growth

### Month 6+: Authority Building
- Top rankings for target keywords
- Brand recognition in local market
- Significant organic lead generation

---

## 🆘 Troubleshooting

### Sitemap Not Showing in Google

1. Verify sitemap URL is correct: `https://www.aliantehomesforsale.com/sitemap.xml`
2. Check vercel.json has redirects (not rewrites)
3. Test sitemap loads in browser
4. Wait 24-48 hours after submission

### Pages Not Indexing

1. Check robots.txt allows crawling: `https://www.aliantehomesforsale.com/robots.txt`
2. Verify no `noindex` meta tags
3. Use URL Inspection tool in Search Console
4. Request indexing manually

### Structured Data Errors

1. Test with [Rich Results Test](https://search.google.com/test/rich-results)
2. Fix any validation errors
3. Redeploy site
4. Request re-indexing

### Analytics Not Tracking

1. Verify Measurement ID is correct
2. Check environment variable is set in Vercel
3. Test in Incognito/Private mode
4. Check browser console for errors

---

## 📚 Additional Resources

- [Google Search Central](https://developers.google.com/search)
- [Next.js SEO Guide](https://nextjs.org/learn/seo/introduction-to-seo)
- [Schema.org Documentation](https://schema.org/)
- [Web.dev SEO Audits](https://web.dev/lighthouse-seo/)
- [Vercel Analytics](https://vercel.com/docs/analytics)

---

## 🎉 You're Ready!

Your site is now fully optimized for Google with:

✅ Automatic sitemap generation  
✅ SEO-optimized metadata on all pages  
✅ Rich structured data  
✅ Google Analytics 4 integration  
✅ Performance monitoring  
✅ Mobile-friendly design  
✅ Fast loading times  
✅ Secure HTTPS  
✅ Local SEO optimization  

**Next Steps**: Submit your site to Google Search Console and start monitoring your rankings!

