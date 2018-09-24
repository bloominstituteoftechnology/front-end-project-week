// React
import React from 'react';

class Edit extends React.Component {
	state = {
		note: {
			noteTitle: '',
			noteContent: '',
		},
		errorMsg: '',
	};

	handleInputChange = e => {
		this.setState({
			...this.state,
			note: { ...this.state.note, [e.target.name]: e.target.value },
		});
	}

	handleSubmit = e => {
		e.preventDefault();

		let emptyField = true;

		for (let i = 0; i < this.state.note.noteTitle.length; i++) {
			if (this.state.note.noteTitle[i] !== ' ') {
				emptyField = false;
				break;
			}
		}

		if (emptyField) {
			return this.setState({
				...this.state,
				note: { ...this.state.note },
				errorMsg: 'Title must not be empty.',
			});
		} else {
			emptyField = true;

			for (let i = 0; i < this.state.note.noteContent.length; i++) {
				if (this.state.note.noteContent[i] !== ' ') {
					emptyField = false;
					break;
				}
			}

			if (emptyField) {
				return this.setState({
					...this.state,
					note: { ...this.state.note },
					errorMsg: 'Content must not be empty.',
				});
			}
		}

		this.props.editNote(this.state.note, this.props.id);
		this.props.history.push('/');
	}
	
	render() {
		return(
			<div className = 'edit'>
				<form className = 'form' onSubmit = { this.handleSubmit }>
					<h2>Edit Note:</h2>

					<p>{ this.state.errorMsg }</p>

					<input 
						className = 'note-title-input' 
						name = 'noteTitle' 
						type = 'text' 
						placeholder = { this.props.note.noteTitle } 
						value = { this.state.note.noteTitle } 
						onChange = { this.handleInputChange } 
					/>

					<textarea 
						className = 'note-content-text-area' 
						name = 'noteContent' 
						placeholder = { this.props.note.noteContent } 
						value = { this.state.note.noteContent } 
						onChange = { this.handleInputChange } 
					/>

					<button className = 'btn save-btn' type = 'submit'>Update</button>
				</form>
			</div>
		);
	}
}

export default Edit;
