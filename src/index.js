import { Provider } from "react-redux";
import { createStore } from "redux";
import React from "react";
import ReactDOM from "react-dom";
import reducers from "/reducers";
import App from "../components/App";

const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__;
const store = createStore(reducers, reduxDevtools && reduxDevtools());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
