import Footer from "../Footer/Footer";
import NavBar from "../Navbar/Navbar";
import React from "react";

const Layout = ({ children, main }) => {
  return (
    <>
      < NavBar/>
      <main className={main}>
        {children}
      </main>
      <Footer/>
    </>
  );
};

export default Layout;
