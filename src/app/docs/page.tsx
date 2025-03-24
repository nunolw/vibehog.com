export default function Docs() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Documentation</h1>
        
        <div className="max-w-3xl">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
            <div className="bg-gray-800 p-6 rounded-xl">
              <p className="mb-4">Add Vibehog to your project in just a few steps:</p>
              <pre className="bg-gray-700 p-4 rounded-lg overflow-x-auto">
                <code>{`npm install @vibehog/analytics`}</code>
              </pre>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Initialize Vibehog</h2>
            <div className="bg-gray-800 p-6 rounded-xl">
              <pre className="bg-gray-700 p-4 rounded-lg overflow-x-auto">
                <code>{`import { Vibehog } from '@vibehog/analytics'

const vibehog = new Vibehog({
  projectId: 'your-project-id',
  apiKey: 'your-api-key'
})`}</code>
              </pre>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Track Events</h2>
            <div className="bg-gray-800 p-6 rounded-xl">
              <pre className="bg-gray-700 p-4 rounded-lg overflow-x-auto">
                <code>{`// Track a simple event
vibehog.track('button_click', {
  buttonId: 'signup',
  page: '/home'
})

// Track a user
vibehog.identify('user123', {
  name: 'John Doe',
  email: 'john@example.com'
})`}</code>
              </pre>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Available Methods</h2>
            <div className="bg-gray-800 p-6 rounded-xl space-y-4">
              <div>
                <h3 className="font-semibold">track(eventName, properties?)</h3>
                <p className="text-gray-400">Track a custom event with optional properties</p>
              </div>
              <div>
                <h3 className="font-semibold">identify(userId, traits?)</h3>
                <p className="text-gray-400">Identify a user with optional traits</p>
              </div>
              <div>
                <h3 className="font-semibold">page(name, properties?)</h3>
                <p className="text-gray-400">Track a page view with optional properties</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
} 