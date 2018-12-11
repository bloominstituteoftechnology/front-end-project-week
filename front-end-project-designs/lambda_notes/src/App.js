import React, { Component } from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import axios from "axios";

import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import NoteList from "./components/NoteList/NoteList";
import AddNewNote from "./components/AddNewNote/AddNewNote";
import Note from "./components/Note/Note";
import DeleteModal from "./components/DeleteModal/DeleteModal";
import EditNoteForm from './components/EditNoteForm/EditNoteForm';

const AppContainer = styled.div`
	height: 100%;
	display: flex;
`;

// ========== END OF STYLES ==================

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			notes: [],
			id: "",
			title: "",
			tags: "",
			textBody: "",
		};
	}

	deleteNote = id => {
		axios
			.delete(
				`https://fe-notes.herokuapp.com/note/delete/${id}`
			)
			.then(res => {
				console.log("Delete Note ", res);
				this.setState({notes: res.data})
			})
			.catch(err => console.log("Delete Server Error", err));
	};

	render(props) {
		console.log("App props", this.props);
		return (
			<>
				<AppContainer>
					<Sidebar />
					<Route exact path="/" component={NoteList} />
					<Route exact path="/addnewnote" component={AddNewNote} />
					<Route
						path="/notes/:noteId"
						render={props => (
							<Note {...props} notes={this.state.notes} />
						)}
					/>
					{/* <Route
						exact
						path={`/notes/:noteId/edit`}
						// component={EditNoteForm}
						render={props => (
							<EditNoteForm {...props} note={props.note} title={this.state.title}/>
						)}
					/> */}
					<Route
						{...props}
						exact
						path={`/notes/:noteId/delete`}
						render={props => (
							<DeleteModal {...props} note={this.props.note} deleteNote={this.deleteNote} />
						)}
					/>
				</AppContainer>
			</>
		);
	}
}

export default App;
