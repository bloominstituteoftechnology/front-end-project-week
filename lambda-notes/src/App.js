import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import SideBar from './components/SideBar/SideBar';
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
	handleChange = (event) => {
		this.setState({
			note: {
				...this.state.note,
				[event.target.title]: event.target.value,
			},
		});
	};

	addNote = (note) => {
		axios
			.post('https://killer-notes.herokuapp.com/note/create', note)
			.then((response) => {
				this.setState(() => ({ notes: response.data }));
			})
			.catch((error) => {
				console.error(error);
			});
	};

	fetchNote = (id) => {
		axios.get('https://killer-notes.herokuapp.com/note/get/{$id}');
	};

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to Lambda Notes</h1>
				</header>
				<Route
					exact
					path="/"
					render={(props) => <Notes {...props} notes={this.state.notes} />}
				/>
			</div>
		);
	}
}

export default App;
