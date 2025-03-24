'use client'

export function Logo() {
  return (
    <div className="flex items-center">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Base shape - similar to PostHog but with music note vibes */}
        <path
          d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2z"
          fill="url(#paint0_linear)"
        />
        <path
          d="M22 12c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z"
          fill="#fff"
        />
        {/* Music note elements */}
        <path
          d="M14 20v-8l6-2v8"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="12" cy="20" r="2" fill="#fff" />
        <circle cx="18" cy="18" r="2" fill="#fff" />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="2"
            y1="2"
            x2="30"
            y2="30"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FF5733" />
            <stop offset="1" stopColor="#FF2D55" />
          </linearGradient>
        </defs>
      </svg>
      <span className="ml-2 text-xl font-bold bg-gradient-to-r from-[#FF5733] to-[#FF2D55] bg-clip-text text-transparent">
        Vibehog
      </span>
    </div>
  )
} 