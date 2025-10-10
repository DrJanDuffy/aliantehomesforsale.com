import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sun City Aliante - Active Adult 55+ Community | Del Webb',
  description: 'Sun City Aliante by Del Webb - premier active adult 55+ community. Resort amenities, social activities, maintenance-free living in North Las Vegas.',
  alternates: { canonical: 'https://www.aliantehomesforsale.com/neighborhoods/sun-city' },
};

export default function SunCityAliante() {
  return (
    <main className="neighborhood-detail-page">
      <section className="page-hero">
        <div className="hero-content">
          <h1>Sun City Aliante - Active Adult 55+</h1>
          <p className="hero-subtitle">Del Webb's Premier Lifestyle Community</p>
        </div>
      </section>
      <section className="neighborhood-content">
        <div className="container">
          <h2>About Sun City Aliante</h2>
          <p>Sun City Aliante is an active adult community for ages 55 and better, developed by Del Webb. Features resort-style amenities, championship golf, and vibrant social activities.</p>
          
          <h2>Resort-Style Amenities</h2>
          <ul>
            <li>Mountain Shadows Community Center - 30,000+ sq ft</li>
            <li>Fitness center and aerobics studios</li>
            <li>Indoor and outdoor pools</li>
            <li>Tennis, pickleball, and bocce courts</li>
            <li>Golf course access</li>
            <li>Arts and crafts studios</li>
            <li>Social clubs and activities</li>
          </ul>

          <h2>Home Styles</h2>
          <p>Single-story and two-story homes ranging from 1,200 to 3,000+ square feet. Low-maintenance living with HOA-managed landscaping.</p>

          <h2>Lifestyle & Activities</h2>
          <p>Over 40 clubs and interest groups including golf, tennis, arts, fitness, and social activities. Weekly events and trips organized by resident committees.</p>

          <div className="cta-buttons">
            <a href="/contact" className="cta-button primary">Tour Sun City</a>
            <a href="/builders/del-webb" className="cta-button secondary">Learn About Del Webb</a>
          </div>
        </div>
      </section>
    </main>
  );
}

