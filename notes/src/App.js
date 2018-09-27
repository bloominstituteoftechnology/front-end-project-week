import React, { Component } from "react";
import { Route } from "react-router-dom";
import axios from "axios";

import Notes from "./Components/Notes";
import Note from "./Components/Note";
import AddNote from "./Components/AddNote";
import Sidebar from "./Components/Sidebar";
import FilteredNotes from "./Components/FilteredNotes";
import Register from "./Components/Register";
import Login from "./Components/Login";

import "./App.css";

const API = "https://lambda-notes-backend-trevor.herokuapp.com/notes/";
const REG_API =
	"https://lambda-notes-backend-trevor.herokuapp.com/auth/register/";
const LOG_API = "https://lambda-notes-backend-trevor.herokuapp.com/auth/login/";
// const API = "http://localhost:8000/notes";
// const REG_API = "http://localhost:8000/auth/register";
// const LOG_API = "http://localhost:8000/auth/login";
class App extends Component {
	state = {
		notes: [],
		loading: false,
		deleting: false,
	};

	componentDidMount() {
		this.setState({ loading: true });
		axios({
			method: "GET",
			url: API,
			headers: {
				authorization: "Bearer " + localStorage.getItem("token"),
			},
		}).then(response => {
			this.setState({ notes: response.data.message, loading: false });
		});
	}

	handleRegister = user => {
		axios
			.post(REG_API, user)
			.then(response => {
				// if (!response.data.token) {
				// 	return json({ error: true, message: "No token found" });
				// }

				localStorage.setItem("token", response.data.token);
			})
			.catch(err => {
				console.log(err);
			});
	};

	handleLogin = user => {
		axios
			.post(LOG_API, user)
			.then(response => {
				localStorage.setItem("token", response.data.token);
			})
			.catch(err => {
				console.log(err);
			});
	};

	handleAddNote = note => {
		this.setState({ loading: true });
		console.log(note);
		axios({
			method: "POST",
			url: API,
			headers: {
				authorization: "Bearer " + localStorage.getItem("token"),
			},
			data: note,
		}).then(response => {
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

		axios({
			method: "DELETE",
			url: `${API}/${id}`,
			headers: {
				authorization: "Bearer " + localStorage.getItem("token"),
			},
		}).then(() => {
			this.setState(prevState => ({
				notes: prevState.notes.filter(note => note.id !== Number(id)),
				deleting: false,
			}));
		});
	};

	handleEditNote = (id, edited) => {
		this.setState({ loading: true });
		axios({
			method: "PUT",
			url: `${API}/${id}`,
			headers: {
				authorization: "Bearer " + localStorage.getItem("token"),
			},
			data: edited,
		}).then(response => {
			this.setState(prevState => ({
				notes: prevState.notes.map(note => {
					if (note.id == response) {
						return { ...edited, id: note.id };
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
					render={() => <Register onSubmit={this.handleRegister} />}
				/>
				<Route
					exact
					path="/login"
					render={() => <Login onSubmit={this.handleLogin} />}
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
