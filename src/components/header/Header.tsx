import React, { useEffect, useState } from "react";
import {
  AiOutlineUser,
  AiOutlineShoppingCart,
  AiOutlineSearch,
  AiOutlineMenu,
} from "react-icons/ai";
import { Oswald } from "next/font/google";

const oswald = Oswald({
  subsets: ["latin"],
});

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollPos) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    if (currentScrollPos === 0) {
      setVisible(false);
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <header
      className={`flex justify-center ${
        visible ? "fixed w-[100vw]" : ""
      }`}
    >
      <div
        className={`flex text-3xl absolute bg-amber-50 py-3 z-10 w-[100vw] rounded-sm  justify-around items-center text-gray-700 ${visible ? "lg:w-[100vw] mt-0" : "mt-8 lg:w-[60vw]"} `}
      >
        <div className="text-2xl md:text-3xl duration-200  hover:text-amber-500 hover:scale-105 lg:hidden">
          <AiOutlineMenu />
        </div>
        <div
          className={`${oswald.className} px-6 ml-8 text-4xl font-extrabold md:px-36 md:ml-24 lg:px-0 lg:ml-0`}
        >
          <a href="./">BAKERY</a>
        </div>
        <nav className="hidden lg:block px-40 text-xl font-medium">
          <ul className="flex gap-4 justify-around items-center">
            <li className="duration-200 hover:text-amber-600">
              <a href="./">Products</a>
            </li>
            <li className="duration-200  hover:text-amber-600">
              <a href="./">Blog</a>
            </li>
          </ul>
        </nav>
        <nav>
          <ul className="flex justify-around items-center lg:gap-1">
            <li className="text-3xl duration-200 hover:text-amber-600 hover:scale-105 ">
              <AiOutlineSearch />
            </li>
            <li className="hidden text-3xl duration-200  hover:text-amber-600 hover:scale-105 md:block ">
              <AiOutlineUser />
            </li>
            <li className="text-3xl duration-200 hover:text-amber-600 hover:scale-105 flex gap-2">
              <span className="absolute w-4 h-4 bg-black rounded-full text-white flex items-center justify-center p-2 ml-5  text-sm ">
                1
              </span>
              <AiOutlineShoppingCart />
              <div className="hidden md:block text-lg">R$0,00</div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
