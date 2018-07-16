import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import {
  createStore,
  applyMiddleware,
  compose
} from "redux";
import { notesReducer } from "./reducers/reducer";
import thunk from "redux-thunk";
import logger from "redux-logger";
import "bootstrap/dist/css/bootstrap.min.css";

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  notesReducer,
  composeEnhancers(applyMiddleware(thunk, logger))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
