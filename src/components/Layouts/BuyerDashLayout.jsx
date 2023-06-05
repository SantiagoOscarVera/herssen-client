/* import BuyerDashNavBar from "../Buyer/Dashboard/BuyerDashNavBar"; */
import NavBar from "../Navbar/Navbar";
import React from "react";

const Layout = ({ children, main }) => {
  return (
    <>
      {/* <BuyerDashNavBar /> */}
      <NavBar/>
      <main className={main}>
        {children}
      </main>
    </>
  );
};

export default Layout;
