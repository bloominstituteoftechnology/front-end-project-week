// React
import React from 'react';

class CreateNew extends React.Component {
	state = {
		note: {
			title: '',
			textBody: '',
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

		for (let i = 0; i < this.state.note.title.length; i++) {
			if (this.state.note.title[i] !== ' ') {
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

			for (let i = 0; i < this.state.note.textBody.length; i++) {
				if (this.state.note.textBody[i] !== ' ') {
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

		this.props.createNote(this.state.note, this.props.history);
	}
	
	render() {
		return(
			<div className = 'create-new'>
				<form className = 'form' onSubmit = { this.handleSubmit }>
					<h2>Create New Note:</h2>

					{ this.state.errorMsg && <p>{ this.state.errorMsg }</p> }

					<input 
						className = 'note-title-input' 
						name = 'title' 
						type = 'text' 
						placeholder = 'Title' 
						value = { this.state.note.title } 
						onChange = { this.handleInputChange } 
					/>

					<textarea 
						className = 'note-content-text-area' 
						name = 'textBody' 
						placeholder = 'Body' 
						value = { this.state.note.textBody } 
						onChange = { this.handleInputChange } 
					/>

					<button className = 'btn save-btn' type = 'submit'>Save</button>
				</form>
			</div>
		);
	}
}

export default CreateNew;
