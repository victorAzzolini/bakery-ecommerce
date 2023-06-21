import React from "react";

import useMenuModal from "@/hooks/useMenuModal";
import Link from "next/link";
import Modal from "../modal/Modal";
import { BsBook, BsSearch, BsShop } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";

const MenuModal = () => {
  const menuModal = useMenuModal();

  const bodyContent = (
    <div>
      <Link href="/" className="text-lg">
        <div className="flex w-full items-center gap-3 border-b p-4 hover:bg-slate-200 transition duration-200">
          <BsShop />
          Produtos
        </div>
      </Link>
      <Link href="/" className="text-lg">
        <div className="flex w-full items-center gap-3 border-b p-4 hover:bg-slate-200 transition duration-200 ">
          <BsBook />
          Blog
        </div>
      </Link>
      <Link href="/" className="text-lg">
        <div className="flex w-full items-center gap-3 border-b p-4 hover:bg-slate-200 transition duration-200">
          <BsSearch />
          Buscar
        </div>
      </Link>
      <Link href="/" className="text-lg">
        <div className="flex w-full items-center gap-3 border-b p-4 hover:bg-slate-200 transition duration-200">
          <AiOutlineUser />
          Login
        </div>
      </Link>
    </div>
  );

  return (
    <Modal
      title="Menu"
      body={bodyContent}
      isOpen={menuModal.isOpen}
      onClose={menuModal.onClose}
      flexReverse={false}
    />
  );
};

export default MenuModal;
