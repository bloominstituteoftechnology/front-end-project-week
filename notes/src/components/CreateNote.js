import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const BGColor = styled.div`
  background-color: #ebebeb;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const SubmitContainer = styled.div`
	padding-left: 170px;
	> h3 {
		margin-bottom: 15px;
		padding-top: 40px;
		padding-bottom: 7px;
		font-size: 1.3rem;
		font-weight: bold;
	}
	> form {
		display: flex
		flex-direction:column
		width: 60%;
		margin-bottom: 15px;
`;


const InputTitle = styled.input`
	width: 200px;
	margin-bottom: 10px;
	padding: 1%;
`;

const InputContent = styled.textarea`
	width: 450px;
	padding: 1%;
	height: 200px;
`;

const DivClick = styled.button`
	text-align: center;
	padding: 1%;
	border: solid #005778 .5px;
	background-color: #4aacac;
	color: white;
	width: 120px;
	&:hover {
		background-color: #2c6666;
		cursor: pointer;
	}
`;

const Flexdiv = styled.div`
	display: flex;
	align-items: center;
	> div {
		margin-left: 12%;
	}
`;

class CreateNote extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			title: '',
			text: '',
			errorTitle: '',
			errorBody: '',
		};
	}

	createNote = () => {
		const note = {title: this.state.title, text: this.state.text}
		const nI1 = note.title.length;
		const nI2 = note.text.length;

		if (nI1 < 6 && nI2 < 20){
			this.setState({
				errorTitle: 'note title must be over 6 characters',
				errorBody: 'note content must be over 20 characters',
			})
			return
		} else if (nI1 < 6){
			this.setState({errorTitle: 'note title must be over 6 characters', errorBody: ''})
			return;
		} else if (nI2 < 20){
			this.setState({errorBody: 'note content must be over 20 characters', errorTitle: ''})
			return
		}

		axios
			.post("http://localhost:5000/notes", note)
			.then(response => {
				console.log("post response: ", response);
				this.setState({title: '', text: ''})
				this.props.handleData(response.data);
			})
			.catch(error => console.log(error));
			this.props.history.push("/notes")
	}

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }

	render(){
		console.log(this.props)
		return (
			<BGColor>
				<SubmitContainer>
					<h3>Create New Note:</h3>
					<form>
						<InputTitle
							type="text"
							placeholder='Note Title'
							onChange={this.handleChange}
							name="title"
							value={this.state.title}
							maxLength="30"
						/>
						<InputContent
							type="text"
							placeholder='Note Content'
							onChange={this.handleChange}
							name="text"
							value={this.state.text}
							maxLength="229"
						/>
					</form>
					<Flexdiv>
						<DivClick onClick={this.createNote}>Save</DivClick>
						<div>
							<p>{this.state.errorTitle}</p>
							<p>{this.state.errorBody}</p>
						</div>
					</Flexdiv>
				</SubmitContainer>
			</BGColor>
		)
	}
}

export default CreateNote;
