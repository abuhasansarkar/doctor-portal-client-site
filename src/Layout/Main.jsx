import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Share/Footer/Footer";
import Header from "../Share/Header/Header";

const Main = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default Main;
