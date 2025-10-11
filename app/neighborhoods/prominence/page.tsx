import type { Metadata } from 'next';
import NeighborhoodsHero from '../../components/NeighborhoodsHero';
import NeighborhoodCards from '../../components/NeighborhoodCards';
import CommunityAmenities from '../../components/CommunityAmenities';
import NeighborhoodDetailContent from '../../components/NeighborhoodDetailContent';
import EnhancedFeaturedProperties from '../../components/EnhancedFeaturedProperties';
import NeighborhoodsCTA from '../../components/NeighborhoodsCTA';

export const metadata: Metadata = {
  title: 'The Prominence Aliante - Luxury Gated Community',
  description: 'The Prominence luxury gated community in Aliante. Golf course views, premium amenities. $600K-$1.2M+.',
  alternates: { canonical: 'https://www.aliantehomesforsale.com/neighborhoods/prominence' },
};

export default function Prominence() {
  return (
    <main>
      <NeighborhoodsHero />
      <EnhancedFeaturedProperties />
      <CommunityAmenities />
      <NeighborhoodDetailContent />
      <NeighborhoodCards />
      <NeighborhoodsCTA />
    </main>
  );
}
