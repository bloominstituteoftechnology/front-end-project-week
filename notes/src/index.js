import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

import rootReducer from "./reducers";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
// import logger from "redux-logger";

// let persistedState = localStorage.getItem("state")
//   ? JSON.parse(localStorage.getItem("state"))
//   : undefined;

const store = createStore(
  rootReducer,

  applyMiddleware(thunk)
);

// store.subscribe(() => {
//   localStorage.setItem("state", JSON.stringify(store.getState()));
// });

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
