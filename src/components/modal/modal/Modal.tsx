import React, { useCallback, useEffect, useState } from "react";
import useLoginModal from "@/hooks/useLoginModal";
import useRegisterModal from "@/hooks/useRegisterModal";
import { IoMdClose } from "react-icons/io";
import Input from "@/components/input/Input";

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel?: string;
  disabled?: boolean;
  secondaryAction?: () => {};
  secondaryActionLabel?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title, 
  body,
  footer,
  actionLabel,
  disabled,
}) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }

    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [disabled, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div className=" fixed z-50 inset-0 flex flex-row-reverse  bg-neutral-800/70">
        <div
          className={`
          translate 
          duration-300 
          ${showModal ? " translate-x-0" : "translate-x-full"}
          ${showModal ? " opacity-100" : "opacity-0"}
          `}
        >
          <div className="translate relative w-80 h-[100vh] bg-white flex flex-col ">
            <div className="flex items-center p-4 relative border-b-[1px] text-xl">
                Login
            </div>
            <button
              className="p-1 border-0 hover:text-amber-400 transition absolute right-2 top-3"
              onClick={handleClose}
            >
              <IoMdClose size={26} />
            </button>
            <div className="relative p-6 flex flex-col">
              <Input id={"email"} label="Email" type="email" />
              <Input id={"email"} label="Password" type="password" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
