import React from "react";
import Nav from "./component/Nav";
import Footer from "./component/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from "./component/NoPage";
import Contact from "./component/Contact";
import Home from "./component/Home";
import ShowProduct from "./component/ShowProduct";
import ViewProduct from "./component/ViewProduct";
import Cart from "./component/Cart";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="products" element={<ShowProduct />} />
          <Route path="viewProduct" element={<ViewProduct />} />
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
