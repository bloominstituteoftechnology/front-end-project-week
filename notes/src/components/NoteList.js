import React from 'react';
import styled from 'styled-components';
import Note from './Note';

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
						<Note
							note={note}
							key={note.id}
				      draggable="true"
				      onDragStart={props.handleDragStart}
				      onDragOver={props.handleDragOver}
				      onDrop={props.handleDrop}
						/>
				))}
			</NotesContainer>
		</MainContainer>
	)
}

export default NoteList;

//<div>{props.dataList.map((post) => <Post post={post} key={post.id} id={post.id} UP={props.upLikes} />)}</div>
