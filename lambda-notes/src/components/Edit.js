// React
import React from 'react';

class Edit extends React.Component {
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
						name = 'title' 
						type = 'text' 
						placeholder = { this.props.note.title } 
						value = { this.state.note.title } 
						onChange = { this.handleInputChange } 
					/>

					<textarea 
						className = 'note-content-text-area' 
						name = 'textBody' 
						placeholder = { this.props.note.textBody } 
						value = { this.state.note.textBody } 
						onChange = { this.handleInputChange } 
					/>

					<button className = 'btn save-btn' type = 'submit'>Update</button>
				</form>
			</div>
		);
	}
}

export default Edit;
