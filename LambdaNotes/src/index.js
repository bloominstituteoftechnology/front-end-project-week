import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { Provider } from "react-redux";
import "./index.css";
// components
import App from "./App";
// reducer
import rootReducer from "./reducers/index";
import registerServiceWorker from "./registerServiceWorker";

const store = createStore(rootReducer, applyMiddleware(logger));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
registerServiceWorker();
