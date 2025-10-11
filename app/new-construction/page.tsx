import type { Metadata } from 'next';
import RealScoutAdvancedSearch from '../components/RealScoutAdvancedSearch';

export const metadata: Metadata = {
  title: 'New Construction Homes Aliante North Las Vegas NV | Builder Incentives',
  description: 'Browse 67+ new construction homes in Aliante and North Las Vegas from Lennar, D.R. Horton, Tri Pointe, Del Webb. Builder incentives up to $25K. Updated daily. Call (702) 707-7273.',
  keywords: 'new construction Aliante, new homes North Las Vegas, Lennar homes, DR Horton, builder incentives, new construction Las Vegas',
  alternates: { canonical: 'https://www.aliantehomesforsale.com/new-construction' },
};

export default function NewConstruction() {
  return (
    <main className="new-construction-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="hero-content">
          <h1>New Construction Homes in Aliante & North Las Vegas</h1>
          <p className="hero-subtitle">
            67+ new homes available | Builder incentives up to $25,000 | Expert guidance through the entire process
          </p>
        </div>
      </section>

      {/* Filter & Search Section */}
      <section className="search-filters">
        <div className="container">
          <h2>Find Your Perfect New Home</h2>
          <p>Filter by builder, community, price range, and home features</p>
          
          <RealScoutAdvancedSearch />
          
          <div className="filter-chips">
            <button type="button" className="filter-chip active">All Builders (67)</button>
            <button type="button" className="filter-chip">Lennar (45)</button>
            <button type="button" className="filter-chip">D.R. Horton (32)</button>
            <button type="button" className="filter-chip">Tri Pointe (18)</button>
            <button type="button" className="filter-chip">Del Webb 55+ (25)</button>
          </div>
        </div>
      </section>

      {/* Current Promotions Banner */}
      <section className="promotions-banner">
        <div className="container">
          <div className="promo-alert">
            <h3>🎉 Current Builder Incentives - October 2025</h3>
            <p>Up to $25,000 in savings! Limited time offers on select homes. Contact us for details.</p>
            <a href="/builders/incentives" className="cta-button">View All Incentives</a>
          </div>
        </div>
      </section>

      {/* Builder Showcase */}
      <section className="builders-showcase">
        <div className="container">
          <h2>Top New Home Builders in Aliante Area</h2>
          <p className="section-subtitle">Choose from the nation's top-rated homebuilders</p>

          <div className="builder-grid">
            {/* Lennar Homes */}
            <div className="builder-card featured">
              <div className="builder-header">
                <div className="builder-logo">
                  <div className="logo-placeholder">LENNAR</div>
                </div>
                <div className="builder-badge">#1 Volume Builder</div>
              </div>
              <div className="builder-stats">
                <div className="stat">
                  <strong>2,143</strong>
                  <span>Homes Sold in Area</span>
                </div>
                <div className="stat">
                  <strong>45+</strong>
                  <span>Available Now</span>
                </div>
                <div className="stat">
                  <strong>$350K-$750K</strong>
                  <span>Price Range</span>
                </div>
              </div>
              <div className="builder-content">
                <h3>Lennar - Everything's Included®</h3>
                <p>America's #1 homebuilder includes smart home technology, Wi-Fi certified, and premium upgrades standard in every home.</p>
                
                <h4>Popular Communities:</h4>
                <ul>
                  <li>Aliante Springs - Family homes $450K-$650K</li>
                  <li>Desert Willows - 3-5 BR homes $380K-$580K</li>
                  <li>The Prominence - Luxury estates $600K-$750K</li>
                </ul>

                <h4>Current Incentives:</h4>
                <ul>
                  <li>✅ $15,000 in closing cost assistance</li>
                  <li>✅ $10,000 design studio credits</li>
                  <li>✅ Rate buydown options available</li>
                  <li>✅ Smart home package included FREE</li>
                </ul>

                <div className="builder-actions">
                  <a href="/builders/lennar" className="cta-button primary">
                    View 45+ Lennar Homes
                  </a>
                  <a href="/contact" className="cta-button secondary">
                    Schedule Tour
                  </a>
                </div>
              </div>
            </div>

            {/* D.R. Horton */}
            <div className="builder-card">
              <div className="builder-header">
                <div className="builder-logo">
                  <div className="logo-placeholder">D.R. HORTON</div>
                </div>
                <div className="builder-badge">#2 Volume Builder</div>
              </div>
              <div className="builder-stats">
                <div className="stat">
                  <strong>1,910</strong>
                  <span>Homes Sold in Area</span>
                </div>
                <div className="stat">
                  <strong>32+</strong>
                  <span>Available Now</span>
                </div>
                <div className="stat">
                  <strong>$380K-$680K</strong>
                  <span>Price Range</span>
                </div>
              </div>
              <div className="builder-content">
                <h3>D.R. Horton - America's Builder</h3>
                <p>The nation's largest homebuilder since 1978, delivering quality and affordability in the Villages at Tule Springs master-planned community.</p>
                
                <h4>Popular Communities:</h4>
                <ul>
                  <li>Villages at Tule Springs - Master-planned $380K-$550K</li>
                  <li>Heartland Communities - Family-friendly $410K-$620K</li>
                  <li>Aliante Ranch - Move-in ready $395K-$680K</li>
                </ul>

                <h4>Current Incentives:</h4>
                <ul>
                  <li>✅ Up to $20,000 in savings</li>
                  <li>✅ Preferred lender incentives</li>
                  <li>✅ Quick move-in homes available</li>
                  <li>✅ Lot premiums waived on select homes</li>
                </ul>

                <div className="builder-actions">
                  <a href="/builders/dr-horton" className="cta-button primary">
                    View 32+ D.R. Horton Homes
                  </a>
                  <a href="/contact" className="cta-button secondary">
                    Get Info
                  </a>
                </div>
              </div>
            </div>

            {/* Tri Pointe Homes */}
            <div className="builder-card">
              <div className="builder-header">
                <div className="builder-logo">
                  <div className="logo-placeholder">TRI POINTE</div>
                </div>
                <div className="builder-badge">5-Star Premium</div>
              </div>
              <div className="builder-stats">
                <div className="stat">
                  <strong>Premium</strong>
                  <span>Quality Rating</span>
                </div>
                <div className="stat">
                  <strong>18+</strong>
                  <span>Available Now</span>
                </div>
                <div className="stat">
                  <strong>$450K-$850K</strong>
                  <span>Price Range</span>
                </div>
              </div>
              <div className="builder-content">
                <h3>Tri Pointe Homes - Luxury & Design</h3>
                <p>Premium homebuilder known for high-end finishes, superior craftsmanship, and attention to detail. Every home features designer touches and luxury amenities.</p>
                
                <h4>Popular Communities:</h4>
                <ul>
                  <li>Aliante Highlands - Premium lots $550K-$850K</li>
                  <li>Mountain View Estates - Luxury living $480K-$750K</li>
                </ul>

                <h4>Current Incentives:</h4>
                <ul>
                  <li>✅ $18,000 in design upgrades</li>
                  <li>✅ Premium lot selections available</li>
                  <li>✅ Gourmet kitchen package included</li>
                  <li>✅ Smart home integration</li>
                </ul>

                <div className="builder-actions">
                  <a href="/builders/tri-pointe" className="cta-button primary">
                    View 18+ Tri Pointe Homes
                  </a>
                  <a href="/contact" className="cta-button secondary">
                    Book Showing
                  </a>
                </div>
              </div>
            </div>

            {/* Del Webb */}
            <div className="builder-card">
              <div className="builder-header">
                <div className="builder-logo">
                  <div className="logo-placeholder">DEL WEBB</div>
                </div>
                <div className="builder-badge">Active Adult 55+</div>
              </div>
              <div className="builder-stats">
                <div className="stat">
                  <strong>55+</strong>
                  <span>Age Qualified</span>
                </div>
                <div className="stat">
                  <strong>25+</strong>
                  <span>Available Now</span>
                </div>
                <div className="stat">
                  <strong>$380K-$650K</strong>
                  <span>Price Range</span>
                </div>
              </div>
              <div className="builder-content">
                <h3>Del Webb - Active Adult Living</h3>
                <p>America's leading builder of active adult 55+ communities. Sun City Aliante features resort-style amenities, social activities, and maintenance-free living.</p>
                
                <h4>Popular Communities:</h4>
                <ul>
                  <li>Sun City Aliante - Resort living $380K-$650K</li>
                  <li>Active Adult Villas - Low-maintenance $420K-$580K</li>
                </ul>

                <h4>Current Incentives:</h4>
                <ul>
                  <li>✅ $12,000 in closing credits</li>
                  <li>✅ Golf membership discounts</li>
                  <li>✅ Quick move-in homes ready now</li>
                  <li>✅ Resort amenities included</li>
                </ul>

                <div className="builder-actions">
                  <a href="/builders/del-webb" className="cta-button primary">
                    View 25+ Del Webb Homes
                  </a>
                  <a href="/sun-city-aliante" className="cta-button secondary">
                    Sun City Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Build New Section */}
      <section className="why-new-construction">
        <div className="container">
          <h2>Why Choose New Construction in Aliante?</h2>
          
          <div className="benefits-grid">
            <div className="benefit-card">
              <h3>🏗️ Never Been Lived In</h3>
              <p>Brand new home with latest building codes, modern design, and energy-efficient construction. No repairs or updates needed for years.</p>
            </div>

            <div className="benefit-card">
              <h3>🎨 Customize Your Dream Home</h3>
              <p>Choose your lot, floor plan, colors, finishes, and upgrades. Create the perfect home for your lifestyle and taste.</p>
            </div>

            <div className="benefit-card">
              <h3>💰 Builder Incentives & Savings</h3>
              <p>Up to $25,000 in closing costs, upgrades, or rate buydowns. We help you maximize every available incentive.</p>
            </div>

            <div className="benefit-card">
              <h3>✅ Comprehensive Warranties</h3>
              <p>10-year structural warranty, builder warranties on all systems and components. Peace of mind for a decade.</p>
            </div>

            <div className="benefit-card">
              <h3>⚡ Energy Efficiency</h3>
              <p>Latest energy codes mean lower utility bills. Smart home technology, efficient HVAC, LED lighting, and solar-ready.</p>
            </div>

            <div className="benefit-card">
              <h3>🎯 Our Expert Guidance</h3>
              <p>We represent you in negotiations, monitor construction quality, and ensure you get the best deal possible.</p>
            </div>
          </div>
        </div>
      </section>

      {/* New Home Process */}
      <section className="new-home-process">
        <div className="container">
          <h2>Your New Home Journey - Step by Step</h2>
          <p className="section-subtitle">We guide you through every phase of the new construction process</p>

          <div className="process-timeline">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Builder & Community Selection</h3>
              <p>We help you choose the right builder and community based on your lifestyle, budget, and preferences. Compare builders, floor plans, and amenities.</p>
              <ul>
                <li>Review all builders and communities</li>
                <li>Compare quality and reputation</li>
                <li>Analyze price vs. value</li>
                <li>Visit model homes together</li>
              </ul>
            </div>

            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Strategic Lot Selection</h3>
              <p>Lot placement affects resale value, views, privacy, and daily living. We analyze every factor to help you choose the best lot.</p>
              <ul>
                <li>Corner vs. interior lots</li>
                <li>View premiums vs. standard</li>
                <li>Sun exposure and orientation</li>
                <li>Proximity to amenities/streets</li>
              </ul>
            </div>

            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Design Center & Upgrades</h3>
              <p>Maximize your investment with strategic upgrade choices. We help you decide which upgrades add value and which to skip.</p>
              <ul>
                <li>Flooring and finishes selection</li>
                <li>Kitchen and bath upgrades</li>
                <li>Structural vs. cosmetic changes</li>
                <li>Negotiate upgrade credits</li>
              </ul>
            </div>

            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Construction Monitoring</h3>
              <p>We monitor your build progress, coordinate inspections at critical phases, and ensure quality standards are met.</p>
              <ul>
                <li>Foundation and framing inspections</li>
                <li>Pre-drywall walkthrough</li>
                <li>MEP systems verification</li>
                <li>Quality control checkpoints</li>
              </ul>
            </div>

            <div className="process-step">
              <div className="step-number">5</div>
              <h3>Final Walkthrough & Closing</h3>
              <p>Detailed pre-closing inspection, punch list management, and smooth closing process. We ensure everything is perfect before you get the keys.</p>
              <ul>
                <li>Comprehensive final walkthrough</li>
                <li>Punch list creation and follow-up</li>
                <li>Warranty documentation review</li>
                <li>Closing coordination and support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Move-In Homes */}
      <section className="quick-move-in">
        <div className="container">
          <h2>Quick Move-In Homes - Ready Now!</h2>
          <p>Move in within 30-60 days! Completed or nearly-completed homes with immediate availability.</p>

          <div className="qmi-grid">
            <div className="qmi-card">
              <div className="qmi-badge">Ready in 30 Days</div>
              <h3>Lennar - Desert Willows</h3>
              <p><strong>4 BR | 3 BA | 2,450 sq ft</strong></p>
              <p className="qmi-price">$549,900</p>
              <p>Smart home package, gourmet kitchen, 3-car garage</p>
              <button type="button" className="cta-button">View Details</button>
            </div>

            <div className="qmi-card">
              <div className="qmi-badge">Ready in 45 Days</div>
              <h3>D.R. Horton - Tule Springs</h3>
              <p><strong>3 BR | 2.5 BA | 2,180 sq ft</strong></p>
              <p className="qmi-price">$479,000</p>
              <p>Open concept, large backyard, top schools</p>
              <button type="button" className="cta-button">View Details</button>
            </div>

            <div className="qmi-card">
              <div className="qmi-badge">Move-In Ready</div>
              <h3>Tri Pointe - Aliante Highlands</h3>
              <p><strong>4 BR | 3.5 BA | 3,100 sq ft</strong></p>
              <p className="qmi-price">$729,000</p>
              <p>Premium finishes, mountain views, golf course</p>
              <button type="button" className="cta-button">View Details</button>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <a href="/contact" className="cta-button primary">View All Quick Move-In Homes</a>
          </div>
        </div>
      </section>

      {/* Builder Comparison */}
      <section className="builder-comparison">
        <div className="container">
          <h2>Builder Comparison Guide</h2>
          <p>Compare features, pricing, and incentives across all major builders</p>

          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>Builder</th>
                  <th>Volume/Reputation</th>
                  <th>Price Range</th>
                  <th>Available Homes</th>
                  <th>Best For</th>
                  <th>Current Incentive</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Lennar</strong></td>
                  <td>★★★★★ #1 Volume</td>
                  <td>$350K-$750K</td>
                  <td>45+ homes</td>
                  <td>Smart homes, value</td>
                  <td>Up to $25K</td>
                </tr>
                <tr>
                  <td><strong>D.R. Horton</strong></td>
                  <td>★★★★★ #2 Volume</td>
                  <td>$380K-$680K</td>
                  <td>32+ homes</td>
                  <td>Affordability, variety</td>
                  <td>Up to $20K</td>
                </tr>
                <tr>
                  <td><strong>Tri Pointe</strong></td>
                  <td>★★★★★ Luxury</td>
                  <td>$450K-$850K</td>
                  <td>18+ homes</td>
                  <td>Premium finishes</td>
                  <td>Up to $18K</td>
                </tr>
                <tr>
                  <td><strong>Del Webb</strong></td>
                  <td>★★★★★ 55+ Leader</td>
                  <td>$380K-$650K</td>
                  <td>25+ homes</td>
                  <td>Active adult lifestyle</td>
                  <td>Up to $12K</td>
                </tr>
                <tr>
                  <td><strong>Richmond American</strong></td>
                  <td>★★★★☆ Quality</td>
                  <td>$420K-$680K</td>
                  <td>12+ homes</td>
                  <td>Customization options</td>
                  <td>Up to $15K</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <a href="/builders" className="cta-button">Complete Builder Comparison Guide</a>
          </div>
        </div>
      </section>

      {/* Expert Guidance Section */}
      <section className="expert-guidance">
        <div className="container">
          <h2>Why Work with Dr. Jan Duffy for New Construction?</h2>
          
          <div className="expertise-grid">
            <div className="expertise-item">
              <h3>🤝 Direct Builder Relationships</h3>
              <p>Personal connections with sales managers at every major builder. We get early access to new releases, priority lot selections, and better incentive packages for our clients.</p>
            </div>

            <div className="expertise-item">
              <h3>💡 Incentive Maximization</h3>
              <p>Average client savings of $15,000+ through incentive stacking, upgrade negotiations, and closing cost credits. We know every available program and how to combine them.</p>
            </div>

            <div className="expertise-item">
              <h3>🔍 Quality Control & Inspections</h3>
              <p>Pre-drywall and pre-close inspections at no additional cost. We catch issues before they become problems and ensure your builder meets quality standards.</p>
            </div>

            <div className="expertise-item">
              <h3>📋 Contract Expertise</h3>
              <p>Builder contracts heavily favor the builder. We review every clause, negotiate better terms, and protect your interests throughout the process.</p>
            </div>

            <div className="expertise-item">
              <h3>⏱️ Timeline Management</h3>
              <p>Construction delays cost money. We monitor your build schedule, coordinate with superintendents, and keep your project on track.</p>
            </div>

            <div className="expertise-item">
              <h3>🏆 Proven Results</h3>
              <p>Over 200 new construction closings in Aliante area. Our clients consistently get better lots, more upgrades, and superior value compared to buyers without representation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2>New Construction FAQs</h2>

          <div className="faq-list">
            <div className="faq-item">
              <h3>Do I need a buyer's agent for new construction?</h3>
              <p>Absolutely! The builder's sales agent represents the builder, not you. Having your own agent costs you nothing (builder pays commission) and can save you thousands through better negotiations and protecting your interests.</p>
            </div>

            <div className="faq-item">
              <h3>How long does the new construction process take?</h3>
              <p>From contract to move-in typically takes 4-8 months depending on the home and builder. Quick move-in homes can be ready in 30-60 days.</p>
            </div>

            <div className="faq-item">
              <h3>What incentives are currently available?</h3>
              <p>Builders currently offer $10,000-$25,000 in incentives including closing costs, upgrades, rate buydowns, and design credits. Contact us for specific current offers.</p>
            </div>

            <div className="faq-item">
              <h3>Can I negotiate with builders?</h3>
              <p>Yes! While builders have set base prices, you can negotiate upgrades, lot premiums, incentives, closing dates, and more. Having an experienced agent is crucial for successful negotiations.</p>
            </div>

            <div className="faq-item">
              <h3>Should I get a home inspection on new construction?</h3>
              <p>Absolutely. We recommend pre-drywall and pre-closing inspections. Even new homes can have issues, and catching them early is much easier than after closing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Build Your Dream Home in Aliante?</h2>
          <p>Get expert guidance from Dr. Jan Duffy - Aliante's new construction specialist</p>
          <div className="cta-buttons">
            <a href="tel:+17027077273" className="cta-button primary">
              Call (702) 707-7273 - Free Consultation
            </a>
            <a href="/contact" className="cta-button secondary">
              Schedule Builder Tours
            </a>
            <a href="/builders/incentives" className="cta-button secondary">
              View Current Incentives
            </a>
          </div>
          <p style={{ marginTop: '1rem', fontSize: '0.9rem', opacity: 0.8 }}>
            Free buyer representation | No cost to you | Builder pays commission | Expert negotiation
          </p>
        </div>
      </section>
    </main>
  );
}
