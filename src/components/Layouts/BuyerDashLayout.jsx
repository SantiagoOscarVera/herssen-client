/* import BuyerDashNavBar from "../Buyer/Dashboard/BuyerDashNavBar"; */
import MarketplaceNavBar from "../Marketplace/MarketplaceNavbar";
import React from "react";

const Layout = ({ children, main }) => {
  return (
    <>
      {/* <BuyerDashNavBar /> */}
      <MarketplaceNavBar/>
      <main className={main}>
        {children}
      </main>
    </>
  );
};

export default Layout;
