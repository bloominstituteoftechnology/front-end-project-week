import React, { Component } from "react";
import { connect } from "react-redux";
import { getNotes, addNote, deleteNote, editNote } from "../actions";
import Form from "./NoteForm";
import { ActiveTitle, NoteBox } from "./ListView";

class EditView extends Component {
	componentDidMount() {
		this.props.getNotes();
	}

	submitHandler = (event, note) => {
		event.preventDefault();
		this.props.editNote(note._id, note);
		this.props.history.push(`/note/${note._id}`);
	};

	render() {
		const note = this.props.notes.find(
			note => this.props.match.params.id === note._id
		);
		if (note === undefined) {
			return <ActiveTitle>Loading note... </ActiveTitle>;
		}
		return (
			<>
				<ActiveTitle>Edit Note</ActiveTitle>
				<Form
					as={NoteBox}
					buttonText='Update'
					submitHandler={this.submitHandler}
					title={note.title}
					textBody={note.textBody}
					_id={note._id}
				/>
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
