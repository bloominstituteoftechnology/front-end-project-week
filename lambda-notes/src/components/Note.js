// React
import React from 'react';
import { Link } from 'react-router-dom';

const Note = props => {
	return(
		<div className = 'note'>
			<h3><Link to = { `/note/${ props.index }` }>{ props.note.noteTitle.length > 11 ? props.note.noteTitle.slice(0, 11) + '...' : props.note.noteTitle }</Link></h3>
			<hr />
			<p>{ props.note.noteContent.length > 85 ? props.note.noteContent.slice(0, 85) + '...' : props.note.noteContent }</p>
		</div>
	);
}

export default Note;
