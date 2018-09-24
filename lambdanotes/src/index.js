import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { noteReducer } from "./reducer/noteReducer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddNotesContainer from "./AddNotesContainer";
import NoteContainer from "./NoteContainer";

const store = createStore(noteReducer);

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<Switch>
				<Route exact path="/" component={App} />
				<Route path="/add-note" component={AddNotesContainer} />
				<Route path="/note/:id" component={NoteContainer} />
			</Switch>
		</Router>
	</Provider>,
	document.getElementById("root")
);
registerServiceWorker();
