import React from "react";
import { Link } from "react-router-dom";

const Notes = ({ notes }) => (
	<div>
		{notes.map(note => (
			<Link to={`/notes/${note.id}`}>
				<h4>{note.title}</h4>
				<p>{note.text}</p>
			</Link>
		))}
	</div>
);
export default Notes;
