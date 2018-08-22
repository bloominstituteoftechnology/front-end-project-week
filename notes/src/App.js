import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import axios from "axios";

import Notes from "./Components/Notes";
import Note from "./Components/Note";
import AddNote from "./Components/AddNote";
import Sidebar from "./Components/Sidebar";
import FilteredNotes from "./Components/FilteredNotes";

import "./App.css";

const API_ALL = "https://killer-notes.herokuapp.com/note/get/all";
const API_ADD = "https://killer-notes.herokuapp.com/note/create";
const API_DELETE = "https://killer-notes.herokuapp.com/note/delete";
const API_GET = "https://killer-notes.herokuapp.com/note/get";
const API_PUT = "https://killer-notes.herokuapp.com/note/edit";
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
			axios.get(`${API_GET}/${response.data.success}`).then(response => {
				this.setState(prevState => ({
					notes: [...prevState.notes, response.data],
					loading: false,
				}));
			});
		});
	};

	handleDeleteNote = id => {
		this.setState({ loading: true });
		axios.delete(`${API_DELETE}/${id}`).then(() => {
			axios.get(API_ALL).then(response => {
				this.setState({ notes: response.data, loading: false });
			});
		});
	};

	handleEditNote = (id, edited) => {
		this.setState({ loading: true });
		axios.put(`${API_PUT}/${id}`, edited).then(response => {
			this.setState(prevState => ({
				notes: prevState.notes.map(note => {
					if (note._id == response.data._id) {
						return response.data;
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
				<Route
					exact
					path="/"
					render={() => <div>Under Construction</div>}
				/>
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
