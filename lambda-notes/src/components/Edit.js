// React
import React from 'react';

// Dependencies
import PropTypes from 'prop-types';

class Edit extends React.Component {
	state = {
		note: {
			title: this.props.note.title,
			content: this.props.note.content,
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
		// dispatch the action associated with editing this note.

		this.props.editNote(this.state.note, this.props.note.id, this.props.history);
	} // handleSubmit()
	
	render() {
		const { errorMsg, note } = this.state;

		return(
			<div className = 'edit'>
				<form className = 'form' onSubmit = { e => this.handleSubmit(e) }>
					<h2>Edit Note:</h2>

					{ errorMsg && <p>{ errorMsg }</p> }

					<input 
						className = 'note-title-input' 
						name = 'title' 
						type = 'text' 
						value = { note.title } 
						onChange = { this.handleInputChange } 
					/>

					<textarea 
						className = 'note-content-text-area' 
						name = 'content' 
						value = { note.content } 
						onChange = { this.handleInputChange } 
					/>

					<button className = 'btn save-btn' type = 'submit'>Update</button>
				</form>
			</div>
		);
	}
}

Edit.propTypes = {
	editNote: PropTypes.func,
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
	note: PropTypes.shape({
		content: PropTypes.string,
		id: PropTypes.number,
		title: PropTypes.string,
	}),
}

export default Edit;
