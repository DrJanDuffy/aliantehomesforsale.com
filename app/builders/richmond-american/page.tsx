import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Richmond American Homes Aliante - Quality New Construction',
  description: 'Richmond American new construction homes in Aliante area. Flexible floor plans, quality craftsmanship, and competitive pricing.',
  alternates: { canonical: 'https://www.aliantehomesforsale.com/builders/richmond-american' },
};

export default function RichmondAmericanBuilder() {
  return (
    <main className="builder-detail-page">
      <section className="page-hero">
        <div className="hero-content">
          <h1>Richmond American Homes</h1>
          <p className="hero-subtitle">Quality Craftsmanship & Flexible Designs</p>
        </div>
      </section>
      <section className="builder-content">
        <div className="container">
          <h2>About Richmond American Homes</h2>
          <p>Richmond American Homes offers quality new construction with flexible floor plans and personalized design options. Known for attention to detail and customer satisfaction.</p>
          <h2>Why Choose Richmond American</h2>
          <ul>
            <li>Customizable floor plans</li>
            <li>Energy-efficient features</li>
            <li>Quality construction standards</li>
            <li>Competitive pricing</li>
            <li>Excellent warranty coverage</li>
          </ul>
          <h2>Contact Us</h2>
          <p>Contact us for current Richmond American communities and available inventory in the Aliante area.</p>
          <div className="cta-buttons">
            <a href="/contact" className="cta-button primary">Contact Us About Richmond American</a>
            <a href="/builders" className="cta-button secondary">View All Builders</a>
          </div>
        </div>
      </section>
    </main>
  );
}

