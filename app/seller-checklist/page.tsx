import type { Metadata } from 'next';
import AboutHero from '../components/AboutHero';
import ConstructionProcess from '../components/ConstructionProcess';
import AboutExpertise from '../components/AboutExpertise';
import AboutCTA from '../components/AboutCTA';

export const metadata: Metadata = {
  title: 'Home Selling Checklist Aliante - Maximize Your Sale Price',
  description: 'Complete checklist for selling your Aliante home. Expert guidance to maximize sale price and minimize time on market.',
  alternates: {
    canonical: 'https://www.aliantehomesforsale.com/seller-checklist',
  },
};

export default function SellerChecklist() {
  return (
    <main>
      <AboutHero />
      <ConstructionProcess />
      <AboutExpertise />
      <AboutCTA />
    </main>
  );
}
