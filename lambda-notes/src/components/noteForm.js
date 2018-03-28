import React, { Component } from "react";
import { Form, FormGroup, Label, Input, FormText, Button } from "reactstrap";
import { Link } from "react-router-dom";

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
			title: "",
			content: ""
		});
		setTimeout(() => {
			this.props.getNotes();
		}, 20);
		this.props.history.push("/notesList");
	};

	handleInputChange = (event) => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	};

	render() {
		return (
			<div>
				<div>
					<h3>Create New Note</h3>
				</div>
				{/* <Form onSubmit={this.addNote}>
					<FormGroup>
						<Input
							type="text"
							name="title"
							placeholder="Note Title"
							onChange={this.handleInputChange}
							value={this.state.title}
						/>
					</FormGroup>
					<FormGroup>
						<Input
							type="textarea"
							name="content"
							placeholder="Note Content"
							onChange={this.handleInputChange}
							value={this.state.content}
						/>
					</FormGroup>
				</Form> */}
				<Form onSubmit={this.addNote}>
					<Input
						className="mt-3"
						type="text"
						name="title"
						placeholder="Note Title"
						onChange={this.handleInputChange}
						value={this.state.title}
					/>
					<Input
						className="mt-3"
						type="textarea"
						name="content"
						placeholder="Note Content"
						onChange={this.handleInputChange}
						value={this.state.content}
					/>
						<Button className="mt-3" type="submit">Save</Button>
				</Form>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		notes: state.notes
	};
};

export default connect(mapStateToProps, {
	addNote,
	getNotes
})(NoteForm);
