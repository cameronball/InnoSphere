'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'
import { toast } from 'sonner'

export default function ContactCTA() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [email, setEmail] = useState('')

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    toast.success('Message sent successfully!')
    setIsSubmitting(false)
    const form = event.target as HTMLFormElement
    form.reset()
  }

  const handleNewsletterSignup = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    
    // Simulate newsletter signup
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    toast.success('Successfully signed up for newsletter!')
    setIsSubmitting(false)
    setEmail('')
  }

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-white shadow-sm rounded-xl">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold text-gray-900">Contact Us</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-900">Name</Label>
                    <Input 
                      id="name" 
                      placeholder="Your name" 
                      className="border-gray-200 focus:border-gray-300 focus:ring-gray-200 rounded-lg text-gray-900 placeholder:text-gray-500" 
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-900">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Your email" 
                      className="border-gray-200 focus:border-gray-300 focus:ring-gray-200 rounded-lg text-gray-900 placeholder:text-gray-500" 
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="reason" className="text-gray-900">Reason for Inquiry</Label>
                    <Select>
                      <SelectTrigger 
                        id="reason"
                        className="border-gray-200 focus:border-gray-300 focus:ring-gray-200 rounded-lg text-gray-900 placeholder:text-gray-500"
                      >
                        <SelectValue placeholder="Select a reason" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="support">Technical Support</SelectItem>
                        <SelectItem value="sales">Sales</SelectItem>
                        <SelectItem value="partnership">Partnership</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gray-900">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Your message" 
                      className="min-h-[100px] border-gray-200 focus:border-gray-300 focus:ring-gray-200 rounded-lg text-gray-900 placeholder:text-gray-500" 
                      required 
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-gray-900 hover:bg-gray-800 text-white rounded-lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <Card className="bg-white shadow-sm rounded-xl">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold text-gray-900">Stay Updated</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleNewsletterSignup} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="newsletter-email" className="text-gray-900">Email</Label>
                    <Input 
                      id="newsletter-email" 
                      type="email" 
                      placeholder="Your email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="border-gray-200 focus:border-gray-300 focus:ring-gray-200 rounded-lg text-gray-900 placeholder:text-gray-500"
                      required 
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-gray-900 hover:bg-gray-800 text-white rounded-lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Signing up...' : 'Sign Up for Newsletter'}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-sm rounded-xl">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold text-gray-900">Connect With Us</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center space-x-4">
                  <Button variant="outline" size="icon" asChild className="border-gray-200 hover:bg-gray-50 rounded-lg">
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                      <Twitter className="h-4 w-4 text-gray-700" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild className="border-gray-200 hover:bg-gray-50 rounded-lg">
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                      <Linkedin className="h-4 w-4 text-gray-700" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild className="border-gray-200 hover:bg-gray-50 rounded-lg">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                      <Facebook className="h-4 w-4 text-gray-700" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild className="border-gray-200 hover:bg-gray-50 rounded-lg">
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                      <Instagram className="h-4 w-4 text-gray-700" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

