'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Collections', href: '#collections' },
    { name: 'Features', href: '#features' },
    { name: 'Reviews', href: '#reviews' },
  ];

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4 lg:p-6 transition-all duration-500">
      <div className={`mx-auto max-w-7xl rounded-2xl border transition-all duration-500 ${
        isScrolled 
          ? 'bg-black/60 backdrop-blur-xl border-white/10 shadow-2xl py-2 sm:py-3' 
          : 'bg-black/30 backdrop-blur-md border-white/5 shadow-lg py-3 sm:py-4'
      }`}>
        <div className="flex justify-between items-center px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl lg:text-2xl font-black tracking-widest bg-gradient-to-r from-white via-gray-200 to-gray-500 bg-clip-text text-transparent">
                OVULAN
              </span>
            </Link>
          </motion.div>
          
          <div className="hidden lg:flex items-center gap-10">
            <ul className="flex gap-8 text-sm text-gray-300 font-medium tracking-wide">
              {navLinks.map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Link 
                    href={link.href}
                    className="hover:text-white transition-colors duration-300 relative py-2 group"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white/80 transition-all duration-300 group-hover:w-full" />
                  </Link>
                </motion.li>
              ))}
            </ul>
            <motion.button 
              className="bg-white/10 hover:bg-white text-white hover:text-black border border-white/15 px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 backdrop-blur-sm shadow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Order Now
            </motion.button>
          </div>

          <div className="flex lg:hidden items-center gap-4">
            <motion.button 
              className="bg-white text-black px-4 py-1.5 rounded-full font-semibold text-xs shadow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Order
            </motion.button>
            <motion.button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2 rounded-xl bg-white/5 border border-white/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-5 h-4 flex flex-col justify-between relative">
                <motion.span 
                  className="w-full h-0.5 bg-white rounded-full"
                  animate={isMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span 
                  className="w-full h-0.5 bg-white rounded-full"
                  animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span 
                  className="w-full h-0.5 bg-white rounded-full"
                  animate={isMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.2 }}
                />
              </div>
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div 
              className="fixed inset-0 bg-black/70 backdrop-blur-md z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
            />
            
            <motion.div 
              className="fixed top-0 right-0 h-full w-80 bg-black/85 backdrop-blur-2xl z-50 lg:hidden shadow-2xl border-l border-white/10"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="flex flex-col h-full pt-8 px-6">
                <div className="flex justify-between items-center pt-4 pb-8 border-b border-white/10">
                  <span className="text-xl font-black tracking-widest text-white">OVULAN</span>
                  <motion.button 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-white p-2 hover:bg-white/10 rounded-xl transition-colors border border-white/10"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="w-5 h-5 relative flex items-center justify-center">
                      <span className="absolute w-full h-0.5 bg-white rounded-full transform -rotate-45" />
                      <span className="absolute w-full h-0.5 bg-white rounded-full transform rotate-45" />
                    </div>
                  </motion.button>
                </div>

                <ul className="space-y-4 mt-8">
                  {navLinks.map((link, index) => (
                    <motion.li 
                      key={link.name}
                      initial={{ x: 30, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: 30, opacity: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link 
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="block text-lg font-medium text-gray-300 hover:text-white py-3 px-4 rounded-xl hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/5"
                      >
                        {link.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
                
                <motion.div 
                  className="mt-auto mb-12 pt-8 border-t border-white/10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <motion.button 
                    className="w-full bg-white text-black py-3.5 rounded-full font-bold text-sm shadow-xl hover:bg-gray-100 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Order Now
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar