'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Linkedin, Twitter } from 'lucide-react'

const teamMembers = [
  {
    name: "Dr. Emily Chen",
    role: "Founder & CEO",
    avatar: "/placeholder.svg?height=300&width=300",
    funFact: "Can solve a Rubik's cube in under a minute",
    linkedin: "https://www.linkedin.com/",
    twitter: "https://twitter.com/"
  },
  {
    name: "Michael Rodriguez",
    role: "CTO",
    avatar: "/placeholder.svg?height=300&width=300",
    funFact: "Competed in the International Math Olympiad",
    linkedin: "https://www.linkedin.com/",
    twitter: "https://twitter.com/"
  },
  {
    name: "Sarah Johnson",
    role: "Head of Product",
    avatar: "/placeholder.svg?height=300&width=300",
    funFact: "Published AI researcher with over 50 citations",
    linkedin: "https://www.linkedin.com/",
    twitter: "https://twitter.com/"
  },
  {
    name: "Alex Patel",
    role: "Lead Designer",
    avatar: "/placeholder.svg?height=300&width=300",
    funFact: "Former professional e-sports player",
    linkedin: "https://www.linkedin.com/",
    twitter: "https://twitter.com/"
  },
  {
    name: "Olivia Kim",
    role: "Head of Marketing",
    avatar: "/placeholder.svg?height=300&width=300",
    funFact: "Speaks five languages fluently",
    linkedin: "https://www.linkedin.com/",
    twitter: "https://twitter.com/"
  },
  {
    name: "David Thompson",
    role: "Head of Customer Success",
    avatar: "/placeholder.svg?height=300&width=300",
    funFact: "Former NASA intern",
    linkedin: "https://www.linkedin.com/",
    twitter: "https://twitter.com/"
  }
]

export default function Team() {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Meet Our Team</h2>
        <p className="text-xl text-gray-600 text-center max-w-2xl mx-auto mb-16">
          The brilliant minds behind InnoSphere's innovative AI solutions
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredMember(index)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative">
                    <Avatar className="w-full h-64 rounded-none">
                      <AvatarImage src={member.avatar} alt={member.name} className="object-cover" />
                      <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <motion.div 
                      className="absolute inset-0 bg-blue-500 bg-opacity-80 flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredMember === index ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-white text-center px-4">"{member.funFact}"</p>
                    </motion.div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-gray-600 mb-4">{member.role}</p>
                    <div className="flex space-x-4">
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">
                        <Linkedin size={20} />
                      </a>
                      <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500">
                        <Twitter size={20} />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

