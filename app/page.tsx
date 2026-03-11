'use client';

import { useId } from 'react';
import EnhancedHero from './components/EnhancedHero';
import EnhancedFeaturedProperties from './components/EnhancedFeaturedProperties';
import EnhancedPropertyTypes from './components/EnhancedPropertyTypes';
import EnhancedMarketInsights from './components/EnhancedMarketInsights';
import EnhancedTrustAuthority from './components/EnhancedTrustAuthority';
import AlianteFAQ from './components/AlianteFAQ';

// Enhanced Real Estate Website - Modern, High-Converting Design

export default function Home() {
  const mainContentId = useId();

  return (
    <>
      {/* RealEstateAgent + WebSite schema in root layout for every page */}
      <main id={mainContentId}>
        {/* Hero Section with Integrated Search */}
        <EnhancedHero />

        {/* Featured Properties Grid */}
        <EnhancedFeaturedProperties />

        {/* Property Types & Neighborhoods */}
        <EnhancedPropertyTypes />

        {/* Market Insights with Stats */}
        <EnhancedMarketInsights />

        {/* Trust & Authority Section */}
        <EnhancedTrustAuthority />

        {/* FAQ Section with Schema */}
        <AlianteFAQ />
      </main>
    </>
  );
}
