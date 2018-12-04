import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import { Route, Link } from "react-router-dom";

import NoteList from "./components/NoteList";
import CreateNote from "./components/CreateNote";
import ViewNote from "./components/ViewNote";

class App extends Component {
	constructor() {
		super();
		this.state = {
			notes: []
		};
	}

	componentDidMount() {
		this.getNotes();
	}

	getNotes = () => {
		axios
			.get(`https://fe-notes.herokuapp.com/note/get/all`)
			.then(response => {
				console.log(response.data);
				this.setState({ notes: response.data });
			})
			.catch(error => {
				console.log(error);
			});
	};

	deleteNote = id => {
		axios
			.delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
			.then(response => {
				this.getNotes();
			})
			.catch(error => {
				console.log("Deletion error")
			});
	};

	render() {
		return (
			<div className="App">
				<aside>
					<h1>Lambda Notes</h1>
					<Link to="/" onClick={this.getNotes}>
						<div className="button">View Your Notes</div>
					</Link>
					<Link to="/create">
						<div className="button">+ Create New Note</div>
					</Link>
				</aside>
				<Route
					path="/"
					exact
					render={props => <NoteList {...props} notes={this.state.notes} /> }
				/>
				<Route
					path="/create"
					render={props => (
						<CreateNote {...props} createNewNote={this.createNewNote} />
					)}
				/>
				<Route
					path="/view/:id"
					render={props => (
						<ViewNote 
							{...props} 
							notes={this.state.notes} 
							deleteNote={this.deleteNote}
						/>
					)}
				/>
			</div>
		);
	};
}

export default App;
