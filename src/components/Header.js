import React from "react"
import "../css/header.css"
import logo from '../img/Apogee Logo (BG-White)_without Dimensions.png'
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";

export default function Header() {
  return (
    <div id="header">
      <div className="container">

        <img src={logo} alt="apogee" id="logo" />

        <div className="search">
          <input type="text" placeholder="Search product" />
          <button><FaSearch size="20px" color="#FFFFFF" /></button>
        </div>

        <div className="account">
          <div className="login">
            <FaUser size="40px" color="#707070" className="icon" />
            <div>
              <p>Login Here</p>
              <h3>My Account</h3>
            </div>
          </div>
          <div className="cart">
            <FaShoppingCart size="40px" color="#707070" className="icon" />
            <div>
              <p>Shopping Cart</p>
              <h3>6 Items</h3>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
