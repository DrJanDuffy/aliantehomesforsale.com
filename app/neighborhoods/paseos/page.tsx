import type { Metadata } from 'next';
import StructuredData from '../../components/StructuredData';

export const metadata: Metadata = {
  title: 'The Paseos Aliante | Affordable Living North Las Vegas',
  description: 'Discover The Paseos, a value-focused community offering quality homes at accessible prices. Perfect for first-time buyers and growing families. Starting from $300K.',
  keywords: 'The Paseos Aliante, affordable homes North Las Vegas, first-time buyers, value homes, family community',
  openGraph: {
    title: 'The Paseos - Affordable Living in Aliante',
    description: 'Value-focused community with quality homes and family amenities',
    type: 'website',
    url: 'https://aliantehomesforsale.com/neighborhoods/paseos',
  },
};

export default function ThePaseos() {
  return (
    <>
      <StructuredData type="NeighborhoodDetail" />
      
      {/* RealScout Widgets */}
      <script src="https://em.realscout.com/widgets/realscout-web-components.umd.js" type="module"></script>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            realscout-office-listings {
              --rs-listing-divider-color: rgb(101, 141, 172);
              width: 100%;
            }
          `,
        }}
      />
      
      <main className="neighborhood-detail-page paseos">
        {/* Hero Section */}
        <section className="page-hero">
          <div className="hero-content">
            <h1>The Paseos</h1>
            <p className="hero-subtitle">
              Quality Living at Accessible Prices
            </p>
            <div className="hero-badges">
              <span className="badge">💰 Affordable Prices</span>
              <span className="badge">🚶‍♂️ Walkable Design</span>
              <span className="badge">🅿️ Ample Parking</span>
              <span className="badge">🌿 Green Spaces</span>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="quick-stats">
          <div className="container">
            <div className="stats-grid">
              <div className="stat-item">
                <h3>Price Range</h3>
                <p className="stat-value">$300K - $500K</p>
              </div>
              <div className="stat-item">
                <h3>Home Types</h3>
                <p className="stat-value">Single Family, Townhomes</p>
              </div>
              <div className="stat-item">
                <h3>School Rating</h3>
                <p className="stat-value">7/10</p>
              </div>
              <div className="stat-item">
                <h3>Community Type</h3>
                <p className="stat-value">Open</p>
              </div>
            </div>
          </div>
        </section>

        {/* Neighborhood Overview */}
        <section className="neighborhood-overview">
          <div className="container">
            <div className="overview-content">
              <div className="overview-text">
                <h2>Welcome to The Paseos</h2>
                <p>
                  The Paseos offers an excellent opportunity for first-time buyers and growing families 
                  to own quality homes in the desirable Aliante area. This well-planned community 
                  features modern designs, family-friendly amenities, and an accessible price point.
                </p>
                <p>
                  With its walkable design, green spaces, and convenient location, The Paseos provides 
                  everything families need for comfortable living without the premium price tag. The 
                  community is known for its friendly atmosphere and well-maintained common areas.
                </p>
              </div>
              <div className="overview-image">
                <div className="image-placeholder">🏘️</div>
              </div>
            </div>
          </div>
        </section>

        {/* Home Features */}
        <section className="home-features">
          <div className="container">
            <h2>Quality Home Features</h2>
            <div className="features-grid">
              <div className="feature-category">
                <h3>🏠 Exterior Features</h3>
                <ul>
                  <li>Modern architectural designs</li>
                  <li>Low-maintenance exteriors</li>
                  <li>Professional landscaping</li>
                  <li>2-car garages</li>
                  <li>Private patios and balconies</li>
                </ul>
              </div>
              
              <div className="feature-category">
                <h3>🏡 Interior Features</h3>
                <ul>
                  <li>Efficient floor plans</li>
                  <li>Updated kitchens with appliances</li>
                  <li>Spacious bedrooms</li>
                  <li>Modern bathrooms</li>
                  <li>Ample storage space</li>
                </ul>
              </div>
              
              <div className="feature-category">
                <h3>🎯 Value Upgrades</h3>
                <ul>
                  <li>Fresh paint and flooring</li>
                  <li>Energy-efficient features</li>
                  <li>Modern fixtures</li>
                  <li>Smart home ready</li>
                  <li>Low-maintenance materials</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Community Amenities */}
        <section className="neighborhood-amenities">
          <div className="container">
            <h2>Community Amenities</h2>
            <div className="amenities-grid">
              <div className="amenity-item">
                <div className="amenity-icon">🌿</div>
                <h3>Green Spaces</h3>
                <p>Beautifully landscaped common areas and walking paths</p>
              </div>
              
              <div className="amenity-item">
                <div className="amenity-icon">🚶‍♂️</div>
                <h3>Walkable Design</h3>
                <p>Pedestrian-friendly streets and sidewalks throughout</p>
              </div>
              
              <div className="amenity-item">
                <div className="amenity-icon">🅿️</div>
                <h3>Ample Parking</h3>
                <p>Generous parking spaces for residents and guests</p>
              </div>
              
              <div className="amenity-item">
                <div className="amenity-icon">🏫</div>
                <h3>Nearby Schools</h3>
                <p>Easy access to quality educational institutions</p>
              </div>
              
              <div className="amenity-item">
                <div className="amenity-icon">🛒</div>
                <h3>Shopping Access</h3>
                <p>Convenient proximity to retail and dining options</p>
              </div>
              
              <div className="amenity-item">
                <div className="amenity-icon">🚗</div>
                <h3>Easy Transportation</h3>
                <p>Quick access to major roads and public transit</p>
              </div>
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="value-proposition">
          <div className="container">
            <h2>Why Choose The Paseos?</h2>
            <div className="value-content">
              <div className="value-text">
                <h3>Smart Investment Choice</h3>
                <p>
                  The Paseos represents an excellent investment opportunity for first-time buyers and 
                  those looking to enter the Aliante market. With homes starting at $300K, you can 
                  own quality real estate in a desirable location without stretching your budget.
                </p>
                
                <div className="value-points">
                  <div className="value-point">
                    <strong>💰 Affordability:</strong> Competitive pricing for quality homes
                  </div>
                  <div className="value-point">
                    <strong>📈 Appreciation:</strong> Strong potential for value growth
                  </div>
                  <div className="value-point">
                    <strong>🏠 Quality:</strong> Well-built homes with modern features
                  </div>
                  <div className="value-point">
                    <strong>📍 Location:</strong> Desirable Aliante area access
                  </div>
                </div>
              </div>
              
              <div className="value-image">
                <div className="image-placeholder">📊</div>
                <p>Market data coming soon</p>
              </div>
            </div>
          </div>
        </section>

        {/* Schools & Education */}
        <section className="schools-education">
          <div className="container">
            <h2>Quality Education</h2>
            <p>The Paseos provides access to good schools in the area</p>
            
            <div className="schools-grid">
              <div className="school-card">
                <h3>Elementary Schools</h3>
                <ul>
                  <li><strong>Paseo Verde Elementary</strong> - 9/10 Rating</li>
                  <li><strong>Aliante Elementary</strong> - 9/10 Rating</li>
                  <li><strong>Desert Willow Elementary</strong> - 8/10 Rating</li>
                </ul>
              </div>
              
              <div className="school-card">
                <h3>Middle Schools</h3>
                <ul>
                  <li><strong>Aliante Middle School</strong> - 8/10 Rating</li>
                  <li><strong>Desert Willow Middle</strong> - 9/10 Rating</li>
                </ul>
              </div>
              
              <div className="school-card">
                <h3>High Schools</h3>
                <ul>
                  <li><strong>Aliante High School</strong> - 9/10 Rating</li>
                  <li><strong>Desert Willow High</strong> - 8/10 Rating</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Location & Access */}
        <section className="location-access">
          <div className="container">
            <h2>Convenient Location</h2>
            <div className="location-content">
              <div className="location-info">
                <h3>Accessible Living</h3>
                <p>
                  The Paseos is strategically located to provide easy access to all essential services 
                  while maintaining an affordable price point for quality living.
                </p>
                
                <div className="access-points">
                  <div className="access-item">
                    <strong>🛣️ Freeway Access:</strong> 5 minutes to I-215
                  </div>
                  <div className="access-item">
                    <strong>🛍️ Shopping:</strong> 3 minutes to retail centers
                  </div>
                  <div className="access-item">
                    <strong>🏥 Healthcare:</strong> 8 minutes to medical facilities
                  </div>
                  <div className="access-item">
                    <strong>✈️ Airport:</strong> 18 minutes to Harry Reid International
                  </div>
                </div>
              </div>
              
              <div className="location-map">
                <div className="map-placeholder">🗺️</div>
                <p>Interactive map coming soon</p>
              </div>
            </div>
          </div>
        </section>

        {/* Available Homes */}
        <section className="available-homes">
          <div className="container">
            <h2>Affordable Homes Available</h2>
            <p>Find your perfect starter home or family residence</p>
            
            <div className="homes-placeholder">
              <h3>🏠 Affordable Homes Coming Soon</h3>
              <p>Live MLS data integration coming soon</p>
              <p>Contact us for current availability in The Paseos</p>
              <div className="placeholder-features">
                <span>Value Pricing</span>
                <span>Quality Construction</span>
                <span>Family Friendly</span>
                <span>Great Location</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="container">
            <h2>Ready to Find Your Affordable Home?</h2>
            <p>Schedule a tour of The Paseos today</p>
            <div className="cta-buttons">
              <a href="/contact" className="cta-button primary">
                Schedule Value Tour
              </a>
              <a href="/homes-for-sale" className="cta-button secondary">
                View All Available Homes
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
