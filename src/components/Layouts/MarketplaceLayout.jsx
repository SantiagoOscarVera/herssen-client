import React from "react";
import NavBar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Layout = ({ children, main }) => {
  return (
    <>
      <NavBar />
      <main className={main}>
        {children}
      </main>
      <Footer/>
    </>
  );
};

export default Layout;
