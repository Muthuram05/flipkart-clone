import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./ShowProducts.css";
import { useNavigate } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import useRandomBooleanHook from "./useRandomBooleanHook";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { productsStore } from "../store/store";
import Loader from "./Loader";

const ShowProduct = () => {
  const { state } = useLocation();
  const fetchData = productsStore((state)=> state.fetchData);
  fetchData(state)
  const [color, setColor] = useState(true);
  const handleClick = () => {
    setColor(!color);
  };
  const navigate = useNavigate();
  const handleViewProduct = (data) =>{
    navigate('/viewProduct',{state : data} )
  }
  // const [isRandomTrue, setRandomValue] = useRandomBooleanHook();
  const item = productsStore((state)=>state.items)
  return (
    <div className="ShowProducts">
      <div className="filters">
        <input />
        <div>
          <p>Reviews</p>
          <form >
              <input type="radio" />
              <input type="radio"/>
              <input type="radio"/>
          </form>
        </div>
      </div>
      <div className="products">
        {item ? item.map((e) => (
          <div key={e.id} className="product" onClick={() => handleViewProduct(e)}>
            <div
              style={{ width: "100%", display: "flex", justifyContent: "end" }}
              onClick={handleClick}
            >
              <FavoriteIcon style={{ color: `${color ? "#c2c2c2" : "red"}` }} />
            </div>
            <img src={e.image} alt={e.name} />
            <h1 style={{ textTransform: "capitalize" }}>{e.name}</h1>
            <div className="product-bottom">
              <p id="rating">{e.rating}<StarBorderIcon style={{height:'15px'}}/></p>
              <p>({e.stock })</p>
              <img
                src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
                alt="flip"             
              />
            </div>
            <span> ₹ {parseInt(e.prize)  }</span>
            <span className="strick">{parseInt(e.prize) * 2 }</span>
            <span style={{color: '#388e3c'}}>50% off</span>
          </div>
        )) : <Loader />}
      </div>
    </div>
  );
};

export default ShowProduct;
