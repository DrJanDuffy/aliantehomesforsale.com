import type { Metadata } from 'next';
import StructuredData from '../../components/StructuredData';

export const metadata: Metadata = {
  title: 'Club Aliante | Golf Course Living North Las Vegas',
  description: 'Discover Club Aliante, premier golf course community with stunning views, clubhouse amenities, and access to championship golf. Starting from $500K.',
  keywords: 'Club Aliante, golf course homes North Las Vegas, Aliante Golf Club, golf community, clubhouse amenities',
  openGraph: {
    title: 'Club Aliante - Golf Course Living in Aliante',
    description: 'Premier golf course community with stunning views and amenities',
    type: 'website',
    url: 'https://aliantehomesforsale.com/neighborhoods/club-aliante',
  },
};

export default function ClubAliante() {
  return (
    <>
      <StructuredData type="NeighborhoodDetail" />
      
      <main className="neighborhood-detail-page club-aliante">
        {/* Hero Section */}
        <section className="page-hero">
          <div className="hero-content">
            <h1>Club Aliante</h1>
            <p className="hero-subtitle">
              Premier Golf Course Living in North Las Vegas
            </p>
            <div className="hero-badges">
              <span className="badge">⛳ Golf Course Views</span>
              <span className="badge">🏆 Clubhouse Access</span>
              <span className="badge">🍽️ Fine Dining</span>
              <span className="badge">🏋️‍♂️ Fitness Center</span>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="quick-stats">
          <div className="container">
            <div className="stats-grid">
              <div className="stat-item">
                <h3>Price Range</h3>
                <p className="stat-value">$500K - $900K</p>
              </div>
              <div className="stat-item">
                <h3>Home Types</h3>
                <p className="stat-value">Single Family, Golf Homes</p>
              </div>
              <div className="stat-item">
                <h3>School Rating</h3>
                <p className="stat-value">9/10</p>
              </div>
              <div className="stat-item">
                <h3>Golf Access</h3>
                <p className="stat-value">Direct</p>
              </div>
            </div>
          </div>
        </section>

        {/* Neighborhood Overview */}
        <section className="neighborhood-overview">
          <div className="container">
            <div className="overview-content">
              <div className="overview-text">
                <h2>Welcome to Club Aliante</h2>
                <p>
                  Club Aliante is the ultimate destination for golf enthusiasts and those seeking an 
                  active, resort-style lifestyle. This premier community offers direct access to the 
                  championship Aliante Golf Club, with homes positioned for the best course views.
                </p>
                <p>
                  Residents enjoy exclusive clubhouse privileges, fine dining, fitness facilities, and 
                  a vibrant social scene. The community combines the tranquility of golf course living 
                  with the convenience of modern amenities, creating the perfect balance for active adults.
                </p>
              </div>
              <div className="overview-image">
                <div className="image-placeholder">🏌️</div>
              </div>
            </div>
          </div>
        </section>

        {/* Home Features */}
        <section className="home-features">
          <div className="container">
            <h2>Golf Course Home Features</h2>
            <div className="features-grid">
              <div className="feature-category">
                <h3>🏠 Exterior Features</h3>
                <ul>
                  <li>Golf course frontage and views</li>
                  <li>Premium stone and stucco exteriors</li>
                  <li>Professional landscaping</li>
                  <li>2-3 car garages</li>
                  <li>Outdoor living spaces</li>
                </ul>
              </div>
              
              <div className="feature-category">
                <h3>🏡 Interior Features</h3>
                <ul>
                  <li>Open concept floor plans</li>
                  <li>Gourmet kitchens with island seating</li>
                  <li>Master suites with spa bathrooms</li>
                  <li>Great rooms with fireplaces</li>
                  <li>Home office options</li>
                </ul>
              </div>
              
              <div className="feature-category">
                <h3>🎯 Golf Community Upgrades</h3>
                <ul>
                  <li>Golf course views from key rooms</li>
                  <li>Premium finishes throughout</li>
                  <li>Energy-efficient systems</li>
                  <li>Smart home technology</li>
                  <li>Golf cart storage</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Golf Club Amenities */}
        <section className="golf-club-amenities">
          <div className="container">
            <h2>Aliante Golf Club Amenities</h2>
            <div className="amenities-grid">
              <div className="amenity-item">
                <div className="amenity-icon">⛳</div>
                <h3>Championship Golf Course</h3>
                <p>18-hole championship course designed by Schmidt-Curley Golf Design</p>
              </div>
              
              <div className="amenity-item">
                <div className="amenity-icon">🏆</div>
                <h3>Clubhouse Access</h3>
                <p>Exclusive access to elegant clubhouse with member lounges</p>
              </div>
              
              <div className="amenity-item">
                <div className="amenity-icon">🍽️</div>
                <h3>Fine Dining</h3>
                <p>Upscale restaurant with golf course views and seasonal menus</p>
              </div>
              
              <div className="amenity-item">
                <div className="amenity-icon">🏋️‍♂️</div>
                <h3>Fitness Center</h3>
                <p>State-of-the-art equipment and personal training services</p>
              </div>
              
              <div className="amenity-item">
                <div className="amenity-icon">🏊‍♂️</div>
                <h3>Swimming Pool</h3>
                <p>Resort-style pool with spa and poolside service</p>
              </div>
              
              <div className="amenity-item">
                <div className="amenity-icon">🎾</div>
                <h3>Tennis Courts</h3>
                <p>Professional tennis courts with lighting and equipment</p>
              </div>
            </div>
          </div>
        </section>

        {/* Golf Course Details */}
        <section className="golf-course-details">
          <div className="container">
            <h2>The Aliante Golf Club</h2>
            <div className="course-content">
              <div className="course-info">
                <h3>Championship Golf Experience</h3>
                <p>
                  The Aliante Golf Club features a stunning 18-hole championship course that challenges 
                  players of all skill levels while providing breathtaking views of the surrounding landscape.
                </p>
                
                <div className="course-features">
                  <div className="course-feature">
                    <strong>🏌️ Course Design:</strong> Schmidt-Curley Golf Design
                  </div>
                  <div className="course-feature">
                    <strong>⛳ Par:</strong> 72
                  </div>
                  <div className="course-feature">
                    <strong>📏 Length:</strong> 7,200 yards from championship tees
                  </div>
                  <div className="course-feature">
                    <strong>🌵 Terrain:</strong> Desert landscape with natural features
                  </div>
                </div>
              </div>
              
              <div className="course-image">
                <div className="image-placeholder">⛳</div>
                <p>Golf course photos coming soon</p>
              </div>
            </div>
          </div>
        </section>

        {/* Schools & Education */}
        <section className="schools-education">
          <div className="container">
            <h2>Top-Rated Schools</h2>
            <p>Club Aliante residents have access to excellent educational opportunities</p>
            
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
            <h2>Prime Golf Course Location</h2>
            <div className="location-content">
              <div className="location-info">
                <h3>Golf Course Living</h3>
                <p>
                  Club Aliante is perfectly positioned for golf enthusiasts, offering easy access to 
                  the course while maintaining proximity to all major destinations.
                </p>
                
                <div className="access-points">
                  <div className="access-item">
                    <strong>⛳ Golf Course:</strong> Direct access to Aliante Golf Club
                  </div>
                  <div className="access-item">
                    <strong>🛣️ Freeway Access:</strong> 3 minutes to I-215
                  </div>
                  <div className="access-item">
                    <strong>✈️ Airport:</strong> 15 minutes to Harry Reid International
                  </div>
                  <div className="access-item">
                    <strong>🛍️ Shopping:</strong> 5 minutes to premium retail centers
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
            <h2>Golf Course Homes Available</h2>
            <p>Find your perfect golf course home</p>
            
            <div className="homes-placeholder">
              <h3>🏠 Golf Course Homes Coming Soon</h3>
              <p>Live MLS data integration coming soon</p>
              <p>Contact us for current availability in Club Aliante</p>
              <div className="placeholder-features">
                <span>Golf Course Views</span>
                <span>Clubhouse Access</span>
                <span>Premium Amenities</span>
                <span>Active Lifestyle</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="container">
            <h2>Ready for Golf Course Living?</h2>
            <p>Schedule a tour of Club Aliante today</p>
            <div className="cta-buttons">
              <a href="/contact" className="cta-button primary">
                Schedule Golf Course Tour
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
