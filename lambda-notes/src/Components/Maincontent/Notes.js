import React from 'react';

const Notes = (props) => {
	return (
		<div className="note-wrapper">
			{props.notes.map((note) => {
				return (
					<div className="note-container" key={note.id}>
						<h1>{note.title}</h1>
						<p>{note.textBody}</p>
						<p>{note.tags}</p>
					</div>
				);
			})}
		</div>
	);
};

export default Notes;
