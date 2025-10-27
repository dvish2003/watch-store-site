import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="bg-white shadow top-0 w-full fixed z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-gray-800">Ovulan</h1>
        <div className="flex items-center gap-6">
          <ul className="flex gap-6 text-gray-700 font-medium">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
          <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-600 transition">
            Order Now
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
