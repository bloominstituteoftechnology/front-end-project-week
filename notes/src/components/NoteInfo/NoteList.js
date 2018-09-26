import React from 'react';
import styled from 'styled-components';
import Note from './Note';
import { NotesContainer, MainContainer, SearchInput } from './css'

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
