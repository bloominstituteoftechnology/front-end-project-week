import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import setJWT from "./utils/setJWT";
import jwt from "jsonwebtoken";
import { setCurrUser } from "./actions/authActions";

import rootReducer from "./reducers";

const middleware = applyMiddleware(logger, thunk);

const store = createStore(rootReducer, middleware);

// check if token is in localStorage and set it
if (localStorage.getItem("notes_jwt")) {
  setJWT(localStorage.notes_jwt);
  store.dispatch(setCurrUser(jwt.decode(localStorage.notes_jwt)));
}

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
