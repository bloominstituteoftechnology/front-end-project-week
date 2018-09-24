import React from "react";

function Note(props) {
	return (
		<div className="note">
			<div className="title">{props.title}</div>
			<hr />
			<div className="body">{props.body}</div>
		</div>
	);
}

export default Note;
