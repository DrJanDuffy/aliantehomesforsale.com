'use client';

export default function RealScoutAdvancedSearch() {
  return (
    <>
      {/* RealScout script loaded once in root layout */}
      {/* RealScout Advanced Search Styles */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        realscout-advanced-search {
          --rs-as-button-text-color: #ffffff;
          --rs-as-background-color: #ffffff;
          --rs-as-button-color: rgb(35, 93, 137);
          --rs-as-widget-width: 500px !important;
          display: block;
          margin: 2rem auto;
          max-width: 600px;
        }
      `,
        }}
      />

      {/* RealScout Advanced Search Widget */}
      <div
        className="realscout-search-container"
        dangerouslySetInnerHTML={{
          __html:
            '<realscout-advanced-search agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-advanced-search>',
        }}
      />
    </>
  );
}
