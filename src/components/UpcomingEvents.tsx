"use client";

import React from "react";
import { motion } from "framer-motion";

interface RecurringEvent {
  id: number;
  title: string;
  scheduleType: "daily" | "weekly" | "monthly-day" | "monthly-week";
  dayOfWeek?: number; // 0 = Sunday, 1 = Monday, etc.
  weekOfMonth?: number; // 1 = first, 2 = second, etc.
  time: string;
  location: string;
  locationType: "Online" | "In-Person" | "Hospital" | "Various Locations";
  description?: string;
}

const recurringEvents: RecurringEvent[] = [
  {
    id: 1,
    title: "Early Morning Prayer",
    scheduleType: "daily",
    time: "05:00 - 06:00 CEST",
    location: "Online Meeting",
    locationType: "Online",
    description: "Start your day with prayer and meditation",
  },
  {
    id: 2,
    title: "House Prayer Meetings",
    scheduleType: "weekly",
    dayOfWeek: 3, // Wednesday
    time: "18:30 - 20:30",
    location: "Various Homes",
    locationType: "Various Locations",
    description: "Intimate prayer gatherings in community",
  },
  {
    id: 3,
    title: "Hospital Prayer Visits",
    scheduleType: "monthly-week",
    dayOfWeek: 5, // Friday
    weekOfMonth: 2, // Second Friday
    time: "18:30 - 19:30",
    location: "Local Hospitals",
    locationType: "Hospital",
    description: "Bringing comfort and prayer to those in need",
  },
  {
    id: 4,
    title: "Bible Study",
    scheduleType: "weekly",
    dayOfWeek: 6, // Saturday
    time: "18:00 - 19:30",
    location: "Fellowship Hall",
    locationType: "In-Person",
    description: "Deep dive into God's Word together",
  },
  {
    id: 5,
    title: "Sunday Holy Service",
    scheduleType: "weekly",
    dayOfWeek: 0, // Sunday
    time: "11:00 - 13:30",
    location: "Main Sanctuary",
    locationType: "In-Person",
    description: "Weekly worship and fellowship",
  },
  {
    id: 6,
    title: "Holy Communion Service",
    scheduleType: "monthly-week",
    dayOfWeek: 0, // Sunday
    weekOfMonth: 1, // First Sunday
    time: "11:00 - 13:30",
    location: "Main Sanctuary",
    locationType: "In-Person",
    description: "Special communion service on the first Sunday",
  },
];

// Function to calculate next occurrence of each event
const getNextOccurrence = (event: RecurringEvent): Date => {
  const now = new Date();
  let nextDate = new Date();

  switch (event.scheduleType) {
    case "daily":
      // For daily events, if it's past the time today, schedule for tomorrow
      const [hour, minute] = event.time.split(" - ")[0].split(":").map(Number);
      nextDate.setHours(hour, minute, 0, 0);
      if (nextDate <= now) {
        nextDate.setDate(nextDate.getDate() + 1);
      }
      break;

    case "weekly":
      // Find next occurrence of the specified day of week
      const targetDay = event.dayOfWeek!;
      const currentDay = now.getDay();
      let daysUntilTarget = targetDay - currentDay;

      if (daysUntilTarget <= 0) {
        daysUntilTarget += 7; // Next week
      }

      nextDate.setDate(now.getDate() + daysUntilTarget);
      break;

    case "monthly-week":
      // Find next occurrence of specific week and day (e.g., "second Friday")
      const targetWeek = event.weekOfMonth!;
      const targetWeekDay = event.dayOfWeek!;

      // Start from the first day of current month
      const firstOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);

      // Find the first occurrence of target day in the month
      const firstOccurrence = new Date(firstOfMonth);
      const daysToAdd = (targetWeekDay - firstOfMonth.getDay() + 7) % 7;
      firstOccurrence.setDate(1 + daysToAdd);

      // Add weeks to get to target week
      const targetDate = new Date(firstOccurrence);
      targetDate.setDate(firstOccurrence.getDate() + (targetWeek - 1) * 7);

      // If target date is in the past, move to next month
      if (targetDate <= now) {
        const nextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1);
        const nextMonthDaysToAdd = (targetWeekDay - nextMonth.getDay() + 7) % 7;
        nextDate = new Date(nextMonth);
        nextDate.setDate(1 + nextMonthDaysToAdd + (targetWeek - 1) * 7);
      } else {
        nextDate = targetDate;
      }
      break;

    default:
      nextDate = new Date();
  }

  return nextDate;
};

// Function to format the calculated date
const formatEventDate = (date: Date) => {
  const day = date.getDate().toString().padStart(2, "0");
  const month = date.toLocaleDateString("en-US", { month: "long" });
  const year = date.getFullYear().toString();
  const formattedDate = date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return { day, month, year, formattedDate };
};

