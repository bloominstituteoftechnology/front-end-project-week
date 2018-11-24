import React, { Component } from 'react';
import "../css/note.css"
import { connect } from 'react-redux';
import { createNote } from '../actions';

class NoteCreate extends Component {

	state = {
		tags: '',
		title: '',
		textBody: ''
	};

	handleInputChange = event => {
		this.setState({ [event.target.name]: event.target.value });
	};

	handleAddNote = _ => {
		const { tags, title, textBody } = this.state;
		this.props.createNote({ tags, title, textBody });
		this.setState({ tags: '', title: '', textBody: '' });
	};

	render() {
		return (
			<form className="note-create-form">
				<header className="note-create-header">Create New Note</header>
				<input
					type="text"
					className="note-title-input"
					value={this.state.value}
					placeholder="Enter Note Title Here..."
					onChange={this.handleInputChange}
					name="title" />
				<textarea
					type="text"
					placeholder="Enter Note Body Here..."
					className="note-textarea"
					value={this.state.value}
					onChange={this.handleInputChange}
					name="textBody" />
				<button className="save-button" onClick={() => this.handleAddNote()}>Save</button>
			</form>
		);
	}
};
const mapStateToProps = state => {
	return {
		error: state.error,
		creatingNote: state.creatingNote
	};
};
export default connect(mapStateToProps, { createNote })(NoteCreate);
