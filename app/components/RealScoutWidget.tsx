'use client';

import { useEffect, useRef } from 'react';

interface RealScoutWidgetProps {
  agentEncodedId: string;
  sortOrder?: string;
  listingStatus?: string;
  propertyTypes?: string;
  priceMin?: string;
  priceMax?: string;
}

export default function RealScoutWidget({
  agentEncodedId,
  sortOrder = 'PRICE_HIGH',
  listingStatus = 'For Sale,For Rent',
  propertyTypes = 'MF,SFR,OTHER,LAL',
  priceMin = '450000',
  priceMax = '750000'
}: RealScoutWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Check if RealScout component is already available
    if (customElements.get('realscout-office-listings')) {
      createWidget();
      return;
    }

    // Dynamically load the RealScout script
    const script = document.createElement('script');
    script.src = 'https://em.realscout.com/widgets/realscout-web-components.umd.js';
    script.type = 'module';
    script.onload = createWidget;
    document.head.appendChild(script);

    function createWidget() {
      if (!containerRef.current) return;
      
      // Clear the container
      containerRef.current.innerHTML = '';
      
      // Create the RealScout component
      const widget = document.createElement('realscout-office-listings');
      widget.setAttribute('agent-encoded-id', agentEncodedId);
      widget.setAttribute('sort-order', sortOrder);
      widget.setAttribute('listing-status', listingStatus);
      widget.setAttribute('property-types', propertyTypes);
      widget.setAttribute('price-min', priceMin);
      widget.setAttribute('price-max', priceMax);
      
      // Append to container
      containerRef.current.appendChild(widget);
    }
  }, [agentEncodedId, sortOrder, listingStatus, propertyTypes, priceMin, priceMax]);

  return (
    <div 
      ref={containerRef}
      className="realscout-widget-container"
    >
      <p>Loading RealScout listings...</p>
    </div>
  );
}
