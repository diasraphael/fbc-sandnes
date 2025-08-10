"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiMapPin } from "react-icons/fi";

export default function LocationMap() {
  const address = "Erling Skjalgssons gate 13, 4307 Sandnes, Norway";
  const encodedAddress = encodeURIComponent(address);

  return (
    <motion.section
      className="bg-white py-16 md:py-20 relative overflow-hidden"
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
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-10 md:mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.span
              className="inline-block px-6 py-3 bg-gradient-to-r from-[#832732] to-[#a63042] text-white text-sm uppercase tracking-[0.2em] font-medium rounded-full mb-6 shadow-lg shadow-[#832732]/20 border border-white/20"
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
              <span className="relative z-10">Find Us</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-full"></div>
            </motion.span>

            <motion.h3
              className="text-xl md:text-2xl text-[#832732] mb-6 font-light tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Visit Our Church
            </motion.h3>

            <motion.p
              className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              We&apos;d love to welcome you to our church family. Come join us
              for worship and fellowship.
            </motion.p>
          </motion.div>

          {/* Map and info container */}
          <motion.div
            className="grid lg:grid-cols-3 gap-8 items-start"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {/* Map */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="bg-gradient-to-r from-gray-50/80 to-white/90 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden border border-gray-100/50 group hover:shadow-xl transition-all duration-500"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#832732]/5 to-[#a63042]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <iframe
                  title="Faith Baptist Church Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2003.1234567890123!2d5.7364!3d58.8502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x463a359c8c8c8c8c%3A0x8c8c8c8c8c8c8c8c!2sErling%20Skjalgssons%20gate%2013%2C%204307%20Sandnes%2C%20Norway!5e0!3m2!1sen!2sno!4v1677912516512!5m2!1sen!2sno"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-80 lg:h-96 relative z-10"
                ></iframe>
              </motion.div>
            </motion.div>

            {/* Church info */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="bg-gradient-to-r from-gray-50/80 to-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100/50 group hover:shadow-xl transition-all duration-500 relative overflow-hidden"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#832732]/5 to-[#a63042]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <motion.h4
                    className="text-lg md:text-xl font-light text-[#832732] mb-6 group-hover:text-[#a63042] transition-colors duration-300 tracking-wide"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.0 }}
                    viewport={{ once: true }}
                  >
                    Faith Baptist Church
                  </motion.h4>

                  <div className="space-y-6">
                    <motion.div
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-2 h-2 bg-[#832732] rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-medium text-gray-900 mb-2 text-sm">
                          Address
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {address}
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="border-t border-gray-200/50 pt-6"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 1.2 }}
                      viewport={{ once: true }}
                    >
                      <p className="text-sm text-gray-500 mb-4">
                        Need directions?
                      </p>
                      <motion.a
                        href={`https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-[#832732] to-[#a63042] hover:from-[#a63042] hover:to-[#832732] text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#832732]/25 relative overflow-hidden border border-white/20 group"
                        whileHover={{ scale: 1.03, y: -1 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <span className="relative z-10 flex items-center gap-2">
                          <FiMapPin className="w-4 h-4" />
                          Get Directions
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </motion.a>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
