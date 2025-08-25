interface StructuredDataProps {
  type: 'RealEstateAgent' | 'PropertyListing'
  property?: {
    title: string
    description: string
    price: number
    address: string
    zipCode: string
    sqft: number
    bedrooms: number
    bathrooms: number
  }
}

export default function StructuredData({ type, property }: StructuredDataProps) {
  const getSchemaData = () => {
    if (type === 'RealEstateAgent') {
      return {
        "@context": "https://schema.org",
        "@type": "RealEstateAgent",
        "name": "Aliante Real Estate",
        "description": "Expert real estate services in Aliante, North Las Vegas",
        "url": "https://aliantehomesforsale.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "2590 Nature Park Drive, Suite 275",
          "addressLocality": "North Las Vegas",
          "addressRegion": "NV",
          "postalCode": "89084",
          "addressCountry": "US"
        },
        "telephone": "(702) 555-0123",
        "email": "info@aliantehomesforsale.com",
        "areaServed": {
          "@type": "Place",
          "name": "Aliante, North Las Vegas, Nevada"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "127"
        }
      }
    }
    
    if (type === 'PropertyListing' && property) {
      return {
        "@context": "https://schema.org",
        "@type": "RealEstateListing",
        "name": property.title,
        "description": property.description,
        "price": property.price,
        "priceCurrency": "USD",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": property.address,
          "addressLocality": "North Las Vegas",
          "addressRegion": "NV",
          "postalCode": property.zipCode,
          "addressCountry": "US"
        },
        "floorSize": {
          "@type": "QuantitativeValue",
          "value": property.sqft,
          "unitText": "SqFt"
        },
        "numberOfRooms": property.bedrooms,
        "numberOfBathroomsTotal": property.bathrooms
      }
    }
    
    return null
  }

  const schemaData = getSchemaData()
  
  if (!schemaData) return null

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  )
}
