import React, { Component } from 'react';

// Form for Notes

class NoteForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			content: '',
		};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.addNote = this.addNote.bind(this);
	}

	addNote = (event) => {
		event.preventDefault();
		const newNote = {
			title: this.state.title,
			content: this.state.content,
		};

		this.props.addNote(newNote);

		this.setState({
			title: '',
			content: '',
		});
		this.props.history.push('/notes');
	};

	handleInputChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
		console.log({ [event.target.name]: event.target.value });
	};
	render() {
		return (
			<div>
				<h1>Create a new note</h1>
				<form onSubmit={this.addNote} className="NoteForm">
					<input
						className="input-title"
						value={this.state.title}
						name="title"
						type="text"
						placeholder="Note Title"
						onChange={this.handleInputChange}
					/>
					<input
						className="input-note"
						value={this.state.content}
						name="content"
						type="text"
						placeholder="Note Content"
						onChange={this.handleInputChange}
					/>
					<button type="submit">Save</button>
				</form>
			</div>
		);
	}
}
export default NoteForm;
