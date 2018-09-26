import React from 'react';
import axios from 'axios';
import { BGColor, SubmitContainer, InputTitle, InputContent, DivClick, Flexdiv} from './css';

class CreateNote extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			title: '',
			text: '',
			author: '',
			errorTitle: '',
			errorBody: '',
		};
	}

	createNote = () => {
		const note = {title: this.state.title, text: this.state.text, author: Object.keys(localStorage)};

		let nI1 = note.title.lengh;
		let nI2 = note.text.length;

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
