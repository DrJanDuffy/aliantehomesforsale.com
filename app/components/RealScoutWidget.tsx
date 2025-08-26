'use client';

import { useEffect, useRef, useState } from 'react';

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
  const [status, setStatus] = useState<'loading' | 'script-loading' | 'script-loaded' | 'widget-created' | 'error'>('loading');
  const [error, setError] = useState<string>('');

  useEffect(() => {
    if (!containerRef.current) return;

    console.log('🔍 RealScoutWidget: Starting initialization...');
    setStatus('script-loading');

    // Check if RealScout component is already available
    if (customElements.get('realscout-office-listings')) {
      console.log('✅ RealScoutWidget: Component already available');
      setStatus('script-loaded');
      createWidget();
      return;
    }

    // Check if script is already in the document
    const existingScript = document.querySelector('script[src*="realscout-web-components.umd.js"]');
    if (existingScript) {
      console.log('📜 RealScoutWidget: Script already exists, waiting for load...');
      // Wait a bit for the script to load
      setTimeout(() => {
        if (customElements.get('realscout-office-listings')) {
          setStatus('script-loaded');
          createWidget();
        } else {
          setError('Script exists but component not registered');
          setStatus('error');
        }
      }, 2000);
      return;
    }

    console.log('📥 RealScoutWidget: Loading RealScout script...');

    // Helper function to load script
    function loadScript() {
      // Try multiple loading strategies
      const strategies: Array<() => Promise<void>> = [
        // Strategy 3a: Load as regular script
        () => {
          return new Promise<void>((resolve, reject) => {
            const script = document.createElement('script');
            script.src = 'https://em.realscout.com/widgets/realscout-web-components.umd.js';
            script.async = true;
            
            script.onload = () => {
              console.log('✅ RealScoutWidget: Regular script loaded');
              resolve();
            };
            
            script.onerror = () => {
              reject(new Error('Regular script failed'));
            };
            
            document.head.appendChild(script);
          });
        },
        
        // Strategy 3b: Load as module
        () => {
          return new Promise<void>((resolve, reject) => {
            const script = document.createElement('script');
            script.src = 'https://em.realscout.com/widgets/realscout-web-components.umd.js';
            script.type = 'module';
            script.async = true;
            
            script.onload = () => {
              console.log('✅ RealScoutWidget: Module script loaded');
              resolve();
            };
            
            script.onerror = () => {
              reject(new Error('Module script failed'));
            };
            
            document.head.appendChild(script);
          });
        },
        
        // Strategy 3c: Load with defer
        () => {
          return new Promise<void>((resolve, reject) => {
            const script = document.createElement('script');
            script.src = 'https://em.realscout.com/widgets/realscout-web-components.umd.js';
            script.defer = true;
            
            script.onload = () => {
              console.log('✅ RealScoutWidget: Defer script loaded');
              resolve();
            };
            
            script.onerror = () => {
              reject(new Error('Defer script failed'));
            };
            
            document.head.appendChild(script);
          });
        }
      ];

      // Attempt to load the script using the first strategy
      const attempt = strategies.shift();
      if (attempt) {
        attempt()
          .then(() => {
            console.log('✅ RealScoutWidget: Script loaded successfully via strategy');
            // Wait a bit for the component to register
            setTimeout(() => {
              if (customElements.get('realscout-office-listings')) {
                setStatus('script-loaded');
                createWidget();
              } else {
                setError('Script loaded but component not registered');
                setStatus('error');
              }
            }, 3000);
          })
          .catch((err) => {
            console.error('❌ RealScoutWidget: Script failed to load via strategy', err);
            setError('Failed to load RealScout script');
            setStatus('error');
          });
      } else {
        setError('No script loading strategies available');
        setStatus('error');
      }
    }

    loadScript();

    function createWidget() {
      if (!containerRef.current) return;
      
      console.log('🏗️ RealScoutWidget: Creating widget element...');
      
      // Clear the container
      containerRef.current.innerHTML = '';
      
      try {
        // Create the RealScout component
        const widget = document.createElement('realscout-office-listings');
        
        // Set all attributes
        widget.setAttribute('agent-encoded-id', agentEncodedId);
        widget.setAttribute('sort-order', sortOrder);
        widget.setAttribute('listing-status', listingStatus);
        widget.setAttribute('property-types', propertyTypes);
        widget.setAttribute('price-min', priceMin);
        widget.setAttribute('price-max', priceMax);
        
        // Add some basic styling to ensure visibility
        widget.style.cssText = `
          width: 100% !important;
          min-height: 400px !important;
          display: block !important;
          border: 2px solid #3A8DDE !important;
          border-radius: 8px !important;
          padding: 20px !important;
          background-color: #f8f9fa !important;
          margin: 0 !important;
          overflow: visible !important;
        `;
        
        console.log('📋 RealScoutWidget: Widget created with attributes:', {
          'agent-encoded-id': agentEncodedId,
          'sort-order': sortOrder,
          'listing-status': listingStatus,
          'property-types': propertyTypes,
          'price-min': priceMin,
          'price-max': priceMax
        });
        
        // Append to container
        containerRef.current.appendChild(widget);
        
        console.log('✅ RealScoutWidget: Widget appended to container');
        setStatus('widget-created');
        
        // Verify widget is visible
        setTimeout(() => {
          if (containerRef.current) {
            const widgetElement = containerRef.current.querySelector('realscout-office-listings') as HTMLElement;
            if (widgetElement) {
              console.log('🔍 RealScoutWidget: Widget dimensions:', {
                offsetWidth: widgetElement.offsetWidth,
                offsetHeight: widgetElement.offsetHeight,
                clientWidth: widgetElement.clientWidth,
                clientHeight: widgetElement.clientHeight,
                computedStyle: window.getComputedStyle(widgetElement).display
              });
              
              // Check if widget is actually visible
              if (widgetElement.offsetWidth === 0 || widgetElement.offsetHeight === 0) {
                console.warn('⚠️ RealScoutWidget: Widget has zero dimensions - might be hidden');
                setError('Widget created but appears to be hidden');
              }
            }
          }
        }, 2000);
        
      } catch (err) {
        console.error('❌ RealScoutWidget: Error creating widget:', err);
        setError(`Error creating widget: ${err}`);
        setStatus('error');
      }
    }
  }, [agentEncodedId, sortOrder, listingStatus, propertyTypes, priceMin, priceMax]);

  return (
    <div 
      ref={containerRef}
      className="realscout-widget-container"
      style={{
        marginTop: '2rem',
        padding: '1.5rem',
        background: 'rgba(255, 255, 255, 0.95)',
        borderRadius: '12px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        border: '2px solid #3A8DDE',
        minHeight: '400px',
        position: 'relative'
      }}
    >
      {status === 'loading' && (
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <h3>🔄 Initializing RealScout Widget...</h3>
        </div>
      )}
      
      {status === 'script-loading' && (
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <h3>📥 Loading RealScout Script...</h3>
          <p>Please wait while we load the property listings...</p>
        </div>
      )}
      
      {status === 'script-loaded' && (
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <h3>🏗️ Creating Widget...</h3>
          <p>Script loaded, creating property listings widget...</p>
        </div>
      )}
      
      {status === 'widget-created' && (
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <h3>✅ Widget Created!</h3>
          <p>RealScout widget has been created. If you don't see listings, check the browser console for details.</p>
        </div>
      )}
      
      {status === 'error' && (
        <div style={{ textAlign: 'center', padding: '20px', color: '#dc3545' }}>
          <h3>❌ Error Loading Widget</h3>
          <p>{error}</p>
          <p>Please check the browser console for more details.</p>
          <button 
            onClick={() => window.location.reload()} 
            style={{
              padding: '10px 20px',
              backgroundColor: '#3A8DDE',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            Reload Page
          </button>
        </div>
      )}
    </div>
  );
}
