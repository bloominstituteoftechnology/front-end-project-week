import React, { Component } from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';

import './App.css';
import Note from './components/Notes/Note';
import NoteForm from './components/Notes/NoteForm';
import Notes from './components/Notes/Notes';
import EditNote from './components/Notes/EditNote';
import DeleteNote from './components/Notes/DeleteNote';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			notes: [],
			// note: {
			/* id: '',
			title: '',
			content: '',
			// },
			isUpdating: 'false', */
		};
	}

	componentDidMount() {
		this.fetchNotes();
	}
	// Grab all the notes
	fetchNotes = () => {
		console.log('Getting all of the notes', this.state);
		axios
			.get('http://localhost:3300/api/notes')
			.then((response) => {
				console.log({ notes: response.data });
				this.setState(() => ({ ...this.state, notes: response.data }));
			})
			.catch((error) => {
				console.log(error);
			});
	};
	// Adds a new note
	addNote = (note) => {
		console.log('firing');
		axios
			.post('http://localhost:3300/api/notes', note)
			.then((response) => {
				this.setState({ note: response.data });
				console.log({ note: response.data });
				this.fetchNotes();

				console.log({ note: response.data });
			})
			.catch((error) => {
				console.error(error);
			});
	};
	// Individual note
	/* getRequestById = (noteID) => {
		axios
			.get(`http://localhost:3300/api/notes/${noteID}`)
			.then((response) => {
				this.setState(() => ({ ...this.state, note: response.data }));

				console.log({
					note: response.data,
				});
			})
			.catch((error) => {
				console.error(error);
			});
	}; */
	// Deletes note by id
	deleteNote = (id) => {
		axios
			.delete(`http://localhost:3300/api/notes/${id}`)
			.then((response) => this.fetchNotes())
			.catch((error) => {
				console.error(error);
			});
	};
	// Edit note by id
	editNote = (id, editedNote) => {
		axios
			.put(`http://localhost:3300/api/notes/${id}`, editedNote)
			.then((response) => this.fetchNotes())
			.catch((error) => {
				console.error(error);
			});
	};

	/* handleChange = (event) => {
		this.setState({
			note: {
				...this.state.note,
				[event.target.name]: event.target.value,
			},
		});
	}; */

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">Lambda Notes</h1>
					<div className="View">
						<Link to={`/notes`} style={{ textDecoration: 'none' }}>
							View Your Notes
						</Link>
					</div>
					<div className="Create">
						<Link to={`/noteform`} style={{ textDecoration: 'none' }}>
							+ Create Note
						</Link>
					</div>
				</header>
				<div className="Main-Note-Container">
					<Route
						path="/noteform"
						render={(props) => <NoteForm {...props} addNote={this.addNote} />}
					/>
					<Route
						exact
						path="/notes"
						render={(props) => <Notes {...props} notes={this.state.notes} />}
					/>
					{/* <Route
						path="/notelist"
						render={(props) => (
							<NoteList {...props} notesList={this.state.notes} />
						)}
					/> */}
					<Route path="/notes/:id" render={(props) => <Note {...props} />} />
					<Route
						path="/editNote/:id"
						render={(props) => <EditNote {...props} editNote={this.editNote} />}
					/>
					<Route
						path="/deleteNote/:id"
						render={(props) => (
							<DeleteNote {...props} deleteNote={this.deleteNote} />
						)}
					/>

					{/* <Route
						path="/noteview/:noteID"
						render={(props) => <NoteView {...props} note={this.state.note} />}
					/> */}
				</div>
			</div>
		);
	}
}

export default App;
