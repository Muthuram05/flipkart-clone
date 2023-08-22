import React from "react";
import { productsStore } from "../store/store";
import "./Cart.css";
const Cart = () => {
  const cartData = productsStore((state) => state.cartData);
  console.log(cartData.length);
  return (
    <div className="Cart">
      <table>
        <tr>
          <td>Image</td>
          <td>Product Name</td>
          <td>Prize</td>
          <td>Rating</td>
        </tr>
        {cartData.map((e) => (
          <tr key={e.id}>
            <td><img src={e.image} alt={e.name} /></td>
            <td ><h3>{e.name}</h3></td>
            <td>{e.prize}</td>
            <td>{e.rating}</td>
          </tr>
        ))}
      </table>

      {/* {cartData > 0 ? null : <p>No Items in Cart</p>} */}
    </div>
  );
};

export default Cart;
