import type { Metadata } from 'next';
import StructuredData from '../components/StructuredData';

export const metadata: Metadata = {
  title: 'Home Valuation Aliante | Get Your Property Value Estimate | Expert Appraisal',
  description: 'Get an accurate home valuation for your Aliante property. Expert appraisal services, market analysis, and instant value estimates. Free consultation available.',
  keywords: 'home valuation Aliante, property appraisal, home value estimate, Aliante real estate value, property assessment',
  openGraph: {
    title: 'Home Valuation Aliante | Get Your Property Value Estimate',
    description: 'Expert appraisal services and instant value estimates for Aliante properties',
    type: 'website',
    url: 'https://aliantehomesforsale.com/home-valuation',
  },
};

export default function HomeValuation() {
  return (
    <>
      <StructuredData type="RealEstateAgent" />

      <main className="home-valuation-page">
        {/* Hero Section */}
        <section className="page-hero">
          <div className="hero-content">
            <h1>Home Valuation in Aliante, North Las Vegas</h1>
            <p className="hero-subtitle">
              Get your accurate property value estimate | Expert appraisal services | Free consultation
            </p>
          </div>
        </section>

        {/* Valuation Widget Section */}
        <section className="valuation-widget-section">
          <div className="container">
            <div className="valuation-intro">
              <h2>Get Your Home's Current Market Value</h2>
              <p>
                Understanding your home's true market value is crucial whether you're selling, refinancing, 
                or just curious about your investment. Our professional valuation tools provide accurate 
                estimates based on current market conditions in Aliante.
              </p>
            </div>

            {/* RealScout Home Value Widget */}
            <div className="valuation-widget-container">
              <h3>Instant Property Valuation</h3>
              <div className="realscout-container">
                <realscout-home-value agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-home-value>
              </div>
            </div>
          </div>
        </section>

        {/* Why Get a Valuation */}
        <section className="why-valuation">
          <div className="container">
            <h2>Why Get Your Home Valued?</h2>
            <div className="reasons-grid">
              <div className="reason-card">
                <h3>🏠 Selling Your Home</h3>
                <p>Set the right price to attract buyers and maximize your return on investment</p>
              </div>
              
              <div className="reason-card">
                <h3>💰 Refinancing</h3>
                <p>Determine if refinancing makes sense and get better loan terms</p>
              </div>
              
              <div className="reason-card">
                <h3>📊 Investment Planning</h3>
                <p>Track your property's appreciation and plan for future investments</p>
              </div>
              
              <div className="reason-card">
                <h3>🏦 Insurance & Taxes</h3>
                <p>Ensure proper coverage and accurate property tax assessments</p>
              </div>
            </div>
          </div>
        </section>

        {/* Valuation Methods */}
        <section className="valuation-methods">
          <div className="container">
            <h2>Our Valuation Methods</h2>
            <div className="methods-grid">
              <div className="method-card">
                <h3>Automated Valuation Model (AVM)</h3>
                <p>Instant estimates using advanced algorithms and recent sales data</p>
                <ul>
                  <li>Real-time market analysis</li>
                  <li>Comparable sales data</li>
                  <li>Market trend analysis</li>
                </ul>
              </div>
              
              <div className="method-card">
                <h3>Comparative Market Analysis (CMA)</h3>
                <p>Detailed analysis comparing your home to similar properties</p>
                <ul>
                  <li>Recent sales comparisons</li>
                  <li>Property feature analysis</li>
                  <li>Market positioning strategy</li>
                </ul>
              </div>
              
              <div className="method-card">
                <h3>Professional Appraisal</h3>
                <p>Licensed appraiser evaluation for official purposes</p>
                <ul>
                  <li>On-site property inspection</li>
                  <li>Detailed condition assessment</li>
                  <li>Official documentation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Market Insights */}
        <section className="market-insights">
          <div className="container">
            <h2>Aliante Market Valuation Trends</h2>
            <div className="insights-grid">
              <div className="insight-card">
                <h3>Average Appreciation</h3>
                <p className="insight-number">8.2%</p>
                <p className="insight-detail">Annual growth rate over the past 5 years</p>
              </div>
              
              <div className="insight-card">
                <h3>Price per Sq Ft</h3>
                <p className="insight-number">$245</p>
                <p className="insight-detail">Current market average in Aliante</p>
              </div>
              
              <div className="insight-card">
                <h3>Days on Market</h3>
                <p className="insight-number">32</p>
                <p className="insight-detail">Average time to sell in current market</p>
              </div>
              
              <div className="insight-card">
                <h3>Market Confidence</h3>
                <p className="insight-number">High</p>
                <p className="insight-detail">Strong buyer demand and stable prices</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="container">
            <h2>Ready to Know Your Home's True Value?</h2>
            <p>Get an accurate valuation and expert guidance from local Aliante specialists</p>
            <div className="cta-buttons">
              <a href="/contact" className="cta-button primary">
                Schedule Professional Appraisal
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
