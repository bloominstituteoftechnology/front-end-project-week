import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const NotesContainer = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	background-color: rgb(230,230,230);
	border-bottom: 1px solid lightgrey;
	width: 75%;
	padding: 2%;
`;

const NoteCardsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
	background-color: rgb(230,230,230);
`;

const NoteCard = styled.div`
	border: 1px solid grey;
	width: 30%;
	height: 150px;
	margin-right: 3.3%;
	margin-bottom: 3.3%;
	padding: 2%;
	background-color: white;
	&:hover {
		cursor:pointer;
	}
`;

const NoteCardHeader = styled.div`
	font-size: 1.6rem;
	color: black;
	border-bottom: 1px solid grey;
	padding-bottom: 5px;
	margin-bottom: 10px;
	font-weight: bold;
`;

const HeaderTwo = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
  display: flex;
  justify-content: row-start;
  align-items: flex-end;
  height: 60px;
`;




class Notes extends React.Component {

	constructor(props) {
		console.log('notes props below');
		console.log(props);
		super(props);
	    this.state = {
	    	notes: props.notes,
	    	fetchingNotes: props.fetchingNotes
	    };
	  }

	changeHandler = event => {
	    this.props.changeView(
	    	{
	    		id: event.target.key,
	    		currentView: "note"
	    	}
	    );
	};

	render() {

		if(this.state.fetchingNotes){
	      return <h4>Loading notes...</h4>
	    }

		return(
			<NotesContainer>
				<HeaderTwo>Your Notes:</HeaderTwo>
				<NoteCardsContainer>
					{this.state.notes.map(note => (
						<NoteCard key={note.id} onClick={this.changeHandler} >
							<NoteCardHeader>{note.title}</NoteCardHeader>
							<p>{note.textBody}</p>
						</NoteCard>
					))}
				</NoteCardsContainer>
			</NotesContainer>
		);
	}
}

export default Notes;