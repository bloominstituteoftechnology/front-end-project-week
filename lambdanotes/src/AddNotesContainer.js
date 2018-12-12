import React, { Component } from "react";
import SidebarContainer from "./components/sidebar/SidebarContainer";
import logo from "./logo.svg";
import "./App.css";
import AddNotes from "./components/AddNotesContainer/AddNotes";

class AddNotesContainer extends Component {
	render() {
		return (
			<div className="App">
				<SidebarContainer />
				<AddNotes />
			</div>
		);
	}
}

export default AddNotesContainer;
