import React, { useEffect } from "react";
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
import { productsStore, userStore } from "./store/store";
import { ToastContainer } from "react-toastify";
import CheckOut from "./component/CheckOut";
import { allData } from "./data/Data";

const App = () => {
  const login = productsStore((state) => state.loginWindow);
  const setloginWindow = productsStore((state) => state.setloginWindow);
  const getUser = userStore((state) => state.getUser);
  const setUser = userStore((state) => state.setUser);
  const setAllCart = productsStore((state) => state.setAllCart);
  const currentUser = userStore((state) => state.currentUser);
  const setProduct = productsStore((state)=>state.setProduct)
  const productList = productsStore((state) => state.productList);

  useEffect(() => {
    getUser(localStorage.getItem("users") ?? []);
    setUser(localStorage.getItem("currentUser") ?? null);
    const currentUserInfo = localStorage.getItem("currentUser");
    if (!localStorage.getItem("product")) {
      localStorage.setItem("product", JSON.stringify(allData));
    } else { 
      setProduct(JSON.parse(localStorage.getItem('product')));  
    }
    if (!currentUserInfo) {
      return;
    }
    let cartDataValue = localStorage.getItem(currentUserInfo);
    if (cartDataValue) {
      const updatedCartData = JSON.parse(cartDataValue);

      setAllCart(updatedCartData);
    }
  }, [currentUser]);
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
          <Route path="checkout" element={<CheckOut />} />
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
