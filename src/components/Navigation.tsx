"use client";

export default function Navigation() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="text-white text-2xl font-bold">FBC Sandnes</div>
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-white hover:text-gray-200">
              Home
            </a>
            <a href="#" className="text-white hover:text-gray-200">
              About
            </a>
            <a href="#" className="text-white hover:text-gray-200">
              Sermons
            </a>
            <a href="#" className="text-white hover:text-gray-200">
              Events
            </a>
            <a href="#" className="text-white hover:text-gray-200">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
