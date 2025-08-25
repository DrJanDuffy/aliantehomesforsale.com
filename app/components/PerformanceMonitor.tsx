'use client';

import { useEffect } from 'react';

// Type definitions for performance metrics
interface LayoutShift extends PerformanceEntry {
  value: number;
  sources: Array<{
    node: Node;
    currentRect: DOMRectReadOnly;
    previousRect: DOMRectReadOnly;
  }>;
}

export default function PerformanceMonitor() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handlePerformanceEntry = (entry: PerformanceEntry) => {
      switch (entry.entryType) {
        case 'largest-contentful-paint':
          console.log('LCP:', entry.startTime);
          break;
        case 'first-input': {
          const firstInputEntry = entry as PerformanceEventTiming;
          console.log('FID:', firstInputEntry.processingStart - firstInputEntry.startTime);
          break;
        }
        case 'layout-shift': {
          const layoutShiftEntry = entry as LayoutShift;
          console.log('CLS:', layoutShiftEntry.value);
          break;
        }
      }
    };

    const handleNavigationTiming = () => {
      if ('navigation' in performance) {
        const navEntry = performance.getEntriesByType(
          'navigation'
        )[0] as PerformanceNavigationTiming;
        if (navEntry) {
          console.log('TTFB:', navEntry.responseStart - navEntry.requestStart);
          console.log(
            'DOM Content Loaded:',
            navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart
          );
          console.log('Load Complete:', navEntry.loadEventEnd - navEntry.loadEventStart);
        }
      }
    };

    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach(handlePerformanceEntry);
    });

    observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
    handleNavigationTiming();

    return () => observer.disconnect();
  }, []);

  return null;
}
