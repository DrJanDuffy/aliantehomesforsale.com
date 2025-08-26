'use client';

import { useId } from 'react';
import StructuredData from './components/StructuredData';
import PropertySearch from './components/PropertySearch';
import FeaturedProperties from './components/FeaturedProperties';
import PropertyTypes from './components/PropertyTypes';
import MarketInsights from './components/MarketInsights';
import TrustAuthority from './components/TrustAuthority';

// Force Vercel rebuild - Enhanced Real Estate Website Implementation

export default function Home() {
  const heroHeadingId = useId();
  
  return (
    <>
      <StructuredData type="RealEstateAgent" />
      
      {/* Additional structured data for homepage */}
      <StructuredData type="WebSite" />

      <main>
        {/* Hero Section */}
        <section className="hero" aria-labelledby={heroHeadingId}>
          <div className="hero-content">
            <h1 id={heroHeadingId}>Find Your Perfect Aliante Home with Local Experts</h1>
            <p className="hero-subtitle">286+ verified MLS listings • Updated every 15 minutes • Free market analysis & buyer consultation</p>
            
            <PropertySearch />
          </div>
        </section>

        {/* Featured Properties Section */}
        <FeaturedProperties />

        {/* Property Types & Neighborhoods Section */}
        <PropertyTypes />

        {/* Market Insights Section */}
        <MarketInsights />

        {/* Trust & Authority Section */}
        <TrustAuthority />
      </main>
    </>
  );
}
