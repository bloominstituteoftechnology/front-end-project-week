// Dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NoteLink = styled(Link)`
	width: 192px;
	height: 197px;
	text-decoration: none;
	color: black;
	padding: 10px 20px 0 16px;
	background: white;
	border: 1px solid #a5a5a5;
	margin: 0 16px 24px 0;
`;

const NoteTitle = styled.h3`
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	font-size: 1.8rem;
	font-weight: bold;
	padding-bottom: 6px;
	border-bottom: 1px solid #969696;
	margin-bottom: 6px;
`;

const NoteBody = styled.p`
	overflow: hidden;
	font-size: 1.3rem;
	line-height: 2.2rem;
`;

const truncate = (content, length) => {
	return content.length > length
		? `${content.slice(0, length - 3)} …`
		: content;
};

const Note = props => {
	return (
		<NoteLink to={`/note/${props.note._id}`}>
			<NoteTitle>{props.note.title}</NoteTitle>
			<NoteBody>{truncate(props.note.textBody, 140)}</NoteBody>
		</NoteLink>
	);
};

export default Note;
