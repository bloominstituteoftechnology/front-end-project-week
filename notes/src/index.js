import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux"
import { BrowserRouter as Router } from "react-router-dom"
import { Provider } from "react-redux"
import App from "./App"
import { rootReducer } from "./reducers"
import thunk from "redux-thunk"
import logger from "redux-logger"

const store = createStore(rootReducer, applyMiddleware(logger, thunk))



const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
  <Router>
  <App />
  </Router>
  </Provider>
  , rootElement);

