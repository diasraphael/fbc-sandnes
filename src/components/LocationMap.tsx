"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiMapPin } from "react-icons/fi";

export default function LocationMap() {
  const address = "Erling Skjalgssons gate 13, 4307 Sandnes, Norway";
  const encodedAddress = encodeURIComponent(address);

  return (
    <motion.section
      className="bg-gray-50 py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="flex items-center justify-center gap-3 mb-4"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.3,
              type: "spring",
              bounce: 0.4,
            }}
            viewport={{ once: true }}
          >
            <FiMapPin className="w-6 h-6 text-[#832732]" />
            <h2 className="text-3xl font-bold text-gray-900">Find Us</h2>
          </motion.div>
          <motion.p
            className="text-gray-600 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            We&apos;d love to welcome you to our church family
          </motion.p>
        </motion.div>

        {/* Map and info container */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Map */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                }}
                transition={{ duration: 0.3 }}
              >
                <iframe
                  title="Faith Baptist Church Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2003.1234567890123!2d5.7364!3d58.8502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x463a359c8c8c8c8c%3A0x8c8c8c8c8c8c8c8c!2sErling%20Skjalgssons%20gate%2013%2C%204307%20Sandnes%2C%20Norway!5e0!3m2!1sen!2sno!4v1677912516512!5m2!1sen!2sno"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-96 lg:h-[400px]"
                ></iframe>
              </motion.div>
            </motion.div>

            {/* Church info */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200"
                whileHover={{
                  y: -5,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.h3
                  className="text-xl font-bold text-gray-900 mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  Faith Baptist Church
                </motion.h3>

                <div className="space-y-4">
                  <motion.div
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    viewport={{ once: true }}
                  >
                    <FiMapPin className="w-5 h-5 text-[#832732] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900 mb-1">Address</p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {address}
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="border-t border-gray-100 pt-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <p className="text-sm text-gray-500 mb-3">
                      Need directions?
                    </p>
                    <motion.a
                      href={`https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative z-20 bg-[#832732] tracking-[.7px] text-[#f9f9fa] text-sm text-center px-4 py-2 transition-all duration-500 ease-out inline-block overflow-hidden group cursor-pointer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      {/* Sliding background overlay */}
                      <span className="absolute inset-0 bg-[#231917] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></span>
                      {/* Button text */}
                      <span className="relative z-10 group-hover:text-white transition-colors duration-500 ease-out flex items-center gap-2">
                        <FiMapPin className="w-4 h-4" />
                        Get Directions
                      </span>
                    </motion.a>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
