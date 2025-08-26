'use client';

import { useId } from 'react';

export default function PropertyTypes() {
  const neighborhoodsHeadingId = useId();
  const neighborhoodsSectionId = useId();

  const filterProperties = (type: string) => {
    // Would normally filter properties by type
    const typeInfo = {
      'gated': {
        name: 'Gated Communities',
        count: 86,
        priceRange: '$450,000 - $800,000'
      },
      'golf': {
        name: 'Golf Course Living',
        count: 32,
        priceRange: '$550,000 - $1,200,000'
      },
      'sun-city': {
        name: 'Sun City Aliante (55+)',
        count: 41,
        priceRange: '$380,000 - $650,000'
      },
      'new-construction': {
        name: 'New Construction',
        count: 67,
        priceRange: '$420,000 - $850,000'
      },
      'family': {
        name: 'Family Neighborhoods',
        count: 90,
        priceRange: '$320,000 - $580,000'
      }
    };

    const info = typeInfo[type as keyof typeof typeInfo];
    if (info) {
      alert(`This would filter to show ${info.count} ${info.name} properties in the price range ${info.priceRange}.`);
    }
  };

  return (
    <section className="property-types" id={neighborhoodsSectionId} aria-labelledby={neighborhoodsHeadingId}>
      <div className="container">
        <h2 id={neighborhoodsHeadingId}>Aliante Housing Communities & Neighborhoods</h2>
        <p style={{ textAlign: 'center', marginBottom: '2rem', color: '#666', fontSize: '1.1rem' }}>
          Discover the perfect community for your lifestyle and budget
        </p>
        
        <div className="types-grid">
          <div className="property-type">
            <h3>🏰 Gated Communities</h3>
            <p><strong>86 properties available</strong><br />Price range: $450,000 - $800,000</p>
            <ul>
              <li>24/7 security with controlled gate access</li>
              <li>Private amenities including pools and clubhouses</li>
              <li>Premium landscaping and HOA maintenance</li>
              <li>Higher property value retention rates</li>
              <li>Family-friendly with playgrounds and parks</li>
            </ul>
            <button type="button" className="view-property" onClick={() => filterProperties('gated')}>
              Explore 86 Gated Homes →
            </button>
          </div>
          
          <div className="property-type">
            <h3>⛳ Golf Course Living</h3>
            <p><strong>32 properties available</strong><br />Price range: $550,000 - $1,200,000</p>
            <ul>
              <li>Direct access to Club Aliante 18-hole course</li>
              <li>Fairway, mountain, and city skyline views</li>
              <li>Golf cart storage and cart path access</li>
              <li>Resort-style amenities and dining</li>
              <li>Premium lot locations available</li>
            </ul>
            <button type="button" className="view-property" onClick={() => filterProperties('golf')}>
              Explore 32 Golf Homes →
            </button>
          </div>
          
          <div className="property-type">
            <h3>🌞 Sun City Aliante (55+)</h3>
            <p><strong>41 properties available</strong><br />Price range: $380,000 - $650,000</p>
            <ul>
              <li>Age-qualified active adult community (55+)</li>
              <li>Resort-style clubhouse with fitness center</li>
              <li>Maintenance-free exterior and landscaping</li>
              <li>Social clubs, classes, and organized activities</li>
              <li>Golf cart accessible community design</li>
            </ul>
            <button type="button" className="view-property" onClick={() => filterProperties('sun-city')}>
              Explore 41 Active Adult Homes →
            </button>
          </div>
          
          <div className="property-type">
            <h3>🏗️ New Construction</h3>
            <p><strong>67 properties available</strong><br />Price range: $420,000 - $850,000</p>
            <ul>
              <li>Brand new homes from top-rated builders</li>
              <li>Latest energy-efficient construction standards</li>
              <li>Smart home technology packages available</li>
              <li>Customization options and lot selection</li>
              <li>Builder warranties and quality guarantees</li>
            </ul>
            <button type="button" className="view-property" onClick={() => filterProperties('new-construction')}>
              Explore 67 New Homes →
            </button>
          </div>
          
          <div className="property-type">
            <h3>🏡 Family Neighborhoods</h3>
            <p><strong>90 properties available</strong><br />Price range: $320,000 - $580,000</p>
            <ul>
              <li>Top-rated Clark County School District schools</li>
              <li>Family-friendly parks and playgrounds</li>
              <li>Safe sidewalks and well-lit streets</li>
              <li>Community events and youth programs</li>
              <li>Close to shopping and medical facilities</li>
            </ul>
            <button type="button" className="view-property" onClick={() => filterProperties('family')}>
              Explore 90 Family Homes →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
