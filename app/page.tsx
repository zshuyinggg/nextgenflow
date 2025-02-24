'use client'

import { useState } from 'react'
import Link from "next/link"
import Testimonials from "./components/Testimonials"
import Newsletter from "./components/Newsletter"

export default function Home() {
  const [activeTab, setActiveTab] = useState('services')

  return (
    <div className="bg-background text-text">
      {/* Hero Section */}
      <section className="hero-background min-h-screen flex items-center relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Revolutionize Your <span className="text-primary">Workflow</span> with AI
              </h1>
              <p className="text-xl mb-8 text-text-secondary">
                NextGenFlow delivers cutting-edge AI and software solutions to optimize operations for forward-thinking
                businesses.
              </p>
              <div className="flex space-x-4">
                <Link href="#services" className="btn-secondary">
                  Services & Use Cases
                </Link>
                <Link href="https://calendly.com/zhusy1997/free-consultation" className="btn-primary">
                  Book a Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Floating Elements */}
        <div
          className="absolute top-1/4 left-1/4 w-16 h-16 bg-blue-500 rounded-full opacity-50 floating"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="absolute top-3/4 left-1/2 w-24 h-24 bg-purple-500 rounded-full opacity-30 floating"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/4 w-20 h-20 bg-green-500 rounded-full opacity-40 floating"
          style={{ animationDelay: "4s" }}
        ></div>
      </section>

      {/* Services and Use Cases */}
      <section id="services" className="py-20 bg-card-bg">
        <div className="container mx-auto px-6">
          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-lg border border-white/20 p-1">
              <button 
                onClick={() => setActiveTab('services')}
                className={`px-6 py-2 rounded-md transition-all duration-300 ${
                  activeTab === 'services' 
                    ? 'bg-white/20 text-white' 
                    : 'text-white/70 hover:text-white'
                }`}
              >
                Our Services
              </button>
              <button 
                onClick={() => setActiveTab('useCases')}
                className={`px-6 py-2 rounded-md transition-all duration-300 ${
                  activeTab === 'useCases' 
                    ? 'bg-white/20 text-white' 
                    : 'text-white/70 hover:text-white'
                }`}
              >
                Use Cases
              </button>
            </div>
          </div>

          {activeTab === 'services' ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                {[
                  {
                    title: "AI Integration",
                    description: "Seamlessly integrate AI solutions into your business processes. From chatbots to predictive analytics, we help you harness the power of artificial intelligence to enhance customer experience and automate routine tasks.",
                    features: ["Custom AI Model Development", "Natural Language Processing", "Machine Learning Integration"],
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-12 h-12"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    )
                  },
                  {
                    title: "Workflow Optimization",
                    description: "Streamline your business operations with data-driven insights and automated workflows. We analyze your processes, identify bottlenecks, and implement solutions that save time and reduce costs.",
                    features: ["Process Analysis & Mapping", "Automation Implementation", "Performance Monitoring"],
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-12 h-12"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    )
                  },
                  {
                    title: "Custom Software Development",
                    description: "Build tailored software solutions that perfectly match your business needs. From web applications to enterprise systems, we create scalable and secure solutions using cutting-edge technologies.",
                    features: ["Web & Mobile Applications", "Enterprise Software", "API Development"],
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-12 h-12"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        />
                      </svg>
                    )
                  }
                ].map((service, index) => (
                  <div
                    key={index}
                    className="glass-effect p-8 rounded-lg shadow-xl"
                  >
                    <div className="text-primary text-4xl mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-semibold mb-4 text-primary">{service.title}</h3>
                    <p className="text-text-secondary mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-text-secondary">
                          <span className="text-primary mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <Link 
                  href="/services" 
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:underline text-lg"
                >
                  Explore All Services 
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
              </div>
            </>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                {[
                  {
                    title: "AI Marketer",
                    description: "Experience round-the-clock marketing with our AI agent that actively engages with your target audience on X and Reddit. This intelligent system analyzes conversations, identifies opportunities, and maintains meaningful interactions.",
                    benefits: ["24/7 Social Media Engagement", "Automated Lead Generation", "Content Optimization"]
                  },
                  {
                    title: "AI SEO Expert",
                    description: "Boost your website's visibility with our AI SEO specialist that never sleeps. It continuously researches trending keywords, analyzes competitor content, and generates SEO-optimized blog posts tailored to your industry.",
                    benefits: ["Keyword Research & Analysis", "Content Generation", "Traffic Growth Optimization"]
                  }
                ].map((useCase, index) => (
                  <div
                    key={index}
                    className="glass-effect p-8 rounded-lg shadow-xl"
                  >
                    <h3 className="text-2xl font-semibold mb-4 text-primary">{useCase.title}</h3>
                    <p className="text-text-secondary mb-6">
                      {useCase.description}
                    </p>
                    <ul className="space-y-2">
                      {useCase.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center text-text-secondary">
                          <span className="text-primary mr-2">•</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <Link 
                  href="/services" 
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:underline text-lg"
                >
                  Discover More Use Cases
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Call to Action */}
      <section className="py-20 bg-card-bg text-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join the ranks of forward-thinking companies leveraging NextGenFlow's AI solutions to redefine industry
              standards.
            </p>
            <Link
              href="https://calendly.com/zhusy1997/free-consultation"
              className="bg-primary text-white font-semibold py-3 px-8 rounded-full hover:bg-opacity-90 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Book a Free Consultation
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-primary/20 rounded-tr-full filter blur-3xl"></div>
      </section>

      {/* Newsletter Section */}
      <Newsletter />
    </div>
  )
}

