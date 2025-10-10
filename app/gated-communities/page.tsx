import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gated Communities Aliante - 86+ Properties | Secure Living',
  description: 'Explore gated communities in Aliante. 24/7 security, private amenities, premium lifestyle. Browse 86+ available properties.',
  alternates: {
    canonical: 'https://www.aliantehomesforsale.com/gated-communities',
  },
};

export default function GatedCommunities() {
  return (
    <main className="gated-communities-page">
      <section className="page-hero">
        <div className="hero-content">
          <h1>Gated Communities in Aliante</h1>
          <p className="hero-subtitle">86 properties available - Secure & Private Living</p>
        </div>
      </section>

      <section className="communities-content">
        <div className="container">
          <h2>Why Choose a Gated Community?</h2>
          <ul>
            <li>24/7 security and controlled access</li>
            <li>Private amenities and clubhouses</li>
            <li>Premium landscaping and maintenance</li>
            <li>Higher property values</li>
            <li>Peace of mind and privacy</li>
          </ul>

          <h2>Featured Gated Communities</h2>
          <p><strong>The Prominence</strong> - Aliante's premier luxury gated community</p>
          <p><strong>Club Aliante</strong> - Golf course gated living</p>

          <div className="cta-buttons">
            <a href="/contact" className="cta-button primary">Schedule Tours</a>
            <a href="/neighborhoods" className="cta-button secondary">View All Neighborhoods</a>
          </div>
        </div>
      </section>
    </main>
  );
}

