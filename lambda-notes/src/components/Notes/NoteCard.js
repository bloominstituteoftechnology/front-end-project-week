import React from 'react';
import { Link } from 'react-router-dom';

const NoteCard = (props) => {
	return (
		<div className="note-card">
			<h2>{props.title}</h2>
			<hr />
			<div className="note-card-text">{props.textBody}</div>
		</div>
	);
};

export default NoteCard;
