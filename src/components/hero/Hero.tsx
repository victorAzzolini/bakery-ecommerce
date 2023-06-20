import React from "react";
import { Open_Sans } from "next/font/google";
import Button from "../button/Button";

const openSans = Open_Sans({
  subsets: ["latin"],
});

const Hero = () => {
  return (
    <div className={`${openSans}`}>
      <div className="hero bg-cover bg-no-repeat bg-center h-screen w-[100vw] flex items-center justify-center">
        <div className=" text-white flex-col items-center justify-center">
          <p className="text-center text-xl mb-10">
            Sabores frescos pensados em você
          </p>
          <h1 className={`text-7xl text-center tracking-widest`}>
            TRADIÇÃO COM MODERNIDADE
          </h1>
          <p className="w-[50%] text-center text-xl mx-auto my-14">
            Nosso compromisso é preservar o sabor autêntico dos clássicos da
            panificação, ao mesmo tempo em que introduzimos toques modernos e
            ingredientes inovadores, criando uma experiência gastronômica única
          </p>
          <div className="flex items-center justify-center">
            <Button type="button" text="Explore Mais" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
