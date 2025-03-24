import Image from 'next/image'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white relative overflow-hidden pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        <div className="text-center">
          <div className="mb-12 w-96 h-96 mx-auto overflow-hidden rounded-[2rem]">
            <Image 
              src="/vibehog.com/vibing.jpg"
              alt="Still Vibing"
              width={384}
              height={384}
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
            Still vibing hard on this page
          </h3>
          <p className="text-gray-600 mb-8">
            But we could not find what you were looking for.
          </p>
        </div>
      </div>
    </main>
  )
} 