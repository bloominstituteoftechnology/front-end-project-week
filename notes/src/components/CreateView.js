import React, { Component } from "react";
import { connect } from "react-redux";
import { getNotes, addNote } from "../actions";
import Form from "./NoteForm";
import { ActiveTitle } from "./ListView";

class CreateView extends Component {
	componentDidMount() {
		this.props.getNotes();
	}

	submitHandler = (event, note) => {
		event.preventDefault();
		this.props.addNote(note);
		//this.props.history.push(`/note/${this.props.newNoteId}`); //<--i need to get here from this page after the form is filled out, submitted, and that ID is returned. Calling it here goes to '/note/'
	};

	render() {
		if (this.props.savingNote) {
			return <ActiveTitle>Saving note... </ActiveTitle>;
		}
		return (
			<>
				<ActiveTitle>Create new Note</ActiveTitle>
				<Form
					buttonText='Save'
					submitHandler={this.submitHandler}
					title=''
					textBody=''
					_id={`new-note`}
				/>
			</>
		);
	}
}

export default connect(
	({ notes, savingNote, newNoteId }) => ({ notes, savingNote, newNoteId }),
	{
		getNotes,
		addNote
	}
)(CreateView);
