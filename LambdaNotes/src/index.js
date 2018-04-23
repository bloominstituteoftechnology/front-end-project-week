import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import Provider from "react-redux";
import "./index.css";
import App from "./App";
import rootReducer from "./reducers.index";
import registerServiceWorker from "./registerServiceWorker";

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
	<Provider>
		<App />
	</Provider>,
	document.getElementById("root")
);
registerServiceWorker();
