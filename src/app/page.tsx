'use client'

import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'

export default function Home() {
  const [selectedCloud, setSelectedCloud] = useState('just')

  return (
    <main className="min-h-screen bg-white relative overflow-hidden pt-16">
      {/* Floating GitHub Star Button */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 animate-float">
        <Link
          href="https://github.com/vibehog/vibehog"
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white rounded-full shadow-lg hover:shadow-2xl transition-all hover:scale-105 group"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
          </svg>
          Star us on VibeHub
          <span className="bg-white/20 px-3 py-1 rounded-full text-sm">25,140</span>
          <span className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity">🦔</span>
        </Link>
      </div>

      {/* Fun background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-96 h-96 bg-indigo-300 rounded-full blur-3xl opacity-10 -top-20 -left-20 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-purple-300 rounded-full blur-3xl opacity-10 -bottom-20 -right-20 animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        <div className="text-center max-w-4xl mx-auto pt-20">
          <h1 className="text-7xl font-bold mb-8 tracking-tight bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent animate-text">
            How <span className="text-black">vibe coders</span> make{' '}
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 bg-clip-text text-transparent">products that people want</span>
          </h1>
          <p className="text-2xl text-gray-600 mb-16">
            The single platform to analyze, test, observe and deploy new features. Get product-market fit faster.
          </p>
          <div className="flex justify-center gap-6 mb-48">
            <Link
              href="https://app.vibehog.com"
              className="inline-flex items-center px-8 py-4 rounded-full text-xl font-medium bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white hover:opacity-90 transition-all group"
            >
              Start vibing for free
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              <span className="ml-2 text-white font-bold">FREE</span>
            </Link>
            <Link
              href="/chat"
              className="inline-flex items-center px-8 py-4 rounded-full text-xl font-medium bg-white text-gray-900 hover:bg-gray-50 transition-all border border-gray-200"
            >
              Talk to an AI
            </Link>
          </div>
        </div>

        {/* Companies section */}
        <div className="mt-32 relative w-screen left-[50%] right-[50%] ml-[-50vw] mr-[-50vw]">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-b from-white via-purple-50 to-white -skew-y-3 transform"></div>
          
          {/* Content */}
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-20">
              These folks{' '}
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                build products users want
              </span>{' '}
              with VibeHog
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                'Y Combinator',
                'Mistral AI',
                '11ElevenLabs',
                'Raycast',
                'Airbus',
                'DHL',
                'StartEngine',
                'AssemblyAI',
                'Hasura',
                'Trust',
                'ResearchGate',
                'PostHog'
              ].map((company) => (
                <div
                  key={company}
                  className="aspect-[3/2] relative group overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/80 backdrop-blur-sm border border-purple-100 rounded-xl p-8 flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl">
                    <span className="text-xl font-semibold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                      {company}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* All-in-one Platform section */}
        <div className="mt-32 relative w-screen left-[50%] right-[50%] ml-[-50vw] mr-[-50vw]">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 transform -skew-y-6"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="flex-1 max-w-2xl">
                <h2 className="text-5xl font-bold bg-clip-text mb-6">
                  <span className="text-black">10+ products</span>{' '}
                  <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                    in one
                  </span>
                </h2>
                <p className="text-2xl text-gray-600 mb-8 max-w-2xl">
                  Product analytics has never been so intuitive. Trade in your scattered tools & data stack 
                  for a single platform where everything works together seamlessly.
                </p>
                <Link
                  href="/why"
                  className="inline-flex items-center px-8 py-3 rounded-full text-lg font-medium bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white hover:opacity-90 transition-all group"
                >
                  Learn why this is the most important thing in the world
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
              <div className="flex-1">
                <Image
                  src="/vibehog.com/10products.jpg"
                  alt="10+ products in one platform"
                  width={400}
                  height={300}
                  className="w-full rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Ship Fast Timeline Section */}
        <div className="mt-32 relative w-screen left-[50%] right-[50%] ml-[-50vw] mr-[-50vw]">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <h2 className="text-5xl font-bold mb-4">
              We ship{' '}
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                understandably
              </span>{' '}
              fast
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              We started yesterday and we've shipped 10+ products since then. Currently at $200M ARR and growing faster than our memes.
            </p>

            {/* Timeline */}
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-indigo-200 via-purple-200 to-pink-200"></div>

              {/* Timeline events */}
              <div className="space-y-12">
                {[
                  {
                    date: 'Yesterday',
                    title: 'Founded VibeHog',
                    description: 'Started with a simple idea: analytics should spark joy ✨',
                    gradient: 'from-indigo-600 to-purple-600'
                  },
                  {
                    date: 'This Morning',
                    title: 'Launched on Product Hunt',
                    description: '10,000 upvotes in the first hour. The vibe was immaculate.',
                    gradient: 'from-purple-600 to-pink-500'
                  },
                  {
                    date: 'Lunchtime',
                    title: 'Hit $100M ARR',
                    description: 'Turns out people really like analytics that don&apos;t make them cry.',
                    gradient: 'from-pink-500 to-indigo-600'
                  },
                  {
                    date: 'Tea Time',
                    title: 'Series Z Funding',
                    description: 'Raised $420M at $69B valuation. Nice.',
                    gradient: 'from-indigo-600 to-purple-600'
                  },
                  {
                    date: 'Just Now',
                    title: '$200M ARR',
                    description: 'Double the revenue, double the vibes. Still having fun!',
                    gradient: 'from-purple-600 to-pink-500'
                  }
                ].map((event, index) => (
                  <div key={index} className="relative flex items-center">
                    <div className="hidden md:block w-1/2 pr-8">
                      {index % 2 === 0 && (
                        <div className="text-right">
                          <div className="text-sm text-gray-500">{event.date}</div>
                          <h3 className={`text-xl font-bold bg-gradient-to-r ${event.gradient} bg-clip-text text-transparent`}>
                            {event.title}
                          </h3>
                          <p className="text-gray-600">{event.description}</p>
                        </div>
                      )}
                    </div>
                    <div className="absolute left-0 md:left-1/2 transform -translate-y-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full border-4 border-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 shadow-xl"></div>
                    <div className="md:w-1/2 pl-12 md:pl-8">
                      {index % 2 === 1 && (
                        <div>
                          <div className="text-sm text-gray-500">{event.date}</div>
                          <h3 className={`text-xl font-bold bg-gradient-to-r ${event.gradient} bg-clip-text text-transparent`}>
                            {event.title}
                          </h3>
                          <p className="text-gray-600">{event.description}</p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Next milestone teaser */}
              <div className="mt-12 text-center">
                <div className="inline-block bg-white/50 backdrop-blur-sm rounded-full px-6 py-3 text-gray-600">
                  Next milestone loading... probably in the next 5 minutes 🚀
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Features Grid */}
        <div className="mt-32 relative w-screen left-[50%] right-[50%] ml-[-50vw] mr-[-50vw]">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 transform -skew-y-3"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <h2 className="text-5xl font-bold text-center mb-16">
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                One platform
              </span>
              , one use case
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-xl bg-gradient-to-br from-white to-indigo-50 border border-indigo-100 hover:shadow-xl transition-all group">
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">Product-Market Fit</h3>
                <div className="mb-6 overflow-hidden rounded-lg">
                  <Image 
                    src="/vibehog.com/rich1.jpg"
                    alt="Rich Feature 1"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <p className="text-gray-600 text-lg">Track what matters, understand your users, and iterate until they can't live without your product</p>
              </div>
              <div className="p-8 rounded-xl bg-gradient-to-br from-white to-purple-50 border border-purple-100 hover:shadow-xl transition-all group">
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">Product-Market Fit</h3>
                <div className="mb-6 overflow-hidden rounded-lg">
                  <Image 
                    src="/vibehog.com/rich2.jpg"
                    alt="Rich Feature 2"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <p className="text-gray-600 text-lg">Because finding PMF once is not enough. We help you do it again and again!</p>
              </div>
              <div className="p-8 rounded-xl bg-gradient-to-br from-white to-pink-50 border border-pink-100 hover:shadow-xl transition-all group">
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">Product-Market Fit</h3>
                <div className="mb-6 overflow-hidden rounded-lg">
                  <Image 
                    src="/vibehog.com/rich3.jpg"
                    alt="Rich Feature 3"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <p className="text-gray-600 text-lg">Did we mention we're obsessed with helping you find product-market fit? Because we are.</p>
              </div>
            </div>
          </div>
        </div>

        {/* SDKs Section */}
        <div className="mt-32 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="flex-1">
                <h2 className="text-5xl font-bold mb-8">
                  SDKs for <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">every platform</span>
                </h2>

                {/* Web Frontend */}
                <div className="mb-12">
                  <h3 className="text-2xl font-semibold mb-4">Web (frontend)</h3>
                  <p className="text-gray-600 mb-6">Use autocapture to collect client-side events without any special instrumentation.</p>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-white to-yellow-50 rounded-lg border border-yellow-100">
                      <div className="w-8 h-8 flex items-center justify-center bg-yellow-400 text-white rounded">JS</div>
                      <span className="text-gray-700">JavaScript</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-white to-blue-50 rounded-lg border border-blue-100">
                      <div className="w-8 h-8 flex items-center justify-center bg-blue-400 text-white rounded">Re</div>
                      <span className="text-gray-700">React</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-white to-gray-50 rounded-lg border border-gray-100">
                      <div className="w-8 h-8 flex items-center justify-center bg-black text-white rounded">N</div>
                      <span className="text-gray-700">Next.js</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-white to-green-50 rounded-lg border border-green-100">
                      <div className="w-8 h-8 flex items-center justify-center bg-green-500 text-white rounded">V</div>
                      <span className="text-gray-700">Vue</span>
                    </div>
                  </div>
                </div>

                {/* Server Libraries */}
                <div className="mb-12">
                  <h3 className="text-2xl font-semibold mb-4">Server-side libraries</h3>
                  <p className="text-gray-600 mb-6">Capture server-side events and combine them with client-side data</p>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-white to-green-50 rounded-lg border border-green-100">
                      <div className="w-8 h-8 flex items-center justify-center bg-green-600 text-white rounded">
                        <span className="text-sm">Node</span>
                      </div>
                      <span className="text-gray-700">Node.js</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-white to-blue-50 rounded-lg border border-blue-100">
                      <div className="w-8 h-8 flex items-center justify-center bg-blue-500 text-white rounded">Py</div>
                      <span className="text-gray-700">Python</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-white to-red-50 rounded-lg border border-red-100">
                      <div className="w-8 h-8 flex items-center justify-center bg-red-500 text-white rounded">Rb</div>
                      <span className="text-gray-700">Ruby</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-white to-purple-50 rounded-lg border border-purple-100">
                      <div className="w-8 h-8 flex items-center justify-center bg-purple-600 text-white rounded">.N</div>
                      <span className="text-gray-700">.NET</span>
                    </div>
                  </div>
                </div>

                {/* Mobile Libraries */}
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Mobile libraries</h3>
                  <p className="text-gray-600 mb-6">Track events and user behavior in your mobile applications</p>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-white to-green-50 rounded-lg border border-green-100">
                      <div className="w-8 h-8 flex items-center justify-center bg-green-500 text-white rounded">An</div>
                      <span className="text-gray-700">Android</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-white to-gray-50 rounded-lg border border-gray-100">
                      <div className="w-8 h-8 flex items-center justify-center bg-black text-white rounded">iOS</div>
                      <span className="text-gray-700">iOS</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-white to-blue-50 rounded-lg border border-blue-100">
                      <div className="w-8 h-8 flex items-center justify-center bg-blue-400 text-white rounded">RN</div>
                      <span className="text-gray-700">React Native</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-white to-blue-50 rounded-lg border border-blue-100">
                      <div className="w-8 h-8 flex items-center justify-center bg-blue-500 text-white rounded">Fl</div>
                      <span className="text-gray-700">Flutter</span>
                    </div>
                  </div>
                </div>

                <Link
                  href="/docs/sdks"
                  className="inline-flex items-center px-6 py-3 mt-8 rounded-full text-lg font-medium border border-purple-200 hover:border-purple-300 hover:bg-purple-50 transition-all group"
                >
                  Browse all libraries
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>

              {/* Code Preview */}
              <div className="lg:flex-1">
                <div className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-800">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="p-6">
                    <pre className="text-sm font-mono text-gray-300">
                      <code>{`import { vibehog } from '@vibehog/react'

// Automatically capture page views
vibehog.pageview()

// Track custom events
vibehog.capture('feature_used', {
  name: 'dark_mode',
  enabled: true
})

// Identify users
vibehog.identify('user_123', {
  name: 'Jane Doe',
  plan: 'pro'
})

// Feature flags
if (vibehog.isFeatureEnabled('new_dashboard')) {
  showNewDashboard()
}`}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Code Examples Section */}
        <div className="mt-32 relative bg-gradient-to-b from-gray-50 to-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-5xl font-bold text-center mb-4">
              <span className="text-black">Mmmm</span>
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                , vibing examples
              </span>
            </h2>
            <p className="text-gray-600 text-center mb-12">Here's what you can do with the VibeHog SDK in your product.</p>
            
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="flex-1 bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                <div className="bg-gray-900 p-4">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <pre className="text-sm font-mono">
                    <code className="text-white">
                      {`vibehog.capture('feature_used', {
  name: 'dark_mode',
  properties: {
    enabled: true,
    theme: 'midnight',
    auto_switch: false
  }
});`}
                    </code>
                  </pre>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Track an event</h3>
                  <p className="text-gray-600">Use the capture method to send custom events from your codebase. Use this data for building insights and analyzing user behavior.</p>
                </div>
              </div>

              <div className="flex-1 bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                <div className="bg-gray-900 p-4">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <pre className="text-sm font-mono">
                    <code className="text-white">
                      {`{
  "event": "feature_used",
  "properties": {
    "name": "dark_mode",
    "enabled": true,
    "theme": "midnight",
    "auto_switch": false
  },
  "timestamp": "2024-03-15T10:30:00.000Z"
}`}
                    </code>
                  </pre>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Available in VibeHog</h3>
                  <p className="text-gray-600">Your events appear instantly in VibeHog, ready for analysis and visualization.</p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/docs/examples"
                className="inline-flex items-center px-6 py-3 rounded-full text-lg font-medium bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white hover:opacity-90 transition-all group"
              >
                View more examples
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Warning Section */}
        <div className="mt-32 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-5xl font-bold mb-16 text-center">
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">WARNING:</span>
              {' '}You'll hate VibeHog if...
            </h2>
            
            {/* Slider container */}
            <div className="relative overflow-hidden">
              <div className="flex overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide -mx-4 px-4">
                {[
                  {
                    bg: 'bg-gradient-to-br from-white to-purple-50 border-purple-100',
                    title: "You like to find PMF slowly",
                    description: "VibeHog will help you find it fast, use with caution.",
                    image: "/slow.jpg"
                  },
                  {
                    bg: 'bg-gradient-to-br from-white to-pink-50 border-pink-100',
                    title: "You love opening 10 tabs instead of one",
                    description: "VibeHog does web analytics, product insights, session replays, and more — all in one tab.",
                    image: "/tabs.jpg"
                  },
                  {
                    bg: 'bg-gradient-to-br from-white to-indigo-50 border-indigo-100',
                    title: "You collect analytics tools like NFTs",
                    description: "No need to hire consultants to setup mixpanel, google analytics, amplitude and 1000 more tools. VibeHog takes one minute to set up, by you.",
                    image: "/nfts.jpg"
                  },
                  {
                    bg: 'bg-gradient-to-br from-white to-purple-50 border-purple-100',
                    title: "You're a part-time data sherlock holmes",
                    description: "You don't need to decipher a thousand plots to know what your customers want like they are ancient scrolls, VibeHog does everything for you.",
                    image: "/sherlock.jpg"
                  },
                  {
                    bg: 'bg-gradient-to-br from-white to-pink-50 border-pink-100',
                    title: "You like complex and long setups",
                    description: "Our setup is so simple it might hurt your feelings. One line of code and you're done.",
                    image: "/complex.jpg"
                  }
                ].map((warning, index) => (
                  <div
                    key={index}
                    className={`flex-none w-[320px] snap-center mx-2 rounded-xl p-8 transform transition-all hover:scale-[1.02] hover:shadow-lg ${warning.bg} text-center min-h-[400px] flex flex-col justify-between`}
                  >
                    <div>
                      <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent leading-tight">{warning.title}</h3>
                      <div className="mb-6 overflow-hidden rounded-lg">
                        <Image
                          src={warning.image}
                          alt={warning.title}
                          width={48}
                          height={48}
                          className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <p className="text-gray-600 text-lg leading-relaxed">{warning.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Scroll indicators */}
              <div className="flex justify-center gap-3 mt-8">
                {[...Array(5)].map((_, i) => (
                  <button
                    key={i}
                    className="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400 focus:bg-gray-400 transition-colors"
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Open Source Section */}
        <div className="mt-32 relative bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 py-20 rounded-3xl overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-200/20 via-purple-200/20 to-pink-200/20 backdrop-blur-xl"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center">
              <h2 className="text-5xl font-bold text-center mb-6">
                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">99.99%</span>
                <span className="text-black"> Open Source</span>
              </h2>
              <p className="text-xl text-gray-600 mb-4 max-w-3xl mx-auto">
                VibeHog is (mostly) open source and will always be.
                Join our community of developers building the future of product analytics.
              </p>
              <p className="text-md text-gray-500 mb-12 max-w-2xl mx-auto italic">
                We keep 0.001% closed source because we believe in responsible deployment of extremely simple to use analytics tools that enable fast product market fit, please regulate us
              </p>
              <div className="flex justify-center gap-8">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-sm">
                  <div className="text-4xl font-bold text-gray-900 mb-2">2.5k+</div>
                  <div className="text-gray-600">VibeHub Stars</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-sm">
                  <div className="text-4xl font-bold text-gray-900 mb-2">150+</div>
                  <div className="text-gray-600">Contributors</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-sm">
                  <div className="text-4xl font-bold text-gray-900 mb-2">1M+</div>
                  <div className="text-gray-600">Downloads</div>
                </div>
              </div>
              <div className="mt-12">
                <Link
                  href="https://github.com/vibehog/vibehog"
                  className="inline-flex items-center px-6 py-3 rounded-full text-lg font-medium bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white hover:opacity-90 transition-all group"
                >
                  Star us on VibeHub
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* One Platform Section */}
        <div className="mt-32 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-5xl font-bold text-center mb-16">
                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                  One platform
                </span>
                , one use case
              </h2>
              <p className="text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
                We&apos;re obsessed with helping you find product-market fit. And having fun while doing it.
                And then finding product-market fit again.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-8 rounded-xl bg-gradient-to-br from-white to-indigo-50 border border-indigo-100 hover:shadow-xl transition-all group">
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">Product-Market Fit</h3>
                  <div className="mb-6 overflow-hidden rounded-lg">
                    <Image 
                      src="/vibehog.com/rich1.jpg"
                      alt="Rich Feature 1"
                      width={400}
                      height={300}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <p className="text-gray-600 text-lg">Track what matters, understand your users, and iterate until they can't live without your product</p>
                </div>
                <div className="p-8 rounded-xl bg-gradient-to-br from-white to-purple-50 border border-purple-100 hover:shadow-xl transition-all group">
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">Product-Market Fit</h3>
                  <div className="mb-6 overflow-hidden rounded-lg">
                    <Image 
                      src="/vibehog.com/rich2.jpg"
                      alt="Rich Feature 2"
                      width={400}
                      height={300}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <p className="text-gray-600 text-lg">Because finding PMF once is not enough. We help you do it again and again!</p>
                </div>
                <div className="p-8 rounded-xl bg-gradient-to-br from-white to-pink-50 border border-pink-100 hover:shadow-xl transition-all group">
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">Product-Market Fit</h3>
                  <div className="mb-6 overflow-hidden rounded-lg">
                    <Image 
                      src="/vibehog.com/rich3.jpg"
                      alt="Rich Feature 3"
                      width={400}
                      height={300}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <p className="text-gray-600 text-lg">Did we mention we're obsessed with helping you find product-market fit? Because we are.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Startup Program Section */}
        <div className="mt-32 relative">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 -skew-y-3 transform -mx-8 -my-16 rounded-3xl"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left side - Program details */}
              <div>
                <h2 className="text-4xl font-bold mb-6">
                  Get to product market-fit with the{' '}
                  <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">most popular analytics toolkit</span>
                  {' '}used by vibe coders
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4 group p-4 rounded-xl hover:bg-white/50 transition-all">
                    <div className="text-2xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">✓</div>
                    <div>
                      <h3 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent group-hover:from-purple-600 group-hover:to-pink-500 transition-all">Huuuuge free tier</h3>
                      <p className="text-gray-600">30M events tracked + 50K recordings free, per month</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 group p-4 rounded-xl hover:bg-white/50 transition-all">
                    <div className="text-2xl bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">✓</div>
                    <div>
                      <h3 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent group-hover:from-pink-500 group-hover:to-indigo-600 transition-all">Exclusive founder merch</h3>
                      <p className="text-gray-600">Now you can look as lit as our engineers</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 group p-4 rounded-xl hover:bg-white/50 transition-all">
                    <div className="text-2xl bg-gradient-to-r from-pink-500 to-indigo-600 bg-clip-text text-transparent">✓</div>
                    <div>
                      <h3 className="text-xl font-bold bg-gradient-to-r from-pink-500 to-indigo-600 bg-clip-text text-transparent group-hover:from-indigo-600 group-hover:to-purple-600 transition-all">Pre-product/market fit guides</h3>
                      <p className="text-gray-600">We literally wrote a book on how to get product-market fit</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 group p-4 rounded-xl hover:bg-white/50 transition-all">
                    <div className="text-2xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">✓</div>
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">Used and recommended by vibe coders</span>
                    </div>
                  </div>
                  <div className="mt-8">
                    <Link
                      href="/startup-program"
                      className="inline-flex items-center px-6 py-3 rounded-full text-lg font-medium bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white hover:opacity-90 transition-all group"
                    >
                      Learn more
                      <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right side - Testimonial */}
              <div className="relative">
                <div className="aspect-[16/10] bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 rounded-xl p-8 relative overflow-hidden group hover:shadow-xl transition-all">
                  <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
                  {/* Animated background circles */}
                  <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/10 rounded-full blur-xl animate-pulse"></div>
                  <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-white/10 rounded-full blur-xl animate-pulse delay-700"></div>
                  <div className="relative h-full flex flex-col text-white">
                    <div className="flex-1">
                      <p className="text-2xl font-bold mb-4">
                        I am biased but I think{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-pink-200">VibeHog is great.</span>
                      </p>
                      <p className="text-xl text-white/90">
                        I talk to too many founders with half-implemented or disjointed tools that should just be using VibeHog.
                      </p>
                    </div>
                    <div>
                      <div className="font-bold">Sarah Chen</div>
                      <div className="text-sm text-white/80">Lead Developer & Vibe Master</div>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="bg-white/20 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm font-medium">
                          Vibe Coder
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="mt-32 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative">
              <div className="text-center mb-16">
                <h2 className="text-5xl font-bold">
                  Here is your{' '}
                  <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                    call to action
                  </span>
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white rounded-2xl p-8 border border-gray-100 shadow-xl">
                {/* Product Image Side */}
                <div className="relative">
                  {/* Not endorsed badge */}
                  <div className="absolute -right-4 -top-4 z-10">
                    <div className="bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 text-gray-800 font-bold p-6 rounded-full transform rotate-12 flex items-center justify-center border-2 border-white shadow-xl" style={{ width: '180px', height: '180px' }}>
                      <div className="transform -rotate-12 text-center leading-none">
                        <div className="text-sm mb-1">NOT</div>
                        <div className="mb-1">ENDORSED BY</div>
                        <div className="text-sm bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent mb-0.5">JAMES H</div>
                        <div className="text-sm bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent mb-0.5">OR TIM G</div>
                        <div className="text-sm bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent mb-0.5">OR CHARLES C</div>
                        <div className="text-sm bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent mb-0.5">OR JOE M</div>
                        <div className="text-sm bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">OR SCOTT L</div>
                      </div>
                    </div>
                  </div>

                  {/* Product Image */}
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8">
                    <div className="aspect-square relative">
                      <Image 
                        src="/vibehog.com/punchcard.jpg" 
                        alt="VibeHog Punchcard"
                        width={400}
                        height={400}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  </div>
                </div>

                {/* Product Info Side */}
                <div>
                  <div className="flex items-start gap-3 mb-6">
                    <h2 className="text-4xl font-bold">VibeHog Cloud</h2>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                      <span className="mr-1.5">😎</span> EGO-FRIENDLY
                    </span>
                  </div>
                  <p className="text-gray-600 mb-8">
                    Don&apos;t worry, we&apos;ll send you a punch card in the mail*.
                  </p>

                  {/* Cloud Selection */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">Select your cloud</h3>
                    <div className="flex gap-4">
                      <button 
                        onClick={() => setSelectedCloud('just')}
                        className={`px-6 py-3 border-2 rounded-lg font-medium transition-all ${
                          selectedCloud === 'just' 
                            ? 'border-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white' 
                            : 'border-gray-200 text-gray-400'
                        }`}
                      >
                        Just kidding
                      </button>
                      <button 
                        onClick={() => setSelectedCloud('also')}
                        className={`px-6 py-3 border-2 rounded-lg font-medium transition-all ${
                          selectedCloud === 'also' 
                            ? 'border-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white' 
                            : 'border-gray-200 text-gray-400'
                        }`}
                      >
                        Also just kidding
                      </button>
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="mb-8">
                    <div className="flex items-baseline gap-3">
                      <span className="text-2xl font-bold line-through text-gray-400">$0</span>
                      <span className="text-3xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">FREE</span>
                      <span className="text-gray-500">-1 left at this price!!</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white font-bold text-xl py-4 rounded-full hover:opacity-90 transition-all hover:scale-105 mb-6">
                    Start vibing
                  </button>

                  {/* Stats */}
                  <div className="flex items-center gap-3 text-gray-600">
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                      <path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z"/>
                    </svg>
                    <div>
                      <span className="font-medium">Hurry:</span> 240 companies signed up <span className="text-orange-500">today</span>.
                      <br />
                      Act now and get $0 off your first order.
                    </div>
                  </div>

                  {/* Footnote */}
                  <p className="mt-8 text-sm text-gray-500">
                    *VibeHog is a web product and cannot be installed by CD.
                    <br />
                    We did once send some customers a floppy disk but it was a Rickroll.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-32 bg-[#f5f5f4] py-16 w-screen relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-16">
              {/* Products */}
              <div>
                <h3 className="font-semibold mb-4">Products</h3>
                <ul className="space-y-2">
                  <li><Link href="/products" className="text-gray-600 hover:text-purple-600">All products</Link></li>
                  <li><Link href="/product-analytics" className="text-gray-600 hover:text-purple-600">Product analytics</Link></li>
                  <li><Link href="/web-analytics" className="text-gray-600 hover:text-purple-600">Web analytics</Link></li>
                  <li><Link href="/session-replay" className="text-gray-600 hover:text-purple-600">Session replay</Link></li>
                  <li><Link href="/feature-flags" className="text-gray-600 hover:text-purple-600">Feature flags</Link></li>
                  <li><Link href="/experiments" className="text-gray-600 hover:text-purple-600">Experiments</Link></li>
                  <li><Link href="/surveys" className="text-gray-600 hover:text-purple-600">Surveys</Link></li>
                  <li><Link href="/product-os" className="text-gray-600 hover:text-purple-600">Product OS</Link></li>
                  <li><Link href="/data-connections" className="text-gray-600 hover:text-purple-600">Data connections</Link></li>
                  <li><Link href="/customer-stories" className="text-gray-600 hover:text-purple-600">Customer stories</Link></li>
                  <li><Link href="/vibehog-vs" className="text-gray-600 hover:text-purple-600">VibeHog vs...</Link></li>
                  <li><Link href="/for-startups" className="text-gray-600 hover:text-purple-600">For startups</Link></li>
                  <li><Link href="/pricing" className="text-gray-600 hover:text-purple-600">Pricing</Link></li>
                  <li><Link href="/how-we-do-sales" className="text-gray-600 hover:text-purple-600">How we do &quot;sales&quot;</Link></li>
                  <li><Link href="/founder-stack" className="text-gray-600 hover:text-purple-600">Founder stack</Link></li>
                </ul>
              </div>

              {/* Product OS */}
              <div>
                <h3 className="font-semibold mb-4">Product OS</h3>
                <ul className="space-y-2">
                  <li><Link href="/start-here" className="text-gray-600 hover:text-purple-600">New? Start here.</Link></li>
                  <li><Link href="/sdks" className="text-gray-600 hover:text-purple-600">SDKs</Link></li>
                  <li><Link href="/framework-guides" className="text-gray-600 hover:text-purple-600">Framework guides</Link></li>
                  <li><Link href="/data-management" className="text-gray-600 hover:text-purple-600">Data management</Link></li>
                  <li><Link href="/sql-access" className="text-gray-600 hover:text-purple-600">SQL access</Link></li>
                  <li><Link href="/toolbar" className="text-gray-600 hover:text-purple-600">Toolbar</Link></li>
                  <li><Link href="/api" className="text-gray-600 hover:text-purple-600">API</Link></li>
                </ul>
              </div>

              {/* Docs */}
              <div>
                <h3 className="font-semibold mb-4">Docs</h3>
                <ul className="space-y-2">
                  <li><Link href="/product-analytics" className="text-gray-600 hover:text-purple-600">Product analytics</Link></li>
                  <li><Link href="/session-replay" className="text-gray-600 hover:text-purple-600">Session replay</Link></li>
                  <li><Link href="/feature-flags" className="text-gray-600 hover:text-purple-600">Feature flags</Link></li>
                  <li><Link href="/experiments" className="text-gray-600 hover:text-purple-600">Experiments</Link></li>
                  <li><Link href="/surveys" className="text-gray-600 hover:text-purple-600">Surveys</Link></li>
                  <li><Link href="/cdp" className="text-gray-600 hover:text-purple-600">CDP</Link></li>
                  <li><Link href="/data-warehouse" className="text-gray-600 hover:text-purple-600">Data warehouse</Link></li>
                  <li><Link href="/migrate" className="text-gray-600 hover:text-purple-600">Migrate</Link></li>
                </ul>
              </div>

              {/* Community */}
              <div>
                <h3 className="font-semibold mb-4">Community</h3>
                <ul className="space-y-2">
                  <li><Link href="/questions" className="text-gray-600 hover:text-purple-600">Questions?</Link></li>
                  <li><Link href="/guides" className="text-gray-600 hover:text-purple-600">Guides</Link></li>
                  <li><Link href="/integrations" className="text-gray-600 hover:text-purple-600">Integrations</Link></li>
                  <li><Link href="/dashboard-templates" className="text-gray-600 hover:text-purple-600">Dashboard templates</Link></li>
                  <li><Link href="/founders" className="text-gray-600 hover:text-purple-600">Founders</Link></li>
                  <li><Link href="/product-engineers" className="text-gray-600 hover:text-purple-600">Product engineers</Link></li>
                  <li><Link href="/tracks" className="text-gray-600 hover:text-purple-600">Tracks</Link></li>
                  <li><Link href="/merch" className="text-gray-600 hover:text-purple-600">Merch</Link></li>
                  <li><Link href="/contributors" className="text-gray-600 hover:text-purple-600">Contributors</Link></li>
                  <li><Link href="/newsletter" className="text-gray-600 hover:text-purple-600">Newsletter</Link></li>
                  <li><Link href="/vibehog-fm" className="text-gray-600 hover:text-purple-600">VibeHog FM</Link></li>
                  <li><Link href="/github" className="text-gray-600 hover:text-purple-600">VibeHog on VibeHub</Link></li>
                  <li><Link href="/jobs" className="text-gray-600 hover:text-purple-600">Cool tech jobs</Link></li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <h3 className="font-semibold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li><Link href="/about" className="text-gray-600 hover:text-purple-600">About</Link></li>
                  <li><Link href="/roadmap" className="text-gray-600 hover:text-purple-600">Roadmap</Link></li>
                  <li><Link href="/changelog" className="text-gray-600 hover:text-purple-600">Changelog</Link></li>
                  <li><Link href="/people" className="text-gray-600 hover:text-purple-600">People</Link></li>
                  <li><Link href="/small-teams" className="text-gray-600 hover:text-purple-600">Small teams</Link></li>
                  <li><Link href="/blog" className="text-gray-600 hover:text-purple-600">Blog</Link></li>
                  <li><Link href="/investors" className="text-gray-600 hover:text-purple-600">Investors</Link></li>
                  <li><Link href="/press" className="text-gray-600 hover:text-purple-600">Press</Link></li>
                  <li><Link href="/faq" className="text-gray-600 hover:text-purple-600">FAQ</Link></li>
                  <li><Link href="/security" className="text-gray-600 hover:text-purple-600">Security</Link></li>
                  <li><Link href="/support" className="text-gray-600 hover:text-purple-600">Support</Link></li>
                  <li><Link href="/careers" className="text-gray-600 hover:text-purple-600">Careers</Link></li>
                </ul>
              </div>
            </div>

            {/* Bottom section */}
            <div className="mt-16 pt-8 border-t border-gray-200">
              <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="text-sm text-gray-600">© 2024 VibeHog, Inc.</div>
                
                {/* Social links */}
                <div className="flex items-center gap-6">
                  <Link href="https://twitter.com/vibehog" className="text-gray-600 hover:text-purple-600">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </Link>
                  <Link href="https://linkedin.com/company/vibehog" className="text-gray-600 hover:text-purple-600">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </Link>
                  <Link href="https://youtube.com/@vibehog" className="text-gray-600 hover:text-purple-600">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </Link>
                  <Link href="https://github.com/vibehog" className="text-gray-600 hover:text-purple-600">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                    </svg>
                  </Link>
                </div>

                {/* Compliance badges */}
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <Link href="/soc2" className="hover:text-purple-600">SOC 2</Link>
                  <Link href="/hipaa" className="hover:text-purple-600">HIPAA</Link>
                  <Link href="/privacy" className="hover:text-purple-600">Privacy policy</Link>
                  <Link href="/terms" className="hover:text-purple-600">Terms</Link>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>

      <style jsx>{`
        @keyframes text {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }
        .animate-text {
          animation: text 5s ease infinite;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </main>
  )
}
