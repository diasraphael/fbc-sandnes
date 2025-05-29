"use client";

export default function Navigation() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="text-white text-2xl font-bold">FBC Sandnes</div>
          <div className="hidden md:flex space-x-8">
            <a
              href="#"
              className="relative text-white hover:text-[#832732] transition-colors duration-500 ease-out group"
            >
              <span className="relative z-10">Home</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#832732] transition-all duration-500 ease-out group-hover:w-full"></span>
            </a>
            <a
              href="#"
              className="relative text-white hover:text-[#832732] transition-colors duration-500 ease-out group"
            >
              <span className="relative z-10">About</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#832732] transition-all duration-500 ease-out group-hover:w-full"></span>
            </a>
            <a
              href="#"
              className="relative text-white hover:text-[#832732] transition-colors duration-500 ease-out group"
            >
              <span className="relative z-10">Sermons</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#832732] transition-all duration-500 ease-out group-hover:w-full"></span>
            </a>
            <a
              href="#"
              className="relative text-white hover:text-[#832732] transition-colors duration-500 ease-out group"
            >
              <span className="relative z-10">Events</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#832732] transition-all duration-500 ease-out group-hover:w-full"></span>
            </a>
            <a
              href="#"
              className="relative text-white hover:text-[#832732] transition-colors duration-500 ease-out group"
            >
              <span className="relative z-10">Contact</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#832732] transition-all duration-500 ease-out group-hover:w-full"></span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
