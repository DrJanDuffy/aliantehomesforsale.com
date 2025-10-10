import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'New Construction Builders in Aliante - Compare All Builders',
  description: 'Compare all new construction builders in Aliante: Lennar, D.R. Horton, Tri Pointe, Del Webb. Incentives, floor plans, and expert guidance.',
  alternates: {
    canonical: 'https://www.aliantehomesforsale.com/builders',
  },
};

export default function Builders() {
  return (
    <main className="builders-page">
      <section className="page-hero">
        <div className="hero-content">
          <h1>New Construction Builders in Aliante</h1>
          <p className="hero-subtitle">
            Compare builders, floor plans, and incentives
          </p>
        </div>
      </section>

      <section className="builders-grid">
        <div className="container">
          <h2>Top Builders in Aliante Area</h2>
          
          <div className="builder-cards">
            <div className="builder-card">
              <h3>Lennar Homes</h3>
              <p className="builder-tag">#1 Volume Builder in Nevada</p>
              <p>Everything's Included® - No upgrades needed</p>
              <ul>
                <li>Energy-efficient designs</li>
                <li>Smart home technology included</li>
                <li>Wi-Fi Certified homes</li>
              </ul>
              <a href="/builders/lennar" className="cta-button">
                Explore Lennar
              </a>
            </div>

            <div className="builder-card">
              <h3>D.R. Horton</h3>
              <p className="builder-tag">America's Builder - Tule Springs</p>
              <p>Affordable quality homes for families</p>
              <ul>
                <li>Wide range of floor plans</li>
                <li>Competitive pricing</li>
                <li>Quick move-in homes available</li>
              </ul>
              <a href="/builders/dr-horton" className="cta-button">
                Explore D.R. Horton
              </a>
            </div>

            <div className="builder-card">
              <h3>Tri Pointe Homes</h3>
              <p className="builder-tag">Luxury & Premium Design</p>
              <p>High-end finishes and craftsmanship</p>
              <ul>
                <li>Luxury amenities standard</li>
                <li>Designer finishes</li>
                <li>Premium locations</li>
              </ul>
              <a href="/builders/tri-pointe" className="cta-button">
                Explore Tri Pointe
              </a>
            </div>

            <div className="builder-card">
              <h3>Del Webb (Pulte)</h3>
              <p className="builder-tag">Active Adult 55+ Communities</p>
              <p>Sun City Aliante lifestyle</p>
              <ul>
                <li>Resort-style amenities</li>
                <li>Social activities</li>
                <li>Low-maintenance living</li>
              </ul>
              <a href="/builders/del-webb" className="cta-button">
                Explore Del Webb
              </a>
            </div>
          </div>

          <div className="cta-section">
            <h2>Ready to Build Your Dream Home?</h2>
            <p>Get expert guidance on builder selection and incentives</p>
            <div className="cta-buttons">
              <a href="/contact" className="cta-button primary">
                Talk to an Expert
              </a>
              <a href="/builders/incentives" className="cta-button secondary">
                View Current Incentives
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

