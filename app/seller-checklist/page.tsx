import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Selling Your Home Checklist - Aliante Real Estate',
  description: 'Complete checklist for selling your Aliante home. Preparation, pricing, marketing, and closing tips from local experts.',
  alternates: { canonical: 'https://www.aliantehomesforsale.com/seller-checklist' },
};

export default function SellerChecklist() {
  return (
    <main className="seller-checklist-page">
      <section className="page-hero">
        <div className="hero-content">
          <h1>Selling Your Aliante Home Checklist</h1>
          <p className="hero-subtitle">Expert guidance for maximum value</p>
        </div>
      </section>
      <section className="checklist-content">
        <div className="container">
          <h2>Before Listing Your Home</h2>
          <ul>
            <li>Get a free home valuation (CMA)</li>
            <li>Review comparable sales in your neighborhood</li>
            <li>Plan necessary repairs and improvements</li>
            <li>Declutter and depersonalize</li>
            <li>Deep clean or hire professional cleaners</li>
            <li>Stage your home for photos and showings</li>
          </ul>

          <h2>Marketing Your Property</h2>
          <p>We provide comprehensive marketing including professional photography, virtual tours, MLS listing, social media promotion, and targeted advertising to qualified buyers.</p>

          <h2>Pricing Strategy</h2>
          <p>Proper pricing is critical. We'll analyze current market conditions, recent sales, and active competition to price your home competitively for a fast sale at top dollar.</p>

          <h2>Showings & Offers</h2>
          <ul>
            <li>Keep your home show-ready</li>
            <li>Be flexible with showing times</li>
            <li>We'll review all offers and negotiate on your behalf</li>
            <li>Compare not just price, but terms and contingencies</li>
          </ul>

          <h2>Closing Process</h2>
          <p>From accepted offer to closing typically takes 30-45 days. We'll guide you through inspections, appraisals, and final walkthrough.</p>

          <div className="cta-buttons">
            <a href="/home-valuation" className="cta-button primary">Get Free Home Valuation</a>
            <a href="/contact" className="cta-button secondary">Seller Consultation</a>
          </div>
        </div>
      </section>
    </main>
  );
}

