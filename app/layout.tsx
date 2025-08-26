'use client';

import { useId } from 'react';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navigation from './components/Navigation';
import PerformanceMonitor from './components/PerformanceMonitor';

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
  title: 'Aliante Homes For Sale - Expert Local Realtors | North Las Vegas NV',
  description:
    'Find your perfect Aliante home with local experts. 286+ verified MLS listings updated every 15 minutes. Free market analysis & buyer consultation. Call (702) 555-0123',
  keywords:
    'Aliante homes for sale, Las Vegas real estate, Aliante real estate, homes in Aliante, Las Vegas homes, North Las Vegas real estate, Aliante neighborhoods, new construction Aliante',
  authors: [{ name: 'Aliante Real Estate' }],
  creator: 'Aliante Real Estate',
  publisher: 'Aliante Real Estate',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://aliantehomesforsale.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Aliante Homes For Sale - Expert Local Realtors | North Las Vegas NV',
    description: 'Find your perfect Aliante home with local experts. 286+ verified MLS listings updated every 15 minutes. Free market analysis & buyer consultation. Call (702) 555-0123',
    url: 'https://aliantehomesforsale.com',
    siteName: 'Aliante Real Estate',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Aliante Homes For Sale - Expert Local Realtors | North Las Vegas NV',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aliante Homes For Sale - Expert Local Realtors | North Las Vegas NV',
    description: 'Find your perfect Aliante home with local experts. 286+ verified MLS listings updated every 15 minutes. Free market analysis & buyer consultation. Call (702) 555-0123',
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
    'geo.placename': 'Aliante, North Las Vegas',
    'geo.position': '36.1699;-115.1398',
    'ICBM': '36.1699, -115.1398',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const contactSectionId = useId();

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navigation />
        
        {children}
        <PerformanceMonitor />

        {/* Enhanced Footer */}
        <footer className="main-footer" id={contactSectionId}>
          <div className="container">
            <div className="footer-grid">
              <div className="footer-section">
                <h3>Contact Aliante Real Estate</h3>
                <p style={{ marginBottom: '1rem' }}>Your trusted partner for Aliante homes since 2018</p>
                <div>
                  <p><strong>📞 Phone:</strong> <a href="tel:+17025550123" style={{ color: '#97d8c4' }}>(702) 555-0123</a></p>
                  <p><strong>✉️ Email:</strong> <a href="mailto:info@aliantehomesforsale.com" style={{ color: '#97d8c4' }}>info@aliantehomesforsale.com</a></p>
                  <p><strong>📍 Office:</strong> 2590 Nature Park Drive, Suite 275<br />North Las Vegas, NV 89084</p>
                  <p><strong>🕒 Hours:</strong> Mon-Fri 8AM-7PM, Sat-Sun 9AM-6PM</p>
                </div>
                <div style={{ marginTop: '1rem' }}>
                  <p><strong>Nevada Real Estate License #B.0123456.LLC</strong></p>
                  <p><strong>Equal Housing Opportunity</strong></p>
                </div>
              </div>
              
              <div className="footer-section">
                <h3>New Construction Builders</h3>
                <ul>
                  <li><a href="/builders">All Builders Comparison Guide</a></li>
                  <li><a href="/builders/lennar">Lennar (#1 Volume Builder)</a></li>
                  <li><a href="/builders/dr-horton">D.R. Horton (Tule Springs)</a></li>
                  <li><a href="/builders/tri-pointe">Tri Pointe (Luxury Homes)</a></li>
                  <li><a href="/builders/del-webb">Del Webb (Active Adult 55+)</a></li>
                  <li><a href="/builders/richmond-american">Richmond American Homes</a></li>
                  <li><a href="/builders/incentives">Builder Incentives Tracker</a></li>
                </ul>
              </div>
              
              <div className="footer-section">
                <h3>Aliante Neighborhoods</h3>
                <ul>
                  <li><a href="/neighborhoods/prominence">The Prominence (Luxury)</a></li>
                  <li><a href="/neighborhoods/desert-willows">Desert Willows (Family)</a></li>
                  <li><a href="/neighborhoods/club-aliante">Club Aliante (Golf Course)</a></li>
                  <li><a href="/neighborhoods/paseos">The Paseos (Gated)</a></li>
                  <li><a href="/neighborhoods/tule-springs">Villages at Tule Springs</a></li>
                  <li><a href="/neighborhoods/sun-city">Sun City Aliante (55+)</a></li>
                  <li><a href="/neighborhoods/compare">Neighborhood Comparison Tool</a></li>
                </ul>
              </div>
              
              <div className="footer-section">
                <h3>Buyer & Seller Resources</h3>
                <ul>
                  <li><a href="/market-report">Live Market Report & Statistics</a></li>
                  <li><a href="/mortgage-calculator">Mortgage Calculator & Rates</a></li>
                  <li><a href="/home-valuation">Free Home Valuation (CMA)</a></li>
                  <li><a href="/buyer-guide">First-Time Buyer Guide</a></li>
                  <li><a href="/seller-checklist">Selling Your Home Checklist</a></li>
                  <li><a href="/investment-analysis">Investment Property Analysis</a></li>
                  <li><a href="/schools">School District Information</a></li>
                </ul>
              </div>
            </div>
            
            <div className="footer-bottom">
              <p>© 2025 Aliante Real Estate. Licensed Real Estate Brokerage in Nevada.</p>
              <p>All information deemed reliable but not guaranteed. All properties subject to prior sale, change, or withdrawal.</p>
              <div style={{ marginTop: '1rem' }}>
                <a href="/privacy-policy" style={{ margin: '0 1rem' }}>Privacy Policy</a> |
                <a href="/terms-of-service" style={{ margin: '0 1rem' }}>Terms of Service</a> |
                <a href="/accessibility" style={{ margin: '0 1rem' }}>Accessibility Statement</a> |
                <a href="/fair-housing" style={{ margin: '0 1rem' }}>Fair Housing</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
