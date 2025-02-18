"use client"

import { useState } from "react"

const Newsletter = () => {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement newsletter signup logic
    console.log("Newsletter signup:", email)
    setEmail("")
  }

  return (
    <div className="bg-card-bg py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-3xl font-semibold mb-6">Stay Ahead of the Curve</h3>
          <p className="mb-8 text-text-secondary">
            Subscribe to our newsletter for cutting-edge insights on AI and software solutions.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-grow p-3 rounded-full bg-background text-text border border-text-secondary focus:outline-none focus:border-primary"
              required
            />
            <button type="submit" className="btn-primary sm:w-auto">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Newsletter

