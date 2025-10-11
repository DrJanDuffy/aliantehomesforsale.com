import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sun City Aliante Homes for Sale North Las Vegas Nevada - 55+ Community',
  description: 'Sun City Aliante homes for sale in North Las Vegas, Nevada. Active adult 55+ Del Webb community. Resort amenities, golf, social activities. 41+ properties available. Call (702) 707-7273.',
  keywords: 'Sun City Aliante homes for sale, Sun City Aliante North Las Vegas, 55+ community Nevada, Del Webb Aliante, active adult Las Vegas',
  alternates: { canonical: 'https://www.aliantehomesforsale.com/sun-city-aliante' },
};

export default function SunCityAliantePage() {
  return (
    <main className="sun-city-page">
      <section className="page-hero">
        <div className="hero-content">
          <h1>Sun City Aliante Homes for Sale in North Las Vegas, Nevada</h1>
          <p className="hero-subtitle">Active Adult 55+ Community by Del Webb - 41 Properties Available</p>
        </div>
      </section>

      <section className="sun-city-content">
        <div className="container">
          <h2>About Sun City Aliante</h2>
          <p>
            Sun City Aliante is a premier active adult 55+ community in North Las Vegas, Nevada, developed by Del Webb (Pulte Homes). This master-planned community features resort-style amenities, championship golf, and an active lifestyle perfect for retirees and semi-retirees.
          </p>
          <p>
            With over 7,000 homes built since 2003, Sun City Aliante is one of Nevada's most popular age-restricted communities. The community spans over 1,500 acres and offers single-story and two-story homes ranging from 1,200 to 3,000+ square feet.
          </p>

          <h2>Current Market - 41 Homes for Sale</h2>
          <div className="market-stats">
            <div className="stat">
              <strong>Price Range:</strong> $380,000 - $650,000
            </div>
            <div className="stat">
              <strong>Active Listings:</strong> 41 properties
            </div>
            <div className="stat">
              <strong>Median Price:</strong> $485,000
            </div>
            <div className="stat">
              <strong>Days on Market:</strong> 35 days average
            </div>
          </div>

          <h2>Resort-Style Amenities</h2>
          <p>Mountain Shadows Community Center - over 30,000 square feet of amenities:</p>
          <ul>
            <li>Indoor and outdoor swimming pools</li>
            <li>Full fitness center with modern equipment</li>
            <li>Aerobics and yoga studios</li>
            <li>Tennis, pickleball, and bocce ball courts</li>
            <li>Arts and crafts studios</li>
            <li>Billiards and game rooms</li>
            <li>Ballroom for events and dances</li>
            <li>Computer lab and library</li>
          </ul>

          <h2>Championship Golf Course</h2>
          <p>
            Aliante Golf Club features an 18-hole championship course designed by golf professionals. Sun City residents receive preferred tee times and membership rates. The course includes a pro shop, restaurant, and practice facilities.
          </p>

          <h2>Active Lifestyle & Social Activities</h2>
          <p>
            With over 40 clubs and interest groups, there's something for everyone:
          </p>
          <ul>
            <li>Golf and tennis clubs</li>
            <li>Arts, crafts, and pottery</li>
            <li>Dance and fitness classes</li>
            <li>Travel club with group trips</li>
            <li>Book clubs and game groups</li>
            <li>Volunteer opportunities</li>
          </ul>

          <h2>Home Styles & Floor Plans</h2>
          <p>
            Sun City Aliante offers diverse floor plans from Del Webb:
          </p>
          <ul>
            <li><strong>Single-Story Homes:</strong> 1,200 - 2,500 sq ft, 2-3 bedrooms</li>
            <li><strong>Two-Story Homes:</strong> 2,000 - 3,000+ sq ft, 3-4 bedrooms</li>
            <li><strong>Features:</strong> Open floor plans, gourmet kitchens, master suites</li>
            <li><strong>Outdoor Living:</strong> Covered patios, desert landscaping, golf cart garages</li>
          </ul>

          <h2>Low-Maintenance Living</h2>
          <p>
            HOA maintains front yard landscaping, common areas, and all amenities. Spend your time enjoying activities, not yard work. Monthly HOA fees typically range from $200-$300.
          </p>

          <h2>Location & Convenience</h2>
          <p>
            Sun City Aliante is perfectly positioned in North Las Vegas, Nevada:
          </p>
          <ul>
            <li>15 minutes to Las Vegas Strip</li>
            <li>10 minutes to Aliante Casino & Hotel</li>
            <li>Adjacent to shopping, dining, and healthcare</li>
            <li>Easy access to I-215 and I-15 freeways</li>
            <li>Close to medical facilities and pharmacies</li>
          </ul>

          <h2>Why Choose Sun City Aliante?</h2>
          <p>
            Compared to other 55+ communities in Las Vegas, Sun City Aliante offers:
          </p>
          <ul>
            <li>More affordable pricing than Summerlin and Henderson</li>
            <li>Newer homes and modern amenities</li>
            <li>Extensive resort facilities included in HOA</li>
            <li>Active social scene with year-round activities</li>
            <li>Lower property taxes than Clark County proper</li>
          </ul>

          <h2>Expert Guidance for 55+ Buyers</h2>
          <p>
            Our team specializes in Sun City Aliante and active adult communities. We help buyers:
          </p>
          <ul>
            <li>Navigate age verification requirements</li>
            <li>Understand HOA rules and amenities</li>
            <li>Find the right floor plan and location</li>
            <li>Compare resale vs. new construction options</li>
            <li>Maximize value and negotiate effectively</li>
          </ul>

          <div className="cta-section">
            <h2>Ready to Tour Sun City Aliante?</h2>
            <p>Schedule a personalized tour of Sun City Aliante and available homes</p>
            <div className="cta-buttons">
              <a href="/contact" className="cta-button primary">Schedule Sun City Tour - Call (702) 707-7273</a>
              <a href="/builders/del-webb" className="cta-button secondary">Learn About Del Webb Homes</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

