import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aliante Schools Information - School District & Ratings',
  description: 'Complete guide to schools serving Aliante neighborhoods. Elementary, middle, and high schools with ratings, boundaries, and performance data.',
  alternates: { canonical: 'https://www.aliantehomesforsale.com/schools' },
};

export default function Schools() {
  return (
    <main className="schools-page">
      <section className="page-hero">
        <div className="hero-content">
          <h1>Aliante School District Information</h1>
          <p className="hero-subtitle">Top-rated schools serving Aliante families</p>
        </div>
      </section>
      <section className="schools-content">
        <div className="container">
          <h2>School District</h2>
          <p>Aliante is served by the Clark County School District (CCSD), the 5th largest school district in the United States. The area features some of the highest-rated schools in North Las Vegas.</p>

          <h2>Elementary Schools</h2>
          <ul>
            <li><strong>Cozine Elementary</strong> - Rating: 8/10</li>
            <li><strong>Mitchell Elementary</strong> - Rating: 8/10</li>
            <li><strong>Woolley Elementary</strong> - Rating: 7/10</li>
          </ul>

          <h2>Middle Schools</h2>
          <ul>
            <li><strong>Bob Miller Middle School</strong> - Rating: 8/10</li>
            <li><strong>Leavitt Middle School</strong> - Rating: 7/10</li>
          </ul>

          <h2>High Schools</h2>
          <ul>
            <li><strong>Shadow Ridge High School</strong> - Rating: 8/10</li>
            <li><strong>Centennial High School</strong> - Rating: 9/10</li>
          </ul>

          <h2>Private School Options</h2>
          <p>Several private and charter schools are located within a short drive of Aliante, offering additional educational options for families.</p>

          <h2>School Boundaries</h2>
          <p>School boundaries can vary by neighborhood and street. Contact us for specific school assignment information for any property you're considering.</p>

          <div className="cta-buttons">
            <a href="/contact" className="cta-button primary">Get School Information</a>
            <a href="/neighborhoods" className="cta-button secondary">Find Homes by School</a>
          </div>
        </div>
      </section>
    </main>
  );
}

