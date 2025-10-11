import type { Metadata } from 'next';
import NewConstructionHero from '../../components/NewConstructionHero';
import TopBuilders from '../../components/TopBuilders';
import BuilderComparison from '../../components/BuilderComparison';
import NewConstructionCTA from '../../components/NewConstructionCTA';

export const metadata: Metadata = {
  title: 'Builder Incentives Tracker - Up to $25K Savings',
  description: 'Current builder incentives in Aliante. Up to $25K in closing costs, upgrades, and rate buydowns.',
  alternates: { canonical: 'https://www.aliantehomesforsale.com/builders/incentives' },
};

export default function Incentives() {
  return (
    <main>
      <NewConstructionHero />
      <BuilderComparison />
      <TopBuilders />
      <NewConstructionCTA />
    </main>
  );
}
