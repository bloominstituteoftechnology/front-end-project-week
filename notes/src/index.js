import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter as Router } from "react-router-dom";
import thunk from "redux-thunk"
import logger from 'redux-logger'
import rootReducer from "./reducers"
//Middleware for logging error and dispatching
const middleware = applyMiddleware(logger, thunk);
//The overall store
const store = createStore(rootReducer, middleware);


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
