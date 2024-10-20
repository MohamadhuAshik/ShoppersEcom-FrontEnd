import React from "react";
import "./Offers.css";
// import exclusive_image from "../Assets/exclusive_image.png"
import exclusive_image from "../Assets/secondhero.webp"

const Offers = () => {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>Exculsive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON THE BEST PRODUCTS</p>
        <button>Check Now</button>
      </div>
      <div className="offers-right">
        <img src={exclusive_image} alt="pic" />
      </div>
    </div>
  );
};

export default Offers;
