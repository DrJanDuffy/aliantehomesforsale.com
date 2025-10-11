import type { Metadata } from 'next';
import NewConstructionHero from '../../components/NewConstructionHero';
import TopBuilders from '../../components/TopBuilders';
import CommunityAmenities from '../../components/CommunityAmenities';
import SunCityContent from '../../components/SunCityContent';
import NewConstructionCTA from '../../components/NewConstructionCTA';

export const metadata: Metadata = {
  title: 'Del Webb Sun City Aliante - Active Adult 55+ Homes',
  description: 'Del Webb homes in Sun City Aliante. Active adult 55+ community. Resort amenities, golf courses. 25+ homes available.',
  alternates: { canonical: 'https://www.aliantehomesforsale.com/builders/del-webb' },
};

export default function DelWebb() {
  return (
    <main>
      <NewConstructionHero />
      <TopBuilders />
      <SunCityContent />
      <CommunityAmenities />
      <NewConstructionCTA />
    </main>
  );
}
