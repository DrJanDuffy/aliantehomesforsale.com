import type { Metadata } from 'next';
import NeighborhoodsHero from '../../components/NeighborhoodsHero';
import CommunityAmenities from '../../components/CommunityAmenities';
import SunCityContent from '../../components/SunCityContent';
import EnhancedFeaturedProperties from '../../components/EnhancedFeaturedProperties';
import NeighborhoodCards from '../../components/NeighborhoodCards';
import NeighborhoodsCTA from '../../components/NeighborhoodsCTA';

export const metadata: Metadata = {
  title: 'Sun City Aliante 55+ - Active Adult Community',
  description:
    'Sun City Aliante active adult 55+ community. Resort amenities, golf, social activities. $380K-$650K.',
  alternates: { canonical: '/neighborhoods/sun-city' },
};

export default function SunCity() {
  return (
    <main>
      <NeighborhoodsHero />
      <CommunityAmenities />
      <SunCityContent />
      <EnhancedFeaturedProperties />
      <NeighborhoodCards />
      <NeighborhoodsCTA />
    </main>
  );
}
