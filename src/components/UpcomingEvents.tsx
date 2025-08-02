"use client";

import React from "react";
import { motion } from "framer-motion";

interface Event {
  id: number;
  day: string;
  month: string;
  year: string;
  title: string;
  date: string;
  startTime: string;
  endTime: string;
  location: string;
  locationType: string;
}

const events: Event[] = [
  {
    id: 1,
    day: "15",
    month: "December",
    year: "2024",
    title: "Christmas Carol Service",
    date: "Dec 15, 2024",
    startTime: "18:00",
    endTime: "19:30",
    location: "Main Sanctuary",
    locationType: "Worship Center",
  },
  {
    id: 2,
    day: "22",
    month: "December",
    year: "2024",
    title: "Christmas Eve Celebration",
    date: "Dec 22, 2024",
    startTime: "17:00",
    endTime: "18:30",
    location: "Faith Baptist Church",
    locationType: "Worship Center",
  },
  {
    id: 3,
    day: "05",
    month: "January",
    year: "2025",
    title: "New Year Prayer Meeting",
    date: "Jan 5, 2025",
    startTime: "10:00",
    endTime: "11:30",
    location: "Fellowship Hall",
    locationType: "Virtual Event",
  },
  {
    id: 4,
    day: "12",
    month: "January",
    year: "2025",
    title: "Youth Group Meeting",
    date: "Jan 12, 2025",
    startTime: "16:00",
    endTime: "18:00",
    location: "Youth Center",
    locationType: "Worship Center",
  },
];

export default function UpcomingEvents() {
  return (
    <motion.section
      className="bg-white py-20 md:py-28 relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-800 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Upcoming Events
          </motion.h2>
        </motion.div>

        {/* Events List */}
        <motion.div
          className="max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
              },
            },
          }}
        >
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              className="flex items-center py-8 border-b border-gray-200 last:border-b-0 group hover:bg-gray-50/50 transition-colors duration-300"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.3 }}
            >
              {/* Date Display */}
              <motion.div
                className="flex-shrink-0 mr-12"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-center">
                  <div className="text-6xl md:text-7xl font-light text-gray-800 leading-none">
                    {event.day}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    {event.month}
                  </div>
                  <div className="text-sm text-gray-600">{event.year}</div>
                </div>
              </motion.div>

              {/* Event Details */}
              <div className="flex-1 min-w-0 mr-8">
                <motion.h3
                  className="text-2xl md:text-3xl font-normal text-[#832732] mb-2 group-hover:text-[#a63042] transition-colors duration-300"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                  viewport={{ once: true }}
                >
                  {event.title}
                </motion.h3>

                <motion.div
                  className="text-gray-600 text-base"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
                  viewport={{ once: true }}
                >
                  {event.date} {event.startTime} - {event.date} {event.endTime}
                </motion.div>
              </div>

              {/* Location */}
              <motion.div
                className="flex-shrink-0 mr-8 text-right"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.7 }}
                viewport={{ once: true }}
              >
                <div className="text-gray-800 font-medium mb-1">Location:</div>
                <div className="text-gray-600">{event.locationType}</div>
              </motion.div>

              {/* Learn More Button */}
              <motion.div
                className="flex-shrink-0"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.8 }}
                viewport={{ once: true }}
              >
                <motion.button
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-3 rounded text-sm font-medium transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn more
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
