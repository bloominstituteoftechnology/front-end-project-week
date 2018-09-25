import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

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

const Author = styled.p`
	margin-top: 10px;
	text-transform:capitalize;
`;

const Note = (props) => {
	return (
		<NoteContainer
				draggable={props.draggable}
        onDragStart={props.onDragStart({ id: props.note.id })}
        onDragOver={props.onDragOver({ id: props.note.id })}
        onDrop={props.onDrop({ id: props.note.id })}
        >
			<Link to={`/notes/${props.note.id}`}>
				<NoteTitle>{props.note.title}</NoteTitle>
				<NoteHR />
					<WrapP>{props.note.text}</WrapP>
					<Author> Posted by - {props.note.author}</Author>
			</Link>
		</NoteContainer>
	)
}

export default Note;


