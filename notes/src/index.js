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

//Middleware for error logging and dispatching
const middleware = applyMiddleware(logger, thunk);

const store = createStore(rootReducer, middleware);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);