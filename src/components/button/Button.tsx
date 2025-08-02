"use client";

import React from "react";
import { motion } from "framer-motion";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  className = "",
  type = "button",
  disabled = false,
}) => {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`relative z-20 bg-[#832732] tracking-[.7px] text-[#f9f9fa] text-lg text-center px-6 py-4 transition-all duration-500 ease-out inline-block overflow-hidden group ${className} cursor-pointer`}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 25,
      }}
    >
      {/* Sliding background overlay */}
      <span className="absolute inset-0 bg-[#231917] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></span>
      {/* Button text */}
      <motion.span
        className="relative z-10 group-hover:text-white transition-colors duration-500 ease-out"
        initial={{ opacity: 0.9 }}
        whileHover={{ opacity: 1 }}
      >
        {label}
      </motion.span>
    </motion.button>
  );
};

export default Button;
