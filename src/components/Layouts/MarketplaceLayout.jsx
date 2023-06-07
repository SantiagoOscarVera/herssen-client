import React from "react";
import NavBar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Layout = ({ children, main }) => {
  return (
    <>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <NavBar />
        <main className={main} style={{ flex: '1' }}>
          {children}
        </main>
        <Footer/>
      </div>
    </>
  );
};

export default Layout;
