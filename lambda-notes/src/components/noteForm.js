import React, { Component } from "react";
import { connect } from "react-redux";
import {
	addNote,
	getNotes
	// editNote,
} from "../actions";


class NoteForm extends Component {
	state = {
		title: "",
		content: ""
	};

	addNote = (event) => {
		event.preventDefault();
		this.props.addNote(this.state);
		this.setState({
			name: "",
			age: "",
			email: ""
		});
		setTimeout(() => {
			this.props.getNotes();
		}, 20);
	};

	handleInputChange = (event) => {
		console.log(this.state.name);
		const { name, value } = event.target;
		this.setState({ [name]: value });
	};

	render() {
		return (
			<div>
				<div>
					<h3>Create New Note</h3>
				</div>
				<form onSubmit={this.sendFriend}>
					<input
						type="text"
						name="title"
						placeholder="Note Title"
						onChange={this.handleInputChange}
						value={this.state.title}
					/>
					<input
						type="textarea"
						name="content"
						placeholder="Note Content"
						onChange={this.handleInputChange}
						value={this.state.content}
					/>
					<button type="submit">Save</button>
				</form>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		notes: state.notes,
	};
};

export default connect(mapStateToProps, {
	addNote, 
	getNotes, 
})(NoteForm);
