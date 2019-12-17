import React from 'react';
import { NavLink } from 'react-router-dom';
import { Card } from '@blueprintjs/core';

import '../css/note.css';

const Note = props => {
	return (
		<div className="allNotes">
			<h3 className="notePageTitle">Your Notes:</h3>
			{props.notes.map((note, index) => (
				<Card className="note" key={index}>
					<NavLink className="noteTitle" to={`/notes/${note.id}`}>
						<h4 className="noteTitle">{note.title}</h4>
					</NavLink>
					<p className="noteText">{note.content}</p>
				</Card>
			))}
		</div>
	);
};

export default Note;
