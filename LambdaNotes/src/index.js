import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { BrowserRouter as Router } from "react-router-dom";
import logger from "redux-logger";
import { Provider } from "react-redux";
import throttle from "lodash";
// Material-UI
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import "./styles/index.css";
// components
import App from "./App";
// reducer
import rootReducer from "./reducers/index";
import registerServiceWorker from "./registerServiceWorker";
// local storage
import { loadState, saveState } from "./localStorage";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistedState = loadState();
const store = createStore(
	rootReducer,
	persistedState,
	composeEnhancers(applyMiddleware(logger))
);

// listen to any state changes - call saveState
// only pass in application data not UI data
store.subscribe(() => {
	throttle(saveState(store.getState()), 1000);
});

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
