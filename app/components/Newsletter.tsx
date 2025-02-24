"use client"

import { useState } from "react"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const formData = new FormData()
      formData.append('email', email)

      const response = await fetch('/api/subscribe', {
        method: 'POST',
        body: formData,
      })

      const data = await response.json()
      console.log('Response:', data)

      if (response.ok) {
        setStatus('success')
        setMessage('Thank you for subscribing!')
        setEmail('')
      } else {
        setStatus('error')
        setMessage(data.error || 'Something went wrong')
      }
    } catch (error) {
      console.error('Error:', error)
      setStatus('error')
      setMessage('Failed to subscribe. Please try again.')
    }
  }

  return (
    <section className="py-20 bg-card-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
          <p className="text-text-secondary mb-8">
            Subscribe to our newsletter for the latest updates on AI technology and business solutions.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-grow px-6 py-3 rounded-lg bg-background text-text border border-primary/20 focus:border-primary focus:outline-none"
              required
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="btn-primary disabled:opacity-50"
            >
              {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
          {status !== 'idle' && (
            <p className={`mt-4 ${status === 'success' ? 'text-green-500' : 'text-red-500'}`}>
              {message}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}

