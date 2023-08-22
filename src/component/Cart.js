import React, { useEffect,useState } from "react";
import { productsStore, userStore } from "../store/store";
import "./Cart.css";
const Cart = () => {
  useEffect(() => {
    document.title = "Shopping Cart | Flipkart.com";
  }, []);
  const currentUser = userStore((state) => state.currentUser)
  const cartData = productsStore((state) => state.cartData);
  // const fetchCartData = () => {
  //   console.log(localStorage.getItem(currentUser));

  // }
  const [value,setValue] = useState(1);
  const Add = (count) =>{
    console.log(count)
    if(count > value){
      setValue((pre)=>pre + 1)
    }
    
  }
  const Sub = (count) =>{

  }
  return (
    <div className="Cart">
      {cartData.map((e) => (
        <div key={e.id} className="cart-product">
          <div className="cartProduct-image"><img src={e.image} alt={e.name} /></div>
          <div className="cartProduct-name"><h3>{e.name}</h3></div>
          <div className="cartProduct-prize"><p>{e.prize}</p></div>
          <div className="cartProduct-stock"><p>{e.stock}</p></div>     
          <div className="custom-flex ">
            <p>Remove</p>
            <div>
              <button onClick={()=> Sub(e.stock)}>-</button>
              <button >{value}</button>
              <button onClick={()=> Add(e.stock)}>+</button>
            </div>  
          </div>   
        </div>
      ))}
      <div className="order">
        <button>Place Order</button>
      </div>
    </div>
  );
};

export default Cart;
