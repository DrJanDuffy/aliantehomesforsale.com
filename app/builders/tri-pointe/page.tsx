import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tri Pointe Homes Aliante - Luxury New Construction',
  alternates: { canonical: 'https://www.aliantehomesforsale.com/builders/tri-pointe' },
};

export default function TriPointeBuilder() {
  return (
    <main className="builder-detail-page">
      <section className="page-hero">
        <div className="hero-content">
          <h1>Tri Pointe Homes</h1>
          <p className="hero-subtitle">Luxury & Premium Design</p>
        </div>
      </section>
      <section className="builder-content">
        <div className="container">
          <h2>Luxury Living</h2>
          <p>Tri Pointe delivers high-end finishes and premium craftsmanship.</p>
          <div className="cta-buttons">
            <a href="/contact" className="cta-button primary">Contact Us</a>
            <a href="/builders" className="cta-button secondary">All Builders</a>
          </div>
        </div>
      </section>
    </main>
  );
}

