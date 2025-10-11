import type { Metadata } from 'next';
import NewConstructionHero from '../components/NewConstructionHero';
import TopBuilders from '../components/TopBuilders';
import WhyNewConstruction from '../components/WhyNewConstruction';
import ConstructionProcess from '../components/ConstructionProcess';
import QuickMoveInHomes from '../components/QuickMoveInHomes';
import BuilderComparison from '../components/BuilderComparison';
import WhyWorkWithUs from '../components/WhyWorkWithUs';
import NewConstructionFAQ from '../components/NewConstructionFAQ';
import NewConstructionCTA from '../components/NewConstructionCTA';

export const metadata: Metadata = {
  title: 'New Construction Homes Aliante North Las Vegas NV | Builder Incentives',
  description: 'Browse 95+ new construction homes in North Las Vegas from Lennar, D.R. Horton, Toll Brothers, Tri Pointe, Del Webb. Luxury to affordable. Builder incentives up to $25K. Call (702) 707-7273.',
  keywords: 'new construction Aliante, new homes North Las Vegas, Lennar homes, DR Horton, builder incentives, new construction Las Vegas',
  alternates: { canonical: 'https://www.aliantehomesforsale.com/new-construction' },
};

export default function NewConstruction() {
  return (
    <main className="new-construction-page">
      {/* Hero Section with Filters */}
      <NewConstructionHero />

      {/* Top Builders Showcase */}
      <TopBuilders />

      {/* Why Build New Benefits */}
      <WhyNewConstruction />

      {/* Construction Process Steps */}
      <ConstructionProcess />

      {/* Quick Move-In Homes */}
      <QuickMoveInHomes />

      {/* Builder Comparison Table */}
      <BuilderComparison />

      {/* Why Work With Us */}
      <WhyWorkWithUs />

      {/* FAQ Section */}
      <NewConstructionFAQ />

      {/* Final CTA */}
      <NewConstructionCTA />
    </main>
  );
}
