import NavBar from "../Navbar/Navbar";
import React from "react";

const Layout = ({ children, main }) => {
  return (
    <>
      < NavBar/>
      <main className={main}>
        {children}
      </main>
    </>
  );
};

export default Layout;
