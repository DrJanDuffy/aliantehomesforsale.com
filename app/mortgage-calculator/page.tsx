import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mortgage Calculator - Aliante Home Loan Calculator & Rates',
  description: 'Calculate your monthly mortgage payment for Aliante homes. Current rates, payment breakdown, and affordability estimates.',
  alternates: { canonical: 'https://www.aliantehomesforsale.com/mortgage-calculator' },
};

export default function MortgageCalculator() {
  return (
    <main className="calculator-page">
      <section className="page-hero">
        <div className="hero-content">
          <h1>Mortgage Calculator & Current Rates</h1>
          <p className="hero-subtitle">Calculate your monthly payment</p>
        </div>
      </section>
      <section className="calculator-content">
        <div className="container">
          <h2>Calculate Your Monthly Payment</h2>
          <p>Use our mortgage calculator to estimate your monthly payment for homes in Aliante. Interactive calculator coming soon.</p>

          <h2>Current Mortgage Rates</h2>
          <p>Contact us for current mortgage rates and lender recommendations. We work with multiple lenders to get you the best rate.</p>

          <h2>First-Time Buyer Programs</h2>
          <p>Nevada offers several first-time buyer programs with down payment assistance and reduced rates. We can help you qualify.</p>

          <div className="cta-buttons">
            <a href="/contact" className="cta-button primary">Get Pre-Approved</a>
            <a href="/buyer-guide" className="cta-button secondary">First-Time Buyer Guide</a>
          </div>
        </div>
      </section>
    </main>
  );
}

