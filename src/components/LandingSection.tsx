export default function LandingSection() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-6">
          Welcome to Faith Baptist Church
        </h1>
        <p className="text-xl mb-8">
          Join us in worship and fellowship in Sandnes
        </p>
        <div className="space-x-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Join Our Service
          </button>
          <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
