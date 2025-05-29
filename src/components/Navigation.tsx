"use client";

import { useState } from "react";
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
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 relative z-50 cursor-pointer"
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-out ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-out ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-out ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed inset-0 bg-[#e1dbcb] transition-all duration-500 ease-in-out z-40 ${
            isMenuOpen
              ? "opacity-100 visible scale-100"
              : "opacity-0 invisible scale-95"
          }`}
        >
          {/* Centered Menu Items */}
          <div className="flex items-center justify-center h-full">
            <div
              className={`space-y-8 text-center transition-all duration-700 ease-out ${
                isMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              {menuItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`block text-[#832732] hover:text-black transition-all duration-300 ease-out text-2xl font-medium transform ${
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
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
