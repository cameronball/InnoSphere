import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import Features from './components/Features'
import TestimonialsAndCaseStudies from './components/TestimonialsAndCaseStudies'
import Team from './components/Team'
import ContactCTA from './components/ContactCTA'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col relative">
      <Navbar />
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="testimonials">
        <TestimonialsAndCaseStudies />
      </section>
      <section id="team">
        <Team />
      </section>
      <section id="contact">
        <ContactCTA />
      </section>
      <Footer />
    </main>
  )
}

