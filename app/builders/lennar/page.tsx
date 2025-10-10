import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lennar Homes Aliante - #1 Volume Builder | Everything Included',
  description: 'Lennar new construction homes in Aliante. Everything Included® - Wi-Fi certified, smart home technology. View floor plans and incentives.',
  alternates: {
    canonical: 'https://www.aliantehomesforsale.com/builders/lennar',
  },
};

export default function LennarBuilder() {
  return (
    <main className="builder-detail-page">
      <section className="page-hero">
        <div className="hero-content">
          <h1>Lennar Homes in Aliante</h1>
          <p className="hero-subtitle">#1 Volume Builder - Everything Included®</p>
        </div>
      </section>

      <section className="builder-content">
        <div className="container">
          <h2>About Lennar</h2>
          <p>Lennar is America's #1 volume homebuilder with a proven track record of quality and value. Their Everything Included® approach means Wi-Fi certified homes, smart home technology, and premium features come standard.</p>

          <h3>Available in Aliante Area</h3>
          <p>Contact us for current Lennar communities and available inventory in the Aliante area.</p>

          <div className="cta-buttons">
            <a href="/contact" className="cta-button primary">Contact Us About Lennar</a>
            <a href="/builders" className="cta-button secondary">View All Builders</a>
          </div>
        </div>
      </section>
    </main>
  );
}

