'use client'

import { useState } from 'react'

export default function NotFoundCatchAll() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setEmail('')
    // Open mailto link
    window.location.href = 'mailto:hi@hypersimple.ai?subject=Ready%20to%20Vibe!&body=Let%27s%20get%20vibing%20together!%20🎵'
  }

  return (
    <main className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Background gradient */}
        <div className="fixed inset-0 bg-gradient-to-br from-white via-purple-50 to-white opacity-50 pointer-events-none" />

        <div className="relative">
          {/* Vibing Image */}
          <div className="mb-12 w-96 h-96 mx-auto overflow-hidden rounded-[2rem]">
            <img 
              src="/vibing.jpg"
              alt="Still Vibing"
              className="w-full h-full object-cover rounded-[2rem]"
            />
          </div>

          <h1 className="text-5xl font-bold mb-8">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
              Still vibing hard
            </span>
            {' '}on this page
          </h1>

          <p className="text-2xl text-gray-600 mb-12">
            Sign up to get updates every 42 milliseconds!
          </p>

          {/* Email Form */}
          <div className="max-w-md mx-auto">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex gap-4 justify-center">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-96 px-6 py-4 rounded-full bg-gray-50 border border-gray-100 focus:outline-none focus:border-purple-200 transition-colors text-lg"
                  required
                />
                <button
                  type="submit"
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white text-lg font-medium hover:opacity-90 transition-all"
                >
                  Subvibe
                </button>
              </form>
            ) : (
              <div className="text-lg text-gray-600">
                Thanks for subscribing! We'll keep you posted.
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
} 