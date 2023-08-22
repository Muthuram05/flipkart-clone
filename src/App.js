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
import Auth from "./component/Auth";
import { productsStore } from "./store/store";
import { ToastContainer } from "react-toastify";
const App = () => {
  const login = productsStore((state) => state.loginWindow);
  const setloginWindow = productsStore((state) => state.setloginWindow);

  return (
    <>
      <BrowserRouter>
        <Nav />
        {login ? (
          <div className="login">
            <div className="shadow">
              <Auth />
            </div>
            <i onClick={setloginWindow} className="fa-solid fa-xmark close"></i>
          </div>
        ) : null}
        <Routes>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="products" element={<ShowProduct />} />
          <Route path="viewProduct" element={<ViewProduct />} />
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
        <Footer />
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </BrowserRouter>
    </>
  );
};

export default App;
