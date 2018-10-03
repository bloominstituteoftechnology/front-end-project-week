import React, { Component } from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';

import './App.css';
import NoteForm from './components/Notes/NoteForm';
import Notes from './components/Notes/Notes';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			notes: [],
			note: {
				tags: [],
				id: '',
				title: '',
				textBody: '',
			},
		};
	}

	componentDidMount() {
		axios
			.get('https://killer-notes.herokuapp.com/note/get/all')
			.then((response) => {
				this.setState(() => ({ notes: response.data }));
				console.log({ notes: response.data });
			})
			.catch((error) => {
				console.log(error);
			});
	}

	addNote = (note) => {
		axios
			.post('https://killer-notes.herokuapp.com/note/create', note)
			.then((response) => {
				this.setState({ note: response.data });
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

	fetchNote = (id) => {
		axios.get('https://killer-notes.herokuapp.com/note/get/{$id}');
	};

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">Welcome to Lambda Notes</h1>
					<Link to={`/`}>Home</Link>
					<Link to={`/notes`}>My Notes</Link>
					<Link to={`/noteform`}>Create Note</Link>
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
			</div>
		);
	}
}

export default App;
