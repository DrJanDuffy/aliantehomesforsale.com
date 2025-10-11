import type { Metadata } from 'next';
import EnhancedHero from '../components/EnhancedHero';
import EnhancedFeaturedProperties from '../components/EnhancedFeaturedProperties';
import EnhancedPropertyTypes from '../components/EnhancedPropertyTypes';
import NeighborhoodCards from '../components/NeighborhoodCards';
import HomesCTA from '../components/HomesCTA';

export const metadata: Metadata = {
  title: 'Gated Communities in Aliante - 24/7 Security & Luxury',
  description: 'Explore gated communities in Aliante with 24/7 security, resort amenities. The Prominence, Club Aliante, and more premium communities.',
  alternates: {
    canonical: 'https://www.aliantehomesforsale.com/gated-communities',
  },
};

export default function GatedCommunities() {
  return (
    <main>
      <EnhancedHero />
      <NeighborhoodCards />
      <EnhancedFeaturedProperties />
      <HomesCTA />
    </main>
  );
}
