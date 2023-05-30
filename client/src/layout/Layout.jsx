// import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <main className="max-w-6xl mx-auto px-3 lg:px-4 py-4 lg:py-6 mt-7 lg:mt-10">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
