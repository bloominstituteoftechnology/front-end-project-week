// React
import React from 'react';

const NoteView = props => {
	return(
		<div className = 'note'>
			<p>Title: { props.note.noteTitle }</p>
			<p>Body: { props.note.noteBody }</p>
		</div>
	);
}

export default NoteView;
