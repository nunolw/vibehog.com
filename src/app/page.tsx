'use client'

import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'

export default function Home() {
  const [selectedCloud, setSelectedCloud] = useState('just')

  return (
    <main className="min-h-screen bg-white relative overflow-hidden pt-16 pb-0">
      {/* Floating GitHub Star Button */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 animate-float">
        <Link
          href="https://github.com/vibehog/vibehog"
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white rounded-full shadow-lg hover:shadow-2xl transition-all hover:scale-105 group"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
          </svg>
          Star us on GitHub
          <span className="bg-white/20 px-3 py-1 rounded-full text-sm">25,140</span>
          <span className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity">🦔</span>
        </Link>
      </div>

      {/* Fun background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-96 h-96 bg-indigo-300 rounded-full blur-3xl opacity-10 -top-20 -left-20 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-purple-300 rounded-full blur-3xl opacity-10 -bottom-20 -right-20 animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-0 relative">
        <div className="text-center max-w-4xl mx-auto pt-20">
          <h1 className="text-7xl font-bold mb-8 tracking-tight bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent animate-text">
            How <span className="text-black">vibe coders</span> make{' '}
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 bg-clip-text text-transparent">products that people want</span>
          </h1>
          <p className="text-2xl text-gray-600 mb-16">
            The single platform to vibe, analyze, test, observe and deploy new features
          </p>
          <div className="flex justify-center gap-6 mb-48">
            <Link
              href="/coming-soon"
              className="inline-flex items-center px-8 py-4 rounded-full text-xl font-medium bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white hover:opacity-90 transition-all group"
            >
              Start Vibing for 
              <span className="ml-2 text-white font-bold">FREE</span>
              <span className="ml-2 group-hover:translate-x-1 transition-transform">›</span>
            </Link>
            <Link
              href="/coming-soon"
              className="inline-flex items-center px-8 py-4 rounded-full text-xl font-medium bg-white text-gray-900 hover:bg-gray-50 transition-all border border-gray-200"
            >
              Talk to an AI
            </Link>
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
                  Say goodbye to ductaping 10 analytics tool and infinite tabs, Vibehog does it all
                </p>
                <Link
                  href="/coming-soon"
                  className="inline-flex items-center px-8 py-3 rounded-full text-lg font-medium bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white hover:opacity-90 transition-all group"
                >
                  Learn why this is the most important thing in the world
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">›</span>
                </Link>
              </div>
              <div className="flex-1">
                <Image
                  src="/10products.jpg"
                  alt="10+ products in one platform"
                  width={400}
                  height={300}
                  className="w-full rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* SDKs Section */}
        <div className="mt-32 relative">
          <h2 className="text-5xl font-bold text-center mb-16 text-black">
            SDKs for <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">web</span> and <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">mobile</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Phone Frame Side */}
            <div className="relative mx-auto max-w-[350px] transform perspective-1000">
              <div className="relative" style={{ filter: 'drop-shadow(0 35px 35px rgba(0, 0, 0, 0.3))' }}>
        <Image
                  src="/phoneframe.png"
                  alt="Phone Frame"
                  width={350}
                  height={934}
                  className="w-full h-auto"
                  style={{ transform: 'rotate(-2deg)' }}
                />
                <div className="absolute inset-[3%] rounded-[35px] overflow-hidden" style={{ transform: 'rotate(-2deg)' }}>
                  <div className="relative w-full h-full bg-black">
                    {/* Apple-style navigation bar */}
                    <div className="absolute top-0 left-0 right-0 flex justify-between items-center px-4 py-2 bg-black/80 backdrop-blur-sm z-10">
                      <div className="w-5 h-5" />
                      <div className="flex space-x-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                      </div>
                    </div>

                    {/* Content Container */}
                    <div className="relative w-full h-full flex flex-col">
                      {/* Background Image - Increased height for taller aspect ratio */}
                      <div className="flex-1 relative">
            <Image
                          src="/hogphone.jpg"
                          alt="HogPhone Pro"
                          fill
                          className="object-cover"
                          style={{ objectPosition: 'center top' }}
                        />
                      </div>

                      {/* Text Content - Adjusted for the slightly reduced phone size */}
                      <div className="relative z-10 bg-black p-7">
                        <h2 className="text-3xl font-medium mb-2 text-white text-center">HogPhone Pro</h2>
                        <p className="text-lg text-gray-300 mb-6 text-center">Hello Hog Intelligence.</p>
                        <div className="flex justify-center gap-3">
                          <Link href="/coming-soon" className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white px-5 py-2 rounded-full text-sm font-medium hover:opacity-90">
                            Learn more
                          </Link>
                          <Link href="/coming-soon" className="border border-[#0066CC] bg-gradient-to-r from-indigo-600/10 via-purple-600/10 to-pink-500/10 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-gradient-to-r hover:from-indigo-600 hover:via-purple-600 hover:to-pink-500 transition-all">
                            Buy
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* SDKs Content Side */}
            <div className="space-y-12">
              {/* Web */}
              <div>
                <h3 className="text-[2.2rem] font-bold mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                  Web
                </h3>
                <div className="flex overflow-x-auto pb-2 gap-4">
                  <button className="text-left px-5 py-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-all flex items-center gap-3 whitespace-nowrap text-black font-medium">
                    JavaScript
                  </button>
                  <button className="text-left px-5 py-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-all flex items-center gap-3 whitespace-nowrap text-black font-medium">
                    React
                  </button>
                  <button className="text-left px-5 py-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-all flex items-center gap-3 whitespace-nowrap text-black font-medium">
                    Next.js
                  </button>
                  <button className="text-left px-5 py-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-all flex items-center gap-3 whitespace-nowrap text-black font-medium">
                    Vue
                  </button>
                </div>
              </div>

              {/* Server */}
              <div>
                <h3 className="text-[2.2rem] font-bold mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                  Server
                </h3>
                <div className="flex overflow-x-auto pb-2 gap-4">
                  <button className="text-left px-5 py-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-all flex items-center gap-3 whitespace-nowrap text-black font-medium">
                    Node.js
                  </button>
                  <button className="text-left px-5 py-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-all flex items-center gap-3 whitespace-nowrap text-black font-medium">
                    Python
                  </button>
                  <button className="text-left px-5 py-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-all flex items-center gap-3 whitespace-nowrap text-black font-medium">
                    Ruby
                  </button>
                  <button className="text-left px-5 py-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-all flex items-center gap-3 whitespace-nowrap text-black font-medium">
                    .NET
                  </button>
                </div>
              </div>

              {/* Mobile */}
              <div>
                <h3 className="text-[2.2rem] font-bold mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                  Mobile
                </h3>
                <div className="flex overflow-x-auto pb-2 gap-4">
                  <button className="text-left px-5 py-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-all flex items-center gap-3 whitespace-nowrap text-black font-medium">
                    Android
                  </button>
                  <button className="text-left px-5 py-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-all flex items-center gap-3 whitespace-nowrap text-black font-medium">
                    iOS
                  </button>
                  <button className="text-left px-5 py-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-all flex items-center gap-3 whitespace-nowrap text-black font-medium">
                    React Native
                  </button>
                  <button className="text-left px-5 py-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-all flex items-center gap-3 whitespace-nowrap text-black font-medium">
                    Flutter
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/coming-soon"
              className="inline-flex items-center px-6 py-3 rounded-full text-lg font-medium bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white hover:opacity-90 transition-all group"
            >
              Browse all libraries
              <span className="ml-2 group-hover:translate-x-1 transition-transform">›</span>
            </Link>
          </div>
        </div>

        {/* Companies section - moved lower */}
        <div className="mt-32 relative w-screen left-[50%] right-[50%] ml-[-50vw] mr-[-50vw]">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-b from-white via-purple-50 to-white -skew-y-3 transform"></div>
          
          {/* Content */}
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-20 text-black whitespace-nowrap">
              These folks <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">build products users want</span> with Vibehog
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                'Y Vibinator',
                'Mister AI',
                'EnenenLabs',
                'Rayblast',
                'Airboss',
                'DFL',
                'StartTheEngine',
                'AssembleAI',
                'Azura',
                'Thrust',
                'ResearchDoor',
                'PreHog'
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

        {/* Ship Fast Timeline Section */}
        <div className="mt-32 relative w-screen left-[50%] right-[50%] ml-[-50vw] mr-[-50vw]">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <h2 className="text-5xl font-bold mb-12 text-center text-black">
              We ship{' '}
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                understandably
              </span>{' '}
              fast
            </h2>
            <p className="text-xl text-gray-600 mb-12 text-center">
              We started yesterday and we've shipped 10+ products since then
            </p>

            {/* Timeline */}
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-indigo-400 via-purple-400 to-pink-400"></div>
              
              {/* Timeline events */}
              <div className="space-y-12">
                {[
                  {
                    date: 'Yesterday',
                    title: 'Founded Vibehog',
                    description: 'Started with a simple idea: a simple idea',
                    gradient: 'from-indigo-600 to-purple-600'
                  },
                  {
                    date: 'This Morning',
                    title: 'Launched on Product Hunt',
                    description: '10,000 upvotes in the first hour, much wow',
                    gradient: 'from-purple-600 to-pink-500'
                  },
                  {
                    date: 'Lunchtime',
                    title: 'Hit $100M ARR',
                    description: 'Turns out people really like analytics that do not make them cry',
                    gradient: 'from-pink-500 to-indigo-600'
                  },
                  {
                    date: 'Tea Time',
                    title: 'Series Z Funding',
                    description: 'Raised $1T at infinite valuation',
                    gradient: 'from-indigo-600 to-purple-600'
                  },
                  {
                    date: 'Just Now',
                    title: '$200M ARR',
                    description: 'Fastest growing Hog owned company!',
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

              {/* End of timeline */}
            </div>
          </div>
        </div>

        {/* Warning Section */}
        <div className="mt-32 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-5xl font-bold mb-16 text-center text-black">
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">WARNING:</span>
              {' '}You'll hate Vibehog if...
            </h2>
            
            {/* Slider container */}
            <div className="relative overflow-hidden">
              <div className="flex overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide -mx-4 px-4">
                {[
                  {
                    bg: 'bg-gradient-to-br from-white to-purple-50 border-purple-100',
                    title: "You like to find PMF slowly",
                    description: "Vibehog will help you find it fast, use with caution. With great power comes great reshogsibility",
                    image: "/slow.jpg"
                  },
                  {
                    bg: 'bg-gradient-to-br from-white to-pink-50 border-pink-100',
                    title: "You love opening 10 tabs instead of one",
                    description: "Vibehog does web analytics, product insights, session replays, and coffee, all in one",
                    image: "/tabs.jpg"
                  },
                  {
                    bg: 'bg-gradient-to-br from-white to-indigo-50 border-indigo-100',
                    title: "You collect analytics tools like NFTs",
                    description: "No need to hire consultants to setup mixpanel, google analytics, amplitude and 1000 more tools. Vibehog takes one minute to set up, by you",
                    image: "/nfts.jpg"
                  },
                  {
                    bg: 'bg-gradient-to-br from-white to-purple-50 border-purple-100',
                    title: "You're a part-time data sherlock holmes",
                    description: "You don't need to decipher a thousand plots to know what your customers want like they are ancient scrolls, Vibehog does everything for you",
                    image: "/sherlock.jpg"
                  },
                  {
                    bg: 'bg-gradient-to-br from-white to-pink-50 border-pink-100',
                    title: "You like complex and long setups",
                    description: "Our setup is so simple it might hurt your feelings",
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
                Vibehog is (mostly) open source and will always be!
                Join our community of developers building the future of the future
              </p>
              <p className="text-md text-gray-500 mb-12 max-w-2xl mx-auto italic">
                We keep 0.01% closed source because we deeply believe in responsible deployment of extremely simple to use analytics tools that enable hypersonic product market fit and think that others my deploy it irresponsibly (please regulate us)
              </p>
              <div className="flex justify-center gap-8">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-sm">
                  <div className="text-4xl font-bold text-gray-900 mb-2">2.5k+</div>
                  <div className="text-gray-600">GitHub Stars</div>
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
                  Star us on GitHub
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">›</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-32 bg-[#f5f5f4] py-16 w-screen relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] mb-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-16">
              {/* Products */}
              <div>
                <h3 className="font-semibold mb-4 text-black">Products</h3>
                <ul className="space-y-2">
                  <li><Link href="/coming-soon" className="text-gray-600 hover:text-purple-600">All products</Link></li>
                  <li><Link href="/coming-soon" className="text-gray-600 hover:text-purple-600">Product analytics</Link></li>
                  <li><Link href="/coming-soon" className="text-gray-600 hover:text-purple-600">Web analytics</Link></li>
                  <li><Link href="/coming-soon" className="text-gray-600 hover:text-purple-600">Session replay</Link></li>
                  <li><Link href="/coming-soon" className="text-gray-600 hover:text-purple-600">Feature flags</Link></li>
                  <li><Link href="/coming-soon" className="text-gray-600 hover:text-purple-600">Experiments</Link></li>
                  <li><Link href="/coming-soon" className="text-gray-600 hover:text-purple-600">Surveys</Link></li>
                  <li><Link href="/coming-soon" className="text-gray-600 hover:text-purple-600">Product OS</Link></li>
                  <li><Link href="/coming-soon" className="text-gray-600 hover:text-purple-600">Data connections</Link></li>
                  <li><Link href="/coming-soon" className="text-gray-600 hover:text-purple-600">Customer stories</Link></li>
                  <li><Link href="/coming-soon" className="text-gray-600 hover:text-purple-600">Vibehog vs...</Link></li>
                  <li><Link href="/coming-soon" className="text-gray-600 hover:text-purple-600">For startups</Link></li>
                  <li><Link href="/coming-soon" className="text-gray-600 hover:text-purple-600">Pricing</Link></li>
                  <li><Link href="/coming-soon" className="text-gray-600 hover:text-purple-600">How we do &quot;sales&quot;</Link></li>
                  <li><Link href="/coming-soon" className="text-gray-600 hover:text-purple-600">Founder stack</Link></li>
                </ul>
              </div>

              {/* Product OS */}
              <div>
                <h3 className="font-semibold mb-4 text-black">Product OS</h3>
                <ul className="space-y-2">
                  <li><Link href="/coming-soon" className="text-gray-600 hover:text-purple-600">New? Start here.</Link></li>
                  <li><Link href="/coming-soon" className="text-gray-600 hover:text-purple-600">SDKs</Link></li>
                  <li><Link href="/coming-soon" className="text-gray-600 hover:text-purple-600">Framework guides</Link></li>
                  <li><Link href="/coming-soon" className="text-gray-600 hover:text-purple-600">Data management</Link></li>
                  <li><Link href="/coming-soon" className="text-gray-600 hover:text-purple-600">SQL access</Link></li>
                  <li><Link href="/coming-soon" className="text-gray-600 hover:text-purple-600">Toolbar</Link></li>
                  <li><Link href="/coming-soon" className="text-gray-600 hover:text-purple-600">API</Link></li>
                </ul>
              </div>

              {/* Docs */}
              <div>
                <h3 className="font-semibold mb-4 text-black">Docs</h3>
                <ul className="space-y-2">
                  <li><Link href="/coming-soon" className="text-gray-600 hover:text-purple-600">Product analytics</Link></li>
                  <li><Link href="/coming-soon" className="text-gray-600 hover:text-purple-600">Session replay</Link></li>
                  <li><Link href="/coming-soon" className="text-gray-600 hover:text-purple-600">Feature flags</Link></li>
                  <li><Link href="/coming-soon" className="text-gray-600 hover:text-purple-600">Experiments</Link></li>
                  <li><Link href="/coming-soon" className="text-gray-600 hover:text-purple-600">Surveys</Link></li>
                  <li><Link href="/coming-soon" className="text-gray-600 hover:text-purple-600">CDP</Link></li>
                  <li><Link href="/coming-soon" className="text-gray-600 hover:text-purple-600">Data warehouse</Link></li>
                  <li><Link href="/coming-soon" className="text-gray-600 hover:text-purple-600">Migrate</Link></li>
                </ul>
              </div>

              {/* Community */}
              <div>
                <h3 className="font-semibold mb-4 text-black">Community</h3>
                <ul className="space-y-2">
                  <li><Link href="/coming-soon" className="text-gray-600 hover:text-purple-600">Questions?</Link></li>
                  <li><Link href="/coming-soon" className="text-gray-600 hover:text-purple-600">Guides</Link></li>
                  <li><Link href="/coming-soon" className="text-gray-600 hover:text-purple-600">Integrations</Link></li>
                  <li><Link href="/coming-soon" className="text-gray-600 hover:text-purple-600">Dashboard templates</Link></li>
                  <li><Link href="/coming-soon" className="text-gray-600 hover:text-purple-600">Founders</Link></li>
                  <li><Link href="/coming-soon" className="text-gray-600 hover:text-purple-600">Product engineers</Link></li>
                  <li><Link href="/coming-soon" className="text-gray-600 hover:text-purple-600">Tracks</Link></li>
                  <li><Link href="/coming-soon" className="text-gray-600 hover:text-purple-600">Merch</Link></li>
                  <li><Link href="/coming-soon" className="text-gray-600 hover:text-purple-600">Contributors</Link></li>
                  <li><Link href="/coming-soon" className="text-gray-600 hover:text-purple-600">Newsletter</Link></li>
                  <li><Link href="/coming-soon" className="text-gray-600 hover:text-purple-600">Vibehog FM</Link></li>
                  <li><Link href="/coming-soon" className="text-gray-600 hover:text-purple-600">Vibehog on GitHub</Link></li>
                  <li><Link href="/coming-soon" className="text-gray-600 hover:text-purple-600">Cool tech jobs</Link></li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <h3 className="font-semibold mb-4 text-black">Company</h3>
                <ul className="space-y-2">
                  <li><Link href="/coming-soon" className="text-gray-600 hover:text-purple-600">About</Link></li>
                  <li><Link href="/coming-soon" className="text-gray-600 hover:text-purple-600">Roadmap</Link></li>
                  <li><Link href="/coming-soon" className="text-gray-600 hover:text-purple-600">Changelog</Link></li>
                  <li><Link href="/coming-soon" className="text-gray-600 hover:text-purple-600">People</Link></li>
                  <li><Link href="/coming-soon" className="text-gray-600 hover:text-purple-600">Small teams</Link></li>
                  <li><Link href="/coming-soon" className="text-gray-600 hover:text-purple-600">Blog</Link></li>
                  <li><Link href="/coming-soon" className="text-gray-600 hover:text-purple-600">Investors</Link></li>
                  <li><Link href="/coming-soon" className="text-gray-600 hover:text-purple-600">Press</Link></li>
                  <li><Link href="/coming-soon" className="text-gray-600 hover:text-purple-600">FAQ</Link></li>
                  <li><Link href="/coming-soon" className="text-gray-600 hover:text-purple-600">Security</Link></li>
                  <li><Link href="/coming-soon" className="text-gray-600 hover:text-purple-600">Support</Link></li>
                  <li><Link href="/coming-soon" className="text-gray-600 hover:text-purple-600">Careers</Link></li>
                </ul>
              </div>
            </div>

            {/* Bottom section */}
            <div className="mt-16 pt-8 pb-0 border-t border-gray-200">
              <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-0">
                <div className="text-sm text-gray-600">© 2024 Vibehog, Inc.</div>
                
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
