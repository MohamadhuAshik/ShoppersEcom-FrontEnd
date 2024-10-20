import React, { useContext, useRef, useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link, useNavigate } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import nav_drowdown from "../Assets/nav_dripdown.jpg";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItem } = useContext(ShopContext);
  const menuRef = useRef();
  const dropDown_toggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");
  };
  const navigate = useNavigate()
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="pic" />
        {/* <p>SHOPPER</p> */}
        <p>PAGEDRIFT</p>
      </div>
      <img
        className="nav-dropdown"
        onClick={dropDown_toggle}
        src={nav_drowdown}
        alt="pic"
      />
      <ul ref={menuRef} className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/">
            Books
          </Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("tamil");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/tamil">
            Tamil
          </Link>
          {menu === "tamil" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("english");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/english">
            English Navels
          </Link>
          {menu === "english" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("commics");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/commics">
            Commics
          </Link>{" "}
          {menu === "commics" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        {localStorage.getItem("auth-token") ? (
          <button
            onClick={() => {
              localStorage.removeItem("auth-token");
              navigate("/");
            }}
          >
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button>Login</button>
          </Link>
        )}

        <Link to="/cart">
          <img src={cart_icon} alt="pic"></img>
        </Link>
        <div className="nav-cart-count">{getTotalCartItem()}</div>
      </div>
    </div>
  );
};

export default Navbar;
