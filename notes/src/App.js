import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

import Notes from "./Components/Notes";
import Note from "./Components/Note";
import AddNote from "./Components/AddNote";

import "./App.css";

class App extends Component {
	state = {
		notes: [
			{
				id: 0,
				title: "FIRST",
				text: "I am the very model",
			},
			{
				id: 1,
				title: "SECOND",
				text: "of a modern major general",
			},
			{
				id: 2,
				title: "THIRD",
				text: "I've information animal",
			},
			{
				id: 3,
				title: "FOURTH",
				text: "Vegetable and mineral",
			},
			{
				id: 4,
				title: "FIFTH",
				text:
					"All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. ",
			},
			{
				id: 5,
				title: "SIXTH",
				text: "of a modern major general",
			},
			{
				id: 6,
				title: "SEVENTH",
				text: "I've information animal",
			},
			{
				id: 7,
				title: "EIGHTH",
				text: "Vegetable and mineral",
			},
			{
				id: 8,
				title: "NINTH",
				text: "I am the very model",
			},
			{
				id: 9,
				title: "TENTH",
				text: "of a modern major general",
			},
			{
				id: 10,
				title: "ELEVENTH",
				text: "I've information animal",
			},
			{
				id: 11,
				title: "TWELFTH",
				text: "Vegetable and mineral",
			},
		],
	};

	handleAddNote = note => {
		this.setState(prevState => ({ notes: [...prevState.notes, note] }));
	};

	handleDeleteNote = id => {
		this.setState(prevState => ({
			notes: prevState.notes.filter(note => note.id != id),
		}));
	};

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
					<h1>Lambda Notes</h1>

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
