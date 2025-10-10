import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Compare Aliante Neighborhoods - Side-by-Side Comparison Tool',
  description: 'Compare all Aliante neighborhoods side-by-side. Price ranges, amenities, schools, HOA fees, and more. Find your perfect community.',
  alternates: { canonical: 'https://www.aliantehomesforsale.com/neighborhoods/compare' },
};

export default function NeighborhoodCompare() {
  return (
    <main className="comparison-page">
      <section className="page-hero">
        <div className="hero-content">
          <h1>Neighborhood Comparison Tool</h1>
          <p className="hero-subtitle">Compare Aliante communities side-by-side</p>
        </div>
      </section>
      <section className="comparison-content">
        <div className="container">
          <h2>Side-by-Side Neighborhood Comparison</h2>
          
          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>The Prominence</th>
                  <th>Desert Willows</th>
                  <th>Club Aliante</th>
                  <th>The Paseos</th>
                  <th>Sun City</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Price Range</td>
                  <td>$600K-$1.2M</td>
                  <td>$400K-$700K</td>
                  <td>$500K-$900K</td>
                  <td>$300K-$500K</td>
                  <td>$380K-$650K</td>
                </tr>
                <tr>
                  <td>Gated</td>
                  <td>Yes</td>
                  <td>No</td>
                  <td>Yes</td>
                  <td>No</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>Golf Access</td>
                  <td>Premium</td>
                  <td>Nearby</td>
                  <td>Direct</td>
                  <td>Nearby</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>Age Restriction</td>
                  <td>None</td>
                  <td>None</td>
                  <td>None</td>
                  <td>None</td>
                  <td>55+</td>
                </tr>
                <tr>
                  <td>School Rating</td>
                  <td>9/10</td>
                  <td>8/10</td>
                  <td>9/10</td>
                  <td>7/10</td>
                  <td>N/A</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>How to Choose the Right Neighborhood</h2>
          <p>Consider your lifestyle, budget, and priorities. Contact us for a personalized neighborhood consultation based on your specific needs.</p>

          <div className="cta-buttons">
            <a href="/contact" className="cta-button primary">Schedule Neighborhood Tour</a>
            <a href="/neighborhoods" className="cta-button secondary">View All Neighborhoods</a>
          </div>
        </div>
      </section>
    </main>
  );
}

