import React from "react";
import { Link } from "react-router-dom";

function Note(props) {
	return (
		<Link className="note-link" to={`/note/${props.id}`}>
			<div className="note">
				<div className="title">
					<h2>{props.title}</h2>
				</div>
				<hr />
				<div className="body">
					<p className="text-body">{props.body}</p>
				</div>
			</div>
		</Link>
	);
}

export default Note;
