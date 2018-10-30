import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

class NewNote extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			noteTitle: '',
			noteContent: ''
		};
	}

	changeHandler = (e) => {
		e.preventDefault();
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	saveNote = (e) => {
		const { noteTitle, noteContent } = this.state;
		e.preventDefault();
		if (this.state.noteTitle === '' || this.state.noteContent === '') {
			alert('Please fill out both fields');
		} else {
			axios
				.post('https://fe-notes.herokuapp.com/note/create', { title: noteTitle, textBody: noteContent })
				.then((res) => {
					console.log(res);
					this.setState({
						notes: res.data,
						noteTitle: '',
						noteContent: ''
					});
				})
				.catch((err) => console.log(err));
		}
		this.props.history.push('/');
	};

	render() {
		console.log(this.props.history);
		return (
			<StyledContainer>
				<h1>Create New Note:</h1>
				<StyledForm onSubmit={this.saveNote}>
					<StyledInput
						type="text"
						name="noteTitle"
						value={this.state.noteTitle}
						onChange={this.changeHandler}
						placeholder="Note Title"
					/>
					<StyledInput
						type="text"
						name="noteContent"
						value={this.state.noteContent}
						onChange={this.changeHandler}
						placeholder="Note Title"
					/>
					<StyledButton>Save</StyledButton>
				</StyledForm>
			</StyledContainer>
		);
	}
}

export default NewNote;

export const StyledContainer = styled.div`
	margin-left: 325px;
	padding: 20px;

	height: 100%;
	width: 100%;
`;

export const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	margin: 10px;
`;

export const StyledInput = styled.textarea`
	padding: 10px;
	margin: 10px;
	${(props) =>
		props.name === 'noteTitle'
			? `
 width: 300px;
 border-radius: 4px;
 font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;`
			: `width: 400px;
       height: 400px;
       border-radius: 4px;
       font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
       `};
`;

export const StyledButton = styled.button`
	padding: 6px 10px;
	margin: 20px;
	border: none;
	border-radius: 3px;
	color: white;
	width: 100px;
	background-color: #2196f3;
	cursor: pointer;
`;
