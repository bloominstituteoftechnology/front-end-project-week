import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getIndividual, editNote } from '../actions/index.js';

const FormWrapper = styled.div`
	width: 690%;
	background-color: #e6eef0;
	display: flex;
	height: 100%;
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

class EditNote extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			_id: this.props.match.params.id,
			title: '',
			textBody: ''
		};
	}
	componentDidMount() {
		const id = this.props.match.params.id;
		this.props.getIndividual(id);
		console.log('edit state=' + this.props.title);

		console.log('title=' + this.state.title);
	}
	componentDidUpdate(prevProps) {
		if (this.props.title !== prevProps.title) {
			this.setState({
				title: this.props.title,
				textBody: this.props.textBody
			});
		}
	}
	changeHandlerTitle = e => {
		this.setState({ title: e.target.value });
	};

	changeHandlertextBody = e => {
		this.setState({ textBody: e.target.value });
	};

	submitHandler = e => {
		e.preventDefault();
		this.props.editNote(this.state);
		this.props.history.push(`/${this.props.match.params.id}`);
	};
	render() {
		const id = this.props.match.params.id;
		return (
			<FormWrapper>
				<ViewHeader>Edit Note:</ViewHeader>
				<form onSubmit={this.submitHandler}>
					<Title
						onChange={this.changeHandlerTitle}
						type="text"
						name="title"
						value={this.state.title}
					/>
					<TextBody
						onChange={this.changeHandlertextBody}
						type="text"
						name="textBody"
						value={this.state.textBody}
					/>
					<button>Submit</button>
				</form>
			</FormWrapper>
		);
	}
}

const mapStateToProps = state => {
	console.log("state we're getting" + state.currentIndividual.textBody);
	return {
		title: state.currentIndividual.title,
		textBody: state.currentIndividual.textBody
	};
};

export default connect(
	mapStateToProps,
	{ getIndividual, editNote }
)(EditNote);
