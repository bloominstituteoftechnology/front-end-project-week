import React from 'react'
import Note from './note'
import "../css/note.css"

const NoteList = props => {
	return (
		<div className="note-list">
			<ul className="ul">
				<Note
					list={props.list}
					id={props.id}
					toggleComplete={props.toggleComplete}
				/>
			</ul>
		</div>
	);
};

export default NoteList;