'use client'

export default function Pricing() {
  const tiers = [
    {
      name: 'Vibe Starter',
      emoji: '🎵',
      price: '$0',
      description: 'Perfect for solo artists dropping their first track',
      features: [
        'Up to 10,000 groovy events/month',
        'Basic vibe tracking',
        '1 awesome project',
        'High-five support from the community'
      ],
      color: 'from-blue-400 to-blue-600'
    },
    {
      name: 'Vibe Master',
      emoji: '🎸',
      price: '$49',
      description: 'For when your beats are getting serious attention',
      features: [
        'Up to 1M rad events/month',
        'Pro-level vibe analytics',
        'Unlimited project jams',
        'VIP backstage support',
        'Custom vibe domains',
        'Collab with the band'
      ],
      highlighted: true,
      color: 'from-purple-400 to-pink-600'
    },
    {
      name: 'Vibe Legend',
      emoji: '👑',
      price: 'Let\'s Talk',
      description: 'For the stadium-filling superstars',
      features: [
        'Unlimited vibes',
        'Everything in Vibe Master',
        'Your personal hype team',
        'Guaranteed good vibes SLA',
        'Custom integrations galore',
        'Deploy anywhere in the multiverse'
      ],
      color: 'from-yellow-400 to-orange-600'
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white relative overflow-hidden">
      {/* Fun background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-yellow-300 rounded-full blur-3xl opacity-20 -top-20 -left-20 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-blue-300 rounded-full blur-3xl opacity-20 -bottom-20 -right-20 animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 animate-text bg-gradient-to-r from-yellow-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
            Choose Your Vibe Level
          </h1>
          <p className="text-2xl text-white text-opacity-90">
            No bad vibes, just pick what matches your energy! ✨
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {tiers.map((tier) => (
            <div 
              key={tier.name}
              className={`bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 transform hover:scale-105 transition-all ${
                tier.highlighted ? 'ring-2 ring-pink-500 ring-opacity-60' : ''
              }`}
            >
              <div className="text-4xl mb-4">{tier.emoji}</div>
              <h2 className="text-2xl font-bold mb-2">{tier.name}</h2>
              <p className="text-white text-opacity-75 mb-6">{tier.description}</p>
              <div className="text-4xl font-bold mb-8">
                {tier.price}
                {tier.price !== 'Let\'s Talk' && (
                  <span className="text-lg text-white text-opacity-70">/month</span>
                )}
              </div>
              <ul className="space-y-4 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <span className="text-lg mr-2">✨</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-4 px-6 rounded-full font-bold text-lg transition-all transform hover:scale-105 bg-gradient-to-r ${tier.color} hover:shadow-xl`}
              >
                {tier.price === 'Let\'s Talk' ? 'Start Jamming' : 'Get Vibing'}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-2xl font-bold mb-4 text-white text-opacity-90">Every Vibe Includes:</p>
          <div className="flex flex-wrap justify-center gap-8 text-lg">
            <span className="bg-white bg-opacity-10 rounded-full px-6 py-2">🚀 Instant power-up</span>
            <span className="bg-white bg-opacity-10 rounded-full px-6 py-2">🔒 Fort Knox security</span>
            <span className="bg-white bg-opacity-10 rounded-full px-6 py-2">🇪🇺 GDPR friendly</span>
            <span className="bg-white bg-opacity-10 rounded-full px-6 py-2">🎮 API playground</span>
            <span className="bg-white bg-opacity-10 rounded-full px-6 py-2">🎁 14 days of good vibes</span>
          </div>
        </div>
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
      `}</style>
    </main>
  )
} 