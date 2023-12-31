import React, { useCallback, useState } from "react";
import useLoginModal from "@/hooks/useLoginModal";
import useRegisterModal from "@/hooks/useRegisterModal";
import Modal from "../modal/Modal";
import Button from "@/components/button/Button";
import Input from "@/components/input/Input";

const LoginModal = () => {
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);

  const toogleToRegister = useCallback(() => {
    loginModal.onClose();
    registerModal.onOpen();
  }, [loginModal, registerModal]);

  const bodyContent = (
    <div className="flex flex-col">
      <Input id="Email" type="email" label="Email" />
      <Input id="Email" type="password" label="Senha" />
      <span
        className="
          trasition 
          text-sm 
          underline 
          underline-offset-2 
          duration-200 
          hover:cursor-pointer 
          hover:text-yellow-600
        "
      >
        Esqueceu sua senha?
      </span>
    </div>
  );

  const footerContent = (
    <div
      className="
        relative 
        mt-6 
        flex 
        w-full 
        flex-col 
        gap-3
      "
    >
      <Button type="submit" text="Continuar" />
      <span
        className="
          trasition 
          text-sm 
          underline 
          underline-offset-2 
          duration-200 
          hover:cursor-pointer 
          hover:text-yellow-600
        "
        onClick={toogleToRegister}
      >
        Não tem conta. Clique Aqui
      </span>
    </div>
  );

  return (
    <Modal
      isOpen={loginModal.isOpen}
      title="Login"
      onClose={loginModal.onClose}
      body={bodyContent}
      footer={footerContent}
      flexReverse={true}
    />
  );
};

export default LoginModal;
