import React, { Component } from 'react';
import "../css/note.css"
import ImageUploader from 'react-images-upload';
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
			pictures: "",
			users_id: 1,
			pictures: "",
			pictureDataURLs: "",
		};

		this.onDrop = this.onDrop.bind(this);

	}

	//code added for the image uploader
	onDrop(pictureFiles, pictureDataURLs) {
		console.log('pictureFiles', pictureFiles);
		console.log('pictureDataURLs', pictureDataURLs);
		
        this.setState({
            pictures: pictureFiles, pictureDataURLs: pictureDataURLs
        });
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
					<ImageUploader
						withIcon={true}
						buttonText='Choose images'
						onChange={this.onDrop}
						imgExtension={['.jpg', '.gif', '.png', '.gif']}
						maxFileSize={5242880}
					/>
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
