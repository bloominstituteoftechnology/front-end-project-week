import React from "react";
import ReactDOM from "react-dom";
import { injectGlobal } from "styled-components";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import App from "./App";
import rootReducer from "./reducers";

injectGlobal`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    font-family: 'Raleway', sans-serif;
    background-color: #eee;
    color: #434343;
    margin-left: 300px; /* taking into account the sidenav */
  }

  table {
    border-collapse: collapse;
  }

  table, th, td {
    border: 1px solid #434343;
    padding: 1rem;
  }

  h1, h2, h3, h4, h5 {
    font-weight: 300;
  }
`;

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);
