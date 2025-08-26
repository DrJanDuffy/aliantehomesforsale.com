import type { Metadata } from 'next';
import StructuredData from '../components/StructuredData';

export const metadata: Metadata = {
  title: 'Aliante Neighborhoods Guide | North Las Vegas Communities',
  description: 'Explore Aliante neighborhoods: The Prominence, Desert Willows, Club Aliante, The Paseos. Find your perfect community with amenities, schools, and lifestyle.',
  keywords: 'Aliante neighborhoods, The Prominence, Desert Willows, Club Aliante, The Paseos, North Las Vegas communities',
  openGraph: {
    title: 'Aliante Neighborhoods Guide - North Las Vegas',
    description: 'Discover the best neighborhoods in Aliante with detailed community information',
    type: 'website',
    url: 'https://aliantehomesforsale.com/neighborhoods',
  },
};

export default function Neighborhoods() {
  return (
    <>
      <StructuredData type="NeighborhoodGuide" />
      
      <main className="neighborhoods-page">
        {/* Hero Section */}
        <section className="page-hero">
          <div className="hero-content">
            <h1>Aliante Neighborhoods Guide</h1>
            <p className="hero-subtitle">
              Discover the perfect community for your lifestyle in North Las Vegas
            </p>
          </div>
        </section>

        {/* Neighborhoods Overview */}
        <section className="neighborhoods-overview">
          <div className="container">
            <h2>Find Your Perfect Aliante Community</h2>
            <p>
              Aliante offers diverse neighborhoods catering to different lifestyles, from luxury gated communities 
              to family-friendly areas with excellent schools and amenities.
            </p>
            
            <div className="neighborhoods-grid">
              {/* The Prominence */}
              <div className="neighborhood-card featured">
                <div className="neighborhood-image">
                  <div className="image-placeholder">🏰</div>
                </div>
                <div className="neighborhood-content">
                  <h3>The Prominence</h3>
                  <p className="neighborhood-tag">Luxury Gated Community</p>
                  <p className="neighborhood-description">
                    Upscale gated community featuring luxury homes with premium amenities, golf course views, 
                    and exclusive access to Club Aliante facilities.
                  </p>
                  <div className="neighborhood-features">
                    <span>🏌️ Golf Course Access</span>
                    <span>🔒 24/7 Security</span>
                    <span>🏊‍♂️ Resort Pool</span>
                    <span>🎾 Tennis Courts</span>
                  </div>
                  <div className="neighborhood-stats">
                    <div className="stat">
                      <strong>Price Range:</strong> $600K - $1.2M+
                    </div>
                    <div className="stat">
                      <strong>Home Types:</strong> Single Family, Luxury
                    </div>
                    <div className="stat">
                      <strong>Schools:</strong> 9/10 Rated
                    </div>
                  </div>
                  <a href="/neighborhoods/prominence" className="cta-button primary">
                    Explore The Prominence
                  </a>
                </div>
              </div>

              {/* Desert Willows */}
              <div className="neighborhood-card">
                <div className="neighborhood-image">
                  <div className="image-placeholder">🌵</div>
                </div>
                <div className="neighborhood-content">
                  <h3>Desert Willows</h3>
                  <p className="neighborhood-tag">Family Community</p>
                  <p className="neighborhood-description">
                    Family-oriented neighborhood with spacious lots, excellent schools, and easy access to 
                    shopping, dining, and outdoor recreation areas.
                  </p>
                  <div className="neighborhood-features">
                    <span>👨‍👩‍👧‍👦 Family Friendly</span>
                    <span>🏫 Top Schools</span>
                    <span>🛒 Shopping Nearby</span>
                    <span>🌳 Parks & Trails</span>
                  </div>
                  <div className="neighborhood-stats">
                    <div className="stat">
                      <strong>Price Range:</strong> $400K - $700K
                    </div>
                    <div className="stat">
                      <strong>Home Types:</strong> Single Family, Townhomes
                    </div>
                    <div className="stat">
                      <strong>Schools:</strong> 8/10 Rated
                    </div>
                  </div>
                  <a href="/neighborhoods/desert-willows" className="cta-button secondary">
                    Explore Desert Willows
                  </a>
                </div>
              </div>

              {/* Club Aliante */}
              <div className="neighborhood-card">
                <div className="neighborhood-image">
                  <div className="image-placeholder">🏌️</div>
                </div>
                <div className="neighborhood-content">
                  <h3>Club Aliante</h3>
                  <p className="neighborhood-tag">Golf Course Living</p>
                  <p className="neighborhood-description">
                    Premier golf course community offering stunning views, clubhouse amenities, and 
                    access to the championship Aliante Golf Club.
                  </p>
                  <div className="neighborhood-features">
                    <span>⛳ Golf Course Views</span>
                    <span>🏆 Clubhouse Access</span>
                    <span>🍽️ Fine Dining</span>
                    <span>🏋️‍♂️ Fitness Center</span>
                  </div>
                  <div className="neighborhood-stats">
                    <div className="stat">
                      <strong>Price Range:</strong> $500K - $900K
                    </div>
                    <div className="stat">
                      <strong>Home Types:</strong> Single Family, Golf Homes
                    </div>
                    <div className="stat">
                      <strong>Schools:</strong> 9/10 Rated
                    </div>
                  </div>
                  <a href="/neighborhoods/club-aliante" className="cta-button secondary">
                    Explore Club Aliante
                  </a>
                </div>
              </div>

              {/* The Paseos */}
              <div className="neighborhood-card">
                <div className="neighborhood-image">
                  <div className="image-placeholder">🏘️</div>
                </div>
                <div className="neighborhood-content">
                  <h3>The Paseos</h3>
                  <p className="neighborhood-tag">Affordable Living</p>
                  <p className="neighborhood-description">
                    Value-focused community offering quality homes at accessible prices, perfect for 
                    first-time buyers and growing families.
                  </p>
                  <div className="neighborhood-features">
                    <span>💰 Affordable Prices</span>
                    <span>🚶‍♂️ Walkable Design</span>
                    <span>🅿️ Ample Parking</span>
                    <span>🌿 Green Spaces</span>
                  </div>
                  <div className="neighborhood-stats">
                    <div className="stat">
                      <strong>Price Range:</strong> $300K - $500K
                    </div>
                    <div className="stat">
                      <strong>Home Types:</strong> Single Family, Townhomes
                    </div>
                    <div className="stat">
                      <strong>Schools:</strong> 7/10 Rated
                    </div>
                  </div>
                  <a href="/neighborhoods/paseos" className="cta-button secondary">
                    Explore The Paseos
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Community Amenities */}
        <section className="community-amenities">
          <div className="container">
            <h2>Community Amenities & Lifestyle</h2>
            <p>
              Aliante offers world-class amenities and a vibrant lifestyle for residents of all ages.
            </p>
            
            <div className="amenities-grid">
              <div className="amenity-category">
                <h3>🏌️ Golf & Recreation</h3>
                <ul>
                  <li>Championship 18-hole golf course</li>
                  <li>Pro shop and golf lessons</li>
                  <li>Tennis and pickleball courts</li>
                  <li>Swimming pools and spas</li>
                  <li>Fitness center and yoga studio</li>
                </ul>
              </div>
              
              <div className="amenity-category">
                <h3>🛍️ Shopping & Dining</h3>
                <ul>
                  <li>Aliante Casino + Hotel</li>
                  <li>Premium shopping centers</li>
                  <li>Fine dining restaurants</li>
                  <li>Casual eateries and cafes</li>
                  <li>Entertainment venues</li>
                </ul>
              </div>
              
              <div className="amenity-category">
                <h3>🎓 Education & Family</h3>
                <ul>
                  <li>Top-rated public schools</li>
                  <li>Private school options</li>
                  <li>Community parks and playgrounds</li>
                  <li>Family activity centers</li>
                  <li>Library and learning resources</li>
                </ul>
              </div>
              
              <div className="amenity-category">
                <h3>🚗 Transportation & Access</h3>
                <ul>
                  <li>Easy freeway access (I-215)</li>
                  <li>Public transportation</li>
                  <li>Bike lanes and walking trails</li>
                  <li>Airport proximity (15 minutes)</li>
                  <li>Downtown Las Vegas access</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Neighborhood Comparison */}
        <section className="neighborhood-comparison">
          <div className="container">
            <h2>Neighborhood Comparison</h2>
            <p>Compare key features to find your perfect match</p>
            
            <div className="comparison-table">
              <table>
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>The Prominence</th>
                    <th>Desert Willows</th>
                    <th>Club Aliante</th>
                    <th>The Paseos</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Starting Price</td>
                    <td>$600K</td>
                    <td>$400K</td>
                    <td>$500K</td>
                    <td>$300K</td>
                  </tr>
                  <tr>
                    <td>Home Types</td>
                    <td>Luxury SF</td>
                    <td>SF, Townhomes</td>
                    <td>Golf Homes</td>
                    <td>SF, Townhomes</td>
                  </tr>
                  <tr>
                    <td>Golf Access</td>
                    <td>Premium</td>
                    <td>Nearby</td>
                    <td>Direct</td>
                    <td>Nearby</td>
                  </tr>
                  <tr>
                    <td>Security</td>
                    <td>Gated</td>
                    <td>Open</td>
                    <td>Gated</td>
                    <td>Open</td>
                  </tr>
                  <tr>
                    <td>School Rating</td>
                    <td>9/10</td>
                    <td>8/10</td>
                    <td>9/10</td>
                    <td>7/10</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="container">
            <h2>Ready to Find Your Perfect Neighborhood?</h2>
            <p>Get expert guidance on choosing the right Aliante community for your lifestyle</p>
            <div className="cta-buttons">
              <a href="/contact" className="cta-button primary">
                Schedule a Neighborhood Tour
              </a>
              <a href="/homes-for-sale" className="cta-button secondary">
                View Available Homes
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
