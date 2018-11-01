import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';

// Individual Notes Listed
class Note extends Component {
	constructor() {
		super();
		this.state = {
			note: [],
		};
	}
	componentDidMount() {
		const noteId = this.props.match.params.id;
		this.getRequestById(noteId);
		console.log(noteId);
	}

	getRequestById = (id) => {
		console.log(id);
		axios
			.get(`http://localhost:3300/api/notes/${id}`)
			.then(response => {
				console.log('response: ', response);
				this.setState({note: response.data});
			  })
			.catch((error) => console.log(error));
	};
	// Update function
	editNote = () => {
		const id = this.props.match.params.id;
		this.props.history.push(`/editNote/${id}`);
	};
	// Delete Function
	deleteNote = () => {
		const id = this.props.match.params.id;
		this.props.history.push(`/deleteNote/${id}`);
	};

	render() {
		return (
			<div className="NoteViewDiv">
				<h1 className="NoteViewHeader">{this.state.title}</h1>

				<p className="NoteViewParagraph">{this.state.content}</p>
				<div className="EditDelete">
					<button onClick={() => this.editNote()}>Edit</button>
					<button onClick={() => this.deleteNote()}>Delete</button>
				</div>
			</div>
		);
	}
}

/* const Note = (props) => {
	console.log(props);

	return (
		<div className="Note">
			<Link to={`/noteview/${props.id}/`}>
				<h3>{props.title}</h3>
			</Link>
			<hr />
			<p>{props.text}</p>
		</div>
	);
}; */

/* Note.defaultProps = {
	id: '',
	title: '',
	text: '',
}; */

export default Note;
