import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { Helmet } from "react-helmet";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Helmet>
      <title>E-Commerce App</title>
      <meta
        name="description"
        content="Your one-stop shop for all your needs"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Helmet>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
