import React, { useEffect, useState } from "react";
import ImageSlider from "./ImageSlider";
import "./Home.css";
import { images } from "../data/Data";
import { productsStore, userStore } from "../store/store";
import ListData from "./ListData";
import Loader from "./Loader";
const Home = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    document.title =
      "Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!";
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  const productList = productsStore((state) => state.productList);
  return (
    <div className="Home">
      {loading ? (
        <Loader />
      ) : (
        <>
          <ImageSlider images={images} />
          <ListData list={productList["Mobiles"]} name={"Mobiles"} />
          <ListData list={productList["Electronic"]} name={"Electronic"} />
          <ListData list={productList["Beauty"]} name={"Beauty"} />
          <ListData list={productList["Furniture"]} name={"Furniture"} />
          <ListData list={productList["Fashion"]} name={"Fashion"} />
          <ListData list={productList["Appliances"]} name={"Furniture"} />
        </>
      )}
    </div>
  );
};

export default Home;
