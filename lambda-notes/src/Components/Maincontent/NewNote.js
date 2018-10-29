import React from 'react';
import axios from 'axios';

class NewNote extends React.Component {
	constructor() {
		super();
		this.state = {
			noteTitle: '',
			noteContent: ''
		};
	}

	changeHandler = (e) => {
		e.preventDefault();
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	saveNote = (e) => {
		const { noteTitle, noteContent } = this.state;
		e.preventDefault();
		if (this.state.noteTitle === '' || this.state.noteContent === '') {
			alert('Please fill out both fields');
		} else {
			axios
				.post('https://killer-notes.herokuapp.com/note/create', { title: noteTitle, textBody: noteContent })
				.then((res) => {
					console.log(res);
					this.setState({
						notes: res.data,
						noteTitle: '',
						noteContent: ''
					});
				})
				.catch((err) => console.log(err));
		}
		this.props.history.push('/');
	};

	render() {
		return (
			<div>
				<h1>Create New Note:</h1>
				<form onSubmit={this.saveNote}>
					<input
						type="text"
						name="noteTitle"
						value={this.state.noteTitle}
						onChange={this.changeHandler}
						placeholder="Note Title"
					/>
					<input
						type="text"
						name="noteContent"
						value={this.state.noteContent}
						onChange={this.changeHandler}
						placeholder="Note Title"
					/>
					<button>Save</button>
				</form>
			</div>
		);
	}
}

export default NewNote;
