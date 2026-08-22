import React, { useContext, useState } from "react";
import "./NavBar.css";
import logo from "../../assets/logo.webp";
import cart from "../../assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";

export const NavBar = () => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartItems } = useContext(ShopContext);
  const userName = localStorage.getItem("user-name");

  const handleLogout = () => {
    localStorage.removeItem("user-name");
    window.location.replace("/");
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <Link to="/">
          <img src={logo} alt="" height="60px" />
          <p>Cartora</p>
        </Link>
      </div>
      <ul className="nav-menu">
        <li onClick={() => { setMenu("home"); }}>
          <Link to="/">Home</Link>
          {menu === "home" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("mens"); }}>
          <Link to="/mens">Men</Link>
          {menu === "mens" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("womens"); }}>
          <Link to="/womens">Women</Link>
          {menu === "womens" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("kids"); }}>
          <Link to="/kids">Kids</Link>
          {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        {userName ? (
          <div className="nav-user-profile">
            <span>Hi, {userName}</span>
            <button onClick={handleLogout} className="nav-logout-btn">
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login">
            <button>Login</button>
          </Link>
        )}
        <Link to="/cart">
          <img src={cart} alt="" height="40px" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};
