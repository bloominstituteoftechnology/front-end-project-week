import React from 'react';
import { saveNote, editNote } from '../actions/index.js';
import { connect } from 'react-redux';
import styled from 'styled-components';

const FormWrapper = styled.div`
	width: 70%;
	background-color: #e6eef0;
	display: flex;
	min-height: 100vh;
	flex-wrap: wrap;
	justify-content: space-between;
	padding-left: 10%;
	padding-right: 10%;
	padding-bottom: 100%;
	align-content: start;
`;

const ViewHeader = styled.h1`
	font-size: 2.5rem;
	margin-top: 1.6rem;
	width: 100%;
	background-color: #e6eef0;
	padding-top: 2rem;
	width: 80%;
	padding-right: 10%;
`;

const Title = styled.input`
	height: 2.6rem;
	font-size: 2rem;
	padding-top: 1rem;
	padding-bottom: 1rem;
	padding-left: 1rem;
	padding-right: 10rem;
	margin-bottom: 1rem;
`;

const TextBody = styled.textarea`
	width: 100%;
	height: 35rem;
	padding: 12px;
	border: 1px solid #ccc;
	border-radius: 4px;
	resize: vertical;
	margin-bottom: 1rem;
	font-family: arial;
`;

class AddForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			textBody: ''
		};
	}

	changeHandlerTitle = e => {
		this.setState({ title: e.target.value });
	};

	changeHandlertextBody = e => {
		this.setState({ textBody: e.target.value });
	};

	submitHandler = e => {
		e.preventDefault();
		this.props.saveNote(this.state);
		this.props.history.push('/');
	};

	render() {
		return (
			<FormWrapper>
				<ViewHeader>Create New Note:</ViewHeader>
				<form onSubmit={this.submitHandler}>
					<Title
						onChange={this.changeHandlerTitle}
						type="text"
						name="title"
						placeholder="Note Title"
						value={this.state.title}
					/>
					<TextBody
						onChange={this.changeHandlertextBody}
						type="text"
						name="textBody"
						placeholder="Note Content"
						value={this.state.textBody}
					/>
					<button>Submit</button>
				</form>
			</FormWrapper>
		);
	}
}

const mapStateToProps = state => {
	return {};
};

export default connect(
	mapStateToProps,
	{ saveNote, editNote }
)(AddForm);
