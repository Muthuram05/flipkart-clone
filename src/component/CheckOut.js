import React, { useEffect, useRef, useState } from "react";
import "./CheckOut.css";
import { productsStore, userStore } from "../store/store";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
const CheckOut = () => {
  const currentUser = userStore((state) => state.currentUser);
  const productList = productsStore((state) => state.productList);
  const cartData = productsStore((state) => state.cartData);
  const number = useRef();
  const mmyy = useRef();
  const cvv = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  const setEmptyCart = productsStore((state) => state.setEmptyCart);
  let state = location.state.data;
  const [prize, setprize] = useState(0);
  const handlePay = () => {
    if (number.current.value && mmyy.current.value && cvv.current.value) {
      try {
        number.current.value = "";
        mmyy.current.value = "";
        cvv.current.value = "";
        state.map((e) => handleStockReduction(e.id));
       
        const updatedCartData = cartData.filter((cartItem) =>
          state.every((e) => e.id !== cartItem.id)
        );

        // Update the cart data in the store
        productsStore.setState({
          cartData: updatedCartData,
        });
        localStorage.setItem(currentUser,JSON.stringify(updatedCartData))
        if (location.state.isCart) {
          setEmptyCart();
          localStorage.removeItem(currentUser);
        }
        navigate("/");
        toast("Ordered Sucessfully");
      } catch (error) {
        navigate("/");
      }
    }
  };
  useEffect(() => {
    document.title = "CheckOut | Flipkart";
  });
  useEffect(() => {
    let val = 0;
    state.map((e) => {
      val += parseInt(e.prize);
      return setprize(val);
    });
  }, []);
  const handleStockReduction = (productId) => {
    for (const category in productList) {
      const products = productList[category];
      const productIndex = products.findIndex(
        (product) => product.id === productId
      );

      if (productIndex !== -1 && products[productIndex].stock > 0) {
        const updatedProducts = [...products];
        updatedProducts[productIndex].stock -= 1;

        // Update the state using the set function from the store
        productsStore.setState((state) => ({
          productList: {
            ...state.productList,
            [category]: updatedProducts,
          },
        }));

        break;
      } else {
        throw toast("out of stock");
      }
    }
    localStorage.setItem("product", JSON.stringify(productList));
  };
  return (
    <div className="checkout">
      <div className="left">
        <div className="checkout-card" style={{ display: "flex" }}>
          <span className="number">1</span>
          <div className="card">
            <p className="names">Login</p>
            <h2>{currentUser}</h2>
          </div>
        </div>
        <div className="checkout-card" style={{ display: "flex" }}>
          <span className="number">2</span>
          <div className="card">
            <p className="names">Address</p>
            <h2>21 A, Salai Street Tirunelveli - Jn 627001</h2>
          </div>
        </div>
        <div className="checkout-card" style={{ display: "flex" }}>
          <span className="number">3</span>
          <div className="card">
            <p className="names">Order Summary</p>
            <h2>
              {state.map((e) => (
                <>
                  {e.name}
                  <br />
                </>
              ))}
            </h2>
          </div>
        </div>
        <div className="checkout-card" style={{ display: "flex" }}>
          <span className="number">3</span>
          <div className="card">
            <p>Credit/Debit/ATM Card</p>
            <input placeholder="Enter Card Number" ref={number} />
            <div className="custom-flex">
              <input placeholder="MM/YY" ref={mmyy} />
              <input placeholder="CVV" ref={cvv} />
            </div>

            <button onClick={handlePay}>Pay {}</button>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="checkout-card">
          <h2 className="names">PRICE DETAILS</h2>
          <div>
            <h3 style={{ display: "flex", justifyContent: "space-between" }}>
              Prize <span>{prize}</span>
            </h3>
            <h3
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "10px",
              }}
            >
              Delivery Charge <span style={{ color: "green" }}>free</span>
            </h3>
          </div>

          <h4>
            Amount Payable<span style={{float:'right'}}>{prize}</span>
          </h4>
        </div>
        <div className="safe">
          <img
            src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/shield_5f9216.png"
            alt="safe"
          />
          <p>
            Safe and Secure Payments. Easy returns. 100% Authentic products.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
