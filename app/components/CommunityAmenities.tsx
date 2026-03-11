'use client';

interface AmenityCategoryProps {
  icon: string;
  title: string;
  amenities: string[];
}

function AmenityCategory({ icon, title, amenities }: AmenityCategoryProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md">
      <h3 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ color: '#1a365d' }}>
        <span className="text-3xl">{icon}</span>
        {title}
      </h3>
      <ul className="space-y-2">
        {amenities.map((amenity, index) => (
          <li key={index} className="flex items-start gap-2 text-gray-700">
            <span className="flex-shrink-0 text-green-500 font-bold">✓</span>
            <span>{amenity}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function CommunityAmenities() {
  const categories: AmenityCategoryProps[] = [
    {
      icon: '🏌️',
      title: 'Golf & Recreation',
      amenities: [
        'Championship 18-hole golf course',
        'Pro shop and golf lessons',
        'Tennis and pickleball courts',
        'Swimming pools and spas',
        'Fitness center and yoga studio',
      ],
    },
    {
      icon: '🛍️',
      title: 'Shopping & Dining',
      amenities: [
        'Aliante Casino + Hotel',
        'Premium shopping centers',
        'Fine dining restaurants',
        'Casual eateries and cafes',
        'Entertainment venues',
      ],
    },
    {
      icon: '🎓',
      title: 'Education & Family',
      amenities: [
        'Top-rated public schools',
        'Private school options',
        'Community parks and playgrounds',
        'Family activity centers',
        'Library and learning resources',
      ],
    },
    {
      icon: '🚗',
      title: 'Transportation & Access',
      amenities: [
        'Easy freeway access (I-215)',
        'Public transportation',
        'Bike lanes and walking trails',
        'Airport proximity (15 minutes)',
        'Downtown Las Vegas access',
      ],
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#1a365d' }}>
            Community Amenities & Lifestyle
          </h2>
          <p className="text-xl text-gray-600">
            Aliante offers world-class amenities and a vibrant lifestyle for residents of all ages
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <AmenityCategory key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
}
