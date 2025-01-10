'use client'
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const section = document.querySelector(sectionId);
    if (section) {
      const navHeight = 80; // Height of the navbar
      const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: sectionTop - navHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">InnoSphere</h3>
            <p className="text-sm">
              Revolutionizing productivity through AI-powered solutions. Empowering individuals and teams to achieve their full potential.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a onClick={() => scrollToSection('#hero')} className="hover:text-white transition-colors cursor-pointer">Home</a></li>
              <li><a onClick={() => scrollToSection('#about')} className="hover:text-white transition-colors cursor-pointer">About</a></li>
              <li><a onClick={() => scrollToSection('#features')} className="hover:text-white transition-colors cursor-pointer">Features</a></li>
              <li><a onClick={() => scrollToSection('#testimonials')} className="hover:text-white transition-colors cursor-pointer">Testimonials</a></li>
              <li><a onClick={() => scrollToSection('#team')} className="hover:text-white transition-colors cursor-pointer">Team</a></li>
              <li><a onClick={() => scrollToSection('#contact')} className="hover:text-white transition-colors cursor-pointer">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <Twitter size={24} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                <Facebook size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <Linkedin size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} InnoSphere. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

