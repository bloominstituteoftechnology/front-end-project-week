import React, { Component } from 'react';
import './App.css';
import { Route, Link } from "react-router-dom";
import NoteList from "./components/NoteList";

class App extends Component {
	constructor() {
		super();
		this.state = [];
	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<NoteList />
			</div>
		);
	}
}

export default App;
