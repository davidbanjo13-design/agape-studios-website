'use client'

import { useState } from 'react'
import ParallaxSection from '@/components/ui/ParallaxSection'
import { Star, Quote, Building2, Users, Utensils, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import StructuredData from '@/components/seo/StructuredData'

const testimonials = [
  {
    id: 1,
    business: "Luxury Apartment",
    type: "Estate Agent",
    name: "Property Marketing Professional",
    content: "The virtual tours helped me sell properties faster and enhance my listings with rich media content.",
    icon: Building2,
    rating: 5,
    industry: "Real Estate",
    result: "Faster property sales",
    color: "from-blue-500 to-indigo-600"
  },
  {
    id: 2,
    business: "Club Supreme",
    type: "Entertainment Venue",
    name: "Venue Manager",
    content: "I find it easier to get group bookings once I send the link to my virtual tours to potential customers.",
    icon: Users,
    rating: 5,
    industry: "Entertainment",
    result: "Increased group bookings",
    color: "from-purple-500 to-pink-600"
  },
  {
    id: 3,
    business: "Hitachi Sushi",
    type: "Restaurant Owner",
    name: "Restaurant Owner",
    content: "The 3D tour of my restaurant brought in more customers and increased my bookings significantly.",
    icon: Utensils,
    rating: 5,
    industry: "Food & Beverage",
    result: "More customers & bookings",
    color: "from-orange-500 to-red-600"
  }
]

const stats = [
  { label: "Client Satisfaction", value: "100%", description: "Satisfied clients" },
  { label: "Business Growth", value: "45%", description: "Average increase in bookings" },
  { label: "Faster Sales", value: "3x", description: "Quicker property sales" },
  { label: "ROI Improvement", value: "200%", description: "Return on investment" }
]

export default function TestimonialsPage() {
  const [selectedTestimonial, setSelectedTestimonial] = useState(0)

  return (
    <div className="min-h-screen">
      <StructuredData type="testimonials" />

      {/* Hero Section */}
      <ParallaxSection
        backgroundImage="/images/backgrounds/portfolio-hero-bg.png"
        overlayOpacity={0.7}
        className="min-h-[70vh] flex items-center justify-center"
      >
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fadeInUp">
            Client Success Stories
          </h1>
          <p className="text-xl md:text-2xl text-white/90 animate-fadeInUp animation-delay-200">
            Discover how our 3D virtual tours have transformed businesses across London
          </p>
          <div className="mt-8 animate-fadeInUp animation-delay-400">
            <div className="flex justify-center items-center space-x-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
              <span className="ml-3 text-lg font-medium">5.0 Client Rating</span>
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* Statistics Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fadeInUp">
              Proven Results
            </h2>
            <p className="text-xl text-gray-600 animate-fadeInUp animation-delay-200">
              Our virtual tours deliver measurable business impact
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-primary/10 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl md:text-3xl font-bold text-primary">
                    {stat.value}
                  </span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{stat.label}</h3>
                <p className="text-sm text-gray-600">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Testimonials Section */}
      <section className="section-padding bg-secondary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fadeInUp">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 animate-fadeInUp animation-delay-200">
              Real testimonials from businesses that have transformed their marketing with our virtual tours
            </p>
          </div>

          {/* Featured Testimonial */}
          <div className="mb-16">
            <div className="glass-effect rounded-xl p-8 md:p-12 max-w-4xl mx-auto animate-fadeInUp">
              <div className="flex items-start space-x-6">
                <Quote className="w-12 h-12 text-primary/30 flex-shrink-0 mt-2" />
                <div>
                  <blockquote className="text-xl md:text-2xl text-gray-800 mb-6 leading-relaxed">
                    &ldquo;{testimonials[selectedTestimonial].content}&rdquo;
                  </blockquote>
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${testimonials[selectedTestimonial].color} flex items-center justify-center`}>
                      {(() => {
                        const IconComponent = testimonials[selectedTestimonial].icon
                        return IconComponent ? <IconComponent className="w-6 h-6 text-white" /> : null
                      })()}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        {testimonials[selectedTestimonial].business}
                      </p>
                      <p className="text-primary font-medium">
                        {testimonials[selectedTestimonial].type}
                      </p>
                      <div className="flex items-center mt-1">
                        {[...Array(testimonials[selectedTestimonial].rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`cursor-pointer transition-all duration-300 ${
                  selectedTestimonial === index 
                    ? 'scale-105 shadow-2xl' 
                    : 'hover:scale-102 hover:shadow-xl'
                }`}
                onClick={() => setSelectedTestimonial(index)}
              >
                <div className="bg-white rounded-xl p-6 h-full shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${testimonial.color} flex items-center justify-center mb-4`}>
                    {(() => {
                      const IconComponent = testimonial.icon
                      return IconComponent ? <IconComponent className="w-6 h-6 text-white" /> : null
                    })()}
                  </div>
                  
                  <h3 className="font-bold text-lg mb-2">{testimonial.business}</h3>
                  <p className="text-primary font-medium mb-2">{testimonial.type}</p>
                  
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <blockquote className="text-gray-600 mb-4 line-clamp-3">
                    &ldquo;{testimonial.content}&rdquo;
                  </blockquote>
                  
                  <div className="mt-auto">
                    <div className="bg-primary/5 rounded-lg p-3">
                      <p className="text-sm text-primary font-medium">
                        <strong>Result:</strong> {testimonial.result}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fadeInUp">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-xl text-blue-100 mb-8 animate-fadeInUp animation-delay-200">
            Transform your business with our professional 3D virtual tours and see the results for yourself
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp animation-delay-400">
            <Link
              href="/contact"
              className="btn-secondary group"
            >
              Get Your Free Quote
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/portfolio"
              className="btn-outline group"
            >
              View Our Work
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