const getLocationTypeColor = (locationType: string) => {
  switch (locationType) {
    case "Online":
      return "bg-blue-100 text-blue-800 border-blue-200";
    case "In-Person":
      return "bg-green-100 text-green-800 border-green-200";
    case "Hospital":
      return "bg-red-100 text-red-800 border-red-200";
    case "Various Locations":
      return "bg-purple-100 text-purple-800 border-purple-200";
    default:
      return "bg-gray-100 text-gray-800 border-gray-200";
  }
};

export default function UpcomingEvents() {
  // Calculate next occurrences for all events
  const eventsWithDates = recurringEvents.map((event) => ({
    ...event,
    nextDate: getNextOccurrence(event),
    ...formatEventDate(getNextOccurrence(event)),
  }));

  // Sort events by next occurrence date
  const sortedEvents = eventsWithDates.sort(
    (a, b) => a.nextDate.getTime() - b.nextDate.getTime()
  );

  return (
    <motion.section
      className="bg-white py-16 md:py-20 relative overflow-hidden"
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
              <span className="relative z-10">Upcoming Events</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-full"></div>
            </motion.span>

            <motion.h3
              className="text-xl md:text-2xl text-[#832732] mb-6 font-light tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Join Us for Worship & Fellowship
            </motion.h3>

            <motion.p
              className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              Come together as a community to worship, learn, and grow in faith.
              All are welcome to join our regular services and special events.
            </motion.p>
          </motion.div>

          {/* Events List */}
          <motion.div
            className="space-y-6"
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
                  delayChildren: 0.2,
                },
              },
            }}
          >
            {sortedEvents.map((event, index) => (
              <motion.div
                key={event.id}
                className="relative group"
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {/* Event Card */}
                <div className="bg-gradient-to-r from-gray-50/80 to-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 p-4 md:p-6 border border-gray-100/50 group-hover:border-[#832732]/20 group-hover:shadow-[#832732]/10">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#832732]/5 to-[#a63042]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10 flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6">
                    {/* Date Display */}
                    <motion.div
                      className="flex-shrink-0"
                      whileHover={{ scale: 1.03, rotate: 1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="bg-gradient-to-br from-[#832732] to-[#a63042] text-white p-4 md:p-5 rounded-2xl shadow-lg relative overflow-hidden group-hover:shadow-xl transition-shadow duration-500">
                        {/* Background pattern */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent"></div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-lg"></div>

                        <div className="relative z-10 text-center min-w-[80px]">
                          <div className="text-2xl md:text-3xl font-bold leading-none mb-1">
                            {event.day}
                          </div>
                          <div className="text-xs font-medium opacity-90 uppercase tracking-[0.1em] mb-1">
                            {event.month}
                          </div>
                          <div className="text-xs opacity-80 font-medium">
                            {event.year}
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Event Details */}
                    <div className="flex-1 min-w-0">
                      <motion.h4
                        className="text-lg md:text-xl font-light text-[#832732] mb-3 group-hover:text-[#a63042] transition-colors duration-300 tracking-wide"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                        viewport={{ once: true }}
                      >
                        {event.title}
                      </motion.h4>

                      <motion.div
                        className="flex flex-wrap items-center gap-4 mb-3"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                        viewport={{ once: true }}
                      >
                        <div className="flex items-center gap-2 text-gray-700">
                          <div className="w-1.5 h-1.5 bg-[#832732] rounded-full"></div>
                          <span className="text-sm font-medium">
                            {event.formattedDate}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-700">
                          <div className="w-1.5 h-1.5 bg-[#a63042] rounded-full"></div>
                          <span className="text-sm">{event.time}</span>
                        </div>
                      </motion.div>

                      <motion.div
                        className="flex items-center gap-2 text-gray-600 mb-3"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 + 0.6 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                        <span className="text-sm">{event.location}</span>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium border ${getLocationTypeColor(
                            event.locationType
                          )}`}
                        >
                          {event.locationType}
                        </span>
                      </motion.div>

                      {event.description && (
                        <motion.p
                          className="text-gray-600 text-sm leading-relaxed"
                          initial={{ opacity: 0, x: 30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.6,
                            delay: index * 0.1 + 0.7,
                          }}
                          viewport={{ once: true }}
                        >
                          {event.description}
                        </motion.p>
                      )}
                    </div>

                    {/* Action Button */}
                    <motion.div
                      className="flex-shrink-0"
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.8 }}
                      viewport={{ once: true }}
                    >
                      <motion.button
                        className="bg-gradient-to-r from-[#832732] to-[#a63042] hover:from-[#a63042] hover:to-[#832732] text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#832732]/25 min-w-[120px] relative overflow-hidden border border-white/20"
                        whileHover={{ scale: 1.03, y: -1 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <span className="relative z-10">Join Us</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </motion.button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
