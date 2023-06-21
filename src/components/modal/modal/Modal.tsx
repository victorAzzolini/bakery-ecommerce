import React, { useCallback, useEffect, useState } from "react";
import useLoginModal from "@/hooks/useLoginModal";
import useRegisterModal from "@/hooks/useRegisterModal";
import { IoMdClose } from "react-icons/io";
import Input from "@/components/input/Input";
import Button from "@/components/button/Button";

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  flexReverse: boolean;
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
  flexReverse,
  actionLabel,
  disabled,
}) => {
  const [showModal, setShowModal] = useState(isOpen);

  if (flexReverse) {
  }

  useEffect(() => {
    setShowModal(isOpen);

    isOpen
      ? document.body.classList.add("overflow-hidden")
      : document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }

    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 200);
  }, [disabled, onClose]);

  const handleBackgroundClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (event.target === event.currentTarget) {
        handleClose();
      }
    },
    [handleClose]
  );

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div
        className={` 
          fixed 
          inset-0 
          z-50 
          flex 
          ${flexReverse ? "flex-row-reverse" : "flex-row"}  
          overflow-hidden 
          bg-neutral-800/70 
        `}
        onClick={handleBackgroundClick}
      >
        <div
          className={`
            translate 
            duration-300 
            ${
              showModal
                ? "translate-x-0"
                : `${flexReverse ? "translate-x-full" : "translate-x-[-400px]"}`
            }
          `}
        >
          <div
            className="
              translate 
              relative 
              flex 
              h-[100vh] 
              w-80 
              flex-col 
              overflow-auto 
              bg-white
            "
          >
            <div
              className="
                relative 
                flex 
                items-center 
                border-b-[1px] 
                p-4 
                text-xl
              "
            >
              {title}
            </div>
            <button
              className="
                absolute 
                right-2 
                top-3 
                border-0 
                p-1 
                transition 
                hover:text-amber-400
              "
              onClick={handleClose}
            >
              <IoMdClose size={26} />
            </button>
            <div
              className={`
                relative 
                flex 
                flex-col 
                ${flexReverse?"p-6 pb-2" : "p-0"}
              `}
            >
              {body}
            </div>
            <div
              className="
                relative 
                flex 
                items-center 
                justify-center 
                p-6 
                pt-0
              "
            >
              {footer}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
