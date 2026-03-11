'use client';

import RealScoutAdvancedSearch from './RealScoutAdvancedSearch';

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

        {/* Find Your Dream Home — RealScout MLS search widget */}
        <div className="max-w-5xl mx-auto">
          <div
            className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl p-6 sm:p-8 hero-realscout-widget"
            style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.3)' }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6" style={{ color: '#1a365d' }}>
              Find Your Dream Home
            </h2>
            <div className="hero-realscout">
              <style>{`.hero-realscout realscout-advanced-search { max-width: 100%; width: 100%; }`}</style>
              <RealScoutAdvancedSearch />
            </div>
            <div className="mt-6 pt-6 border-t-2 border-gray-100 text-center">
              <p className="text-gray-600 mb-2">Need personalized help?</p>
              <a
                href="tel:+17027077273"
                className="inline-flex items-center gap-2 text-2xl font-bold hover:underline"
                style={{ color: '#2c5aa0' }}
              >
                📞 (702) 707-7273
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
