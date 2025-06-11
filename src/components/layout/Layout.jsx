import React from "react";
import "./layout.css";
import Header from "./header/Header";
import Footer from "./footer/Footer";

const Layout = ({ children }) => {
  return (
    <div id="main">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
