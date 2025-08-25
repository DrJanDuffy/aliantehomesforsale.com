export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    // Server-side instrumentation
    const { performance } = await import('perf_hooks');
    
    // Monitor server performance
    performance.mark('server-start');
    
    // Custom performance metrics
    (globalThis as any).serverMetrics = {
      startTime: Date.now(),
      requests: 0,
      errors: 0,
    };
    
    // Monitor memory usage
    setInterval(() => {
      const memUsage = process.memoryUsage();
      console.log('Memory Usage:', {
        rss: `${Math.round(memUsage.rss / 1024 / 1024)} MB`,
        heapTotal: `${Math.round(memUsage.heapTotal / 1024 / 1024)} MB`,
        heapUsed: `${Math.round(memUsage.heapUsed / 1024 / 1024)} MB`,
        external: `${Math.round(memUsage.external / 1024 / 1024)} MB`,
      });
    }, 30000); // Every 30 seconds
  }
  
  if (process.env.NEXT_RUNTIME === 'edge') {
    // Edge runtime instrumentation
    console.log('Edge runtime instrumentation loaded');
  }
}
