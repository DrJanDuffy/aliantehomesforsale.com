import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Accessibility Statement - Aliante Real Estate',
  description: 'Our commitment to web accessibility and ensuring our website is accessible to all users.',
  alternates: { canonical: 'https://www.aliantehomesforsale.com/accessibility' },
  robots: { index: false, follow: true },
};

export default function Accessibility() {
  return (
    <main className="legal-page">
      <section className="page-hero">
        <div className="hero-content">
          <h1>Accessibility Statement</h1>
          <p className="hero-subtitle">Our Commitment to Accessibility</p>
        </div>
      </section>

      <section className="legal-content">
        <div className="container">
          <h2>Our Commitment</h2>
          <p>Aliante Real Estate is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.</p>

          <h2>Conformance Status</h2>
          <p>We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards. These guidelines explain how to make web content more accessible for people with disabilities.</p>

          <h2>Measures to Support Accessibility</h2>
          <p>Aliante Real Estate takes the following measures to ensure accessibility:</p>
          <ul>
            <li>Include accessibility as part of our mission statement</li>
            <li>Provide training to our staff on web accessibility</li>
            <li>Include people with disabilities in our user testing</li>
            <li>Test our website regularly for accessibility issues</li>
          </ul>

          <h2>Technical Specifications</h2>
          <p>This website is built using semantic HTML5, ARIA landmarks, proper heading hierarchy, and keyboard navigation support.</p>

          <h2>Feedback</h2>
          <p>
            We welcome your feedback on the accessibility of this website. Please contact us if you encounter accessibility barriers:
          </p>
          <ul>
            <li>Email: info@aliantehomesforsale.com</li>
            <li>Phone: (702) 555-0123</li>
            <li>Office: 2590 Nature Park Drive, Suite 275, North Las Vegas, NV 89084</li>
          </ul>

          <h2>Compatibility</h2>
          <p>This website is designed to be compatible with assistive technologies including screen readers, screen magnifiers, and speech recognition software. It is optimized for recent versions of major browsers including Chrome, Firefox, Safari, and Edge.</p>

          <h2>Assessment and Remediation</h2>
          <p>We assess the accessibility of this website using:</p>
          <ul>
            <li>Self-evaluation and internal testing</li>
            <li>Automated accessibility testing tools</li>
            <li>Manual testing with assistive technologies</li>
            <li>User feedback and testing</li>
          </ul>

          <h2>Date</h2>
          <p>This statement was last updated on October 10, 2025.</p>
        </div>
      </section>
    </main>
  );
}

