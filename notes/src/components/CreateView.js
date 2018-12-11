import React, { Component } from "react";
import { connect } from "react-redux";
import { getNotes, addNote, resetNewNoteId } from "../actions";
import Form from "./NoteForm";
import { ActiveTitle } from "./ListView";

class CreateView extends Component {
	componentDidMount() {
		this.props.getNotes();
	}

	componentDidUpdate(prevProps) {
		if (this.props.savingNote !== prevProps.savingNote) {
			if (!this.props.savingNote) {
				const id = this.props.newNoteId;
				this.props.resetNewNoteId();
				this.props.history.push(`/note/${id}`);
			}
		}
	}

	submitHandler = (event, note) => {
		event.preventDefault();
		this.props.addNote(note);
	};

	render() {
		if (this.props.savingNote)
			return <ActiveTitle>Saving note... </ActiveTitle>;

		return (
			<>
				<ActiveTitle>Create New Note</ActiveTitle>
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
	({ savingNote, newNoteId }) => ({ savingNote, newNoteId }),
	{ getNotes, addNote, resetNewNoteId }
)(CreateView);
