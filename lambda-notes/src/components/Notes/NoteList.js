import React from 'react';
import PropTypes from 'prop-types';

function NotesList(props) {
	if (!props.notesList || !props.notesList.length) {
		return <h1>No Notes data! Go fetch!!</h1>;
	}
	console.log(props);
	return (
		<div className="notes-wrapper">
			{props.notesList.map((note) => (
				<div className="note-card" key={note._id}>
					<h3 onClick={() => props.history.push(`/notes/${note._id}/`)}>
						{note.title}
					</h3>
					<p>{note.textBody}</p>
				</div>
			))}
		</div>
	);
}

NotesList.propTypes = {
	notesList: PropTypes.array,
	history: PropTypes.shape({
		push: PropTypes.func,
	}),
};

export default NotesList;
