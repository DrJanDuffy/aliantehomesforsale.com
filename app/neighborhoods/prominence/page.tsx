import type { Metadata } from 'next';
import StructuredData from '../../components/StructuredData';

export const metadata: Metadata = {
  title: 'The Prominence Aliante | Luxury Gated Community North Las Vegas',
  description: 'Discover The Prominence, Aliante\'s premier luxury gated community. Luxury homes, golf course views, premium amenities, and 24/7 security. Starting from $600K.',
  keywords: 'The Prominence Aliante, luxury homes North Las Vegas, gated community Aliante, golf course homes, premium amenities',
  openGraph: {
    title: 'The Prominence - Luxury Gated Community in Aliante',
    description: 'Upscale gated community with luxury homes and premium amenities',
    type: 'website',
    url: 'https://aliantehomesforsale.com/neighborhoods/prominence',
  },
};

export default function TheProminence() {
  return (
    <>
      <StructuredData type="NeighborhoodDetail" />
      

      
      <main className="neighborhood-detail-page">
        {/* Hero Section */}
        <section className="page-hero">
          <div className="hero-content">
            <h1>The Prominence</h1>
            <p className="hero-subtitle">
              Aliante's Premier Luxury Gated Community
            </p>
            <div className="hero-badges">
              <span className="badge">🏰 Luxury Living</span>
              <span className="badge">🔒 Gated Security</span>
              <span className="badge">🏌️ Golf Course Access</span>
              <span className="badge">⭐ Featured Community</span>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="quick-stats">
          <div className="container">
            <div className="stats-grid">
              <div className="stat-item">
                <h3>Price Range</h3>
                <p className="stat-value">$600K - $1.2M+</p>
              </div>
              <div className="stat-item">
                <h3>Home Types</h3>
                <p className="stat-value">Luxury Single Family</p>
              </div>
              <div className="stat-item">
                <h3>School Rating</h3>
                <p className="stat-value">9/10</p>
              </div>
              <div className="stat-item">
                <h3>Security</h3>
                <p className="stat-value">24/7 Gated</p>
              </div>
            </div>
          </div>
        </section>

        {/* Neighborhood Overview */}
        <section className="neighborhood-overview">
          <div className="container">
            <div className="overview-content">
              <div className="overview-text">
                <h2>Welcome to The Prominence</h2>
                <p>
                  The Prominence represents the pinnacle of luxury living in Aliante, offering an exclusive 
                  lifestyle with world-class amenities and unparalleled security. This gated community features 
                  custom-built luxury homes with premium finishes, golf course views, and access to the finest 
                  Club Aliante facilities.
                </p>
                <p>
                  Residents enjoy a sophisticated atmosphere with meticulously landscaped grounds, private 
                  streets, and a sense of community that's second to none. The Prominence is perfect for 
                  discerning buyers who demand the very best in North Las Vegas living.
                </p>
              </div>
              <div className="overview-image">
                <div className="image-placeholder">🏰</div>
              </div>
            </div>
          </div>
        </section>

        {/* Home Features */}
        <section className="home-features">
          <div className="container">
            <h2>Luxury Home Features</h2>
            <div className="features-grid">
              <div className="feature-category">
                <h3>🏠 Exterior Features</h3>
                <ul>
                  <li>Custom architectural designs</li>
                  <li>Premium stone and brick exteriors</li>
                  <li>Professional landscaping</li>
                  <li>3-car garages</li>
                  <li>Outdoor living spaces</li>
                </ul>
              </div>
              
              <div className="feature-category">
                <h3>🏡 Interior Features</h3>
                <ul>
                  <li>Open concept floor plans</li>
                  <li>Gourmet kitchens with premium appliances</li>
                  <li>Master suites with spa bathrooms</li>
                  <li>High ceilings and custom lighting</li>
                  <li>Smart home technology</li>
                </ul>
              </div>
              
              <div className="feature-category">
                <h3>🎯 Premium Upgrades</h3>
                <ul>
                  <li>Hardwood floors throughout</li>
                  <li>Granite and quartz countertops</li>
                  <li>Custom cabinetry</li>
                  <li>Energy-efficient systems</li>
                  <li>Wine cellars and home theaters</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Amenities */}
        <section className="neighborhood-amenities">
          <div className="container">
            <h2>Exclusive Community Amenities</h2>
            <div className="amenities-grid">
              <div className="amenity-item">
                <div className="amenity-icon">🏌️</div>
                <h3>Golf Course Access</h3>
                <p>Direct access to the championship Aliante Golf Club with preferred tee times</p>
              </div>
              
              <div className="amenity-item">
                <div className="amenity-icon">🔒</div>
                <h3>24/7 Security</h3>
                <p>Gated entry with security personnel and surveillance systems</p>
              </div>
              
              <div className="amenity-item">
                <div className="amenity-icon">🏊‍♂️</div>
                <h3>Resort Pool</h3>
                <p>Heated pool with spa, cabanas, and poolside service</p>
              </div>
              
              <div className="amenity-item">
                <div className="amenity-icon">🎾</div>
                <h3>Tennis Courts</h3>
                <p>Professional-grade courts with lighting for evening play</p>
              </div>
              
              <div className="amenity-item">
                <div className="amenity-icon">🏋️‍♂️</div>
                <h3>Fitness Center</h3>
                <p>State-of-the-art equipment and personal training services</p>
              </div>
              
              <div className="amenity-item">
                <div className="amenity-icon">🍽️</div>
                <h3>Clubhouse</h3>
                <p>Elegant clubhouse for events and social gatherings</p>
              </div>
            </div>
          </div>
        </section>

        {/* Schools & Education */}
        <section className="schools-education">
          <div className="container">
            <h2>Top-Rated Schools</h2>
            <p>The Prominence is served by some of the best schools in North Las Vegas</p>
            
            <div className="schools-grid">
              <div className="school-card">
                <h3>Elementary Schools</h3>
                <ul>
                  <li><strong>Aliante Elementary</strong> - 9/10 Rating</li>
                  <li><strong>Desert Willow Elementary</strong> - 8/10 Rating</li>
                  <li><strong>Paseo Verde Elementary</strong> - 9/10 Rating</li>
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
            <h2>Prime Location & Easy Access</h2>
            <div className="location-content">
              <div className="location-info">
                <h3>Strategic Location</h3>
                <p>
                  The Prominence is strategically located in the heart of Aliante, providing easy access to 
                  all major destinations while maintaining privacy and exclusivity.
                </p>
                
                <div className="access-points">
                  <div className="access-item">
                    <strong>🛣️ Freeway Access:</strong> 2 minutes to I-215
                  </div>
                  <div className="access-item">
                    <strong>✈️ Airport:</strong> 15 minutes to Harry Reid International
                  </div>
                  <div className="access-item">
                    <strong>🛍️ Shopping:</strong> 5 minutes to premium retail centers
                  </div>
                  <div className="access-item">
                    <strong>🏥 Healthcare:</strong> 10 minutes to medical facilities
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
            <h2>Homes Available in The Prominence</h2>
            <p>Discover luxury living at its finest</p>
            
            <div className="homes-placeholder">
              <h3>🏠 Luxury Homes Coming Soon</h3>
              <p>Live MLS data integration coming soon</p>
              <p>Contact us for current availability in The Prominence</p>
              <div className="placeholder-features">
                <span>Custom Builds</span>
                <span>Golf Course Views</span>
                <span>Premium Finishes</span>
                <span>Smart Home Tech</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="container">
            <h2>Ready to Experience The Prominence?</h2>
            <p>Schedule a private tour of this exclusive community</p>
            <div className="cta-buttons">
              <a href="/contact" className="cta-button primary">
                Schedule Private Tour
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
