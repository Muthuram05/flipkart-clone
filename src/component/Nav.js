import React, { useState } from "react";
import "./Nav.css";
import MoreData from "./MoreData";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { MyAccount, moreData } from "../data/Data";
import "tippy.js/themes/light.css";
import BottomNav from "./BottomNav";
import { Link, useNavigate } from "react-router-dom";
import { productsStore, userStore } from "../store/store";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
const Nav = () => {
  const currentUser = userStore((state) => state.currentUser);
  const setloginWindow = productsStore((state) => state.setloginWindow);
  const cartData = productsStore((state) => state.cartData);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const handleSubmit = () => {
    if (search.length > 3) {
      navigate("/products", { state: search });
    }
  };

  return (
    <>
      <div className="Nav">
        <div className="logo">
          <Link to="/">
            <img
              alt="nav"
              src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"
              width="75"
            />
            <p>
              Explore <span>Plus</span>
              <img
                src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png"
                width="10"
                alt="plus"
              />
            </p>
          </Link>
          <input
            type="text"
            placeholder="Search for products,brands and more"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="search" onClick={handleSubmit}>
            <img src="./image/search.svg" alt="search" />
          </div>
        </div>
        <div className="links">
          {currentUser ? (
            <Tippy
              content={<MoreData data={MyAccount} />}
              interactive={true}
              theme="light"
              className="tippy"
            >
              <div className="moreData custom-flex">
                <PersonIcon className="profile-icon" />
                <Link href="#" className="hide">
                  My Account
                </Link>
                <img src="./image/NavArrow.svg" alt="arrow" className="hide" />
              </div>
            </Tippy>
          ) : (
            <button onClick={setloginWindow} >Login</button>
          )}
          <Link href="#" className="hide">
            Become a Seller
          </Link>
          <Tippy
            content={<MoreData data={moreData} />}
            interactive={true}
            theme="light"
            className="tippy"
          >
            <div className="moreData">
              <Link>More</Link>
              <img src="./image/NavArrow.svg" alt="arrow" className="hide" />
            </div>
          </Tippy>
          <Link to="/cart" className="custom-flex">
            <ShoppingCartIcon style={{cursor:'pointer'}}/>
            {currentUser ? 
            <span
              className="custom-flex"
              style={{
                background: "red",
                marginLeft: "-20px",
                borderRadius: "50%",
                marginBottom: "12px",
                width: "18px",
                height: "18px",
              }}
            >
              {cartData.length}
            </span> : null}
            <span className="hide" style={{color:'var(--color-white)'}}>Cart</span>
          </Link>
        </div>
      </div>
      <div className="bottom-nav">
        <BottomNav />
      </div>
      <br></br>
    </>
  );
};

export default Nav;
