import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const LinkedContainer = styled.div`
	padding: 40px 2% 0 170px;
  > div > h2 {
  	font-size: 1.3rem;
    font-weight: bold;
    color: #4b4b4b;
    margin-bottom: 22px;
  }
  > div > p {
  	font-size: 1.1rem;
  }
`;

const NoteLinks = styled.div`
	display: flex;
	position: absolute;
	top: 15px;
	right: 5%;
	> p {
		margin-right: 10px;
	}
`;

const SubmitContainer = styled.div`
	> h3 {
		margin-bottom: 15px;
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

const Overlay = styled.div`
	position: fixed;
	top: 16%;
  left: 32%;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background: rgba(129, 130, 131, 0.6);
  border: solid black 1px;
`;

const DeleteDive = styled.div`
	position: relative;
	top: 18%;
	left: 27%;
	border: solid black 1px;
	width: 300px;
	text-align: center;
	padding: 5%;
	background-color: white;
	opacity: 1;
	z-index: 2
`;

const DeleteBTN = styled.button`
  margin-top: 15px;
  padding: 3%;
  width: 120px;
  background-color: red;
  color: white;
  border: solid black .5px;
  &:hover {
  	background-color: #b60707;
  	cursor: pointer;
  }
`;

const NoBTN = styled.button`
	margin-top: 15px;
	padding: 3%;
  width: 120px;
  background-color: #4aacac;
  border: solid #005778 .5px;
  color: white;
  &:hover {
		background-color: #2c6666;
		cursor: pointer;
	}
`;

const ButtonFlex = styled.div`
	display: flex;
  justify-content: space-evenly;
`;

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
		};
	}

	componentDidMount(){
		console.log(this.props.match.params.id)
		const noteId = this.props.match.params.id;
		this.fetchNote(noteId);
		console.log(this.props)
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

	toggle1 = () => {
		this.setState({
			toggleEdit: !this.state.toggleEdit,
			toggleLinks: !this.state.toggleLinks,
		})
	}

	toggle2 = () => {
		this.setState({
			toggleDelete: !this.state.toggleDelete,
		})
	}

	toggle3 = () => {
		this.setState({
			toggleLinks: !this.state.toggleLinks,
		})
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
			this.toggle1()
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
			this.props.history.push("/")
	}


	handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }

	render() {
		if (!this.state.note) {
		 return <div>Loading note information...</div>;
		}
		const { title, text } = this.state.note;

		return (
			<LinkedContainer>
				{this.state.toggleDelete ? (
					null
					) :
					<Overlay>
						<DeleteDive>
							<h3>Are you sure you want to delete this?</h3>
								<ButtonFlex>
									<DeleteBTN onClick={this.deleteNote}>Delete</DeleteBTN><NoBTN onClick={this.toggle2}>No</NoBTN>
								</ButtonFlex>
						</DeleteDive>
					</Overlay>
				}

					{this.state.toggleLinks ? (
						<NoteLinks>
							<p onClick={this.toggle1}><u>edit</u></p>
							<p onClick={this.toggle2}><u>delete</u></p>
						</NoteLinks> ) : null
					}

					{this.state.toggleEdit ? (
					<div>
						<h2>{title}</h2>
						<p>{text}</p>
					</div>
					) :

					<SubmitContainer>
						<h3>Edit Note:</h3>
						<form>
							<InputTitle
								type="text"
								placeholder='Note Title'
								onChange={this.handleChange}
								name="editTitle"
								value={this.state.editTitle}
							/>
							<InputContent
								type="text"
								placeholder='Note Content'
								onChange={this.handleChange}
								name="editContent"
								value={this.state.editContent}
							/>
						</form>

						<DivClick onClick={this.editNote}>Update</DivClick>
					</SubmitContainer>
				}
			</LinkedContainer>
		)
	}
}

export default LinkedNote;
