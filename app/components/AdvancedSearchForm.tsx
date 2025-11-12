'use client';

import Script from 'next/script';

export default function AdvancedSearchForm() {
  return (
    <div className="bg-white rounded-xl shadow-xl p-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="border-b pb-6 mb-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1a365d' }}>
          Advanced Property Search
        </h2>
        <p className="text-xl text-gray-600">
          Find your perfect Aliante home with detailed filters
        </p>
      </div>

      {/* Load RealScout Web Components Script */}
      <Script
        src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
        type="module"
        strategy="afterInteractive"
      />

      {/* RealScout Advanced Search Styles */}
      <style jsx global>{`
        realscout-advanced-search {
          --rs-as-button-text-color: #ffffff;
          --rs-as-background-color: #ffffff;
          --rs-as-button-color: #ed8936;
          --rs-as-widget-width: 100% !important;
          display: block;
          margin: 0 auto;
        }
      `}</style>

      {/* RealScout Advanced Search Widget */}
      <div
        className="realscout-search-container"
        dangerouslySetInnerHTML={{
          __html: '<realscout-advanced-search agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-advanced-search>'
        }}
      />
    </div>
  );
}
