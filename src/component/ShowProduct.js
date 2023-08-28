import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./ShowProducts.css";
import { useNavigate } from "react-router-dom";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { productsStore } from "../store/store";
import NoData from "./NoData";
const ShowProduct = () => {
  const { state } = useLocation();
  console.log(state);

  const navigate = useNavigate();
  const handleViewProduct = (data,random) => {
    navigate("/viewProduct", { state: { data, random } });
  };

  const productList = productsStore((state) => state.productList);
  useState(() => {
    document.title = `${state} | Flipkart.com`;
  }, [state]);
  const getRandomNumber = () => {
    return Math.floor(Math.random() * 95) + 1;
  };
  return (
    <div className="ShowProducts">
      <div className="products">
        {productList[state] ? 
          productList[state].map((e) => {
            const random = getRandomNumber();
            return (
              <div
                key={e.id}
                className="product"
                onClick={() => handleViewProduct(e,random)}
              >
                <img src={e.image} alt={e.name} />
                <h1 style={{ textTransform: "capitalize" }}>{e.name}</h1>
                <div className="product-bottom">
                  <p id="rating">
                    {e.rating}
                    <StarBorderIcon style={{ height: "15px" }} />
                  </p>
                  <p>({e.stock})</p>
                  <img
                    src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
                    alt="flip"
                  />
                </div>
                <span> ₹ {parseInt(e.prize)}</span>
                <span className="strick">{parseInt(parseInt(e.prize) +(parseInt(e.prize) * random) / 100 )}</span>
                <span style={{ color: "#388e3c" }}>{random}% off</span>
              </div>
            );
          }
        ) : (
          <NoData />
        )}
      </div>
    </div>
  );
};

export default ShowProduct;
