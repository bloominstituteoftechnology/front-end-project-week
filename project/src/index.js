import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import notesReducer from "./store/reducers";
import { BrowserRouter as Route } from "react-router-dom";
import thunk from "redux-thunk";
import logger from "redux-logger";

const store = createStore(notesReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <Route>
      <App />
    </Route>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
