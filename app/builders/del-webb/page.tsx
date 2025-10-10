import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Del Webb Sun City Aliante - Active Adult 55+ Community',
  alternates: { canonical: 'https://www.aliantehomesforsale.com/builders/del-webb' },
};

export default function DelWebbBuilder() {
  return (
    <main className="builder-detail-page">
      <section className="page-hero">
        <div className="hero-content">
          <h1>Del Webb - Sun City Aliante</h1>
          <p className="hero-subtitle">Active Adult 55+ Living</p>
        </div>
      </section>
      <section className="builder-content">
        <div className="container">
          <h2>Sun City Aliante Lifestyle</h2>
          <p>Resort-style amenities, social activities, and low-maintenance living for active adults 55+.</p>
          <div className="cta-buttons">
            <a href="/contact" className="cta-button primary">Tour Sun City</a>
            <a href="/builders" className="cta-button secondary">All Builders</a>
          </div>
        </div>
      </section>
    </main>
  );
}

