import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'D.R. Horton Homes Aliante - Tule Springs Development',
  description: 'D.R. Horton new construction in Tule Springs and Aliante area. America's Builder with affordable quality homes. View floor plans and incentives.',
  alternates: { canonical: 'https://www.aliantehomesforsale.com/builders/dr-horton' },
};

export default function DRHortonBuilder() {
  return (
    <main className="builder-detail-page">
      <section className="page-hero">
        <div className="hero-content">
          <h1>D.R. Horton Homes - Tule Springs</h1>
          <p className="hero-subtitle">America's Builder Since 1978</p>
        </div>
      </section>
      <section className="builder-content">
        <div className="container">
          <h2>About D.R. Horton</h2>
          <p>America's largest homebuilder with communities throughout North Las Vegas including the Villages at Tule Springs.</p>
          <div className="cta-buttons">
            <a href="/contact" className="cta-button primary">View D.R. Horton Homes</a>
            <a href="/builders" className="cta-button secondary">All Builders</a>
          </div>
        </div>
      </section>
    </main>
  );
}

