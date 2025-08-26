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
  title: 'Aliante Homes For Sale - Las Vegas Real Estate',
  description:
    'Discover beautiful homes for sale in Aliante, Las Vegas. Find your dream home with our comprehensive real estate listings and expert guidance.',
  keywords:
    'Aliante homes for sale, Las Vegas real estate, Aliante real estate, homes in Aliante, Las Vegas homes, North Las Vegas real estate, Aliante neighborhoods, new construction Aliante',
  authors: [{ name: 'Aliante Homes For Sale' }],
  creator: 'Aliante Homes For Sale',
  publisher: 'Aliante Homes For Sale',
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
    title: 'Aliante Homes For Sale - Las Vegas Real Estate',
    description: 'Discover beautiful homes for sale in Aliante, Las Vegas. Find your dream home with our comprehensive real estate listings and expert guidance.',
    url: 'https://aliantehomesforsale.com',
    siteName: 'Aliante Homes For Sale',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Aliante Homes For Sale - Las Vegas Real Estate',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aliante Homes For Sale - Las Vegas Real Estate',
    description: 'Discover beautiful homes for sale in Aliante, Las Vegas. Find your dream home with our comprehensive real estate listings and expert guidance.',
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
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navigation />
        
        {children}
        <PerformanceMonitor />

        {/* Footer */}
        <footer className="main-footer">
          <section className="footer-content">
            <div className="footer-grid">
              <div className="footer-section">
                <h2>Aliante Real Estate</h2>
                <p>Your trusted partner for Aliante homes since 2018</p>

                <div className="contact-info">
                  <h3>Contact Information</h3>
                  <p>📞 (702) 555-0123</p>
                  <p>✉️ info@aliantehomesforsale.com</p>
                  <p>📍 2590 Nature Park Drive, Suite 275</p>
                  <p>North Las Vegas, NV 89084</p>
                </div>
              </div>

              <div className="footer-section">
                <h3>New Construction</h3>
                <ul>
                  <li>
                    <a href="/builders">All Builders Guide</a>
                  </li>
                  <li>
                    <a href="/builders/lennar">Lennar (#1 Volume)</a>
                  </li>
                  <li>
                    <a href="/builders/dr-horton">D.R. Horton (Tule Springs)</a>
                  </li>
                  <li>
                    <a href="/builders/tri-pointe">Tri Pointe (5-Star Rating)</a>
                  </li>
                  <li>
                    <a href="/builders/pulte-del-webb">Del Webb (55+)</a>
                  </li>
                </ul>
              </div>

              <div className="footer-section">
                <h3>Neighborhoods</h3>
                <ul>
                  <li>
                    <a href="/neighborhoods/prominence">The Prominence</a>
                  </li>
                  <li>
                    <a href="/neighborhoods/desert-willows">Desert Willows</a>
                  </li>
                  <li>
                    <a href="/neighborhoods/club-aliante">Club Aliante</a>
                  </li>
                  <li>
                    <a href="/neighborhoods/paseos">The Paseos</a>
                  </li>
                </ul>
              </div>

              <div className="footer-section">
                <h3>Resources</h3>
                <ul>
                  <li>
                    <a href="/market-report">Market Report</a>
                  </li>
                  <li>
                    <a href="/mortgage-calculator">Mortgage Calculator</a>
                  </li>
                  <li>
                    <a href="/home-valuation">Home Valuation</a>
                  </li>
                  <li>
                    <a href="/buyer-guide">First-Time Buyer Guide</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="footer-bottom">
              <p>&copy; 2024 Aliante Real Estate. Licensed Real Estate Brokerage.</p>
              <p>Nevada Real Estate License #B.0123456.LLC</p>
              <div className="footer-links">
                <a href="/privacy-policy">Privacy Policy</a>
                <a href="/terms-of-service">Terms of Service</a>
                <a href="/accessibility">Accessibility</a>
              </div>
            </div>
          </section>
        </footer>
      </body>
    </html>
  );
}
