import React, { Component } from "react";
import SidebarContainer from "./components/sidebar/SidebarContainer";
import logo from "./logo.svg";
import "./App.css";
import NotesMainContainer from "./components/NotesContainer/NotesMainContainer";

class App extends Component {
	render() {
		return (
			<div className="App">
				<SidebarContainer />
				<NotesMainContainer />
			</div>
		);
	}
}

export default App;
