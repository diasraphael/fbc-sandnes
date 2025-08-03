"use client";

import React from "react";
import { motion } from "framer-motion";

export default function YearlyPromise() {
  return (
    <motion.section
      className="bg-gradient-to-br from-[#f5f3f1] via-[#f8f6f4] to-[#f2ede8] py-20 md:py-28 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-[#832732]/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-l from-[#832732]/3 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Section Header */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.span
              className="inline-block px-6 py-3 bg-gradient-to-r from-[#832732] to-[#a63042] text-white text-sm uppercase tracking-[0.2em] font-medium rounded-full mb-8 shadow-lg shadow-[#832732]/20 border border-white/20"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.4,
                type: "spring",
                bounce: 0.4,
              }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <span className="relative z-10">2025 Promise</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-full"></div>
            </motion.span>

            <motion.h3
              className="text-2xl md:text-3xl text-[#832732] mb-16 font-light tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              God&apos;s Promise for This Year
            </motion.h3>

            <motion.div className="relative mb-10">
              <motion.h2
                className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-br from-[#832732] via-[#a63042] to-[#832732] bg-clip-text text-transparent mb-6 leading-tight font-serif"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
              >
                Nevertheless, I will bring health and healing to it; I will heal
                my people and will let them enjoy abundant peace and security.
              </motion.h2>

              {/* Decorative quote marks */}
              <motion.div
                className="absolute -top-4 -left-4 md:-left-8 text-6xl md:text-8xl text-[#832732]/20 font-serif"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.0 }}
                viewport={{ once: true }}
              >
                &ldquo;
              </motion.div>
              <motion.div
                className="absolute -bottom-8 -right-4 md:-right-8 text-6xl md:text-8xl text-[#832732]/20 font-serif"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                viewport={{ once: true }}
              >
                &rdquo;
              </motion.div>
            </motion.div>

            <motion.div
              className="inline-flex items-center gap-3 bg-white/60 backdrop-blur-sm px-6 py-3 rounded-full border border-[#832732]/20 shadow-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <div className="w-2 h-2 bg-[#832732] rounded-full"></div>
              <p className="text-[#832732] font-semibold text-lg tracking-wide">
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
