'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="top-0 w-full fixed z-50 p-4 lg:p-5">
      <div className={`bg-linear-to-r from-black via-black/20 to-black shadow-lg rounded-xl transition-all duration-300 ${
        isScrolled ? 'shadow-2xl' : 'shadow-md'
      }`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center p-3 lg:p-4">
          <motion.h1 
            className="text-xl lg:text-2xl font-bold text-gray-100"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            Ovulan
          </motion.h1>
          
          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex gap-8 text-gray-100 font-medium">
              {navLinks.map((link, index) => (
                <motion.li 
                  key={link.href}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link 
                    href={link.href}
                    className="hover:text-white transition-colors duration-300 relative group"
                  >
                    {link.name}
                    <motion.span 
                      className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white"
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </motion.li>
              ))}
            </ul>
            <motion.button 
              className="bg-white text-black px-6 py-2.5 rounded-lg hover:bg-gray-200 font-medium shadow-lg backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Order Now
            </motion.button>
          </div>

          <div className="flex lg:hidden items-center gap-3">
            <motion.button 
              className="bg-white text-black px-3 py-1.5 rounded-lg font-medium text-sm shadow-md backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Order
            </motion.button>
            <motion.button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-100 p-1 backdrop-blur-sm rounded-lg hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="w-6 h-6 flex flex-col justify-between">
                <motion.span 
                  className="w-full h-0.5 bg-white rounded-full"
                  animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                />
                <motion.span 
                  className="w-full h-0.5 bg-white rounded-full"
                  animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                />
                <motion.span 
                  className="w-full h-0.5 bg-white rounded-full"
                  animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
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
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
            />
            
            <motion.div 
              className="fixed top-0 right-0 h-full w-80 bg-linear-to-b from-black/95 via-black/50 to-black/95 backdrop-blur-2xl z-50 lg:hidden shadow-2xl border-l border-white/20"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 400, damping: 40 }}
            >
              <div className="flex flex-col h-full pt-8 px-6">
                <div className="flex justify-end pt-4 pb-8">
                  <motion.button 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-gray-100 p-2 hover:bg-white/20 rounded-lg transition-colors backdrop-blur-sm"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <div className="w-6 h-6 relative">
                      <motion.span 
                        className="absolute top-1/2 left-0 w-full h-0.5 bg-white rounded-full transform -rotate-45"
                      />
                      <motion.span 
                        className="absolute top-1/2 left-0 w-full h-0.5 bg-white rounded-full transform rotate-45"
                      />
                    </div>
                  </motion.button>
                </div>

                <motion.h1 
                  className="text-2xl font-bold text-gray-100 mb-8 px-4"
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  Ovulan
                </motion.h1>

                <ul className="space-y-2">
                  {navLinks.map((link, index) => (
                    <motion.li 
                      key={link.href}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: 50, opacity: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link 
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="block text-lg font-medium text-gray-100 hover:text-white py-4 px-4 rounded-xl hover:bg-white/20 transition-all duration-300 border-b border-white/10 backdrop-blur-sm"
                      >
                        {link.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
                
                <motion.div 
                  className="mt-auto mb-8 pt-8 border-t border-white/20"
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 50, opacity: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <motion.button 
                    className="w-full bg-white text-black py-4 rounded-xl font-medium text-lg shadow-lg backdrop-blur-sm hover:bg-gray-100 transition-colors"
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