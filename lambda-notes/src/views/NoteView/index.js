// React
import React from 'react';
import { Link } from 'react-router-dom';

const NoteView = props => {
	return(
		<div className = 'main-content'>
			<div className = 'note-view'>
				<div className = 'edit-delete-wrapper'>
					<span><Link to = { `/edit/${ props.id }` }>edit</Link></span>
					<span>delete</span>
				</div>

				<h2>{ props.note.noteTitle }</h2>

				{ props.note.noteContent.split('\n').map((str, i) => <p key = { i }>{ str }</p>) }
			</div>
		</div>
	);
}

export default NoteView;
