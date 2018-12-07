import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import notesReducer from "./reducers";
import { BrowserRouter as Router } from "react-router-dom";

const store = createStore(notesReducer, applyMiddleware(thunk));

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>,

	document.getElementById("root")
);
