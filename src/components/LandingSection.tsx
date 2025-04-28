"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

const images = ["/interior.jpg", "/landing.jpg", "/church.jpg"];

export default function LandingSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [scale, setScale] = useState(1);
  const animationRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    let startTime: number;
    const duration = 4000; // 4 seconds

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;

      // Calculate scale from 1 to 1.3 over 4 seconds
      const newScale = 1 + 0.3 * (progress / duration);
      setScale(Math.min(newScale, 1.3));

      if (progress < duration) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    // Start animation when image changes
    startTime = 0;
    setScale(1);
    animationRef.current = requestAnimationFrame(animate);

    // Change image every 4 seconds
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, duration);

    return () => {
      clearInterval(interval);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [currentImageIndex]);

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
          <div
            className="absolute inset-0"
            style={{
              transform: `scale(${index === currentImageIndex ? scale : 1})`,
            }}
          >
            <Image
              src={src}
              alt="Church background"
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        </div>
      ))}

      {/* Overlay gradient - more subtle */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />

      {/* Content with fade-in animation */}
      <div className="relative h-full flex items-center animate-fade-in">
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
