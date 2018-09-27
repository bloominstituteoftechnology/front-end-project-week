// Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
// Actions
import { addNote } from '../actions';
// Styles
import {
	PageContainer,
	PageTitle,
	StatusMessage,
	StyledInput,
	StyledTextArea,
	SubmitInput
} from '../styles/SharedStyles';

class NewNotePage extends Component {
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

		this.props.addNote({
			// tags: [],
			title: this.state.title,
			textBody: this.state.textBody
		});
		this.setState({
			title: '',
			textBody: ''
		});
	};

	render() {
		return (
			<PageContainer>
				<PageTitle>Create New Note:</PageTitle>
				{this.props.addingNote ? (
					<StatusMessage>Adding note...</StatusMessage>
				) : !this.props.error ? (
					<form className="new-note-form" onSubmit={this.submitHandler}>
						<StyledInput
							name="title"
							type="text"
							placeholder="Note Title"
							value={this.state.title}
							onChange={this.changeHandler}
							required
						/>
						<StyledTextArea
							name="textBody"
							type="text"
							placeholder="Note Content"
							value={this.state.textBody}
							onChange={this.changeHandler}
							required
						/>
						<SubmitInput type="submit" value="Save" />
					</form>
				) : (
					<StatusMessage error>{this.props.error}</StatusMessage>
				)}
			</PageContainer>
		);
	}
}

const mapStateToProps = state => ({
	addingNote: state.notesReducer.addingNote,
	error: state.notesReducer.error
});

export default connect(
	mapStateToProps,
	{ addNote }
)(NewNotePage);
