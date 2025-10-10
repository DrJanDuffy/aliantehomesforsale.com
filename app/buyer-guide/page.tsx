import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'First-Time Home Buyer Guide Aliante - Step-by-Step Process',
  description: 'Complete guide for first-time home buyers in Aliante. Learn the buying process, financing options, and tips for success.',
  alternates: { canonical: 'https://www.aliantehomesforsale.com/buyer-guide' },
};

export default function BuyerGuide() {
  return (
    <main className="buyer-guide-page">
      <section className="page-hero">
        <div className="hero-content">
          <h1>First-Time Home Buyer Guide</h1>
          <p className="hero-subtitle">Your complete guide to buying in Aliante</p>
        </div>
      </section>
      <section className="guide-content">
        <div className="container">
          <h2>Step-by-Step Buying Process</h2>
          <ol>
            <li><strong>Get Pre-Approved:</strong> Know your budget before house hunting</li>
            <li><strong>Choose Your Agent:</strong> Work with local Aliante experts (that's us!)</li>
            <li><strong>Search for Homes:</strong> Browse 286+ listings updated every 15 minutes</li>
            <li><strong>Make an Offer:</strong> We'll help you craft a competitive offer</li>
            <li><strong>Home Inspection:</strong> Protect your investment with thorough inspection</li>
            <li><strong>Finalize Financing:</strong> Complete loan approval and appraisal</li>
            <li><strong>Close the Deal:</strong> Sign papers and get your keys!</li>
          </ol>

          <h2>First-Time Buyer Programs</h2>
          <p>Nevada offers down payment assistance programs for first-time buyers. We'll help you navigate these options and maximize your benefits.</p>

          <h2>Common Mistakes to Avoid</h2>
          <ul>
            <li>Not getting pre-approved before searching</li>
            <li>Waiving home inspection to be competitive</li>
            <li>Maxing out your budget without room for emergencies</li>
            <li>Choosing the wrong neighborhood for your lifestyle</li>
            <li>Not budgeting for closing costs and moving expenses</li>
          </ul>

          <h2>Ready to Start?</h2>
          <p>Schedule a free consultation with our team. We'll walk you through the entire process and answer all your questions.</p>

          <div className="cta-buttons">
            <a href="/contact" className="cta-button primary">Free Buyer Consultation</a>
            <a href="/homes-for-sale" className="cta-button secondary">Start Home Search</a>
          </div>
        </div>
      </section>
    </main>
  );
}

