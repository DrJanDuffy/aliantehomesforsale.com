import type { Metadata } from 'next';
import StructuredData from '../components/StructuredData';
import NeighborhoodsHero from '../components/NeighborhoodsHero';
import NeighborhoodCards from '../components/NeighborhoodCards';
import CommunityAmenities from '../components/CommunityAmenities';
import NeighborhoodComparison from '../components/NeighborhoodComparison';
import NeighborhoodsCTA from '../components/NeighborhoodsCTA';

export const metadata: Metadata = {
  title: 'Aliante Neighborhoods Guide | North Las Vegas Communities',
  description: 'Explore Aliante neighborhoods: The Prominence, Desert Willows, Club Aliante, The Paseos. Find your perfect community with amenities, schools, and lifestyle.',
  alternates: {
    canonical: 'https://www.aliantehomesforsale.com/neighborhoods',
  },
};

export default function Neighborhoods() {
  return (
    <>
      <StructuredData type="NeighborhoodGuide" />
      
      <main className="neighborhoods-page">
        {/* Hero Section */}
        <NeighborhoodsHero />

        {/* Neighborhood Cards */}
        <NeighborhoodCards />

        {/* Community Amenities */}
        <CommunityAmenities />

        {/* Neighborhood Comparison Table */}
        <NeighborhoodComparison />

        {/* CTA Section */}
        <NeighborhoodsCTA />
      </main>
    </>
  );
}
