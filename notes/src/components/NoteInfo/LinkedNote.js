import React from 'react';
import axios from 'axios';
import './switchAnimate.css';

import { LinkedContainer, NoteLinks, SubmitContainerL, InputTitleL, InputContentL, DivClickL, Overlay, DeleteBTN, NoBTN, ButtonFlex, Author } from './css'

class LinkedNote extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			note: null,
			toggleEdit: true,
			toggleDelete: true,
			toggleLinks: true,
			editTitle: '',
			editContent: '',
			deleteDiv: 'deleteDivIn',
		};
	}

	componentDidMount(){
		console.log(this.props.match.params.id)
		const noteId = this.props.match.params.id;
		this.fetchNote(noteId);
	}

	fetchNote = id => {
		axios
			.get(`http://localhost:5000/api/notes/${id}`)
			.then(response => {
				this.setState( () => ({note: response.data}))
			})
			.catch(error => {
				console.log(error);
			})
	}

	toggle = () => {
		this.setState({
			toggleEdit: !this.state.toggleEdit,
			toggleLinks: !this.state.toggleLinks,
		})
	}

	deleteIn = () => {
		this.setState({
			toggleDelete: !this.state.toggleDelete,
			deleteDiv: 'deleteDivIn',
		})
	}

	deleteOut = () => {
		this.setState({
			deleteDiv: 'deleteDivOut',
		})
		setTimeout(() => {this.setState({toggleDelete: !this.state.toggleDelete})}, 600);
	}

	editNote = () => {
		const editedNote = {
			title: this.state.editTitle,
			text: this.state.editContent,
		}
		axios
			.put(
				`http://localhost:5000/notes/${this.props.match.params.id}`,
				editedNote
			)
			.then(response => {
				console.log("put response: ", response);
				this.setState({
					editTitle: '',
					editContent: '',
				})
				this.fetchNote(this.props.match.params.id);
				this.props.handleData(response.data);
			})
			.catch(error => console.log(error))
			this.toggle()
	}

	deleteNote = () => {
		axios
			.delete(
				`http://localhost:5000/notes/${this.props.match.params.id}`
			)
			.then(response => {
				console.log(response);
				this.props.handleData(response.data);
			})
			.catch(err => console.log(err));
			this.props.history.push("/notes")
	}


	handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }

	render() {
		if (!this.state.note) {
		 return <div>Loading note information...</div>;
		}
		const { title, text, author } = this.state.note;

		return (
			<LinkedContainer>
				{this.state.toggleDelete ? (
					null
					) :
					<Overlay>
						<div className={this.state.deleteDiv}>
							<h3>Are you sure you want to delete this?</h3>
								<ButtonFlex>
									<DeleteBTN onClick={this.deleteNote}>Delete</DeleteBTN><NoBTN onClick={this.deleteOut}>No</NoBTN>
								</ButtonFlex>
						</div>
					</Overlay>
				}

					{this.state.toggleLinks ? (
						<NoteLinks>
							<p onClick={this.toggle}><u>edit</u></p>
							<p onClick={this.deleteIn}><u>delete</u></p>
						</NoteLinks> ) : null
					}

					{this.state.toggleEdit ? (
					<div>
						<h2>{title}</h2>
						<p>{text}</p>
						<Author>posted by - {author}</Author>
					</div>
					) :

					<SubmitContainerL>
						<h3>Edit Note:</h3>
						<form>
							<InputTitleL
								type="text"
								placeholder='Note Title'
								onChange={this.handleChange}
								name="editTitle"
								value={this.state.editTitle}
							/>
							<InputContentL
								type="text"
								placeholder='Note Content'
								onChange={this.handleChange}
								name="editContent"
								value={this.state.editContent}
							/>
						</form>

						<DivClickL onClick={this.editNote}>Update</DivClickL>
					</SubmitContainerL>
				}
			</LinkedContainer>
		)
	}
}

export default LinkedNote;
