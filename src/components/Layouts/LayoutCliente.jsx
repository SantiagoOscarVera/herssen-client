import NavbarHome from "../Navbar/NavbarHome";
import React from "react";

const Layout = ({ children, main }) => {
  return (
    <>
      <NavbarHome />
      <main className={main}>
        {children}
      </main>
    </>
  );
};

export default Layout;
