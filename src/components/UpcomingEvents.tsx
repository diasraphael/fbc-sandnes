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
      className="bg-white py-12 md:py-20 lg:py-28 relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-gray-800 mb-4 md:mb-6 px-4"
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
          className="max-w-5xl mx-auto px-2 md:px-0"
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1,
              },
            },
          }}
        >
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              className="flex flex-col md:flex-row md:items-center py-6 md:py-8 border-b border-gray-200 last:border-b-0 group hover:bg-gray-50/50 transition-colors duration-300 gap-4 md:gap-0"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.3 }}
            >
              {/* Date Display */}
              <motion.div
                className="flex-shrink-0 md:mr-12 flex md:block items-center md:items-start gap-4 md:gap-0"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-center md:text-center">
                  <div className="text-4xl md:text-6xl lg:text-7xl font-light text-gray-800 leading-none">
                    {event.day}
                  </div>
                  <div className="text-xs md:text-sm text-gray-600 mt-1">
                    {event.month} {event.year}
                  </div>
                </div>
              </motion.div>

              {/* Event Details */}
              <div className="flex-1 min-w-0 md:mr-8 order-2 md:order-none">
                <motion.h3
                  className="text-xl md:text-2xl lg:text-3xl font-normal text-[#832732] mb-2 group-hover:text-[#a63042] transition-colors duration-300"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                  viewport={{ once: true }}
                >
                  {event.title}
                </motion.h3>

                <motion.div
                  className="text-gray-600 text-sm md:text-base"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
                  viewport={{ once: true }}
                >
                  {event.date} • {event.startTime} - {event.endTime}
                </motion.div>
              </div>

              {/* Location & Button Container */}
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 order-3">
                {/* Location */}
                <motion.div
                  className="flex-shrink-0 text-left md:text-right"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.7 }}
                  viewport={{ once: true }}
                >
                  <div className="text-gray-800 font-medium text-sm mb-1">
                    Location:
                  </div>
                  <div className="text-gray-600 text-sm">
                    {event.locationType}
                  </div>
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
                    className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 md:px-6 py-2 md:py-3 rounded text-xs md:text-sm font-medium transition-colors duration-300 w-full md:w-auto"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn more
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
