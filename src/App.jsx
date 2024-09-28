

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Home/Homepage";
import ContactPage from "./Pages/Contact/ContactPage";
import CartPage from "./Pages/CartPage/Cart";
import CheckoutPage from "./Pages/CheckoutPage/Checkout";
import PaymentPage from "./Pages/PaymentPage/Payment";
import { useSelector } from "react-redux";
import VegPage from "./Pages/VegPicklesPage/VegPage";
import FavPage from "./Pages/FavouritePage/Favourite";
import NonVegPage from "./Pages/NonVegPicklesPage/NonvegPage";
import AboutUs from "./Pages/Aboutus/About";

function App() {
useSelector((e) => console.log(e, "root"));
  return (
    <Router>
      <Routes>
        <Route path="/FavPage" element={<FavPage />} />
        <Route path="/CartPage" element={<CartPage />} />
        <Route path="/ContactPage" element={<ContactPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/CheckoutPage" element={<CheckoutPage />} />
        <Route path="/PaymentPage" element={<PaymentPage />} />
        <Route path="/VegPage" element={<VegPage />} />
        <Route path="/NonVegPage" element={<NonVegPage />} />
        <Route path="/AboutUs" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
