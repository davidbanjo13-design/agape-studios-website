'use client'

import { Camera, Upload, Settings, Smartphone, CheckCircle, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import ParallaxSection from '@/components/ui/ParallaxSection'

export default function HowItWorksPage() {
  const steps = [
    {
      id: 1,
      icon: Camera,
      title: "Initial Consultation",
      description: "We start with a personalized consultation, either over the phone or in person, depending on your project's scope and location.",
      details: [
        "Personalized consultation call or meeting",
        "Understanding your goals and requirements",
        "Tailoring our services to meet your needs",
        "Assessment of project scope and location"
      ]
    },
    {
      id: 2,
      icon: Settings,
      title: "Quote & Timeline",
      description: "After the consultation, we'll provide you with a detailed quote and an estimated timeline for project completion.",
      details: [
        "Detailed project quote breakdown",
        "Clear timeline for completion", 
        "Transparent pricing with no hidden fees",
        "Flexible scheduling to meet your needs"
      ]
    },
    {
      id: 3,
      icon: Upload,
      title: "Project Delivery",
      description: "Once approved, we'll create and deliver a complete package of professional content for your space.",
      details: [
        "High-quality interactive virtual tour",
        "Professional photos for listings and websites",
        "Teaser video for social media marketing",
        "All content professionally edited and optimized"
      ]
    },
    {
      id: 4,
      icon: Smartphone,
      title: "Hosting & Accessibility",
      description: "Your virtual tour will be hosted on our secure servers with flexible hosting packages to keep it accessible.",
      details: [
        "Secure server hosting with shareable links",
        "3, 6, or 12-month hosting packages available",
        "Hosting fees separate from production costs",
        "Tour remains online for your selected duration"
      ]
    }
  ]



  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section with Parallax */}
      <ParallaxSection 
        backgroundImage="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        speed={0.3}
        className="py-20 text-white"
        overlayOpacity={0.3}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fadeInUp drop-shadow-lg" 
              style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>
            How We Create Your Virtual Tours
          </h1>
          <p className="text-xl md:text-2xl text-white/90 animate-fadeInUp animation-delay-200 drop-shadow-md"
             style={{textShadow: '1px 1px 3px rgba(0,0,0,0.7)'}}>
            From capture to completion - our proven 4-step process delivers stunning results
          </p>
        </div>
      </ParallaxSection>

      {/* Steps Section with Background */}
      <ParallaxSection 
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=85"
        speed={0.3}
        className="section-padding"
        overlayOpacity={0.3}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>
              Our Proven Process
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto drop-shadow-md" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.7)'}}>
              At Agape Studios, we provide a seamless and professional experience from start to finish.
            </p>
          </div>

          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={step.id} className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}>
                {/* Content */}
                <div className="flex-1 opacity-0 animate-fadeInUp bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-2xl border border-white/20" style={{animationDelay: `${index * 200}ms`}}>
                  <div className="flex items-center mb-6">
                    <div className="flex items-center justify-center w-16 h-16 bg-primary text-white rounded-full mr-4">
                      <step.icon className="h-8 w-8" />
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                        Step {step.id}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                        {step.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-600 mb-6">
                    {step.description}
                  </p>

                  <ul className="space-y-3">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>

                  {index < steps.length - 1 && (
                    <div className="flex justify-center lg:justify-start mt-8">
                      <ArrowRight className="h-6 w-6 text-primary animate-bounce" />
                    </div>
                  )}
                </div>

                {/* Visual */}
                <div className="flex-1 opacity-0 animate-fadeInUp" style={{animationDelay: `${index * 200 + 100}ms`}}>
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden h-80 shadow-2xl border border-white/20">
                    {step.id === 1 && (
                      <Image 
                        src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                        alt="Initial Consultation"
                        width={800}
                        height={320}
                        className="w-full h-full object-cover"
                      />
                    )}
                    {step.id === 2 && (
                      <Image 
                        src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                        alt="Quote and Timeline"
                        width={800}
                        height={320}
                        className="w-full h-full object-cover"
                      />
                    )}
                    {step.id === 3 && (
                      <Image 
                        src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                        alt="Project Delivery"
                        width={800}
                        height={320}
                        className="w-full h-full object-cover"
                      />
                    )}
                    {step.id === 4 && (
                      <Image 
                        src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                        alt="Hosting and Accessibility"
                        width={800}
                        height={320}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ParallaxSection>



      {/* Timeline Section with Background */}
      <ParallaxSection 
        backgroundImage="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=85"
        speed={0.3}
        className="section-padding"
        overlayOpacity={0.2}
      >
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>
              Project Timeline
            </h2>
            <p className="text-xl text-white/90 drop-shadow-md" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.7)'}}>
              From booking to delivery - here&apos;s what to expect
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-primary/20"></div>

            <div className="space-y-12">
              {[
                { day: "Day 1", title: "Initial Consultation & Booking", description: "We discuss your needs and schedule the capture session at your convenience." },
                { day: "Day 2-3", title: "Professional 3D Capture", description: "Our team visits your property for the 3D scanning session (2-4 hours depending on size)." },
                { day: "Day 4-7", title: "Processing & Enhancement", description: "We process your 3D data, enhance the visuals, and create the interactive tour." },
                { day: "Day 7-10", title: "Review & Delivery", description: "You review the final tour, we make any adjustments, and deliver your ready-to-use virtual tour." }
              ].map((phase, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-2xl border border-white/20 opacity-0 animate-fadeInUp" style={{animationDelay: `${index * 200}ms`}}>
                      <div className="text-sm font-semibold text-primary mb-2">{phase.day}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{phase.title}</h3>
                      <p className="text-gray-600">{phase.description}</p>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fadeInUp">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 animate-fadeInUp animation-delay-200">
            Transform your property marketing today with professional 3D virtual tours
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp animation-delay-400">
            <a 
              href="/contact" 
              className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Free Quote
            </a>
            <a 
              href="/portfolio" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
            >
              View Our Work
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
