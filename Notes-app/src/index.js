import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "./reducers";
// import { loadState, saveState } from "./localStorage.js";
// const persistedState = loadState();
const store = createStore(
  rootReducer,
  // persistedState,
  applyMiddleware(thunk, logger)
);
// store.subscribe(() => {
//   saveState(store.getState());
// });

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
