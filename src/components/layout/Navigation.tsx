'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone, Mail } from 'lucide-react'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [logoError, setLogoError] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  // Handle scroll effect for navigation bar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.top = `-${window.scrollY}px`
      document.body.style.width = '100%'
    } else {
      const scrollY = document.body.style.top
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1)
      }
    }
    
    return () => {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
    }
  }, [isMenuOpen])

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/how-it-works', label: 'How It Works' },
    { href: '/contact', label: 'Contact' },
  ]

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className={`shadow-lg sticky top-0 z-50 header-grey transition-all duration-300 ${
      scrolled ? 'backdrop-blur-md bg-white/95' : ''
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="flex items-center" style={{ height: '63px' }}>
                {!logoError ? (
                  <Image
                    src="/images/logo/agape-logo.jpg"
                    alt="Agape Studios Logo"
                    width={450}
                    height={63}
                    className="w-auto object-contain max-w-[450px]"
                    style={{ height: '63px' }}
                    priority
                    onError={() => setLogoError(true)}
                  />
                ) : (
                  <div className="text-2xl font-bold text-primary">
                    Agape Studios
                  </div>
                )}
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    pathname === item.href
                      ? 'text-primary bg-primary/10'
                      : 'text-secondary hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-secondary">
              <Phone className="h-4 w-4" />
              <span>020 8129 5004</span>
            </div>
            <Link
              href="/contact"
              className="btn-primary"
            >
              Book a Tour
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={handleMenuToggle}
              className="inline-flex items-center justify-center p-3 rounded-md text-secondary hover:text-primary hover:bg-secondary-light focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary transition-all duration-200 touch-manipulation relative z-50"
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
              style={{ minHeight: '44px', minWidth: '44px' }}
            >
              <div className="relative w-6 h-6">
                <Menu className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0 rotate-45' : 'opacity-100 rotate-0'
                }`} />
                <X className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${
                  isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-45'
                }`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div className={`md:hidden fixed inset-0 z-40 transition-opacity duration-300 ${
        isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}>
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
          style={{ touchAction: 'manipulation' }}
        />
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden fixed top-16 left-0 right-0 z-50 transform transition-all duration-300 ease-in-out ${
        isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}>
        <div className="bg-white shadow-2xl border-t border-gray-200 max-h-[calc(100vh-4rem)] overflow-y-auto" style={{ touchAction: 'manipulation' }}>
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={`mobile-menu-item block px-4 py-4 rounded-lg text-base font-medium transition-all duration-200 touch-manipulation transform ${
                  pathname === item.href
                    ? 'text-primary bg-primary/10 scale-105'
                    : 'text-secondary hover:text-primary hover:bg-primary/5 active:scale-95'
                } ${isMenuOpen ? 'animate-fadeInUp' : ''}`}
                style={{ 
                  animationDelay: `${index * 50}ms`,
                  minHeight: '48px',
                  touchAction: 'manipulation'
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Contact Info Section */}
            <div className="border-t border-gray-200 pt-4 mt-6">
              <div className="space-y-3">
                <a 
                  href="tel:02081295004"
                  className="mobile-menu-item flex items-center space-x-3 px-4 py-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 touch-manipulation active:scale-95"
                  style={{ minHeight: '48px', touchAction: 'manipulation' }}
                >
                  <Phone className="h-5 w-5 text-primary" />
                  <span className="text-secondary font-medium">020 8129 5004</span>
                </a>
                <a 
                  href="mailto:info@agapestudios.co.uk"
                  className="mobile-menu-item flex items-center space-x-3 px-4 py-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 touch-manipulation active:scale-95"
                  style={{ minHeight: '48px', touchAction: 'manipulation' }}
                >
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="text-secondary font-medium">info@agapestudios.co.uk</span>
                </a>
              </div>
              
              {/* CTA Button */}
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="btn-primary w-full text-center block py-4 text-lg font-semibold touch-manipulation active:scale-95 transition-transform duration-150"
                  style={{ minHeight: '48px', touchAction: 'manipulation' }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Book a Tour
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
