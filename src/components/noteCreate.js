import React, { Component } from 'react';
import "../css/note.css"
import { connect } from 'react-redux';
import { createNote } from '../actions/notesActions';

class NoteCreate extends Component {
	constructor() {
		super();
		this.state = {
			title: '',
			textBody: '',
			tags: '',
			_id: 1234,
			users_id: 1,
			pictures: [],
			pictureDataURLs: "",
		};
	}

	fileChangedHandler = event => {
		const file = event.target.files[0]
		//console.log("file", file)
		//console.log("file.name", file.name)
		const fileName = file.name;
		const fileStr = JSON.stringify(file);
		this.setState({ pictures: fileStr, pictureDataURLs: fileName })
		//console.log("pictures:", this.state.pictures)
		//const name = this.state.pictures
		//console.log("name:", name.name)
	}

	
	handleInputChange = event => {
		this.setState({ [event.target.name]: event.target.value });
	};

	handleAddNote = (e) => {
		e.preventDefault();
	
		const { title, textBody, tags, _id, pictures, pictureDataURLs, users_id } = this.state;

		
		this.props.createNote({ title, textBody, tags, _id, pictures, pictureDataURLs, users_id });
		this.setState({ tags: '', title: '', textBody: '', _id: "", pictures: "", pictureDataURLs: "", users_id: "" });
		this.props.noteList(e);
	};

	render() {
		return (

			<form className="note-create-form" onSubmit={this.handleAddNote}>
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
				<div className="image-container">
					<input type="file" onChange={this.fileChangedHandler} />
					<button className="save-button" type="submit" onSubmit={this.handleAddNote}>Save</button></div>
			</form>

		);
	}
};
const mapStateToProps = state => {
	//const { notesReducer } = state;
	return {
		error: state.error,
		creatingNote: state.creatingNote
	};
};
export default connect(mapStateToProps, { createNote })(NoteCreate);
