import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class EditNote extends Component {
	constructor(props) {
		super(props);
		const id = this.props.match.params.id
		this.state = {
			id: id,
			title: this.props.notes[id].title,
			body: this.props.notes[id].body
		}
	}

	handleNoteInput = event => {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	updateNote = () => {
		const id = this.props.match.params.id;
		const newNote = {id: this.state.id, title: this.state.title, body: this.state.body};

		this.props.notes[id].title = newNote.title;
		this.props.notes[id].body = newNote.body;

		this.setState({
			id: id,
			title: this.props.note[id].title,
			body: this.props.notes[id].body
		})
	}

	render() {
		return (
			<div className="new-note-container">
				<h2>Edit Note:</h2>
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
					<Link to={`/`}>
						<button onClick={this.updateNote} className="save-note">Update</button>
					</Link>
				</div>
			</div>
		)
	}
}

export default EditNote;