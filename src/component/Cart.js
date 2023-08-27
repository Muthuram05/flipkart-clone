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
    navigate("/checkout", { state: { data: data, isCart: true } });
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
      {currentUser ? (
        <>
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
          {cartData.length ? (
            <div className="order">
              <button onClick={() => handleSubmit(cartData)}>
                Place Order
              </button>
            </div>
          ) : (
            <div className="empty-cart">
              <img
                src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
                alt="empty"
              />
              <h3>Your cart is empty!</h3>
              <p>Explore our wide selection and find something you like</p>
            </div>
          )}{" "}
        </>
      ) : (
        <div className="cart-notlogin">
          <img
            src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
            alt="empty"
          />
          <h3>Missing Cart items?</h3>
          <p>Login to see the items you added previously</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
