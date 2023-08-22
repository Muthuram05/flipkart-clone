import React from "react";
import { useLocation } from "react-router-dom";
import "./ViewProducts.css";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { productsStore, userStore } from "../store/store";
import { toast } from "react-toastify";
const ViewProduct = () => {
  const { state } = useLocation();
  const isLogin = userStore((state) => state.currentUser);
  const setCart = productsStore((state) => state.setCart)
  const handleCart = (e) =>{
    setCart(e);
    toast("Added to cart");
  }
  return (
    <>
    {state ? 
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
        <div className="custom-flex" style={{ flexDirection: "column" }}>
          <img src={state.image} alt={state.name} />
          {isLogin ? (
            <div className="custom-flex">
              <button className="cart custom-flex" onClick={() => handleCart(state)}>
                <ShoppingCartIcon />
                Add to Cart
              </button>
              <button className="buynow custom-flex">
                <FlashOnIcon />
                Buy Now
              </button>
            </div>
          ) : (
            <div style={{color:"red"}}>Login First to add product to cart </div>
          )}
        </div>
      </div>
      <div className="right">
        <div className="name">{state.name}</div>
        <div className="rating">
          <span>
            {state.rating}
            <StarBorderIcon fontSize="18"/>{" "}
          </span>
          <p>{state.stock}</p>
        </div>
        <div className="prize">
          <p>{state.prize}</p>
          <div className="discount">
            <span style={{ textDecoration: "line-through" }}>
              {state.prize * 2}{" "}
            </span>{" "}
            <span style={{color:'#388e3c'}}>50%off</span>
          </div>
        </div>

        <div className="offers">
          <h3>Available offers</h3>
          <div>
            Bank Offer10% off on Federal Bank Credit Card Txns, up to ₹1,500 on
            orders of ₹5,000 and aboveT&C
          </div>
          <div>
            Bank Offer10% instant discount on PNB Credit Card, up to ₹2000, on
            orders of ₹5,000 and aboveT&C
          </div>
          <div>
            Bank Offer10% off on Federal Bank Debit Card Txns, up to ₹1,250 on
            orders of ₹5,000 and aboveT&C
          </div>
        </div>
      </div>
    </div> : <div className="custom-flex">Invalid Route</div>}
    </>
  );
};

export default ViewProduct;
