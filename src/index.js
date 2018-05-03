import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";
import jwtDecode from "jwt-decode";

const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, reducer);

const checkTokenExpiration = store => next => action => {
  const token = localStorage.getItem("notesAuthToken");
  if (token) {
    console.log("TOKEN: ", jwtDecode(token));
    if (jwtDecode(token).exp < Date.now() / 1000) {
      localStorage.clear();
      next(action);
    }
  }
  next(action);
};
let store = createStore(
  persistedReducer,
  applyMiddleware(thunk, checkTokenExpiration)
);
let persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
