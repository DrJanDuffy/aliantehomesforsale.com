import type { Metadata } from 'next';
import NewConstructionHero from '../components/NewConstructionHero';
import TopBuilders from '../components/TopBuilders';
import BuilderComparison from '../components/BuilderComparison';
import NewConstructionCTA from '../components/NewConstructionCTA';

export const metadata: Metadata = {
  title: 'New Construction Builders in Aliante - Compare All Builders',
  description: 'Compare all new construction builders in Aliante: Lennar, D.R. Horton, Tri Pointe, Del Webb. Incentives, floor plans, and expert guidance.',
  alternates: {
    canonical: 'https://www.aliantehomesforsale.com/builders',
  },
};

export default function Builders() {
  return (
    <main className="builders-page">
      <NewConstructionHero />
      <TopBuilders />
      <BuilderComparison />
      <NewConstructionCTA />
    </main>
  );
}
