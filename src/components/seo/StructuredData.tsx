interface StructuredDataProps {
  type?: 'organization' | 'localBusiness' | 'service' | 'breadcrumb'
  data?: Record<string, unknown>
}

const StructuredData: React.FC<StructuredDataProps> = ({ type = 'organization', data = {} }) => {
  const getStructuredData = () => {
    const baseData = {
      '@context': 'https://schema.org',
    }

    switch (type) {
      case 'organization':
        return {
          ...baseData,
          '@type': 'Organization',
          name: 'Agape Studios',
          description: 'Professional 3D virtual tours for properties, businesses, and real estate in London.',
          url: 'https://www.agapestudios.co.uk',
          logo: 'https://www.agapestudios.co.uk/images/logo/agape-logo.jpg',
          image: 'https://www.agapestudios.co.uk/images/og-image.jpg',
          foundingDate: '2024',
          founder: {
            '@type': 'Person',
            name: 'Agape Studios Team'
          },
          address: {
            '@type': 'PostalAddress',
            streetAddress: '35 Hare St',
            addressLocality: 'London',
            postalCode: 'SE18 6NE',
            addressCountry: 'GB'
          },
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+44-20-8311-5555',
            contactType: 'customer service',
            email: 'info@agapestudios.co.uk',
            availableLanguage: 'English'
          },
          sameAs: [
            'https://www.facebook.com/agapestudios',
            'https://www.instagram.com/agapestudios',
            'https://www.linkedin.com/company/agapestudios'
          ],
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: '3D Virtual Tour Services',
            itemListElement: [
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Residential 3D Virtual Tours',
                  description: 'Professional 3D virtual tours for residential properties'
                }
              },
              {
                '@type': 'Offer', 
                itemOffered: {
                  '@type': 'Service',
                  name: 'Commercial 3D Virtual Tours',
                  description: 'Professional 3D virtual tours for commercial properties and businesses'
                }
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Property Photography',
                  description: 'Professional property photography services'
                }
              }
            ]
          },
          ...data
        }

      case 'localBusiness':
        return {
          ...baseData,
          '@type': 'LocalBusiness',
          name: 'Agape Studios',
          description: 'Professional 3D virtual tours for properties, businesses, and real estate in London.',
          url: 'https://www.agapestudios.co.uk',
          telephone: '+44-20-8311-5555',
          email: 'info@agapestudios.co.uk',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '35 Hare St',
            addressLocality: 'London',
            postalCode: 'SE18 6NE',
            addressCountry: 'GB'
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: 51.4934,
            longitude: 0.1063
          },
          openingHours: 'Mo-Fr 09:00-18:00',
          paymentAccepted: 'Cash, Credit Card, Bank Transfer',
          currenciesAccepted: 'GBP',
          areaServed: {
            '@type': 'City',
            name: 'London'
          },
          serviceArea: {
            '@type': 'GeoCircle',
            geoMidpoint: {
              '@type': 'GeoCoordinates',
              latitude: 51.4934,
              longitude: 0.1063
            },
            geoRadius: '50000'
          },
          ...data
        }

      case 'service':
        return {
          ...baseData,
          '@type': 'Service',
          name: '3D Virtual Tour Services',
          description: 'Professional 3D virtual tours for properties, businesses, and real estate.',
          provider: {
            '@type': 'Organization',
            name: 'Agape Studios',
            url: 'https://www.agapestudios.co.uk'
          },
          areaServed: {
            '@type': 'City',
            name: 'London'
          },
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Virtual Tour Services',
            itemListElement: [
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Residential Virtual Tours',
                  category: 'Real Estate Services'
                }
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service', 
                  name: 'Commercial Virtual Tours',
                  category: 'Business Services'
                }
              }
            ]
          },
          ...data
        }

      case 'breadcrumb':
        return {
          ...baseData,
          '@type': 'BreadcrumbList',
          itemListElement: data.items || []
        }

      default:
        return baseData
    }
  }

  const structuredData = getStructuredData()

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData, null, 2),
      }}
    />
  )
}

export default StructuredData
