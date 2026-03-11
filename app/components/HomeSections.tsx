'use client';

import { useId } from 'react';
import EnhancedHero from './EnhancedHero';
import RealScoutSearchSection from './RealScoutSearchSection';
import EnhancedFeaturedProperties from './EnhancedFeaturedProperties';
import AgentWelcomeSection from './AgentWelcomeSection';
import EnhancedPropertyTypes from './EnhancedPropertyTypes';
import EnhancedMarketInsights from './EnhancedMarketInsights';
import EnhancedTrustAuthority from './EnhancedTrustAuthority';
import HomeCTAStrip from './HomeCTAStrip';
import AlianteFAQ from './AlianteFAQ';

/** Client-only home page sections. Order matches Purist: Hero → Search → Featured → Agent welcome → Property Types → Market → Trust → CTA strip → FAQ. */
export default function HomeSections() {
  const mainContentId = useId();
  return (
    <div id={mainContentId}>
      <EnhancedHero />
      <RealScoutSearchSection />
      <EnhancedFeaturedProperties />
      <AgentWelcomeSection />
      <EnhancedPropertyTypes />
      <EnhancedMarketInsights />
      <EnhancedTrustAuthority />
      <HomeCTAStrip />
      <AlianteFAQ />
    </div>
  );
}
