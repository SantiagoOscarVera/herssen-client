import BuyerDashNavBar from "../Buyer/Dashboard/BuyerDashNavBar";
import React from "react";

const Layout = ({ children, main }) => {
  return (
    <>
      <BuyerDashNavBar />
      <main className={main}>
        {children}
      </main>
    </>
  );
};

export default Layout;
