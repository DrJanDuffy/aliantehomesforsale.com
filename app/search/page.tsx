import type { Metadata } from 'next';
import SearchForm from '../components/SearchForm';
import StructuredData from '../components/StructuredData';

export const metadata: Metadata = {
  title: 'Search Aliante Homes for Sale | Advanced Property Search',
  description: 'Search 286+ verified Aliante homes for sale with advanced filters. Find your perfect home by neighborhood, price, bedrooms, and more.',
  keywords: 'Aliante property search, homes for sale search, Aliante MLS search, advanced property filters',
  openGraph: {
    title: 'Search Aliante Homes for Sale | Advanced Property Search',
    description: 'Search 286+ verified Aliante homes for sale with advanced filters. Find your perfect home by neighborhood, price, bedrooms, and more.',
    type: 'website',
    url: 'https://aliantehomesforsale.com/search',
  },
};

export default function SearchPage() {
  return (
    <>
      <StructuredData type="NeighborhoodGuide" />
      
      {/* RealScout Widgets */}
      <script src="https://em.realscout.com/widgets/realscout-web-components.umd.js" type="module"></script>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            realscout-office-listings {
              --rs-listing-divider-color: rgb(101, 141, 172);
              width: 100%;
            }
          `,
        }}
      />
      
      <main className="search-page">
        <section className="page-hero">
          <div className="hero-content">
            <h1>Search Aliante Homes for Sale</h1>
            <p className="hero-subtitle">
              Advanced property search with 286+ verified listings updated every 15 minutes
            </p>
          </div>
        </section>

        <section className="search-section">
          <div className="container">
            <h2>Find Your Perfect Aliante Home</h2>
            <p>Use our advanced search tools to filter properties by your exact criteria</p>
            
            <SearchForm />
          </div>
        </section>

        <section className="search-tips">
          <div className="container">
            <h2>Search Tips</h2>
            <div className="tips-grid">
              <div className="tip-card">
                <h3>🎯 Start Broad</h3>
                <p>Begin with basic criteria and narrow down as you see results</p>
              </div>
              <div className="tip-card">
                <h3>📍 Location Matters</h3>
                <p>Consider different neighborhoods for better value and amenities</p>
              </div>
              <div className="tip-card">
                <h3>💰 Price Flexibility</h3>
                <p>Set a range to see more options within your budget</p>
              </div>
              <div className="tip-card">
                <h3>🏠 Property Type</h3>
                <p>Explore different property types for the best fit</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
