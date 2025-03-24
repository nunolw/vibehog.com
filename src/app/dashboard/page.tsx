export default function Dashboard() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-800 p-6 rounded-xl">
            <h3 className="text-lg text-gray-400 mb-2">Total Users</h3>
            <p className="text-3xl font-bold">1,234</p>
            <p className="text-green-400 text-sm mt-2">+12% from last week</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl">
            <h3 className="text-lg text-gray-400 mb-2">Events Today</h3>
            <p className="text-3xl font-bold">5,678</p>
            <p className="text-green-400 text-sm mt-2">+8% from yesterday</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl">
            <h3 className="text-lg text-gray-400 mb-2">Active Sessions</h3>
            <p className="text-3xl font-bold">89</p>
            <p className="text-red-400 text-sm mt-2">-3% from last hour</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-gray-800 p-6 rounded-xl">
            <h2 className="text-xl font-semibold mb-4">Recent Events</h2>
            <div className="space-y-4">
              {['Page View', 'Button Click', 'Form Submit', 'User Sign Up'].map((event, i) => (
                <div key={i} className="flex justify-between items-center">
                  <span>{event}</span>
                  <span className="text-gray-400">{Math.floor(Math.random() * 1000)}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-xl">
            <h2 className="text-xl font-semibold mb-4">Top Pages</h2>
            <div className="space-y-4">
              {['/home', '/products', '/about', '/contact'].map((page, i) => (
                <div key={i} className="flex justify-between items-center">
                  <span>{page}</span>
                  <span className="text-gray-400">{Math.floor(Math.random() * 500)} views</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 