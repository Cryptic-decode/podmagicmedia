import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              {/* Logo */}
              <div className="w-10 h-10 bg-brand-yellow rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-brand-black" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 715 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">PodMagic</h3>
                <p className="text-xs text-gray-400 -mt-1">Media</p>
              </div>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed max-w-md">
              Your Podcast, Our Magic
            </p>
            <p className="text-gray-400 mt-4 max-w-lg">
              We help creators and brands stay consistent, sound professional, and grow profitably — one post, one episode, one video at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-brand-yellow transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-brand-yellow transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-brand-yellow transition-colors duration-200">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-brand-yellow transition-colors duration-200">
                  Get Started
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <span className="text-gray-300">Podcast Management</span>
              </li>
              <li>
                <span className="text-gray-300">YouTube Support</span>
              </li>
              <li>
                <span className="text-gray-300">Social Media Management</span>
              </li>
              <li>
                <span className="text-gray-300">Content Strategy</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Info & Social */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Get in Touch</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-brand-yellow mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <a href="mailto:hello@podmagicmedia.com" className="text-gray-300 hover:text-brand-yellow transition-colors duration-200">
                    hello@podmagicmedia.com
                  </a>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-brand-yellow mr-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
                  </svg>
                  <a href="https://wa.me/234XXXXXXXXX" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-brand-yellow transition-colors duration-200">
                    +234 XXX XXX XXXX
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://instagram.com/podmagicmedia" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-brand-yellow hover:text-brand-black transition-colors duration-200"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.621 5.367 11.988 11.988 11.988s11.987-5.367 11.987-11.988C24.004 5.367 18.637.001 12.017.001zM8.948 16.011c-.664 0-1.201-.538-1.201-1.201s.537-1.2 1.201-1.2c.664 0 1.201.537 1.201 1.2s-.537 1.201-1.201 1.201zm6.105 0c-.664 0-1.201-.538-1.201-1.201s.537-1.2 1.201-1.2c.664 0 1.201.537 1.201 1.2s-.537 1.201-1.201 1.201z"/>
                  </svg>
                </a>
                <a 
                  href="https://twitter.com/podmagicmedia" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-brand-yellow hover:text-brand-black transition-colors duration-200"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a 
                  href="https://linkedin.com/company/podmagicmedia" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-brand-yellow hover:text-brand-black transition-colors duration-200"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} PodMagic Media. All rights reserved. | Built with passion for creators worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
} 