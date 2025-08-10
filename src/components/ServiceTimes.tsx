"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiSun, FiMoon } from "react-icons/fi";

const services = [
  {
    id: 1,
    name: "Sunday Service",
    day: "Every Sunday",
    time: "11:00 AM",
    type: "Worship",
    description:
      "Join us for worship, fellowship, and inspiring messages from God's word.",
    icon: FiSun,
  },
  {
    id: 2,
    name: "Morning Prayer",
    day: "Daily",
    time: "5:00 - 6:00 AM",
    type: "Prayer",
    description:
      "Start your day with God through early morning prayer and meditation.",
    icon: FiMoon,
  },
];

export default function ServiceTimes() {
  return (
    <motion.section
      className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-[#832732] via-[#a63042] to-[#832732]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.1 }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black/20 to-black/5"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-white/3 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center text-white mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.8 }}
          >
            <motion.span
              className="inline-block px-6 py-3 bg-white/20 backdrop-blur-sm text-white text-sm uppercase tracking-[0.2em] font-medium rounded-full mb-6 shadow-lg border border-white/30"
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
              <span className="relative z-10">Service Times</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-full"></div>
            </motion.span>

            <motion.h2
              className="text-2xl md:text-3xl font-light tracking-wide mb-4"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.8 }}
            >
              Join Us for Worship
            </motion.h2>

            <motion.p
              className="text-white/90 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.8 }}
            >
              Come and experience God&apos;s love in our welcoming community
            </motion.p>
          </motion.div>

          {/* Service Cards */}
          <motion.div
            className="grid md:grid-cols-2 gap-6 md:gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.6 + index * 0.1,
                  ease: "easeOut",
                }}
                viewport={{ once: true, amount: 0.3 }}
              >
                {/* Background Gradient Line */}
                <motion.div
                  className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-white/40 to-white/10 rounded-full"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.7 + index * 0.1,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                />

                {/* Service Card */}
                <motion.div
                  className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-2xl border border-white/50 ml-6 relative overflow-hidden group-hover:bg-white transition-all duration-300"
                  initial={{ scale: 0.95 }}
                  whileInView={{ scale: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.8 + index * 0.1,
                    ease: [0.23, 1, 0.32, 1],
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  {/* Service Icon & Time */}
                  <motion.div
                    className="flex items-start justify-between mb-4"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.9 + index * 0.1,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#832732] to-[#a63042] rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <service.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-[#832732] group-hover:text-[#a63042] transition-colors duration-300">
                          {service.name}
                        </h3>
                        <p className="text-gray-600 text-sm">{service.day}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-[#832732]">
                        {service.time}
                      </p>
                      <p className="text-xs text-gray-500 uppercase tracking-wide">
                        {service.type}
                      </p>
                    </div>
                  </motion.div>

                  {/* Service Description */}
                  <motion.p
                    className="text-gray-700 leading-relaxed text-sm"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: 1.0 + index * 0.1,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    {service.description}
                  </motion.p>

                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#832732]/5 to-[#a63042]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
