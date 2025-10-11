'use client';

import { useEffect } from 'react';
import Script from 'next/script';

export default function RealScoutAdvancedSearch() {
  return (
    <>
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
          --rs-as-button-color: rgb(35, 93, 137);
          --rs-as-widget-width: 500px !important;
          display: block;
          margin: 2rem auto;
          max-width: 600px;
        }
      `}</style>

      {/* RealScout Advanced Search Widget */}
      <div className="realscout-search-container">
        <realscout-advanced-search agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-advanced-search>
      </div>
    </>
  );
}

