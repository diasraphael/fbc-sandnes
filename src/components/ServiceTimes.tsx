"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ServiceTimes() {
  return (
    <motion.section
      className="bg-[#832732] text-white py-10 relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container mx-auto px-4">
        {/* Simple horizontal layout */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
          {/* Welcome message */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-white/90 text-2xl font-medium tracking-wide drop-shadow-sm">
              Welcome to Our Church
            </p>
          </motion.div>

          {/* Separator line for desktop */}
          <motion.div
            className="hidden md:block w-px h-12 bg-white/30"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          ></motion.div>

          {/* Service time info */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3">
              <span className="text-white/80 text-sm uppercase tracking-widest font-light">
                Sunday Service
              </span>
              <span className="text-white/60">•</span>
              <motion.span
                className="text-xl font-bold tracking-wide text-white drop-shadow-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                11:00 AM
              </motion.span>
            </div>
          </motion.div>

          {/* Another separator line for desktop */}
          <motion.div
            className="hidden md:block w-px h-12 bg-white/30"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          ></motion.div>

          {/* Address */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-white/80 text-sm font-light tracking-wide">
              Erling Skjalgssons gate 13, 4307 Sandnes
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
