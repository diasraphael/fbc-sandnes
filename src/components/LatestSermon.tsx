"use client";

import { motion } from "framer-motion";

export default function LatestSermon() {
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
        <div className="max-w-5xl mx-auto">
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
              <span className="relative z-10">Latest Sermon</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-full"></div>
            </motion.span>

            <motion.h3
              className="text-2xl md:text-3xl text-[#832732] mb-8 font-light tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Watch & Be Inspired
            </motion.h3>

            <motion.p
              className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              Join us as we explore God&apos;s word and discover how it applies
              to our daily lives. Experience the power of faith and community
              through our weekly messages.
            </motion.p>
          </motion.div>

          {/* Video Section */}
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="relative bg-white/60 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-white/50"
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {/* Video Container */}
              <div className="relative aspect-video">
                <iframe
                  className="w-full h-full rounded-t-3xl"
                  src="https://www.youtube.com/embed/8p40d71jVk0"
                  title="Latest Sermon - FBC Sandnes"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>

                {/* Overlay for loading effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#832732]/10 to-transparent pointer-events-none rounded-t-3xl"></div>
              </div>

              {/* Video Info */}
              <motion.div
                className="p-6 md:p-8 bg-white/80 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <motion.h3
                      className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-[#832732] to-[#a63042] bg-clip-text text-transparent mb-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 1.0 }}
                      viewport={{ once: true }}
                    >
                      Faith in Action: Living God&apos;s Love
                    </motion.h3>

                    <motion.div
                      className="inline-flex items-center gap-3 bg-[#832732]/10 backdrop-blur-sm px-4 py-2 rounded-full border border-[#832732]/20 mb-3"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 1.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-2 h-2 bg-[#832732] rounded-full"></div>
                      <p className="text-[#832732] font-medium text-sm">
                        Pastor Paul Kalai • September 07, 2025
                      </p>
                    </motion.div>

                    <motion.p
                      className="text-gray-700 leading-relaxed"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.2 }}
                      viewport={{ once: true }}
                    >
                      Discover how we can live out our faith in practical ways
                      and show God&apos;s love to our community through our
                      actions and words.
                    </motion.p>
                  </div>

                  <motion.div
                    className="flex-shrink-0"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 1.3 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <button className="bg-gradient-to-r from-[#832732] to-[#a63042] text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 border border-white/20">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Watch Full Sermon
                      <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-xl"></div>
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Decorative Elements - same as YearlyPromise */}
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
