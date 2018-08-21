import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import axios from "axios";

import Notes from "./Components/Notes";
import Note from "./Components/Note";
import AddNote from "./Components/AddNote";

import "./App.css";

const API_ALL = "https://killer-notes.herokuapp.com/note/get/all";
const API_ADD = "https://killer-notes.herokuapp.com/note/create";
const API_DELETE = "https://killer-notes.herokuapp.com/note/delete";
const API_GET = "https://killer-notes.herokuapp.com/note/get/id";
class App extends Component {
	state = {
		notes: [],
		loading: false,
	};

	componentDidMount() {
		this.setState({ loading: true });
		axios.get(API_ALL).then(response => {
			this.setState({ notes: response.data, loading: false });
		});
	}

	handleAddNote = note => {
		this.setState({ loading: true });
		axios.post(API_ADD, note).then(response => {
			axios.get(`${API_GET}/${response.success}`).then(response => {
				this.setState(prevState => ({
					notes: [...prevState.notes, response.data],
					loading: false,
				}));
			});
		});
	};

	handleDeleteNote = id => {
		this.setState({ loading: true });
		axios
			.delete(`${API_DELETE}/${id}`)
			.then(response =>
				this.setState({ notes: response.data, loading: false }),
			);
	};

	// handleAddNote = note => {
	// 	this.setState(prevState => ({ notes: [...prevState.notes, note] }));
	// };

	// handleDeleteNote = id => {
	// 	this.setState(prevState => ({
	// 		notes: prevState.notes.filter(note => note.id != id),
	// 	}));
	// };

	handleEditNote = edited => {
		this.setState(prevState => ({
			notes: prevState.notes.map(note => {
				if (note.id == edited.id) {
					return edited;
				} else {
					return note;
				}
			}),
		}));
	};

	render() {
		return (
			<div className="App">
				<div className="Sidebar">
					<div className="Sidebar__header">
						<h1>Lambda</h1>
						<h1> Notes</h1>
					</div>
					<Link to="/notes">
						<button className="Button">View Your Notes</button>
					</Link>

					<Link to="/add">
						<button className="Button">+ Create New Note</button>
					</Link>
				</div>
				<Route
					exact
					path="/"
					render={() => <div>This is the home page</div>}
				/>
				<Route
					exact
					path="/notes"
					render={() => <Notes notes={this.state.notes} />}
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
							match={props.match}
							notes={this.state.notes}
							onClick={this.handleDeleteNote}
							onSubmit={this.handleEditNote}
						/>
					)}
				/>
			</div>
		);
	}
}

export default App;
