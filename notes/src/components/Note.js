import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NoteLink = styled.div`
	display: block;
	text-decoration: none;
    color: black;
    width: 180px;
	height: 195px;
	padding: 15px 20px;
	:hover {
		cursor: pointer;
	}
`;

const NoteTitle = styled.h3`
	padding-bottom: 10px;
	border-bottom: 1px solid darkgrey;
	margin-bottom: 5px;
`;

const Note = props => {
	return (
		<NoteLink to={`/note/${props.note._id}`} as={Link}>
			<NoteTitle>{props.note.title}</NoteTitle>
			<p>
				{props.note.textBody.length > 130
					? props.note.textBody.slice(0, 129).concat("...")
					: props.note.textBody}
			</p>
		</NoteLink>
	);
};
export default Note;
