import { Lightbulb, Users, Rocket, TrendingUp } from 'lucide-react'

const milestones = [
  {
    year: 2021,
    title: 'Founded',
    description: 'InnoSphere was born with a vision to revolutionize productivity.',
    icon: Lightbulb
  },
  {
    year: 2022,
    title: 'First Product Launch',
    description: 'Released our AI-powered task management tool.',
    icon: Rocket
  },
  {
    year: 2023,
    title: '10,000 Users',
    description: 'Reached a milestone of 10,000 active users.',
    icon: Users
  },
  {
    year: 2024,
    title: 'Series A Funding',
    description: 'Secured $5M in Series A funding to accelerate growth.',
    icon: TrendingUp
  }
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-gray-900 font-bold text-center mb-12">About InnoSphere</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl text-gray-900 font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-600 mb-6">
              At InnoSphere, we're on a mission to empower individuals and teams to achieve their full potential through innovative, AI-driven productivity solutions. We believe that by simplifying complex workflows and leveraging cutting-edge technology, we can help people focus on what truly matters.
            </p>
            <h3 className="text-2xl text-gray-900 font-semibold mb-4">Our Vision</h3>
            <p className="text-gray-600">
              We envision a world where AI seamlessly integrates into daily work routines, enhancing human capabilities and fostering creativity. InnoSphere aims to be at the forefront of this revolution, continuously pushing the boundaries of what's possible in productivity technology.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl text-gray-900 font-semibold mb-6 text-center">Our Core Values</h3>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-900">
                <Lightbulb className="text-blue-500 mr-4" />
                <span>Innovation: Constantly seeking new solutions</span>
              </li>
              <li className="flex items-center text-gray-900">
                <Users className="text-blue-500 mr-4" />
                <span>Customer-Centric: Putting our users first</span>
              </li>
              <li className="flex items-center text-gray-900">
                <Rocket className="text-blue-500 mr-4" />
                <span>Simplicity: Making complex tasks effortless</span>
              </li>
            </ul>
          </div>
        </div>
        
        <h3 className="text-2xl text-gray-900 font-semibold text-center mb-8">Our Journey</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {milestones.map((milestone, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
              <milestone.icon className="text-blue-500 w-12 h-12 mb-4 mx-auto" />
              <h4 className="text-xl text-gray-900 font-semibold mb-2 text-center">{milestone.year}</h4>
              <h5 className="text-lg text-gray-900 font-medium mb-2 text-center">{milestone.title}</h5>
              <p className="text-gray-600 text-center">{milestone.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

