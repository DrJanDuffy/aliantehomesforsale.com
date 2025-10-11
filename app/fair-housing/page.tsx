import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fair Housing Policy - Aliante Real Estate',
  description: 'Aliante Real Estate is committed to fair housing practices and equal opportunity for all persons regardless of race, color, religion, sex, handicap, familial status, or national origin.',
  alternates: { canonical: 'https://www.aliantehomesforsale.com/fair-housing' },
  robots: { index: false, follow: true },
};

export default function FairHousing() {
  return (
    <main className="legal-page">
      <section className="page-hero">
        <div className="hero-content">
          <h1>Fair Housing Policy</h1>
          <p className="hero-subtitle">Equal Housing Opportunity</p>
        </div>
      </section>

      <section className="legal-content">
        <div className="container">
          <h2>Our Fair Housing Commitment</h2>
          <p>
            Aliante Real Estate is committed to providing equal professional service to all persons without regard to race, color, religion, sex, handicap, familial status, national origin, sexual orientation, or gender identity.
          </p>

          <h2>Fair Housing Act</h2>
          <p>
            The Fair Housing Act prohibits discrimination in housing because of:
          </p>
          <ul>
            <li>Race or Color</li>
            <li>National Origin</li>
            <li>Religion</li>
            <li>Sex (including sexual orientation and gender identity)</li>
            <li>Familial Status (families with children under 18)</li>
            <li>Disability</li>
          </ul>

          <h2>Nevada Fair Housing Law</h2>
          <p>
            In addition to federal protections, Nevada law provides additional protections against housing discrimination based on ancestry, sexual orientation, and gender identity or expression.
          </p>

          <h2>Our Practices</h2>
          <p>
            We provide equal professional real estate services to all clients including:
          </p>
          <ul>
            <li>Showing all available properties that meet clients' stated criteria</li>
            <li>Providing the same quality of service to all clients</li>
            <li>Treating all offers equally regardless of the buyer's protected class</li>
            <li>Never steering clients to or away from neighborhoods based on protected characteristics</li>
            <li>Providing reasonable accommodations for persons with disabilities</li>
          </ul>

          <h2>Reporting Discrimination</h2>
          <p>
            If you believe you have been discriminated against in housing, you may file a complaint with:
          </p>
          <ul>
            <li><strong>U.S. Department of Housing and Urban Development (HUD)</strong><br/>
            Phone: 1-800-669-9777<br/>
            Website: www.hud.gov</li>
            <li><strong>Nevada Equal Rights Commission</strong><br/>
            Phone: (775) 823-6690</li>
          </ul>

          <h2>Questions</h2>
          <p>
            If you have questions about our fair housing practices, please contact us:
          </p>
          <p>
            Email: DrDuffy@AlianteHomesForSale.com<br/>
            Phone: (702) 555-0123<br/>
            Office: 2590 Nature Park Drive, Suite 275, North Las Vegas, NV 89084
          </p>

          <div style={{ marginTop: '2rem', textAlign: 'center' }}>
            <p><strong>🏠 EQUAL HOUSING OPPORTUNITY</strong></p>
          </div>
        </div>
      </section>
    </main>
  );
}

