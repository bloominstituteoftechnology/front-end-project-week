import React, { Component } from 'react';
// eslint-disable-next-line
import axios from 'axios';
import './CreateLambdaNote.css';

class CreateLambdaNote extends Component {
	constructor() {
		super();
		this.state = {
			title: '',
			body: ''
		}
	}

	handleNoteInput = event => {
		this.setState({
			[event.target.name]: event.target.value 
		});
	}

	saveNewNote = () => {
		const newNote = {title: this.state.title, body: this.state.body};
		const notes = this.props.notes;
		notes.push(newNote);
		this.setState({
			title: '',
			body: ''
		})
	}

	render() {
		console.log("CREATE PROPS", this.props)
		return (
			<div className="new-note-container">
				<h2>Add New Note:</h2>
				<div className="new-note">
					<input 
						className="note-title"
						type="text"
						onChange={this.handleNoteInput}
						name="title"
						value={this.state.title}
						placeholder='Title'
					/>
					<textarea
						className="note-body"
						type="text"
						onChange={this.handleNoteInput}
						name="body"
						value={this.state.body}
						placeholder='Type Notes Here!'
					>	
					</textarea>
					<button onClick={this.saveNewNote} className="save-note">Save</button>
				</div>
			</div>
		)
	}
}

export default CreateLambdaNote;