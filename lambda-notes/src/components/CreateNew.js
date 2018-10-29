// React
import React from 'react';

// Dependencies
import PropTypes from 'prop-types';

export default class CreateNew extends React.Component {
	state = {
		note: {
			title: '',
			content: '',
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
			// If there exists a char in the title other than empty spaces, then emptyField is false.
			if (this.state.note.title[i] !== ' ') {
				emptyField = false;
				break;
			}
		}

		if (emptyField) {
			// if emptyField is true, return an error message stating such.
			return this.setState({
				...this.state,
				note: { ...this.state.note },
				errorMsg: 'Title must not be empty.',
			});
		} else {
			emptyField = true;

			for (let i = 0; i < this.state.note.content.length; i++) {
				// If there exists a char in the content other than empty spaces, then emptyField is false.
				if (this.state.note.content[i] !== ' ') {
					emptyField = false;
					break;
				}
			}

			if (emptyField) {
				// If emptyField is true, return an error message stating such.
				return this.setState({
					...this.state,
					note: { ...this.state.note },
					errorMsg: 'Content must not be empty.',
				});
			}
		}

		// Else if emptyField is NOT true(title and textBody got filled out), then
		// create a newNote with those title and textBody values.

		const newNote = { ...this.state.note };

		this.props.createNote(newNote, this.props.history);
	} // handleSubmit()

	render() {
		const { errorMsg, note } = this.state;

		return(
			<div className = 'create-new'>
				<form className = 'form' onSubmit = { e => this.handleSubmit(e) }>
					<h2>Create New Note:</h2>

					{ errorMsg && <p>{ errorMsg }</p> }

					<input 
						className = 'note-title-input' 
						name = 'title' 
						type = 'text' 
						placeholder = 'Title' 
						value = { note.title } 
						onChange = { this.handleInputChange } 
					/>

					<textarea 
						className = 'note-content-text-area' 
						name = 'content' 
						placeholder = 'Body' 
						value = { note.content } 
						onChange = { this.handleInputChange } 
					/>

					<button className = 'btn save-btn' type = 'submit'>Save</button>
				</form>
			</div>
		);
	}
}

CreateNew.propTypes = {
	createNote: PropTypes.func,
	history: PropTypes.shape({
		action: PropTypes.string,
		block: PropTypes.func,
		createHref: PropTypes.func,
		go: PropTypes.func,
		goBack: PropTypes.func,
		goForward: PropTypes.func,
		length: PropTypes.number,
		listen: PropTypes.func,
		location: PropTypes.shape({
			hash: PropTypes.string,
			key: PropTypes.string,
			pathname: PropTypes.string,
			search: PropTypes.string,
		}),
		push: PropTypes.func,
		replace: PropTypes.func,
	}),
}
