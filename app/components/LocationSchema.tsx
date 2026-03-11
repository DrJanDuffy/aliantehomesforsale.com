'use client';

export default function LocationSchema() {
  const locationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: 'Aliante',
    description:
      'Master-planned community in North Las Vegas, Nevada featuring gated communities, golf courses, and active adult 55+ living.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'North Las Vegas',
      addressRegion: 'NV',
      postalCode: '89084',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '36.1699',
      longitude: '-115.1398',
    },
    containedInPlace: {
      '@type': 'City',
      name: 'North Las Vegas',
      address: {
        '@type': 'PostalAddress',
        addressRegion: 'Nevada',
        addressCountry: 'United States',
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
    />
  );
}
