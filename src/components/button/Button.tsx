import React from "react";

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
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`relative z-20 bg-[#832732] tracking-[.7px] text-[#f9f9fa] text-lg text-center px-6 py-4 transition-all duration-500 ease-out inline-block overflow-hidden group ${className} cursor-pointer`}
    >
      {/* Sliding background overlay */}
      <span className="absolute inset-0 bg-[#231917] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></span>
      {/* Button text */}
      <span className="relative z-10 group-hover:text-white transition-colors duration-500 ease-out">
        {label}
      </span>
    </button>
  );
};

export default Button;
