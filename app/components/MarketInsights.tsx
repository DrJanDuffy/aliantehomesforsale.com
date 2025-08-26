'use client';

import { useId } from 'react';

export default function MarketInsights() {
  const marketHeadingId = useId();
  const marketSectionId = useId();

  const requestMarketReport = () => {
    alert('This would open a form to request a detailed market report with current Aliante real estate trends and data.');
  };

  return (
    <section className="market-insights" id={marketSectionId} aria-labelledby={marketHeadingId}>
      <div className="container">
        <h2 id={marketHeadingId} style={{ textAlign: 'center', marginBottom: '1rem' }}>
          Aliante Real Estate Market Report - August 2025
        </h2>
        <p style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '1.1rem', opacity: '0.9' }}>
          Current market conditions and trends in North Las Vegas
        </p>
        
        <div className="insights-grid">
          <div className="insight">
            <h3>286</h3>
            <p>Active Listings<br /><small>↑ 15% increase vs. July 2025</small></p>
          </div>
          <div className="insight">
            <h3>$434,900</h3>
            <p>Median Sale Price<br /><small>↑ 3.2% increase year-over-year</small></p>
          </div>
          <div className="insight">
            <h3>32 Days</h3>
            <p>Average Days on Market<br /><small>8% faster than Nevada average</small></p>
          </div>
          <div className="insight">
            <h3>94.2%</h3>
            <p>Sale-to-List Price Ratio<br /><small>Strong seller's market conditions</small></p>
          </div>
          <div className="insight">
            <h3>2,143</h3>
            <p>Lennar Homes Sold YTD<br /><small>#1 builder in North Las Vegas</small></p>
          </div>
          <div className="insight">
            <h3>4.7%</h3>
            <p>Current Mortgage Rates<br /><small>30-year conventional average</small></p>
          </div>
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '3rem', background: 'rgba(255,255,255,0.1)', padding: '2rem', borderRadius: '12px', backdropFilter: 'blur(10px)' }}>
          <h3 style={{ marginBottom: '1rem' }}>Major Development Activity in Aliante</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', textAlign: 'left', marginTop: '2rem' }}>
            <div>
              <h4 style={{ color: '#97d8c4' }}>🏗️ Villages at Tule Springs</h4>
              <p>Major D.R. Horton master-planned community with Heartland neighborhoods. 500+ new homes planned through 2026.</p>
            </div>
            <div>
              <h4 style={{ color: '#97d8c4' }}>🌟 Sun City Aliante Expansion</h4>
              <p>Pulte/Del Webb continuing expansion with new phases of active adult homes and enhanced amenities.</p>
            </div>
            <div>
              <h4 style={{ color: '#97d8c4' }}>🏪 Commercial Development</h4>
              <p>New shopping centers, restaurants, and medical facilities planned to support growing population.</p>
            </div>
          </div>
          
          <div style={{ marginTop: '2rem' }}>
            <button type="button" className="nav-cta" style={{ background: 'rgba(255,255,255,0.2)', marginRight: '1rem' }} onClick={requestMarketReport}>
              Get Detailed Market Report
            </button>
            <a href="#contact" className="nav-cta" style={{ background: '#97d8c4', color: '#333' }}>
              Schedule Market Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
