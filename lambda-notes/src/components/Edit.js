// React
import React from 'react';

// Dependencies
import PropTypes from 'prop-types';

class Edit extends React.Component {
	state = {
		note: {
			// only get unique values in the 'tags' array
			tags: Array.from(new Set(this.props.note.tags)),
			title: this.props.note.title,
			textBody: this.props.note.textBody,
		},
		errorMsg: '',
	};

	handleCheckboxChange = e => {
		let newTags = [ ...this.state.note.tags ];

		// When clicking on a checkbox: If it has already been checked, uncheck it.
		// And if it is unchecked, check it.
		if (newTags.includes(e.target.value)) {
			newTags = newTags.filter(tag => tag !== e.target.value);
		} else {
			newTags.push(e.target.value);
		}

		this.setState({
			...this.state,
			note: { 
				...this.state.note, 
				tags: newTags, 
			}
		});
	}

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

			for (let i = 0; i < this.state.note.textBody.length; i++) {
				// If there exists a char in the textBody other than empty spaces, then emptyField is false.
				if (this.state.note.textBody[i] !== ' ') {
					emptyField = false;
					break;
				}
			}

			if (emptyField) {
				// If emptyField is true, return an error message stating such.
				return this.setState({
					...this.state,
					note: { ...this.state.note },
					errorMsg: 'Text body must not be empty.',
				});
			}
		}

		// Else if emptyField is NOT true(title and textBody got filled out), then
		// dispatch the action associated with editing this note.

		this.props.editNote(this.state.note, this.props.note._id, this.props.history);
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
						name = 'textBody' 
						value = { note.textBody } 
						onChange = { this.handleInputChange } 
					/>

					<div className = 'tags'>
						<div>
							<input 
								type = 'checkbox' 
								name = 'grin-beam' 
								value = 'grin-beam' 
								onChange = { this.handleCheckboxChange } 
								checked = { note.tags.includes('grin-beam') ? true : false }
							/>
							<i className = 'far fa-grin-beam' />
						</div>

						<div>
							<input 
								type = 'checkbox' 
								name = 'angry' 
								value = 'angry' 
								onChange = { this.handleCheckboxChange } 
								checked = { note.tags.includes('angry') ? true : false }
							/>
							<i className = 'far fa-angry' />
						</div>

						<div>
							<input 
								type = 'checkbox' 
								name = 'grin-squint-tears' 
								value = 'grin-squint-tears' 
								onChange = { this.handleCheckboxChange } 
								checked = { note.tags.includes('grin-squint-tears') ? true : false }
							/>
							<i className = 'far fa-grin-squint-tears' />
						</div>

						<div>
							<input 
								type = 'checkbox' 
								name = 'frown' 
								value = 'frown' 
								onChange = { this.handleCheckboxChange } 
								checked = { note.tags.includes('frown') ? true : false }
							/>
							<i className = 'far fa-frown' />
						</div>
					</div>

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
		tags: PropTypes.arrayOf(PropTypes.string),
		textBody: PropTypes.string,
		title: PropTypes.string,
		'__v': PropTypes.number,
		'_id': PropTypes.string,

	}),
}

export default Edit;
