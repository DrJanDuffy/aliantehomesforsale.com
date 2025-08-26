// @ts-nocheck

"use client";

import { useState } from "react";

export default function SearchForm() {
  const [searchParams, setSearchParams] = useState({
    location: "",
    propertyType: "",
    minPrice: "",
    maxPrice: "",
    bedrooms: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search form submission
    console.log("Search submitted:", searchParams);
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSearchParams(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section className="property-search priority">
      <h2>Find Your Perfect Aliante Home</h2>
      <p>Search 286+ verified listings updated every 15 minutes</p>
      
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="search-grid">
          <div className="form-group">
            <label htmlFor="location">
              <h3>Neighborhood</h3>
            </label>
            <select
              id="location"
              name="location"
              value={searchParams.location}
              onChange={handleChange}
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
            <label htmlFor="propertyType">
              <h3>Property Type</h3>
            </label>
            <select
              id="propertyType"
              name="propertyType"
              value={searchParams.propertyType}
              onChange={handleChange}
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
                value={searchParams.minPrice}
                onChange={handleChange}
                aria-label="Minimum price"
              >
                <option value="">Min Price</option>
                <option value="250000">$250,000</option>
                <option value="350000">$350,000</option>
                <option value="450000">$450,000</option>
                <option value="550000">$550,000</option>
              </select>
              <select
                name="maxPrice"
                value={searchParams.maxPrice}
                onChange={handleChange}
                aria-label="Maximum price"
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
            <label htmlFor="bedrooms">
              <h3>Bedrooms</h3>
            </label>
            <select
              id="bedrooms"
              name="bedrooms"
              value={searchParams.bedrooms}
              onChange={handleChange}
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

      {/* Search Tools Coming Soon */}
      <div className="search-tools-coming-soon">
        <h3>Professional MLS Search Tools</h3>
        <p>Advanced property search and filtering tools coming soon!</p>
        <div className="tools-placeholder">
          <div className="tool-item">
            <h4>🔍 Quick Search</h4>
            <p>Simple property search by location and price</p>
          </div>
          <div className="tool-item">
            <h4>⚡ Advanced Search</h4>
            <p>Detailed filtering with MLS data</p>
          </div>
        </div>
      </div>
    </section>
  );
}
