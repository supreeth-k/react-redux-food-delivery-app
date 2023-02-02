import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./router/AppRouter";
import { Provider } from "react-redux";
import store from "./store/store";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.scss";

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />,
  </Provider>,
  document.getElementById("root")
);
