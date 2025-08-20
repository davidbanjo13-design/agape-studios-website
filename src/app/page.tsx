import Link from 'next/link'
import { ArrowRight, Play, Eye, Users, Building } from 'lucide-react'
import ParallaxSection from '@/components/ui/ParallaxSection'
import StructuredData from '@/components/seo/StructuredData'

export default function Home() {
  return (
    <div>
      {/* Hero Section with Parallax */}
      <ParallaxSection 
        backgroundImage="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80"
        speed={0.3}
        className="min-h-screen text-white"
        overlayOpacity={0.2}
      >
        <div className="max-w-7xl mx-auto section-padding min-h-screen flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 opacity-0 animate-fadeInLeft">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Immersive <span className="text-blue-200">3D Virtual Tours</span> for Your Property
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed opacity-0 animate-fadeInLeft animation-delay-200">
                Professional virtual reality experiences that showcase your property like never before. 
                Perfect for real estate, businesses, and property owners in London.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fadeInLeft animation-delay-400">
                <Link href="/contact" className="btn-primary bg-white text-primary hover:bg-blue-50 inline-flex items-center justify-center transform hover:scale-105 transition-all duration-300">
                  Book Your Tour <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link href="/portfolio" className="btn-secondary bg-transparent border-white text-white hover:bg-white hover:text-primary inline-flex items-center justify-center transform hover:scale-105 transition-all duration-300">
                  <Play className="mr-2 h-5 w-5" />
                  View Portfolio
                </Link>
              </div>
            </div>
            <div className="lg:justify-self-end opacity-0 animate-fadeInRight animation-delay-200">
              <div className="glass-effect rounded-2xl p-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-white/20 p-3 rounded-full">
                      <Eye className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold">360° Virtual Reality</h3>
                      <p className="text-blue-100 text-sm">Immersive experiences</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-white/20 p-3 rounded-full">
                      <Building className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold">All Property Types</h3>
                      <p className="text-blue-100 text-sm">Residential & Commercial</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-white/20 p-3 rounded-full">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Professional Service</h3>
                      <p className="text-blue-100 text-sm">Expert team in London</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* Why Choose Agape Studios - Split Section with Parallax */}
      <section className="min-h-screen flex items-center">
        <div className="w-full grid lg:grid-cols-2">
          {/* Parallax Image Side */}
          <div className="min-h-[50vh] lg:min-h-screen relative overflow-hidden">
            <ParallaxSection 
              backgroundImage="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              speed={0.3}
              className="h-full"
              overlayOpacity={0}
            >
              <div></div>
            </ParallaxSection>
          </div>

          {/* Content Side */}
          <div className="min-h-[50vh] lg:min-h-screen bg-primary flex items-center section-padding">
            <div className="w-full">
              <div className="mb-12 opacity-0 animate-fadeInUp">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 drop-shadow-lg" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>
                  Why Choose Agape Studios?
                </h2>
                <p className="text-xl text-white mb-8 drop-shadow-md" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.7)'}}>
                  We create stunning 3D virtual tours that help you showcase properties, 
                  attract more clients, and close deals faster.
                </p>
              </div>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4 opacity-0 animate-fadeInUp animation-delay-200">
                  <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Building className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 drop-shadow-md" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.7)'}}>Real Estate</h3>
                    <p className="text-white drop-shadow-sm" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.6)'}}>
                      Showcase properties with immersive virtual tours that let potential buyers 
                      explore every detail from anywhere in the world.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 opacity-0 animate-fadeInUp animation-delay-400">
                  <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 drop-shadow-md" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.7)'}}>Business Spaces</h3>
                    <p className="text-white drop-shadow-sm" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.6)'}}>
                      Give customers a virtual walkthrough of your business, restaurant, 
                      or retail space to drive foot traffic and bookings.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 opacity-0 animate-fadeInUp animation-delay-600">
                  <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Eye className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 drop-shadow-md" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.7)'}}>Property Management</h3>
                    <p className="text-white drop-shadow-sm" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.6)'}}>
                      Create virtual property listings that save time on viewings and 
                      attract serious, qualified tenants and buyers.
                    </p>
                  </div>
                </div>

                <div className="pt-6 opacity-0 animate-fadeInUp animation-delay-800">
                  <a 
                    href="/portfolio" 
                    className="btn-primary inline-flex items-center"
                  >
                    View Our Work
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Static Background */}
      <section 
        className="section-padding text-white relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=85')"
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-primary/70"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 opacity-0 animate-fadeInUp">
            Ready to Transform Your Property Marketing?
          </h2>
          <p className="text-xl text-blue-100 mb-8 opacity-0 animate-fadeInUp animation-delay-200">
            Get started with a professional 3D virtual tour today. 
            Contact us for a free consultation and quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fadeInUp animation-delay-400">
            <Link href="/contact" className="btn-primary bg-white text-primary hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-white/20">
              Get Free Quote
            </Link>
            <Link href="/portfolio" className="btn-secondary bg-transparent border-white text-white hover:bg-white hover:text-primary transform hover:scale-105 transition-all duration-300">
              View Our Work
            </Link>
          </div>
        </div>
      </section>
      
      {/* Structured Data for Homepage */}
      <StructuredData type="service" />
    </div>
  )
}