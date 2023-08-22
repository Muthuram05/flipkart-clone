import React from "react";
import { BottomNavData } from "../data/Data";
import { useNavigate } from "react-router-dom";
const BottomNav = () => {
  const navigate = useNavigate();
  const handleNavigate = (name) => {
    navigate("/products", { state: name });
  };
  return (
    <>
      {BottomNavData.map((e,index) => (
        <div key={index} onClick={() => handleNavigate(e.name)}>
          <img alt={e.name} src={e.image} />
          <h1>{e.name}</h1>
        </div>
      ))}
    </>
  );
};

export default BottomNav;
