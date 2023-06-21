import React from "react";

interface ButtonProps {
  type: string | any;
  text: string;
}

const colorBody = "bg-white text-black hover:bg-black hover:text-white";
const colorModal = "bg-white text-black hover:bg-black hover:text-white";

const Button: React.FC<ButtonProps> = ({ type, text }) => {
  return (
    <button
      type={type}
      className={` 
        relative 
        w-full  
        rounded-sm 
        bg-yellow-600 
        py-2 
        tracking-widest 
        text-white duration-200 
        hover:bg-yellow-700 
        hover:text-white 
        md:py-3 
        md:text-lg 
        lg:text-2xl
      `}
    >
      {text}
    </button>
  );
};

export default Button;
