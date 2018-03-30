import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import rootreducer from "./RootReducer/rootreducer.js";
import { createStore } from "redux";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";

const store = createStore(rootreducer);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
