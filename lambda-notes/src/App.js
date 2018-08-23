import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

import Notes from "./components/Notes";
import Note from "./components/Note";
import AddNote from "./components/AddNote";

import "./App.css";

class App extends Component {
	state={
		notes: [
			{
				id: 0,
				title: 'Note1',
				text: 'Go for a run',
			},
			{
				id: 1,
				title: 'Note2',
				text: 'take out trash',
			},
			{
				id: 2,
				title: 'Note3',
				text: 'finish sprint',
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
			<div className='App'>
				<div className='Sidebar'>
					<div className='Sidebar-header'>
						<h1>Lambda Notes</h1>
					</div>
					<Link to='/notes'>
						<button className='button'>View Your Notes</button>
					</Link>

					<Link to='/add'>
						<button className='button'>+ Create New Note</button>
					</Link>
				</div>
				<Route
					exact
					path='/'
					render={() => <div>This is the home page</div>}
				/>
				<Route
					exact
					path='/notes'
					render={() => <Notes notes={this.state.notes} />}
				/>
				<Route
					exact
					path='/add'
					render={() => <AddNote onSubmit={this.handleAddNote} />}
				/>
				<Route
					exact
					path='/notes/:id'
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