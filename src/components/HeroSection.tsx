"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const images = ["/landing.jpg", "/church.jpg", "/interior.jpg"];

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background images with transition */}
      {images.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt="Church background"
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            God is with Us, God Loves Us.
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
            Worry Ends When Faith Begins. The Magnificent Story of a
            Life-Changing Journey to God.
          </p>
          <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all">
            Explore now
          </button>
        </div>
      </div>
    </div>
  );
}
