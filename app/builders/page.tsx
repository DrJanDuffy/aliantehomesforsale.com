import type { Metadata } from 'next';
import NewConstructionHero from '../components/NewConstructionHero';
import BuildersIntro from '../components/BuildersIntro';
import TopBuilders from '../components/TopBuilders';
import BuilderAdvantages from '../components/BuilderAdvantages';
import BuilderComparison from '../components/BuilderComparison';
import BuilderIncentivesInfo from '../components/BuilderIncentivesInfo';
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
      <BuildersIntro />
      <TopBuilders />
      <BuilderAdvantages />
      <BuilderComparison />
      <BuilderIncentivesInfo />
      <NewConstructionCTA />
    </main>
  );
}
