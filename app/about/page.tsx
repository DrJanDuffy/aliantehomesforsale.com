import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Aliante Real Estate - Local Experts Since 2018',
  description: 'Meet the local real estate experts serving Aliante and North Las Vegas since 2018. 500+ successful transactions, deep builder relationships, and unmatched market knowledge.',
  alternates: {
    canonical: 'https://www.aliantehomesforsale.com/about',
  },
};

export default function About() {
  return (
    <main className="about-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="hero-content">
          <h1>About Dr. Jan Duffy - Aliante Las Vegas Real Estate</h1>
          <p className="hero-subtitle">
            Your Trusted Local Expert Since 2018
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="about-content">
        <div className="container">
          <h2>Who We Are</h2>
          <p>
            Dr. Jan Duffy and Aliante Las Vegas have been serving the North Las Vegas community since 2018, 
            specializing exclusively in Aliante and surrounding areas. With over 500 successful 
            transactions, we've built our reputation on local expertise, integrity, and results.
          </p>

          <div className="stats-grid">
            <div className="stat-card">
              <h3>500+</h3>
              <p>Successful Transactions</p>
            </div>
            <div className="stat-card">
              <h3>6+ Years</h3>
              <p>Local Market Experience</p>
            </div>
            <div className="stat-card">
              <h3>4.9/5</h3>
              <p>Client Satisfaction Rating</p>
            </div>
            <div className="stat-card">
              <h3>127</h3>
              <p>Verified Reviews</p>
            </div>
          </div>

          <h2>Our Expertise</h2>
          
          <div className="expertise-grid">
            <div className="expertise-card">
              <h3>🏗️ New Construction Specialists</h3>
              <p>
                Direct relationships with all major builders in North Las Vegas: Lennar, 
                D.R. Horton, Tri Pointe, Del Webb, and Richmond American. We track incentives, 
                negotiate on your behalf, and guide you through every construction phase.
              </p>
            </div>

            <div className="expertise-card">
              <h3>🏘️ Neighborhood Experts</h3>
              <p>
                Intimate knowledge of every Aliante neighborhood: The Prominence, Desert Willows, 
                Club Aliante, The Paseos, and Sun City Aliante. We can match you with the perfect 
                community for your lifestyle.
              </p>
            </div>

            <div className="expertise-card">
              <h3>📊 Market Intelligence</h3>
              <p>
                Real-time MLS data updated every 15 minutes, comprehensive market reports, and 
                insider knowledge of upcoming developments and trends in North Las Vegas real estate.
              </p>
            </div>

            <div className="expertise-card">
              <h3>🤝 Buyer & Seller Advocacy</h3>
              <p>
                Whether you're buying your first home or selling your dream property, we provide 
                expert guidance, skillful negotiation, and personalized service every step of the way.
              </p>
            </div>
          </div>

          <h2>Why Choose Us</h2>
          
          <ul>
            <li><strong>Local Focus:</strong> We exclusively serve Aliante and North Las Vegas - this is our neighborhood</li>
            <li><strong>Builder Relationships:</strong> Direct access to builder reps for better deals and incentives</li>
            <li><strong>Market Mastery:</strong> We track every listing, price change, and market trend</li>
            <li><strong>Client-First:</strong> Your goals are our priority - no pressure, just expert guidance</li>
            <li><strong>Proven Results:</strong> 500+ satisfied clients and growing</li>
          </ul>

          <h2>Our Commitment</h2>
          <p>
            We believe in transparency, integrity, and putting our clients first. Every decision 
            we make is guided by what's best for you - whether that means negotiating harder for 
            a better price, walking away from the wrong deal, or connecting you with trusted 
            service providers.
          </p>

          <div className="cta-section">
            <h2>Ready to Find Your Dream Home?</h2>
            <p>Let's start your home search journey together</p>
            <div className="cta-buttons">
              <a href="/contact" className="cta-button primary">
                Contact Us Today
              </a>
              <a href="/homes-for-sale" className="cta-button secondary">
                Browse Homes
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

