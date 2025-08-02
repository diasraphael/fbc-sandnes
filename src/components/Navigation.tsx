"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Single source of truth for menu items
  const menuItems = [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "Sermons", href: "#" },
    { name: "Events", href: "#" },
    { name: "Contact", href: "#" },
  ];

  const handleMenuClick = () => {
    setIsMenuOpen(false);
  };

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Cleanup when component unmounts
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <nav className="absolute top-8 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center h-full">
            <Image src="/logo.png" alt="logo" width={90} height={40} />
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-white hover:text-[#832732] transition-colors duration-500 ease-out group"
              >
                <span className="relative z-10">{item.name}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#832732] transition-all duration-500 ease-out group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Hamburger Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 relative z-[70] cursor-pointer"
          >
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ease-out ${
                isMenuOpen ? "rotate-45 translate-y-2 bg-[#832732]" : "bg-white"
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ease-out ${
                isMenuOpen ? "opacity-0 bg-[#832732]" : "bg-white"
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ease-out ${
                isMenuOpen
                  ? "-rotate-45 -translate-y-2 bg-[#832732]"
                  : "bg-white"
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed inset-0 bg-[#e1dbcb] transition-all duration-500 ease-in-out z-[60] ${
            isMenuOpen
              ? "opacity-100 visible scale-100"
              : "opacity-0 invisible scale-95"
          }`}
          style={{ height: "100vh" }}
          onClick={handleMenuClick}
        >
          {/* Centered Menu Items */}
          <div className="flex items-center justify-center h-full px-6 py-8 overflow-hidden">
            <div
              className={`space-y-4 text-center transition-all duration-700 ease-out ${
                isMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Menu Title */}
              <div className="mb-8">
                <h2 className="text-[#832732] text-sm uppercase tracking-widest font-light">
                  Navigation
                </h2>
                <div className="w-12 h-0.5 bg-[#832732] mx-auto mt-2"></div>
              </div>

              {/* Menu Items */}
              {menuItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`block text-[#832732] hover:text-black transition-all duration-300 ease-out text-xl font-medium py-2 transform ${
                    isMenuOpen
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0"
                  }`}
                  style={{
                    transitionDelay: isMenuOpen ? `${index * 100}ms` : "0ms",
                  }}
                  onClick={handleMenuClick}
                >
                  {item.name}
                </a>
              ))}

              {/* Footer instruction */}
              <div className="mt-8 pt-4">
                <p className="text-[#832732]/60 text-xs uppercase tracking-widest">
                  Tap anywhere to close
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
