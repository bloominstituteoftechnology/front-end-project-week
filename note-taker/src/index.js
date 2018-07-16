import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app/App";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers";
import { BrowserRouter as Router } from "react-router-dom";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
ReactDOM.render(
  <Provider store = {store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
