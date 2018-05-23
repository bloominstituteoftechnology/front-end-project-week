// React Imports Here
import React from "react";
import { render } from "react-dom";
// Redux Imports Here
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from './reducers';
// Components Imports Here
import App from "./app.js";

let store = createStore(reducers);

render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById("root"));
