import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - Aliante Real Estate',
  description: 'Terms of service for using the Aliante Real Estate website and services.',
  alternates: { canonical: 'https://www.aliantehomesforsale.com/terms-of-service' },
  robots: { index: false, follow: true },
};

export default function TermsOfService() {
  return (
    <main className="legal-page">
      <section className="page-hero">
        <div className="hero-content">
          <h1>Terms of Service</h1>
          <p className="hero-subtitle">Last updated: October 10, 2025</p>
        </div>
      </section>

      <section className="legal-content">
        <div className="container">
          <h2>Acceptance of Terms</h2>
          <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>

          <h2>Use License</h2>
          <p>Permission is granted to temporarily access the materials (information or software) on Aliante Real Estate's website for personal, non-commercial transitory viewing only.</p>

          <h2>Disclaimer</h2>
          <p>The materials on Aliante Real Estate's website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim all other warranties including, without limitation, implied warranties of merchantability, fitness for a particular purpose, or non-infringement of intellectual property.</p>

          <h2>Property Information</h2>
          <p>All property information is deemed reliable but not guaranteed. All properties are subject to prior sale, change, or withdrawal. Buyers should verify all information independently.</p>

          <h2>MLS Disclaimer</h2>
          <p>Listing information is provided courtesy of the Greater Las Vegas Association of Realtors MLS. All information should be independently verified.</p>

          <h2>Equal Housing Opportunity</h2>
          <p>Aliante Real Estate is committed to fair housing practices and equal opportunity for all persons.</p>

          <h2>Limitations</h2>
          <p>In no event shall Aliante Real Estate or its suppliers be liable for any damages arising out of the use or inability to use the materials on this website.</p>

          <h2>Contact Information</h2>
          <p>
            Questions about these terms? Contact us:<br/>
            Email: DrDuffy@AlianteHomesForSale.com<br/>
            Phone: (702) 555-0123<br/>
            Office: 2590 Nature Park Drive, Suite 275, North Las Vegas, NV 89084
          </p>
        </div>
      </section>
    </main>
  );
}

