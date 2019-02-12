import React, { Component } from 'react';
import axios from 'axios';

class EditNote extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: '',
			title: '',
			content: '',
		};
	}
	componentDidMount() {
		this.getNote(this.props.match.params.id);
	}
	getNote = (id) => {
		axios.get(`http://localhost:3300/api/notes/${id}`).then((response) => {
			this.setState({
				id: response.data.id,
				title: response.data.title,
				content: response.data.content,
			});
		});
	};
	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
		console.log('Handler Target', event.target.value);
	};
	editNote = () => {
		const noteId = this.props.match.params.id;
		const editedNote = {
			id: this.props.match.params.id,
			title: this.state.title,
			content: this.state.content,
		};
		this.props.editNote(noteId, editedNote);
		this.props.history.push('/notes');
	};
	render() {
		return (
			<div>
				<h1>Update</h1>
				<form onSubmit={this.editNote} className="NoteForm">
					<input
						type="text"
						placeholder="title"
						name="title"
						onChange={(this.handleChange = this.handleChange.bind(this))}
						value={this.state.title}
					/>
					<textarea
						type="text"
						placeholder="Enter note content"
						name="content"
						onChange={(this.handleChange = this.handleChange.bind(this))}
						value={this.state.content}
					/>
					<button type="submit">Update Note!</button>
				</form>
			</div>
		);
	}
}
export default EditNote;
