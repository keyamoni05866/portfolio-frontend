import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Component/Shared/Navbar";
import Footer from "../Component/Shared/Footer";

const Main = () => {
  return (
    <>
      <Navbar></Navbar>

      <Outlet></Outlet>

      <Footer></Footer>
    </>
  );
};

export default Main;
