'use client';

export default function NeighborhoodComparison() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#1a365d' }}>
            Neighborhood Comparison
          </h2>
          <p className="text-xl text-gray-600">Compare key features to find your perfect match</p>
        </div>

        <div className="overflow-x-auto rounded-xl shadow-xl">
          <table className="w-full min-w-[700px] bg-white">
            <thead>
              <tr style={{ backgroundColor: '#1a365d' }}>
                <th className="px-6 py-4 text-left text-white font-bold">Feature</th>
                <th className="px-6 py-4 text-left text-white font-bold">The Prominence</th>
                <th className="px-6 py-4 text-left text-white font-bold">Desert Willows</th>
                <th className="px-6 py-4 text-left text-white font-bold">Club Aliante</th>
                <th className="px-6 py-4 text-left text-white font-bold">The Paseos</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 font-bold" style={{ color: '#1a365d' }}>
                  Starting Price
                </td>
                <td className="px-6 py-4 text-gray-700">$600K</td>
                <td className="px-6 py-4 text-gray-700">$400K</td>
                <td className="px-6 py-4 text-gray-700">$500K</td>
                <td className="px-6 py-4 text-gray-700">$300K</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 font-bold" style={{ color: '#1a365d' }}>
                  Home Types
                </td>
                <td className="px-6 py-4 text-gray-700">Luxury SF</td>
                <td className="px-6 py-4 text-gray-700">SF, Townhomes</td>
                <td className="px-6 py-4 text-gray-700">Golf Homes</td>
                <td className="px-6 py-4 text-gray-700">SF, Townhomes</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 font-bold" style={{ color: '#1a365d' }}>
                  Golf Access
                </td>
                <td className="px-6 py-4 text-gray-700">Premium</td>
                <td className="px-6 py-4 text-gray-700">Nearby</td>
                <td className="px-6 py-4 text-gray-700">Direct</td>
                <td className="px-6 py-4 text-gray-700">Nearby</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 font-bold" style={{ color: '#1a365d' }}>
                  Security
                </td>
                <td className="px-6 py-4 text-gray-700">Gated</td>
                <td className="px-6 py-4 text-gray-700">Open</td>
                <td className="px-6 py-4 text-gray-700">Gated</td>
                <td className="px-6 py-4 text-gray-700">Open</td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 font-bold" style={{ color: '#1a365d' }}>
                  School Rating
                </td>
                <td className="px-6 py-4 text-gray-700">9/10</td>
                <td className="px-6 py-4 text-gray-700">8/10</td>
                <td className="px-6 py-4 text-gray-700">9/10</td>
                <td className="px-6 py-4 text-gray-700">7/10</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="text-center mt-8">
          <a
            href="/neighborhoods/compare"
            className="inline-block py-3 px-8 rounded-lg font-semibold transition-all transform hover:scale-105 border-2 focus:ring-4 focus:ring-blue-300 focus:outline-none"
            style={{
              color: '#2c5aa0',
              borderColor: '#2c5aa0',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#2c5aa0';
              e.currentTarget.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#2c5aa0';
            }}
          >
            Full Comparison Tool →
          </a>
        </div>
      </div>
    </section>
  );
}
