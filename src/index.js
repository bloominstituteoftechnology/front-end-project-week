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

const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, reducer);

let store = createStore(persistedReducer, applyMiddleware(thunk));
let persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
