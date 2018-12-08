import React, { Component } from "react";
import { connect } from "react-redux";
import { getNotes, addNote, deleteNote, editNote } from "../actions";
import Form from "./NoteForm";

class CreateView extends Component {
	render() {
		return (
			<div>
				<h2>Create new Note</h2>
                <Form
					{...this.props}
					addNote={this.props.addNote}
					buttonText='Save'
					getNotes={this.props.getNotes}
					>
				</Form>
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
)(CreateView);
