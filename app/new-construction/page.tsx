import type { Metadata } from 'next';
import StructuredData from '../components/StructuredData';

export const metadata: Metadata = {
  title: 'New Construction Homes in Aliante, North Las Vegas | Builder Guide',
  description: 'Discover new construction homes in Aliante. Expert guidance on Lennar, D.R. Horton, Tri Pointe, and Del Webb communities. Get builder incentives and lot selection help.',
  keywords: 'new construction Aliante, Aliante builders, Lennar homes, D.R. Horton, Tri Pointe, Del Webb',
  openGraph: {
    title: 'New Construction Homes in Aliante, North Las Vegas',
    description: 'Expert guidance on new construction communities and builders',
    type: 'website',
    url: 'https://aliantehomesforsale.com/new-construction',
  },
};

export default function NewConstruction() {
  return (
    <>
      <StructuredData type="PropertyListing" />
      
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
      
      <main className="new-construction-page">
        {/* Hero Section */}
        <section className="page-hero">
          <div className="hero-content">
            <h1>New Construction Homes in Aliante, North Las Vegas</h1>
            <p className="hero-subtitle">
              Expert guidance on new home communities | Builder incentives & lot selection | 45+ new homes available
            </p>
          </div>
        </section>

        {/* Why New Construction */}
        <section className="why-new-construction">
          <div className="container">
            <h2>Why Choose New Construction in Aliante?</h2>
            <div className="benefits-grid">
              <div className="benefit-card">
                <h3>🏗️ Builder Incentives</h3>
                <p>Average $15K+ in additional credits and upgrades</p>
              </div>
              <div className="benefit-card">
                <h3>🎯 Lot Selection</h3>
                <p>Premium vs. standard placement strategies</p>
              </div>
              <div className="benefit-card">
                <h3>⏰ Timeline Management</h3>
                <p>Avoid construction delays and issues</p>
              </div>
              <div className="benefit-card">
                <h3>🔍 Quality Control</h3>
                <p>Pre-drywall and pre-close inspections</p>
              </div>
            </div>
          </div>
        </section>

        {/* Top Builders */}
        <section className="top-builders">
          <div className="container">
            <h2>Top Builders in Aliante Area</h2>
            <div className="builders-grid">
              <div className="builder-card featured">
                <div className="builder-header">
                  <h3>Lennar Homes</h3>
                  <span className="rank">#1 Volume</span>
                </div>
                <div className="builder-stats">
                  <p><strong>2,143 sales</strong> in Aliante area</p>
                  <p><strong>45+ homes</strong> currently available</p>
                  <p><strong>Price range:</strong> $350K - $750K</p>
                </div>
                <div className="builder-features">
                  <h4>Popular Communities:</h4>
                  <ul>
                    <li>Aliante Springs</li>
                    <li>Desert Willows</li>
                    <li>The Prominence</li>
                  </ul>
                </div>
                <a href="/builders/lennar" className="cta-button">
                  View Lennar Homes
                </a>
              </div>

              <div className="builder-card">
                <div className="builder-header">
                  <h3>D.R. Horton</h3>
                  <span className="rank">#2 Volume</span>
                </div>
                <div className="builder-stats">
                  <p><strong>1,910 sales</strong> in Aliante area</p>
                  <p><strong>32+ homes</strong> currently available</p>
                  <p><strong>Price range:</strong> $380K - $680K</p>
                </div>
                <div className="builder-features">
                  <h4>Popular Communities:</h4>
                  <ul>
                    <li>Villages at Tule Springs</li>
                    <li>Heartland Communities</li>
                    <li>Aliante Ranch</li>
                  </ul>
                </div>
                <a href="/builders/dr-horton" className="cta-button">
                  View D.R. Horton Homes
                </a>
              </div>

              <div className="builder-card">
                <div className="builder-header">
                  <h3>Tri Pointe Homes</h3>
                  <span className="rank">5-Star Rating</span>
                </div>
                <div className="builder-stats">
                  <p><strong>Premium quality</strong> construction</p>
                  <p><strong>18+ homes</strong> currently available</p>
                  <p><strong>Price range:</strong> $450K - $850K</p>
                </div>
                <div className="builder-features">
                  <h4>Popular Communities:</h4>
                  <ul>
                    <li>Aliante Highlands</li>
                    <li>Mountain View Estates</li>
                  </ul>
                </div>
                <a href="/builders/tri-pointe" className="cta-button">
                  View Tri Pointe Homes
                </a>
              </div>

              <div className="builder-card">
                <div className="builder-header">
                  <h3>Del Webb (Pulte)</h3>
                  <span className="rank">55+ Active Adult</span>
                </div>
                <div className="builder-stats">
                  <p><strong>Active adult</strong> lifestyle</p>
                  <p><strong>25+ homes</strong> currently available</p>
                  <p><strong>Price range:</strong> $380K - $650K</p>
                </div>
                <div className="builder-features">
                  <h4>Popular Communities:</h4>
                  <ul>
                    <li>Sun City Aliante</li>
                    <li>Active Adult Villas</li>
                  </ul>
                </div>
                <a href="/builders/del-webb" className="cta-button">
                  View Del Webb Homes
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Construction Process */}
        <section className="construction-process">
          <div className="container">
            <h2>Your New Construction Journey</h2>
            <div className="process-steps">
              <div className="step">
                <div className="step-number">1</div>
                <h3>Community Selection</h3>
                <p>Choose the right neighborhood and builder for your lifestyle and budget</p>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <h3>Lot Selection</h3>
                <p>Premium vs. standard lots - we help you make the right choice</p>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <h3>Design & Upgrades</h3>
                <p>Select finishes, upgrades, and customizations</p>
              </div>
              <div className="step">
                <div className="step-number">4</div>
                <h3>Construction Monitoring</h3>
                <p>Regular updates and quality control inspections</p>
              </div>
              <div className="step">
                <div className="step-number">5</div>
                <h3>Closing & Move-in</h3>
                <p>Final walkthrough and smooth closing process</p>
              </div>
            </div>
          </div>
        </section>

        {/* Current Inventory */}
        <section className="current-inventory">
          <div className="container">
            <h2>Current New Construction Inventory</h2>
            <div className="inventory-summary">
              <div className="inventory-stat">
                <h3>Total Available</h3>
                <p className="number">45+</p>
                <p>New homes ready for selection</p>
              </div>
              <div className="inventory-stat">
                <h3>Coming Soon</h3>
                <p className="number">28</p>
                <p>Homes in construction phase</p>
              </div>
              <div className="inventory-stat">
                <h3>Pre-Construction</h3>
                <p className="number">15</p>
                <p>Lots available for custom builds</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="container">
            <h2>Ready to Build Your Dream Home?</h2>
            <p>Get expert guidance on new construction in Aliante</p>
            <div className="cta-buttons">
              <a href="/contact" className="cta-button primary">
                Schedule Consultation
              </a>
              <a href="/builders" className="cta-button secondary">
                View All Builders
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
