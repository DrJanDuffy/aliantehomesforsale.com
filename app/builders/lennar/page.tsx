import type { Metadata } from 'next';
import NewConstructionHero from '../../components/NewConstructionHero';
import TopBuilders from '../../components/TopBuilders';
import WhyNewConstruction from '../../components/WhyNewConstruction';
import QuickMoveInHomes from '../../components/QuickMoveInHomes';
import NewConstructionCTA from '../../components/NewConstructionCTA';

export const metadata: Metadata = {
  title: 'Lennar Homes Aliante - #1 Volume Builder | Everything Included',
  description: 'Lennar new construction homes in Aliante. Smart home technology included. 45+ homes available. Up to $25K incentives.',
  alternates: { canonical: 'https://www.aliantehomesforsale.com/builders/lennar' },
};

export default function Lennar() {
  return (
    <main>
      <NewConstructionHero />
      <TopBuilders />
      <WhyNewConstruction />
      <QuickMoveInHomes />
      <NewConstructionCTA />
    </main>
  );
}
