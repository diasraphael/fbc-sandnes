"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function PastorSection() {
  return (
    <motion.section
      className="bg-white py-20 md:py-28 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Background Pattern - Very Subtle */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#832732]/3 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-l from-[#a63042]/2 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-12 md:mb-16"
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
              <span className="relative z-10">Our Pastor</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-full"></div>
            </motion.span>

            <motion.h3
              className="text-2xl md:text-3xl text-[#832732] mb-8 font-light tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Meet Our Spiritual Leader
            </motion.h3>

            <motion.p
              className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              Dedicated to serving our community with love, wisdom, and
              unwavering faith in God&apos;s calling.
            </motion.p>
          </motion.div>

          {/* Pastor Content */}
          <motion.div
            className="grid lg:grid-cols-3 gap-12 lg:gap-16 items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {/* Pastor Image */}
            <motion.div
              className="relative lg:col-span-1"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <motion.div
                className="relative bg-gray-100/60 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-gray-200/50 aspect-[3/4] max-w-sm mx-auto"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <Image
                  src="/kalai.jpg"
                  alt="Pastor Paul Kalai"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#832732]/20 via-transparent to-transparent"></div>

                {/* Decorative frame */}
                <div className="absolute inset-4 border-2 border-white/30 rounded-2xl"></div>
              </motion.div>

              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-6 left-6 right-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                viewport={{ once: true }}
              >
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-gray-200/50">
                  <h4 className="text-xl font-semibold bg-gradient-to-r from-[#832732] to-[#a63042] bg-clip-text text-transparent text-center">
                    Pastor Paul Kalai
                  </h4>
                  <p className="text-gray-600 text-center text-sm mt-1">
                    Lead Pastor since 2025
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Pastor Information */}
            <motion.div
              className="space-y-6 lg:col-span-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Bio */}
              <motion.div
                className="bg-gray-50/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-200/50"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <h4 className="text-xl font-semibold text-[#832732] mb-4 flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#832732] rounded-full"></div>
                  About Pastor Paul Kalai
                </h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Pastor Paul Kalai has been faithfully serving our community
                  for over 8 years. With a heart for evangelism and
                  discipleship, he leads our congregation with wisdom,
                  compassion, and unwavering dedication to God&apos;s word.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  He has been instrumental in growing our church family and
                  strengthening our community outreach programs.
                </p>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg border border-gray-200/50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <h4 className="text-xl font-semibold text-[#832732] mb-4 flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#832732] rounded-full"></div>
                  Connect with Pastor Paul Kalai
                </h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  <motion.a
                    href="mailto:pastor@fbcsandnes.no"
                    className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="w-8 h-8 bg-[#832732] rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Email</p>
                      <p className="text-xs text-gray-600">
                        paulkalai@gmail.com
                      </p>
                    </div>
                  </motion.a>

                  <motion.a
                    href="tel:+4712345678"
                    className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="w-8 h-8 bg-[#832732] rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Phone</p>
                      <p className="text-xs text-gray-600">+47 48290578</p>
                    </div>
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Decorative Elements - same as previous components */}
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
