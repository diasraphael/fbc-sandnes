import React from "react";

interface InputProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  type?: string;
  name?: string;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({
  value,
  onChange,
  placeholder = "",
  className = "",
  type = "text",
  name,
  required = false,
}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      name={name}
      required={required}
      className={`w-full sm:w-64 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#832732] ${className}`}
    />
  );
};

export default Input;
