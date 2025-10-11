import type { Metadata } from 'next';
import NewConstructionHero from '../../components/NewConstructionHero';
import TopBuilders from '../../components/TopBuilders';
import WhyNewConstruction from '../../components/WhyNewConstruction';
import NewConstructionCTA from '../../components/NewConstructionCTA';

export const metadata: Metadata = {
  title: 'Toll Brothers Luxury Homes - Ultra-Luxury New Construction',
  description: 'Toll Brothers luxury homes near Aliante. Fortune 500 builder. $575K-$1.6M. Premium materials and design.',
  alternates: { canonical: 'https://www.aliantehomesforsale.com/builders/toll-brothers' },
};

export default function TollBrothers() {
  return (
    <main>
      <NewConstructionHero />
      <TopBuilders />
      <WhyNewConstruction />
      <NewConstructionCTA />
    </main>
  );
}
