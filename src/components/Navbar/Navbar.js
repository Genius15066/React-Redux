import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './Navbar.css'

import { connect } from "react-redux";

const Navbar = ({ cart }) => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [cart, cartCount]);

  return (
    <div className="navbar">
      <div>
        <Link to="/"><h2 className="navbar-logo">Redux Dining</h2></Link>
      </div>

      <Link to="/cart">
        <div className="navbar-cart">
          <p className="cart-title">Order Items</p>
          <img
            className="cart-image"
            src="https://image.flaticon.com/icons/svg/102/102276.svg"
            alt="shopping cart"
          />
          <div className="cart-counter">{cartCount}</div>
        </div>
      </Link>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Navbar);
