import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { BrowserRouter as Router } from "react-router-dom";
import { syncHistoryWithStore, routerReducer } from "react-router-redux";
import logger from "redux-logger";
import { Provider } from "react-redux";
import "./index.css";
// components
import App from "./App";
// reducer
import rootReducer from "./reducers/index";
import registerServiceWorker from "./registerServiceWorker";

const store = createStore(
	combineReducers({ rootReducer, routing: routerReducer }),
	applyMiddleware(logger),
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const router = (
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>
);

ReactDOM.render(router, document.getElementById("root"));
registerServiceWorker();
