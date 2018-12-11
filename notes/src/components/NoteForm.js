import React, { Component } from "react";
import styled from "styled-components";

const FormWrapper = styled.form`
	margin: 0px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding-left: 30px;
`;

const Input = styled.input`
	margin: 0px;
	margin: 0;
	margin-bottom: 15px;
	font-size: 1.2rem;
	padding: 15px;
	border: 1px solid darkgrey;
	width: 50%;
`;

const Button = styled.button`
	background-color: teal;
	text-align: center;
	padding: 15px 0;
	text-decoration: none;
	font-weight: bold;
	color: white;
	border: 1px solid darkgrey;
	font-size: 1.4rem;
	width: 30%;
	margin-bottom: 30px;
	:hover {
		cursor: pointer;
	}
`;

const TextArea = styled.textarea`
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
		"Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
		"Helvetica Neue", sans-serif;
	margin: 0px;
	margin: 0;
	margin-bottom: 15px;
	font-size: 1.2rem;
	padding: 20px;
	border: 1px solid darkgrey;
	width: 85%;
	height: 360px;
`;

class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: this.props.title,
			textBody: this.props.textBody,
			_id: this.props._id
		};
	}

	handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	render() {
		return (
			<FormWrapper
				onSubmit={ev => this.props.submitHandler(ev, this.state)}>
				<Input
					type='title'
					name='title'
					placeholder='Note Title'
					onChange={this.handleChange}
					value={this.state.title}
				/>
				<TextArea
					type='textBody'
					name='textBody'
					placeholder='Note Content'
					onChange={this.handleChange}
					value={this.state.textBody}
					extra
				/>
				<Button type='submit'>{this.props.buttonText}</Button>
			</FormWrapper>
		);
	}
}

export default Form;
