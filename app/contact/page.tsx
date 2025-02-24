'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    
    try {
      const form = new FormData()
      Object.entries(formData).forEach(([key, value]) => {
        form.append(key, value)
      })

      const response = await fetch('/contact', {
        method: 'POST',
        body: form,
      })

      const data = await response.json()
      console.log('Response:', data)

      if (response.ok) {
        setStatus('success')
        setMessage('Thank you for your message. We\'ll be in touch soon!')
        setFormData({ name: '', email: '', company: '', message: '' })
      } else {
        setStatus('error')
        setMessage(data.error || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      console.error('Submission error:', error)
      setStatus('error')
      setMessage('Failed to send message. Please try again.')
    }
  }

  return (
    <div className="pt-24 pb-16 bg-background">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">
            Let's <span className="text-primary">Connect</span>
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Ready to transform your business with AI? We're here to help you get started.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="glass-effect p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg bg-background text-text border border-primary/20 focus:border-primary focus:outline-none"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg bg-background text-text border border-primary/20 focus:border-primary focus:outline-none"
                  required
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">Company</label>
                <input
                  type="text"
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg bg-background text-text border border-primary/20 focus:border-primary focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-background text-text border border-primary/20 focus:border-primary focus:outline-none"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full btn-primary disabled:opacity-50"
              >
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
            {status !== 'idle' && (
              <p className={`mt-4 ${status === 'success' ? 'text-green-500' : 'text-red-500'}`}>
                {message}
              </p>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass-effect p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-6">Schedule a Call</h2>
              <p className="text-text-secondary mb-6">
                Book a free consultation call to discuss your needs and how we can help.
              </p>
              <Link
                href="https://calendly.com/zhusy1997/free-consultation"
                className="btn-primary block text-center"
              >
                Book a Free Consultation
              </Link>
            </div>

            <div className="glass-effect p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-6">Connect with Us</h2>
              <div className="space-y-4">
                <p className="flex items-center text-text-secondary">
                  <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  admin@nextgenflowllc.com
                </p>
                <p className="flex items-center text-text-secondary">
                  <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (979) 739-5984
                </p>
                <p className="flex items-center text-text-secondary">
                  <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  TX, United States
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 