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
      className={`bg-[#832732] text-white py-2 px-4 rounded hover:bg-[#6a1f28] transition-colors duration-200 ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
