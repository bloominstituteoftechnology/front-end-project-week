import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, applyMiddleware } from "redux";
import { thunk, logger } from "react-redux";
import { Provider } from "react-redux";
import reducerMain from "./";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddNotesContainer from "./AddNotesContainer";

ReactDOM.render(
	<Router>
		<Switch>
			<Route exact path="/" component={App} />
			<Route path="/add-note" component={AddNotesContainer} />
		</Switch>
	</Router>,
	document.getElementById("root")
);
registerServiceWorker();
