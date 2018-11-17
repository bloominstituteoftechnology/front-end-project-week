import React, { Component } from 'react';
import "../css/note.css"

class NoteCreate extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tags: '',
			title: '',
			textBody: '',
			id: ''
		};
	}

	render() {
		return (
			<form className="note-create-form" onSubmit={this.props.saveNote}>
				<header className="note-create-header">Create New Note</header>
				<input
					type="text"
					className="note-title-input"
					value={this.props.value}
					placeholder="Note Title"
					onChange={this.props.changeHandler}
					name="title" />
				<textarea
					type="text"
					className="note-textarea"
					value={this.props.value}
					onChange={this.props.changeHandler}
					name="textBody" />
				<button className="save-button" onSubmit={this.props.saveNote}>Save</button>
			</form>
		);
	}
};
export default NoteCreate;