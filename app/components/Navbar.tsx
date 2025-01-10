'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Mountain } from 'lucide-react'

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.querySelector('#hero')?.clientHeight
      if (heroHeight) {
        setIsSticky(window.scrollY > heroHeight - 80)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    const section = document.querySelector(sectionId)
    if (section) {
      const navHeight = 80 // Height of the navbar
      const sectionTop = section.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: sectionTop - navHeight,
        behavior: 'smooth'
      })
    }
  }

  return (
    <nav className={`
      w-full h-20 transition-all duration-300 ease-in-out z-50
      ${isSticky ? 'fixed top-0 bg-white shadow-md' : 'absolute top-0 bg-transparent'}
    `}>
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <Link 
          href="/" 
          onClick={(e) => scrollToSection(e, '#hero')}
          className="flex items-center space-x-2"
        >
          <Mountain className={`h-8 w-8 ${isSticky ? 'text-blue-600' : 'text-white'}`} />
          <span className={`text-2xl font-bold ${isSticky ? 'text-gray-900' : 'text-white'}`}>InnoSphere</span>
        </Link>
        <div className="hidden md:flex space-x-8">
          <Link 
            href="#about" 
            onClick={(e) => scrollToSection(e, '#about')}
            className={`${isSticky ? 'text-gray-600 hover:text-gray-900' : 'text-gray-200 hover:text-white'}`}
          >
            About
          </Link>
          <Link 
            href="#features" 
            onClick={(e) => scrollToSection(e, '#features')}
            className={`${isSticky ? 'text-gray-600 hover:text-gray-900' : 'text-gray-200 hover:text-white'}`}
          >
            Features
          </Link>
          <Link 
            href="#testimonials" 
            onClick={(e) => scrollToSection(e, '#testimonials')}
            className={`${isSticky ? 'text-gray-600 hover:text-gray-900' : 'text-gray-200 hover:text-white'}`}
          >
            Testimonials
          </Link>
          <Link 
            href="#team" 
            onClick={(e) => scrollToSection(e, '#team')}
            className={`${isSticky ? 'text-gray-600 hover:text-gray-900' : 'text-gray-200 hover:text-white'}`}
          >
            Team
          </Link>
          <Link 
            href="#contact" 
            onClick={(e) => scrollToSection(e, '#contact')}
            className={`${isSticky ? 'text-gray-600 hover:text-gray-900' : 'text-gray-200 hover:text-white'}`}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}

