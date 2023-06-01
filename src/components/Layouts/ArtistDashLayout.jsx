import ArtistDashNavBar from "../Artist/Dashboard/ArtistDashNavBar";
import React from "react";

const Layout = ({ children, main }) => {
  return (
    <>
      <ArtistDashNavBar />
      <main className={main}>
        {children}
      </main>
    </>
  );
};

export default Layout;
