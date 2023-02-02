import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "../components/App";
import CartContext from "../context/CartContext";
import MenuItems from "../components/MenuItems";
import Products from "../components/Products";
import ShoppingCart from "../components/ShoppingCart";
import Checkout from "../components/Checkout";
import useLocalStorage from "../hooks/useLocalStorage";
import PaymentSuccessPage from "../components/PaymentSuccessPage";
import { LOADING_MESSAGE } from "../utils/constants";
import Loader from "../components/Loader";
import PageNotFound from "../components/PageNotFound";

const AppRouter = () => {
  const [items, setItems] = useLocalStorage("cartItems", []);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <BrowserRouter>
      <Loader show={isLoading}>{LOADING_MESSAGE}</Loader>
      <CartContext.Provider value={{ items, setItems, setIsLoading }}>
        <Switch>
          <Route component={App} path="/" exact={true} />
          <Route component={MenuItems} path="/menu" />
          <Route component={Products} path="/products" />
          <Route component={ShoppingCart} path="/cart" />
          <Route component={Checkout} path="/checkout" />
          <Route component={PaymentSuccessPage} path="/success" />
          <Route component={PageNotFound} />
        </Switch>
      </CartContext.Provider>
    </BrowserRouter>
  );
};

export default AppRouter;
