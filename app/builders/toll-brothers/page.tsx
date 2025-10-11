import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Toll Brothers Luxury Homes North Las Vegas NV | Ultra-Luxury New Construction',
  description: 'Browse 28+ Toll Brothers luxury homes in North Las Vegas, Henderson. Fortune 500 builder. Elkhorn Grove, Glenrock, Skye Canyon. $575K-$1.6M. Fall savings event. Call (702) 707-7273.',
  keywords: 'Toll Brothers North Las Vegas, luxury new construction, Elkhorn Grove, Glenrock, Toll Brothers Henderson, luxury homebuilder Las Vegas',
  alternates: { canonical: 'https://www.aliantehomesforsale.com/builders/toll-brothers' },
};

export default function TollBrothers() {
  return (
    <main className="builder-detail-page">
      {/* Hero Section */}
      <section className="builder-hero">
        <div className="container">
          <div className="builder-header">
            <div className="builder-logo-large">
              <h1>Toll Brothers</h1>
              <p className="tagline">The Nation's Luxury Homebuilder®</p>
            </div>
            <div className="builder-badges">
              <span className="badge">Fortune 500</span>
              <span className="badge">Ultra-Luxury</span>
              <span className="badge">Since 1967</span>
            </div>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <h3>12+</h3>
              <p>Communities in Las Vegas Area</p>
            </div>
            <div className="stat">
              <h3>28+</h3>
              <p>Quick Move-In Homes Available</p>
            </div>
            <div className="stat">
              <h3>$575K-$1.6M</h3>
              <p>Price Range</p>
            </div>
            <div className="stat">
              <h3>★★★★★</h3>
              <p>Premium Quality Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Promotion */}
      <section className="current-promotion">
        <div className="container">
          <div className="promo-banner">
            <h2>🎉 Fall Savings Event - Limited Time!</h2>
            <p>3.625% First-Year Rate (5.68% APR) with 2/1 Buydown Program on Select Homes*</p>
            <a href="/contact" className="cta-button">Get Full Details - Call (702) 707-7273</a>
          </div>
        </div>
      </section>

      {/* About Toll Brothers */}
      <section className="about-builder">
        <div className="container">
          <h2>Why Toll Brothers is America's Luxury Leader</h2>
          
          <div className="about-content">
            <div className="about-text">
              <p>Since 1967, Toll Brothers has been building luxury homes with uncompromising quality and architectural excellence. As a Fortune 500 company and the nation's leading builder of luxury homes, Toll Brothers has delivered over 60,000 homes across 24 states.</p>

              <p>In the Las Vegas market, Toll Brothers offers an exceptional portfolio of communities ranging from luxury townhomes to ultra-luxury single-family estates. Every home features superior craftsmanship, premium materials, and innovative design that sets the standard for luxury living.</p>

              <h3>The Toll Brothers Advantage:</h3>
              <ul>
                <li>✅ <strong>Fortune 500 Company</strong> - Financial strength and stability</li>
                <li>✅ <strong>Architectural Excellence</strong> - Award-winning designs and floor plans</li>
                <li>✅ <strong>Premium Materials</strong> - Superior finishes and construction quality</li>
                <li>✅ <strong>Design Flexibility</strong> - Extensive customization options</li>
                <li>✅ <strong>Comprehensive Warranties</strong> - Industry-leading protection</li>
                <li>✅ <strong>Proven Track Record</strong> - 57+ years of luxury homebuilding</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Communities */}
      <section className="communities-section">
        <div className="container">
          <h2>Toll Brothers Communities in North Las Vegas & Henderson</h2>
          
          <div className="communities-grid">
            {/* Elkhorn Grove */}
            <div className="community-card featured">
              <div className="community-badge">9 Quick Move-In Homes</div>
              <h3>Elkhorn Grove</h3>
              <p className="location">Las Vegas, NV | Master-Planned Community</p>
              
              <div className="community-details">
                <p><strong>2,691 - 3,971 sq ft</strong></p>
                <p><strong>3-5 bedrooms | 2-4 bathrooms</strong></p>
                <p><strong>2-3 car garage</strong></p>
                <p className="price-range">From $800K - $1.2M</p>
              </div>

              <p>Master-planned luxury community featuring two distinct collections of single-family homes. Premium lots with mountain views, resort-style amenities, and sophisticated architectural design.</p>

              <h4>Key Features:</h4>
              <ul>
                <li>Master-planned community with parks and trails</li>
                <li>Two home collections with multiple floor plans</li>
                <li>Gourmet kitchens with premium appliances</li>
                <li>Open-concept great room designs</li>
                <li>9 quick move-in homes ready now</li>
              </ul>

              <div className="community-actions">
                <a href="/contact" className="cta-button primary">Schedule Tour</a>
                <a href="/contact" className="cta-button secondary">Get Info</a>
              </div>
            </div>

            {/* Glenrock */}
            <div className="community-card featured">
              <div className="community-badge">1 Quick Move-In Home</div>
              <h3>Glenrock</h3>
              <p className="location">Las Vegas, NV | Luxury Single-Family</p>
              
              <div className="community-details">
                <p><strong>2,897 - 4,557 sq ft</strong></p>
                <p><strong>3-5 bedrooms | 3-6 bathrooms</strong></p>
                <p><strong>3-4 car garage</strong></p>
                <p className="price-range">From $1,581,995</p>
              </div>

              <p>Ultra-luxury single-family estate homes featuring the finest craftsmanship and materials. Sophisticated architecture, premium finishes, and expansive living spaces.</p>

              <h4>Key Features:</h4>
              <ul>
                <li>Ultra-luxury estate homes</li>
                <li>Gourmet chef's kitchens</li>
                <li>Master suites with spa-like bathrooms</li>
                <li>Premium lot selections available</li>
                <li>Smart home technology integration</li>
              </ul>

              <div className="community-actions">
                <a href="/contact" className="cta-button primary">Private Showing</a>
                <a href="/contact" className="cta-button secondary">Request Info</a>
              </div>
            </div>

            {/* Toll Brothers at Skye Canyon */}
            <div className="community-card">
              <div className="community-badge">3 Quick Move-In Homes</div>
              <h3>Toll Brothers at Skye Canyon</h3>
              <p className="location">Las Vegas, NV | Master-Planned Community</p>
              
              <div className="community-details">
                <p><strong>2,236 - 2,900 sq ft</strong></p>
                <p><strong>3-5 bedrooms | 2-4 bathrooms</strong></p>
                <p><strong>2 car garage</strong></p>
                <p className="price-range">From $750K - $950K</p>
              </div>

              <p>Stunning single-family homes in one of Las Vegas's premier master-planned communities. Resort-style amenities, hiking trails, and panoramic views.</p>

              <div className="community-actions">
                <a href="/contact" className="cta-button">View Homes</a>
              </div>
            </div>

            {/* Raven Crest */}
            <div className="community-card">
              <div className="community-badge">5 Quick Move-In Homes</div>
              <h3>Raven Crest</h3>
              <p className="location">Las Vegas, NV | Luxury Townhomes</p>
              
              <div className="community-details">
                <p><strong>2,300 - 2,640 sq ft</strong></p>
                <p><strong>3-4 bedrooms | 3 bathrooms</strong></p>
                <p><strong>2 car garage</strong></p>
                <p className="price-range">From $634,995</p>
              </div>

              <p>Luxury townhomes with sophisticated design and premium finishes. Low-maintenance living with high-end features throughout.</p>

              <div className="community-actions">
                <a href="/contact" className="cta-button">Schedule Tour</a>
              </div>
            </div>

            {/* Cordillera */}
            <div className="community-card">
              <div className="community-badge">4 Quick Move-In Homes</div>
              <h3>Cordillera</h3>
              <p className="location">Las Vegas, NV | Modern Townhomes</p>
              
              <div className="community-details">
                <p><strong>1,803 - 2,154 sq ft</strong></p>
                <p><strong>3-4 bedrooms | 2-3 bathrooms</strong></p>
                <p><strong>2 car garage</strong></p>
                <p className="price-range">From $576,995</p>
              </div>

              <p>Contemporary townhomes with modern design and smart floor plans. Perfect for first-time luxury buyers or those seeking low-maintenance living.</p>

              <div className="community-actions">
                <a href="/contact" className="cta-button">Get Details</a>
              </div>
            </div>

            {/* Mira Villa */}
            <div className="community-card">
              <div className="community-badge">5 Quick Move-In Homes</div>
              <h3>Mira Villa</h3>
              <p className="location">Las Vegas, NV | Luxury Condos</p>
              
              <div className="community-details">
                <p><strong>2,052 - 3,724 sq ft</strong></p>
                <p><strong>2-4 bedrooms | 2-4 bathrooms</strong></p>
                <p><strong>2-4 car garage</strong></p>
                <p className="price-range">From $1,084,000</p>
              </div>

              <p>Resort-style luxury condominium living with world-class amenities. Lock-and-leave lifestyle with concierge services and premium finishes.</p>

              <div className="community-actions">
                <a href="/contact" className="cta-button">View Condos</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Henderson Communities */}
      <section className="henderson-communities">
        <div className="container">
          <h2>Toll Brothers in Henderson, NV</h2>
          
          <div className="communities-grid">
            <div className="community-card">
              <div className="community-badge">1 Quick Move-In Home</div>
              <h3>Incanta Lago</h3>
              <p className="location">Henderson, NV | Lake Las Vegas</p>
              
              <div className="community-details">
                <p><strong>2,488 - 3,293 sq ft | 3-4 BR | 3-4 BA</strong></p>
                <p className="price-range">From $934,995</p>
              </div>

              <p>Stunning single-family homes in the prestigious Lake Las Vegas area. Lakeside living with golf, marina, and resort amenities.</p>

              <div className="community-actions">
                <a href="/contact" className="cta-button">Learn More</a>
              </div>
            </div>

            <div className="community-card">
              <div className="community-badge">3 Quick Move-In Homes</div>
              <h3>Bella Strada</h3>
              <p className="location">Henderson, NV | Luxury Estates</p>
              
              <div className="community-details">
                <p><strong>3,229 - 3,468 sq ft | 3-4 BR | 3-4 BA</strong></p>
                <p className="price-range">From $1,249,000</p>
              </div>

              <p>Exclusive luxury estate homes with premium finishes, mountain views, and resort-style community amenities.</p>

              <div className="community-actions">
                <a href="/contact" className="cta-button">Schedule Tour</a>
              </div>
            </div>

            <div className="community-card">
              <h3>Toll Brothers at Inspirada</h3>
              <p className="location">Henderson, NV | Master-Planned</p>
              
              <div className="community-details">
                <p><strong>1,803 - 2,154 sq ft | 4 BR | 3 BA</strong></p>
                <p className="price-range">Pricing Available</p>
              </div>

              <p>Family-friendly master-planned community with parks, trails, pools, and award-winning schools.</p>

              <div className="community-actions">
                <a href="/contact" className="cta-button">Get Info</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="why-work-with-us">
        <div className="container">
          <h2>Why Work with Dr. Jan Duffy for Your Toll Brothers Home?</h2>
          
          <div className="benefits-grid">
            <div className="benefit">
              <h3>🤝 Direct Builder Relationship</h3>
              <p>Established relationship with Toll Brothers sales teams ensures you get priority access to new releases and best available incentives.</p>
            </div>

            <div className="benefit">
              <h3>💰 No Cost to You</h3>
              <p>Toll Brothers pays our commission. You get expert representation, negotiation, and advocacy at absolutely no cost.</p>
            </div>

            <div className="benefit">
              <h3>🎯 Strategic Lot Selection</h3>
              <p>We analyze every lot factor - views, orientation, premiums, future development - to help you choose the best location.</p>
            </div>

            <div className="benefit">
              <h3>📋 Contract Expertise</h3>
              <p>Toll Brothers contracts are complex. We review every clause and negotiate better terms to protect your investment.</p>
            </div>

            <div className="benefit">
              <h3>🏗️ Design Center Guidance</h3>
              <p>Navigate the design center process strategically. We help you maximize value and avoid costly mistakes.</p>
            </div>

            <div className="benefit">
              <h3>✅ Quality Inspections</h3>
              <p>Pre-drywall and pre-closing inspections ensure your luxury home meets the highest quality standards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Toll Brothers Features */}
      <section className="builder-features">
        <div className="container">
          <h2>What Makes Toll Brothers Different</h2>
          
          <div className="features-grid">
            <div className="feature">
              <h3>🏛️ Architectural Excellence</h3>
              <p>Award-winning designs featuring elegant exteriors, open floor plans, and luxurious details. Every home is designed by experienced architects with attention to proportion, flow, and livability.</p>
            </div>

            <div className="feature">
              <h3>✨ Premium Materials</h3>
              <p>Granite or quartz countertops, hardwood flooring, premium cabinetry, and high-end fixtures are standard. Toll Brothers uses only the finest materials from trusted suppliers.</p>
            </div>

            <div className="feature">
              <h3>🎨 Design Flexibility</h3>
              <p>Extensive customization options through the Toll Brothers Design Studio. Choose from hundreds of options for flooring, countertops, cabinets, appliances, and finishes.</p>
            </div>

            <div className="feature">
              <h3>🏆 Quality Construction</h3>
              <p>Superior construction techniques and rigorous quality control at every phase. Toll Brothers' reputation for quality is unmatched in the luxury homebuilding industry.</p>
            </div>

            <div className="feature">
              <h3>🛡️ Comprehensive Warranties</h3>
              <p>10-year limited warranty on structural elements, plus comprehensive coverage on systems and components. Toll Brothers stands behind every home they build.</p>
            </div>

            <div className="feature">
              <h3>🌟 Customer Service</h3>
              <p>Dedicated customer service team throughout the entire process and after closing. Toll Brothers is committed to your satisfaction long after move-in.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section">
        <div className="container">
          <h2>Toll Brothers Frequently Asked Questions</h2>

          <div className="faq-grid">
            <div className="faq-item">
              <h3>What makes Toll Brothers a luxury builder?</h3>
              <p>Toll Brothers is the nation's leading builder of luxury homes, focusing exclusively on premium markets. Every home features superior architecture, high-end finishes, premium materials, and exceptional attention to detail. As a Fortune 500 company, they have the financial strength and experience that smaller builders lack.</p>
            </div>

            <div className="faq-item">
              <h3>What is the Toll Brothers Design Studio?</h3>
              <p>The Design Studio is where you customize your home's finishes and features. You'll work with design consultants to select flooring, countertops, cabinets, appliances, lighting, and more from hundreds of premium options. This is typically scheduled after contract signing.</p>
            </div>

            <div className="faq-item">
              <h3>Do I need a buyer's agent for Toll Brothers?</h3>
              <p>Absolutely! The on-site sales agent represents Toll Brothers, not you. Having your own agent provides expert representation at no cost to you (Toll Brothers pays the commission). We negotiate better terms, review contracts, monitor construction, and protect your interests.</p>
            </div>

            <div className="faq-item">
              <h3>What are the current Toll Brothers incentives?</h3>
              <p>Toll Brothers currently offers a 2/1 buydown program with a 3.625% first-year rate (5.68% APR) on select homes during their Fall Savings Event. Incentives vary by community. Contact us for specific offers and to help you maximize all available savings.</p>
            </div>

            <div className="faq-item">
              <h3>How long does the Toll Brothers build process take?</h3>
              <p>From contract to completion typically takes 4-8 months depending on the home and customization level. Quick move-in homes are available for immediate purchase and can close within 30-60 days.</p>
            </div>

            <div className="faq-item">
              <h3>What is included in a Toll Brothers home?</h3>
              <p>Every Toll Brothers home includes premium features as standard: granite or quartz countertops, hardwood or tile flooring, stainless steel appliances, premium cabinetry, covered patios, and more. The specific features vary by community and price point.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Experience Toll Brothers Luxury?</h2>
          <p>Schedule a private tour of Toll Brothers communities with Dr. Jan Duffy</p>
          
          <div className="cta-buttons">
            <a href="tel:+17027077273" className="cta-button primary">
              Call (702) 707-7273 - Toll Brothers Expert
            </a>
            <a href="/contact" className="cta-button secondary">
              Schedule Private Tour
            </a>
            <a href="/new-construction" className="cta-button secondary">
              Compare All Builders
            </a>
          </div>

          <p style={{ marginTop: '1rem', fontSize: '0.9rem', opacity: 0.8 }}>
            Free buyer representation | Expert negotiation | No cost to you | Access to all Toll Brothers communities
          </p>
        </div>
      </section>
    </main>
  );
}

