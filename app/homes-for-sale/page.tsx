import type { Metadata } from 'next';
import RealScoutAdvancedSearch from '../components/RealScoutAdvancedSearch';
import StructuredData from '../components/StructuredData';
import HomesForSaleHero from '../components/HomesForSaleHero';
import PropertyCategories from '../components/PropertyCategories';
import HomesMarketSnapshot from '../components/HomesMarketSnapshot';
import HomesSearchTips from '../components/HomesSearchTips';
import HomesCTA from '../components/HomesCTA';

export const metadata: Metadata = {
  title: 'Aliante Homes For Sale North Las Vegas NV - 286+ MLS Listings',
  description: 'Browse 286+ Aliante homes for sale in North Las Vegas, NV. Updated every 15 minutes from Greater Las Vegas MLS. Gated communities, Sun City 55+, golf course homes, new construction. Call (702) 707-7273.',
  keywords: 'Aliante homes for sale, North Las Vegas homes, 89084 homes for sale, Aliante real estate, gated community Las Vegas, Sun City Aliante',
  alternates: {
    canonical: 'https://www.aliantehomesforsale.com/homes-for-sale',
  },
};

export default function HomesForSale() {
  return (
    <>
      <StructuredData type="PropertyListing" />
      
      <main className="homes-for-sale-page">
        {/* Hero Section */}
        <HomesForSaleHero />

        {/* Advanced Search Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#1a365d' }}>
                Find Your Perfect Aliante Home
              </h2>
              <p className="text-lg text-gray-600">
                Search 286+ active listings updated live from MLS
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
              <RealScoutAdvancedSearch />
            </div>
          </div>
        </section>

        {/* Property Categories */}
        <PropertyCategories />

        {/* Market Snapshot */}
        <HomesMarketSnapshot />

        {/* Search Tips */}
        <HomesSearchTips />

        {/* CTA Section */}
        <HomesCTA />
      </main>
    </>
  );
}
