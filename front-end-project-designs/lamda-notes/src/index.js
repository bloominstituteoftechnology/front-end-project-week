import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import thunk from "redux-thunk"
import logger from "redux-logger"
import { createStore, applyMiddleware, compose } from "redux"
import { Provider } from "react-redux"
import { BrowserRouter as Router } from "react-router-dom"
import rootReducer from "./store/reducers"

import App from "./App"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, logger))
)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
)
