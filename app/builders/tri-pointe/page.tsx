import type { Metadata } from 'next';
import NewConstructionHero from '../../components/NewConstructionHero';
import TopBuilders from '../../components/TopBuilders';
import WhyNewConstruction from '../../components/WhyNewConstruction';
import NewConstructionCTA from '../../components/NewConstructionCTA';

export const metadata: Metadata = {
  title: 'Tri Pointe Homes Aliante - Luxury New Construction',
  description: 'Tri Pointe luxury homes in Aliante. Premium finishes, superior craftsmanship. 18+ homes available.',
  alternates: { canonical: 'https://www.aliantehomesforsale.com/builders/tri-pointe' },
};

export default function TriPointe() {
  return (
    <main>
      <NewConstructionHero />
      <TopBuilders />
      <WhyNewConstruction />
      <NewConstructionCTA />
    </main>
  );
}
