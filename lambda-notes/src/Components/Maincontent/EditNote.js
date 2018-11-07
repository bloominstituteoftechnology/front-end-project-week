import React from 'react';
import Axios from 'axios';
import styled from 'styled-components';

class EditNote extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			noteTitle: '',
			noteContent: ''
		};
	}

	componentDidMount() {
		Axios.get(`https://fe-notes.herokuapp.com/note/get/${this.props.match.params.id}`)
			.then((res) =>
				this.setState({
					note: {
						_id: res.data._id,
						title: res.data.title,
						textBody: res.data.textBody
					}
				})
			)
			.catch((err) => console.log(err));
	}

	changeHandler = (e) => {
		e.preventDefault();
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	editNote = () => {
		const { noteTitle, noteContent } = this.state;
		if (noteTitle === '' || noteContent === '') {
			alert('Please fill out both fields');
		} else {
			Axios.put(`https://fe-notes.herokuapp.com/note/edit/${this.props.match.params.id}`, {
				title: noteTitle,
				textBody: noteContent
			})
				.then(window.location.reload())
				.then(this.props.history.push('/'));
		}
	};

	componentWillUnmount() {
		this.setState({
			noteTitle: '',
			noteContent: '',
			submitted: false
		});
	}

	render() {
		return (
			<StyledContainer>
				<h1>Edit Your Note:</h1>
				<StyledForm onSubmit={this.editNote}>
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

export default EditNote;

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
