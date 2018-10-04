import React, { Component } from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';

import './App.css';
import NoteForm from './components/Notes/NoteForm';
import Notes from './components/Notes/Notes';
import NoteList from './components/Notes/NoteList';
import NoteView from './components/Notes/NoteView';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			notes: [],
			note: {
				title: '',
				textBody: '',
			},
			isUpdating: 'false',
		};
	}

	fetchNotes = () => {
		axios
			.get('https://killer-notes.herokuapp.com/note/get/all')
			.then((response) => {
				console.log({ notes: response.data });
				this.setState(() => ({ notes: response.data }));
			})
			.catch((error) => {
				console.log(error);
			});
	};

	componentDidMount() {
		this.fetchNotes();
	}

	addNote = (note) => {
		console.log('firing');
		axios
			.post('https://killer-notes.herokuapp.com/note/create', note)
			.then((response) => {
				this.setState({ note: response.data });
				this.fetchNotes();

				console.log({ note: response.data });
			})
			.catch((error) => {
				console.error(error);
			});
	};

	getNoteView = (noteId) => {
		axios
			.get(`https://killer-notes.herokuapp.com/note/get/${noteId}`)
			.then((response) => {
				this.setState({
					title: response.data.title,
					textBody: response.data.textBoday,
					id: response.data._id,
				});

				console.log({
					title: response.data.title,
					textBody: response.data.textBoday,
					id: response.data._id,
				});
			})
			.catch((error) => {
				console.error(error);
			});
	};

	deleteNote = () => {};

	editNote = () => {};

	handleChange = (event) => {
		this.setState({
			note: {
				...this.state.note,
				[event.target.name]: event.target.value,
			},
		});
	};

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">Lambda Notes</h1>
					<div className="View">
						<Link to={`/`} style={{ textDecoration: 'none' }}>
							View Your Notes
						</Link>
					</div>
					<div className="Create">
						<Link to={`/noteform`} style={{ textDecoration: 'none' }}>
							Create Note
						</Link>
					</div>
				</header>
				<div className="Main-Note-Container">
					<Route
						path="/noteform"
						render={(props) => (
							<NoteForm
								{...props}
								handleChange={this.handleInputChange}
								onSubmit={this.handleSubmit}
								title={this.state.title}
								text={this.state.textBody}
								addNote={this.addNote}
							/>
						)}
					/>
					<Route
						exact
						path="/"
						render={(props) => <Notes notes={this.state.notes} />}
					/>
					<Route
						path="/notelist"
						render={(props) => (
							<NoteList {...props} notesList={this.state.notes} />
						)}
					/>
					<Route
						path="/noteview/:noteID"
						render={(props) => <NoteView {...props} note={this.state.note} />}
					/>
				</div>
			</div>
		);
	}
}

export default App;
