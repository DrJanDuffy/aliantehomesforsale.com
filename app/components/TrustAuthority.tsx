'use client';

import { useId } from 'react';

export default function TrustAuthority() {
  const aboutHeadingId = useId();
  const aboutSectionId = useId();

  return (
    <section className="trust-authority" id={aboutSectionId} aria-labelledby={aboutHeadingId}>
      <div className="container">
        <h2 id={aboutHeadingId} style={{ textAlign: 'center', marginBottom: '2rem' }}>
          Your Trusted Aliante Real Estate Experts Since 2018
        </h2>
        <p style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '1.1rem', color: '#666' }}>
          Local expertise, proven results, and personalized service for every client
        </p>
        
        <div className="credentials">
          <div className="credential">
            <h3>🏠 Hyperlocal Aliante Expertise</h3>
            <p>6+ years specializing exclusively in Aliante and North Las Vegas properties. We know every street, every builder, every school district, and every market trend. Our hyperlocal knowledge gives our clients the competitive advantage they need.</p>
            <ul style={{ marginTop: '1rem', listStyle: 'none' }}>
              <li>✓ All 15+ Aliante neighborhoods and communities</li>
              <li>✓ Builder relationships with Lennar, D.R. Horton, Tri Pointe</li>
              <li>✓ School district boundaries and ratings</li>
              <li>✓ Future development and infrastructure plans</li>
            </ul>
          </div>
          
          <div className="credential">
            <h3>🤝 Builder Intelligence Network</h3>
            <p>Direct relationships with all major builders in North Las Vegas. We track incentives, lot premiums, construction schedules, and negotiate better deals for our clients. Our builder connections save our clients an average of $15,000+ per transaction.</p>
            <ul style={{ marginTop: '1rem', listStyle: 'none' }}>
              <li>✓ Real-time access to builder incentives and upgrades</li>
              <li>✓ First notification of new releases and lot availability</li>
              <li>✓ Quality control and construction timeline monitoring</li>
              <li>✓ Builder relationship for warranty and service issues</li>
            </ul>
          </div>
          
          <div className="credential">
            <h3>📈 Proven Track Record</h3>
            <p>500+ successful transactions including new construction, resales, investments, and luxury properties. Our clients consistently receive top dollar for their homes and secure the best deals as buyers.</p>
            <ul style={{ marginTop: '1rem', listStyle: 'none' }}>
              <li>✓ 4.9/5.0 average client satisfaction rating</li>
              <li>✓ 94% of our business comes from referrals</li>
              <li>✓ Average 6 days faster sales than market average</li>
              <li>✓ 98% of listings sell within 60 days</li>
            </ul>
          </div>
          
          <div className="credential">
            <h3>🎯 Comprehensive Client Service</h3>
            <p>From initial consultation to closing and beyond, we provide white-glove service that makes buying or selling stress-free. Our clients have access to our network of trusted professionals including lenders, inspectors, contractors, and attorneys.</p>
            <ul style={{ marginTop: '1rem', listStyle: 'none' }}>
              <li>✓ Free pre-listing home preparation consultation</li>
              <li>✓ Professional photography and marketing materials</li>
              <li>✓ Preferred lender network with competitive rates</li>
              <li>✓ Post-closing support and local recommendations</li>
            </ul>
          </div>
          
          <div className="credential">
            <h3>💡 Technology & Innovation</h3>
            <p>We leverage the latest real estate technology to provide our clients with real-time market data, virtual tours, digital document management, and 24/7 access to property information and transaction updates.</p>
            <ul style={{ marginTop: '1rem', listStyle: 'none' }}>
              <li>✓ Real-time MLS data and market analytics</li>
              <li>✓ Professional virtual tours and drone photography</li>
              <li>✓ Digital transaction management and e-signatures</li>
              <li>✓ Mobile app for property alerts and communication</li>
            </ul>
          </div>
          
          <div className="credential">
            <h3>🏆 Awards & Recognition</h3>
            <p>Recognized by industry peers and clients for exceptional service and results. Our achievements reflect our commitment to excellence and continuous improvement in serving the Aliante community.</p>
            <ul style={{ marginTop: '1rem', listStyle: 'none' }}>
              <li>✓ Top Producer Award - Las Vegas REALTORS® 2023, 2024</li>
              <li>✓ Five Star Professional Award - Nevada Business Magazine</li>
              <li>✓ Customer Service Excellence Award - Greater Las Vegas Association</li>
              <li>✓ Community Service Recognition - North Las Vegas Chamber</li>
            </ul>
          </div>
        </div>
        
        <div style={{ background: 'linear-gradient(135deg, #2c5aa0 0%, #97d8c4 100%)', color: 'white', padding: '3rem 2rem', borderRadius: '12px', textAlign: 'center', marginTop: '3rem' }}>
          <h3 style={{ marginBottom: '1rem', fontSize: '1.8rem' }}>🏗️ New Construction Specialists</h3>
          <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
            We monitor all active builders in North Las Vegas and provide expert guidance through the new construction process
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', margin: '2rem 0', textAlign: 'left' }}>
            <div style={{ background: 'rgba(255,255,255,0.15)', padding: '1.5rem', borderRadius: '8px', backdropFilter: 'blur(10px)' }}>
              <h4 style={{ color: '#97d8c4', marginBottom: '0.5rem' }}>✅ Builder Negotiations & Incentives</h4>
              <p>We negotiate builder incentives, upgrades, and closing cost credits. Our clients save an average of $15K+ in additional value.</p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.15)', padding: '1.5rem', borderRadius: '8px', backdropFilter: 'blur(10px)' }}>
              <h4 style={{ color: '#97d8c4', marginBottom: '0.5rem' }}>✅ Strategic Lot Selection</h4>
              <p>Premium vs. standard lot placement strategies. We help you choose the best lot for resale value and lifestyle preferences.</p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.15)', padding: '1.5rem', borderRadius: '8px', backdropFilter: 'blur(10px)' }}>
              <h4 style={{ color: '#97d8c4', marginBottom: '0.5rem' }}>✅ Construction Timeline Management</h4>
              <p>We monitor construction progress, coordinate inspections, and keep your build on schedule to avoid delays and issues.</p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.15)', padding: '1.5rem', borderRadius: '8px', backdropFilter: 'blur(10px)' }}>
              <h4 style={{ color: '#97d8c4', marginBottom: '0.5rem' }}>✅ Quality Control Inspections</h4>
              <p>Pre-drywall, pre-close walkthroughs, and punch list management to ensure your new home meets quality standards.</p>
            </div>
          </div>
          
          <div style={{ marginTop: '2rem' }}>
            <a href="#contact" className="nav-cta" style={{ background: 'white', color: '#2c5aa0', marginRight: '1rem' }}>
              Schedule Free Consultation
            </a>
            <a href="tel:+17025550123" className="nav-cta" style={{ background: 'rgba(255,255,255,0.2)' }}>
              Call (702) 555-0123
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
