import React from 'react'

interface ButtonProps {
    type: string | any
    text: string
}

const Button: React.FC<ButtonProps> = ({type, text}) => {
  return (
    <button type={type} className={` bg-white text-black  tracking-widest py-3 px-8 duration-200 rounded-sm hover:bg-black hover:text-white md:text-lg md:py-4 md:px-10`} >
        {text}
    </button>
  )
}

export default Button