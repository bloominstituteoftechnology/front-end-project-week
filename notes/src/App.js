import React, { Component } from "react";
import "./App.css";
import { getNotes, addNote, deleteNote, editNote } from "./actions";
import { connect } from "react-redux";

class App extends Component {

	componentDidMount() {
		this.props.getNotes();
	}

	onClickHandler = (ev, id) => {
		ev.preventDefault();
		this.props.deleteNote(id);
		this.props.getNotes();
	};

	render() {
		return (
			<div className='App'>
				<header className='App-header' />
				{this.props.notes.map(note => (
					<button
						key={note._id}
						onClick={ev => {
							this.onClickHandler(ev, note._id);
						}}>
						DELETE {note.title}
					</button>
				))}
			</div>
		);
	}
}

export default connect(
	({ notes }) => ({ notes }),
	{
		getNotes,
		addNote,
		deleteNote,
		editNote
	}
)(App);

//EDIT SYNTAX: $r.props.editNote("5c0a1d936215570015af895d", {title: "hello", textBody: "I AM A TRUE MASTER BANANARAMAJAMAMAMA!"})
