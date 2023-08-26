import React, { useEffect, useRef, useState } from "react";
import "./CheckOut.css";
import { userStore } from "../store/store";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
const CheckOut = () => {
  const currentUser = userStore((state) => state.currentUser);
  const number = useRef();
  const mmyy = useRef();
  const cvv = useRef();
  const navigate = useNavigate();
  const { state } = useLocation();
  const [prize, setprize] = useState(0);
  console.log(state);
  const handlePay = () => {
    if (number.current.value && mmyy.current.value && cvv.current.value) {
      toast("Ordered Sucessfully");
      number.current.value = "";
      mmyy.current.value = "";
      cvv.current.value = "";
      navigate("/");
    }
  };
  useEffect(() => {
    let val = 0;
    state.map((e) => {
      val += parseInt(e.prize);
      return setprize(val);
    });
  }, []);

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
            Amount Payable<span>{prize}</span>
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
