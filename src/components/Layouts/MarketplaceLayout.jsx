import MarketplaceNavBar from "../Marketplace/MarketplaceNavbar";
import React from "react";

const Layout = ({ children, main }) => {
  return (
    <>
      <MarketplaceNavBar />
      <main className={main}>
        {children}
      </main>
    </>
  );
};

export default Layout;
