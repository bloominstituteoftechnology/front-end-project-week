// React
import React from 'react';

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

		this.props.editNote(this.state.note, this.props.note._id, this.props.history);
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
						value = { this.state.note.title } 
						onChange = { this.handleInputChange } 
					/>

					<textarea 
						className = 'note-content-text-area' 
						name = 'textBody' 
						value = { this.state.note.textBody } 
						onChange = { this.handleInputChange } 
					/>

					<div className = 'tags'>
						<div>
							<input 
								type = 'checkbox' 
								name = 'grin-beam' 
								value = 'grin-beam' 
								onChange = { this.handleCheckboxChange } 
								checked = { this.state.note.tags.includes('grin-beam') ? true : false }
							/>
							<i className = 'far fa-grin-beam' />
						</div>

						<div>
							<input 
								type = 'checkbox' 
								name = 'angry' 
								value = 'angry' 
								onChange = { this.handleCheckboxChange } 
								checked = { this.state.note.tags.includes('angry') ? true : false }
							/>
							<i className = 'far fa-angry' />
						</div>

						<div>
							<input 
								type = 'checkbox' 
								name = 'grin-squint-tears' 
								value = 'grin-squint-tears' 
								onChange = { this.handleCheckboxChange } 
								checked = { this.state.note.tags.includes('grin-squint-tears') ? true : false }
							/>
							<i className = 'far fa-grin-squint-tears' />
						</div>

						<div>
							<input 
								type = 'checkbox' 
								name = 'frown' 
								value = 'frown' 
								onChange = { this.handleCheckboxChange } 
								checked = { this.state.note.tags.includes('frown') ? true : false }
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

export default Edit;
