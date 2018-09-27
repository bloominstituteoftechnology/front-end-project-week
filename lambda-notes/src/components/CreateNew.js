// React
import React from 'react';

// Dependencies
import PropTypes from 'prop-types';

export default class CreateNew extends React.Component {
	state = {
		note: {
			tags: [],
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
		// create a newNote with those title and textBody values.

		const newNote = { ...this.state.note };

		// Note: this changes if form's structure changes
		for (let i = 2; i < e.target.length - 1; i++) {
			if (e.target[i].checked) {
				newNote.tags.push(e.target[i].value);
			}
		}

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
						name = 'textBody' 
						placeholder = 'Body' 
						value = { note.textBody } 
						onChange = { this.handleInputChange } 
					/>

					<div className = 'tags'>
						<div>
							<input 
								type = 'checkbox' 
								name = 'grin-beam' 
								value = 'grin-beam'
							/>
							<i className = 'far fa-grin-beam' />
						</div>

						<div>
							<input 
								type = 'checkbox' 
								name = 'angry' 
								value = 'angry'
							/>
							<i className = 'far fa-angry' />
						</div>

						<div>
							<input 
								type = 'checkbox' 
								name = 'grin-squint-tears' 
								value = 'grin-squint-tears'
							/>
							<i className = 'far fa-grin-squint-tears' />
						</div>

						<div>
							<input 
								type = 'checkbox' 
								name = 'frown' 
								value = 'frown'
							/>
							<i className = 'far fa-frown' />
						</div>
					</div>

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
