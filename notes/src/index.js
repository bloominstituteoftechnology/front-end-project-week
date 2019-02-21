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
import netlifyIdentity from 'netlify-identity-widget';
//Middleware for logging error and dispatching
const middleware = applyMiddleware(logger, thunk);
//The overall store
const store = createStore(rootReducer, middleware);

window.netlifyIdentity = netlifyIdentity;
// You must run this once before trying to interact with the widget
netlifyIdentity.init();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
