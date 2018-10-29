import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux"
import { BrowserRouter as Router } from "react-router-dom"
import { Provider } from "react-redux"
import App from "./App"
import { rootReducer } from "./reducers"


const store = createStore(rootReducer)



const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
  <Router>
  <App />
  </Router>
  </Provider>
  , rootElement);

