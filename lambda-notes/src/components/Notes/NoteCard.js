import React from 'react';

const NoteCard = (props) => {
	return (
		<div className="note-card">
			<h2>{props.note.title}</h2>
			<hr />
			<div className="note-card-text">{props.note.text}</div>
		</div>
	);
};

export default NoteCard;
