import Link from 'next/link'
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react'


const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <div className="text-2xl font-bold mb-4">Agape Studios</div>
            <p className="text-blue-100 mb-4 max-w-md">
              Professional 3D virtual tours for properties, businesses, and real estate. 
              Bringing your spaces to life with immersive digital experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-100 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-blue-100 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-blue-100 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-blue-100 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-blue-100 hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-blue-100 hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-blue-100 hover:text-white transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-blue-100 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-blue-100">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm">35 Hare St, London SE18 6NE</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-100">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm">020 8129 5004</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-100">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm">info@agapestudios.co.uk</span>
              </div>
            </div>
            
            {/* Location Link */}
            <div className="mt-4">
              <a 
                href="https://www.google.com/maps/place/35+Hare+St,+London+SE18+6NE,+UK"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-100 hover:text-white transition-colors duration-200 text-sm"
              >
                <span>View on Google Maps</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
          <p className="text-blue-100 text-sm">
            © {new Date().getFullYear()} Agape Studios. All rights reserved.
          </p>
          <p className="text-blue-200 text-xs mt-2">
            Website built by DBinnovates
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
