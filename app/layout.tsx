// @ts-nocheck

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
    'Aliante homes for sale, Las Vegas real estate, Aliante real estate, homes in Aliante, Las Vegas homes',
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
    description:
      'Discover beautiful homes for sale in Aliante, Las Vegas. Find your dream home with our comprehensive real estate listings and expert guidance.',
    url: 'https://aliantehomesforsale.com',
    siteName: 'Aliante Homes For Sale',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aliante Homes For Sale - Las Vegas Real Estate',
    description:
      'Discover beautiful homes for sale in Aliante, Las Vegas. Find your dream home with our comprehensive real estate listings and expert guidance.',
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* RealScout Integration - Single script tag for all widgets */}
        <script
          src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
          type="module"
        />
        
        {/* Fallback script loading if the first one fails */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Fallback script loading for RealScout
              if (typeof window.realscout === 'undefined') {
                console.log('Primary RealScout script failed, trying fallback...');
                const fallbackScript = document.createElement('script');
                fallbackScript.src = 'https://em.realscout.com/widgets/realscout-web-components.umd.js';
                fallbackScript.onload = function() {
                  console.log('Fallback RealScout script loaded');
                  if (typeof window.realscout !== 'undefined') {
                    console.log('RealScout library now accessible:', window.realscout);
                  }
                };
                fallbackScript.onerror = function() {
                  console.error('Fallback RealScout script also failed');
                };
                document.head.appendChild(fallbackScript);
              }
            `,
          }}
        />

        {/* Critical CSS inline for performance */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
            /* Critical above-the-fold styles */
            body { margin: 0; font-family: system-ui; }
            .hero { min-height: 60vh; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }
            
            /* RealScout Global Styling - Applied to all pages */
            realscout-office-listings {
              --rs-listing-divider-color: rgb(101, 141, 172);
              width: 100%;
              border-radius: 8px;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }
            
            realscout-your-listings {
              --rs-listing-divider-color: rgb(101, 141, 172);
              width: 100%;
              border-radius: 8px;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }
            
            realscout-advanced-search {
              --rs-as-button-text-color: #ffffff;
              --rs-as-background-color: #ffffff;
              --rs-as-button-color: #1c71c3;
              --rs-as-widget-width: 500px !important;
              width: 100%;
              max-width: 500px;
              margin: 0 auto;
              border-radius: 8px;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }
            
            realscout-simple-search {
              --rs-ss-font-primary-color: #726a6d;
              --rs-ss-searchbar-border-color: #1d6fbd;
              --rs-ss-box-shadow: 0 10px 15px -3px #0000001a;
              --rs-ss-widget-width: 500px !important;
              width: 100%;
              max-width: 500px;
              margin: 0 auto;
              border-radius: 8px;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }
            
            realscout-home-value {
              --rs-hvw-background-color: #ffffff;
              --rs-hvw-title-color: #000000;
              --rs-hvw-subtitle-color: rgba(28, 30, 38, 0.5);
              --rs-hvw-primary-button-text-color: #ffffff;
              --rs-hvw-primary-button-color: rgb(35, 93, 137);
              --rs-hvw-secondary-button-text-color: rgb(35, 93, 137);
              --rs-hvw-secondary-button-color: #ffffff;
              --rs-hvw-widget-width: auto;
              width: 100%;
              border-radius: 8px;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }
          `,
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navigation />
        
        {/* Global Advanced Search Widget - Available on every page */}
        <div className="global-advanced-search">
          <div className="realscout-container">
            {/* @ts-ignore */}
            <realscout-advanced-search agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-advanced-search>
          </div>
        </div>
        
        {/* Global Office Listings Widget - Available on every page */}
        <div className="global-office-listings">
          <div className="realscout-container">
            <h2 className="office-listings-title">Current Aliante Properties</h2>
            <p className="office-listings-subtitle">Live MLS listings updated every 15 minutes</p>
            
            {/* Debug Info */}
            <div className="widget-debug-info">
              <p>Widget Status: Loading RealScout Data...</p>
              <p>Agent ID: QWdlbnQtMjI1MDUw</p>
              <p>Price Range: $500K - $750K</p>
              <p id="script-status">Checking RealScout script...</p>
            </div>
            
            {/* @ts-ignore */}
            <realscout-office-listings 
              agent-encoded-id="QWdlbnQtMjI1MDUw" 
              sort-order="PRICE_HIGH" 
              listing-status="For Sale" 
              property-types="SFR" 
              price-min="500000" 
              price-max="750000"
            ></realscout-office-listings>
            
            {/* Fallback if widget doesn't load */}
            <div className="widget-fallback" style={{display: 'none'}}>
              <p>If you don't see listings above, please refresh the page or contact support.</p>
            </div>
          </div>
        </div>
        
        {/* Global Past Sales Widget - Available on every page */}
        <div className="global-past-sales">
          <div className="realscout-container">
            <h2 className="past-sales-title">Recent Sales & Market Activity</h2>
            {/* @ts-ignore */}
            <realscout-your-listings 
              agent-encoded-id="QWdlbnQtMjI1MDUw" 
              sort-order="STATUS_AND_SIGNIFICANT_CHANGE" 
              listing-status="For Sale,Sold" 
              property-types="" 
              price-min="500000"
            ></realscout-your-listings>
          </div>
        </div>
        
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
        {/* Script verification */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Comprehensive RealScout widget troubleshooting
              console.log('Starting RealScout widget troubleshooting...');
              
              // Function to wait for RealScout library
              function waitForRealScout(callback, maxAttempts = 20) {
                let attempts = 0;
                const checkInterval = setInterval(() => {
                  attempts++;
                  console.log('Checking for RealScout library, attempt:', attempts);
                  
                  if (typeof window.realscout !== 'undefined') {
                    clearInterval(checkInterval);
                    console.log('RealScout library found on attempt:', attempts);
                    callback();
                  } else if (attempts >= maxAttempts) {
                    clearInterval(checkInterval);
                    console.error('RealScout library not found after', maxAttempts, 'attempts');
                    const scriptStatus = document.getElementById('script-status');
                    if (scriptStatus) {
                      scriptStatus.textContent = 'RealScout library failed to load after multiple attempts';
                      scriptStatus.style.color = 'red';
                    }
                  }
                }, 500);
              }
              
              // Wait for library then initialize widgets
              waitForRealScout(function() {
                const scriptStatus = document.getElementById('script-status');
                const officeWidget = document.querySelector('realscout-office-listings');
                const searchWidget = document.querySelector('realscout-simple-search');
                
                console.log('Office widget element:', officeWidget);
                console.log('Search widget element:', searchWidget);
                
                scriptStatus.textContent = 'RealScout library loaded successfully - initializing widgets...';
                scriptStatus.style.color = 'green';
                
                // Try to manually initialize widgets
                if (officeWidget) {
                  console.log('Attempting to initialize office listings widget...');
                  // Force a re-render
                  officeWidget.style.display = 'none';
                  setTimeout(() => {
                    officeWidget.style.display = 'block';
                    console.log('Office widget re-rendered');
                    
                    // Check if widget has content after re-render
                    setTimeout(() => {
                      if (officeWidget.shadowRoot || officeWidget.children.length > 0) {
                        console.log('Office widget appears to have content');
                        scriptStatus.textContent = 'Widgets initialized successfully!';
                      } else {
                        console.log('Office widget still appears empty');
                        scriptStatus.textContent = 'Widgets initialized but content not loading';
                        scriptStatus.style.color = 'orange';
                      }
                    }, 2000);
                  }, 100);
                }
                
                if (searchWidget) {
                  console.log('Attempting to initialize simple search widget...');
                  // Force a re-render
                  searchWidget.style.display = 'none';
                  setTimeout(() => {
                    searchWidget.style.display = 'block';
                    console.log('Search widget re-rendered');
                  }, 100);
                }
              });
              
              // Check for any JavaScript errors
              window.addEventListener('error', function(e) {
                console.error('JavaScript error detected:', e.error);
                const scriptStatus = document.getElementById('script-status');
                if (scriptStatus) {
                  scriptStatus.textContent = 'JavaScript error: ' + e.message;
                  scriptStatus.style.color = 'red';
                }
              });
              
              // Check for unhandled promise rejections
              window.addEventListener('unhandledrejection', function(e) {
                console.error('Unhandled promise rejection:', e.reason);
                const scriptStatus = document.getElementById('script-status');
                if (scriptStatus) {
                  scriptStatus.textContent = 'Promise error: ' + e.reason;
                  scriptStatus.style.color = 'red';
                }
              });
            `,
          }}
        />
      </body>
    </html>
  );
}
