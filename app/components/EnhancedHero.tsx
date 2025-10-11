'use client';

import { useState } from 'react';

export default function EnhancedHero() {
  const [formData, setFormData] = useState({
    neighborhood: '',
    priceRange: '',
    beds: '',
    baths: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to search with parameters
    const params = new URLSearchParams();
    if (formData.neighborhood) params.append('neighborhood', formData.neighborhood);
    if (formData.priceRange) params.append('price', formData.priceRange);
    if (formData.beds) params.append('beds', formData.beds);
    if (formData.baths) params.append('baths', formData.baths);
    
    window.location.href = `/search?${params.toString()}`;
  };

  return (
    <section 
      className="relative min-h-[90vh] flex items-center justify-center px-4 py-16 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
      }}
      aria-labelledby="hero-heading"
    >
      {/* Background pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
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
          286+ MLS listings • Updated every 15 minutes • Gated communities • Sun City 55+ • New construction
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
            <p className="text-white font-semibold text-sm sm:text-base">
              📊 286+ Active Listings
            </p>
          </div>
        </div>

        {/* Property Search Widget */}
        <div className="max-w-5xl mx-auto">
          <div 
            className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl p-6 sm:p-8"
            style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.3)' }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6" style={{ color: '#1a365d' }}>
              Find Your Dream Home
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Neighborhood */}
                <div>
                  <label 
                    htmlFor="neighborhood" 
                    className="block text-sm font-semibold mb-2"
                    style={{ color: '#1a365d' }}
                  >
                    Neighborhood
                  </label>
                  <select
                    id="neighborhood"
                    value={formData.neighborhood}
                    onChange={(e) => setFormData({...formData, neighborhood: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none text-gray-700"
                    style={{ minHeight: '48px' }}
                  >
                    <option value="">All Neighborhoods</option>
                    <option value="prominence">The Prominence</option>
                    <option value="club-aliante">Club Aliante</option>
                    <option value="sun-city">Sun City Aliante</option>
                    <option value="desert-willows">Desert Willows</option>
                    <option value="paseos">The Paseos</option>
                    <option value="tule-springs">Tule Springs</option>
                  </select>
                </div>

                {/* Price Range */}
                <div>
                  <label 
                    htmlFor="price-range" 
                    className="block text-sm font-semibold mb-2"
                    style={{ color: '#1a365d' }}
                  >
                    Price Range
                  </label>
                  <select
                    id="price-range"
                    value={formData.priceRange}
                    onChange={(e) => setFormData({...formData, priceRange: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none text-gray-700"
                    style={{ minHeight: '48px' }}
                  >
                    <option value="">Any Price</option>
                    <option value="0-300000">Under $300K</option>
                    <option value="300000-450000">$300K - $450K</option>
                    <option value="450000-600000">$450K - $600K</option>
                    <option value="600000-800000">$600K - $800K</option>
                    <option value="800000-plus">$800K+</option>
                  </select>
                </div>

                {/* Bedrooms */}
                <div>
                  <label 
                    htmlFor="beds" 
                    className="block text-sm font-semibold mb-2"
                    style={{ color: '#1a365d' }}
                  >
                    Bedrooms
                  </label>
                  <select
                    id="beds"
                    value={formData.beds}
                    onChange={(e) => setFormData({...formData, beds: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none text-gray-700"
                    style={{ minHeight: '48px' }}
                  >
                    <option value="">Any Beds</option>
                    <option value="1">1+ Beds</option>
                    <option value="2">2+ Beds</option>
                    <option value="3">3+ Beds</option>
                    <option value="4">4+ Beds</option>
                    <option value="5">5+ Beds</option>
                  </select>
                </div>

                {/* Bathrooms */}
                <div>
                  <label 
                    htmlFor="baths" 
                    className="block text-sm font-semibold mb-2"
                    style={{ color: '#1a365d' }}
                  >
                    Bathrooms
                  </label>
                  <select
                    id="baths"
                    value={formData.baths}
                    onChange={(e) => setFormData({...formData, baths: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none text-gray-700"
                    style={{ minHeight: '48px' }}
                  >
                    <option value="">Any Baths</option>
                    <option value="1">1+ Baths</option>
                    <option value="2">2+ Baths</option>
                    <option value="3">3+ Baths</option>
                    <option value="4">4+ Baths</option>
                  </select>
                </div>
              </div>

              {/* Search Button */}
              <button
                type="submit"
                className="w-full py-4 px-8 rounded-lg font-semibold text-lg text-white transition-all transform hover:scale-[1.02] hover:shadow-xl focus:ring-4 focus:ring-orange-300 focus:outline-none"
                style={{ 
                  backgroundColor: '#ed8936',
                  minHeight: '56px'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#dd6b20'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ed8936'}
              >
                🔍 Search Properties
              </button>
            </form>

            {/* Quick Contact */}
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

