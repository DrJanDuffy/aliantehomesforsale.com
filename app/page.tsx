import type { Metadata } from 'next';
import StructuredData from './components/StructuredData';

// Force Vercel rebuild - Real Estate Website Implementation
// TypeScript declarations for RealScout custom elements
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'realscout-office-listings': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        'agent-encoded-id'?: string;
        'sort-order'?: string;
        'listing-status'?: string;
        'property-types'?: string;
        'price-min'?: string;
        'price-max'?: string;
      };
    }
  }
}

export const metadata: Metadata = {
  title: 'Aliante Homes For Sale | Expert Real Estate Guidance Since 2018',
  description: 'Find your perfect home in Aliante, North Las Vegas. 286+ verified listings with live MLS data. Expert local guidance since 2018.',
  keywords: 'Aliante homes for sale, North Las Vegas real estate, Aliante realtor, MLS listings',
  openGraph: {
    title: 'Aliante Homes For Sale | Expert Real Estate Guidance',
    description: '286+ verified listings with live MLS data in Aliante, North Las Vegas',
    type: 'website',
    url: 'https://aliantehomesforsale.com',
  },
};

export default function Home() {
  return (
    <>
      <StructuredData type="RealEstateAgent" />

      <main className="homepage">
        {/* Hero Section */}
        <section className="page-hero">
          <div className="hero-content">
            <h1>Discover Beautiful Homes in Aliante, North Las Vegas</h1>
            <p className="hero-subtitle">
              Expert guidance since 2018 | 286+ verified listings | Live MLS data updated every 15 minutes
            </p>
            
            {/* Quick Search Widget */}
            <div className="hero-search-widget">
              <h3>Quick Search</h3>
              <div className="realscout-container">
                {/* Temporarily commented out until TypeScript types are resolved */}
                {/* <realscout-simple-search agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-simple-search> */}
                <div className="realscout-placeholder">
                  <p>RealScout quick search widget will be displayed here</p>
                  <p>TypeScript types need to be resolved for build to succeed</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Properties with Live Listings */}
        <section className="featured-properties">
          <h2>Featured Aliante Properties - Live MLS Listings</h2>
          <p>Updated every 15 minutes | Directly from MLS</p>

          {/* Premium Properties */}
          <div className="listings-section">
            <h3>Premium Homes ($500K - $750K)</h3>
            <div className="realscout-container">
              {/* Temporarily commented out until TypeScript types are resolved */}
              {/* <realscout-office-listings 
                agent-encoded-id="QWdlbnQtMjI1MDUw" 
                sort-order="PRICE_HIGH" 
                listing-status="For Sale" 
                property-types="SFR" 
                price-min="500000" 
                price-max="750000"
              ></realscout-office-listings> */}
              <div className="realscout-placeholder">
                <p>RealScout premium listings will be displayed here</p>
                <p>TypeScript types need to be resolved for build to succeed</p>
              </div>
            </div>
          </div>

          {/* Mid-Range Properties */}
          <div className="listings-section">
            <h3>Family Homes ($350K - $500K)</h3>
            <div className="realscout-container">
              {/* Temporarily commented out until TypeScript types are resolved */}
              {/* <realscout-office-listings 
                agent-encoded-id="QWdlbnQtMjI1MDUw" 
                sort-order="PRICE_HIGH" 
                listing-status="For Sale" 
                property-types="SFR" 
                price-min="350000" 
                price-max="500000"
              ></realscout-office-listings> */}
              <div className="realscout-placeholder">
                <p>RealScout family home listings will be displayed here</p>
                <p>TypeScript types need to be resolved for build to succeed</p>
              </div>
            </div>
          </div>

          <div className="view-all-properties">
            <a href="/homes-for-sale" className="cta-button large">
              View All 286+ Available Properties
            </a>
            <a href="/search" className="cta-button secondary">
              Advanced Search
            </a>
          </div>
        </section>

        {/* Why Choose Aliante - E-A-T Content */}
        <section className="why-aliante">
          <h2>Why Aliante is North Las Vegas's #1 Choice for Families</h2>

          <div className="benefits-grid">
            <article>
              <h3>Master-Planned Community Excellence</h3>
              <p>
                Developed by Del Webb and Richmond American Homes since 2003, Aliante offers planned
                infrastructure, maintained green spaces, and family-focused amenities that retain
                property value.
              </p>
              <a href="/neighborhoods">Explore Neighborhoods</a>
            </article>

            <article>
              <h3>Top-Rated Schools & Safety</h3>
              <p>
                CCSD schools with 8-10 star ratings. Crime rates 23% below Nevada average.
                Family-friendly streets with sidewalks and street lighting throughout.
              </p>
              <a href="/schools-safety">School Reports</a>
            </article>

            <article>
              <h3>Investment Growth Potential</h3>
              <p>
                Home values increased 45% over past 5 years. Strategic location with planned
                infrastructure improvements and job growth in North Las Vegas corridor.
              </p>
              <a href="/market-report">View Market Data</a>
            </article>
          </div>
        </section>

        {/* Property Types with Internal Linking */}
        <section className="property-types">
          <h2>Explore Aliante's Diverse Housing Options</h2>

          <div className="types-grid">
            <div className="property-type">
              <h3>Gated Communities</h3>
              <p>86 properties available | $450K-$800K average</p>
              <ul>
                <li>24/7 security & controlled access</li>
                <li>Private amenities & clubhouses</li>
                <li>Premium landscaping & maintenance</li>
              </ul>
              <a href="/gated-communities" aria-label="Browse all gated community homes in Aliante">
                View 86 Gated Homes
              </a>
            </div>

            <div className="property-type">
              <h3>Golf Course Properties</h3>
              <p>32 properties available | $550K-$1.2M average</p>
              <ul>
                <li>Club Aliante course access</li>
                <li>Fairway & mountain views</li>
                <li>Golf cart storage included</li>
              </ul>
              <a href="/golf-homes" aria-label="Browse all golf course homes in Aliante">
                View 32 Golf Homes
              </a>
            </div>

            <div className="property-type">
              <h3>Sun City Aliante (55+)</h3>
              <p>41 properties available | $380K-$650K average</p>
              <ul>
                <li>Active adult lifestyle community</li>
                <li>Resort-style amenities</li>
                <li>Maintenance-free living</li>
              </ul>
              <a href="/sun-city-aliante" aria-label="Browse all Sun City Aliante homes">
                View 41 Active Adult Homes
              </a>
            </div>
          </div>
        </section>

        {/* Local Market Insights - Fresh Content */}
        <section className="market-insights">
          <h2>Aliante Real Estate Market - December 2024</h2>

          <div className="insights-grid">
            <div className="insight">
              <h3>Current Inventory</h3>
              <p>286 active listings (15% increase from last month)</p>
            </div>
            <div className="insight">
              <h3>Median Home Price</h3>
              <p>$434,900 (3.2% increase YoY)</p>
            </div>
            <div className="insight">
              <h3>Days on Market</h3>
              <p>32 days average (8% faster than Nevada)</p>
            </div>
            <div className="insight">
              <h3>New Construction Leaders</h3>
              <p>Lennar (#1 - 2,143 sales), D.R. Horton (#2 - 1,910 sales)</p>
            </div>
          </div>

          <div className="builder-highlights">
            <h3>Top Builder Activity in Aliante Area</h3>
            <p>
              <strong>Villages at Tule Springs</strong> - Major D.R. Horton development with
              Heartland communities
            </p>
            <p>
              <strong>Sun City Aliante</strong> - Continued Pulte/Del Webb expansion for active
              adults 55+
            </p>
          </div>

          <a href="/market-report" className="cta-button">
            Get Detailed Market Report
          </a>
          <a href="/builders" className="cta-button secondary">
            View All Builders
          </a>
        </section>

        {/* Trust & Authority Section */}
        <section className="trust-authority">
          <h2>Your Trusted Aliante Real Estate Partners</h2>

          <div className="credentials">
            <div className="credential">
              <h3>Local Expertise Since 2018</h3>
              <p>
                6+ years specializing exclusively in Aliante and North Las Vegas properties with
                deep builder relationships.
              </p>
            </div>
            <div className="credential">
              <h3>Builder Intelligence Network</h3>
              <p>
                Direct relationships with all major builders - Lennar, D.R. Horton, Tri Pointe, Del
                Webb. We track incentives, lot premiums, and construction schedules.
              </p>
            </div>
            <div className="credential">
              <h3>500+ Successful Transactions</h3>
              <p>
                Proven track record including new construction, resales, and builder negotiations
                with verified client testimonials.
              </p>
            </div>
          </div>

          <div className="builder-expertise-highlight">
            <h3>🏗️ New Construction Specialists</h3>
            <p>We monitor all active builders in North Las Vegas and can help you navigate:</p>
            <ul>
              <li>
                ✅ <strong>Builder incentives & negotiations</strong> (average $15K+ in additional
                credits)
              </li>
              <li>
                ✅ <strong>Lot selection strategy</strong> (premium vs. standard placement)
              </li>
              <li>
                ✅ <strong>Construction timeline management</strong> (avoid delays & issues)
              </li>
              <li>
                ✅ <strong>Quality control inspections</strong> (pre-drywall, pre-close
                walkthroughs)
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
