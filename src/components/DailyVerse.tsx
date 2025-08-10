"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";

export default function DailyVerse() {
  useEffect(() => {
    // Load the DailyVerses.net script
    const script = document.createElement("script");
    script.src = "https://dailyverses.net/get/verse.js?language=niv";
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    // Cleanup function to remove script on unmount
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <motion.section
      className="bg-white py-12 md:py-16 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.1 }}
    >
      {/* Background Pattern - Very Subtle */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#832732]/3 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-l from-[#a63042]/2 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.8 }}
          >
            <motion.span
              className="inline-block px-6 py-3 bg-gradient-to-r from-[#832732] to-[#a63042] text-white text-sm uppercase tracking-[0.2em] font-medium rounded-full mb-6 shadow-lg shadow-[#832732]/20 border border-white/20"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                delay: 0.2,
                ease: [0.23, 1, 0.32, 1], // Premium easing curve
              }}
              viewport={{ once: true, amount: 0.8 }}
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <span className="relative z-10">God&apos;s Word for Today</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-full"></div>
            </motion.span>
          </motion.div>

          {/* Beautiful Verse Display */}
          <motion.div
            className="max-w-2xl mx-auto relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Decorative frame */}
            <div className="absolute -inset-2 bg-gradient-to-r from-[#832732]/5 via-transparent to-[#a63042]/5 rounded-xl blur-lg"></div>

            {/* Main content area */}
            <motion.div
              className="relative bg-white/80 backdrop-blur-sm rounded-xl p-4 md:p-6 shadow-lg shadow-[#832732]/10 border border-white/50"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.4,
                ease: [0.23, 1, 0.32, 1],
              }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -2 }}
            >
              {/* Top decoration */}
              <motion.div
                className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.6, ease: "backOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="w-8 h-8 bg-gradient-to-br from-[#832732] to-[#a63042] rounded-full flex items-center justify-center shadow-md">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                </div>
              </motion.div>

              {/* DailyVerses.net widget container */}
              <motion.div
                id="dailyVersesWrapper"
                className="daily-verse-content relative z-10 pt-2 min-h-[60px]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.7, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              ></motion.div>

              {/* Loading state */}
              <motion.div
                className="loading-state text-gray-400 italic text-sm absolute inset-0 flex flex-col items-center justify-center"
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 0.3, delay: 3 }}
                style={{ pointerEvents: "none" }}
              >
                <div className="flex items-center justify-center gap-1">
                  <motion.div
                    className="w-1 h-1 bg-[#832732] rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  ></motion.div>
                  <motion.div
                    className="w-1 h-1 bg-[#a63042] rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                  ></motion.div>
                  <motion.div
                    className="w-1 h-1 bg-[#832732] rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                  ></motion.div>
                </div>
                <div className="mt-1 text-xs">Loading verse...</div>
              </motion.div>

              {/* Bottom decoration */}
              <motion.div
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 bg-gradient-to-br from-[#832732] to-[#a63042] rounded-full shadow-sm"></div>
                  <div className="w-1 h-1 bg-gradient-to-br from-[#a63042] to-[#832732] rounded-full shadow-sm mt-0.5"></div>
                  <div className="w-1.5 h-1.5 bg-gradient-to-br from-[#832732] to-[#a63042] rounded-full shadow-sm"></div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Custom Styles for DailyVerses.net widget */}
      <style jsx global>{`
        .daily-verse-content .dailyVerses.bibleVerse {
          margin: 0;
          padding: 0;
          font-family: inherit;
        }

        .daily-verse-content .dailyVerses.bibleVerse .bibleVerse {
          font-size: 1.25rem;
          line-height: 1.3;
          color: #1f2937;
          font-weight: 300;
          margin-bottom: 0.75rem;
          font-style: italic;
          text-align: center;
          position: relative;
          background: linear-gradient(
            135deg,
            #1f2937 0%,
            #374151 50%,
            #1f2937 100%
          );
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .daily-verse-content .dailyVerses.bibleVerse .bibleVerse::before {
          content: '"';
          font-size: 2.5rem;
          background: linear-gradient(135deg, #832732 0%, #a63042 100%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          position: absolute;
          left: -1.25rem;
          top: -0.5rem;
          font-family: serif;
          opacity: 0.8;
          font-weight: bold;
        }

        .daily-verse-content .dailyVerses.bibleVerse .bibleVerse::after {
          content: '"';
          font-size: 2.5rem;
          background: linear-gradient(135deg, #832732 0%, #a63042 100%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          position: absolute;
          right: -1.25rem;
          bottom: -0.75rem;
          font-family: serif;
          opacity: 0.8;
          font-weight: bold;
        }

        .daily-verse-content .dailyVerses.bibleVerse .bibleVerse a {
          background: linear-gradient(
            135deg,
            #1f2937 0%,
            #374151 50%,
            #1f2937 100%
          );
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-decoration: none;
          font-weight: 300;
          transition: all 0.3s ease;
        }

        .daily-verse-content .dailyVerses.bibleVerse .bibleVerse a:hover {
          background: linear-gradient(135deg, #832732 0%, #a63042 100%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          transform: translateY(-1px);
        }

        .daily-verse-content .dailyVerses.bibleVerse .bibleRef {
          font-size: 0.9rem;
          color: #6b7280;
          font-weight: 600;
          margin-top: 1rem;
          text-align: center;
          display: block;
          position: relative;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .daily-verse-content .dailyVerses.bibleVerse .bibleRef::before {
          content: "";
          position: absolute;
          left: 50%;
          top: -0.5rem;
          transform: translateX(-50%);
          width: 2rem;
          height: 1px;
          background: linear-gradient(90deg, transparent, #832732, transparent);
        }

        .daily-verse-content .dailyVerses.bibleVerse .bibleRef::after {
          content: "✦";
          position: absolute;
          left: 50%;
          top: -0.75rem;
          transform: translateX(-50%);
          color: #832732;
          font-size: 0.65rem;
          background: white;
          padding: 0 0.25rem;
        }

        .daily-verse-content .dailyVerses.bibleVerse .bibleRef a {
          background: linear-gradient(135deg, #832732 0%, #a63042 100%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-decoration: none;
          font-weight: 700;
          transition: all 0.3s ease;
        }

        .daily-verse-content .dailyVerses.bibleVerse .bibleRef a:hover {
          background: linear-gradient(135deg, #a63042 0%, #832732 100%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          transform: translateY(-1px);
        }

        .loading-state {
          display: none;
        }

        /* Hide loading after verse loads */
        .daily-verse-content:not(:empty) + .loading-state {
          display: none !important;
        }

        @media (max-width: 768px) {
          .daily-verse-content .dailyVerses.bibleVerse .bibleVerse {
            font-size: 1.125rem;
            padding: 0 1.25rem;
          }

          .daily-verse-content .dailyVerses.bibleVerse .bibleVerse::before,
          .daily-verse-content .dailyVerses.bibleVerse .bibleVerse::after {
            font-size: 2rem;
          }

          .daily-verse-content .dailyVerses.bibleVerse .bibleVerse::before {
            left: -0.75rem;
            top: -0.25rem;
          }

          .daily-verse-content .dailyVerses.bibleVerse .bibleVerse::after {
            right: -0.75rem;
            bottom: -0.5rem;
          }

          .daily-verse-content .dailyVerses.bibleVerse .bibleRef {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </motion.section>
  );
}
