import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./ViewProducts.css";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { productsStore, userStore } from "../store/store";
import { toast } from "react-toastify";
const ViewProduct = () => {
  const  location  = useLocation();
  let state = location.state.data;
  let random = location.state.random;
  const navigate = useNavigate();
  const cartData = productsStore((state)=>state.cartdata)
  const isLogin = userStore((state) => state.currentUser);
  const setCart = productsStore((state) => state.setCart);
  const handleCart = (e) => {
    const currentUserInfo = localStorage.getItem("currentUser");

    if (!currentUserInfo) {
      return;
    }

    let cartData = localStorage.getItem(currentUserInfo);
    let updatedCartData = [];

    if (cartData) {
      updatedCartData = JSON.parse(cartData); // Parse existing cart data
      if (updatedCartData.some((item) => item.id === e.id)) {
        return; // Check if item is already in the cart
      }
    }

    updatedCartData.push(e);
    setCart(updatedCartData);
    localStorage.setItem(currentUserInfo, JSON.stringify(updatedCartData)); // Update cart data in localStorage
    toast("Added to cart");
  };
  const handleBuy = (data) => {
    navigate("/checkOut",{state:{data : [data],name: location.state.name}});
  };
  return (
    <>
      {state ? (
        <div className="ViewProduct">
          <div className="left">
            <div className="alter-image">
              <div>
                <img src={state.image} alt={state.name} />
              </div>
              <div>
                <img src={state.image} alt={state.name} />
              </div>
              <div>
                <img src={state.image} alt={state.name} />
              </div>
              <div>
                <img src={state.image} alt={state.name} />
              </div>
            </div>
            <div className="product">
              <img src={state.image} alt={state.name} />

              <div className="custom-flex">
               
                <button
                  className={`cart custom-flex ${isLogin ? null : "disable"}`}
                  onClick={() => handleCart(state)}
                >
                  <ShoppingCartIcon />
                  Add to Cart
                </button>
                <button
                  className={`buynow custom-flex ${isLogin ? null : "disable"} ${state.stock ? null : "disable"}`}
                  onClick={() => handleBuy(state)}
                >
                  <FlashOnIcon />
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="name">{state.name}</div>
            <div className="rating">
              <span>
                {state.rating}
                <StarBorderIcon className="star"/>
              </span>
              <p>{state.stock ? `Only ${state.stock} left` : "Out of stock"}</p>
            </div>
            <div className="prize">
              <p>{state.prize}</p>
              <div className="discount">
                <span style={{ textDecoration: "line-through" }}>
                  {parseInt(state.prize) +(parseInt(state.prize) * random) / 100}{" "}
                </span>{" "}
                <span style={{ color: "#388e3c" }}>{random}% off</span>
              </div>
            </div>

            <div className="offers">
              <h3>Available offers</h3>
              <li>
                <img src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" alt="" />
                Bank Offer10% off on Federal Bank Credit Card Txns, up to ₹1,500
                on orders of ₹5,000 and aboveT&C
              </li>
              <li>
                <img src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" alt="" />
                Bank Offer10% instant discount on PNB Credit Card, up to ₹2000,
                on orders of ₹5,000 and aboveT&C
              </li>
              <li>
                <img src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" alt="" />
                Bank Offer10% off on Federal Bank Debit Card Txns, up to ₹1,250
                on orders of ₹5,000 and aboveT&C
              </li>
              <li>
                <img src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" alt="" />
                Extra ₹500 Off on Bikes & Scooters on purchase of ₹30,000 or moreT&C
              </li>
            </div>
          </div>
        </div>
      ) : (
        <div className="custom-flex">Invalid Route</div>
      )}
    </>
  );
};

export default ViewProduct;
