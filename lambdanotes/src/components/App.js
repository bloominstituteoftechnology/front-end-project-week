import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import SideNav from "./SideNav/SideNav";
import Notes from "./Notes/Notes";
import NewNote from "./NewNote/NewNote";

import "./App.css";

class App extends Component {
	render() {
		return (
			<div className="container">
				<SideNav />
				<Switch>
					<Route exact path="/" render={props => <Notes />} />
					<Route path="/newNote" render={props => <NewNote />} />
				</Switch>
			</div>
		);
	}
}

export default App;
