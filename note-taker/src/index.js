import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app/App";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import { BrowserRouter as Router } from "react-router-dom";
import thunk from 'redux-thunk';
import ScrollToTop from "./app/common/react-router-helpers/ScrollToTop";
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);


ReactDOM.render(
  <Provider store = {store}>
    <Router >
      <ScrollToTop>
      <App />
      </ScrollToTop>
    </Router>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
