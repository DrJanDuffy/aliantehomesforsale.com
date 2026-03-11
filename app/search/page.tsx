import type { Metadata } from 'next';
import HomesForSaleHero from '../components/HomesForSaleHero';
import AdvancedSearchForm from '../components/AdvancedSearchForm';
import SearchPageContent from '../components/SearchPageContent';
import PropertyCategories from '../components/PropertyCategories';
import HomesSearchTips from '../components/HomesSearchTips';
import HomesCTA from '../components/HomesCTA';

export const metadata: Metadata = {
  title: 'Search Aliante Homes - Advanced MLS Search',
  description: 'Search all Aliante homes with advanced MLS filters. Updated every 15 minutes.',
  alternates: {
    canonical: 'https://www.aliantehomesforsale.com/search',
  },
};

export default function Search() {
  return (
    <main>
      <HomesForSaleHero />
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <AdvancedSearchForm />
        </div>
      </section>
      <SearchPageContent />
      <PropertyCategories />
      <HomesSearchTips />
      <HomesCTA />
    </main>
  );
}
