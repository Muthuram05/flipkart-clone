import React, { useState } from "react";
import "./Login.css";
import { userStore,productsStore } from "../store/store";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = (props) => {
  const [phoneNo, setPhoneNo] = useState('');
  const isUser = userStore((state) => state.isUserPresent);
  const setloginWindow = productsStore((state) => state.setloginWindow)
  const setUser = userStore((state) => state.setUser)
  const handleLogin = () => {
    const data = isUser(phoneNo);
    if(data){
      toast("Login Sucessfully");
      setloginWindow();
      setUser(phoneNo);
      localStorage.setItem('currentUser',phoneNo)
    }
    else{
      toast("Invalid user");
    }
    
  };
  return (
    <div className="Login">
      <div className="left">
        <h1>Login</h1>
        <p>Get access to your Orders, Wishlist and Recommendations</p>
        <img
          src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png"
          alt="login"
        />
      </div>
      <div className="right">
        <input
          placeholder="Enter Phone Number"
          value={phoneNo}
          onChange={(e) => setPhoneNo(e.target.value)}
        />
        <p>
          By continuing, you agree to Flipkart's <span>Terms of Use</span> and{" "}
          <span>Privacy Policy.</span>
        </p>
        <button onClick={() => handleLogin()}>Request OTP</button>
        <div onClick={props.data}>New to Flipkart? Create an account</div>
      </div>
      
    </div>
  );
};

export default Login;
