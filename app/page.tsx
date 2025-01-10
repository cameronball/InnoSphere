import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import Features from './components/Features'
import TestimonialsAndCaseStudies from './components/TestimonialsAndCaseStudies'
import Team from './components/Team'
import Footer from './components/Footer'
import ErrorBoundary from './components/ErrorBoundary'

const ContactCTA = dynamic(() => import('./components/ContactCTA'), {
  loading: () => <p>Loading...</p>,
})

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col relative">
      <Navbar />
      <ErrorBoundary>
        <section id="hero">
          <Hero />
        </section>
      </ErrorBoundary>
      <ErrorBoundary>
        <section id="about">
          <About />
        </section>
      </ErrorBoundary>
      <ErrorBoundary>
        <section id="features">
          <Features />
        </section>
      </ErrorBoundary>
      <ErrorBoundary>
        <section id="testimonials">
          <TestimonialsAndCaseStudies />
        </section>
      </ErrorBoundary>
      <ErrorBoundary>
        <section id="team">
          <Team />
        </section>
      </ErrorBoundary>
      <ErrorBoundary>
        <section id="contact">
          <Suspense fallback={<div>Loading...</div>}>
            <ContactCTA />
          </Suspense>
        </section>
      </ErrorBoundary>
      <Footer />
    </main>
  )
}

