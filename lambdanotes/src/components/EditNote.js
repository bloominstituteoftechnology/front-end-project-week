// Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
// Actions
import { updateNote } from '../actions';
// Styles
import '../styles/EditNote.css';

class EditNote extends Component {
	state = {
		//tags: [],
		title: '',
		textBody: ''
	};

	changeHandler = event => {
		this.setState({ [event.target.name]: event.target.value });
	};

	submitHandler = event => {
		event.preventDefault();

		this.props.updateNote({
			// tags: [],
			_id: this.props.note._id,
			title: this.state.title,
			textBody: this.state.textBody
		});

		this.props.doneEditing();
	};

	componentDidMount() {
		this.setState({
			// tags: this.props.note.tags,
			title: this.props.note.title,
			textBody: this.props.note.textBody
		});
	}

	render() {
		return (
			<form className="EditNote" onSubmit={this.submitHandler}>
				<h2>Edit Note:</h2>
				<input
					className="title-input"
					name="title"
					type="text"
					placeholder="Note Title"
					value={this.state.title}
					onChange={this.changeHandler}
					required
				/>
				<input
					className="content-input"
					name="textBody"
					type="text"
					placeholder="Note Content"
					value={this.state.textBody}
					onChange={this.changeHandler}
					required
				/>
				<input type="submit" value="Update" />
			</form>
		);
	}
}

export default connect(
	null,
	{ updateNote }
)(EditNote);
