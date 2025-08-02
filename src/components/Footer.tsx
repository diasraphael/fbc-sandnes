"use client";

import React from "react";
import { motion } from "framer-motion";
import { CgFacebook, CgInstagram } from "react-icons/cg";
import { FaYoutube } from "react-icons/fa6";
import Button from "./button/Button";
import Input from "./text-input/Input";

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <motion.div
      className="w-full bg-[#e1dbcb]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="p-16 max-w-7xl mx-auto">
        <div className="flex flex-col bg-footer bg-cover bg-center">
          <motion.div
            className="flex flex-col lg:flex-row gap-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Church Description Section */}
            <motion.div
              className="flex-1 max-w-[350px]"
              variants={itemVariants}
            >
              <motion.h1
                className="text-2xl mb-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Faith Baptist Church
              </motion.h1>
              <motion.div
                className="text-base"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Our Church is a family — a place you can call home. It&apos;s
                where you can find hope, healing, and purpose.
              </motion.div>
              <motion.div
                className="flex gap-6 items-center cursor-pointer my-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <CgFacebook
                    fontSize={20}
                    className="text-[#832732] hover:text-[black] transition-colors duration-300"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.2, rotate: -5 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <CgInstagram
                    fontSize={20}
                    className="text-[#832732] hover:text-[black] transition-colors duration-300"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <FaYoutube
                    fontSize={20}
                    className="text-[#832732] hover:text-[black] transition-colors duration-300"
                  />
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Visit Us Section */}
            <motion.div variants={itemVariants}>
              <motion.h1
                className="text-2xl mb-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Visit us
              </motion.h1>
              <motion.div
                className="text-base"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <motion.p
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  Faith Baptist Church
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  Erling Skjalgssons gate 13
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  4307 Sandnes
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  Norway
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.9 }}
                  viewport={{ once: true }}
                >
                  Phone: +47 48290578
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 1.0 }}
                  viewport={{ once: true }}
                >
                  Email: paulkalai@gmail.com
                </motion.p>
              </motion.div>
            </motion.div>

            {/* Newsletter Section */}
            <motion.div className="flex-1" variants={itemVariants}>
              <motion.h1
                className="text-2xl mb-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Stay Tuned
              </motion.h1>
              <motion.div
                className="mb-4 text-base"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                Subscribe to our newsletter and never miss our news
              </motion.div>
              <motion.div
                className="flex flex-col sm:flex-row items-center pt-4 w-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
              >
                <div className="flex-1 sm:mr-4 w-full">
                  <Input />
                </div>
                <Button
                  label="Subscribe"
                  className="mt-10 w-full sm:w-auto sm:mt-0"
                />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Copyright Section */}
          <motion.div
            className="flex flex-row justify-center items-center mt-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col">
              <div className="text-base">
                All Rights Reserved @ Faith Baptist Church, Sandnes{" "}
                {new Date().getFullYear()}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
