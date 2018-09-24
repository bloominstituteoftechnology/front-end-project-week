import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-thunk";
import notesReducer from "./reducers";
import { BrowserRouter as Route } from "react-router-dom";

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
