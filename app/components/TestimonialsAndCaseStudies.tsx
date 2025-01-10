'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import Link from 'next/link'

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechInnovate",
    avatar: "/placeholder.svg?height=80&width=80",
    quote: "InnoSphere has revolutionized our workflow. The AI-powered task management has increased our team's productivity by 40%.",
  },
  {
    name: "Michael Chen",
    role: "Product Manager, GlobalTech",
    avatar: "/placeholder.svg?height=80&width=80",
    quote: "The smart scheduling feature is a game-changer. It's like having a personal assistant that knows exactly how I work.",
  },
  {
    name: "Emily Rodriguez",
    role: "CTO, FutureSoft",
    avatar: "/placeholder.svg?height=80&width=80",
    quote: "InnoSphere's collaboration tools have transformed how our remote team works together. It's intuitive and powerful.",
  },
]

const caseStudies = [
  {
    company: "TechInnovate",
    logo: "/placeholder.svg?height=60&width=120",
    title: "40% Increase in Team Productivity",
    description: "TechInnovate implemented InnoSphere's AI-powered task management system, resulting in a 40% increase in team productivity within the first three months.",
  },
  {
    company: "GlobalTech",
    logo: "/placeholder.svg?height=60&width=120",
    title: "25% Reduction in Meeting Times",
    description: "By utilizing InnoSphere's smart scheduling and collaboration features, GlobalTech reduced their average meeting times by 25%, freeing up valuable time for focused work.",
  },
  {
    company: "FutureSoft",
    logo: "/placeholder.svg?height=60&width=120",
    title: "Seamless Remote Collaboration",
    description: "FutureSoft's remote team leveraged InnoSphere's collaboration tools to streamline their workflow, resulting in a 30% increase in project completion rates.",
  },
]

export default function TestimonialsAndCaseStudies() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">What Our Clients Say</h2>

        {/* Testimonials */}
        <div className="mb-20">
          <Card className="bg-white">
            <CardContent className="p-10">
              <div className="flex flex-col items-center text-center">
                <Avatar className="w-20 h-20 mb-4">
                  <AvatarImage src={testimonials[activeTestimonial].avatar} alt={testimonials[activeTestimonial].name} />
                  <AvatarFallback>{testimonials[activeTestimonial].name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <blockquote className="text-xl text-gray-700 mb-4">"{testimonials[activeTestimonial].quote}"</blockquote>
                <cite className="not-italic">
                  <strong className="text-gray-900">{testimonials[activeTestimonial].name}</strong>
                  <span className="text-gray-600 block">{testimonials[activeTestimonial].role}</span>
                </cite>
              </div>
            </CardContent>
          </Card>
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                className={`w-3 h-3 rounded-full p-0 ${index === activeTestimonial ? 'bg-blue-500' : 'bg-gray-300'}`}
                onClick={() => setActiveTestimonial(index)}
              />
            ))}
          </div>
        </div>

        {/* Case Studies */}
        <h3 className="text-3xl font-bold text-center text-gray-900 mb-10">Success Stories</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <img src={study.logo} alt={study.company} className="h-12 object-contain mb-4" />
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">{study.title}</h4>
                  <p className="text-gray-600 mb-4 flex-grow">{study.description}</p>
                  <Button 
                    variant="outline"
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
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

