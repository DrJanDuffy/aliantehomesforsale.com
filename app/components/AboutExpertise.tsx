'use client';

interface ExpertiseCardProps {
  icon: string;
  title: string;
  description: string;
}

function ExpertiseCard({ icon, title, description }: ExpertiseCardProps) {
  return (
    <article
      className="bg-white rounded-xl p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border-l-4"
      style={{ borderLeftColor: '#2c5aa0' }}
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="text-4xl flex-shrink-0">{icon}</div>
        <h3 className="text-2xl font-bold" style={{ color: '#1a365d' }}>
          {title}
        </h3>
      </div>
      <p className="text-gray-700 leading-relaxed">{description}</p>
    </article>
  );
}

export default function AboutExpertise() {
  const expertise: ExpertiseCardProps[] = [
    {
      icon: '🏗️',
      title: 'New Construction Specialists',
      description:
        'Direct relationships with all major builders in North Las Vegas: Lennar, D.R. Horton, Tri Pointe, Del Webb, and Richmond American. We track incentives, negotiate on your behalf, and guide you through every construction phase.',
    },
    {
      icon: '🏘️',
      title: 'Neighborhood Experts',
      description:
        'Intimate knowledge of every Aliante neighborhood: The Prominence, Desert Willows, Club Aliante, The Paseos, and Sun City Aliante. We can match you with the perfect community for your lifestyle.',
    },
    {
      icon: '📊',
      title: 'Market Intelligence',
      description:
        'Real-time MLS data updated every 15 minutes, comprehensive market reports, and insider knowledge of upcoming developments and trends in North Las Vegas real estate.',
    },
    {
      icon: '🤝',
      title: 'Buyer & Seller Advocacy',
      description:
        "Whether you're buying your first home or selling your dream property, we provide expert guidance, skillful negotiation, and personalized service every step of the way.",
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#1a365d' }}>
            Our Expertise
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Specialized knowledge and services tailored to your real estate needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {expertise.map((item, index) => (
            <ExpertiseCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
