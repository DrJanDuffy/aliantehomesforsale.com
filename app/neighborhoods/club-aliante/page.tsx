import type { Metadata } from 'next';
import NeighborhoodsHero from '../../components/NeighborhoodsHero';
import CommunityAmenities from '../../components/CommunityAmenities';
import EnhancedFeaturedProperties from '../../components/EnhancedFeaturedProperties';
import NeighborhoodCards from '../../components/NeighborhoodCards';
import NeighborhoodsCTA from '../../components/NeighborhoodsCTA';

export const metadata: Metadata = {
  title: 'Club Aliante Golf Course Homes - Premier Golf Living',
  description: 'Club Aliante golf course homes. Championship golf, clubhouse amenities, stunning views. $500K-$900K.',
  alternates: { canonical: 'https://www.aliantehomesforsale.com/neighborhoods/club-aliante' },
};

export default function ClubAliante() {
  return (
    <main>
      <NeighborhoodsHero />
      <CommunityAmenities />
      <EnhancedFeaturedProperties />
      <NeighborhoodCards />
      <NeighborhoodsCTA />
    </main>
  );
}
