import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { BrowserRouter as Router } from "react-router-dom";
import logger from "redux-logger";
import { Provider } from "react-redux";
// Material-UI
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import "./styles/index.css";
// components
import App from "./App";
// reducer
import rootReducer from "./reducers/index";
import registerServiceWorker from "./registerServiceWorker";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(logger))
);

const router = (
	<Provider store={store}>
		<Router>
			<MuiThemeProvider>
				<App />
			</MuiThemeProvider>
		</Router>
	</Provider>
);

ReactDOM.render(router, document.getElementById("root"));
registerServiceWorker();
