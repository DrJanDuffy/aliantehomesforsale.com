# Vercel Deployment Guide

## Overview
This project has been optimized for Vercel deployment with performance, SEO, and security enhancements.

## Pre-deployment Checklist

### 1. Environment Variables
Set these in your Vercel dashboard:
```bash
# Required for production
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://aliantehomesforsale.com

# Optional: Google Analytics
NEXT_PUBLIC_GA_ID=your-ga-id
GOOGLE_VERIFICATION=your-google-verification-code

# Optional: Database (if using)
DATABASE_URL=your-database-url
```

### 2. Build Settings
- **Framework Preset**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

### 3. Domain Configuration
- Add your custom domain in Vercel dashboard
- Configure DNS records as instructed by Vercel
- Enable HTTPS (automatic with Vercel)

## Performance Optimizations

### Core Web Vitals
- Font optimization with `display: swap`
- Image optimization with WebP/AVIF support
- Lazy loading for images
- Performance monitoring component

### Caching Strategy
- Static assets: 1 year cache
- API routes: 24 hour cache
- HTML pages: No cache (for dynamic content)

### Security Headers
- X-Content-Type-Options: nosniff
- X-Frame-Options: DENY
- X-XSS-Protection: 1; mode=block
- Referrer-Policy: origin-when-cross-origin

## SEO Features

### Meta Tags
- Open Graph tags for social media
- Twitter Card support
- Structured data ready
- Canonical URLs

### Sitemap & Robots
- Dynamic sitemap generation
- Robots.txt with crawl directives
- Search engine friendly URLs

## Monitoring & Analytics

### Vercel Analytics
- Automatic performance monitoring
- Core Web Vitals tracking
- Real user metrics

### Performance Metrics
- Largest Contentful Paint (LCP)
- First Input Delay (FID)
- Cumulative Layout Shift (CLS)
- Time to First Byte (TTFB)

## Post-deployment

### 1. Verify Performance
- Run Lighthouse audit
- Check Core Web Vitals in Vercel dashboard
- Monitor real user metrics

### 2. SEO Verification
- Submit sitemap to Google Search Console
- Verify Google Analytics tracking
- Test social media sharing

### 3. Security Check
- Run security audit
- Verify HTTPS is working
- Check security headers

## Troubleshooting

### Common Issues
1. **Build Failures**: Check Node.js version (18+ required)
2. **Performance Issues**: Review image optimization settings
3. **SEO Problems**: Verify meta tags and structured data

### Support
- Vercel Documentation: https://vercel.com/docs
- Next.js Documentation: https://nextjs.org/docs
- Performance Monitoring: Vercel Analytics dashboard
