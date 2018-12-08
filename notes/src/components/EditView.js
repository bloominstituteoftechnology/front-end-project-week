import React, { Component } from "react";
import { connect } from "react-redux";
import { getNotes, addNote, deleteNote, editNote } from "../actions";
import Form from "./NoteForm";
import { ActiveTitle, NoteBox } from "./ListView";

class EditView extends Component {
	render() {
		if (!this.props.notes.length) {
			return <ActiveTitle>Loading note... </ActiveTitle>;
		}
		const note = this.props.notes.find(
			note => this.props.match.params.id === note._id
		);
		return (
			<>
				<ActiveTitle>Edit Note</ActiveTitle>
				<Form
					as={NoteBox}
					{...this.props}
					editNote={this.props.editNote}
					buttonText='Update'
					note={note}
					getNotes={this.props.getNotes}
					edit>
					<h1>{note.title} </h1>
					<p> {note.textBody} </p>
				</Form>
			</>
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
)(EditView);
