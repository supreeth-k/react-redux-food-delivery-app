/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import CartContext from "../context/CartContext";
import { setCartAction } from "../actions/cartActions";
import store from "../store/store";

const Header = ({ showCart = false, cartCount = 0 }) => {
  const { items } = useContext(CartContext);
  const history = useHistory();

  useEffect(() => {
    store.dispatch(setCartAction(items));
  }, []);

  const handleRedirect = () => {
    history.push("/cart");
  };

  const displayStyle = { display: `${showCart ? "block" : "none"}` };

  return (
    <nav>
      <header className="navigation-bar">
        <div className="home-link">
          <Link to="/">
            <h1>Food Market</h1>
          </Link>
        </div>
        <div
          className="cart-icon"
          style={displayStyle}
          onClick={handleRedirect}
        >
          <FiShoppingCart size="30" color="green" className="cart-logo" />
          <span className="cart-count">{cartCount}</span>
        </div>
        <div className="menu-link" style={displayStyle}>
          <Link to="/menu">Available Menus</Link>
        </div>
      </header>
    </nav>
  );
};

export default Header;
