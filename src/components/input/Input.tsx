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
    <div className="w-full relative mb-4">
      <label className="text-lg">{label}</label>
      <input
        type={type}
        disabled={disabled}
        placeholder=""
        required={required}
        className={`
          w-full
          p-3 
          font-light
          bg-white
          border
          rounded-sm
          outline-none
        `}
      />
    </div>
  );
};

export default Input;
