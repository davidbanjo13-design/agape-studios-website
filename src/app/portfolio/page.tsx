'use client'

import { useState } from 'react'
import Image from 'next/image'
import TourModal from '@/components/ui/TourModal'

// Sample portfolio data - in real app, this would come from a CMS or API
const portfolioItems = [
  {
    id: 1,
    title: "Luxury Apartment - Beckon",
    type: "residential",
    location: "London, E6",
    description: "Stunning 2 bedroom flat in Beckton, En suite master bedroom and stunning balcony",
    imageUrl: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tourUrl: "https://my.matterport.com/show/?m=n1EFLsrk5Ad", // Your Matterport 3D tour
    features: ["2 Bedrooms", "En Suite Master", "Stunning Balcony", "Beckton Location"]
  },
  {
    id: 2,
    title: "Club Supreme - Epping",
    type: "commercial",
    location: "Epping, CM16",
    description: "A trendy club and cocktail bar in Epping",
    imageUrl: "/images/properties/Club-Supreme.png",
    tourUrl: "https://my.matterport.com/show/?m=j4UzuFmL87Z", // Your Matterport 3D tour
    features: ["Cocktail Room", "VIP Booth", "Dance Floor", "Rooftop/Smoking Area"]
  },
  {
    id: 3,
    title: "Hitachi Sushi - Woolwhich",
    type: "commercial",
    location: "Woolwhich, SE18",
    description: "A delightful Japanese restaurant in the heart of Woolwich, serving delicious food and cocktails",
    imageUrl: "/images/properties/Hitachi-Sushi.png",
    tourUrl: "https://my.matterport.com/show/?m=Swtfk3QLRYC", // Your Matterport 3D tour
    features: ["High Footfall", "Display Windows", "Storage", "Historic Setting"]
  }
]

const propertyTypes = [
  { value: 'all', label: 'All Properties' },
  { value: 'residential', label: 'Residential' },
  { value: 'commercial', label: 'Commercial' }
]

export default function Portfolio() {
  const [selectedType, setSelectedType] = useState('all')
  const [selectedTour, setSelectedTour] = useState<{
    tourUrl: string
    title: string
  } | null>(null)

  const filteredItems = selectedType === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.type === selectedType)

  const openTour = (tourUrl: string, title: string) => {
    setSelectedTour({ tourUrl, title })
  }

  return (
    <div 
      className="min-h-screen pt-16 bg-cover bg-center bg-no-repeat bg-fixed"
      style={{
        backgroundImage: `url('/images/backgrounds/portfolio-hero-bg.png'), url('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=85')`
      }}
    >
      {/* Hero Section */}
      <section className="relative text-white py-20">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fadeInUp">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Explore our stunning collection of 3D virtual tours showcasing London&apos;s finest properties
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="relative py-12">
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/90"></div>
        
        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 animate-fadeInUp animation-delay-200">
            {propertyTypes.map((type) => (
              <button
                key={type.value}
                onClick={() => setSelectedType(type.value)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                  selectedType === type.value
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-white text-primary border border-primary hover:bg-primary hover:text-white'
                }`}
              >
                {type.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="relative py-20">
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/95"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fadeInUp`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Property Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      item.type === 'residential' 
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {item.type === 'residential' ? 'Residential' : 'Commercial'}
                    </span>
                  </div>
                </div>

                {/* Property Details */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-primary font-semibold mb-2">
                    📍 {item.location}
                  </p>
                  <p className="text-gray-600 mb-4">
                    {item.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {item.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex gap-3">
                    <button
                      onClick={() => openTour(item.tourUrl, item.title)}
                      className="flex-1 bg-primary text-white py-3 px-4 rounded-lg font-semibold hover:bg-primary-dark transition-colors duration-200 flex items-center justify-center gap-2 text-sm"
                    >
                      <span>🏠</span>
                      Virtual Tour
                    </button>
                    <button
                      onClick={() => window.open(item.tourUrl, '_blank')}
                      className="px-4 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors duration-200 text-sm"
                      title="Open in new tab"
                    >
                      ↗️
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-20 text-white">
        {/* Overlay */}
        <div className="absolute inset-0 bg-primary/80"></div>
        
        {/* Content */}
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="animate-fadeInUp">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Showcase Your Property?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let us create a stunning 3D virtual tour that will captivate your potential buyers or tenants
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </section>

      {/* Tour Modal */}
      <TourModal
        isOpen={!!selectedTour}
        onClose={() => setSelectedTour(null)}
        tourUrl={selectedTour?.tourUrl || ''}
        title={selectedTour?.title || ''}
      />
    </div>
  )
}
