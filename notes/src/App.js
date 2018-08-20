import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

import Notes from "./Components/Notes";
import Note from "./Components/Note";

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
		],
	};
	render() {
		return (
			<div className="App">
				<div className="sidebar">
					<h1>Lambda Notes</h1>
					<Link to="/notes">
						<p>View Your Notes</p>
					</Link>
					<Link to="/add">
						<p>+ Create New Note</p>
					</Link>
				</div>
				<Route
					exact
					path="/"
					render={() => <div>This is the home page</div>}
				/>
				<Route
					exact
					path="/add"
					render={() => <div>This is the add notes page</div>}
				/>
				<Route
					exact
					path="/notes"
					render={() => (
						<div>
							<Notes notes={this.state.notes} />
						</div>
					)}
				/>
				<Route
					exact
					path="/notes/:id"
					render={props => (
						<Note match={props.match} notes={this.state.notes} />
					)}
				/>
			</div>
		);
	}
}

export default App;
