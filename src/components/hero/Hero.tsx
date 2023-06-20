import React from "react";
import { Open_Sans } from "next/font/google";
import Button from "../button/Button";

const openSans = Open_Sans({
  subsets: ["latin"],
});

const Hero = () => {
  return (
    <div className={`${openSans.className}`}>
      <div className="hero bg-cover bg-no-repeat bg-center h-screen w-[100vw] flex items-center justify-center">
        <div className=" text-white flex-col items-center justify-center">
          <p className="text-center text-md mb-5 md:text-lg">
            Sabores frescos pensados em você
          </p>
          <h1 className={`text-4xl mb-5 text-center md:text-5xl`}>
            TRADIÇÃO COM MODERNIDADE
          </h1>
          <p className="hidden md:block w-[60%] text-center text-lg mx-auto my-1">
            Nosso compromisso é preservar o sabor autêntico dos clássicos da
            panificação, ao mesmo tempo em que introduzimos toques modernos 
          </p>
          <div className="flex items-center justify-center mt-10">
            <Button type="button" text="PRODUTOS Teste" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
