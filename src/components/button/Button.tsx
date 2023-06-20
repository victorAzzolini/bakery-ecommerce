import React from 'react'

interface ButtonProps {
    type: string | any
    text: string
}

const Button: React.FC<ButtonProps> = ({type, text}) => {
  return (
    <button type={type} className=' bg-white text-black text-xl py-2 px-4' >
        {text}
    </button>
  )
}

export default Button