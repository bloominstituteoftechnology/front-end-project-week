import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const NotesContainer = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 14px;
	flex-wrap: wrap;
`;

const MainContainer = styled.div`
	padding: 47px 22px 47px 170px
	> h2 {
		font-size: 1.3rem;
		font-weight: bold;
		color: #4b4b4b;
		margin-left: 1.5%;
	}
`;

const NoteContainer = styled.div`
	border: solid black 1px;
	width: 26%;
	margin-right: 2%;
	margin-bottom: 10px;
	padding: 2%;
	background-color: white;
`;

const WrapP = styled.p`
	overflow-wrap: break-word;
`;

const NoteTitle = styled.h3`
	font-size: 1.2rem;
	font-weight: bold;
	overflow-wrap: break-word;
`;

const NoteHR = styled.hr`
	border: none;
	height: 2px;
	color: #818181;
	background-color: #818181;
`;

const Author = styled.p`
	margin-top: 10px;
	text-transform:capitalize;
`;

const SearchInput = styled.input`
  text-align: center;
  padding: .2%;
  font-size: 1.2rem;
  color: grey;
  margin-left: 31%;
  width: 200px;
`;


const NoteList = (props) => {
	return (
		<MainContainer>
			<form onSubmit={props.searchNotes}>
				<SearchInput onChange={props.handleInput} placeholder="Search by Author" value={props.input} />
			</form>
			<h2>Your Notes:</h2>
			<NotesContainer>
				{props.notes.map(note  => (
					<NoteContainer key={note.id}>
						<Link to={`/notes/${note.id}`}>
							<NoteTitle>{note.title}</NoteTitle>
							<NoteHR />
								<WrapP>{note.text}</WrapP>
								<Author> Posted by - {note.author}</Author>
						</Link>
					</NoteContainer>
				))}
			</NotesContainer>
		</MainContainer>
	)
}

export default NoteList;
