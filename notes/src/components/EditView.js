import React, { Component } from "react";
import { connect } from "react-redux";
import { getNotes, addNote, deleteNote, editNote } from "../actions";
import Form from "./NoteForm";

class EditView extends Component {
	render() {
		if (!this.props.notes.length) {
			return <div>Loading note... </div>;
		}
		const note = this.props.notes.find(
			note => this.props.match.params.id === note._id
		);
		return (
			<>
                <h2>Edit Note</h2>
				<Form
					{...this.props}
					editNote={this.props.editNote}
					buttonText="Update"
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
