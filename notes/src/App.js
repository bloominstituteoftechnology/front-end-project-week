import React, { Component } from "react";
import { Route } from "react-router-dom";
import axios from "axios";

import Notes from "./Components/Notes";
import Note from "./Components/Note";
import AddNote from "./Components/AddNote";
import Sidebar from "./Components/Sidebar";
import FilteredNotes from "./Components/FilteredNotes";
import DragDrop from "./Components/DragDrop";

import "./App.css";

const API_ALL = "https://lambda-notes-backend-trevor.herokuapp.com/notes/";
const API_ADD = "https://lambda-notes-backend-trevor.herokuapp.com/notes/";
const API_DELETE = "https://lambda-notes-backend-trevor.herokuapp.com/notes/";
const API_PUT = "https://lambda-notes-backend-trevor.herokuapp.com/notes/";
class App extends Component {
	state = {
		notes: [],
		loading: false,
		deleting: false,
	};

	componentDidMount() {
		this.setState({ loading: true });
		axios.get(API_ALL).then(response => {
			this.setState({ notes: response.data.message, loading: false });
		});
	}

	// componentDidUpdate(prevState) {
	// 	if (
	// 		this.state.deleting !== prevState.deleting &&
	// 		!this.state.deleting
	// 	) {
	// 		axios.get(API_ALL).then(response => {
	// 			this.setState({ notes: response.data.message, loading: false });
	// 		});
	// 	}
	// }

	handleAddNote = note => {
		this.setState({ loading: true });
		axios.post(API_ADD, note).then(response => {
			this.setState(prevState => ({
				notes: [
					...prevState.notes,
					{ ...note, id: response.data.message },
				],
				loading: false,
			}));
		});
	};

	handleDeleteNote = id => {
		this.setState({ deleting: true });

		axios.delete(`${API_DELETE}/${id}`).then(() => {
			this.setState(prevState => ({
				notes: prevState.notes.filter(note => note.id !== Number(id)),
				deleting: false,
			}));
		});
	};

	handleEditNote = (id, edited) => {
		this.setState({ loading: true });
		axios.put(`${API_PUT}/${id}`, edited).then(response => {
			this.setState(prevState => ({
				notes: prevState.notes.map(note => {
					if (note.id == response.data.message.id) {
						return response.data.message;
					} else {
						return note;
					}
				}),
				loading: false,
			}));
		});
	};

	render() {
		return (
			<div className="App">
				<Sidebar />
				<Route exact path="/" render={() => <DragDrop />} />
				<Route
					exact
					path="/notes"
					render={() => <Notes notes={this.state.notes} />}
				/>
				<Route
					exact
					path="/tags/:tag"
					render={props => (
						<FilteredNotes {...props} notes={this.state.notes} />
					)}
				/>

				<Route
					exact
					path="/add"
					render={() => <AddNote onSubmit={this.handleAddNote} />}
				/>
				<Route
					exact
					path="/notes/:id"
					render={props => (
						<Note
							{...props}
							notes={this.state.notes}
							onDelete={this.handleDeleteNote}
							onSubmit={this.handleEditNote}
						/>
					)}
				/>
			</div>
		);
	}
}

export default App;
