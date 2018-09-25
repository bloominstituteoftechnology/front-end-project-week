// Dependencies
import React from 'react';
import { Link } from 'react-router-dom';
// Styles
import '../styles/Note.css';

const Note = props => {
	return (
		<li className="NoteListPage">
			<Link to={`/note/${props.note._id}`} className="note-link">
				<h3 className="note-title">{props.note.title}</h3>
				{/* todo: clamp preview text */}
				<p className="note-preview">{props.note.textBody}</p>
			</Link>
		</li>
	);
};

export default Note;
