// Dependencies
import React from 'react';
import { Link } from 'react-router-dom';
// Styles
import '../styles/Note.css';

const Note = props => {
	return (
		<li className="NoteListPage">
			<Link to={`/${props.note._id}`} className="note-link">
				<h4 className="note-title">{props.note.title}</h4>
				{/* todo: clamp preview text */}
				<p className="note-preview">{props.note.textbody}</p>
			</Link>
		</li>
	);
};

export default Note;
