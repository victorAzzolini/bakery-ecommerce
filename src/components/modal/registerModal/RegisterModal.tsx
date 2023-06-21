import React, { useCallback, useState } from "react";
import useLoginModal from "@/hooks/useLoginModal";
import useRegisterModal from "@/hooks/useRegisterModal";
import Modal from "../modal/Modal";
import Button from "@/components/button/Button";
import Input from "@/components/input/Input";

const RegisterModal = () => {
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);

  const toogleToLogin = useCallback(() => {
    registerModal.onClose();
    loginModal.onOpen();
  }, [loginModal, registerModal]);

  const bodyContent = (
    <div>
      <Input id="name" type="text" label="Nome" />
      <Input id="name" type="text" label="Sobrenome" />
      <Input id="name" type="text" label="Endereço" />
      <Input id="name" type="text" label="nº" />
      <Input id="password" type="password" label="Senha" />
      <Input id="password" type="password" label="Confirmar senha" />
    </div>
  );

  const footerContent = (
    <div
      className="
        relative 
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
        onClick={toogleToLogin}
      >
        Já tem conta? Clique Aqui
      </span>
    </div>
  );

  return (
    <Modal
      isOpen={registerModal.isOpen}
      title="Register"
      onClose={registerModal.onClose}
      body={bodyContent}
      footer={footerContent}
      flexReverse={true}
    />
  );
};

export default RegisterModal;
