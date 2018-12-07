import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NoteLink = styled.div`
	border: 1px solid blue;
	display: block;
	height: 100%;
	width: 100%;
	text-decoration: none;
	:hover {
		cursor: pointer;
	}
`;

const Note = props => {
	return (
		<NoteLink to={`/note/${props.note._id}`} as={Link}>
			<h2>{props.note.title}</h2>
			<p>
				{props.note.textBody.length > 100
					? props.note.textBody.slice(0, 99).concat("...")
					: props.note.textBody}
			</p>
		</NoteLink>
	);
};
export default Note;
