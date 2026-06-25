import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-12 border-b border-white/5">
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <span className="text-xl font-black tracking-widest text-white">OVULAN</span>
            <p className="text-gray-400 text-sm font-light leading-relaxed max-w-xs">
              Meticulously crafted timepieces honoring the intersection of contemporary design and vintage craftsmanship.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Navigation</h4>
            <ul className="space-y-2.5 text-sm text-gray-400 font-light">
              <li>
                <Link href="/" className="hover:text-white transition-colors duration-300">Home</Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-white transition-colors duration-300">About Us</Link>
              </li>
              <li>
                <Link href="#collections" className="hover:text-white transition-colors duration-300">Collections</Link>
              </li>
              <li>
                <Link href="#features" className="hover:text-white transition-colors duration-300">Features</Link>
              </li>
              <li>
                <Link href="#reviews" className="hover:text-white transition-colors duration-300">Reviews</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Collections */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Collections</h4>
            <ul className="space-y-2.5 text-sm text-gray-400 font-light">
              <li>
                <span className="hover:text-white cursor-pointer transition-colors duration-300">Aureum Classics</span>
              </li>
              <li>
                <span className="hover:text-white cursor-pointer transition-colors duration-300">Midnight Chrono</span>
              </li>
              <li>
                <span className="hover:text-white cursor-pointer transition-colors duration-300">Argentum Masterpiece</span>
              </li>
              <li>
                <span className="hover:text-white cursor-pointer transition-colors duration-300">Nebula Limited Edition</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Socials */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Get In Touch</h4>
            <ul className="space-y-2.5 text-sm text-gray-400 font-light">
              <li>
                <span>Email: concierge@ovulan.com</span>
              </li>
              <li>
                <span>Phone: +1 (800) 555-TIME</span>
              </li>
              <li>
                <span>Atelier: Geneva, Switzerland</span>
              </li>
            </ul>
            <div className="flex gap-4 pt-2">
              <span className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-xs text-gray-400 hover:text-white hover:border-white transition-colors cursor-pointer">
                IG
              </span>
              <span className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-xs text-gray-400 hover:text-white hover:border-white transition-colors cursor-pointer">
                FB
              </span>
              <span className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-xs text-gray-400 hover:text-white hover:border-white transition-colors cursor-pointer">
                YT
              </span>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-light">
          <p>© {new Date().getFullYear()} Ovulan Timepieces. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-gray-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-gray-400 cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
