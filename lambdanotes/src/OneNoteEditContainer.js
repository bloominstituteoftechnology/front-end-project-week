import React, { Component } from "react";
import SidebarContainer from "./components/sidebar/SidebarContainer";
import "./App.css";
import { addNote } from "./components/actions/actions";
import { connect } from "react-redux";
import OneNoteEdit from "./components/NotesContainer/OneNoteEdit";

function OneNoteEditContainer(props) {
	const noteID = parseInt(props.match.params.id, 10);
	let thisNote = props.notes.find(note => note.id === noteID);
	return (
		<div className="App">
			{console.log(thisNote)}

			<SidebarContainer />
			<OneNoteEdit
				{...props}
				notes={thisNote}
				title={thisNote.title}
				body={thisNote.body}
				id={thisNote.id}
			/>
		</div>
	);
}

const mapStateToProps = state => ({
	notes: state.notes
});

export default connect(
	mapStateToProps,
	{ addNote }
)(OneNoteEditContainer);
