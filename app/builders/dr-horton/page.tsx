import type { Metadata } from 'next';
import NewConstructionHero from '../../components/NewConstructionHero';
import TopBuilders from '../../components/TopBuilders';
import ConstructionProcess from '../../components/ConstructionProcess';
import BuilderDetailContent from '../../components/BuilderDetailContent';
import QuickMoveInHomes from '../../components/QuickMoveInHomes';
import NewConstructionCTA from '../../components/NewConstructionCTA';

export const metadata: Metadata = {
  title: 'D.R. Horton Homes Tule Springs - Dr. Duffy #1 Premiere Agent',
  description: 'D.R. Horton new construction in Tule Springs. Dr. Duffy is #1 Premiere Agent. Average $18K+ savings.',
  alternates: { canonical: 'https://www.aliantehomesforsale.com/builders/dr-horton' },
};

export default function DrHorton() {
  return (
    <main>
      <NewConstructionHero />
      <TopBuilders />
      <ConstructionProcess />
      <BuilderDetailContent />
      <QuickMoveInHomes />
      <NewConstructionCTA />
    </main>
  );
}
