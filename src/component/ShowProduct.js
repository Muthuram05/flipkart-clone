import React,{useState} from "react";
import { useLocation } from "react-router-dom";
import "./ShowProducts.css";
import { useNavigate } from "react-router-dom";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { productsStore } from "../store/store";
import Loader from "./Loader";
import NoData from "./NoData";

const ShowProduct = () => {
  const { state } = useLocation();
  const fetchData = productsStore((state)=> state.fetchData);
  fetchData(state)
  const navigate = useNavigate();
  const handleViewProduct = (data) =>{
    navigate('/viewProduct',{state : data} )
  }
  // const [isRandomTrue, setRandomValue] = useRandomBooleanHook();
  const item = productsStore((state)=>state.items);
  useState(()=>{
    document.title = `${state} | Flipkart.com`
  },[state])
  return (
    <div className="ShowProducts">
      <div className="products">
        {item ? item.map((e) => (
          <div key={e.id} className="product" onClick={() => handleViewProduct(e)}>
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
        )) : <NoData />}
      </div>
    </div>
  );
};

export default ShowProduct;
