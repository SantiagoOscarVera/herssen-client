import Navbar from "../Navbar/Navbar";
import React from "react";

const Layout = ({ children, main }) => {
  return (
    <>
      <Navbar />
      <main className={main}>
        {children}
      </main>
    </>
  );
};

export default Layout;
