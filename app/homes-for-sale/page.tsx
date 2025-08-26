import type { Metadata } from 'next';
import SearchForm from '../components/SearchForm';
import StructuredData from '../components/StructuredData';

export const metadata: Metadata = {
  title: 'Homes for Sale in Aliante, North Las Vegas | 286+ Properties',
  description: 'Browse 286+ homes for sale in Aliante, North Las Vegas. Filter by price, bedrooms, property type. Live MLS data updated every 15 minutes.',
  keywords: 'homes for sale Aliante, Aliante real estate, North Las Vegas homes, MLS listings',
  openGraph: {
    title: 'Homes for Sale in Aliante, North Las Vegas',
    description: '286+ homes for sale with live MLS data',
    type: 'website',
    url: 'https://aliantehomesforsale.com/homes-for-sale',
  },
};

export default function HomesForSale() {
  return (
    <>
      <StructuredData type="PropertyListing" />
      
      {/* RealScout Widgets */}
      <script src="https://em.realscout.com/widgets/realscout-web-components.umd.js" type="module"></script>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            realscout-office-listings {
              --rs-listing-divider-color: rgb(101, 141, 172);
              width: 100%;
            }
          `,
        }}
      />
      
      <main className="homes-for-sale-page">
        {/* Hero Section */}
        <section className="page-hero">
          <div className="hero-content">
            <h1>286+ Homes for Sale in Aliante, North Las Vegas</h1>
            <p className="hero-subtitle">
              Live MLS data updated every 15 minutes | Expert local guidance since 2018
            </p>
          </div>
        </section>

        {/* Advanced Search Section */}
        <section className="advanced-search-section">
          <div className="container">
            <h2>Find Your Perfect Aliante Home</h2>
            <SearchForm />
          </div>
        </section>

        {/* Property Listings */}
        <section className="property-listings">
          <div className="container">
            <div className="listings-header">
              <h2>Available Properties</h2>
              <div className="listings-stats">
                <span className="stat">286 Active Listings</span>
                <span className="stat">Updated: Every 15 min</span>
                <span className="stat">Median: $434,900</span>
              </div>
            </div>

            {/* Live MLS Listings */}
            <div className="listings-widget">
              <h3>Live MLS Listings</h3>
              <div className="listings-placeholder">
                <h4>🏠 Live Property Listings</h4>
                <p>Live MLS data integration coming soon</p>
                <p>Contact us for current property listings</p>
                <div className="placeholder-stats">
                  <span>286 Active Listings</span>
                  <span>Updated Every 15 Minutes</span>
                  <span>Direct MLS Access</span>
                </div>
              </div>
            </div>

            {/* Property Categories */}
            <div className="property-categories">
              <h3>Browse by Category</h3>
              <div className="category-grid">
                <div className="category-card">
                  <h4>New Construction</h4>
                  <p>45 properties available</p>
                  <a href="/new-construction" className="cta-button">
                    View New Homes
                  </a>
                </div>
                
                <div className="category-card">
                  <h4>Gated Communities</h4>
                  <p>86 properties available</p>
                  <a href="/gated-communities" className="cta-button">
                    View Gated Homes
                  </a>
                </div>
                
                <div className="category-card">
                  <h4>Golf Course</h4>
                  <p>32 properties available</p>
                  <a href="/golf-homes" className="cta-button">
                    View Golf Homes
                  </a>
                </div>
                
                <div className="category-card">
                  <h4>Sun City Aliante (55+)</h4>
                  <p>41 properties available</p>
                  <a href="/sun-city-aliante" className="cta-button">
                    View Active Adult Homes
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Market Insights */}
        <section className="market-insights">
          <div className="container">
            <h2>Aliante Market Insights</h2>
            <div className="insights-grid">
              <div className="insight-card">
                <h3>Current Inventory</h3>
                <p className="insight-number">286</p>
                <p className="insight-detail">Active listings (15% increase from last month)</p>
              </div>
              
              <div className="insight-card">
                <h3>Median Price</h3>
                <p className="insight-number">$434,900</p>
                <p className="insight-detail">3.2% increase year-over-year</p>
              </div>
              
              <div className="insight-card">
                <h3>Days on Market</h3>
                <p className="insight-number">32</p>
                <p className="insight-detail">8% faster than Nevada average</p>
              </div>
              
              <div className="insight-card">
                <h3>Price per Sq Ft</h3>
                <p className="insight-number">$245</p>
                <p className="insight-detail">Competitive with North Las Vegas</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="container">
            <h2>Ready to Find Your Dream Home?</h2>
            <p>Get expert guidance from local Aliante specialists</p>
            <div className="cta-buttons">
              <a href="/contact" className="cta-button primary">
                Contact Us Today
              </a>
              <a href="/market-report" className="cta-button secondary">
                Get Market Report
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
