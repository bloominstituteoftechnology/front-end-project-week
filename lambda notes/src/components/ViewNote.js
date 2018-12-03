import React from "react";

function ViewNote(props) {
	console.log(prop.notes);
	return (
		<div className="page-wrapper">
			<div>
				<div>Edit</div>
				<div>Delete</div>
			</div>
			{props.notes.map(note => {
				if (props.match.parms.id === note._id) {
					console.log(note.title);
					return (
						<div>
							<p className="ViewNoteTitle">{note.title}</p>
							<p className="ViewNoteText">{note.text}</p>
						</div>
					);
				}
			})}
		</div>
	);
}

export default ViewNote;