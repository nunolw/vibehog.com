'use client'

import Link from 'next/link'

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
              Vibehog
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <Link href="/why" className="text-gray-600 hover:text-purple-600 transition-colors">Why Vibehog?</Link>
              <Link href="/products" className="text-gray-600 hover:text-purple-600 transition-colors">Products</Link>
              <Link href="/pricing" className="text-gray-600 hover:text-purple-600 transition-colors">Pricing</Link>
              <Link href="/docs" className="text-gray-600 hover:text-purple-600 transition-colors">Docs</Link>
              <Link href="/community" className="text-gray-600 hover:text-purple-600 transition-colors">Community</Link>
              <Link href="/company" className="text-gray-600 hover:text-purple-600 transition-colors">Company</Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/dashboard"
              className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white px-6 py-2 rounded-full font-medium transition-all hover:scale-105 hover:shadow-xl inline-flex items-center group"
            >
              VibeBoard
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
} 