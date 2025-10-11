'use client';

interface StatCardProps {
  number: string;
  label: string;
  icon: string;
}

function StatCard({ number, label, icon }: StatCardProps) {
  return (
    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 sm:p-8 text-center transform transition-all duration-300 hover:scale-105 hover:bg-white/15">
      <div className="text-4xl mb-3">{icon}</div>
      <p className="text-4xl sm:text-5xl font-bold text-white mb-2">
        {number}
      </p>
      <p className="text-base sm:text-lg text-white/90 font-medium">
        {label}
      </p>
    </div>
  );
}

export default function EnhancedMarketInsights() {
  const stats: StatCardProps[] = [
    {
      number: '286',
      label: 'Active Listings',
      icon: '🏘️'
    },
    {
      number: '3',
      label: 'Days Avg on Market',
      icon: '⚡'
    },
    {
      number: '$450K',
      label: 'Median Price',
      icon: '💰'
    },
    {
      number: '1,850',
      label: 'Avg Square Feet',
      icon: '📐'
    }
  ];

  return (
    <section 
      className="py-16 px-4 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0A2540 0%, #3A8DDE 100%)'
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 20px 20px, white 2px, transparent 0)',
          backgroundSize: '80px 80px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Aliante Market at a Glance
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Real-time data from the North Las Vegas MLS. Stay informed about the market trends.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center">
          <p className="text-white/80 mb-6 text-lg">
            📊 Data updated every 15 minutes from Greater Las Vegas Association of REALTORS® MLS
          </p>
          <a
            href="/market-report"
            className="inline-block py-4 px-8 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 hover:shadow-2xl focus:ring-4 focus:ring-white/30 focus:outline-none"
            style={{ 
              backgroundColor: 'white',
              color: '#0A2540'
            }}
          >
            View Full Market Report →
          </a>
        </div>
      </div>
    </section>
  );
}

