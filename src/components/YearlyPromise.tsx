"use client";

import React from "react";
import { motion } from "framer-motion";

export default function YearlyPromise() {
  return (
    <motion.section
      className="bg-white py-20 md:py-28 relative overflow-hidden"
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
        <div className="max-w-5xl mx-auto text-center">
          {/* Section Header */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.8 }}
          >
            <motion.span
              className="inline-block px-6 py-3 bg-gradient-to-r from-[#832732] to-[#a63042] text-white text-sm uppercase tracking-[0.2em] font-medium rounded-full mb-8 shadow-lg shadow-[#832732]/20 border border-white/20"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                delay: 0.2,
                ease: [0.23, 1, 0.32, 1],
              }}
              viewport={{ once: true, amount: 0.8 }}
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <span className="relative z-10">2025 Promise</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-full"></div>
            </motion.span>

            <motion.h3
              className="text-xl md:text-2xl text-[#832732] mb-12 font-light tracking-wide"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.8 }}
            >
              God&apos;s Promise for This Year
            </motion.h3>

            <motion.div className="relative mb-8">
              <motion.h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-br from-[#832732] via-[#a63042] to-[#832732] bg-clip-text text-transparent mb-4 leading-tight font-serif"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                Nevertheless, I will bring health and healing to it; I will heal
                my people and will let them enjoy abundant peace and security.
              </motion.h2>

              {/* Decorative quote marks */}
              <motion.div
                className="absolute -top-3 -left-3 md:-left-6 text-4xl md:text-6xl text-[#832732]/20 font-serif"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.6, ease: "backOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                &ldquo;
              </motion.div>
              <motion.div
                className="absolute -bottom-6 -right-3 md:-right-6 text-4xl md:text-6xl text-[#832732]/20 font-serif"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.7, ease: "backOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                &rdquo;
              </motion.div>
            </motion.div>

            <motion.div
              className="inline-flex items-center gap-3 bg-white/60 backdrop-blur-sm px-5 py-2.5 rounded-full border border-[#832732]/20 shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                delay: 0.8,
                ease: [0.23, 1, 0.32, 1],
              }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <div className="w-2 h-2 bg-[#832732] rounded-full"></div>
              <p className="text-[#832732] font-semibold text-base tracking-wide">
                Jeremiah 33:6
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Decorative Elements */}
      <motion.div
        className="absolute top-12 left-8 w-24 h-24 opacity-60"
        initial={{ scale: 0, opacity: 0, rotate: -180 }}
        whileInView={{ scale: 1, opacity: 0.6, rotate: 0 }}
        transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="w-full h-full bg-gradient-to-br from-[#832732]/20 to-[#a63042]/10 rounded-full shadow-lg"></div>
        <div className="absolute inset-2 bg-gradient-to-tl from-white/30 to-transparent rounded-full"></div>
      </motion.div>

      <motion.div
        className="absolute bottom-12 right-8 w-20 h-20 opacity-50"
        initial={{ scale: 0, opacity: 0, rotate: 180 }}
        whileInView={{ scale: 1, opacity: 0.5, rotate: 0 }}
        transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="w-full h-full bg-gradient-to-tl from-[#832732]/15 to-[#a63042]/5 rounded-full shadow-lg"></div>
        <div className="absolute inset-2 bg-gradient-to-br from-white/20 to-transparent rounded-full"></div>
      </motion.div>

      {/* Additional floating elements */}
      <motion.div
        className="absolute top-1/3 right-16 w-3 h-3 bg-[#832732]/30 rounded-full"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.3 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      />

      <motion.div
        className="absolute bottom-1/4 left-16 w-2 h-2 bg-[#832732]/40 rounded-full"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.4 }}
        transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      />
    </motion.section>
  );
}
