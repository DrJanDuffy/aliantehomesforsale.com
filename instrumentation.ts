export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    // Custom performance metrics
    interface ServerMetrics {
      startTime: number;
      requests: number;
      memoryUsage: NodeJS.MemoryUsage;
    }

    // Extend globalThis with our metrics
    (globalThis as any).serverMetrics = {
      startTime: Date.now(),
      requests: 0,
      memoryUsage: process.memoryUsage(),
    };

    // Monitor server performance
    setInterval(() => {
      const metrics = (globalThis as any).serverMetrics as ServerMetrics;
      metrics.requests++;
      metrics.memoryUsage = process.memoryUsage();
      
      // Log performance metrics
      console.log('Server Metrics:', {
        uptime: Date.now() - metrics.startTime,
        requests: metrics.requests,
        memory: metrics.memoryUsage,
      });
    }, 60000); // Every minute
  }

  if (process.env.NEXT_RUNTIME === 'edge') {
    // Edge runtime instrumentation
    console.log('Edge runtime instrumentation loaded');
  }
}
