// React
import React from 'react';

const Note = props => {
	return(
		<div className = 'note'>
			<h3>{ props.note.noteTitle }</h3>
			<hr />
			<p>{ props.note.noteContent }</p>
		</div>
	);
}

export default Note;
