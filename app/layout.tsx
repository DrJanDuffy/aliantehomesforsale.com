import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Script from 'next/script';
import { siteConfig } from '../lib/site-config';
import './globals.css';
import EnhancedNavigation from './components/EnhancedNavigation';
import Breadcrumbs from './components/Breadcrumbs';
import EnhancedFooter from './components/EnhancedFooter';
import PerformanceMonitor from './components/PerformanceMonitor';
import GoogleAnalytics from './components/GoogleAnalytics';
import RealScoutOfficeListingsSection from './components/RealScoutOfficeListingsSection';
import RealScoutSearchSection from './components/RealScoutSearchSection';
import StructuredData from './components/StructuredData';
import LocationSchema from './components/LocationSchema';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: siteConfig.defaultTitle,
  description: siteConfig.defaultDescription,
  keywords:
    'Aliante North Las Vegas homes for sale, Aliante real estate, North Las Vegas homes, 89084 homes for sale, Aliante gated community, Sun City Aliante, Club Aliante, new construction Aliante, Aliante MLS listings, houses for rent Aliante',
  authors: [{ name: siteConfig.siteName }],
  creator: siteConfig.siteName,
  publisher: siteConfig.siteName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(siteConfig.siteUrl),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
    url: siteConfig.siteUrl,
    siteName: siteConfig.siteName,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Aliante North Las Vegas Real Estate & Homes For Sale',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  other: {
    'geo.region': 'US-NV',
    'geo.placename': `${siteConfig.areaName}, ${siteConfig.region}`,
    'geo.position': `${siteConfig.geo.latitude};${siteConfig.geo.longitude}`,
    ICBM: `${siteConfig.geo.latitude}, ${siteConfig.geo.longitude}`,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <GoogleAnalytics
          measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX'}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* RealScout: load once for all widgets (office-listings, search, etc.) */}
        <Script
          src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
          strategy="afterInteractive"
          type="module"
        />

        {/* Core Structured Data - Organization, LocalBusiness, RealEstateAgent, WebSite (GEO/AEO) */}
        <StructuredData type="Organization" />
        <StructuredData type="LocalBusiness" />
        <StructuredData type="RealEstateAgent" />
        <StructuredData type="WebSite" />
        <LocationSchema />

        <EnhancedNavigation />
        <Breadcrumbs />

        {children}

        {/* RealScout search (lead gen): below hero / below the fold on every page */}
        <RealScoutSearchSection />

        {/* RealScout office listings: below the fold on every page */}
        <RealScoutOfficeListingsSection />

        <PerformanceMonitor />

        {/* Enhanced Footer with SEO-optimized structure */}
        <EnhancedFooter />
      </body>
    </html>
  );
}
