import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import * as firebase from "firebase";

import App from "./App";
import reducer from "./reducers";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
// import registerServiceWorker from "./registerServiceWorker";

const config = {
  apiKey: "AIzaSyA8wI_2iX5hYcQ38fuM_79BW4ZXlI6lav8",
  authDomain: "frontend-project-wk.firebaseapp.com",
  databaseURL: "https://frontend-project-wk.firebaseio.com",
  projectId: "frontend-project-wk",
  storageBucket: "frontend-project-wk.appspot.com",
  messagingSenderId: "690328231241"
};
firebase.initializeApp(config);

// Redux store
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk, logger)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
// registerServiceWorker();
