declare global {
  namespace JSX {
    interface IntrinsicElements {
      'realscout-simple-search': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        'agent-encoded-id'?: string;
      };
      'realscout-advanced-search': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        'agent-encoded-id'?: string;
      };
      'realscout-office-listings': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        'agent-encoded-id'?: string;
        'sort-order'?: string;
        'listing-status'?: string;
        'property-types'?: string;
        'price-min'?: string;
        'price-max'?: string;
      };
      'realscout-home-value': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        'agent-encoded-id'?: string;
      };
    }
  }
}

export {};

'use client';

import { useId, useState } from 'react';

interface SearchFormProps {
  priority?: boolean;
}

export default function SearchForm({ priority = false }: SearchFormProps) {
  const locationId = useId();
  const propertyTypeId = useId();
  const bedroomsId = useId();

  const [searchParams, setSearchParams] = useState({
    minPrice: '',
    maxPrice: '',
    propertyType: '',
    bedrooms: '',
    location: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Analytics tracking for Core Web Vitals
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'search', {
        search_term: JSON.stringify(searchParams),
        event_category: 'property_search'
      });
    }
  };

  return (
    <section className={`property-search ${priority ? 'priority' : ''}`}>
      <h2>Find Your Perfect Aliante Home</h2>
      <p>Search 286+ verified listings updated every 15 minutes</p>

      <form className="search-form" onSubmit={handleSubmit}>
        <div className="search-grid">
          <div className="form-group">
            <label htmlFor={locationId}>
              <h3>Neighborhood</h3>
            </label>
            <select
              id={locationId}
              name="location"
              value={searchParams.location}
              onChange={(e) => setSearchParams({...searchParams, location: e.target.value})}
            >
              <option value="">All Aliante</option>
              <option value="gated">Gated Communities</option>
              <option value="golf">Golf Course Homes</option>
              <option value="sun-city">Sun City Aliante</option>
              <option value="prominence">The Prominence</option>
              <option value="desert-willows">Desert Willows</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor={propertyTypeId}>
              <h3>Property Type</h3>
            </label>
            <select
              id={propertyTypeId}
              name="propertyType"
              value={searchParams.propertyType}
              onChange={(e) => setSearchParams({...searchParams, propertyType: e.target.value})}
            >
              <option value="">All Types</option>
              <option value="single-family">Single Family</option>
              <option value="townhome">Townhome</option>
              <option value="condo">Condo</option>
              <option value="luxury">Luxury ($600K+)</option>
            </select>
          </div>

          <div className="form-group">
            <h3>Price Range</h3>
            <div className="price-inputs">
              <select
                name="minPrice"
                aria-label="Minimum price"
                value={searchParams.minPrice}
                onChange={(e) => setSearchParams({...searchParams, minPrice: e.target.value})}
              >
                <option value="">Min Price</option>
                <option value="250000">$250,000</option>
                <option value="350000">$350,000</option>
                <option value="450000">$450,000</option>
                <option value="550000">$550,000</option>
              </select>
              <select
                name="maxPrice"
                aria-label="Maximum price"
                value={searchParams.maxPrice}
                onChange={(e) => setSearchParams({...searchParams, maxPrice: e.target.value})}
              >
                <option value="">Max Price</option>
                <option value="400000">$400,000</option>
                <option value="500000">$500,000</option>
                <option value="600000">$600,000</option>
                <option value="800000">$800,000+</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor={bedroomsId}>
              <h3>Bedrooms</h3>
            </label>
            <select
              id={bedroomsId}
              name="bedrooms"
              value={searchParams.bedrooms}
              onChange={(e) => setSearchParams({...searchParams, bedrooms: e.target.value})}
            >
              <option value="">Any</option>
              <option value="2">2+ Beds</option>
              <option value="3">3+ Beds</option>
              <option value="4">4+ Beds</option>
              <option value="5">5+ Beds</option>
            </select>
          </div>
        </div>

        <button type="submit" className="search-button">
          Search 286+ Properties
        </button>

        <p className="search-note">
          Get instant email alerts for new listings matching your criteria
        </p>
      </form>

      {/* RealScout Search Widgets */}
      <div className="realscout-search-widgets">
        <h3>Professional MLS Search Tools</h3>
        
        {/* Simple Search Widget */}
        <div className="realscout-widget-section">
          <h4>Quick Search</h4>
          <div className="realscout-container">
            <realscout-simple-search agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-simple-search>
          </div>
        </div>

        {/* Advanced Search Widget */}
        <div className="realscout-widget-section">
          <h4>Advanced Search</h4>
          <div className="realscout-container">
            <realscout-advanced-search agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-advanced-search>
          </div>
        </div>
      </div>
    </section>
  );
}
