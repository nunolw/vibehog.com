'use client'

import Link from 'next/link'
import { Logo } from './Logo'
import { useState } from 'react'

type MenuItem = {
  label: string
  href: string
}

const productItems: MenuItem[] = [
  { label: 'Product Analytics', href: '/product-analytics' },
  { label: 'Session Recording', href: '/session-recording' },
  { label: 'Feature Flags', href: '/feature-flags' },
  { label: 'A/B Testing', href: '/ab-testing' },
  { label: 'Surveys', href: '/surveys' },
]

const communityItems: MenuItem[] = [
  { label: 'GitHub', href: 'https://github.com/your-repo/vibehog' },
  { label: 'Discord', href: '/discord' },
  { label: 'Newsletter', href: '/newsletter' },
  { label: 'Contributors', href: '/contributors' },
]

const companyItems: MenuItem[] = [
  { label: 'About', href: '/about' },
  { label: 'Careers', href: '/careers' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

function DropdownMenu({ label, items }: { label: string; items: MenuItem[] }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <button className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium flex items-center">
        {label}
        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white bg-opacity-10 backdrop-blur-lg ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white hover:bg-opacity-10"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

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