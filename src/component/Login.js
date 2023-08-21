import React from "react";
import "./Login.css"
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="Login">
      <div className="left">
        <h1>Login</h1>
        <p>Get access to your Orders, Wishlist and Recommendations</p>
        <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png" alt="login"/>
      </div>
      <div className="right">
        <input />
        <br />
        <br />
        <p>By continuing, you agree to Flipkart's <span>Terms of Use</span> and <span>Privacy Policy.</span></p>
        <button>Request OTP</button>
        <Link>New to Flipkart? Create an account</Link>
      </div>
    </div>
  );
};

export default Login;
