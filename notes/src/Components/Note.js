import React from "react";

const Note = props => {
	const note = props.notes.find(note => note.id == props.match.params.id);
	return (
		<div>
			<h4>{note.title}</h4>
			<p>{note.text}</p>
		</div>
	);
};

export default Note;
