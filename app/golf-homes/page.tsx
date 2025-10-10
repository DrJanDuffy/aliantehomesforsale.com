import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Golf Course Homes Aliante - Club Aliante Properties',
  description: 'Golf course homes in Aliante. Club Aliante championship course access, fairway views, resort amenities. 32+ properties available.',
  alternates: {
    canonical: 'https://www.aliantehomesforsale.com/golf-homes',
  },
};

export default function GolfHomes() {
  return (
    <main className="golf-homes-page">
      <section className="page-hero">
        <div className="hero-content">
          <h1>Golf Course Homes in Aliante</h1>
          <p className="hero-subtitle">32 properties available - Championship Golf Living</p>
        </div>
      </section>

      <section className="golf-content">
        <div className="container">
          <h2>Club Aliante Golf Course</h2>
          <p>Championship 18-hole golf course designed by PGA professionals. Homes with direct course access, fairway views, and country club amenities.</p>

          <h3>Golf Course Home Features</h3>
          <ul>
            <li>Direct golf course access and views</li>
            <li>Club Aliante membership privileges</li>
            <li>Golf cart storage</li>
            <li>Resort-style amenities</li>
            <li>Fine dining and pro shop</li>
          </ul>

          <div className="cta-buttons">
            <a href="/contact" className="cta-button primary">View Golf Properties</a>
            <a href="/neighborhoods/club-aliante" className="cta-button secondary">Learn About Club Aliante</a>
          </div>
        </div>
      </section>
    </main>
  );
}

