'use client';

export default function OfficeLocation() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#1a365d' }}>
            Visit Our Office
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Map Placeholder */}
          <div className="order-2 lg:order-1">
            <div
              className="rounded-2xl p-12 text-center border-2 border-dashed shadow-inner"
              style={{
                borderColor: '#2c5aa0',
                backgroundColor: '#f0f4ff',
                minHeight: '400px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div className="text-8xl mb-6">🗺️</div>
              <p className="text-xl font-bold mb-2" style={{ color: '#2c5aa0' }}>
                Interactive Map Coming Soon
              </p>
              <p className="text-gray-600 mb-4">Google Maps integration will be displayed here</p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=2590+Nature+Park+Drive+Suite+275+North+Las+Vegas+NV+89084"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 rounded-lg font-semibold text-white transition-all hover:shadow-lg focus:ring-4 focus:ring-blue-300 focus:outline-none"
                style={{ backgroundColor: '#2c5aa0' }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#1e3f73')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#2c5aa0')}
              >
                Open in Google Maps
              </a>
            </div>
          </div>

          {/* Office Info */}
          <div className="order-1 lg:order-2">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6" style={{ color: '#1a365d' }}>
                Office Location
              </h3>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📍</span>
                  <div>
                    <p className="font-bold text-lg" style={{ color: '#2c5aa0' }}>
                      2590 Nature Park Drive, Suite 275
                    </p>
                    <p className="text-gray-700">North Las Vegas, NV 89084</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-2xl">🚗</span>
                  <div>
                    <p className="font-bold" style={{ color: '#2c5aa0' }}>
                      Directions
                    </p>
                    <p className="text-gray-700">
                      Located in the Aliante Business Park, just off the 215 freeway
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-2xl">🅿️</span>
                  <div>
                    <p className="font-bold" style={{ color: '#2c5aa0' }}>
                      Parking
                    </p>
                    <p className="text-gray-700">Free parking available in front of building</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t-2 border-white">
                <h4 className="font-bold mb-3" style={{ color: '#1a365d' }}>
                  Prefer to meet elsewhere?
                </h4>
                <p className="text-gray-700">
                  We can meet at your home, a coffee shop, or a property location. Whatever is most
                  convenient for you!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
