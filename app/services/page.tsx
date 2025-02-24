'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState('services')

  return (
    <div className="pt-24 pb-16 bg-background">
      {/* Hero Section */}
      <section className="container mx-auto px-6 mb-16">
        <h1 className="text-5xl font-bold mb-6">
          Our <span className="text-primary">Services</span> & Use Cases
        </h1>
        <p className="text-xl text-text-secondary max-w-3xl">
          Discover how NextGenFlow's AI-powered solutions can transform your business operations and drive growth through innovative technology integration.
        </p>
      </section>

      {/* Tabs Section */}
      <section className="container mx-auto px-6">
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "AI Integration",
                description: "Seamlessly integrate AI solutions into your business processes. From chatbots to predictive analytics, we help you harness the power of artificial intelligence to enhance customer experience and automate routine tasks.",
                features: [
                  "Custom AI Model Development",
                  "Natural Language Processing",
                  "Machine Learning Integration",
                  "Automated Decision Making",
                  "Predictive Analytics"
                ]
              },
              {
                title: "Workflow Optimization",
                description: "Streamline your business operations with data-driven insights and automated workflows. We analyze your processes, identify bottlenecks, and implement solutions that save time and reduce costs.",
                features: [
                  "Process Analysis & Mapping",
                  "Automation Implementation",
                  "Performance Monitoring",
                  "Resource Optimization",
                  "Continuous Improvement"
                ]
              },
              {
                title: "Custom Software Development",
                description: "Build tailored software solutions that perfectly match your business needs. From web applications to enterprise systems, we create scalable and secure solutions using cutting-edge technologies.",
                features: [
                  "Web & Mobile Applications",
                  "Enterprise Software",
                  "API Development",
                  "Cloud Solutions",
                  "Legacy System Integration"
                ]
              }
            ].map((service, index) => (
              <div
                key={index}
                className="glass-effect p-8 rounded-lg shadow-xl"
              >
                <h3 className="text-2xl font-semibold mb-4 text-primary">{service.title}</h3>
                <p className="text-text-secondary mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-text-secondary">
                      <span className="text-primary mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  href="/contact" 
                  className="inline-block text-primary font-semibold hover:underline"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "AI Marketer",
                description: "Experience round-the-clock marketing with our AI agent that actively engages with your target audience on X and Reddit. This intelligent system analyzes conversations, identifies opportunities, and maintains meaningful interactions to build your brand presence.",
                benefits: [
                  "24/7 Social Media Engagement",
                  "Automated Lead Generation",
                  "Content Optimization",
                  "Audience Insights",
                  "Performance Analytics"
                ]
              },
              {
                title: "AI SEO Expert",
                description: "Boost your website's visibility with our AI SEO specialist that never sleeps. It continuously researches trending keywords, analyzes competitor content, and generates SEO-optimized blog posts tailored to your industry.",
                benefits: [
                  "Keyword Research & Analysis",
                  "Content Generation",
                  "Competitor Tracking",
                  "Traffic Growth Optimization",
                  "ROI Monitoring"
                ]
              },
              {
                title: "Chatbot Integration",
                description: "Deploy intelligent chatbots that understand and respond to customer inquiries in real-time. Our AI-powered chatbots learn from interactions to provide increasingly accurate and helpful responses.",
                benefits: [
                  "24/7 Customer Support",
                  "Natural Language Understanding",
                  "Multi-platform Integration",
                  "Automated Query Resolution",
                  "Conversation Analytics"
                ]
              },
              {
                title: "AI Content Creator",
                description: "Leverage AI to generate high-quality, engaging content across various formats. From blog posts to social media content, our AI ensures consistent and relevant content creation.",
                benefits: [
                  "Automated Content Generation",
                  "Multi-format Support",
                  "Brand Voice Consistency",
                  "SEO Optimization",
                  "Rapid Content Scaling"
                ]
              },
              {
                title: "Leads Generation",
                description: "Automate your lead generation process with AI that identifies and qualifies potential customers. Our system continuously scans multiple channels to find and engage with promising leads.",
                benefits: [
                  "Automated Prospect Identification",
                  "Multi-channel Lead Capture",
                  "Lead Scoring & Prioritization",
                  "Engagement Automation",
                  "Performance Tracking"
                ]
              },
              {
                title: "Leads Enrichment",
                description: "Enhance your lead data automatically with AI-powered enrichment tools. Get comprehensive insights about your prospects to enable more effective targeting and personalization.",
                benefits: [
                  "Automated Data Enhancement",
                  "Contact Information Verification",
                  "Company Intelligence Gathering",
                  "Social Media Insights",
                  "Behavioral Analysis"
                ]
              },
              {
                title: "Paperwork Generation",
                description: "Streamline document creation with AI that automatically generates and customizes various types of paperwork. From contracts to reports, ensure accuracy and consistency while saving time.",
                benefits: [
                  "Template Customization",
                  "Auto-population of Fields",
                  "Format Consistency",
                  "Multi-language Support",
                  "Compliance Checking"
                ]
              },
              {
                title: "Pipeline Automation",
                description: "Optimize your business processes with end-to-end pipeline automation. Our AI solutions streamline workflows, reduce manual intervention, and increase operational efficiency.",
                benefits: [
                  "Workflow Optimization",
                  "Task Automation",
                  "Progress Tracking",
                  "Error Reduction",
                  "Performance Analytics"
                ]
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
                <ul className="space-y-2 mb-6">
                  {useCase.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center text-text-secondary">
                      <span className="text-primary mr-2">•</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
                <Link 
                  href="/contact" 
                  className="inline-block text-primary font-semibold hover:underline"
                >
                  Get Started →
                </Link>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 mt-20">
        <div className="glass-effect p-12 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
            Let's discuss how our AI solutions can help you achieve your business goals.
          </p>
          <Link
            href="/contact"
            className="bg-primary text-white font-semibold py-3 px-8 rounded-full hover:bg-opacity-90 transition duration-300"
          >
            Schedule a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  )
} 