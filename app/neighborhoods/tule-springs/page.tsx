import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Villages at Tule Springs - D.R. Horton Master-Planned Community',
  description: 'Explore Villages at Tule Springs, a major D.R. Horton master-planned community near Aliante. New construction homes with family amenities.',
  alternates: { canonical: 'https://www.aliantehomesforsale.com/neighborhoods/tule-springs' },
};

export default function TuleSprings() {
  return (
    <main className="neighborhood-detail-page">
      <section className="page-hero">
        <div className="hero-content">
          <h1>Villages at Tule Springs</h1>
          <p className="hero-subtitle">D.R. Horton Master-Planned Community</p>
        </div>
      </section>
      <section className="neighborhood-content">
        <div className="container">
          <h2>About Villages at Tule Springs</h2>
          <p>The Villages at Tule Springs is a major D.R. Horton development featuring multiple neighborhoods with various price points and floor plans. Located just north of Aliante with easy freeway access.</p>
          
          <h2>Community Features</h2>
          <ul>
            <li>Multiple neighborhoods to choose from</li>
            <li>Parks and green spaces</li>
            <li>Family-friendly design</li>
            <li>New construction homes</li>
            <li>Convenient to shopping and schools</li>
          </ul>

          <h2>Price Range & Homes</h2>
          <p>Homes typically range from $350,000 to $550,000 with 3-5 bedrooms and 2-3 car garages.</p>

          <div className="cta-buttons">
            <a href="/contact" className="cta-button primary">Tour Tule Springs</a>
            <a href="/neighborhoods" className="cta-button secondary">All Neighborhoods</a>
          </div>
        </div>
      </section>
    </main>
  );
}

