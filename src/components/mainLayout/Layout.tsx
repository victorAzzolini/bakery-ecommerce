import React, { ReactNode } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import LoginModal from "../modal/loginModal/LoginModal";
import Modal from "../modal/modal/Modal";

interface LayoutProps {
  children: ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <React.Fragment>
      <Modal isOpen/>
      <Header />
      <main>{children}</main>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
