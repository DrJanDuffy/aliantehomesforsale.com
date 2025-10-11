import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'D.R. Horton Homes Heartland Tule Springs North Las Vegas | #1 Premiere Agent',
  description: 'Dr. Jan Duffy - D.R. Horton\'s #1 Premiere Buyers Agent in North Las Vegas. Award-winning expert for Heartland at Tule Springs. Median $639,900. 8 days on market. Call (702) 707-7273.',
  keywords: 'DR Horton North Las Vegas, Heartland Tule Springs, DR Horton premiere agent, new construction Aliante, Villages at Tule Springs',
  alternates: { canonical: 'https://www.aliantehomesforsale.com/builders/dr-horton' },
};

export default function DRHorton() {
  return (
    <main className="builder-detail-page">
      {/* Premiere Agent Banner */}
      <section className="premiere-agent-banner">
        <div className="container">
          <div className="premiere-badge">
            <h2>🏆 Dr. Jan Duffy - D.R. Horton's #1 Premiere Buyers Agent</h2>
            <p>Award-Winning Expert | North Las Vegas's Top D.R. Horton Specialist</p>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="builder-hero">
        <div className="container">
          <div className="builder-header">
            <div className="builder-logo-large">
              <h1>D.R. Horton Homes</h1>
              <p className="tagline">America's Builder - Since 1978</p>
            </div>
            <div className="builder-badges">
              <span className="badge">#1 Homebuilder</span>
              <span className="badge">Primary Aliante Builder</span>
              <span className="badge">Heartland Master-Planned</span>
            </div>
          </div>

          <div className="hero-stats">
            <div className="stat highlighted">
              <h3>$639,900</h3>
              <p>New Construction Median Price</p>
            </div>
            <div className="stat highlighted">
              <h3>8 Days</h3>
              <p>Average Days on Market</p>
            </div>
            <div className="stat">
              <h3>32+</h3>
              <p>Available Homes</p>
            </div>
            <div className="stat">
              <h3>$380K-$680K</h3>
              <p>Price Range</p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Market Insights */}
      <section className="market-insights-section">
        <div className="container">
          <div className="insights-banner">
            <h2>🔥 HOT MARKET ALERT - D.R. Horton Homes Selling Fast!</h2>
            <div className="insights-grid">
              <div className="insight">
                <h3>Median Price: $639,900</h3>
                <p>New construction homes in Heartland at Tule Springs and surrounding areas are priced competitively with exceptional value.</p>
              </div>
              <div className="insight">
                <h3>Average 8 Days on Market</h3>
                <p>D.R. Horton homes are selling FAST! The best lots and floor plans go to buyers who act quickly with expert representation.</p>
              </div>
              <div className="insight">
                <h3>Prime Location</h3>
                <p>Heartland at Tule Springs is directly adjacent to Aliante with quick access to Aliante Resort, Club Aliante Golf Course, and the 215 Beltway.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Dr. Duffy is #1 */}
      <section className="premiere-agent-section">
        <div className="container">
          <h2>Why Dr. Jan Duffy is D.R. Horton's #1 Premiere Buyers Agent in North Las Vegas</h2>
          
          <div className="premiere-content">
            <div className="premiere-story">
              <p className="lead">When you're investing $400K-$680K in a new D.R. Horton home, you need the BEST representation. Dr. Jan Duffy is recognized as D.R. Horton's #1 premiere buyers agent in North Las Vegas - and here's why that matters for you:</p>

              <div className="achievement-grid">
                <div className="achievement">
                  <h3>🏆 Award-Winning Agent</h3>
                  <p>Recognized by the Las Vegas real estate community for exceptional service and results. Multiple industry awards including Top Producer and Five Star Professional recognition.</p>
                </div>

                <div className="achievement">
                  <h3>🤝 Direct D.R. Horton Relationship</h3>
                  <p>Personal relationships with D.R. Horton sales managers, superintendents, and regional leadership. This means priority access to new releases, best lot selections, and maximum incentives for my clients.</p>
                </div>

                <div className="achievement">
                  <h3>📊 Market Expertise</h3>
                  <p>Deep knowledge of every D.R. Horton community, floor plan, and pricing strategy in North Las Vegas. I know which homes offer the best value and which lots will appreciate most.</p>
                </div>

                <div className="achievement">
                  <h3>💰 Average $18K+ in Client Savings</h3>
                  <p>Through incentive negotiation, upgrade credits, lot premium waivers, and strategic timing, my D.R. Horton buyers save an average of $18,000+ compared to buyers without representation.</p>
                </div>

                <div className="achievement">
                  <h3>🏗️ Construction Monitoring</h3>
                  <p>On-site inspections at critical construction phases. I personally visit your home during framing, pre-drywall, and pre-close to ensure quality standards are met.</p>
                </div>

                <div className="achievement">
                  <h3>⚡ Fast Response = Best Selection</h3>
                  <p>With homes selling in 8 days, you need an agent who moves FAST. I provide same-day tours, immediate feedback, and rapid contract negotiation to secure the best homes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Heartland at Tule Springs - Featured Community */}
      <section className="featured-community">
        <div className="container">
          <div className="community-spotlight">
            <h2>⭐ Featured: Heartland at Tule Springs Master-Planned Community</h2>
            <p className="subtitle">D.R. Horton's PRIMARY Active Community Adjacent to Aliante</p>
            
            <div className="community-hero">
              <div className="community-details">
                <h3>The Best of Both Worlds</h3>
                <p>Heartland at Tule Springs is a master-planned community directly adjacent to Aliante, offering brand-new D.R. Horton homes with:</p>
                
                <ul className="feature-list">
                  <li>✅ <strong>Prime Location:</strong> Directly adjacent to Aliante with seamless access to all amenities</li>
                  <li>✅ <strong>Quick Access:</strong> Minutes to Aliante Resort, Casino, and Club Aliante Golf Course</li>
                  <li>✅ <strong>215 Beltway Access:</strong> Easy commute to Summerlin, Downtown Las Vegas, and Henderson</li>
                  <li>✅ <strong>Master-Planned Living:</strong> Parks, trails, playgrounds, and community amenities</li>
                  <li>✅ <strong>Top Schools:</strong> Highly-rated Clark County School District schools</li>
                  <li>✅ <strong>New Infrastructure:</strong> Brand new roads, utilities, and community facilities</li>
                </ul>

                <div className="community-stats">
                  <div className="stat">
                    <strong>32+ Homes</strong>
                    <span>Available Now</span>
                  </div>
                  <div className="stat">
                    <strong>$380K-$680K</strong>
                    <span>Price Range</span>
                  </div>
                  <div className="stat">
                    <strong>8 Days</strong>
                    <span>Average DOM</span>
                  </div>
                  <div className="stat">
                    <strong>Multiple Plans</strong>
                    <span>3-5 Bedrooms</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About D.R. Horton */}
      <section className="about-builder">
        <div className="container">
          <h2>About D.R. Horton - America's #1 Homebuilder</h2>
          
          <div className="about-content">
            <div className="about-text">
              <p>D.R. Horton has been America's largest homebuilder by volume since 2002, delivering quality and affordability to homebuyers across the nation. With over 1 million homes built since 1978, D.R. Horton has the experience, financial strength, and proven track record that buyers can trust.</p>

              <p>In North Las Vegas, D.R. Horton is the PRIMARY active builder, currently developing the Heartland at Tule Springs master-planned community adjacent to Aliante. This strategic location offers new homebuyers access to all of Aliante's amenities while enjoying brand-new construction in a master-planned setting.</p>

              <h3>Why Choose D.R. Horton?</h3>
              <ul>
                <li>✅ <strong>America's #1 Builder</strong> - Largest homebuilder by volume for 20+ years</li>
                <li>✅ <strong>Proven Track Record</strong> - Over 1 million homes delivered since 1978</li>
                <li>✅ <strong>Quality & Value</strong> - Best price-to-value ratio in the market</li>
                <li>✅ <strong>Financial Strength</strong> - Fortune 500 company with solid backing</li>
                <li>✅ <strong>10-Year Warranty</strong> - Comprehensive structural warranty protection</li>
                <li>✅ <strong>Fast Selling</strong> - Average 8 days on market shows high buyer demand</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Floor Plans & Communities */}
      <section className="communities-section">
        <div className="container">
          <h2>D.R. Horton Floor Plans & Pricing in North Las Vegas</h2>
          
          <div className="plans-grid">
            <div className="plan-card">
              <h3>Entry-Level Collection</h3>
              <div className="plan-stats">
                <p><strong>1,650 - 2,100 sq ft</strong></p>
                <p><strong>3-4 bedrooms | 2-2.5 bathrooms</strong></p>
                <p className="price">$380,000 - $480,000</p>
              </div>
              <p>Perfect for first-time buyers and growing families. Open-concept designs with modern finishes and efficient layouts.</p>
              <ul>
                <li>2-car garage standard</li>
                <li>Covered patios</li>
                <li>Stainless steel appliances</li>
                <li>Granite countertops</li>
              </ul>
            </div>

            <div className="plan-card featured">
              <div className="popular-badge">Most Popular</div>
              <h3>Mid-Range Collection</h3>
              <div className="plan-stats">
                <p><strong>2,200 - 2,800 sq ft</strong></p>
                <p><strong>4-5 bedrooms | 2.5-3 bathrooms</strong></p>
                <p className="price">$490,000 - $590,000</p>
              </div>
              <p>Ideal for families needing more space. Spacious great rooms, chef's kitchens, and dedicated home offices.</p>
              <ul>
                <li>2-3 car garages</li>
                <li>Optional loft or bonus rooms</li>
                <li>Walk-in closets in all bedrooms</li>
                <li>Upgraded kitchen packages available</li>
              </ul>
            </div>

            <div className="plan-card">
              <h3>Premium Collection</h3>
              <div className="plan-stats">
                <p><strong>2,900 - 3,500 sq ft</strong></p>
                <p><strong>5 bedrooms | 3-3.5 bathrooms</strong></p>
                <p className="price">$600,000 - $680,000</p>
              </div>
              <p>Luxury features and spacious living. Premium lots, upgraded finishes, and high-end amenities throughout.</p>
              <ul>
                <li>3-car garages with storage</li>
                <li>Gourmet chef's kitchens</li>
                <li>Luxury master suites with spa baths</li>
                <li>Outdoor living spaces</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Current Incentives */}
      <section className="incentives-section">
        <div className="container">
          <h2>Current D.R. Horton Incentives - October 2025</h2>
          
          <div className="incentives-grid">
            <div className="incentive-card">
              <h3>💰 Up to $20,000 in Closing Cost Assistance</h3>
              <p>Use towards closing costs, rate buydown, or upgrades. Varies by community and home. Ask Dr. Duffy about current offers.</p>
            </div>

            <div className="incentive-card">
              <h3>🎨 Design Studio Credits</h3>
              <p>Additional credits for flooring, countertops, cabinets, and other upgrades when using D.R. Horton's preferred lender.</p>
            </div>

            <div className="incentive-card">
              <h3>📉 Rate Buydown Options</h3>
              <p>Temporary or permanent rate buydowns available with preferred lender. Lower your monthly payment significantly.</p>
            </div>

            <div className="incentive-card">
              <h3>🏡 Lot Premium Waivers</h3>
              <p>Select homes have lot premiums waived. Dr. Duffy knows which lots offer the best value and can negotiate premium waivers.</p>
            </div>

            <div className="incentive-card">
              <h3>⚡ Quick Move-In Specials</h3>
              <p>Ready-now homes often have additional incentives. Move in within 30-60 days with special pricing.</p>
            </div>

            <div className="incentive-card">
              <h3>🤝 Buyer Agent Bonus</h3>
              <p>Additional incentives available when working with Dr. Duffy. Her premiere status means access to exclusive offers.</p>
            </div>
          </div>

          <div className="incentive-cta">
            <p><strong>Dr. Duffy's clients save an average of $18,000+ through strategic incentive maximization!</strong></p>
            <a href="tel:+17027077273" className="cta-button primary">Call (702) 707-7273 - Get Current Incentives</a>
          </div>
        </div>
      </section>

      {/* The Dr. Duffy Advantage */}
      <section className="duffy-advantage">
        <div className="container">
          <h2>The Dr. Duffy Advantage - What You Get Working with the #1 D.R. Horton Agent</h2>
          
          <div className="advantages-grid">
            <div className="advantage">
              <h3>🎯 Best Lot Selection Strategy</h3>
              <p>Not all lots are created equal. I analyze every factor - orientation, views, privacy, future development, resale value - to help you choose the absolute best lot for your lifestyle and investment.</p>
              <ul>
                <li>Corner vs. interior lot analysis</li>
                <li>Sun exposure and shade patterns</li>
                <li>Privacy and noise considerations</li>
                <li>Future home placement around you</li>
                <li>Premium lot value assessment</li>
              </ul>
            </div>

            <div className="advantage">
              <h3>💎 Strategic Upgrade Decisions</h3>
              <p>The D.R. Horton design studio can be overwhelming. I guide you through every decision, identifying which upgrades add value and which you should skip.</p>
              <ul>
                <li>Structural vs. cosmetic upgrades</li>
                <li>ROI analysis on each upgrade</li>
                <li>Negotiating upgrade credits</li>
                <li>Third-party upgrade alternatives</li>
                <li>Package deal negotiations</li>
              </ul>
            </div>

            <div className="advantage">
              <h3>📋 Contract Protection</h3>
              <p>D.R. Horton's purchase agreement heavily favors the builder. I review every clause, negotiate better terms, and protect your interests throughout the transaction.</p>
              <ul>
                <li>Contingency clause negotiations</li>
                <li>Timeline protection</li>
                <li>Change order management</li>
                <li>Dispute resolution advocacy</li>
                <li>Warranty claim assistance</li>
              </ul>
            </div>

            <div className="advantage">
              <h3>🔍 Construction Quality Monitoring</h3>
              <p>I personally visit your home at critical construction phases to ensure quality standards are met. Catching issues early saves thousands in repairs.</p>
              <ul>
                <li>Foundation and framing inspection</li>
                <li>Pre-drywall walkthrough</li>
                <li>Mechanical systems check</li>
                <li>Pre-close final inspection</li>
                <li>Punch list management</li>
              </ul>
            </div>

            <div className="advantage">
              <h3>⏱️ Timeline Management</h3>
              <p>Construction delays cost money. I maintain regular contact with superintendents, monitor progress, and keep your build on schedule.</p>
              <ul>
                <li>Weekly construction updates</li>
                <li>Proactive delay prevention</li>
                <li>Superintendent coordination</li>
                <li>Material delivery tracking</li>
                <li>Closing date protection</li>
              </ul>
            </div>

            <div className="advantage">
              <h3>🚀 Fast Action on Hot Homes</h3>
              <p>With homes selling in 8 days, speed matters. I provide same-day tours, immediate feedback, and rapid contract execution to secure the best properties.</p>
              <ul>
                <li>Same-day showing appointments</li>
                <li>Pre-approved buyer positioning</li>
                <li>Quick contract turnaround</li>
                <li>Priority lot notifications</li>
                <li>New release early access</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <h2>What D.R. Horton Buyers Say About Dr. Jan Duffy</h2>
          
          <div className="testimonials-grid">
            <div className="testimonial">
              <p className="quote">"Dr. Duffy saved us over $22,000 through incentive negotiations and lot premium waivers. Her knowledge of D.R. Horton's process was invaluable. Best decision we made!"</p>
              <p className="author">- Martinez Family, Heartland at Tule Springs</p>
            </div>

            <div className="testimonial">
              <p className="quote">"As first-time buyers, we were overwhelmed. Dr. Duffy guided us through every step, from lot selection to design center to closing. She's THE expert for D.R. Horton homes."</p>
              <p className="author">- Jennifer & David L., New Construction Buyers</p>
            </div>

            <div className="testimonial">
              <p className="quote">"We tried to buy directly from the builder but couldn't get the same incentives Dr. Duffy negotiated for us. Plus, her construction monitoring caught issues that saved us thousands."</p>
              <p className="author">- Thompson Family, Villages at Tule Springs</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section">
        <div className="container">
          <h2>D.R. Horton Frequently Asked Questions</h2>

          <div className="faq-grid">
            <div className="faq-item">
              <h3>Why do I need a buyer's agent if I'm buying from D.R. Horton?</h3>
              <p>The on-site sales agent works for D.R. Horton, not you. They're paid to maximize the builder's profit. Dr. Duffy represents YOUR interests - negotiating better pricing, protecting you in contracts, monitoring construction quality, and ensuring you get maximum incentives. And it costs you NOTHING because D.R. Horton pays her commission.</p>
            </div>

            <div className="faq-item">
              <h3>How much can Dr. Duffy save me on a D.R. Horton home?</h3>
              <p>Her clients save an average of $18,000+ through incentive maximization, lot premium negotiations, upgrade credits, and strategic timing. Plus, her construction monitoring prevents costly repairs down the road. The best part? Her services are FREE to buyers.</p>
            </div>

            <div className="faq-item">
              <h3>What makes Dr. Duffy the #1 D.R. Horton agent?</h3>
              <p>Years of experience, direct relationships with D.R. Horton management, proven negotiation results, construction expertise, and award-winning service. She's completed more D.R. Horton transactions than any other agent in North Las Vegas and maintains premiere status with the builder.</p>
            </div>

            <div className="faq-item">
              <h3>How fast are D.R. Horton homes selling in Heartland at Tule Springs?</h3>
              <p>Currently averaging just 8 days on market! The best lots and floor plans go FAST. That's why you need Dr. Duffy - she gets early notification of new releases and can secure the best homes before they hit the public market.</p>
            </div>

            <div className="faq-item">
              <h3>What's the current median price for new construction?</h3>
              <p>$639,900 for new construction homes in the Heartland at Tule Springs and Aliante area. D.R. Horton offers the best value with homes ranging from $380K-$680K depending on size, lot, and upgrades.</p>
            </div>

            <div className="faq-item">
              <h3>What incentives is D.R. Horton currently offering?</h3>
              <p>Up to $20,000 in closing cost assistance, design studio credits, rate buydown options, and lot premium waivers on select homes. Dr. Duffy knows exactly which homes have the best incentive packages and how to stack multiple offers for maximum savings.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Buy Your D.R. Horton Home in North Las Vegas?</h2>
          <p className="cta-subtitle">Work with D.R. Horton's #1 Premiere Buyers Agent - Award-Winning Dr. Jan Duffy</p>
          
          <div className="cta-stats">
            <div className="stat">
              <strong>$18,000+</strong>
              <span>Average Client Savings</span>
            </div>
            <div className="stat">
              <strong>8 Days</strong>
              <span>Homes Selling Fast!</span>
            </div>
            <div className="stat">
              <strong>#1 Agent</strong>
              <span>D.R. Horton Premiere Status</span>
            </div>
            <div className="stat">
              <strong>Award-Winning</strong>
              <span>Recognized Excellence</span>
            </div>
          </div>

          <div className="cta-buttons">
            <a href="tel:+17027077273" className="cta-button primary large">
              📞 Call (702) 707-7273 - D.R. Horton's #1 Agent
            </a>
            <a href="/contact" className="cta-button secondary">
              Schedule Heartland Tour
            </a>
            <a href="/new-construction" className="cta-button secondary">
              View All Available Homes
            </a>
          </div>

          <p style={{ marginTop: '1.5rem', fontSize: '1rem', fontWeight: 'bold' }}>
            ⚡ HOMES SELLING IN 8 DAYS - DON'T WAIT! Get the best lot selection with expert representation at NO COST to you.
          </p>
        </div>
      </section>
    </main>
  );
}
