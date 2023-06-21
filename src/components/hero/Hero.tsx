import React from "react";
import { Open_Sans } from "next/font/google";
import Button from "../button/Button";

const openSans = Open_Sans({
  subsets: ["latin"],
});

const Hero = () => {
  return (
    <div className={`${openSans.className}`}>
      <div
        className="
          hero 
          flex 
          h-screen 
          w-[100vw] 
          items-center 
          justify-center 
          bg-cover 
          bg-center 
          bg-no-repeat
        "
      >
        <div
          className=" 
            flex-col 
            items-center 
            justify-center 
            text-white
          "
        >
          <p
            className="
              text-md 
              mb-5 
              text-center 
              md:text-lg
            "
          >
            Sabores frescos pensados em você
          </p>
          <h1
            className={`
              mb-5 
              text-center 
              text-4xl 
              md:text-5xl
            `}
          >
            TRADIÇÃO COM MODERNIDADE
          </h1>
          <p
            className="
              mx-auto 
              my-1 
              hidden 
              w-[60%] 
              text-center
              text-lg 
              md:block
            "
          >
            Nosso compromisso é preservar o sabor autêntico dos clássicos da
            panificação, ao mesmo tempo em que introduzimos toques modernos
          </p>
          <div
            className="
              m-auto 
              mt-10 
              flex 
              max-w-[40%] 
              items-center 
              justify-center 
              md:max-w-[25%]
            "
          >
            <Button type="button" text="Produtos" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
