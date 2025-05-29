"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Button from "./button/Button";

const images = ["/interior.jpg", "/landing.jpg"];

export default function LandingSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [scale, setScale] = useState(1);
  const [typedText, setTypedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const animationRef = useRef<number | undefined>(undefined);

  const fullText = "Faith Baptist Church, Sandnes";

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

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [currentImageIndex]);

  useEffect(() => {
    const duration = 4000; // 4 seconds

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, duration);

    return () => {
      clearInterval(interval);
    };
  }, []);

  // Typewriter effect
  useEffect(() => {
    if (typedText.length < fullText.length) {
      // Add slight variation in timing for more natural feel
      const baseDelay = 60; // Faster base speed
      const variation = Math.random() * 40; // 0-40ms random variation
      const delay = baseDelay + variation;

      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, delay);

      return () => clearTimeout(timeout);
    } else {
      setIsTypingComplete(true);
    }
  }, [typedText, fullText]);

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

      {/* Static content that doesn't change */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 transition-all duration-150 ease-out">
            {typedText}
            <span
              className={`${
                isTypingComplete ? "animate-pulse" : "animate-ping"
              } text-white`}
            >
              |
            </span>
          </h1>
          <p className="text-xl md:text-xl text-white/90 mb-8 max-w-2xl">
            Come as You Are, Leave Transformed. Experience the Power of
            Community, Prayer, and God&apos;s Unwavering Love in Every Service.
          </p>
          <div>
            <Button label="Join Us Today" />
          </div>
        </div>
      </div>
    </div>
  );
}
