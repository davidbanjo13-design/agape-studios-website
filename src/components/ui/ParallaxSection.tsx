'use client'

import { useEffect, useRef, useState } from 'react'

interface ParallaxSectionProps {
  children: React.ReactNode
  backgroundImage: string
  speed?: number
  className?: string
  overlay?: boolean
  overlayOpacity?: number
}

const ParallaxSection = ({ 
  children, 
  backgroundImage, 
  speed = 0.5, 
  className = '', 
  overlay = true, 
  overlayOpacity = 0.4 
}: ParallaxSectionProps) => {
  const [offsetY, setOffsetY] = useState(0)
  const [imageLoaded, setImageLoaded] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  // Preload image
  useEffect(() => {
    const img = new Image()
    img.onload = () => setImageLoaded(true)
    img.onerror = () => {
      console.warn('Failed to load background image:', backgroundImage)
      setImageLoaded(false)
    }
    img.src = backgroundImage
  }, [backgroundImage])

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking && elementRef.current) {
        requestAnimationFrame(() => {
          const rect = elementRef.current?.getBoundingClientRect()
          if (rect) {
            const scrolled = window.pageYOffset
            const rate = scrolled * -speed
            setOffsetY(rate)
          }
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed])

  return (
    <section ref={elementRef} className={`relative overflow-hidden parallax-container ${className}`}>
      {/* Parallax Background */}
      <div 
        className={`absolute inset-0 will-change-transform transition-opacity duration-500 ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          backgroundImage: imageLoaded ? `url(${backgroundImage})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'scroll',
          transform: `translate3d(0, ${offsetY}px, 0) scale(1.1)`,
          transformStyle: 'preserve-3d',
          minHeight: '100%',
        }}
      />
      
      {/* Fallback gradient background */}
      {!imageLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-blue-900" />
      )}
      
      {/* Overlay */}
      {overlay && (
        <div 
          className="absolute inset-0 bg-primary/80"
          style={{ opacity: overlayOpacity }}
        />
      )}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </section>
  )
}

export default ParallaxSection
