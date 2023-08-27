import React, { useEffect, useState } from "react";
import { productsStore, userStore } from "../store/store";
import "./Cart.css";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const navigate = useNavigate();
  const cartData = productsStore((state) => state.cartData);
  const currentUser = userStore((state) => state.currentUser);
  const setCart = productsStore((state) => state.setCart);
  useEffect(() => {
    document.title = "Shopping Cart | Flipkart.com";
  }, []);
  const handleSubmit = (data) => {
    navigate("/checkout", { state: {data : data,isCart : true } });
  };
  const removeItem = (e) => {
    let cartData = JSON.parse(localStorage.getItem(currentUser));
    const itemExists = cartData.filter((item) => item.id !== e.id);
    localStorage.setItem(currentUser, JSON.stringify(itemExists));
    setCart(itemExists);
    if (cartData.includes(e)) {
      console.log("present");
    }
  };
  return (
    <div className="Cart">
      {cartData.map((e) => (
        <div key={e.id} className="cart-product">
          <div className="cartProduct-image">
            <img src={e.image} alt={e.name} />
          </div>
          <div className="cartProduct-name">
            <h3>{e.name}</h3>
          </div>
          <div className="cartProduct-prize">
            <p>{e.prize}</p>
          </div>
          <div className="cartProduct-stock">
            <p>Avl Stock- {e.stock}</p>
          </div>
          <div className="custom-flex remove">
            <p onClick={() => removeItem(e)}>Remove</p>
          </div>
        </div>
      ))}
      {currentUser && (
        <>
          <div className="order">
            <button onClick={() => handleSubmit(cartData)}>Place Order</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
