import type { Metadata } from 'next';
import HomesForSaleHero from '../components/HomesForSaleHero';
import HomesMarketSnapshot from '../components/HomesMarketSnapshot';
import MarketReportContent from '../components/MarketReportContent';
import ContextualLinks from '../components/ContextualLinks';
import PropertyCategories from '../components/PropertyCategories';
import HomesCTA from '../components/HomesCTA';

export const metadata: Metadata = {
  title: 'Aliante Market Report - Real-Time MLS Data & Trends',
  description: 'Live Aliante market data updated every 15 minutes. Median prices, inventory levels, days on market, and market trends.',
  alternates: {
    canonical: 'https://www.aliantehomesforsale.com/market-report',
  },
};

export default function MarketReport() {
  return (
    <main>
      <HomesForSaleHero />
      <HomesMarketSnapshot />
      <MarketReportContent />
      <div className="px-4">
        <ContextualLinks variant="market" />
      </div>
      <PropertyCategories />
      <HomesCTA />
    </main>
  );
}
