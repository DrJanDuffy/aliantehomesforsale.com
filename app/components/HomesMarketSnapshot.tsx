'use client';

interface MarketStatProps {
  label: string;
  value: string;
  detail: string;
  icon: string;
  trend?: 'up' | 'down' | 'neutral';
}

function MarketStatCard({ label, value, detail, icon, trend }: MarketStatProps) {
  const trendColor = trend === 'up' ? '#16B286' : trend === 'down' ? '#ef4444' : '#6b7280';
  const trendIcon = trend === 'up' ? '↑' : trend === 'down' ? '↓' : '→';

  return (
    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center transition-all duration-300 hover:scale-105 hover:bg-white/15">
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="text-sm font-semibold text-white/80 uppercase tracking-wide mb-2">{label}</h3>
      <p className="text-3xl sm:text-4xl font-bold text-white mb-2">{value}</p>
      <p className="text-sm text-white/80">
        {trend && (
          <span style={{ color: trendColor }} className="font-bold">
            {trendIcon}{' '}
          </span>
        )}
        {detail}
      </p>
    </div>
  );
}

export default function HomesMarketSnapshot() {
  const stats: MarketStatProps[] = [
    {
      label: 'Current Inventory',
      value: '286',
      detail: '15% increase from last month',
      icon: '🏘️',
      trend: 'up',
    },
    {
      label: 'Median Price',
      value: '$434,900',
      detail: '3.2% increase year-over-year',
      icon: '💰',
      trend: 'up',
    },
    {
      label: 'Days on Market',
      value: '32',
      detail: '8% faster than NV average',
      icon: '⚡',
      trend: 'down',
    },
    {
      label: 'Price per Sq Ft',
      value: '$245',
      detail: 'Competitive with North LV',
      icon: '📐',
      trend: 'neutral',
    },
  ];

  return (
    <section
      className="py-16 px-4"
      style={{
        background: 'linear-gradient(135deg, #0A2540 0%, #3A8DDE 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Aliante Market Insights
          </h2>
          <p className="text-xl text-white/90">
            Real-time data from Greater Las Vegas Association of REALTORS® MLS
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <MarketStatCard key={index} {...stat} />
          ))}
        </div>

        <div className="text-center">
          <a
            href="/market-report"
            className="inline-block py-4 px-8 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 hover:shadow-2xl focus:ring-4 focus:ring-white/30 focus:outline-none"
            style={{
              backgroundColor: 'white',
              color: '#0A2540',
            }}
          >
            View Full Market Report →
          </a>
        </div>
      </div>
    </section>
  );
}
