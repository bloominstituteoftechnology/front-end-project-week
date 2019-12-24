import React from "react";
import ReactDOM from "react-dom";

import {BrowserRouter as Router} from 'react-router-dom'

import { createStore } from "redux";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";

import { rootReducer } from "./store/reducers";

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
