import React from "react";
import MarketplaceNavBar from "../Marketplace/MarketplaceNavbar";
import Footer from "../Footer/Footer";

const Layout = ({ children, main }) => {
  return (
    <>
      <MarketplaceNavBar />
      <main className={main}>
        {children}
      </main>
      <Footer/>
    </>
  );
};

export default Layout;
