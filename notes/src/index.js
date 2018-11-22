import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from "redux-thunk";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import App from "./App";
import NotesReducer from './reducers/notesReducer';

const middleware = applyMiddleware(thunk)
const store = createStore(NotesReducer, composeWithDevTools(middleware))


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root"),
);

