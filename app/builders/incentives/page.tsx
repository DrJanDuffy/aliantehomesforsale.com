import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Builder Incentives Aliante - Current Offers & Discounts',
  description: 'Current builder incentives in Aliante and North Las Vegas. Special financing, upgrades, and discounts from Lennar, D.R. Horton, Tri Pointe, and more.',
  alternates: { canonical: 'https://www.aliantehomesforsale.com/builders/incentives' },
};

export default function BuilderIncentives() {
  return (
    <main className="incentives-page">
      <section className="page-hero">
        <div className="hero-content">
          <h1>Current Builder Incentives</h1>
          <p className="hero-subtitle">Save thousands on your new home</p>
        </div>
      </section>
      <section className="incentives-content">
        <div className="container">
          <h2>Active Builder Incentives - October 2025</h2>
          <p>Builders are offering significant incentives to buyers. Contact us for the latest offers and how to maximize your savings.</p>
          
          <h2>Types of Incentives</h2>
          <ul>
            <li><strong>Financing Incentives:</strong> Reduced interest rates, closing cost assistance</li>
            <li><strong>Upgrade Credits:</strong> $10,000-$50,000 in free upgrades</li>
            <li><strong>Price Reductions:</strong> Special pricing on select homes</li>
            <li><strong>Design Center Credits:</strong> Free flooring, appliances, or premium finishes</li>
          </ul>

          <h2>How We Help You Save</h2>
          <p>As builder experts, we track all current incentives and negotiate additional concessions on your behalf. We've saved our clients an average of $15,000+ through incentive stacking and strategic negotiation.</p>

          <h2>Current Hot Deals</h2>
          <p>Lennar, D.R. Horton, and Tri Pointe are offering special incentives this month. Contact us for a personalized incentive analysis for your target home.</p>

          <div className="cta-buttons">
            <a href="/contact" className="cta-button primary">Get Current Incentives</a>
            <a href="/builders" className="cta-button secondary">View All Builders</a>
          </div>
        </div>
      </section>
    </main>
  );
}

