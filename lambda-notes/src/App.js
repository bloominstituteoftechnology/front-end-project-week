import React, { Component } from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';

import './App.css';
import NoteForm from './components/Notes/NoteForm';
import Notes from './components/Notes/Notes';
//import IndividualNote from './components/Notes/IndividualNote';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			notes: [],
			note: {
				title: '',
				textBody: '',
				isUpdating: 'false',
			},
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
	s;
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
					<h1 className="App-title">Welcome to Lambda Notes</h1>
					<Link to={`/`}>Home</Link>
					<Link to={`/notes`}>My Notes</Link>
					<Link to={`/noteform`}>Create Note</Link>
					<Link to={`/individualnote`}>Note</Link>
				</header>
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
				{/* <Route
					path="/individualnote"
					render={(props) => (
						<IndividualNote
							title={this.state.title}
							text={this.state.textBody}
						/>
					)}
				/> */}
			</div>
		);
	}
}

export default App;
