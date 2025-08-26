// Next.js Optimization Utilities

// Next.js Optimization Utilities

// Lazy loading with error boundary
export function createLazyComponent<T>(importFunc: () => Promise<{ default: T }>) {
  return function LazyWrapper() {
    // This function returns a promise that resolves to the component
    return importFunc();
  };
}

// Dynamic imports with preloading
export function preloadComponent<T>(importFunc: () => Promise<{ default: T }>) {
  return () => {
    const promise = importFunc();
    promise.then(() => {
      // Component is now preloaded
      console.log('Component preloaded successfully');
    });
    return promise;
  };
}

// Image optimization utilities
export const imageOptimization = {
  // Generate responsive image sizes
  getResponsiveSizes: (width: number, height: number) => {
    const aspectRatio = width / height;
    return {
      sm: { width: 640, height: Math.round(640 / aspectRatio) },
      md: { width: 768, height: Math.round(768 / aspectRatio) },
      lg: { width: 1024, height: Math.round(1024 / aspectRatio) },
      xl: { width: 1280, height: Math.round(1280 / aspectRatio) },
      '2xl': { width: 1536, height: Math.round(1536 / aspectRatio) },
    };
  },

  // Generate srcSet for responsive images
  generateSrcSet: (src: string, sizes: Record<string, { width: number; height: number }>) => {
    return Object.entries(sizes)
      .map((entry) => {
        const dimensions = entry[1];
        const url = `${src}?w=${dimensions.width}&h=${dimensions.height}`;
        return `${url} ${dimensions.width}w`;
      })
      .join(', ');
  },
};

// Performance monitoring utilities
export const performanceUtils = {
  // Measure function execution time
  measureExecution: <T>(fn: () => T, name: string): T => {
    const start = performance.now();
    const result = fn();
    const end = performance.now();

    if (process.env.NODE_ENV === 'development') {
      console.log(`${name} took ${end - start}ms`);
    }

    return result;
  },

  // Debounce function calls
  debounce: <T extends (...args: unknown[]) => unknown>(
    func: T,
    wait: number
  ): ((...args: Parameters<T>) => void) => {
    let timeout: NodeJS.Timeout;
    return (...args: Parameters<T>) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  },

  // Throttle function calls
  throttle: <T extends (...args: unknown[]) => unknown>(
    func: T,
    limit: number
  ): ((...args: Parameters<T>) => void) => {
    let inThrottle: boolean;
    return (...args: Parameters<T>) => {
      if (!inThrottle) {
        func(...args);
        inThrottle = true;
        setTimeout(() => {
          inThrottle = false;
        }, limit);
      }
    };
  },
};

// SEO utilities
export const seoUtils = {
  // Generate structured data for real estate
  generateRealEstateSchema: (property: {
    name: string;
    description: string;
    price: number;
    address: string;
    images: string[];
  }) => {
    return {
      '@context': 'https://schema.org',
      '@type': 'RealEstateListing',
      name: property.name,
      description: property.description,
      price: property.price,
      priceCurrency: 'USD',
      address: {
        '@type': 'PostalAddress',
        streetAddress: property.address,
        addressLocality: 'Las Vegas',
        addressRegion: 'NV',
        postalCode: '89166',
        addressCountry: 'US',
      },
      image: property.images,
      offers: {
        '@type': 'Offer',
        price: property.price,
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
      },
    };
  },

  // Generate Open Graph tags
  generateOpenGraph: (data: {
    title: string;
    description: string;
    image?: string;
    url?: string;
  }) => {
    return {
      title: data.title,
      description: data.description,
      images: data.image ? [{ url: data.image }] : [],
      url: data.url,
      type: 'website',
      siteName: 'Aliante Homes For Sale',
    };
  },
};

// Cache utilities
export const cacheUtils = {
  // Simple in-memory cache
  createCache: <T>(maxSize: number = 100) => {
    const cache = new Map<string, { value: T; timestamp: number }>();

    return {
      get: (key: string): T | undefined => {
        const item = cache.get(key);
        if (item && Date.now() - item.timestamp < 5 * 60 * 1000) {
          // 5 minutes
          return item.value;
        }
        cache.delete(key);
        return undefined;
      },

      set: (key: string, value: T): void => {
        if (cache.size >= maxSize) {
          const firstKey = cache.keys().next().value;
          if (firstKey) {
            cache.delete(firstKey);
          }
        }
        cache.set(key, { value, timestamp: Date.now() });
      },

      clear: (): void => {
        cache.clear();
      },
    };
  },
};

// Export all utilities
export default {
  createLazyComponent,
  preloadComponent,
  imageOptimization,
  performanceUtils,
  seoUtils,
  cacheUtils,
};
