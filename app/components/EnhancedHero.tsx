'use client';

export default function EnhancedHero() {
  return (
    <section
      className="relative min-h-[90vh] flex items-center justify-center px-4 py-16 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1920&h=1080&fit=crop&q=80"
          alt="Aliante Luxury Homes"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-indigo-900/90"></div>
      </div>

      {/* Background pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full text-center">
        {/* Main Heading */}
        <h1
          id="hero-heading"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}
        >
          Aliante North Las Vegas Homes For Sale | 286+ MLS Listings Updated Daily
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl md:text-2xl text-white/95 mb-8 max-w-4xl mx-auto leading-relaxed">
          286+ MLS listings • Updated every 15 minutes • Gated communities • Sun City 55+ • New
          construction
        </p>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="bg-white/20 backdrop-blur-md border border-white/30 px-6 py-3 rounded-full">
            <p className="text-white font-semibold text-sm sm:text-base">
              ⚡ MLS Updated Every 15 Min
            </p>
          </div>
          <div className="bg-white/20 backdrop-blur-md border border-white/30 px-6 py-3 rounded-full">
            <p className="text-white font-semibold text-sm sm:text-base">
              🏆 Local Expert Since 2018
            </p>
          </div>
          <div className="bg-white/20 backdrop-blur-md border border-white/30 px-6 py-3 rounded-full">
            <p className="text-white font-semibold text-sm sm:text-base">📊 286+ Active Listings</p>
          </div>
        </div>

        {/* CTA: scroll to RealScout search (below the fold on every page) */}
        <a
          href="#realscout-search"
          className="inline-block py-4 px-8 rounded-xl font-semibold text-lg text-white transition-all transform hover:scale-[1.02] hover:shadow-xl focus:ring-4 focus:ring-orange-300 focus:outline-none"
          style={{ backgroundColor: '#ed8936' }}
        >
          🔍 Search Homes Below
        </a>
      </div>
    </section>
  );
}
