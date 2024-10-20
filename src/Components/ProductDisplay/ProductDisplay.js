import React, { useContext } from "react";
import "./ProductDisplay.css";
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext)
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="pic" />
          <img src={product.image} alt="pic" />
          <img src={product.image} alt="pic" />
          <img src={product.image} alt="pic" />
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="pic" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <img src={star_icon} alt="pic" />
          <img src={star_icon} alt="pic" />
          <img src={star_icon} alt="pic" />
          <img src={star_icon} alt="pic" />
          <img src={star_dull_icon} alt="pic" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">${product.old_price}</div>
          <div className="productdisplay-right-price-new">${product.new_price}</div>
        </div>
        <div className="productdisplay-right-description">
          A lightweight, compact, paperback or hardcover book, easy to hold and read, with a simple design and soft cover. Suitable for carrying around, either as a casual read or for study.
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Language</h1>
          <div className="productdisplay-right-sizes">
            <div>Tamil</div>
            <div>English</div>
            <div>Hindi</div>
            {/* <div>XL</div>
            <div>XXL</div> */}
          </div>
        </div>
        <button onClick={() => addToCart(product.id)}>ADD TO CART</button>
        <p className="productdisplay-right-category"><span>Category :</span>Tamil , E-books, novels</p>
        <p className="productdisplay-right-category"><span>Tags :</span>Modern, Latest</p>
      </div>
    </div>
  );
};

export default ProductDisplay;
