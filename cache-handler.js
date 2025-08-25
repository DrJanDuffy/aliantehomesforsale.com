const { LRUCache } = require('lru-cache');

// Custom cache handler for Next.js ISR
class CustomCacheHandler {
  constructor() {
    this.cache = new LRUCache({
      max: 1000, // Maximum number of items
      ttl: 1000 * 60 * 60 * 24, // 24 hours
      updateAgeOnGet: true,
      allowStale: true,
    });
  }

  async get(key) {
    return this.cache.get(key);
  }

  async set(key, data, options = {}) {
    const ttl = options.revalidate || 1000 * 60 * 60 * 24; // Default 24 hours
    this.cache.set(key, data, { ttl });
  }

  async delete(key) {
    this.cache.delete(key);
  }

  async clear() {
    this.cache.clear();
  }

  async has(key) {
    return this.cache.has(key);
  }
}

module.exports = CustomCacheHandler;
