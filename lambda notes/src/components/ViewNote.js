import React from "react";

function ViewNote(props) {
	console.log(props.notes);
	return (
		<div className="page-wrapper">
			<div>
				<div>Edit</div>
				<div>Delete</div>
			</div>
			{props.notes.map(note => {
				if (props.match.params.id === note._id) {
					console.log(note.title);
					return (
						<div>
							<p className="ViewNoteTitle">{note.title}</p>
							<p className="ViewNoteText">{note.textBody}</p>
						</div>
					);
				}
			})}
		</div>
	);
}

export default ViewNote;