import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";


export default function Layout() {
  return (
    <div>
      <ScrollToTop />

      <Nav />
     
      <Outlet />

      <Footer />
    </div>
  );
}
