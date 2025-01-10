'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, BrainCircuit, Users2, Zap, MessageSquareMore, Lock } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from 'next/link'

const features = [
  {
    title: 'Smart Scheduling',
    description: 'AI-powered calendar management that learns your preferences and optimizes your time.',
    icon: Calendar,
  },
  {
    title: 'AI-Powered Task Management',
    description: 'Intelligent task prioritization and automated workflow suggestions.',
    icon: BrainCircuit,
  },
  {
    title: 'Seamless Collaboration',
    description: 'Real-time team coordination with smart meeting scheduling and resource allocation.',
    icon: Users2,
  },
  {
    title: 'Instant Insights',
    description: 'Real-time analytics and productivity metrics to optimize your workflow.',
    icon: Zap,
  },
  {
    title: 'Smart Communications',
    description: 'AI-assisted email and message drafting with tone and context awareness.',
    icon: MessageSquareMore,
  },
  {
    title: 'Enterprise Security',
    description: 'Bank-grade encryption and compliance with major security standards.',
    icon: Lock,
  },
]

export default function Features() {
  const [activeFeature, setActiveFeature] = useState<number | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Features</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover how InnoSphere's AI-powered tools can transform your productivity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <AnimatePresence>
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Card
                  className={`relative overflow-hidden transition-colors hover:bg-blue-50 h-full ${
                    activeFeature === index ? 'border-blue-500' : ''
                  }`}
                  onMouseEnter={() => setActiveFeature(index)}
                  onMouseLeave={() => setActiveFeature(null)}
                >
                  <CardContent className="p-6 flex flex-col h-full">
                    <feature.icon className="w-12 h-12 text-blue-500 mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 flex-grow">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white"
            onClick={(e) => {
              e.preventDefault();
              const contactSection = document.querySelector('#contact');
              if (contactSection) {
                const navHeight = 80; // Height of the navbar
                const sectionTop = contactSection.getBoundingClientRect().top + window.pageYOffset;
                window.scrollTo({
                  top: sectionTop - navHeight,
                  behavior: 'smooth'
                });
              }
            }}
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  )
}

