import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aliante Market Report - Live Real Estate Statistics | North Las Vegas',
  description: 'Current Aliante real estate market statistics. Median prices, inventory levels, days on market, and trends. Updated monthly with MLS data.',
  alternates: {
    canonical: 'https://www.aliantehomesforsale.com/market-report',
  },
};

export default function MarketReport() {
  return (
    <main className="market-report-page">
      <section className="page-hero">
        <div className="hero-content">
          <h1>Aliante Real Estate Market Report</h1>
          <p className="hero-subtitle">
            Live market statistics and trends - Updated monthly
          </p>
        </div>
      </section>

      <section className="market-stats">
        <div className="container">
          <h2>Current Market Overview - October 2025</h2>
          
          <div className="stats-grid">
            <div className="stat-card">
              <h3>Active Listings</h3>
              <p className="stat-number">286</p>
              <p className="stat-detail">+15% from last month</p>
            </div>
            
            <div className="stat-card">
              <h3>Median Price</h3>
              <p className="stat-number">$434,900</p>
              <p className="stat-detail">+3.2% year-over-year</p>
            </div>
            
            <div className="stat-card">
              <h3>Days on Market</h3>
              <p className="stat-number">32 days</p>
              <p className="stat-detail">8% faster than Nevada average</p>
            </div>
            
            <div className="stat-card">
              <h3>Price per Sq Ft</h3>
              <p className="stat-number">$245</p>
              <p className="stat-detail">Competitive pricing</p>
            </div>
          </div>

          <h2>Price Breakdown by Neighborhood</h2>
          <div className="price-table">
            <table>
              <thead>
                <tr>
                  <th>Neighborhood</th>
                  <th>Median Price</th>
                  <th>Price Range</th>
                  <th>Avg Days on Market</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>The Prominence</td>
                  <td>$675,000</td>
                  <td>$600K - $1.2M</td>
                  <td>28 days</td>
                </tr>
                <tr>
                  <td>Club Aliante</td>
                  <td>$595,000</td>
                  <td>$500K - $900K</td>
                  <td>30 days</td>
                </tr>
                <tr>
                  <td>Desert Willows</td>
                  <td>$485,000</td>
                  <td>$400K - $700K</td>
                  <td>35 days</td>
                </tr>
                <tr>
                  <td>The Paseos</td>
                  <td>$365,000</td>
                  <td>$300K - $500K</td>
                  <td>38 days</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="cta-section">
            <h2>Want a Detailed Market Analysis?</h2>
            <p>Get a personalized market report for your situation</p>
            <div className="cta-buttons">
              <a href="/contact" className="cta-button primary">
                Request Custom Report
              </a>
              <a href="/home-valuation" className="cta-button secondary">
                Get Home Valuation
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

