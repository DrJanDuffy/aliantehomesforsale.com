import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - Aliante Real Estate',
  description: 'Privacy policy for Aliante Real Estate website. How we collect, use, and protect your personal information.',
  alternates: {
    canonical: 'https://www.aliantehomesforsale.com/privacy-policy',
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function PrivacyPolicy() {
  return (
    <main className="legal-page">
      <section className="page-hero">
        <div className="hero-content">
          <h1>Privacy Policy</h1>
          <p className="hero-subtitle">Last updated: October 10, 2025</p>
        </div>
      </section>

      <section className="legal-content">
        <div className="container">
          <h2>Information We Collect</h2>
          <p>
            When you use our website or contact us, we may collect personal information including 
            your name, email address, phone number, and property preferences.
          </p>

          <h2>How We Use Your Information</h2>
          <ul>
            <li>To respond to your inquiries about properties</li>
            <li>To provide you with requested market information</li>
            <li>To improve our website and services</li>
            <li>To send you updates about properties that match your preferences (with your consent)</li>
          </ul>

          <h2>Information Sharing</h2>
          <p>
            We do not sell your personal information. We may share information with trusted service 
            providers who assist us in operating our website and conducting our business.
          </p>

          <h2>Your Rights</h2>
          <p>
            You have the right to access, correct, or delete your personal information. Contact us 
            at DrDuffy@AlianteHomesForSale.com to exercise these rights.
          </p>

          <h2>Contact Us</h2>
          <p>
            Questions about this privacy policy? Contact us at:<br/>
            Email: DrDuffy@AlianteHomesForSale.com<br/>
            Phone: (702) 555-0123
          </p>
        </div>
      </section>
    </main>
  );
}

