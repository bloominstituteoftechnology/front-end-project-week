import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
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

const store = createStore(rootReducer, applyMiddleware(logger));

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
