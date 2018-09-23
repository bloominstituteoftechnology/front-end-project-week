// React
import React from 'react';

const NoteView = props => {
	return(
		<div>
			<p>Title: { props.note.noteTitle }</p>
			<p>Body: { props.note.noteBody }</p>
		</div>
	);
}

export default NoteView;
