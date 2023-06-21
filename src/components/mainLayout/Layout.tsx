import React, { ReactNode } from "react";

import Header from "../header/Header";
import Footer from "../footer/Footer";
import LoginModal from "../modal/loginModal/LoginModal";
import RegisterModal from "../modal/registerModal/RegisterModal";
import MenuModal from "../modal/menuModal/MenuModal";

interface LayoutProps {
  children: ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <React.Fragment>
      <LoginModal />
      <RegisterModal />
      <MenuModal />
      <Header />
      <main>{children}</main>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
