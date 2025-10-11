'use client';

import { useId } from 'react';
import StructuredData from './components/StructuredData';
import RealScoutAdvancedSearch from './components/RealScoutAdvancedSearch';
import FeaturedProperties from './components/FeaturedProperties';
import PropertyTypes from './components/PropertyTypes';
import MarketInsights from './components/MarketInsights';
import TrustAuthority from './components/TrustAuthority';

// Force Vercel rebuild from main branch - Enhanced Real Estate Website Implementation

export default function Home() {
  const heroHeadingId = useId();
  const mainContentId = useId();

  return (
    <>
      <StructuredData type="RealEstateAgent" />

      {/* Additional structured data for homepage */}
      <StructuredData type="WebSite" />

      <main id={mainContentId}>
        {/* Hero Section */}
        <section className="hero" aria-labelledby={heroHeadingId}>
          <div className="hero-content">
            <h1 id={heroHeadingId}>Aliante North Las Vegas Real Estate & Homes For Sale</h1>
            <p className="hero-subtitle">286+ MLS listings updated every 15 minutes • Gated communities • Sun City 55+ • New construction • Expert local guidance since 2018</p>

            <RealScoutAdvancedSearch />
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
