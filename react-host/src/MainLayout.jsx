import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "home/Header";
import Footer from "home/Footer";

import "remixicon/fonts/remixicon.css";
import "./index.scss";

import PDPContent from "pdp/PDPContent";
import HomeContent from "home/HomeContent";
import CartContent from "cart/CartContent";

const MainLayout = () => (
  <Router>
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <Header />

      <div className="p-3">
        <Routes>
          <Route path="/" exact element={<HomeContent />} />
          <Route path="/product/:id" element={<PDPContent />} />
          <Route path="/cart" exact element={<CartContent />} />
        </Routes>
      </div>
      <Footer />
    </div>
  </Router>
);

export default MainLayout;
