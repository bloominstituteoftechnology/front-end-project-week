import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import "./styles/index.css";
import NotesReducer from "./reducers/NotesReducer";

const middleware = applyMiddleware(logger, thunk);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(NotesReducer, composeEnhancers(middleware));

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);
