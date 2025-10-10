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

interface PerformanceMetrics {
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  domContentLoaded: number;
  loadComplete: number;
}

export default function PerformanceMonitor() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const metrics: PerformanceMetrics = {
      lcp: 0,
      fid: 0,
      cls: 0,
      ttfb: 0,
      domContentLoaded: 0,
      loadComplete: 0,
    };

    const handlePerformanceEntry = (entry: PerformanceEntry) => {
      switch (entry.entryType) {
        case 'largest-contentful-paint':
          metrics.lcp = entry.startTime;
          // Send to analytics instead of console
          if (window.gtag) {
            window.gtag('event', 'web_vitals', {
              event_category: 'Web Vitals',
              event_label: 'LCP',
              value: Math.round(entry.startTime),
            });
          }
          break;
        case 'first-input': {
          const firstInputEntry = entry as PerformanceEventTiming;
          metrics.fid = firstInputEntry.processingStart - firstInputEntry.startTime;
          if (window.gtag) {
            window.gtag('event', 'web_vitals', {
              event_category: 'Web Vitals',
              event_label: 'FID',
              value: Math.round(metrics.fid),
            });
          }
          break;
        }
        case 'layout-shift': {
          const layoutShiftEntry = entry as LayoutShift;
          metrics.cls += layoutShiftEntry.value;
          if (window.gtag) {
            window.gtag('event', 'web_vitals', {
              event_category: 'Web Vitals',
              event_label: 'CLS',
              value: Math.round(metrics.cls * 1000) / 1000,
            });
          }
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
          metrics.ttfb = navEntry.responseStart - navEntry.requestStart;
          metrics.domContentLoaded = navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart;
          metrics.loadComplete = navEntry.loadEventEnd - navEntry.loadEventStart;
          
          // Send navigation metrics to analytics
          if (window.gtag) {
            window.gtag('event', 'navigation_timing', {
              event_category: 'Performance',
              ttfb: Math.round(metrics.ttfb),
              dom_content_loaded: Math.round(metrics.domContentLoaded),
              load_complete: Math.round(metrics.loadComplete),
            });
          }
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
