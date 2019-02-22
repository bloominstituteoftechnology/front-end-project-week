import React, { Component } from 'react';
import "../css/note.css"
import ImageUploader from 'react-images-upload';
import { connect } from 'react-redux';
import { createNote } from '../actions/notesActions';

class NoteCreate extends Component {
	constructor() {
		super();
		this.state = {
			tags: '',
			title: '',
			textBody: '',
			_id: 1234,
			pictures: "",
			users_id: 1
		};

		this.onDrop = this.onDrop.bind(this);

	}

	 //code added for the image uploader
	 onDrop(picture) {
		this.setState({
			pictures: this.state.pictures.concat(picture),
		});
	}

	handleInputChange = event => {
		this.setState({ [event.target.name]: event.target.value });
	};

	handleAddNote = (e) => {
		e.preventDefault();
		const { tags, title, textBody, _id, image, users_id } = this.state;

		this.props.createNote({ title, textBody, tags, _id, image, users_id });
		//this.setState({ tags: '', title: '', textBody: '', _id: "", image: "", users_id: "" });
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
					 <ImageUploader
                withIcon={true}
                buttonText='Choose images'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
            />
				<button className="save-button" type="submit" onSubmit={this.handleAddNote}>Save</button>
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
