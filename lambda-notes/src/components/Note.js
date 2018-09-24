// React
import React from 'react';

const Note = props => {
	return(
		<div onClick = { () => props.history.push(`/note/${ props.index }`) } className = 'note'>
			<h3>{ props.note.noteTitle.length > 11 ? props.note.noteTitle.slice(0, 11) + '...' : props.note.noteTitle }</h3>
			<hr />
			<p>{ props.note.noteContent.length > 85 ? props.note.noteContent.slice(0, 85) + '...' : props.note.noteContent }</p>
		</div>
	);
}

export default Note;
