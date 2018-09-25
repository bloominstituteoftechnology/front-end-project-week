import React, { Component } from "react";
import SidebarContainer from "./components/sidebar/SidebarContainer";
import "./App.css";
import { getNotes } from "./components/actions/actions";
import { connect } from "react-redux";
import OneNote from "./components/NotesContainer/OneNote";

function NoteContainer(props) {
	const noteID = parseInt(props.match.params.id, 10);

	let thisNote = props.notes.find(note => note.id === noteID);

	function handleDelete() {
		console.log(props);
		let newNotes = props.notes.filter(note => note.id != thisNote.id);
		props.getNotes(newNotes);
		props.history.push("/");
	}
	return (
		<div className="App">
			<SidebarContainer />
			<div className="newNote">
				<div className="edit-delete">
					<button className="button">edit</button>
					<button onClick={props => handleDelete(props)} className="button">
						delete
					</button>
				</div>
				<OneNote note={thisNote} title={thisNote.title} body={thisNote.body} />
			</div>
		</div>
	);
}

const mapStateToProps = state => ({
	notes: state.notes
});

export default connect(
	mapStateToProps,
	{ getNotes }
)(NoteContainer);
