import React, { Component } from "react";
import styled from "styled-components";

const FormWrapper = styled.form`
	margin-top: 10px;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 10px;
	text-align: center;

	input {
		width: 90%;
		margin: 0 auto;
		margin-bottom: 5px;
	}

	button {
		margin: 10px;
		width: 60%;
	}
`;

class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: `${this.props.edit ? this.props.note.title : ""}`,
			textBody: `${this.props.edit ? this.props.note.textBody : ""}`
		};
	}

	handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	submitHandler = event => {
		event.preventDefault();
		if (this.props.edit) {
			console.log(this.props);
			this.props.editNote(this.props.note._id, this.state);
			this.props.getNotes();
			this.props.history.push(`/note/${this.props.note._id}`);
		} else {
			this.props.addNote(this.state);
			this.props.getNotes();
			this.props.history.push(`/`);
		}
	};

	render() {
		return (
			<FormWrapper onSubmit={this.submitHandler}>
				<input
					type='title'
					name='title'
					placeholder='Title'
					onChange={this.handleChange}
					value={this.state.title}
				/>
				<input
					type='textBody'
					name='textBody'
					placeholder='Text'
					onChange={this.handleChange}
					value={this.state.textBody}
				/>
				<button type='submit'>{this.props.buttonText}</button>
			</FormWrapper>
		);
	}
}

export default Form;
