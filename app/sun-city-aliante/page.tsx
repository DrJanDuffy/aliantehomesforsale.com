import type { Metadata } from 'next';
import NeighborhoodsHero from '../components/NeighborhoodsHero';
import SunCityContent from '../components/SunCityContent';
import CommunityAmenities from '../components/CommunityAmenities';
import EnhancedFeaturedProperties from '../components/EnhancedFeaturedProperties';
import NeighborhoodCards from '../components/NeighborhoodCards';
import NeighborhoodsCTA from '../components/NeighborhoodsCTA';

export const metadata: Metadata = {
  title: 'Sun City Aliante 55+ Community - Active Adult Living',
  description: 'Sun City Aliante active adult 55+ community. Resort-style amenities, golf courses, social activities.',
  alternates: {
    canonical: 'https://www.aliantehomesforsale.com/sun-city-aliante',
  },
};

export default function SunCityAliante() {
  return (
    <main>
      <NeighborhoodsHero />
      <SunCityContent />
      <CommunityAmenities />
      <EnhancedFeaturedProperties />
      <NeighborhoodCards />
      <NeighborhoodsCTA />
    </main>
  );
}
