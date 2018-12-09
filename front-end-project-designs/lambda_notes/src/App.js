import React, { Component } from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";

import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import NoteList from "./components/NoteList/NoteList";
import AddNewNote from "./components/AddNewNote/AddNewNote";
import Note from "./components/Note/Note";

const AppContainer = styled.div`
	height: 100%;
	display: flex;
`;

// ========== END OF STYLES ==================

class App extends Component {
	constructor() {
		super();
		this.state = {
			notes: [],
			id: "",
			title: "",
			tags: "",
			textBody: "",
		};
  }
  

	render() {
		console.log("App props", this.props);
		return (
			<>
				<AppContainer>
					<Sidebar />
					<Route exact path="/" component={NoteList} />
					<Route path="/addnewnote" component={AddNewNote} />
					<Route
						path="/notes/:noteId"
						render={props => (
							<Note
								{...props}
								notes={this.state.notes}
								// deleteItem={this.deleteItem}
							/>
						)}
					/>
				</AppContainer>
			</>
		);
	}
}

export default App;
