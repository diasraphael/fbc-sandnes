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
      className={`z-20 bg-[#832732] hover:bg-[#231917] tracking-[.7px] text-[#f9f9fa] text-lg text-center px-6 py-4 transition-all duration-300 inline-block hover:text-white ${className} cursor-pointer`}
    >
      {label}
    </button>
  );
};

export default Button;
