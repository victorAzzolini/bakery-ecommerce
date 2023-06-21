import React, { useEffect, useState } from "react";
import {
  AiOutlineUser,
  AiOutlineShoppingCart,
  AiOutlineSearch,
  AiOutlineMenu,
} from "react-icons/ai";
import { Oswald } from "next/font/google";

import useLoginModal from "@/hooks/useLoginModal";
import useMenuModal from "@/hooks/useMenuModal"

const oswald = Oswald({
  subsets: ["latin"],
});

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const loginModal = useLoginModal();
  const menuModal = useMenuModal();

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
      className={`
        z-10 
        flex 
        justify-center 
        ${visible ? "fixed w-[100vw]" : ""}
      `}
    >
      <div
        className={`
          absolute 
          flex 
          w-[100vw] 
          items-center 
          justify-around  
          rounded-sm 
          bg-amber-50 
          py-3 
          text-3xl 
          text-gray-700 
          ${visible ? "mt-0 lg:w-[100vw]" : "mt-8 lg:w-[60vw]"}
        `}
      >
        <div
          className="
            text-2xl 
            duration-200 
            hover:scale-105  
          hover:text-amber-500 
            hover:cursor-pointer
            md:text-3xl 
            lg:hidden
          "
          onClick={menuModal.onOpen}
        >
          <AiOutlineMenu />
        </div>
        <div
          className={`
            ${oswald.className} 
            ml-8 
            px-6 
            text-4xl 
            font-extrabold 
            md:ml-24 
            md:px-36 
            lg:ml-0 
            lg:px-0
          `}
        >
          <a href="./">BAKERY</a>
        </div>
        <nav
          className="
            hidden 
            px-40 
            text-xl 
            font-medium 
            lg:block
          "
        >
          <ul
            className="
              flex items-center 
              justify-around 
              gap-4
            "
          >
            <li className="duration-200 hover:text-amber-600">
              <a href="./">Products</a>
            </li>
            <li className="duration-200  hover:text-amber-600">
              <a href="./">Blog</a>
            </li>
          </ul>
        </nav>
        <nav>
          <ul
            className="
              flex 
              items-center 
              justify-around 
              lg:gap-1
            "
          >
            <li
              className="
                text-3xl 
                duration-200 
                hover:scale-105 
                hover:text-amber-600 
              "
            >
              <AiOutlineSearch />
            </li>
            <li
              className=" 
                text-3xl 
                duration-200  
                hover:scale-105 
                hover:cursor-pointer 
                hover:text-amber-600 
                md:block 
              "
              onClick={loginModal.onOpen}
            >
              <AiOutlineUser />
            </li>
            <li
              className="
                flex 
                gap-2 
                text-3xl 
                duration-200 
                hover:scale-105 
                hover:text-amber-600
              "
            >
              <span
                className="
                  absolute 
                  ml-5 
                  flex 
                  h-4 
                  w-4 
                  items-center 
                  justify-center 
                  rounded-full 
                  bg-black 
                  p-2 
                  text-sm  
                  text-white 
                "
              >
                1
              </span>
              <AiOutlineShoppingCart />
              <div className="hidden text-lg md:block">R$0,00</div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
