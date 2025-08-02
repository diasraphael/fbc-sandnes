"use client";

import React from "react";
import { motion } from "framer-motion";

export default function YearlyPromise() {
  return (
    <motion.section
      className="bg-[#f5f3f1] py-16 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.span
              className="inline-block px-4 py-2 bg-[#832732] text-white text-sm uppercase tracking-widest font-light rounded-full mb-6"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.4,
                type: "spring",
                bounce: 0.4,
              }}
              viewport={{ once: true }}
            >
              2025 Promise
            </motion.span>

            <motion.h3
              className="text-2xl text-[#832732] mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              God&apos;s Promise for This Year
            </motion.h3>

            <motion.h2
              className="text-4xl md:text-5xl font-bold text-[#832732] mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              Nevertheless, I will bring health and healing to it; I will heal
              my people and will let them enjoy abundant peace and security.
            </motion.h2>

            <motion.p
              className="text-[#832732] font-semibold text-base mt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              viewport={{ once: true }}
            >
              - Jeremiah 33:6
            </motion.p>
          </motion.div>
          {/* Bottom Quote */}
          <motion.div
            className="mt-16 pt-8 border-t border-gray-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.blockquote
              className="text-xl md:text-2xl font-light text-[#832732] italic"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              viewport={{ once: true }}
            >
              &ldquo;Every new beginning comes from some other beginning&apos;s
              end&rdquo;
            </motion.blockquote>

            <motion.p
              className="text-gray-600 mt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              Let this year be the beginning of deeper faith, stronger
              community, and endless hope.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Animated Decorative Elements */}
      <motion.div
        className="absolute top-8 left-8 w-20 h-20 bg-[#832732]/5 rounded-full"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
      />
      <motion.div
        className="absolute bottom-8 right-8 w-16 h-16 bg-[#832732]/10 rounded-full"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        viewport={{ once: true }}
      />
    </motion.section>
  );
}
