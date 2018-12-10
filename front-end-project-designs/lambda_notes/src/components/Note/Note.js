import React from "react";
import styled from "styled-components";
import axios from 'axios';

const NoteCardContainer = styled.div`
	background-color: #ffffff;
	color: #20272d;
	/* width: 10%; */
	width: 180px;
	/* min-width: 150px; */
    min-height: 150px;
    margin: 20px;
	padding: 15px;
	border: 1px solid #dbdbdb;
	border: 2px solid red;
`;

const NoteCardTitle = styled.h4`
	color: #20272d;
	border-bottom: 1px solid #20272d;
	margin: 0 0 5px;
`;

const NoteCardContent = styled.div``;

class Note extends React.Component {
	constructor(){
		super();
		this.state = {
			note: null
		}
	}

	componentDidMount() {
		console.log('Note params', this.props)
		axios
			.get(`https://fe-notes.herokuapp.com/note/get/${this.props.match.params.noteId}`)
			.then( 
				res => {
					console.log('Note > Server Response: ', res)
					this.setState({
						note: res.data
					})
					console.log('Note State', this.state.note.title)
				}
				
			)
			.catch(
				err => console.log('Note > Server Error: ', err)
			)
			
	}
    
	render() {
		const note = this.state.note;
		if (!note) return <h2>Loading...</h2>
		return (
			<NoteCardContainer
				history={this.props.history}
				notes={this.props.notes}
			>
				<NoteCardTitle>{this.state.note.title}</NoteCardTitle>
				<NoteCardContent>{this.state.note.textBody}</NoteCardContent>
			</NoteCardContainer>
			
		);
		
	}
};

// Note.defaultProps = {
//     title: '',
//     tags: '',
//     textBody: '',
// }

export default Note;
