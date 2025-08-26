import type { Metadata } from 'next';
import StructuredData from '../../components/StructuredData';

export const metadata: Metadata = {
  title: 'Desert Willows Aliante | Family Community North Las Vegas',
  description: 'Discover Desert Willows, a family-friendly neighborhood in Aliante with excellent schools, spacious lots, and easy access to amenities. Starting from $400K.',
  keywords: 'Desert Willows Aliante, family homes North Las Vegas, Aliante schools, family community, spacious lots',
  openGraph: {
    title: 'Desert Willows - Family Community in Aliante',
    description: 'Family-oriented neighborhood with excellent schools and amenities',
    type: 'website',
    url: 'https://aliantehomesforsale.com/neighborhoods/desert-willows',
  },
};

export default function DesertWillows() {
  return (
    <>
      <StructuredData type="NeighborhoodDetail" />
      
      <main className="neighborhood-detail-page desert-willows">
        {/* Hero Section */}
        <section className="page-hero">
          <div className="hero-content">
            <h1>Desert Willows</h1>
            <p className="hero-subtitle">
              Family-Friendly Living in the Heart of Aliante
            </p>
            <div className="hero-badges">
              <span className="badge">👨‍👩‍👧‍👦 Family Friendly</span>
              <span className="badge">🏫 Top Schools</span>
              <span className="badge">🌳 Parks & Trails</span>
              <span className="badge">🛒 Shopping Nearby</span>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="quick-stats">
          <div className="container">
            <div className="stats-grid">
              <div className="stat-item">
                <h3>Price Range</h3>
                <p className="stat-value">$400K - $700K</p>
              </div>
              <div className="stat-item">
                <h3>Home Types</h3>
                <p className="stat-value">Single Family, Townhomes</p>
              </div>
              <div className="stat-item">
                <h3>School Rating</h3>
                <p className="stat-value">8/10</p>
              </div>
              <div className="stat-item">
                <h3>Lot Sizes</h3>
                <p className="stat-value">Spacious</p>
              </div>
            </div>
          </div>
        </section>

        {/* Neighborhood Overview */}
        <section className="neighborhood-overview">
          <div className="container">
            <div className="overview-content">
              <div className="overview-text">
                <h2>Welcome to Desert Willows</h2>
                <p>
                  Desert Willows is the perfect neighborhood for families seeking a balance of comfort, 
                  convenience, and community. This well-established area features spacious lots, mature 
                  landscaping, and homes designed with family living in mind.
                </p>
                <p>
                  With excellent schools, nearby parks, and easy access to shopping and dining, Desert 
                  Willows offers everything families need for a fulfilling lifestyle. The neighborhood 
                  boasts a strong sense of community and is known for its friendly atmosphere and well-maintained properties.
                </p>
              </div>
              <div className="overview-image">
                <div className="image-placeholder">🌵</div>
              </div>
            </div>
          </div>
        </section>

        {/* Home Features */}
        <section className="home-features">
          <div className="container">
            <h2>Family Home Features</h2>
            <div className="features-grid">
              <div className="feature-category">
                <h3>🏠 Exterior Features</h3>
                <ul>
                  <li>Spacious front and back yards</li>
                  <li>Mature trees and landscaping</li>
                  <li>2-3 car garages</li>
                  <li>Outdoor patios and decks</li>
                  <li>RV parking available</li>
                </ul>
              </div>
              
              <div className="feature-category">
                <h3>🏡 Interior Features</h3>
                <ul>
                  <li>Open concept living areas</li>
                  <li>Large family rooms</li>
                  <li>Eat-in kitchens</li>
                  <li>Multiple bedrooms</li>
                  <li>Bonus rooms and lofts</li>
                </ul>
              </div>
              
              <div className="feature-category">
                <h3>🎯 Family Upgrades</h3>
                <ul>
                  <li>Updated appliances</li>
                  <li>Fresh paint and flooring</li>
                  <li>Energy-efficient windows</li>
                  <li>Storage solutions</li>
                  <li>Child-safe features</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Amenities */}
        <section className="neighborhood-amenities">
          <div className="container">
            <h2>Family-Friendly Amenities</h2>
            <div className="amenities-grid">
              <div className="amenity-item">
                <div className="amenity-icon">🌳</div>
                <h3>Parks & Recreation</h3>
                <p>Multiple parks with playgrounds, walking trails, and picnic areas</p>
              </div>
              
              <div className="amenity-item">
                <div className="amenity-icon">🏫</div>
                <h3>Top Schools</h3>
                <p>Access to highly-rated elementary, middle, and high schools</p>
              </div>
              
              <div className="amenity-item">
                <div className="amenity-icon">🛒</div>
                <h3>Shopping & Dining</h3>
                <p>Convenient access to retail centers and family restaurants</p>
              </div>
              
              <div className="amenity-item">
                <div className="amenity-icon">🏥</div>
                <h3>Healthcare</h3>
                <p>Nearby medical facilities and urgent care centers</p>
              </div>
              
              <div className="amenity-item">
                <div className="amenity-icon">🚗</div>
                <h3>Easy Transportation</h3>
                <p>Quick access to freeways and public transportation</p>
              </div>
              
              <div className="amenity-item">
                <div className="amenity-icon">🏌️</div>
                <h3>Golf Access</h3>
                <p>Close proximity to Aliante Golf Club</p>
              </div>
            </div>
          </div>
        </section>

        {/* Schools & Education */}
        <section className="schools-education">
          <div className="container">
            <h2>Excellent Schools</h2>
            <p>Desert Willows families have access to some of the best schools in the area</p>
            
            <div className="schools-grid">
              <div className="school-card">
                <h3>Elementary Schools</h3>
                <ul>
                  <li><strong>Desert Willow Elementary</strong> - 8/10 Rating</li>
                  <li><strong>Aliante Elementary</strong> - 9/10 Rating</li>
                  <li><strong>Paseo Verde Elementary</strong> - 9/10 Rating</li>
                </ul>
              </div>
              
              <div className="school-card">
                <h3>Middle Schools</h3>
                <ul>
                  <li><strong>Desert Willow Middle</strong> - 9/10 Rating</li>
                  <li><strong>Aliante Middle School</strong> - 8/10 Rating</li>
                </ul>
              </div>
              
              <div className="school-card">
                <h3>High Schools</h3>
                <ul>
                  <li><strong>Desert Willow High</strong> - 8/10 Rating</li>
                  <li><strong>Aliante High School</strong> - 9/10 Rating</li>
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
                <h3>Family-Friendly Location</h3>
                <p>
                  Desert Willows is perfectly positioned for families, offering easy access to all the 
                  essentials while maintaining a peaceful, residential atmosphere.
                </p>
                
                <div className="access-points">
                  <div className="access-item">
                    <strong>🏫 Schools:</strong> Walking distance to elementary schools
                  </div>
                  <div className="access-item">
                    <strong>🛒 Shopping:</strong> 3 minutes to major retail centers
                  </div>
                  <div className="access-item">
                    <strong>🏥 Healthcare:</strong> 8 minutes to medical facilities
                  </div>
                  <div className="access-item">
                    <strong>🛣️ Freeway:</strong> 5 minutes to I-215
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
            <h2>Homes Available in Desert Willows</h2>
            <p>Find your perfect family home</p>
            
            <div className="homes-placeholder">
              <h3>🏠 Family Homes Coming Soon</h3>
              <p>Live MLS data integration coming soon</p>
              <p>Contact us for current availability in Desert Willows</p>
              <div className="placeholder-features">
                <span>Spacious Lots</span>
                <span>Family Rooms</span>
                <span>Updated Features</span>
                <span>Great Schools</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="container">
            <h2>Ready to Find Your Family Home?</h2>
            <p>Schedule a tour of Desert Willows today</p>
            <div className="cta-buttons">
              <a href="/contact" className="cta-button primary">
                Schedule Family Tour
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
