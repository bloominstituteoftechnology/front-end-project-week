// Dependencies
import React, { Component } from 'react';
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

		this.props.submitChanges({
			// tags: [],
			_id: this.props.note._id,
			title: this.state.title,
			textBody: this.state.textBody
		});
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
			<form onSubmit={this.submitHandler}>
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

export default EditNote;
