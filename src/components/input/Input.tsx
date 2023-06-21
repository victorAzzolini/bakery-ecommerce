import React from "react";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type,
  disabled,
  required,
}) => {
  return (
    <div className="relative mb-4 w-full">
      <label className="text-md">{label}</label>
      <input
        type={type}
        disabled={disabled}
        placeholder=""
        required={required}
        className={`
          w-full
          rounded-sm 
          border
          bg-white
          p-3
          font-light
          outline-none
        `}
      />
    </div>
  );
};

export default Input;
