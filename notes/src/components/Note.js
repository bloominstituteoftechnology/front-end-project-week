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
    word-wrap: break-word;
`;

const Note = props => {
	let noteLength = 140;
	let smallText = false;
	if (props.note.title.length > noteLength) smallText = true;
	return (
		<NoteLink to={`/note/${props.note._id}`} as={Link}>
			<NoteTitle>
				{props.note.title.length > noteLength
					? props.note.title.slice(0, noteLength).concat("...")
					: props.note.title}
			</NoteTitle>
			<p>
				{smallText
					? props.note.textBody.length > 20
						? props.note.textBody.slice(0, 20).concat("...")
						: props.note.textBody
					: props.note.textBody.length < noteLength
					? props.note.textBody
					: props.note.textBody
							.slice(0, noteLength - props.note.title.length)
							.concat("...")}
			</p>
		</NoteLink>
	);
};
export default Note;