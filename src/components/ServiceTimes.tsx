import React from "react";

export default function ServiceTimes() {
  return (
    <section className="bg-[#832732] text-white py-10">
      <div className="container mx-auto px-4">
        {/* Simple horizontal layout */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
          {/* Welcome message */}
          <div className="text-center md:text-left">
            <p className="text-white/90 text-2xl font-medium tracking-wide drop-shadow-sm">
              Welcome to Our Church
            </p>
          </div>

          {/* Separator line for desktop */}
          <div className="hidden md:block w-px h-12 bg-white/30"></div>

          {/* Service time info */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-3">
              <span className="text-white/80 text-sm uppercase tracking-widest font-light">
                Sunday Service
              </span>
              <span className="text-white/60">•</span>
              <span className="text-xl font-bold tracking-wide text-white drop-shadow-sm">
                11:00 AM
              </span>
            </div>
          </div>

          {/* Another separator line for desktop */}
          <div className="hidden md:block w-px h-12 bg-white/30"></div>

          {/* Address */}
          <div className="text-center md:text-left">
            <p className="text-white/80 text-sm font-light tracking-wide">
              Erling Skjalgssons gate 13, 4307 Sandnes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
