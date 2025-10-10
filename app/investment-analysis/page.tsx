import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Investment Property Analysis Aliante - Rental Market Data',
  description: 'Aliante investment property analysis. Rental rates, cap rates, cash flow projections, and market trends for real estate investors.',
  alternates: { canonical: 'https://www.aliantehomesforsale.com/investment-analysis' },
};

export default function InvestmentAnalysis() {
  return (
    <main className="investment-page">
      <section className="page-hero">
        <div className="hero-content">
          <h1>Investment Property Analysis</h1>
          <p className="hero-subtitle">Aliante rental market & investment opportunities</p>
        </div>
      </section>
      <section className="investment-content">
        <div className="container">
          <h2>Aliante Rental Market Overview</h2>
          <p>Aliante offers strong rental demand with quality tenants, low vacancy rates, and consistent appreciation. Popular with families and military personnel from Nellis Air Force Base.</p>

          <h2>Rental Rates by Property Type</h2>
          <ul>
            <li><strong>3-Bedroom SFR:</strong> $2,100-$2,600/month</li>
            <li><strong>4-Bedroom SFR:</strong> $2,500-$3,200/month</li>
            <li><strong>Luxury 4-5 BR:</strong> $3,200-$4,500/month</li>
            <li><strong>Townhomes:</strong> $1,800-$2,400/month</li>
          </ul>

          <h2>Key Investment Metrics</h2>
          <p>Typical cap rates: 4-6%. Cash-on-cash returns: 6-9%. Appreciation: 3-5% annually.</p>

          <h2>Why Invest in Aliante</h2>
          <ul>
            <li>Strong rental demand</li>
            <li>Quality master-planned community</li>
            <li>Excellent schools attract long-term tenants</li>
            <li>Strategic location near employment centers</li>
            <li>Low crime rates</li>
            <li>Community amenities retained value</li>
          </ul>

          <h2>Get a Custom Analysis</h2>
          <p>We provide detailed investment analysis including projected cash flow, ROI calculations, and comparable rental data.</p>

          <div className="cta-buttons">
            <a href="/contact" className="cta-button primary">Request Investment Analysis</a>
            <a href="/homes-for-sale" className="cta-button secondary">View Investment Properties</a>
          </div>
        </div>
      </section>
    </main>
  );
}

