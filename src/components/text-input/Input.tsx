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
      className={`w-full h-full sm:w-64 px-6 py-[18px] border-[1px] border-[#f5f3f1] focus:outline-none focus:border-[#832732] leading-[1.2em] bg-transparent outline-none ${className}`}
    />
  );
};

export default Input;
