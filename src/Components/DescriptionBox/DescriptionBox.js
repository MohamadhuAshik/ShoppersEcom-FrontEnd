import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="description-nav-box">Description</div>
        <div className="description-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>An e-commerse website is an online platform that facilitate buying and selling of products or services over the internet.it serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerse websites have gained immence popularity due to their convenience accessibility, and the global reach they offer</p>
        <p>E-commerse websites typically display products or services a detailed descriptions, images, prices, and my available variations (e.g., sizes, colors). Each product usually has its own dedicated with relevant information.</p>
      </div>
    </div>
  );
};

export default DescriptionBox;
