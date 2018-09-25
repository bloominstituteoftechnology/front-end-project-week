// React
import React from 'react';

const Note = props => {
	return(
		<div onClick = { () => props.history.push(`/note/${ props.note._id }`) } className = 'note'>
			<h3>{ props.note.title.length > 11 ? props.note.title.slice(0, 11) + '...' : props.note.title }</h3>
			<hr />
			<p>{ props.note.textBody.length > 85 ? props.note.textBody.slice(0, 85) + '...' : props.note.textBody }</p>
		</div>
	);
}

export default Note;
